const mongoose = require("mongoose");
const { Career } = require("../models");
const AppError = require("../utils/AppError");
const { validateCareerContent, validateCareerDeletion } = require("../validators");

const ALLOWED_CATEGORIES = [
  "development",
  "data",
  "ai_ml",
  "devops_cloud",
  "cybersecurity",
  "design",
];

const ALLOWED_DIFFICULTIES = ["beginner", "intermediate", "advanced"];
const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/**
 * Retrieve a list of career paths supporting safe query filtering & pagination.
 * Students only receive published careers (`isPublished: true`).
 */
const getAllCareers = async ({
  userRole,
  category,
  difficulty,
  search,
  page = 1,
  limit = 50,
  includeUnpublished = false,
}) => {
  const query = {};

  // Rule 13 & 14: Enforce student visibility boundaries server-side
  if (userRole !== "admin" || includeUnpublished !== "true") {
    query.isPublished = true;
  }

  if (category) {
    if (!ALLOWED_CATEGORIES.includes(category)) {
      throw new AppError(`Invalid category filter: '${category}'`, 400);
    }
    query.category = category;
  }

  if (difficulty) {
    if (!ALLOWED_DIFFICULTIES.includes(difficulty)) {
      throw new AppError(`Invalid difficulty filter: '${difficulty}'`, 400);
    }
    query.difficulty = difficulty;
  }

  if (search && typeof search === "string" && search.trim().length > 0) {
    const sanitizedSearch = search.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    query.$or = [
      { name: { $regex: sanitizedSearch, $options: "i" } },
      { shortDescription: { $regex: sanitizedSearch, $options: "i" } },
      { description: { $regex: sanitizedSearch, $options: "i" } },
    ];
  }

  const pageNum = Math.max(1, parseInt(page, 10) || 1);
  const limitNum = Math.min(100, Math.max(1, parseInt(limit, 10) || 50));
  const skip = (pageNum - 1) * limitNum;

  const [careers, total] = await Promise.all([
    Career.find(query)
      .populate("requiredSkillIds", "_id name slug category difficulty")
      .populate("optionalSkillIds", "_id name slug category difficulty")
      .sort({ name: 1 })
      .skip(skip)
      .limit(limitNum),
    Career.countDocuments(query),
  ]);

  return {
    careers,
    pagination: {
      total,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.ceil(total / limitNum) || 1,
    },
  };
};

/**
 * Retrieve a single career path by URL slug.
 * Students cannot access unpublished careers (returns 404).
 */
const getCareerBySlug = async ({ slug, userRole }) => {
  if (!slug || typeof slug !== "string" || !SLUG_REGEX.test(slug.trim())) {
    throw new AppError("Invalid Career slug format", 400);
  }

  const query = { slug: slug.trim().toLowerCase() };
  if (userRole !== "admin") {
    query.isPublished = true;
  }

  const career = await Career.findOne(query)
    .populate("requiredSkillIds", "_id name slug category difficulty")
    .populate("optionalSkillIds", "_id name slug category difficulty")
    .populate("roadmap.phases.steps.skillIds", "_id name slug category difficulty")
    .populate("roadmap.phases.steps.projects.skillIds", "_id name slug category difficulty");

  if (!career) {
    throw new AppError("Career not found", 404);
  }

  return career;
};

/**
 * Create a new canonical Career path (Admin only).
 */
const createCareer = async (careerData) => {
  const { name, slug, category, shortDescription, description, difficulty } = careerData;

  if (!slug || !SLUG_REGEX.test(slug.trim().toLowerCase())) {
    throw new AppError("Slug must contain only lowercase alphanumeric characters and single hyphens", 400);
  }

  const formattedSlug = slug.trim().toLowerCase();

  // Check duplicate slug
  const existingCareer = await Career.findOne({ slug: formattedSlug });
  if (existingCareer) {
    throw new AppError("Career with this slug already exists", 409);
  }

  // C4 Business Rule Validation (Skill reference existence, skill overlap, roadmap skill check)
  await validateCareerContent(careerData);

  const career = await Career.create({
    ...careerData,
    slug: formattedSlug,
  });

  return career.populate("requiredSkillIds optionalSkillIds", "_id name slug category difficulty");
};

/**
 * Update an existing Career path (Admin only).
 */
const updateCareer = async (careerId, updateData) => {
  if (!mongoose.Types.ObjectId.isValid(careerId)) {
    throw new AppError("Invalid Career ID format", 400);
  }

  const career = await Career.findById(careerId);
  if (!career) {
    throw new AppError("Career not found", 404);
  }

  if (updateData.slug && updateData.slug.trim().toLowerCase() !== career.slug) {
    const formattedSlug = updateData.slug.trim().toLowerCase();
    if (!SLUG_REGEX.test(formattedSlug)) {
      throw new AppError("Slug must contain only lowercase alphanumeric characters and single hyphens", 400);
    }
    const duplicateSlug = await Career.findOne({ slug: formattedSlug, _id: { $ne: careerId } });
    if (duplicateSlug) {
      throw new AppError("Career with this slug already exists", 409);
    }
    career.slug = formattedSlug;
  }

  // Merge & validate content against C4 business rules
  const mergedData = {
    ...career.toObject(),
    ...updateData,
  };
  await validateCareerContent(mergedData);

  Object.assign(career, updateData);
  await career.save();

  return career.populate("requiredSkillIds optionalSkillIds", "_id name slug category difficulty");
};

/**
 * Publish a Career path (Admin only).
 */
const publishCareer = async (careerId) => {
  if (!mongoose.Types.ObjectId.isValid(careerId)) {
    throw new AppError("Invalid Career ID format", 400);
  }

  const career = await Career.findById(careerId);
  if (!career) {
    throw new AppError("Career not found", 404);
  }

  // Ensure content is valid before publishing
  await validateCareerContent(career.toObject());

  career.isPublished = true;
  await career.save();

  return career;
};

/**
 * Unpublish a Career path (Admin only).
 * Keeps career in database, but hides it from student discovery.
 */
const unpublishCareer = async (careerId) => {
  if (!mongoose.Types.ObjectId.isValid(careerId)) {
    throw new AppError("Invalid Career ID format", 400);
  }

  const career = await Career.findById(careerId);
  if (!career) {
    throw new AppError("Career not found", 404);
  }

  career.isPublished = false;
  await career.save();

  return career;
};

/**
 * Delete a Career path (Admin only).
 * Protected by C4 deletion safety guard against active UserCareerProgress records.
 */
const deleteCareer = async (careerId) => {
  if (!mongoose.Types.ObjectId.isValid(careerId)) {
    throw new AppError("Invalid Career ID format", 400);
  }

  const career = await Career.findById(careerId);
  if (!career) {
    throw new AppError("Career not found", 404);
  }

  // C4 Business Rule 16: Rejects deletion if active student progress exists
  await validateCareerDeletion(careerId);

  await Career.findByIdAndDelete(careerId);
  return true;
};

module.exports = {
  getAllCareers,
  getCareerBySlug,
  createCareer,
  updateCareer,
  publishCareer,
  unpublishCareer,
  deleteCareer,
};

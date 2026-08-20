const mongoose = require("mongoose");
const { Skill } = require("../models");
const AppError = require("../utils/AppError");
const { validateSkillReferencesExist, validateSkillDeletion } = require("../validators");

const ALLOWED_CATEGORIES = [
  "programming",
  "web",
  "data",
  "ai_ml",
  "cloud_devops",
  "security",
  "soft_skills",
];

const ALLOWED_DIFFICULTIES = ["beginner", "intermediate", "advanced"];
const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/**
 * Retrieve a list of global skills supporting safe query filtering & pagination.
 */
const getAllSkills = async ({ category, difficulty, search, page = 1, limit = 50 }) => {
  const query = {};

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
      { description: { $regex: sanitizedSearch, $options: "i" } },
    ];
  }

  const pageNum = Math.max(1, parseInt(page, 10) || 1);
  const limitNum = Math.min(100, Math.max(1, parseInt(limit, 10) || 50));
  const skip = (pageNum - 1) * limitNum;

  const [skills, total] = await Promise.all([
    Skill.find(query)
      .populate("prerequisiteSkillIds", "_id name slug category difficulty")
      .sort({ name: 1 })
      .skip(skip)
      .limit(limitNum),
    Skill.countDocuments(query),
  ]);

  return {
    skills,
    pagination: {
      total,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.ceil(total / limitNum) || 1,
    },
  };
};

/**
 * Retrieve a single skill by its unique URL slug.
 */
const getSkillBySlug = async (slug) => {
  if (!slug || typeof slug !== "string" || !SLUG_REGEX.test(slug.trim())) {
    throw new AppError("Invalid Skill slug format", 400);
  }

  const skill = await Skill.findOne({ slug: slug.trim().toLowerCase() }).populate(
    "prerequisiteSkillIds",
    "_id name slug category difficulty"
  );

  if (!skill) {
    throw new AppError("Skill not found", 404);
  }

  return skill;
};

/**
 * Create a new global Skill (Admin only).
 */
const createSkill = async (skillData) => {
  const { name, slug, category, description, difficulty, prerequisiteSkillIds = [] } = skillData;

  if (!slug || !SLUG_REGEX.test(slug.trim().toLowerCase())) {
    throw new AppError("Slug must contain only lowercase alphanumeric characters and single hyphens", 400);
  }

  const formattedSlug = slug.trim().toLowerCase();

  // Check duplicate slug
  const existingSkill = await Skill.findOne({ slug: formattedSlug });
  if (existingSkill) {
    throw new AppError("Skill with this slug already exists", 409);
  }

  // Validate prerequisite references exist
  if (prerequisiteSkillIds && prerequisiteSkillIds.length > 0) {
    await validateSkillReferencesExist(prerequisiteSkillIds, "Prerequisite Skill");
  }

  const skill = await Skill.create({
    name,
    slug: formattedSlug,
    category,
    description,
    difficulty,
    prerequisiteSkillIds,
  });

  return skill.populate("prerequisiteSkillIds", "_id name slug category difficulty");
};

/**
 * Update an existing Skill (Admin only).
 */
const updateSkill = async (skillId, updateData) => {
  if (!mongoose.Types.ObjectId.isValid(skillId)) {
    throw new AppError("Invalid Skill ID format", 400);
  }

  const skill = await Skill.findById(skillId);
  if (!skill) {
    throw new AppError("Skill not found", 404);
  }

  const { name, slug, category, description, difficulty, prerequisiteSkillIds } = updateData;

  if (slug && slug.trim().toLowerCase() !== skill.slug) {
    const formattedSlug = slug.trim().toLowerCase();
    if (!SLUG_REGEX.test(formattedSlug)) {
      throw new AppError("Slug must contain only lowercase alphanumeric characters and single hyphens", 400);
    }
    const duplicateSlug = await Skill.findOne({ slug: formattedSlug, _id: { $ne: skillId } });
    if (duplicateSlug) {
      throw new AppError("Skill with this slug already exists", 409);
    }
    skill.slug = formattedSlug;
  }

  if (name !== undefined) skill.name = name;
  if (category !== undefined) skill.category = category;
  if (description !== undefined) skill.description = description;
  if (difficulty !== undefined) skill.difficulty = difficulty;

  if (prerequisiteSkillIds !== undefined) {
    if (Array.isArray(prerequisiteSkillIds)) {
      // Self-reference check
      const selfRef = prerequisiteSkillIds.some(
        (pId) => pId && pId.toString() === skillId.toString()
      );
      if (selfRef) {
        throw new AppError("Skill cannot reference itself as a prerequisite", 400);
      }

      if (prerequisiteSkillIds.length > 0) {
        await validateSkillReferencesExist(prerequisiteSkillIds, "Prerequisite Skill");
      }
      skill.prerequisiteSkillIds = prerequisiteSkillIds;
    }
  }

  await skill.save();
  return skill.populate("prerequisiteSkillIds", "_id name slug category difficulty");
};

/**
 * Delete a Skill (Admin only). Protected by C4 deletion safety guard.
 */
const deleteSkill = async (skillId) => {
  if (!mongoose.Types.ObjectId.isValid(skillId)) {
    throw new AppError("Invalid Skill ID format", 400);
  }

  const skill = await Skill.findById(skillId);
  if (!skill) {
    throw new AppError("Skill not found", 404);
  }

  // C4 Business Rule 17: Rejects deletion if active references exist in Careers or UserSkillProgress
  await validateSkillDeletion(skillId);

  await Skill.findByIdAndDelete(skillId);
  return true;
};

module.exports = {
  getAllSkills,
  getSkillBySlug,
  createSkill,
  updateSkill,
  deleteSkill,
};

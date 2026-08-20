const careerService = require("../services/careerService");
const { sendSuccess } = require("../utils/response");

/**
 * GET /api/careers
 * List career paths with safe filtering & pagination.
 * Students receive published careers only.
 */
const getCareers = async (req, res, next) => {
  try {
    const { category, difficulty, search, page, limit, includeUnpublished } = req.query;
    const userRole = req.user ? req.user.role : "student";
    const result = await careerService.getAllCareers({
      userRole,
      category,
      difficulty,
      search,
      page,
      limit,
      includeUnpublished,
    });
    return sendSuccess(res, 200, "Careers retrieved successfully", result);
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/careers/:slug
 * Retrieve a single career path by URL slug.
 */
const getCareerBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const userRole = req.user ? req.user.role : "student";
    const career = await careerService.getCareerBySlug({ slug, userRole });
    return sendSuccess(res, 200, "Career retrieved successfully", { career });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/careers
 * Create a new canonical Career path (Admin only).
 */
const createCareer = async (req, res, next) => {
  try {
    const career = await careerService.createCareer(req.body);
    return sendSuccess(res, 201, "Career created successfully", { career });
  } catch (error) {
    next(error);
  }
};

/**
 * PATCH /api/careers/:id
 * Update an existing Career path (Admin only).
 */
const updateCareer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const career = await careerService.updateCareer(id, req.body);
    return sendSuccess(res, 200, "Career updated successfully", { career });
  } catch (error) {
    next(error);
  }
};

/**
 * PATCH /api/careers/:id/publish
 * Publish a Career path (Admin only).
 */
const publishCareer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const career = await careerService.publishCareer(id);
    return sendSuccess(res, 200, "Career published successfully", { career });
  } catch (error) {
    next(error);
  }
};

/**
 * PATCH /api/careers/:id/unpublish
 * Unpublish a Career path (Admin only).
 */
const unpublishCareer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const career = await careerService.unpublishCareer(id);
    return sendSuccess(res, 200, "Career unpublished successfully", { career });
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE /api/careers/:id
 * Delete a Career path (Admin only, protected by C4 deletion safety guard).
 */
const deleteCareer = async (req, res, next) => {
  try {
    const { id } = req.params;
    await careerService.deleteCareer(id);
    return sendSuccess(res, 200, "Career deleted successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCareers,
  getCareerBySlug,
  createCareer,
  updateCareer,
  publishCareer,
  unpublishCareer,
  deleteCareer,
};

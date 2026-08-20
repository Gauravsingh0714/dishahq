const skillService = require("../services/skillService");
const { sendSuccess } = require("../utils/response");

/**
 * GET /api/skills
 * Public endpoint to list all global skills with safe filtering & pagination.
 */
const getSkills = async (req, res, next) => {
  try {
    const { category, difficulty, search, page, limit } = req.query;
    const result = await skillService.getAllSkills({ category, difficulty, search, page, limit });
    return sendSuccess(res, 200, "Skills retrieved successfully", result);
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/skills/:slug
 * Public endpoint to retrieve a single skill by slug.
 */
const getSkillBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const skill = await skillService.getSkillBySlug(slug);
    return sendSuccess(res, 200, "Skill retrieved successfully", { skill });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/skills
 * Admin endpoint to create a new global Skill.
 */
const createSkill = async (req, res, next) => {
  try {
    const skill = await skillService.createSkill(req.body);
    return sendSuccess(res, 201, "Skill created successfully", { skill });
  } catch (error) {
    next(error);
  }
};

/**
 * PATCH /api/skills/:id
 * Admin endpoint to update an existing global Skill.
 */
const updateSkill = async (req, res, next) => {
  try {
    const { id } = req.params;
    const skill = await skillService.updateSkill(id, req.body);
    return sendSuccess(res, 200, "Skill updated successfully", { skill });
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE /api/skills/:id
 * Admin endpoint to delete a global Skill (protected by C4 deletion safety guard).
 */
const deleteSkill = async (req, res, next) => {
  try {
    const { id } = req.params;
    await skillService.deleteSkill(id);
    return sendSuccess(res, 200, "Skill deleted successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSkills,
  getSkillBySlug,
  createSkill,
  updateSkill,
  deleteSkill,
};

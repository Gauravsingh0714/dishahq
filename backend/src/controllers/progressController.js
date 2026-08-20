const progressService = require("../services/progressService");
const { sendSuccess } = require("../utils/response");

/**
 * GET /api/progress/careers
 * Return all career progress records for authenticated student (req.user.id).
 */
const getCareerProgresses = async (req, res, next) => {
  try {
    const progressList = await progressService.getUserCareerProgresses(req.user.id);
    return sendSuccess(res, 200, "Career progress retrieved successfully", { progress: progressList });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/progress/careers/:careerId
 * Return career progress record for authenticated student for one career.
 */
const getCareerProgressById = async (req, res, next) => {
  try {
    const { careerId } = req.params;
    const userRole = req.user.role;
    const progress = await progressService.getUserCareerProgressById({
      userId: req.user.id,
      careerId,
      userRole,
    });
    return sendSuccess(res, 200, "Career progress retrieved successfully", { progress });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/progress/careers/:careerId
 * Start tracking a career path for authenticated student.
 */
const startCareerProgress = async (req, res, next) => {
  try {
    const { careerId } = req.params;
    const userRole = req.user.role;
    const progress = await progressService.startCareerProgress({
      userId: req.user.id,
      careerId,
      userRole,
    });
    return sendSuccess(res, 201, "Career progress tracking started successfully", { progress });
  } catch (error) {
    next(error);
  }
};

/**
 * PATCH /api/progress/careers/:careerId/steps/:stepId
 * Mark a roadmap step as completed for authenticated student.
 */
const completeRoadmapStep = async (req, res, next) => {
  try {
    const { careerId, stepId } = req.params;
    const userRole = req.user.role;
    const progress = await progressService.completeRoadmapStep({
      userId: req.user.id,
      careerId,
      stepId,
      userRole,
    });
    return sendSuccess(res, 200, "Roadmap step completed successfully", { progress });
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE /api/progress/careers/:careerId/steps/:stepId
 * Undo completion of a roadmap step for authenticated student.
 */
const undoRoadmapStep = async (req, res, next) => {
  try {
    const { careerId, stepId } = req.params;
    const userRole = req.user.role;
    const progress = await progressService.undoRoadmapStep({
      userId: req.user.id,
      careerId,
      stepId,
      userRole,
    });
    return sendSuccess(res, 200, "Roadmap step completion undone successfully", { progress });
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE /api/progress/careers/:careerId
 * Delete career progress tracking record for authenticated student.
 */
const deleteCareerProgress = async (req, res, next) => {
  try {
    const { careerId } = req.params;
    await progressService.deleteUserCareerProgress({
      userId: req.user.id,
      careerId,
    });
    return sendSuccess(res, 200, "Career progress record deleted successfully");
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/progress/skills
 * Return all global skill progress records for authenticated student.
 */
const getSkillProgresses = async (req, res, next) => {
  try {
    const { status } = req.query;
    const progressList = await progressService.getUserSkillProgresses({
      userId: req.user.id,
      status,
    });
    return sendSuccess(res, 200, "Skill progress retrieved successfully", { progress: progressList });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/progress/skills/:skillId
 * Return single skill progress record for authenticated student.
 */
const getSkillProgressById = async (req, res, next) => {
  try {
    const { skillId } = req.params;
    const progress = await progressService.getUserSkillProgressById({
      userId: req.user.id,
      skillId,
    });
    return sendSuccess(res, 200, "Skill progress retrieved successfully", { progress });
  } catch (error) {
    next(error);
  }
};

/**
 * PUT /api/progress/skills/:skillId
 * Create or update global skill progress for authenticated student.
 */
const upsertSkillProgress = async (req, res, next) => {
  try {
    const { skillId } = req.params;
    const { status, proficiency, source } = req.body;
    const progress = await progressService.upsertUserSkillProgress({
      userId: req.user.id,
      skillId,
      status,
      proficiency,
      source,
    });
    return sendSuccess(res, 200, "Skill progress updated successfully", { progress });
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE /api/progress/skills/:skillId
 * Delete personal skill progress record for authenticated student.
 */
const deleteSkillProgress = async (req, res, next) => {
  try {
    const { skillId } = req.params;
    await progressService.deleteUserSkillProgress({
      userId: req.user.id,
      skillId,
    });
    return sendSuccess(res, 200, "Skill progress record deleted successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCareerProgresses,
  getCareerProgressById,
  startCareerProgress,
  completeRoadmapStep,
  undoRoadmapStep,
  deleteCareerProgress,
  getSkillProgresses,
  getSkillProgressById,
  upsertSkillProgress,
  deleteSkillProgress,
};

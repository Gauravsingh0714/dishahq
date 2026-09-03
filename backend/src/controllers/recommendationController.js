const { recommendationService } = require("../services/recommendation");
const { sendSuccess } = require("../utils/response");

/**
 * Controller for DISHA Recommendation Engine Endpoints (Phase C7)
 * Delegates all business logic to recommendationService and maintains thin HTTP handling.
 */

/**
 * GET /api/recommendations
 * Returns top 3 ranked career recommendations for authenticated user.
 */
const getRankedRecommendations = async (req, res, next) => {
  try {
    const data = await recommendationService.getRankedRecommendations(req.user.id);
    return sendSuccess(res, 200, "Career recommendations generated successfully", data);
  } catch (error) {
    return next(error);
  }
};

/**
 * GET /api/recommendations/:careerSlug
 * Returns detailed recommendation breakdown for a specific career path.
 */
const getCareerRecommendationDetail = async (req, res, next) => {
  try {
    const { careerSlug } = req.params;
    const data = await recommendationService.getCareerRecommendationDetail(req.user.id, careerSlug);
    return sendSuccess(res, 200, `Recommendation details for '${careerSlug}' retrieved successfully`, data);
  } catch (error) {
    return next(error);
  }
};

/**
 * GET /api/recommendations/:careerSlug/skill-gaps
 * Returns complete skill gap analysis for a specific career path.
 */
const getCareerSkillGaps = async (req, res, next) => {
  try {
    const { careerSlug } = req.params;
    const data = await recommendationService.getCareerSkillGaps(req.user.id, careerSlug);
    return sendSuccess(res, 200, `Skill gap analysis for '${careerSlug}' retrieved successfully`, data);
  } catch (error) {
    return next(error);
  }
};

/**
 * GET /api/recommendations/:careerSlug/learning-priorities
 * Returns prerequisite-aware learning priorities queue for a specific career path.
 */
const getCareerLearningPriorities = async (req, res, next) => {
  try {
    const { careerSlug } = req.params;
    const data = await recommendationService.getCareerLearningPriorities(req.user.id, careerSlug);
    return sendSuccess(res, 200, `Learning priorities for '${careerSlug}' retrieved successfully`, data);
  } catch (error) {
    return next(error);
  }
};

/**
 * POST /api/recommendations/assessment
 * Submits user career assessment answers & normalized signals.
 */
const submitAssessment = async (req, res, next) => {
  try {
    const data = await recommendationService.saveUserAssessment(req.user.id, req.body || {});
    return sendSuccess(res, 200, "Career assessment submitted successfully", data);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getRankedRecommendations,
  getCareerRecommendationDetail,
  getCareerSkillGaps,
  getCareerLearningPriorities,
  submitAssessment,
};

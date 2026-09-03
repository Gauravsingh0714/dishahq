const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { recommendationController } = require("../controllers");

const router = express.Router();

/**
 * All recommendation engine routes require valid JWT Bearer Token authentication.
 * User ownership & isolation is enforced from req.user.id.
 */
router.use(protect);

/**
 * @route   POST /api/recommendations/assessment
 * @desc    Submit user career assessment answers & normalized signals
 * @access  Private (Student/Admin)
 */
router.post("/assessment", recommendationController.submitAssessment);

/**
 * @route   GET /api/recommendations
 * @desc    Get top 3 ranked career recommendations for authenticated user
 * @access  Private (Student/Admin)
 */
router.get("/", recommendationController.getRankedRecommendations);

/**
 * @route   GET /api/recommendations/:careerSlug
 * @desc    Get detailed recommendation breakdown for a specific career
 * @access  Private (Student/Admin)
 */
router.get("/:careerSlug", recommendationController.getCareerRecommendationDetail);

/**
 * @route   GET /api/recommendations/:careerSlug/skill-gaps
 * @desc    Get complete skill gap analysis for a specific career
 * @access  Private (Student/Admin)
 */
router.get("/:careerSlug/skill-gaps", recommendationController.getCareerSkillGaps);

/**
 * @route   GET /api/recommendations/:careerSlug/learning-priorities
 * @desc    Get prerequisite-aware learning priorities queue for a specific career
 * @access  Private (Student/Admin)
 */
router.get("/:careerSlug/learning-priorities", recommendationController.getCareerLearningPriorities);

module.exports = router;

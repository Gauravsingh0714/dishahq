const express = require("express");
const {
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
} = require("../controllers/progressController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Protect all student progress endpoints via Bearer token JWT authentication
router.use(protect);

/**
 * @route   GET /api/progress/careers
 * @desc    List all career progress tracking records for authenticated student
 * @access  Private / Authenticated
 */
router.get("/careers", getCareerProgresses);

/**
 * @route   GET /api/progress/careers/:careerId
 * @desc    Get career progress record for a single career for authenticated student
 * @access  Private / Authenticated
 */
router.get("/careers/:careerId", getCareerProgressById);

/**
 * @route   POST /api/progress/careers/:careerId
 * @desc    Start tracking a career path for authenticated student
 * @access  Private / Authenticated
 */
router.post("/careers/:careerId", startCareerProgress);

/**
 * @route   PATCH /api/progress/careers/:careerId/steps/:stepId
 * @desc    Mark a roadmap step as completed for authenticated student
 * @access  Private / Authenticated
 */
router.patch("/careers/:careerId/steps/:stepId", completeRoadmapStep);

/**
 * @route   DELETE /api/progress/careers/:careerId/steps/:stepId
 * @desc    Undo completion of a roadmap step for authenticated student
 * @access  Private / Authenticated
 */
router.delete("/careers/:careerId/steps/:stepId", undoRoadmapStep);

/**
 * @route   DELETE /api/progress/careers/:careerId
 * @desc    Delete career progress tracking record for authenticated student
 * @access  Private / Authenticated
 */
router.delete("/careers/:careerId", deleteCareerProgress);

/**
 * @route   GET /api/progress/skills
 * @desc    List all global skill progress records for authenticated student
 * @access  Private / Authenticated
 */
router.get("/skills", getSkillProgresses);

/**
 * @route   GET /api/progress/skills/:skillId
 * @desc    Get skill progress record for a single skill for authenticated student
 * @access  Private / Authenticated
 */
router.get("/skills/:skillId", getSkillProgressById);

/**
 * @route   PUT /api/progress/skills/:skillId
 * @desc    Create or update global skill progress for authenticated student
 * @access  Private / Authenticated
 */
router.put("/skills/:skillId", upsertSkillProgress);

/**
 * @route   DELETE /api/progress/skills/:skillId
 * @desc    Delete personal skill progress record for authenticated student
 * @access  Private / Authenticated
 */
router.delete("/skills/:skillId", deleteSkillProgress);

module.exports = router;

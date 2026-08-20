const express = require("express");
const {
  getSkills,
  getSkillBySlug,
  createSkill,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillController");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @route   GET /api/skills
 * @desc    List all global skills (Supports filtering by category, difficulty, & search query)
 * @access  Public / Student
 */
router.get("/", getSkills);

/**
 * @route   GET /api/skills/:slug
 * @desc    Get a single skill by URL slug
 * @access  Public / Student
 */
router.get("/:slug", getSkillBySlug);

/**
 * @route   POST /api/skills
 * @desc    Create a new global Skill
 * @access  Private / Admin Only
 */
router.post("/", protect, admin, createSkill);

/**
 * @route   PATCH /api/skills/:id
 * @desc    Update an existing global Skill
 * @access  Private / Admin Only
 */
router.patch("/:id", protect, admin, updateSkill);

/**
 * @route   DELETE /api/skills/:id
 * @desc    Delete a global Skill (Protected by C4 deletion safety guard)
 * @access  Private / Admin Only
 */
router.delete("/:id", protect, admin, deleteSkill);

module.exports = router;

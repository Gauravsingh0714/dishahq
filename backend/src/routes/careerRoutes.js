const express = require("express");
const {
  getCareers,
  getCareerBySlug,
  createCareer,
  updateCareer,
  publishCareer,
  unpublishCareer,
  deleteCareer,
} = require("../controllers/careerController");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @route   GET /api/careers
 * @desc    List all career paths (Authenticated students receive published careers only)
 * @access  Private / Authenticated
 */
router.get("/", protect, getCareers);

/**
 * @route   GET /api/careers/:slug
 * @desc    Get a single career path by URL slug
 * @access  Private / Authenticated
 */
router.get("/:slug", protect, getCareerBySlug);

/**
 * @route   POST /api/careers
 * @desc    Create a new canonical Career path
 * @access  Private / Admin Only
 */
router.post("/", protect, admin, createCareer);

/**
 * @route   PATCH /api/careers/:id
 * @desc    Update an existing Career path
 * @access  Private / Admin Only
 */
router.patch("/:id", protect, admin, updateCareer);

/**
 * @route   PATCH /api/careers/:id/publish
 * @desc    Publish a Career path (isPublished = true)
 * @access  Private / Admin Only
 */
router.patch("/:id/publish", protect, admin, publishCareer);

/**
 * @route   PATCH /api/careers/:id/unpublish
 * @desc    Unpublish a Career path (isPublished = false)
 * @access  Private / Admin Only
 */
router.patch("/:id/unpublish", protect, admin, unpublishCareer);

/**
 * @route   DELETE /api/careers/:id
 * @desc    Delete a Career path (Protected by C4 deletion safety guard)
 * @access  Private / Admin Only
 */
router.delete("/:id", protect, admin, deleteCareer);

module.exports = router;

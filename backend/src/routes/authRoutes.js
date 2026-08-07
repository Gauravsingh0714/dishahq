const express = require("express");
const { register, login, getProfile } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const { authLimiter } = require("../middleware/rateLimiter");

const router = express.Router();

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user account (Protected by strict auth rate limiter)
 * @access  Public
 */
router.post("/register", authLimiter, register);

/**
 * @route   POST /api/auth/login
 * @desc    Authenticate user & get JWT token (Protected by strict auth rate limiter)
 * @access  Public
 */
router.post("/login", authLimiter, login);

/**
 * @route   GET /api/auth/profile
 * @desc    Get authenticated user profile
 * @access  Private (Protected by JWT)
 */
router.get("/profile", protect, getProfile);

module.exports = router;

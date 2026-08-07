const authService = require("../services/authService");
const { sendSuccess } = require("../utils/response");

/**
 * Handle user registration POST /api/auth/register
 */
const register = async (req, res, next) => {
  try {
    const { fullName, email, password, role } = req.body;

    if (!fullName || !email || !password) {
      const error = new Error("Please provide full name, email, and password");
      error.statusCode = 400;
      throw error;
    }

    if (password.length < 6) {
      const error = new Error("Password must be at least 6 characters");
      error.statusCode = 400;
      throw error;
    }

    const result = await authService.registerUser({ fullName, email, password, role });
    return sendSuccess(res, 201, "User registered successfully", result);
  } catch (error) {
    next(error);
  }
};

/**
 * Handle user login POST /api/auth/login
 */
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("Please provide email and password");
      error.statusCode = 400;
      throw error;
    }

    const result = await authService.loginUser({ email, password });
    return sendSuccess(res, 200, "Login successful", result);
  } catch (error) {
    next(error);
  }
};

/**
 * Handle user profile retrieval GET /api/auth/profile
 */
const getProfile = async (req, res, next) => {
  try {
    const profile = await authService.getUserProfile(req.user.id);
    return sendSuccess(res, 200, "Profile retrieved successfully", { user: profile });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  getProfile,
};

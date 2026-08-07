const User = require("../models/User");
const generateToken = require("../utils/generateToken");

/**
 * Register a new user in the system.
 */
const registerUser = async ({ fullName, email, password, role = "student" }) => {
  const existingUser = await User.findOne({ email: email.toLowerCase() });
  if (existingUser) {
    const error = new Error("User with this email already exists");
    error.statusCode = 400;
    throw error;
  }

  const user = await User.create({
    fullName,
    email,
    password,
    role,
  });

  const token = generateToken(user._id, user.role);

  return {
    user: {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      isQuizCompleted: user.isQuizCompleted,
      createdAt: user.createdAt,
    },
    token,
  };
};

/**
 * Authenticate existing user credentials.
 */
const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email: email.toLowerCase() }).select("+password");

  if (!user || !(await user.matchPassword(password))) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  const token = generateToken(user._id, user.role);

  return {
    user: {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      isQuizCompleted: user.isQuizCompleted,
      createdAt: user.createdAt,
    },
    token,
  };
};

/**
 * Get user profile data by ID.
 */
const getUserProfile = async (userId) => {
  const user = await User.findById(userId).select("-password");
  if (!user) {
    const error = new Error("User profile not found");
    error.statusCode = 404;
    throw error;
  }
  return {
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    role: user.role,
    isQuizCompleted: user.isQuizCompleted,
    createdAt: user.createdAt,
  };
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
};

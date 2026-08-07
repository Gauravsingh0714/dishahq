const jwt = require("jsonwebtoken");

/**
 * Generates a signed JWT token for an authenticated user.
 * @param {string} id - User ObjectId
 * @param {string} role - User role (student/admin)
 * @returns {string} Signed JWT token string
 */
const generateToken = (id, role = "student") => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET environment variable is missing.");
  }

  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = generateToken;

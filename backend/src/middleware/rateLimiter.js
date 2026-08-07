const rateLimit = require("express-rate-limit");

/**
 * General API Rate Limiter
 * Restricts client requests to 100 requests per 15-minute window.
 */
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in `RateLimit-*` headers
  legacyHeaders: false, // Disable `X-RateLimit-*` headers
  handler: (req, res) => {
    res.status(429).json({
      status: "error",
      message: "Too many requests. Please try again later.",
    });
  },
});

/**
 * Strict Authentication Endpoint Rate Limiter
 * Restricts authentication attempts (login/register) to 5 attempts per 15-minute window.
 */
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 auth attempts per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      status: "error",
      message: "Too many authentication attempts. Please try again in 15 minutes.",
    });
  },
});

module.exports = {
  generalLimiter,
  authLimiter,
};

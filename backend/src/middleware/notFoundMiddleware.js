/**
 * 404 Unmatched Route Handler Middleware.
 * Returns standard JSON response for invalid routes.
 */

const notFoundMiddleware = (req, res, next) => {
  res.status(404).json({
    status: "error",
    message: `Route not found - ${req.originalUrl}`,
  });
};

module.exports = notFoundMiddleware;

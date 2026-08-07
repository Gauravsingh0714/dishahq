/**
 * Global Centralized Error Handler Middleware.
 * Catches all unhandled exceptions and formats consistent JSON error responses.
 */

const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || (res.statusCode === 200 ? 500 : res.statusCode);

  res.status(statusCode).json({
    status: "error",
    message: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

module.exports = errorMiddleware;

/**
 * Standardized API Response Utilities.
 * Enforces consistent JSON payload structure across all controller endpoints.
 */

const sendSuccess = (res, statusCode = 200, message = "Success", data = null) => {
  return res.status(statusCode).json({
    status: "success",
    message,
    ...(data !== null && { data }),
  });
};

const sendError = (res, statusCode = 500, message = "Error", errors = null) => {
  return res.status(statusCode).json({
    status: "error",
    message,
    ...(errors !== null && { errors }),
  });
};

module.exports = {
  sendSuccess,
  sendError,
};

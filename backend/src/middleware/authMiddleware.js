const jwt = require("jsonwebtoken");

/**
 * Express Middleware protecting private API routes via Bearer Token JWT verification.
 */
const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET environment variable is missing.");
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach user information to request object
      req.user = {
        id: decoded.id,
        role: decoded.role,
      };

      return next();
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({
          status: "error",
          message: "Not authorized, token has expired",
        });
      }
      return res.status(401).json({
        status: "error",
        message: "Not authorized, token verification failed",
      });
    }
  }

  if (!token) {
    return res.status(401).json({
      status: "error",
      message: "Not authorized, no token provided",
    });
  }
};

/**
 * Express Middleware enforcing Admin role authorization.
 * Must be executed after `protect` middleware.
 */
const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    return next();
  }
  return res.status(403).json({
    status: "error",
    message: "Forbidden: Admin access required",
  });
};

module.exports = {
  protect,
  admin,
};

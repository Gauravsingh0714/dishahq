const express = require("express");
const router = express.Router();

/**
 * @route   GET /api/health
 * @desc    System Health Check Endpoint
 * @access  Public
 */
router.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "Disha API",
    environment: process.env.NODE_ENV || "development",
  });
});

module.exports = router;

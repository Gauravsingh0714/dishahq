const express = require("express");
const healthRoutes = require("./healthRoutes");
const authRoutes = require("./authRoutes");

const router = express.Router();

/**
 * Central API Router Registration.
 */
router.use("/", healthRoutes);
router.use("/auth", authRoutes);

module.exports = router;

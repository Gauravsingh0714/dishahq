const express = require("express");
const healthRoutes = require("./healthRoutes");
const authRoutes = require("./authRoutes");
const skillRoutes = require("./skillRoutes");
const careerRoutes = require("./careerRoutes");
const progressRoutes = require("./progressRoutes");
const recommendationRoutes = require("./recommendationRoutes");

const router = express.Router();

/**
 * Central API Router Registration.
 */
router.use("/", healthRoutes);
router.use("/auth", authRoutes);
router.use("/skills", skillRoutes);
router.use("/careers", careerRoutes);
router.use("/progress", progressRoutes);
router.use("/recommendations", recommendationRoutes);

module.exports = router;

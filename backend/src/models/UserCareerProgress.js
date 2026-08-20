const mongoose = require("mongoose");

/**
 * User Career Progress Schema for Disha Platform (Phase C)
 * Tracks a student's progress through a specific career roadmap.
 * Anchored to roadmapVersion to protect historical progress when roadmaps are updated.
 */
const userCareerProgressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
    careerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Career",
      required: [true, "Career ID is required"],
    },
    roadmapVersion: {
      type: Number,
      required: [true, "Roadmap version is required"],
      min: [1, "Roadmap version must be at least 1"],
      default: 1,
    },
    completedStepIds: {
      type: [
        {
          type: String,
          trim: true,
        },
      ],
      default: [],
    },
    startedAt: {
      type: Date,
      default: Date.now,
    },
    lastActivityAt: {
      type: Date,
      default: Date.now,
    },
    completedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Enforce unique career progress record per user per career path
userCareerProgressSchema.index({ userId: 1, careerId: 1 }, { unique: true });

const UserCareerProgress = mongoose.model(
  "UserCareerProgress",
  userCareerProgressSchema,
  "user_career_progresses"
);

module.exports = UserCareerProgress;

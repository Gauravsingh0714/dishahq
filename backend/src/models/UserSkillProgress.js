const mongoose = require("mongoose");

/**
 * Global User Skill Progress Schema for Disha Platform (Phase C)
 * Tracks global skill mastery for a specific user across all target career paths.
 */
const userSkillProgressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
    skillId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skill",
      required: [true, "Skill ID is required"],
    },
    status: {
      type: String,
      required: [true, "Skill progress status is required"],
      enum: {
        values: ["not_started", "learning", "completed"],
        message: "{VALUE} is not a valid skill progress status",
      },
      default: "not_started",
    },
    proficiency: {
      type: Number,
      min: [0, "Proficiency percentage cannot be less than 0"],
      max: [100, "Proficiency percentage cannot exceed 100"],
      default: 0,
    },
    source: {
      type: String,
      required: [true, "Skill progress source is required"],
      enum: {
        values: ["manual", "roadmap", "assessment"],
        message: "{VALUE} is not a valid skill progress source",
      },
    },
  },
  {
    timestamps: true,
  }
);

// Enforce unique skill progress record per user per skill
userSkillProgressSchema.index({ userId: 1, skillId: 1 }, { unique: true });

const UserSkillProgress = mongoose.model(
  "UserSkillProgress",
  userSkillProgressSchema,
  "user_skill_progresses"
);

module.exports = UserSkillProgress;

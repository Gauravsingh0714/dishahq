const mongoose = require("mongoose");

/**
 * Global Skill Schema for Disha Platform (Phase C)
 * Normalized catalog of reusable skills across multiple career paths.
 */
const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Skill name is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Skill slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        "Slug must contain only lowercase alphanumeric characters and single hyphens",
      ],
    },
    category: {
      type: String,
      required: [true, "Skill category is required"],
      enum: {
        values: [
          "programming",
          "web",
          "data",
          "ai_ml",
          "cloud_devops",
          "security",
          "soft_skills",
          "design",
        ],
        message: "{VALUE} is not a valid skill category",
      },
    },
    description: {
      type: String,
      required: [true, "Skill description is required"],
      trim: true,
    },
    difficulty: {
      type: String,
      required: [true, "Skill difficulty is required"],
      enum: {
        values: ["beginner", "intermediate", "advanced"],
        message: "{VALUE} is not a valid difficulty level",
      },
    },
    prerequisiteSkillIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Indexing strategy: category-based filtering query optimization
skillSchema.index({ category: 1 });

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;

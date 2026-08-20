const mongoose = require("mongoose");

/**
 * Subdocument Schema for Embedded Learning Resources
 */
const resourceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Resource title is required"],
      trim: true,
    },
    type: {
      type: String,
      required: [true, "Resource type is required"],
      enum: {
        values: [
          "documentation",
          "course",
          "video",
          "article",
          "book",
          "practice",
          "other",
        ],
        message: "{VALUE} is not a valid resource type",
      },
    },
    url: {
      type: String,
      required: [true, "Resource URL is required"],
      trim: true,
      match: [
        /^https?:\/\/.+/,
        "Resource URL must start with http:// or https://",
      ],
    },
  },
  { _id: false }
);

/**
 * Subdocument Schema for Embedded Projects
 */
const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Project description is required"],
      trim: true,
    },
    difficulty: {
      type: String,
      enum: {
        values: ["beginner", "intermediate", "advanced"],
        message: "{VALUE} is not a valid project difficulty",
      },
    },
    skillIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill",
      },
    ],
  },
  { _id: false }
);

/**
 * Subdocument Schema for Roadmap Steps
 */
const stepSchema = new mongoose.Schema(
  {
    stepId: {
      type: String,
      required: [true, "Step ID is required"],
      trim: true,
    },
    title: {
      type: String,
      required: [true, "Step title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Step description is required"],
      trim: true,
    },
    order: {
      type: Number,
      required: [true, "Step order is required"],
      min: [0, "Step order cannot be negative"],
    },
    estimatedHours: {
      type: Number,
      min: [0, "Estimated hours cannot be negative"],
      default: 0,
    },
    difficulty: {
      type: String,
      enum: {
        values: ["beginner", "intermediate", "advanced"],
        message: "{VALUE} is not a valid step difficulty",
      },
    },
    skillIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill",
      },
    ],
    resources: [resourceSchema],
    projects: [projectSchema],
    interviewTopics: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  { _id: false }
);

/**
 * Subdocument Schema for Roadmap Phases
 */
const phaseSchema = new mongoose.Schema(
  {
    phaseId: {
      type: String,
      required: [true, "Phase ID is required"],
      trim: true,
    },
    title: {
      type: String,
      required: [true, "Phase title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Phase description is required"],
      trim: true,
    },
    order: {
      type: Number,
      required: [true, "Phase order is required"],
      min: [0, "Phase order cannot be negative"],
    },
    steps: [stepSchema],
  },
  { _id: false }
);

/**
 * Subdocument Schema for Embedded Career Roadmap
 */
const roadmapSchema = new mongoose.Schema(
  {
    roadmapVersion: {
      type: Number,
      required: [true, "Roadmap version is required"],
      min: [1, "Roadmap version must be at least 1"],
      default: 1,
    },
    phases: {
      type: [phaseSchema],
      default: [],
      validate: [
        {
          validator: function (phases) {
            if (!phases || !Array.isArray(phases)) return true;
            const phaseIds = phases.map((p) => p.phaseId);
            return new Set(phaseIds).size === phaseIds.length;
          },
          message: "Roadmap contains duplicate phase IDs",
        },
        {
          validator: function (phases) {
            if (!phases || !Array.isArray(phases)) return true;
            const stepIds = [];
            for (const phase of phases) {
              if (phase.steps && Array.isArray(phase.steps)) {
                for (const step of phase.steps) {
                  stepIds.push(step.stepId);
                }
              }
            }
            return new Set(stepIds).size === stepIds.length;
          },
          message: "Roadmap contains duplicate step IDs across phases",
        },
      ],
    },
  },
  { _id: false }
);

/**
 * Subdocument Schema for Market Metadata
 */
const marketMetadataSchema = new mongoose.Schema(
  {
    salaryRange: {
      min: { type: Number, min: 0 },
      max: { type: Number, min: 0 },
      currency: { type: String, default: "USD", uppercase: true, trim: true },
    },
    demandLevel: {
      type: String,
      enum: {
        values: ["low", "moderate", "high", "emerging"],
        message: "{VALUE} is not a valid demand level",
      },
    },
    region: { type: String, trim: true },
    updatedAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

/**
 * Top-Level Career Schema for Disha Platform (Phase C)
 */
const careerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Career name is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Career slug is required"],
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
      required: [true, "Career category is required"],
      enum: {
        values: [
          "development",
          "data",
          "ai_ml",
          "devops_cloud",
          "cybersecurity",
          "design",
        ],
        message: "{VALUE} is not a valid career category",
      },
    },
    shortDescription: {
      type: String,
      required: [true, "Short description is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Detailed description is required"],
      trim: true,
    },
    difficulty: {
      type: String,
      required: [true, "Career difficulty is required"],
      enum: {
        values: ["beginner", "intermediate", "advanced"],
        message: "{VALUE} is not a valid difficulty level",
      },
    },
    requiredSkillIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill",
      },
    ],
    optionalSkillIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill",
      },
    ],
    marketMetadata: {
      type: marketMetadataSchema,
      default: () => ({}),
    },
    roadmap: {
      type: roadmapSchema,
      default: () => ({ roadmapVersion: 1, phases: [] }),
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Compound index for category-based public career listing queries
careerSchema.index({ category: 1, isPublished: 1 });

const Career = mongoose.model("Career", careerSchema);

module.exports = Career;

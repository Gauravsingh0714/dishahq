const mongoose = require("mongoose");
const { Skill, UserCareerProgress } = require("../models");
const AppError = require("../utils/AppError");

/**
 * Validates that required and optional skills do not overlap.
 */
const validateSkillOverlap = (requiredSkillIds = [], optionalSkillIds = []) => {
  const reqSet = new Set(requiredSkillIds.map((id) => id.toString()));
  for (const optId of optionalSkillIds) {
    if (reqSet.has(optId.toString())) {
      throw new AppError(
        `Skill ID ${optId} cannot be both required and optional in the same career`,
        400
      );
    }
  }
};

/**
 * Validates that all referenced skill ObjectIds exist in the database.
 */
const validateSkillReferencesExist = async (skillIds = [], contextName = "Skill") => {
  if (!skillIds || skillIds.length === 0) return;

  const validObjectIds = skillIds.filter((id) => mongoose.Types.ObjectId.isValid(id));
  if (validObjectIds.length !== skillIds.length) {
    throw new AppError(`One or more ${contextName} IDs are invalid ObjectIds`, 400);
  }

  const existingSkills = await Skill.find({ _id: { $in: validObjectIds } }).select("_id");
  if (existingSkills.length !== validObjectIds.length) {
    throw new AppError(
      `One or more referenced ${contextName} IDs do not exist in the database catalog`,
      404
    );
  }
};

/**
 * Full Career Content Business Validation before saving or publishing.
 */
const validateCareerContent = async (careerData) => {
  const { requiredSkillIds = [], optionalSkillIds = [], roadmap } = careerData;

  // Rule 9: Reject required & optional skill overlap
  validateSkillOverlap(requiredSkillIds, optionalSkillIds);

  // Rule 7 & 8: Verify required and optional skills exist in MongoDB
  await validateSkillReferencesExist(requiredSkillIds, "Required Skill");
  await validateSkillReferencesExist(optionalSkillIds, "Optional Skill");

  // Rule 10 & 11: Verify roadmap step & project skills exist in MongoDB
  if (roadmap && Array.isArray(roadmap.phases)) {
    for (const phase of roadmap.phases) {
      if (Array.isArray(phase.steps)) {
        for (const step of phase.steps) {
          if (step.skillIds && step.skillIds.length > 0) {
            await validateSkillReferencesExist(step.skillIds, `Roadmap Step '${step.stepId}' Skill`);
          }
          if (Array.isArray(step.projects)) {
            for (const project of step.projects) {
              if (project.skillIds && project.skillIds.length > 0) {
                await validateSkillReferencesExist(
                  project.skillIds,
                  `Project '${project.title}' Skill`
                );
              }
            }
          }
        }
      }
    }
  }
};

/**
 * Rule 16: Career Deletion Safety Guard.
 * Prevents deleting a Career if active UserCareerProgress records reference it.
 */
const validateCareerDeletion = async (careerId) => {
  if (!mongoose.Types.ObjectId.isValid(careerId)) {
    throw new AppError("Invalid Career ID format", 400);
  }

  const activeProgressCount = await UserCareerProgress.countDocuments({ careerId });
  if (activeProgressCount > 0) {
    throw new AppError(
      `Cannot delete career because ${activeProgressCount} student progress record(s) reference it`,
      409
    );
  }
};

module.exports = {
  validateSkillOverlap,
  validateSkillReferencesExist,
  validateCareerContent,
  validateCareerDeletion,
};

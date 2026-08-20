const mongoose = require("mongoose");
const { User, Career, Skill } = require("../models");
const AppError = require("../utils/AppError");

/**
 * Rule 1 & Rule 14: User Ownership Assertion.
 * Verifies that resourceUserId matches current authenticated user ID.
 * Throws 403 Forbidden if user attempts to access or modify another student's progress.
 */
const assertOwnership = (resourceUserId, currentUserId) => {
  if (!resourceUserId || !currentUserId) {
    throw new AppError("Forbidden: User identification missing", 403);
  }
  if (resourceUserId.toString() !== currentUserId.toString()) {
    throw new AppError(
      "Forbidden: You do not have permission to access or modify another user's progress record",
      403
    );
  }
};

/**
 * Rule 2: Career Existence Verification.
 * Ensures referenced Career exists in MongoDB before progress mutation.
 */
const validateCareerExistence = async (careerId) => {
  if (!mongoose.Types.ObjectId.isValid(careerId)) {
    throw new AppError("Invalid Career ID format", 400);
  }
  const career = await Career.findById(careerId);
  if (!career) {
    throw new AppError("Referenced Career path does not exist", 404);
  }
  return career;
};

/**
 * Rule 3: Skill Existence Verification.
 * Ensures referenced Skill exists in MongoDB before skill progress mutation.
 */
const validateSkillExistence = async (skillId) => {
  if (!mongoose.Types.ObjectId.isValid(skillId)) {
    throw new AppError("Invalid Skill ID format", 400);
  }
  const skill = await Skill.findById(skillId);
  if (!skill) {
    throw new AppError("Referenced Skill does not exist in global catalog", 404);
  }
  return skill;
};

/**
 * Rule 4: Roadmap Step Ownership Verification.
 * Ensures marked stepId belongs to the selected Career's embedded roadmap phases/steps.
 */
const validateStepBelongsToCareer = (career, stepId) => {
  if (!career || !career.roadmap || !Array.isArray(career.roadmap.phases)) {
    throw new AppError(`Career '${career?.name || "Unknown"}' does not have a valid roadmap`, 400);
  }

  let stepExists = false;
  for (const phase of career.roadmap.phases) {
    if (Array.isArray(phase.steps)) {
      for (const step of phase.steps) {
        if (step.stepId === stepId) {
          stepExists = true;
          break;
        }
      }
    }
    if (stepExists) break;
  }

  if (!stepExists) {
    throw new AppError(
      `Invalid step input: Step '${stepId}' does not belong to career '${career.name}' roadmap`,
      400
    );
  }
};

/**
 * Rule 5 & 6: Roadmap Version Compatibility Verification.
 * Verifies requested roadmapVersion corresponds to active Career roadmap version.
 */
const validateRoadmapVersion = (career, roadmapVersion) => {
  const activeVersion = career?.roadmap?.roadmapVersion || 1;
  if (Number(roadmapVersion) !== Number(activeVersion)) {
    throw new AppError(
      `Roadmap version mismatch: Requested version ${roadmapVersion} does not match active career roadmap version ${activeVersion}`,
      400
    );
  }
};

/**
 * Rule 20: Duplicate Completed Steps Rejection.
 * Rejects completedStepIds array if duplicate step IDs are supplied.
 */
const validateNoDuplicateSteps = (completedStepIds = []) => {
  if (!Array.isArray(completedStepIds)) return;
  const uniqueSet = new Set(completedStepIds);
  if (uniqueSet.size !== completedStepIds.length) {
    throw new AppError("Invalid step input: Duplicate completed step IDs are not allowed", 400);
  }
};

/**
 * Rule 13 & 14: Student Read Visibility Scope Filter.
 * Appends isPublished: true to query for student read requests.
 */
const filterStudentVisibleCareers = (query = {}) => {
  return {
    ...query,
    isPublished: true,
  };
};

module.exports = {
  assertOwnership,
  validateCareerExistence,
  validateSkillExistence,
  validateStepBelongsToCareer,
  validateRoadmapVersion,
  validateNoDuplicateSteps,
  filterStudentVisibleCareers,
};

const mongoose = require("mongoose");
const { Career, Skill, UserCareerProgress, UserSkillProgress } = require("../models");
const AppError = require("../utils/AppError");
const {
  validateRoadmapVersion,
  validateStepBelongsToCareer,
} = require("../validators");

const ALLOWED_SKILL_STATUSES = ["not_started", "learning", "completed"];
const ALLOWED_SKILL_SOURCES = ["manual", "roadmap", "assessment"];

/**
 * 1. GET /api/progress/careers
 * Return all career progress records belonging to authenticated student (req.user.id).
 */
const getUserCareerProgresses = async (userId) => {
  const progressList = await UserCareerProgress.find({ userId })
    .populate("careerId", "_id name slug category shortDescription difficulty marketMetadata isPublished roadmap.roadmapVersion")
    .sort({ lastActivityAt: -1 });

  return progressList;
};

/**
 * 2. GET /api/progress/careers/:careerId
 * Return single career progress record for authenticated student (req.user.id).
 */
const getUserCareerProgressById = async ({ userId, careerId, userRole }) => {
  if (!mongoose.Types.ObjectId.isValid(careerId)) {
    throw new AppError("Invalid Career ID format", 400);
  }

  const career = await Career.findById(careerId);
  if (!career) {
    throw new AppError("Referenced Career path does not exist", 404);
  }

  // Student visibility check
  if (userRole !== "admin" && career.isPublished === false) {
    throw new AppError("Career progress not found", 404);
  }

  const progress = await UserCareerProgress.findOne({ userId, careerId }).populate(
    "careerId",
    "_id name slug category shortDescription difficulty marketMetadata isPublished roadmap"
  );

  if (!progress) {
    throw new AppError("Career progress not found", 404);
  }

  return progress;
};

/**
 * 3. POST /api/progress/careers/:careerId
 * Start tracking a career path for authenticated student.
 */
const startCareerProgress = async ({ userId, careerId, userRole }) => {
  if (!mongoose.Types.ObjectId.isValid(careerId)) {
    throw new AppError("Invalid Career ID format", 400);
  }

  const career = await Career.findById(careerId);
  if (!career) {
    throw new AppError("Referenced Career path does not exist", 404);
  }

  // Student must only start published careers
  if (userRole !== "admin" && career.isPublished === false) {
    throw new AppError("Cannot start tracking an unpublished career path", 404);
  }

  // Check duplicate tracking record
  const existingProgress = await UserCareerProgress.findOne({ userId, careerId });
  if (existingProgress) {
    throw new AppError("Career progress record already exists for this career path", 409);
  }

  const activeRoadmapVersion = career.roadmap?.roadmapVersion || 1;

  const progress = await UserCareerProgress.create({
    userId,
    careerId,
    roadmapVersion: activeRoadmapVersion,
    completedStepIds: [],
    startedAt: Date.now(),
    lastActivityAt: Date.now(),
    completedAt: null,
  });

  return progress.populate(
    "careerId",
    "_id name slug category shortDescription difficulty marketMetadata isPublished"
  );
};

/**
 * Helper to calculate if all roadmap steps in a career are completed.
 */
const checkCareerCompletion = (career, completedStepIds = []) => {
  if (!career || !career.roadmap || !Array.isArray(career.roadmap.phases)) {
    return false;
  }

  const allStepIds = [];
  for (const phase of career.roadmap.phases) {
    if (Array.isArray(phase.steps)) {
      for (const step of phase.steps) {
        if (step.stepId) {
          allStepIds.push(step.stepId);
        }
      }
    }
  }

  if (allStepIds.length === 0) return false;

  const completedSet = new Set(completedStepIds);
  return allStepIds.every((stepId) => completedSet.has(stepId));
};

/**
 * 4. PATCH /api/progress/careers/:careerId/steps/:stepId
 * Mark a roadmap step as completed for authenticated student.
 */
const completeRoadmapStep = async ({ userId, careerId, stepId, userRole }) => {
  if (!mongoose.Types.ObjectId.isValid(careerId)) {
    throw new AppError("Invalid Career ID format", 400);
  }

  if (!stepId || typeof stepId !== "string" || stepId.trim().length === 0) {
    throw new AppError("Invalid step ID input", 400);
  }

  const career = await Career.findById(careerId);
  if (!career) {
    throw new AppError("Referenced Career path does not exist", 404);
  }

  if (userRole !== "admin" && career.isPublished === false) {
    throw new AppError("Career progress not found", 404);
  }

  const progress = await UserCareerProgress.findOne({ userId, careerId });
  if (!progress) {
    throw new AppError("Career progress not found. Please start tracking this career path first.", 404);
  }

  // C4 Business Rule Validations
  validateRoadmapVersion(career, progress.roadmapVersion);
  validateStepBelongsToCareer(career, stepId.trim());

  // Idempotent addition
  const targetStepId = stepId.trim();
  if (!progress.completedStepIds.includes(targetStepId)) {
    progress.completedStepIds.push(targetStepId);
  }

  progress.lastActivityAt = Date.now();

  // Career Completion Logic
  const isFullyCompleted = checkCareerCompletion(career, progress.completedStepIds);
  if (isFullyCompleted) {
    if (!progress.completedAt) {
      progress.completedAt = Date.now();
    }
  } else {
    progress.completedAt = null;
  }

  await progress.save();
  return progress.populate(
    "careerId",
    "_id name slug category shortDescription difficulty marketMetadata isPublished"
  );
};

/**
 * 5. DELETE /api/progress/careers/:careerId/steps/:stepId
 * Undo completion of a roadmap step for authenticated student.
 */
const undoRoadmapStep = async ({ userId, careerId, stepId, userRole }) => {
  if (!mongoose.Types.ObjectId.isValid(careerId)) {
    throw new AppError("Invalid Career ID format", 400);
  }

  if (!stepId || typeof stepId !== "string" || stepId.trim().length === 0) {
    throw new AppError("Invalid step ID input", 400);
  }

  const career = await Career.findById(careerId);
  if (!career) {
    throw new AppError("Referenced Career path does not exist", 404);
  }

  if (userRole !== "admin" && career.isPublished === false) {
    throw new AppError("Career progress not found", 404);
  }

  const progress = await UserCareerProgress.findOne({ userId, careerId });
  if (!progress) {
    throw new AppError("Career progress not found", 404);
  }

  validateRoadmapVersion(career, progress.roadmapVersion);
  validateStepBelongsToCareer(career, stepId.trim());

  const targetStepId = stepId.trim();
  progress.completedStepIds = progress.completedStepIds.filter((id) => id !== targetStepId);
  progress.lastActivityAt = Date.now();

  // Reset completion if a step is undone
  const isStillFullyCompleted = checkCareerCompletion(career, progress.completedStepIds);
  if (!isStillFullyCompleted) {
    progress.completedAt = null;
  }

  await progress.save();
  return progress.populate(
    "careerId",
    "_id name slug category shortDescription difficulty marketMetadata isPublished"
  );
};

/**
 * 6. DELETE /api/progress/careers/:careerId
 * Remove career progress record for authenticated student.
 */
const deleteUserCareerProgress = async ({ userId, careerId }) => {
  if (!mongoose.Types.ObjectId.isValid(careerId)) {
    throw new AppError("Invalid Career ID format", 400);
  }

  const deletedProgress = await UserCareerProgress.findOneAndDelete({ userId, careerId });
  if (!deletedProgress) {
    throw new AppError("Career progress not found", 404);
  }

  return true;
};

/**
 * 7. GET /api/progress/skills
 * Return all global skill progress records belonging to authenticated student.
 */
const getUserSkillProgresses = async ({ userId, status }) => {
  const query = { userId };

  if (status) {
    if (!ALLOWED_SKILL_STATUSES.includes(status)) {
      throw new AppError(`Invalid status filter: '${status}'`, 400);
    }
    query.status = status;
  }

  const skillProgressList = await UserSkillProgress.find(query)
    .populate("skillId", "_id name slug category difficulty")
    .sort({ updatedAt: -1 });

  return skillProgressList;
};

/**
 * 8. GET /api/progress/skills/:skillId
 * Return single skill progress record for authenticated student.
 */
const getUserSkillProgressById = async ({ userId, skillId }) => {
  if (!mongoose.Types.ObjectId.isValid(skillId)) {
    throw new AppError("Invalid Skill ID format", 400);
  }

  const skill = await Skill.findById(skillId);
  if (!skill) {
    throw new AppError("Referenced Skill does not exist in global catalog", 404);
  }

  const progress = await UserSkillProgress.findOne({ userId, skillId }).populate(
    "skillId",
    "_id name slug category difficulty"
  );

  if (!progress) {
    throw new AppError("Skill progress not found", 404);
  }

  return progress;
};

/**
 * 9. PUT /api/progress/skills/:skillId
 * Create or update global skill progress for authenticated student.
 */
const upsertUserSkillProgress = async ({ userId, skillId, status, proficiency, source }) => {
  if (!mongoose.Types.ObjectId.isValid(skillId)) {
    throw new AppError("Invalid Skill ID format", 400);
  }

  const skill = await Skill.findById(skillId);
  if (!skill) {
    throw new AppError("Referenced Skill does not exist in global catalog", 404);
  }

  if (status && !ALLOWED_SKILL_STATUSES.includes(status)) {
    throw new AppError(`Invalid skill progress status: '${status}'`, 400);
  }

  if (source && !ALLOWED_SKILL_SOURCES.includes(source)) {
    throw new AppError(`Invalid skill progress source: '${source}'`, 400);
  }

  if (proficiency !== undefined) {
    const profNum = Number(proficiency);
    if (isNaN(profNum) || profNum < 0 || profNum > 100) {
      throw new AppError("Proficiency percentage must be a number between 0 and 100", 400);
    }
  }

  let progress = await UserSkillProgress.findOne({ userId, skillId });

  if (!progress) {
    if (!source) {
      throw new AppError("Skill progress source is required for new progress records", 400);
    }
    const initialStatus = status || "not_started";
    let initialProficiency = proficiency !== undefined ? Number(proficiency) : 0;
    if (initialStatus === "completed" && proficiency === undefined) {
      initialProficiency = 100;
    }

    progress = await UserSkillProgress.create({
      userId,
      skillId,
      status: initialStatus,
      proficiency: initialProficiency,
      source,
    });
  } else {
    if (status !== undefined) progress.status = status;
    if (source !== undefined) progress.source = source;

    if (proficiency !== undefined) {
      progress.proficiency = Number(proficiency);
    } else if (status === "completed" && progress.proficiency === 0) {
      progress.proficiency = 100;
    }

    await progress.save();
  }

  return progress.populate("skillId", "_id name slug category difficulty");
};

/**
 * 10. DELETE /api/progress/skills/:skillId
 * Remove global skill progress record for authenticated student.
 */
const deleteUserSkillProgress = async ({ userId, skillId }) => {
  if (!mongoose.Types.ObjectId.isValid(skillId)) {
    throw new AppError("Invalid Skill ID format", 400);
  }

  const deletedProgress = await UserSkillProgress.findOneAndDelete({ userId, skillId });
  if (!deletedProgress) {
    throw new AppError("Skill progress not found", 404);
  }

  return true;
};

module.exports = {
  getUserCareerProgresses,
  getUserCareerProgressById,
  startCareerProgress,
  completeRoadmapStep,
  undoRoadmapStep,
  deleteUserCareerProgress,
  getUserSkillProgresses,
  getUserSkillProgressById,
  upsertUserSkillProgress,
  deleteUserSkillProgress,
};

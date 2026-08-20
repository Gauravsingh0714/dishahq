const mongoose = require("mongoose");
const { Career, UserSkillProgress } = require("../models");
const AppError = require("../utils/AppError");

/**
 * Rule 17: Skill Deletion Safety Guard.
 * Prevents deleting a Skill if referenced by Careers (required, optional, steps, projects)
 * or active UserSkillProgress records.
 */
const validateSkillDeletion = async (skillId) => {
  if (!mongoose.Types.ObjectId.isValid(skillId)) {
    throw new AppError("Invalid Skill ID format", 400);
  }

  const sId = new mongoose.Types.ObjectId(skillId);

  // Check 1: UserSkillProgress references
  const userProgressCount = await UserSkillProgress.countDocuments({ skillId: sId });
  if (userProgressCount > 0) {
    throw new AppError(
      `Cannot delete skill because ${userProgressCount} student progress record(s) reference it`,
      409
    );
  }

  // Check 2: Career references (required, optional, step skills, project skills)
  const referencingCareer = await Career.findOne({
    $or: [
      { requiredSkillIds: sId },
      { optionalSkillIds: sId },
      { "roadmap.phases.steps.skillIds": sId },
      { "roadmap.phases.steps.projects.skillIds": sId },
    ],
  }).select("_id name");

  if (referencingCareer) {
    throw new AppError(
      `Cannot delete skill because it is referenced in career roadmap '${referencingCareer.name}'`,
      409
    );
  }
};

module.exports = {
  validateSkillDeletion,
};

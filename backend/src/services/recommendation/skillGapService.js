const { RECOMMENDATION_CONSTANTS } = require("../../constants/careerSignals");

/**
 * Skill Gap & Readiness Service for DISHA Recommendation Engine (Phase C7)
 * Analyzes gaps between user proficiency and target career requirements.
 * Readiness = Required Coverage × 0.80 + Optional Coverage × 0.20
 */

/**
 * Computes individual skill gap telemetry.
 */
function analyzeSingleSkillGap(skillDoc, progressRecord = null, targetProficiency = 100, allSkillsMap = null) {
  let finalSkillDoc = skillDoc;
  const skillIdStr = skillDoc && skillDoc._id ? skillDoc._id.toString() : (skillDoc ? skillDoc.toString() : "");

  if (allSkillsMap && allSkillsMap.has(skillIdStr)) {
    finalSkillDoc = allSkillsMap.get(skillIdStr);
  }

  const hasRecord = progressRecord !== null && progressRecord !== undefined;
  const currentProficiency = hasRecord && typeof progressRecord.proficiency === "number"
    ? Math.min(Math.max(progressRecord.proficiency, 0), 100)
    : 0;

  const gap = Math.max(targetProficiency - currentProficiency, 0);

  // Safe division-by-zero severity calculation
  const severity = targetProficiency > 0
    ? Math.round(((targetProficiency - currentProficiency) / targetProficiency) * 100) / 100
    : 0;

  const isCompleted = currentProficiency >= targetProficiency;
  const status = hasRecord ? progressRecord.status : "not_started";
  const userStatusLabel = hasRecord ? status : "No progress recorded";

  return {
    skillId: skillIdStr,
    name: finalSkillDoc && finalSkillDoc.name ? finalSkillDoc.name : "Unknown Skill",
    slug: finalSkillDoc && finalSkillDoc.slug ? finalSkillDoc.slug : "",
    category: finalSkillDoc && finalSkillDoc.category ? finalSkillDoc.category : "",
    difficulty: finalSkillDoc && finalSkillDoc.difficulty ? finalSkillDoc.difficulty : "beginner",
    targetProficiency,
    currentProficiency,
    gap,
    severity: Math.max(severity, 0),
    isCompleted,
    hasRecord,
    status,
    userStatusLabel,
  };
}

/**
 * Computes comprehensive Skill Gap Analysis & Readiness Breakdown for a target career.
 */
function analyzeCareerSkillGaps(career, userProgressMap = new Map(), allSkillsMap = null) {
  const requiredSkills = career.requiredSkillIds || [];
  const optionalSkills = career.optionalSkillIds || [];

  const requiredGaps = requiredSkills.map((skill) =>
    analyzeSingleSkillGap(
      skill,
      userProgressMap.get(skill._id ? skill._id.toString() : skill.toString()),
      100,
      allSkillsMap
    )
  );

  const optionalGaps = optionalSkills.map((skill) =>
    analyzeSingleSkillGap(
      skill,
      userProgressMap.get(skill._id ? skill._id.toString() : skill.toString()),
      100,
      allSkillsMap
    )
  );

  // Required Coverage calculation
  let requiredCoverage = 1.0;
  if (requiredGaps.length > 0) {
    const totalCurrent = requiredGaps.reduce((acc, g) => acc + g.currentProficiency, 0);
    const totalTarget = requiredGaps.reduce((acc, g) => acc + g.targetProficiency, 0);
    requiredCoverage = totalTarget > 0 ? Math.min(totalCurrent / totalTarget, 1.0) : 1.0;
  }

  // Optional Coverage calculation
  let optionalCoverage = 1.0;
  if (optionalGaps.length > 0) {
    const totalCurrent = optionalGaps.reduce((acc, g) => acc + g.currentProficiency, 0);
    const totalTarget = optionalGaps.reduce((acc, g) => acc + g.targetProficiency, 0);
    optionalCoverage = totalTarget > 0 ? Math.min(totalCurrent / totalTarget, 1.0) : 1.0;
  }

  // Overall Readiness (0.0 - 100.0%)
  const rawReadiness =
    RECOMMENDATION_CONSTANTS.REQUIRED_READINESS_WEIGHT * requiredCoverage +
    RECOMMENDATION_CONSTANTS.OPTIONAL_READINESS_WEIGHT * optionalCoverage;

  const readinessScore = Math.round(rawReadiness * 100 * 100) / 100;
  const requiredCoverageScore = Math.round(requiredCoverage * 100 * 100) / 100;
  const optionalCoverageScore = Math.round(optionalCoverage * 100 * 100) / 100;

  const totalRequiredSkillCount = requiredGaps.length;
  const completedRequiredSkillCount = requiredGaps.filter((g) => g.isCompleted).length;
  const totalOptionalSkillCount = optionalGaps.length;
  const completedOptionalSkillCount = optionalGaps.filter((g) => g.isCompleted).length;

  return {
    readinessScore,
    summary: {
      requiredCoverage: requiredCoverageScore,
      optionalCoverage: optionalCoverageScore,
      totalSkillsCount: totalRequiredSkillCount + totalOptionalSkillCount,
      completedSkillsCount: completedRequiredSkillCount + completedOptionalSkillCount,
      totalRequiredSkillCount,
      completedRequiredSkillCount,
      totalOptionalSkillCount,
      completedOptionalSkillCount,
    },
    requiredSkillGaps: requiredGaps,
    optionalSkillGaps: optionalGaps,
  };
}

module.exports = {
  analyzeSingleSkillGap,
  analyzeCareerSkillGaps,
};

const { RECOMMENDATION_CONSTANTS, CAREER_SIGNAL_PROFILES } = require("../../constants/careerSignals");

/**
 * Deterministic Scoring Service for DISHA Recommendation Engine (Phase C7)
 * Implements weighted scoring model:
 * Overall Score = (Assessment Fit × 0.60 + Skill Fit × 0.30 + Preference Fit × 0.10) × 100
 */

/**
 * Calculates Assessment Fit (0.0 - 1.0) between user assessment signals and career target signals.
 */
function calculateAssessmentFit(userSignals = {}, careerSlug) {
  const profile = CAREER_SIGNAL_PROFILES[careerSlug];
  if (!profile || !profile.signals) {
    return 0.5; // Default neutral fit if profile is not explicitly configured
  }

  const targetSignals = profile.signals;
  const targetWeights = profile.weights || {};
  const dimensions = Object.keys(targetSignals);

  if (dimensions.length === 0) return 0.5;

  let totalWeightedMatch = 0;
  let totalWeight = 0;

  for (const dim of dimensions) {
    const targetVal = targetSignals[dim];
    const weight = targetWeights[dim] || 1.0;
    
    // User signal value normalized 0.0 - 1.0; default to 0.5 if dimension missing
    const userVal = typeof userSignals[dim] === "number" ? userSignals[dim] : 0.5;

    const signalMatch = 1.0 - Math.abs(userVal - targetVal);
    totalWeightedMatch += weight * signalMatch;
    totalWeight += weight;
  }

  return totalWeight > 0 ? totalWeightedMatch / totalWeight : 0.5;
}

/**
 * Calculates Skill Fit (0.0 - 1.0) based on user proficiency in required and optional career skills.
 * Skill Fit = Required Skill Fit × 0.70 + Optional Skill Fit × 0.30
 * User proficiency input is 0 - 100, normalized internally to 0.0 - 1.0.
 */
function calculateSkillFit(requiredSkills = [], optionalSkills = [], userProgressMap = new Map()) {
  // Required Skills Fit
  let reqFit = 1.0;
  if (requiredSkills.length > 0) {
    let reqSum = 0;
    for (const skill of requiredSkills) {
      const skillIdStr = skill._id ? skill._id.toString() : skill.toString();
      const progress = userProgressMap.get(skillIdStr);
      const prof = progress && typeof progress.proficiency === "number" ? progress.proficiency : 0;
      reqSum += Math.min(Math.max(prof, 0), 100) / 100.0;
    }
    reqFit = reqSum / requiredSkills.length;
  }

  // Optional Skills Fit
  let optFit = 1.0;
  if (optionalSkills.length > 0) {
    let optSum = 0;
    for (const skill of optionalSkills) {
      const skillIdStr = skill._id ? skill._id.toString() : skill.toString();
      const progress = userProgressMap.get(skillIdStr);
      const prof = progress && typeof progress.proficiency === "number" ? progress.proficiency : 0;
      optSum += Math.min(Math.max(prof, 0), 100) / 100.0;
    }
    optFit = optSum / optionalSkills.length;
  }

  return (
    RECOMMENDATION_CONSTANTS.REQUIRED_SKILL_WEIGHT * reqFit +
    RECOMMENDATION_CONSTANTS.OPTIONAL_SKILL_WEIGHT * optFit
  );
}

/**
 * Calculates Preference Fit (0.0 - 1.0).
 * Defaults to 0.50 if preference data is unavailable in V1.
 */
function calculatePreferenceFit(userPreferences = {}, career) {
  if (!userPreferences || Object.keys(userPreferences).length === 0) {
    return RECOMMENDATION_CONSTANTS.DEFAULT_PREFERENCE_FIT;
  }

  let matchScore = 0.5;
  let matches = 0;
  let totalChecks = 0;

  if (userPreferences.preferredCategory && career.category) {
    totalChecks++;
    if (userPreferences.preferredCategory.toLowerCase() === career.category.toLowerCase()) {
      matches++;
    }
  }

  if (userPreferences.desiredSalary && career.marketMetadata?.averageSalary?.amount) {
    totalChecks++;
    if (career.marketMetadata.averageSalary.amount >= userPreferences.desiredSalary) {
      matches++;
    }
  }

  if (totalChecks > 0) {
    matchScore = matches / totalChecks;
  }

  return matchScore;
}

/**
 * Computes the complete score breakdown and match label for a career.
 */
function computeCareerScore({
  career,
  userSignals = {},
  userProgressMap = new Map(),
  userPreferences = {},
}) {
  const assessmentFit = calculateAssessmentFit(userSignals, career.slug);
  const skillFit = calculateSkillFit(career.requiredSkillIds, career.optionalSkillIds, userProgressMap);
  const preferenceFit = calculatePreferenceFit(userPreferences, career);

  const rawScore =
    RECOMMENDATION_CONSTANTS.ASSESSMENT_WEIGHT * assessmentFit +
    RECOMMENDATION_CONSTANTS.SKILL_WEIGHT * skillFit +
    RECOMMENDATION_CONSTANTS.PREFERENCE_WEIGHT * preferenceFit;

  // Normalized overall score scaled 0.00 - 100.00 rounded to 2 decimal places
  const overallScore = Math.round(rawScore * 100 * 100) / 100;
  const assessmentFitScore = Math.round(assessmentFit * 100 * 100) / 100;
  const skillFitScore = Math.round(skillFit * 100 * 100) / 100;
  const preferenceFitScore = Math.round(preferenceFit * 100 * 100) / 100;

  let matchLabel = RECOMMENDATION_CONSTANTS.MATCH_LABELS.WEAK;
  if (overallScore >= 80.0) {
    matchLabel = RECOMMENDATION_CONSTANTS.MATCH_LABELS.STRONG;
  } else if (overallScore >= 65.0) {
    matchLabel = RECOMMENDATION_CONSTANTS.MATCH_LABELS.GOOD;
  } else if (overallScore >= 50.0) {
    matchLabel = RECOMMENDATION_CONSTANTS.MATCH_LABELS.POTENTIAL;
  }

  return {
    overallScore,
    matchLabel,
    breakdown: {
      assessmentFit: assessmentFitScore,
      skillFit: skillFitScore,
      preferenceFit: preferenceFitScore,
    },
    raw: {
      assessmentFit,
      skillFit,
      preferenceFit,
    },
  };
}

module.exports = {
  calculateAssessmentFit,
  calculateSkillFit,
  calculatePreferenceFit,
  computeCareerScore,
};

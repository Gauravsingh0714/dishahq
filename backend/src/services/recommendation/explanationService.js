const { CAREER_SIGNAL_PROFILES } = require("../../constants/careerSignals");

/**
 * Deterministic Explanation & Evidence Service for DISHA Recommendation Engine (Phase C7)
 * Generates transparent, evidence-grounded explanations without LLM hallucination or score contradiction.
 */

/**
 * Evaluates recommendation confidence (HIGH, MEDIUM, LOW) based on empirical data quality.
 */
function calculateConfidence(userAssessment, userProgressMap = new Map()) {
  const isAssessmentCompleted = Boolean(userAssessment && userAssessment.isCompleted);
  const userSignalsCount = userAssessment?.signals ? (userAssessment.signals.size || Object.keys(userAssessment.signals).length) : 0;
  const progressRecordsCount = userProgressMap.size;

  if (isAssessmentCompleted && userSignalsCount >= 5 && progressRecordsCount >= 3) {
    return {
      level: "HIGH",
      reason: "Complete career assessment and active skill progress records evaluated.",
    };
  } else if (isAssessmentCompleted && userSignalsCount >= 3) {
    return {
      level: "MEDIUM",
      reason: "Completed career assessment evaluated with baseline skill progress data.",
    };
  }

  return {
    level: "LOW",
    reason: "Limited assessment signals or early-stage profile evaluation.",
  };
}

/**
 * Generates structured explanation evidence payload for a career recommendation.
 */
function generateCareerExplanation({
  career,
  scoreResult,
  skillGapResult,
  learningPrioritiesResult,
  userAssessment = {},
  userProgressMap = new Map(),
}) {
  const { overallScore, matchLabel, breakdown } = scoreResult;
  const userSignals = userAssessment.signals || {};

  // 1. Top 3 Supporting Assessment Signals
  const profile = CAREER_SIGNAL_PROFILES[career.slug] || {};
  const targetSignals = profile.signals || {};
  const signalMatches = [];

  for (const [dim, targetVal] of Object.entries(targetSignals)) {
    const userVal = typeof userSignals[dim] === "number" ? userSignals[dim] : 0.5;
    const matchVal = 1.0 - Math.abs(userVal - targetVal);
    signalMatches.push({
      dimension: dim,
      userSignal: userVal,
      targetSignal: targetVal,
      matchPercentage: Math.round(matchVal * 100),
    });
  }

  signalMatches.sort((a, b) => b.matchPercentage - a.matchPercentage);
  const topWhyItMatches = signalMatches.slice(0, 3).map((m) => ({
    dimension: m.dimension,
    evidence: `High alignment in ${m.dimension} (${m.matchPercentage}% match between your preference profile and ${career.name} requirements).`,
  }));

  // 2. Current Strengths (Completed or High-Proficiency Skills)
  const strengths = [];
  const allGaps = [
    ...(skillGapResult.requiredSkillGaps || []),
    ...(skillGapResult.optionalSkillGaps || []),
  ];

  for (const g of allGaps) {
    if (g.currentProficiency >= 50) {
      strengths.push({
        skillName: g.name,
        slug: g.slug,
        proficiency: g.currentProficiency,
        status: g.isCompleted ? "Completed" : "In Progress",
      });
    }
  }

  // 3. Key Skill Gaps
  const topGaps = allGaps
    .filter((g) => !g.isCompleted)
    .sort((a, b) => b.severity - a.severity)
    .slice(0, 3)
    .map((g) => ({
      skillName: g.name,
      slug: g.slug,
      gapProficiency: g.gap,
      userStatus: g.userStatusLabel,
    }));

  // 4. Next Steps (Top 2 Actionable Priorities)
  const nextSteps = (learningPrioritiesResult.learningPriorities || [])
    .slice(0, 2)
    .map((p) => ({
      skillName: p.name,
      slug: p.slug,
      action: p.status === "ACTIONABLE" ? "Start learning now" : "Unlock prerequisites first",
      missingPrerequisites: p.missingPrerequisites.map((mp) => mp.name),
    }));

  // 5. Cold Start Explanation Check
  const isColdStart = userProgressMap.size === 0 || strengths.length === 0;
  let coldStartNotice = null;
  if (isColdStart) {
    coldStartNotice = "Your career assessment shows strong potential alignment. Technical readiness is initialized at baseline; logging your skill progress will update your readiness and unlock targeted learning priorities.";
  }

  // 6. Confidence Level
  const confidence = calculateConfidence(userAssessment, userProgressMap);

  return {
    careerMatch: `You are a ${matchLabel} (${overallScore}/100) for ${career.name}.`,
    whyItMatches: topWhyItMatches,
    currentStrengths: strengths,
    skillGaps: topGaps,
    nextSteps,
    coldStartNotice,
    confidence,
  };
}

module.exports = {
  calculateConfidence,
  generateCareerExplanation,
};

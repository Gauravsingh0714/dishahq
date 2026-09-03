const { User, Skill, Career, UserSkillProgress, UserCareerProgress } = require("../../models");
const AppError = require("../../utils/AppError");
const { computeCareerScore } = require("./scoringService");
const { analyzeCareerSkillGaps } = require("./skillGapService");
const { evaluateLearningPriorities } = require("./prerequisiteService");
const { generateCareerExplanation } = require("./explanationService");
const { RECOMMENDATION_CONSTANTS } = require("../../constants/careerSignals");

/**
 * Main Orchestration Service for DISHA Recommendation Engine (Phase C7)
 * Executes batch data loading to prevent N+1 queries, enforces authoritative backend filtering,
 * deterministic ranking, thresholding, and user data isolation.
 */

/**
 * Helper to batch-load user context and database models in memory.
 */
async function loadRecommendationContext(userId) {
  const user = await User.findById(userId).lean();
  if (!user) {
    throw new AppError("User account not found", 404);
  }

  // Check assessment completion requirement
  const isAssessmentCompleted = Boolean(
    user.isQuizCompleted || (user.assessment && user.assessment.isCompleted)
  );

  if (!isAssessmentCompleted) {
    const error = new AppError(
      "Assessment completion is required to generate career recommendations",
      400
    );
    error.code = "ASSESSMENT_REQUIRED";
    throw error;
  }

  // Batch query: All published careers
  const publishedCareers = await Career.find({ isPublished: true })
    .populate("requiredSkillIds optionalSkillIds")
    .lean();

  if (!publishedCareers || publishedCareers.length === 0) {
    return {
      user,
      publishedCareers: [],
      allSkillsMap: new Map(),
      userProgressMap: new Map(),
      userCareerProgressMap: new Map(),
    };
  }

  // Batch query: All Skills
  const allSkills = await Skill.find().populate("prerequisiteSkillIds").lean();
  const allSkillsMap = new Map();
  for (const s of allSkills) {
    allSkillsMap.set(s._id.toString(), s);
  }

  // Batch query: User Skill Progress
  const userSkillProgresses = await UserSkillProgress.find({ userId }).lean();
  const userProgressMap = new Map();
  for (const p of userSkillProgresses) {
    // Check for orphan skill reference
    if (p.skillId) {
      userProgressMap.set(p.skillId.toString(), p);
    }
  }

  // Batch query: User Career Progress
  const userCareerProgresses = await UserCareerProgress.find({ userId }).lean();
  const userCareerProgressMap = new Map();
  for (const cp of userCareerProgresses) {
    if (cp.careerId) {
      userCareerProgressMap.set(cp.careerId.toString(), cp);
    }
  }

  return {
    user,
    publishedCareers,
    allSkillsMap,
    userProgressMap,
    userCareerProgressMap,
  };
}

/**
 * Normalizes user assessment signals map/object into a plain object.
 */
function extractUserSignals(user) {
  if (!user || !user.assessment || !user.assessment.signals) {
    return {};
  }
  const rawSignals = user.assessment.signals;
  if (rawSignals instanceof Map) {
    return Object.fromEntries(rawSignals);
  }
  return typeof rawSignals === "object" ? rawSignals : {};
}

/**
 * GET /api/recommendations — Returns TOP 3 ranked career recommendations.
 */
async function getRankedRecommendations(userId) {
  const {
    user,
    publishedCareers,
    allSkillsMap,
    userProgressMap,
  } = await loadRecommendationContext(userId);

  if (publishedCareers.length === 0) {
    return {
      recommendations: [],
      count: 0,
      algorithmVersion: RECOMMENDATION_CONSTANTS.ALGORITHM_VERSION,
    };
  }

  const userSignals = extractUserSignals(user);
  const userPreferences = user.preferences || {};
  const scoredCareers = [];

  for (const career of publishedCareers) {
    const scoreResult = computeCareerScore({
      career,
      userSignals,
      userProgressMap,
      userPreferences,
    });

    const skillGapResult = analyzeCareerSkillGaps(career, userProgressMap, allSkillsMap);
    const learningPrioritiesResult = evaluateLearningPriorities(career, allSkillsMap, userProgressMap);
    const explanation = generateCareerExplanation({
      career,
      scoreResult,
      skillGapResult,
      learningPrioritiesResult,
      userAssessment: user.assessment || { isCompleted: true, signals: userSignals },
      userProgressMap,
    });

    scoredCareers.push({
      career: {
        _id: career._id,
        name: career.name,
        slug: career.slug,
        category: career.category,
        difficulty: career.difficulty,
        shortDescription: career.shortDescription,
        marketMetadata: career.marketMetadata,
      },
      matchScore: scoreResult.overallScore,
      matchLabel: scoreResult.matchLabel,
      readinessScore: skillGapResult.readinessScore,
      scoreBreakdown: scoreResult.breakdown,
      explanation,
      rawScore: scoreResult,
    });
  }

  // Authoritative Threshold Filtering: Only score >= 50.00 is eligible
  const eligibleCareers = scoredCareers.filter(
    (item) => item.matchScore >= RECOMMENDATION_CONSTANTS.RECOMMENDATION_THRESHOLD
  );

  // Deterministic Ranking Sort:
  // 1. matchScore descending
  // 2. assessmentFit descending
  // 3. skillFit descending
  // 4. Alphabetical by slug ascending
  eligibleCareers.sort((a, b) => {
    if (a.matchScore !== b.matchScore) return b.matchScore - a.matchScore;
    if (a.rawScore.raw.assessmentFit !== b.rawScore.raw.assessmentFit)
      return b.rawScore.raw.assessmentFit - a.rawScore.raw.assessmentFit;
    if (a.rawScore.raw.skillFit !== b.rawScore.raw.skillFit)
      return b.rawScore.raw.skillFit - a.rawScore.raw.skillFit;
    return a.career.slug.localeCompare(b.career.slug);
  });

  // Return maximum TOP 3
  const topRecommendations = eligibleCareers
    .slice(0, RECOMMENDATION_CONSTANTS.MAX_RECOMMENDATIONS)
    .map((item) => {
      const { rawScore, ...publicItem } = item;
      return publicItem;
    });

  return {
    recommendations: topRecommendations,
    count: topRecommendations.length,
    algorithmVersion: RECOMMENDATION_CONSTANTS.ALGORITHM_VERSION,
  };
}

/**
 * GET /api/recommendations/:careerSlug — Detailed recommendation for a specific career.
 */
async function getCareerRecommendationDetail(userId, careerSlug) {
  const {
    user,
    publishedCareers,
    allSkillsMap,
    userProgressMap,
  } = await loadRecommendationContext(userId);

  const career = publishedCareers.find((c) => c.slug === careerSlug);
  if (!career) {
    const error = new AppError(`Career not found or unpublished: ${careerSlug}`, 404);
    error.code = "CAREER_NOT_FOUND";
    throw error;
  }

  const userSignals = extractUserSignals(user);
  const userPreferences = user.preferences || {};

  const scoreResult = computeCareerScore({
    career,
    userSignals,
    userProgressMap,
    userPreferences,
  });

  const skillGapResult = analyzeCareerSkillGaps(career, userProgressMap, allSkillsMap);
  const learningPrioritiesResult = evaluateLearningPriorities(career, allSkillsMap, userProgressMap);
  const explanation = generateCareerExplanation({
    career,
    scoreResult,
    skillGapResult,
    learningPrioritiesResult,
    userAssessment: user.assessment || { isCompleted: true, signals: userSignals },
    userProgressMap,
  });

  return {
    career: {
      _id: career._id,
      name: career.name,
      slug: career.slug,
      category: career.category,
      difficulty: career.difficulty,
      shortDescription: career.shortDescription,
      description: career.description,
      marketMetadata: career.marketMetadata,
    },
    matchScore: scoreResult.overallScore,
    matchLabel: scoreResult.matchLabel,
    readinessScore: skillGapResult.readinessScore,
    scoreBreakdown: scoreResult.breakdown,
    skillGapSummary: skillGapResult.summary,
    topLearningPriorities: learningPrioritiesResult.learningPriorities,
    explanation,
    algorithmVersion: RECOMMENDATION_CONSTANTS.ALGORITHM_VERSION,
  };
}

/**
 * GET /api/recommendations/:careerSlug/skill-gaps — Complete skill gap analysis.
 */
async function getCareerSkillGaps(userId, careerSlug) {
  const {
    publishedCareers,
    allSkillsMap,
    userProgressMap,
  } = await loadRecommendationContext(userId);

  const career = publishedCareers.find((c) => c.slug === careerSlug);
  if (!career) {
    const error = new AppError(`Career not found or unpublished: ${careerSlug}`, 404);
    error.code = "CAREER_NOT_FOUND";
    throw error;
  }

  const skillGapResult = analyzeCareerSkillGaps(career, userProgressMap, allSkillsMap);

  return {
    careerSlug: career.slug,
    careerName: career.name,
    readinessScore: skillGapResult.readinessScore,
    summary: skillGapResult.summary,
    requiredSkillGaps: skillGapResult.requiredSkillGaps,
    optionalSkillGaps: skillGapResult.optionalSkillGaps,
  };
}

/**
 * GET /api/recommendations/:careerSlug/learning-priorities — Prerequisite-aware learning queue.
 */
async function getCareerLearningPriorities(userId, careerSlug) {
  const {
    publishedCareers,
    allSkillsMap,
    userProgressMap,
  } = await loadRecommendationContext(userId);

  const career = publishedCareers.find((c) => c.slug === careerSlug);
  if (!career) {
    const error = new AppError(`Career not found or unpublished: ${careerSlug}`, 404);
    error.code = "CAREER_NOT_FOUND";
    throw error;
  }

  const learningPrioritiesResult = evaluateLearningPriorities(career, allSkillsMap, userProgressMap);

  return {
    careerSlug: career.slug,
    careerName: career.name,
    learningPriorities: learningPrioritiesResult.learningPriorities,
    queueSummary: {
      actionableCount: learningPrioritiesResult.actionableCount,
      blockedCount: learningPrioritiesResult.blockedCount,
      completedCount: learningPrioritiesResult.completedCount,
    },
  };
}

/**
 * Submits/Saves User Assessment Signals & Answers.
 */
async function saveUserAssessment(userId, { answers = {}, signals = {}, preferences = {} }) {
  const user = await User.findById(userId);
  if (!user) {
    throw new AppError("User account not found", 404);
  }

  user.isQuizCompleted = true;
  user.assessment = {
    isCompleted: true,
    completedAt: new Date(),
    version: RECOMMENDATION_CONSTANTS.ASSESSMENT_VERSION,
    signals: new Map(Object.entries(signals)),
    answers: new Map(Object.entries(answers)),
  };

  if (preferences && Object.keys(preferences).length > 0) {
    user.preferences = {
      ...user.preferences,
      ...preferences,
    };
  }

  await user.save();

  return {
    isCompleted: user.assessment.isCompleted,
    completedAt: user.assessment.completedAt,
    version: user.assessment.version,
    signalsCount: Object.keys(signals).length,
  };
}

module.exports = {
  loadRecommendationContext,
  getRankedRecommendations,
  getCareerRecommendationDetail,
  getCareerSkillGaps,
  getCareerLearningPriorities,
  saveUserAssessment,
};

/**
 * Authoritative Career Signal Profiles & Recommendation Algorithm Constants (Phase C7)
 * Defines normalized signal expectations (0.0 - 1.0) across 15 assessment dimensions for all 12 published careers.
 */

const RECOMMENDATION_CONSTANTS = {
  ALGORITHM_VERSION: "v1",
  ASSESSMENT_VERSION: "v1",

  // Scoring Weights
  ASSESSMENT_WEIGHT: 0.60,
  SKILL_WEIGHT: 0.30,
  PREFERENCE_WEIGHT: 0.10,

  // Skill Fit Sub-weights
  REQUIRED_SKILL_WEIGHT: 0.70,
  OPTIONAL_SKILL_WEIGHT: 0.30,

  // Readiness Sub-weights
  REQUIRED_READINESS_WEIGHT: 0.80,
  OPTIONAL_READINESS_WEIGHT: 0.20,

  // Recommendation Eligibility & Ranking Thresholds
  RECOMMENDATION_THRESHOLD: 50.0,
  DEFAULT_PREFERENCE_FIT: 0.50,
  MAX_RECOMMENDATIONS: 3,
  MAX_LEARNING_PRIORITIES: 5,

  // Match Labels
  MATCH_LABELS: {
    STRONG: "Strong Match",      // 80.00 - 100.00
    GOOD: "Good Match",          // 65.00 - 79.99
    POTENTIAL: "Potential Match",// 50.00 - 64.99
    WEAK: "Weak Match",          // < 50.00
  },
};

/**
 * Career Signal Profiles mapping career slugs to target dimension weights and signals.
 * All signals are normalized between 0.0 and 1.0.
 */
const CAREER_SIGNAL_PROFILES = {
  "frontend-developer": {
    signals: {
      development: 0.90,
      userFocus: 0.85,
      design: 0.75,
      creativity: 0.80,
      problemSolving: 0.85,
      systemsThinking: 0.65,
    },
    weights: {
      development: 1.0,
      userFocus: 0.9,
      design: 0.8,
      creativity: 0.8,
      problemSolving: 0.9,
      systemsThinking: 0.6,
    },
  },
  "backend-developer": {
    signals: {
      development: 0.90,
      systemsThinking: 0.90,
      infrastructure: 0.80,
      problemSolving: 0.90,
      automation: 0.80,
      security: 0.75,
    },
    weights: {
      development: 1.0,
      systemsThinking: 1.0,
      infrastructure: 0.8,
      problemSolving: 0.9,
      automation: 0.8,
      security: 0.7,
    },
  },
  "full-stack-developer": {
    signals: {
      development: 0.95,
      systemsThinking: 0.85,
      userFocus: 0.80,
      problemSolving: 0.90,
      infrastructure: 0.75,
      design: 0.65,
    },
    weights: {
      development: 1.0,
      systemsThinking: 0.9,
      userFocus: 0.8,
      problemSolving: 0.9,
      infrastructure: 0.7,
      design: 0.6,
    },
  },
  "data-analyst": {
    signals: {
      data: 0.95,
      businessInsight: 0.90,
      problemSolving: 0.85,
      userFocus: 0.75,
      creativity: 0.70,
      systemsThinking: 0.70,
    },
    weights: {
      data: 1.0,
      businessInsight: 1.0,
      problemSolving: 0.9,
      userFocus: 0.7,
      creativity: 0.7,
      systemsThinking: 0.7,
    },
  },
  "data-scientist": {
    signals: {
      data: 0.95,
      aiMl: 0.85,
      problemSolving: 0.95,
      systemsThinking: 0.85,
      businessInsight: 0.80,
      automation: 0.75,
    },
    weights: {
      data: 1.0,
      aiMl: 0.9,
      problemSolving: 1.0,
      systemsThinking: 0.8,
      businessInsight: 0.8,
      automation: 0.7,
    },
  },
  "machine-learning-engineer": {
    signals: {
      aiMl: 0.95,
      data: 0.90,
      systemsThinking: 0.90,
      automation: 0.85,
      infrastructure: 0.85,
      development: 0.80,
    },
    weights: {
      aiMl: 1.0,
      data: 0.9,
      systemsThinking: 0.9,
      automation: 0.8,
      infrastructure: 0.8,
      development: 0.8,
    },
  },
  "ai-engineer": {
    signals: {
      aiMl: 0.95,
      development: 0.90,
      systemsThinking: 0.85,
      creativity: 0.80,
      userFocus: 0.80,
      automation: 0.80,
    },
    weights: {
      aiMl: 1.0,
      development: 0.9,
      systemsThinking: 0.8,
      creativity: 0.8,
      userFocus: 0.8,
      automation: 0.8,
    },
  },
  "devops-engineer": {
    signals: {
      infrastructure: 0.95,
      automation: 0.95,
      systemsThinking: 0.90,
      security: 0.80,
      problemSolving: 0.85,
      development: 0.75,
    },
    weights: {
      infrastructure: 1.0,
      automation: 1.0,
      systemsThinking: 0.9,
      security: 0.8,
      problemSolving: 0.8,
      development: 0.7,
    },
  },
  "cloud-engineer": {
    signals: {
      infrastructure: 0.95,
      systemsThinking: 0.90,
      security: 0.85,
      automation: 0.85,
      development: 0.75,
      problemSolving: 0.85,
    },
    weights: {
      infrastructure: 1.0,
      systemsThinking: 0.9,
      security: 0.8,
      automation: 0.8,
      development: 0.7,
      problemSolving: 0.8,
    },
  },
  "cybersecurity-analyst": {
    signals: {
      security: 0.95,
      systemsThinking: 0.90,
      infrastructure: 0.85,
      problemSolving: 0.90,
      automation: 0.75,
      businessInsight: 0.70,
    },
    weights: {
      security: 1.0,
      systemsThinking: 0.9,
      infrastructure: 0.8,
      problemSolving: 0.9,
      automation: 0.7,
      businessInsight: 0.7,
    },
  },
  "mobile-app-developer": {
    signals: {
      development: 0.90,
      userFocus: 0.90,
      design: 0.80,
      creativity: 0.80,
      problemSolving: 0.85,
      systemsThinking: 0.70,
    },
    weights: {
      development: 1.0,
      userFocus: 0.9,
      design: 0.8,
      creativity: 0.8,
      problemSolving: 0.8,
      systemsThinking: 0.7,
    },
  },
  "ui-ux-designer": {
    signals: {
      design: 0.95,
      userFocus: 0.95,
      creativity: 0.90,
      interests: 0.80,
      problemSolving: 0.85,
      businessInsight: 0.70,
    },
    weights: {
      design: 1.0,
      userFocus: 1.0,
      creativity: 0.9,
      interests: 0.8,
      problemSolving: 0.8,
      businessInsight: 0.7,
    },
  },
};

module.exports = {
  RECOMMENDATION_CONSTANTS,
  CAREER_SIGNAL_PROFILES,
};

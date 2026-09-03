const { RECOMMENDATION_CONSTANTS } = require("../../constants/careerSignals");

/**
 * Prerequisite & Learning Priorities Service for DISHA Recommendation Engine (Phase C7)
 * Uses Skill.prerequisiteSkillIds as authoritative dependency graph.
 * Enforces cycle protection, AND-gate prerequisite logic, and foundation prerequisite tracking.
 */

/**
 * Builds dependency map and depth metrics for all relevant skills in a career path.
 */
function buildDependencyGraph(allSkillsMap) {
  const graph = new Map(); // skillId -> Array of prereq skillIds

  for (const [skillId, skillDoc] of allSkillsMap.entries()) {
    const prereqIds = (skillDoc.prerequisiteSkillIds || []).map((p) =>
      p._id ? p._id.toString() : p.toString()
    );
    graph.set(skillId, prereqIds);
  }

  return graph;
}

/**
 * Computes maximum prerequisite depth for a skill with cycle protection.
 */
function calculateSkillDepth(skillId, graph, visited = new Set(), depthMemo = new Map()) {
  if (depthMemo.has(skillId)) return depthMemo.get(skillId);
  if (visited.has(skillId)) return 0; // Cycle detected: fallback safely

  visited.add(skillId);
  const prereqIds = graph.get(skillId) || [];

  if (prereqIds.length === 0) {
    depthMemo.set(skillId, 0);
    return 0;
  }

  let maxPrereqDepth = 0;
  for (const pId of prereqIds) {
    const d = calculateSkillDepth(pId, graph, new Set(visited), depthMemo);
    if (d > maxPrereqDepth) maxPrereqDepth = d;
  }

  const depth = 1 + maxPrereqDepth;
  depthMemo.set(skillId, depth);
  return depth;
}

/**
 * Computes unlocking value (number of dependent downstream skills this skill unlocks).
 */
function calculateUnlockingValue(skillId, graph) {
  let unlockCount = 0;
  for (const [otherId, prereqIds] of graph.entries()) {
    if (otherId !== skillId && prereqIds.includes(skillId)) {
      unlockCount++;
    }
  }
  return unlockCount;
}

/**
 * Analyzes prerequisite-aware learning queue & priorities for a career.
 */
function evaluateLearningPriorities(career, allSkillsMap, userProgressMap = new Map()) {
  const graph = buildDependencyGraph(allSkillsMap);
  const reqSkillIds = (career.requiredSkillIds || []).map((s) => s._id ? s._id.toString() : s.toString());
  const optSkillIds = (career.optionalSkillIds || []).map((s) => s._id ? s._id.toString() : s.toString());

  const reqSet = new Set(reqSkillIds);
  const optSet = new Set(optSkillIds);

  // Discover all relevant skill IDs including unlisted Foundation Prerequisites
  const targetSkillIds = new Set([...reqSkillIds, ...optSkillIds]);
  const processedSkillIds = new Set();
  const queueToProcess = Array.from(targetSkillIds);

  while (queueToProcess.length > 0) {
    const currId = queueToProcess.pop();
    if (processedSkillIds.has(currId)) continue;
    processedSkillIds.add(currId);

    const prereqIds = graph.get(currId) || [];
    for (const pId of prereqIds) {
      if (!processedSkillIds.has(pId)) {
        queueToProcess.push(pId);
      }
    }
  }

  const skillEvaluations = [];

  for (const skillId of processedSkillIds) {
    const skillDoc = allSkillsMap.get(skillId);
    if (!skillDoc) continue; // Isolation check for invalid skill reference

    let role = "foundation";
    let importance = 0.8; // Foundation prerequisite importance

    if (reqSet.has(skillId)) {
      role = "required";
      importance = 1.0;
    } else if (optSet.has(skillId)) {
      role = "optional";
      importance = 0.5;
    }

    const progress = userProgressMap.get(skillId);
    const currentProficiency = progress && typeof progress.proficiency === "number"
      ? Math.min(Math.max(progress.proficiency, 0), 100)
      : 0;

    const gap = Math.max(100 - currentProficiency, 0);
    const severity = gap / 100.0;
    const isCompleted = currentProficiency >= 100;

    const prereqIds = graph.get(skillId) || [];
    const missingPrereqs = [];

    let allPrereqsMet = true;
    for (const pId of prereqIds) {
      const pProgress = userProgressMap.get(pId);
      const pProf = pProgress && typeof pProgress.proficiency === "number" ? pProgress.proficiency : 0;
      if (pProf < 100) {
        allPrereqsMet = false;
        const pSkillDoc = allSkillsMap.get(pId);
        missingPrereqs.push({
          skillId: pId,
          name: pSkillDoc ? pSkillDoc.name : "Prerequisite Skill",
          slug: pSkillDoc ? pSkillDoc.slug : "",
          currentProficiency: pProf,
        });
      }
    }

    let status = "ACTIONABLE";
    if (isCompleted) {
      status = "COMPLETED";
    } else if (!allPrereqsMet) {
      status = "BLOCKED";
    }

    const depth = calculateSkillDepth(skillId, graph);
    const unlockingValue = calculateUnlockingValue(skillId, graph);

    skillEvaluations.push({
      skillId,
      name: skillDoc.name,
      slug: skillDoc.slug,
      category: skillDoc.category,
      difficulty: skillDoc.difficulty,
      role,
      importance,
      currentProficiency,
      gap,
      severity,
      isCompleted,
      status,
      depth,
      unlockingValue,
      missingPrerequisites: missingPrereqs,
    });
  }

  // Filter out completed skills from actionable queue
  const incompleteSkills = skillEvaluations.filter((s) => !s.isCompleted);

  // Sort learning priorities deterministically:
  // 1. Actionable status before Blocked status
  // 2. Depth ascending (Dependencies first!)
  // 3. Importance descending (Required/Foundation before Optional)
  // 4. Severity descending (Larger gap first)
  // 5. Unlocking value descending
  // 6. Alphabetical by slug
  incompleteSkills.sort((a, b) => {
    if (a.status === "ACTIONABLE" && b.status === "BLOCKED") return -1;
    if (a.status === "BLOCKED" && b.status === "ACTIONABLE") return 1;

    if (a.depth !== b.depth) return a.depth - b.depth;
    if (a.importance !== b.importance) return b.importance - a.importance;
    if (a.severity !== b.severity) return b.severity - a.severity;
    if (a.unlockingValue !== b.unlockingValue) return b.unlockingValue - a.unlockingValue;

    return a.slug.localeCompare(b.slug);
  });

  const topPriorities = incompleteSkills.slice(0, RECOMMENDATION_CONSTANTS.MAX_LEARNING_PRIORITIES);

  return {
    learningPriorities: topPriorities,
    allEvaluations: skillEvaluations,
    blockedCount: incompleteSkills.filter((s) => s.status === "BLOCKED").length,
    actionableCount: incompleteSkills.filter((s) => s.status === "ACTIONABLE").length,
    completedCount: skillEvaluations.filter((s) => s.isCompleted).length,
  };
}

module.exports = {
  buildDependencyGraph,
  calculateSkillDepth,
  calculateUnlockingValue,
  evaluateLearningPriorities,
};

require("dotenv").config();
const mongoose = require("mongoose");
const { Skill, Career } = require("../models");
const skillsSeedData = require("./skills.seed");
const frontendDeveloperCareerData = require("./careers/frontendDeveloper");
const backendDeveloperCareerData = require("./careers/backendDeveloper");
const fullStackDeveloperCareerData = require("./careers/fullStackDeveloper");
const dataAnalystCareerData = require("./careers/dataAnalyst");
const dataScientistCareerData = require("./careers/dataScientist");
const machineLearningEngineerCareerData = require("./careers/machineLearningEngineer");

/**
 * Idempotent Seed Runner Script for Disha Platform (Phase C6.5)
 * Seeds global skill taxonomy and canonical Frontend, Backend, Full Stack, Data Analyst, Data Scientist, and Machine Learning Engineer career paths.
 */
async function runSeedScript() {
  console.log("===================================================");
  console.log("STARTING DISHA PHASE C6.5 SEED EXECUTION");
  console.log("===================================================");

  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("MONGO_URI environment variable is missing");
    }

    await mongoose.connect(mongoUri);
    console.log("✓ Connected to MongoDB Atlas");

    // -----------------------------------------------------------------
    // STEP 1: UPSERT GLOBAL SKILLS CATALOG
    // -----------------------------------------------------------------
    console.log(`\n--- Seeding ${skillsSeedData.length} Global Skills ---`);
    const slugToSkillMap = new Map();

    // First pass: Upsert all skills without prerequisite IDs
    for (const item of skillsSeedData) {
      const { name, slug, category, description, difficulty } = item;
      const skillDoc = await Skill.findOneAndUpdate(
        { slug },
        { name, slug, category, description, difficulty },
        { upsert: true, returnDocument: "after", runValidators: true }
      );
      slugToSkillMap.set(slug, skillDoc._id);
      console.log(`✓ Skill upserted: ${slug}`);
    }

    // Second pass: Update prerequisiteSkillIds
    for (const item of skillsSeedData) {
      const { slug, prerequisiteSlugs = [] } = item;
      const prereqIds = prerequisiteSlugs
        .map((pSlug) => slugToSkillMap.get(pSlug))
        .filter(Boolean);

      await Skill.findOneAndUpdate(
        { slug },
        { prerequisiteSkillIds: prereqIds },
        { returnDocument: "after" }
      );
    }
    console.log("✓ All prerequisite skill relationships linked successfully");

    // Helper to resolve skill slugs and upsert a canonical career
    async function upsertCareer(careerData) {
      console.log(`\n--- Seeding Canonical Career: ${careerData.name} (${careerData.slug}) ---`);

      const resolveSlugs = (slugs = []) =>
        slugs.map((s) => slugToSkillMap.get(s)).filter(Boolean);

      const requiredSkillIds = resolveSlugs(careerData.requiredSkillSlugs);
      const optionalSkillIds = resolveSlugs(careerData.optionalSkillSlugs);

      const resolvedPhases = careerData.roadmap.phases.map((phase) => ({
        ...phase,
        steps: phase.steps.map((step) => ({
          ...step,
          skillIds: resolveSlugs(step.skillSlugs),
          projects: (step.projects || []).map((proj) => ({
            ...proj,
            skillIds: resolveSlugs(proj.skillSlugs),
          })),
        })),
      }));

      const finalCareerPayload = {
        name: careerData.name,
        slug: careerData.slug,
        category: careerData.category,
        shortDescription: careerData.shortDescription,
        description: careerData.description,
        difficulty: careerData.difficulty,
        requiredSkillIds,
        optionalSkillIds,
        marketMetadata: careerData.marketMetadata,
        roadmap: {
          roadmapVersion: careerData.roadmap.roadmapVersion,
          phases: resolvedPhases,
        },
        isPublished: careerData.isPublished,
      };

      const careerDoc = await Career.findOneAndUpdate(
        { slug: careerData.slug },
        finalCareerPayload,
        { upsert: true, returnDocument: "after", runValidators: true }
      );

      console.log(`✓ Career '${careerDoc.name}' (${careerDoc.slug}) seeded successfully with ${careerDoc.roadmap.phases.length} phases! ID: ${careerDoc._id}`);
      return careerDoc;
    }

    // -----------------------------------------------------------------
    // STEP 2: UPSERT CANONICAL CAREERS
    // -----------------------------------------------------------------
    await upsertCareer(frontendDeveloperCareerData);
    await upsertCareer(backendDeveloperCareerData);
    await upsertCareer(fullStackDeveloperCareerData);
    await upsertCareer(dataAnalystCareerData);
    await upsertCareer(dataScientistCareerData);
    await upsertCareer(machineLearningEngineerCareerData);

    console.log("\n===================================================");
    console.log("PHASE C6.5 SEED EXECUTION COMPLETED WITH 100% SUCCESS");
    console.log("===================================================");
  } catch (error) {
    console.error("❌ SEED EXECUTION FAILED:", error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

runSeedScript();

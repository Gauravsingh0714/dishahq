---
name: disha-career-curation
description: Standard operating procedure for researching, curating, validating, and documenting new DISHA canonical careers (Phases C6.7–C6.11) prior to database seed execution.
---

# DISHA Career Content Curation & Offline Validation Protocol

This skill governs Stage 1 content curation and offline validation for new DISHA V1 canonical careers (such as `devops-engineer`, `cloud-engineer`, `cybersecurity-analyst`, `mobile-app-developer`, and `ui-ux-designer`).

## 1. Source of Truth & Pre-Curation Inspection

Before curating any new career, inspect the authoritative source files in the repository:
- **Career Document Schema:** `backend/src/models/Career.js`
- **Global Skill Taxonomy:** `backend/src/seeds/skills.seed.js` (29 unique skills)
- **Reference Career Payloads:** `backend/src/seeds/careers/` (`frontendDeveloper.js`, `backendDeveloper.js`, `fullStackDeveloper.js`, `dataAnalyst.js`, `dataScientist.js`, `machineLearningEngineer.js`, `aiEngineer.js`)
- **Platform Architecture & Review Board:** `C6_CONTENT_REVIEW.md`

---

## 2. Separation of Schema Constraints vs. Curation Workflow Rules

### A. Mandatory Schema Constraints (Enforced by Mongoose Schema `Career.js`)
- **`name`**: Required String, trimmed.
- **`slug`**: Required String, unique, lowercase, trimmed, matching regex `/^[a-z0-9]+(?:-[a-z0-9]+)*$/`.
- **`category`**: Required String, enum `["development", "data", "ai_ml", "devops_cloud", "cybersecurity", "design"]`.
- **`difficulty`**: Required String, enum `["beginner", "intermediate", "advanced"]`.
- **`shortDescription`**: Required String, trimmed.
- **`description`**: Required String, trimmed.
- **`requiredSkillIds`**: Array of Skill ObjectIds (`ref: "Skill"`).
- **`optionalSkillIds`**: Array of Skill ObjectIds (`ref: "Skill"`).
- **`marketMetadata`**: Subdocument containing `salaryRange` (`min`, `max`, `currency`), `demandLevel` (enum `["low", "moderate", "high", "emerging"]`), `region`, `updatedAt`.
- **`roadmap`**: Versioned subdocument (`roadmapVersion` $\ge 1$) containing `phases` array.
- **`roadmap.phases` Subdocuments**: Each phase requires `phaseId`, `title`, `description`, `order` ($\ge 0$), and `steps` array. `Career.js` schema validator strictly enforces unique `phaseId`s within the phases array.
- **`roadmap.phases.steps` Subdocuments**: Each step requires `stepId`, `title`, `description`, `order` ($\ge 0$), `estimatedHours` ($\ge 0$), optional `difficulty` (enum `["beginner", "intermediate", "advanced"]`), `skillIds` array, `resources` array, `projects` array, and `interviewTopics` array. `Career.js` schema validator strictly enforces unique `stepId`s across all phases.
- **`resources` Subdocuments**: Each resource requires `title`, `type` (enum `["documentation", "course", "video", "article", "book", "practice", "other"]`), and `url` matching regex `/^https?:\/\/.+/`.
- **`projects` Subdocuments**: Each project requires `title`, `description`, optional `difficulty` (enum `["beginner", "intermediate", "advanced"]`), and `skillIds` array.
- **`isPublished`**: Boolean field (default: `false`).

### B. DISHA Curation Workflow Rules (Process Conventions & Guidelines)
- **Publication Flag Transition:** In the career payload JavaScript file (`backend/src/seeds/careers/<careerName>.js`), set `isPublished: false` during Stage 1 curation. Change `isPublished: true` only when Stage 1 is approved and ready for Stage 2 seed execution.
- **Global Skill Catalog Mapping:** All `requiredSkillSlugs`, `optionalSkillSlugs`, step `skillSlugs`, and project `skillSlugs` referenced in seed payloads must resolve to valid skill slugs in `skills.seed.js`.
- **Disjoint Requirement Sets:** Ensure required and optional skill sets do not overlap:
  $$\text{Required} \cap \text{Optional} = \emptyset$$
- **Role Differentiation:** Document how the target career differs in mission, outputs, tools, and topics from existing careers in `C6_CONTENT_REVIEW.md`.
- **Pedagogical Progression & Scope Targets:**
  - Structure phases logically (foundations $\rightarrow$ core systems $\rightarrow$ advanced infrastructure $\rightarrow$ capstone).
  - Target approximate guidelines based on career scope (typically 6–8 phases, 20–24 steps, 1 buildable project per step, 24–26 authoritative documentation links, ~40–50 technical interview topics, ~400–500 estimated hours for intermediate/advanced roles).

---

## 3. Global Skill Taxonomy Discipline

- **Prevent Unnecessary Global Additions:** Reuse the existing 29 global skills in `skills.seed.js` whenever possible.
- **Step Topics vs. Global Taxonomy:** Specialized tools and framework concepts (e.g. Terraform, Ansible, Kubernetes, Jenkins, Prometheus) should remain step topics, project tools, or interview questions rather than new global skills, unless a structural prerequisite dependency requires catalog expansion.
- **Justification Requirement:** If a new global skill is proposed, explicitly explain why existing skills cannot represent it and document the proposal in `C6_CONTENT_REVIEW.md`.

---

## 4. Offline Validation Workflow (0 Database Connections)

To validate curated career payloads offline before requesting seed execution approval:

1. **Create Temporary Validator Script:** `backend/src/utils/test_c6X_<slug>_curation.js`.
2. **Execute Offline Assertions:**
   - Load the career payload and `skills.seed.js`.
   - Validate non-empty fields, slug syntax, and schema enum validities.
   - Assert zero overlap between required and optional skills.
   - Assert all referenced skill slugs exist in `skills.seed.js`.
   - Assert phase ID and step ID uniqueness across the document.
   - Assert resource URL HTTP/HTTPS regex compliance.
   - Verify Mongoose models load cleanly without initiating a MongoDB connection.
3. **Run Validation Command:**
   ```bash
   node src/utils/test_c6X_<slug>_curation.js
   ```
4. **Run Frontend Build Check:**
   ```bash
   npm --prefix frontend run build
   ```
5. **Update Content Review Doc:** Update `C6_CONTENT_REVIEW.md` status table and phase breakdown.
6. **Clean Up Temporary Script:** Delete `test_c6X_<slug>_curation.js` after validation completes.

---

## 5. Curation Stop Condition

At the end of Stage 1 Curation:
- MongoDB Atlas must remain **UNTOUCHED**.
- `backend/src/seeds/seed.js` must **NOT be executed**.
- No `git commit` or `git push` commands may be performed.
- Present the Curation Report and state:
  `C6.X <CAREER_NAME> CURATION AND OFFLINE VALIDATION COMPLETE`
  `AWAITING EXPLICIT APPROVAL FOR C6.X <CAREER_NAME> SEED EXECUTION`

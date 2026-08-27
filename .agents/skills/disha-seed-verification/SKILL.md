---
name: disha-seed-verification
description: Standard operating procedure for executing MongoDB Atlas seed operations, verifying 2-pass idempotency, testing live API regression, and verifying secret privacy for DISHA careers.
---

# DISHA Seed Execution & Database Verification Protocol

This skill governs Stage 2 database seed execution, idempotency testing, live Mongoose/API regression verification, and privacy safety auditing for DISHA career paths.

## 1. Scope & Pre-Execution Requirements

Use this skill ONLY after the user has explicitly reviewed and approved Stage 1 curation for a target career path.

### Pre-Execution Setup Checklist:
1. **Enable Publication Flag:** In `backend/src/seeds/careers/<careerName>.js`, set `isPublished: true`.
2. **Register in Seed Architecture:** In `backend/src/seeds/seed.js`:
   - Import the career dataset (e.g. `const devopsEngineerCareerData = require("./careers/devopsEngineer");`).
   - Add `await upsertCareer(devopsEngineerCareerData);` in `runSeedScript()`.
3. **Pre-Seed Database Snapshot:**
   - Execute a temporary snapshot script querying live MongoDB Atlas via Mongoose.
   - Record total skill count and total career count.
   - Record existing career document ObjectIds (`_id`) for all previously seeded careers.
   - Confirm target career slug does not already exist in Atlas.

---

## 2. Seed Execution & Idempotency Audit Principles

The DISHA seed runner (`backend/src/seeds/seed.js`) uses Mongoose `findOneAndUpdate({ slug }, payload, { upsert: true, returnDocument: "after", runValidators: true })` for global skills and canonical careers.

### Execution Procedure:
1. **First Seed Execution Pass:**
   ```bash
   node src/seeds/seed.js
   ```
   - Verify log output confirms all global skills and careers are upserted.
   - Record the ObjectId (`_id`) for the target career document.

2. **Second Seed Execution Pass (Idempotency Audit):**
   ```bash
   node src/seeds/seed.js
   ```
   - Verify second run completes with exit code 0.

### Idempotency & Identity Principles:
- **No Duplicate Creation:** Verify that repeated seed execution does not create duplicate skill or career documents in MongoDB Atlas. Total skill count and career count must remain unchanged.
- **Identity Preservation Check:** Where the existing `findOneAndUpdate` upsert implementation preserves document identity, compare ObjectIds (`_id`) before and after repeated execution across all careers.
- **Investigate Discrepancies:** Investigate any unexpected document identity replacement, schema validation error, or duplicate record insertion immediately.

---

## 3. Live Database & API Regression Testing

1. **Create Temporary Verification Script:** `backend/src/utils/test_c6X_seed_verification.js`.
2. **Run Targeted Regression Checks:**
   - Query MongoDB Atlas directly via Mongoose models.
   - Assert all global skills remain unique and prerequisite ObjectIds resolve cleanly.
   - Assert target career document has `isPublished: true` and populated required/optional skill ObjectIds.
   - Test live service methods / HTTP routes:
     - `GET /api/careers` (returns all published careers).
     - `GET /api/careers/<target-slug>` (returns populated roadmap and skill metadata).
   - Confirm authentication, JWT verification, and RBAC routes remain unaffected.
3. **Clean Up Verification Script:** Remove `test_c6X_seed_verification.js` after testing.

---

## 4. Frontend & Secret Privacy Audit

1. **Frontend Production Build Check:**
   ```bash
   npm --prefix frontend run build
   ```
   Confirm build finishes with exit code 0 and zero errors.

2. **Git Working Tree Inspection:**
   ```bash
   git status
   git diff --name-only
   git diff --cached --name-only
   ```
   Inspect changed and staged files to confirm only expected career files and `seed.js` are modified or untracked.

3. **Optional Ignore Check:**
   ```bash
   git check-ignore backend/.env
   ```
   Verify that `backend/.env` is ignored by Git if checked.

4. **Secret & Credential Privacy Rules:**
   - Inspect all modified and staged files for unintended inclusions: `.env` files, MongoDB connection strings (`MONGO_URI`), JWT secrets (`JWT_SECRET`), API keys, credentials, or generated config files containing sensitive data.
   - **Do not print secret values during verification or in command outputs.**

---

## 5. Post-Verification Report & Stop Condition

At the end of Stage 2 Verification, produce a comprehensive Verification Report containing:
1. Pre-seed database snapshot details.
2. First seed execution result.
3. Target career database document ID and stats.
4. Idempotency audit result (Pass 1 vs Pass 2 ObjectIds).
5. Existing career regression status.
6. Live API verification result.
7. Frontend production build result.
8. Git and privacy audit result.
9. Exact non-inflated assertion count.

**Stop Condition:** Do NOT run `git commit` or `git push` until explicit user authorization is provided.

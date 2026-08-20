# DISHA PLATFORM — PHASE C6 CONTENT REVIEW & SEED ARCHITECTURE DOCUMENT

**Phase:** Phase C — Career Data & Database Foundation  
**Task:** C6.4 — Data Scientist Seed Execution & Verification  
**Status:** C6.4 DATA SCIENTIST SEED: COMPLETE AND VERIFIED  
**Date:** August 20, 2026  

---

## 1. Approved 12 V1 Careers List

| # | Career Name | Slug | Category | Difficulty | Status |
| :-: | :--- | :--- | :--- | :--- | :--- |
| 1 | **Frontend Developer** | `frontend-developer` | `development` | Beginner | ✅ Seeded (Reference Implementation) |
| 2 | **Backend Developer** | `backend-developer` | `development` | Beginner | ✅ Seeded (Phase C6.1 Complete) |
| 3 | **Full Stack Developer** | `full-stack-developer` | `development` | Intermediate | ✅ Seeded (Phase C6.2 Complete) |
| 4 | **Data Analyst** | `data-analyst` | `data` | Beginner | ✅ Seeded (Phase C6.3 Complete) |
| 5 | **Data Scientist** | `data-scientist` | `data` | Intermediate | ✅ Seeded (Phase C6.4 Complete) |
| 6 | **Machine Learning Engineer** | `machine-learning-engineer` | `ai_ml` | Advanced | ⏳ Draft Review Ready |
| 7 | **AI Engineer** | `ai-engineer` | `ai_ml` | Intermediate | ⏳ Draft Review Ready |
| 8 | **DevOps Engineer** | `devops-engineer` | `devops_cloud` | Intermediate | ⏳ Draft Review Ready |
| 9 | **Cloud Engineer** | `cloud-engineer` | `devops_cloud` | Intermediate | ⏳ Draft Review Ready |
| 10 | **Cybersecurity Analyst** | `cybersecurity-analyst` | `cybersecurity` | Beginner | ⏳ Draft Review Ready |
| 11 | **Mobile App Developer** | `mobile-app-developer` | `development` | Intermediate | ⏳ Draft Review Ready |
| 12 | **UI/UX Designer** | `ui-ux-designer` | `design` | Beginner | ⏳ Draft Review Ready |

---

## 2. Global Skill Taxonomy & Catalog Inventory

- **Total Unique Global Skills in MongoDB Atlas:** **29 unique skills** in `skills.seed.js` (0 duplicates, 0 circular dependencies).
- **New Skills Added in Phase C6.4 (3):**
  1. `machine-learning` (Machine Learning Algorithms & Scikit-Learn)
  2. `deep-learning` (Deep Learning & Neural Networks)
  3. `mlops` (MLOps & Model Deployment)
- **Data Scientist Skill Reuse:** 100% compliant with global catalog! (8 required skills, 6 optional skills, 0 overlap).

---

## 3. Skill-Category Distinction Policy

- Skill categories (`development`, `data`, `ai_ml`, `cloud_devops`, `security`, `soft_skills`, `programming`, `web`) are organizational metadata tags, NOT Skill documents.
- Roadmap steps and project requirements MUST reference concrete, reusable skill slugs (e.g. `python`, `pandas`, `machine-learning`, `deep-learning`, `mlops`), NEVER category tags.
- Non-skill concepts like "linear algebra", "A/B testing", "CUPED", "ROC-AUC", or "Transformers" are represented strictly inside `interviewTopics` strings, step descriptions, and project details, NOT in global `Skill` documents.

---

## 4. Content Schema & Model Alignment

Canonical Career documents adhere strictly to `backend/src/models/Career.js`:

```text
Career Document Schema
├── name (String)
├── slug (String, unique regex /^[a-z0-9]+(?:-[a-z0-9]+)*$/)
├── category (Enum: ["development", "data", "ai_ml", "devops_cloud", "cybersecurity", "design"])
├── shortDescription (String)
├── description (String)
├── difficulty (Enum: ["beginner", "intermediate", "advanced"])
├── requiredSkillIds (Array of Skill ObjectIds)
├── optionalSkillIds (Array of Skill ObjectIds)
├── marketMetadata ({ salaryRange: { min, max, currency }, demandLevel, region, updatedAt })
├── roadmap
│   ├── roadmapVersion (Number, default: 1)
│   └── phases (Array of phase subdocuments)
│       ├── phaseId (String, unique within career)
│       ├── title (String)
│       ├── description (String)
│       ├── order (Number)
│       └── steps (Array of step subdocuments)
│           ├── stepId (String, unique across career roadmap)
│           ├── title (String)
│           ├── description (String)
│           ├── order (Number)
│           ├── estimatedHours (Number)
│           ├── difficulty (Enum)
│           ├── skillIds (Array of Skill ObjectIds)
│           ├── resources (Array of { title, type, url })
│           ├── projects (Array of { title, description, difficulty, skillIds })
│           └── interviewTopics (Array of Strings)
└── isPublished (Boolean)
```

---

## 5. Resource Strategy & Classification

Resources associated with roadmap steps are classified into two distinct tiers:
1. **Official Documentation & Authoritative Courses (Tier 1):** Authoritative specifications and courses from official maintainers (Coursera Mathematics for ML, Coursera Deep Learning Specialization, PyTorch Tutorials, Scikit-Learn User Guides, Deep Learning Book by Ian Goodfellow, Attention Is All You Need Paper, The Illustrated Transformer by Jay Alammar, Booking.com/Netflix CUPED Papers, Kaggle Learn).
2. **Supplementary Learning Resources (Tier 2):** High-quality established educational guides and technical tutorials (Google's Python Class, LeetCode ML Study Plans, Christopher Bishop PRML Book, Open Machine Learning Course mlcourse.ai).

---

## 6. Curated Career Implementation: Data Scientist Roadmap (C6.4)

### Career Rationale & Target Roles:
Targeting entry-level Data Scientists, Data Science Interns, and Applied Machine Learning candidates. Directly maps the 8 core modules from the attached `ai-data-scientist.pdf` roadmap into DISHA's canonical schema.

### Skill Inventory:
- **Required Skills (8):** `python`, `pandas`, `sql-relational-db`, `data-visualization`, `machine-learning`, `deep-learning`, `mlops`, `git`.
- **Optional Skills (6):** `postgresql`, `docker`, `linux-basics`, `rest-api`, `excel-spreadsheets`, `data-modeling`.
- **Required vs. Optional Overlap:** **0 overlap**.
- **New Skills Proposed (3):** `machine-learning`, `deep-learning`, `mlops` (all 3 are concrete, highly reusable across upcoming `machine-learning-engineer` and `ai-engineer` careers).

### Phase Breakdown (Faithful to `ai-data-scientist.pdf`):
1. **Phase 1: Mathematics & Linear Algebra for Machine Learning** (`python`) - 50 hrs (3 steps, 3 projects, 7 interview topics)
2. **Phase 2: Probability, Statistics & Experimentation (A/B Testing)** (`python`) - 60 hrs (3 steps, 3 projects, 9 interview topics)
3. **Phase 3: Econometrics & Time Series Analysis** (`python`, `pandas`) - 55 hrs (3 steps, 3 projects, 6 interview topics)
4. **Phase 4: Python Data Programming, SQL & Exploratory Data Analysis** (`python`, `pandas`, `sql-relational-db`, `data-visualization`) - 60 hrs (3 steps, 3 projects, 6 interview topics)
5. **Phase 5: Classical Machine Learning & Pattern Recognition** (`machine-learning`, `python`, `pandas`) - 65 hrs (3 steps, 3 projects, 7 interview topics)
6. **Phase 6: Feature Engineering, Model Evaluation & Advanced ML** (`machine-learning`, `pandas`, `python`) - 55 hrs (3 steps, 3 projects, 6 interview topics)
7. **Phase 7: Deep Learning Architecture & Neural Networks** (`deep-learning`, `python`) - 65 hrs (3 steps, 3 projects, 6 interview topics)
8. **Phase 8: MLOps, Portfolio & Data Scientist Interview Readiness** (`mlops`, `machine-learning`, `deep-learning`, `docker`, `python`, `sql-relational-db`, `git`) - 65 hrs (3 steps, 3 projects, 7 interview topics)

*Total Estimated Hours:* **475 hours** across 24 steps, 24 projects, 31 resources, and 54 interview topics.

---

## 7. PDF Alignment Matrix (`ai-data-scientist.pdf`)

| PDF Roadmap Module | DISHA Phase ID & Title | Integrated PDF Topics & Primary Resource References |
| :--- | :--- | :--- |
| **1. Mathematics** | `ds-phase-1-mathematics`<br>Phase 1: Mathematics & Linear Algebra for ML | Linear Algebra, Calculus, Differential Calculus, Vector Spaces, Matrix Multiplication<br>• *Coursera Math for ML*, *MIT OCW Linear Algebra* |
| **2. Statistics** | `ds-phase-2-statistics-experimentation`<br>Phase 2: Probability, Statistics & A/B Testing | CLT, Hypothesis Testing, Probability/Sampling, A/B Testing, MDE, CUPED/CUPAC, Ratio Metrics (Delta Method)<br>• *Stanford Intro to Stats*, *Booking.com & Netflix CUPED Papers*, *Microsoft Delta Method Paper* |
| **3. Econometrics** | `ds-phase-3-econometrics-timeseries`<br>Phase 3: Econometrics & Time Series Analysis | Econometric Fundamentals, OLS Linear Regression, Heteroskedasticity, Time Series Decomposition, ARIMA/SARIMAX<br>• *Coursera Econometrics*, *Kaggle Learn Time Series* |
| **4. Coding** | `ds-phase-4-coding-eda`<br>Phase 4: Python Data Programming, SQL & EDA | Python Data Structures, DSA, SQL Queries (Window Functions, GROUP BY, CTEs)<br>• *Kaggle Python*, *Google's Python Class*, *LeetCode ML Plans* |
| **5. Exploratory Data Analysis** | `ds-phase-4-coding-eda`<br>Phase 4: Python Data Programming, SQL & EDA | Data Understanding, Cleaning, Data Analysis, Seaborn Visualizations<br>• *Kaggle EDA with Python/Pandas*, *Seaborn Official Tutorials* |
| **6. Machine Learning** | `ds-phase-5-machine-learning`<br>Phase 5: Classical Machine Learning & Pattern Recognition | Supervised Learning, Unsupervised Learning (K-Means/PCA), Ensembles (Random Forest, XGBoost)<br>• *Andrew Ng ML Specialization*, *Open Machine Learning Course (mlcourse.ai)*, *Christopher Bishop PRML Book* |
| **7. Deep Learning** | `ds-phase-7-deep-learning`<br>Phase 7: Deep Learning Architecture | Fully Connected NNs, Backpropagation, CNNs, RNNs, LSTMs, Attention & Transformers, Transfer Learning<br>• *Andrew Ng Deep Learning Specialization*, *Deep Learning Book (Goodfellow)*, *Attention Is All You Need Paper*, *The Illustrated Transformer* |
| **8. MLOps** | `ds-phase-8-mlops-capstone`<br>Phase 8: MLOps & Model Deployment | Model Deployment Models, CI/CD, Containerization, FastAPI serving<br>• *DeepLearning.AI MLOps Specialization*, *PyTorch Tutorials* |

---

## 8. Skill Dependency Graph (Data Scientist)

```text
Linear Algebra & Calculus ───┬───> Probability & A/B Testing
                             │
                             ├───> Python & SQL Programming ───┬───> Pandas & EDA
                             │                                 │
                             └───> Classical Machine Learning ─┼───> Feature Engineering & Evaluation
                                                               │
                                                               └───> Deep Learning & Neural Networks
                                                                        │
                                                                        └───> MLOps & Model Deployment
```

---

## 9. Seed Verification & Idempotency Audit Summary

- **Pre-Seed Snapshot:** 26 skills, 4 published careers (`frontend-developer`, `backend-developer`, `full-stack-developer`, `data-analyst`), 0 `data-scientist`.
- **First Seed Execution:** Successfully upserted 29 global skills and 5 canonical careers (`frontend-developer`, `backend-developer`, `full-stack-developer`, `data-analyst`, `data-scientist`) into MongoDB Atlas.
- **Second Seed Execution (Idempotency Audit):** Executed `node src/seeds/seed.js` a second time. 100% idempotent; 0 duplicate skills or careers created.
- **Database Document IDs:**
  - `frontend-developer`: `6a7c568f1a69ef7efb985f32`
  - `backend-developer`: `6a7c60f81a69ef7efb9862e2`
  - `full-stack-developer`: `6a7c62ec1a69ef7efb986335`
  - `data-analyst`: `6a8714d71a69ef7efb9a70e2`
  - `data-scientist`: `6a8719f01a69ef7efb9a71cb`
- **Database & API Regression Test (`test_c64_seed_verification.js`):** Passed with **202 individual assertions verified**.
- **Frontend Build (`npm --prefix frontend run build`):** Built in 1.81s with 0 errors.
- **Git Status:** Clean. Zero commits or pushes performed.

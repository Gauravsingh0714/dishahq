/**
 * Canonical Career Seed Data: Data Analyst (Phase C6.3 Corrective Review)
 * Designed for student navigation, progressive learning, and entry-level data analytics readiness.
 */
const dataAnalystCareerData = {
  name: "Data Analyst",
  slug: "data-analyst",
  category: "data",
  shortDescription: "Master data analytics fundamentals: query relational databases with SQL, perform data cleaning and analysis with Python & Pandas, create executive dashboards, and deliver business insights.",
  description: "Data Analysts translate complex raw datasets into actionable business intelligence. This career path guides students step-by-step from spreadsheet analytics (Excel) and SQL relational database querying (PostgreSQL) to Python data manipulation (Pandas), exploratory data analysis (EDA), descriptive statistics, interactive data visualization, dashboard storytelling, and portfolio project presentation.",
  difficulty: "beginner",
  requiredSkillSlugs: [
    "excel-spreadsheets",
    "sql-relational-db",
    "postgresql",
    "python",
    "pandas",
    "data-visualization",
    "git",
  ],
  optionalSkillSlugs: [
    "mongodb-nosql",
    "data-modeling",
    "rest-api",
    "javascript",
    "linux-basics",
  ],
  marketMetadata: {
    salaryRange: {
      min: 60000,
      max: 115000,
      currency: "USD",
    },
    demandLevel: "high",
    region: "Global / North America / Asia",
    updatedAt: new Date("2026-01-01"),
  },
  isPublished: true,
  roadmap: {
    roadmapVersion: 1,
    phases: [
      {
        phaseId: "da-phase-1-foundations",
        title: "Phase 1: Data & Analytical Foundations with Excel",
        description: "Understand the data analytics lifecycle, business metric framing, spreadsheet analytics with Excel (VLOOKUP, Pivot Tables), and version control with Git.",
        order: 0,
        steps: [
          {
            stepId: "da-step-analytics-lifecycle",
            title: "Data Analytics Lifecycle & Business Metric Framing",
            description: "Learn how data analysts frame business questions, translate business problems into data requirements, and define key business performance indicators (KPIs).",
            order: 0,
            estimatedHours: 15,
            difficulty: "beginner",
            skillSlugs: ["excel-spreadsheets"],
            resources: [
              {
                title: "Google Data Analytics Certificate Guide: Problem Framing",
                type: "documentation",
                url: "https://support.microsoft.com/en-us/excel",
              },
            ],
            projects: [
              {
                title: "Business Problem & Metrics Framing Case Study",
                description: "Define key business metrics (KPIs) and data requirements for an e-commerce business case scenario.",
                difficulty: "beginner",
                skillSlugs: ["excel-spreadsheets"],
              },
            ],
            interviewTopics: [
              "What is the data analytics lifecycle: Ask, Prepare, Process, Analyze, Share, Act",
              "Difference between quantitative and qualitative data",
              "Defining business KPIs (Key Performance Indicators)",
            ],
          },
          {
            stepId: "da-step-excel-analytics",
            title: "Spreadsheet Analytics: Formulas, VLOOKUP & Pivot Tables",
            description: "Master spreadsheet data analysis: formulas (SUMIF, VLOOKUP, XLOOKUP, INDEX/MATCH), Pivot Tables, summary reporting, and conditional formatting.",
            order: 1,
            estimatedHours: 20,
            difficulty: "beginner",
            skillSlugs: ["excel-spreadsheets"],
            resources: [
              {
                title: "Microsoft Excel Documentation: Functions & Pivot Tables",
                type: "documentation",
                url: "https://support.microsoft.com/en-us/excel",
              },
            ],
            projects: [
              {
                title: "Retail Sales Performance Excel Dashboard",
                description: "Build an interactive Excel spreadsheet workbook analyzing retail sales transactions using Pivot Tables and XLOOKUP formulas.",
                difficulty: "beginner",
                skillSlugs: ["excel-spreadsheets"],
              },
            ],
            interviewTopics: [
              "VLOOKUP vs XLOOKUP vs INDEX/MATCH in spreadsheet analytics",
              "Creating and summarizing data using Pivot Tables and Pivot Charts",
            ],
          },
          {
            stepId: "da-step-git-analytics",
            title: "Analytical Project Version Control with Git",
            description: "Organize data analytics project folders, manage version control for SQL and Python analysis scripts, and publish projects on GitHub.",
            order: 2,
            estimatedHours: 15,
            difficulty: "beginner",
            skillSlugs: ["git"],
            resources: [
              {
                title: "Git Documentation: Pro Git Book",
                type: "documentation",
                url: "https://git-scm.com/book/en/v2",
              },
            ],
            projects: [
              {
                title: "Data Analytics Repository Structure Setup",
                description: "Set up a clean GitHub repository structure for data projects containing raw data, analysis scripts, and documentation folders.",
                difficulty: "beginner",
                skillSlugs: ["git"],
              },
            ],
            interviewTopics: [
              "Why version control is important for data analysis scripts and documentation",
              "Core Git commands: status, add, commit, push, pull",
            ],
          },
        ],
      },
      {
        phaseId: "da-phase-2-sql-analytics",
        title: "Phase 2: Relational Databases & SQL Analytics",
        description: "Master querying relational databases with SQL (PostgreSQL): filtering, sorting, multi-table JOINs, aggregations, and subqueries.",
        order: 1,
        steps: [
          {
            stepId: "da-step-sql-basics",
            title: "SQL Fundamentals: Projections, Filtering & Sorting",
            description: "Write SQL queries to retrieve data: SELECT column projections, WHERE filtering, operators (AND, OR, IN, LIKE, BETWEEN), ORDER BY, and LIMIT.",
            order: 0,
            estimatedHours: 25,
            difficulty: "beginner",
            skillSlugs: ["sql-relational-db"],
            resources: [
              {
                title: "PostgreSQL Tutorial: SQL Basics for Analysts",
                type: "documentation",
                url: "https://www.postgresqltutorial.com/",
              },
            ],
            projects: [
              {
                title: "Customer Order Filtering Query Suite",
                description: "Write a collection of SQL queries answering customer spending and order status questions from a relational database.",
                difficulty: "beginner",
                skillSlugs: ["sql-relational-db"],
              },
            ],
            interviewTopics: [
              "SQL SELECT query clause execution order (FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY)",
              "Filtering records using LIKE wildcard patterns vs IN lists",
            ],
          },
          {
            stepId: "da-step-sql-joins",
            title: "Relational Data Joining & Multi-Table Queries",
            description: "Combine data across relational tables using INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, and self-joins.",
            order: 1,
            estimatedHours: 25,
            difficulty: "beginner",
            skillSlugs: ["sql-relational-db", "postgresql"],
            resources: [
              {
                title: "PostgreSQL Documentation: Table Joins",
                type: "documentation",
                url: "https://www.postgresql.org/docs/current/queries-table-expressions.html",
              },
            ],
            projects: [
              {
                title: "E-Commerce Multi-Table Relational Join Audit",
                description: "Perform SQL queries connecting customer profiles, product catalogs, and order transactions to calculate customer purchase behavior.",
                difficulty: "intermediate",
                skillSlugs: ["sql-relational-db", "postgresql"],
              },
            ],
            interviewTopics: [
              "Differences between INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN",
              "Handling NULL values resulting from LEFT JOIN operations",
            ],
          },
          {
            stepId: "da-step-sql-aggregations",
            title: "Advanced Aggregations, Grouping & CTEs",
            description: "Aggregate data using COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING clauses, subqueries, and Common Table Expressions (CTEs).",
            order: 2,
            estimatedHours: 25,
            difficulty: "intermediate",
            skillSlugs: ["sql-relational-db", "postgresql"],
            resources: [
              {
                title: "PostgreSQL Tutorial: GROUP BY & Aggregate Functions",
                type: "documentation",
                url: "https://www.postgresqltutorial.com/postgresql-aggregate-functions/",
              },
            ],
            projects: [
              {
                title: "Monthly Sales Revenue & Performance Aggregation Report",
                description: "Write complex SQL queries using GROUP BY, HAVING, and CTEs to produce monthly revenue, average order value, and top-selling products.",
                difficulty: "intermediate",
                skillSlugs: ["sql-relational-db", "postgresql"],
              },
            ],
            interviewTopics: [
              "WHERE vs HAVING clause differences in aggregate SQL queries",
              "Subqueries vs Common Table Expressions (CTEs / WITH clause)",
            ],
          },
        ],
      },
      {
        phaseId: "da-phase-3-python-pandas",
        title: "Phase 3: Python Programming & Data Manipulation with Pandas",
        description: "Master Python programming and the Pandas ecosystem: DataFrames, Series, reading CSV/Excel files, data filtering, and transformations.",
        order: 2,
        steps: [
          {
            stepId: "da-step-python-basics",
            title: "Python Programming Basics & Data Structures",
            description: "Learn fundamental Python programming: variables, data types, control flow (if/else, loops), functions, lists, dictionaries, and list comprehensions.",
            order: 0,
            estimatedHours: 20,
            difficulty: "beginner",
            skillSlugs: ["python"],
            resources: [
              {
                title: "Python Official Documentation: Tutorial",
                type: "documentation",
                url: "https://docs.python.org/3/tutorial/",
              },
            ],
            projects: [
              {
                title: "Python Automated File & Text Data Parser",
                description: "Build a Python script that reads text log files, extracts key pattern metrics, and prints structured statistics.",
                difficulty: "beginner",
                skillSlugs: ["python"],
              },
            ],
            interviewTopics: [
              "Python core data structures: lists, tuples, sets, and dictionaries",
              "Mutability vs immutability in Python objects",
            ],
          },
          {
            stepId: "da-step-pandas-dataframes",
            title: "Tabular Data Processing & Cleaning with Pandas",
            description: "Work with Pandas DataFrames and Series: loading datasets (read_csv, read_excel), column selection, loc/iloc indexing, and handling missing data (dropna, fillna).",
            order: 1,
            estimatedHours: 25,
            difficulty: "intermediate",
            skillSlugs: ["python", "pandas"],
            resources: [
              {
                title: "Pandas Official Documentation: Getting Started",
                type: "documentation",
                url: "https://pandas.pydata.org/docs/user_guide/index.html",
              },
            ],
            projects: [
              {
                title: "Customer CRM Dataset Cleaning with Pandas",
                description: "Load a messy CSV dataset into Pandas, clean invalid data formats, handle missing values, and export a sanitized DataFrame.",
                difficulty: "intermediate",
                skillSlugs: ["python", "pandas"],
              },
            ],
            interviewTopics: [
              "Pandas loc vs iloc indexing differences",
              "Handling missing data in Pandas DataFrames: dropna vs fillna imputation",
            ],
          },
          {
            stepId: "da-step-pandas-reshaping",
            title: "Advanced Data Filtering, Merging & Reshaping",
            description: "Perform advanced DataFrame operations: boolean filtering, groupby aggregations, pd.merge() table joins, pd.concat(), pivot_table(), and melt().",
            order: 2,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["python", "pandas"],
            resources: [
              {
                title: "Pandas User Guide: Merging & GroupBy Operations",
                type: "documentation",
                url: "https://pandas.pydata.org/docs/user_guide/groupby.html",
              },
            ],
            projects: [
              {
                title: "Multi-Source Sales Data Consolidation Pipeline",
                description: "Merge multiple regional sales DataFrames using Pandas groupby and pivot_table to produce consolidated financial summaries.",
                difficulty: "intermediate",
                skillSlugs: ["python", "pandas"],
              },
            ],
            interviewTopics: [
              "Pandas groupby aggregation patterns vs SQL GROUP BY",
              "Merging DataFrames: pd.merge() join types (inner, left, right, outer)",
            ],
          },
        ],
      },
      {
        phaseId: "da-phase-4-eda-statistics",
        title: "Phase 4: Exploratory Data Analysis & Descriptive Statistics",
        description: "Apply descriptive statistics, analyze data distributions, discover feature correlations, and design analytical star schemas.",
        order: 3,
        steps: [
          {
            stepId: "da-step-descriptive-stats",
            title: "Descriptive Statistics & Data Distribution Analysis",
            description: "Calculate measures of central tendency (mean, median, mode), dispersion (variance, std dev, IQR), percentiles, and analyze distribution skewness.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["python", "pandas"],
            resources: [
              {
                title: "SciPy & Pandas Statistical Summary Guide",
                type: "documentation",
                url: "https://pandas.pydata.org/docs/",
              },
            ],
            projects: [
              {
                title: "Statistical Product Revenue Variance Analysis",
                description: "Compute mean, median, standard deviation, and IQR across product sales categories using Pandas and SciPy functions.",
                difficulty: "intermediate",
                skillSlugs: ["python", "pandas"],
              },
            ],
            interviewTopics: [
              "Mean vs Median: why median is preferred for skewed data (e.g. income/housing prices)",
              "Standard Deviation vs Interquartile Range (IQR) for measuring data dispersion",
            ],
          },
          {
            stepId: "da-step-eda-correlations",
            title: "Exploratory Data Analysis (EDA) & Feature Correlation",
            description: "Conduct EDA on complex datasets: investigating feature correlation matrices, identifying outliers, trends over time, and generating analytical hypotheses.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["python", "pandas"],
            resources: [
              {
                title: "Python Data Science Handbook: Exploratory Data Analysis",
                type: "documentation",
                url: "https://pandas.pydata.org/docs/",
              },
            ],
            projects: [
              {
                title: "Customer Churn Behavioral EDA Investigation",
                description: "Conduct an EDA investigation in a Jupyter/Python notebook identifying key attributes and correlations associated with customer churn.",
                difficulty: "intermediate",
                skillSlugs: ["python", "pandas"],
              },
            ],
            interviewTopics: [
              "Correlation vs Causation in exploratory data analysis",
              "Steps in conducting Exploratory Data Analysis (EDA) on a new dataset",
            ],
          },
          {
            stepId: "da-step-star-schema-design",
            title: "Relational Data Modeling & Star Schema Concepts",
            description: "Understand data warehouse design principles: Fact tables, Dimension tables, surrogate keys, Star schema vs Snowflake schema for reporting.",
            order: 2,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["data-modeling", "postgresql"],
            resources: [
              {
                title: "PostgreSQL Tutorial: Dimensional Modeling Concepts",
                type: "documentation",
                url: "https://www.postgresqltutorial.com/",
              },
            ],
            projects: [
              {
                title: "E-Commerce Data Warehouse Star Schema Design",
                description: "Design a Fact table for Sales Transactions surrounded by Customer, Date, Product, and Location dimension tables.",
                difficulty: "intermediate",
                skillSlugs: ["data-modeling", "postgresql"],
              },
            ],
            interviewTopics: [
              "Fact tables vs Dimension tables in analytical data modeling",
              "Star Schema vs Snowflake Schema trade-offs for analytical queries",
            ],
          },
        ],
      },
      {
        phaseId: "da-phase-5-visualization-dashboarding",
        title: "Phase 5: Data Visualization, Dashboarding & Storytelling",
        description: "Design clear charts using visual principles, generate Python visualizations (Matplotlib/Seaborn), build interactive dashboards, and deliver data stories.",
        order: 4,
        steps: [
          {
            stepId: "da-step-visual-principles",
            title: "Visual Design Principles & Chart Selection",
            description: "Understand visual encodings, chart selection rules (bar, line, scatter, pie, heatmaps), color theory, reducing clutter, and accessible visual design.",
            order: 0,
            estimatedHours: 15,
            difficulty: "beginner",
            skillSlugs: ["data-visualization"],
            resources: [
              {
                title: "Data Visualization Guide: Chart Selection & Design",
                type: "documentation",
                url: "https://matplotlib.org/stable/contents.html",
              },
            ],
            projects: [
              {
                title: "Executive Chart Selection & Redesign Portfolio",
                description: "Audit cluttered chart designs and produce a clean visual chart suite displaying revenue metrics.",
                difficulty: "beginner",
                skillSlugs: ["data-visualization"],
              },
            ],
            interviewTopics: [
              "When to use bar charts vs line charts vs scatter plots",
              "Avoiding misleading chart axes and visual misrepresentations",
            ],
          },
          {
            stepId: "da-step-python-visualization",
            title: "Creating Analytical Visualizations with Matplotlib & Seaborn",
            description: "Generate publication-quality charts in Python using Matplotlib and Seaborn: bar charts, time-series line graphs, histograms, box plots, and heatmaps.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["python", "data-visualization"],
            resources: [
              {
                title: "Matplotlib & Seaborn Official Visualization Guides",
                type: "documentation",
                url: "https://seaborn.pydata.org/tutorial.html",
              },
            ],
            projects: [
              {
                title: "Automated Python Analytical Charting Suite",
                description: "Write Python scripts using Matplotlib and Seaborn generating a set of exploratory charts summarizing sales and customer trends.",
                difficulty: "intermediate",
                skillSlugs: ["python", "data-visualization"],
              },
            ],
            interviewTopics: [
              "Matplotlib vs Seaborn use cases for statistical data visualization",
              "Customizing chart titles, labels, legends, and color palettes",
            ],
          },
          {
            stepId: "da-step-dashboard-storytelling",
            title: "Interactive Dashboard Design & Executive Storytelling",
            description: "Design interactive executive dashboards (Power BI / Tableau / Streamlit concepts), defining KPI cards, filters, and translating findings into business narratives.",
            order: 2,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["data-visualization"],
            resources: [
              {
                title: "Google Data Analytics Guide: Executive Storytelling & Dashboards",
                type: "documentation",
                url: "https://matplotlib.org/",
              },
            ],
            projects: [
              {
                title: "Executive KPI Dashboard & Insights Presentation",
                description: "Design an interactive executive dashboard displaying sales metrics and author a slide presentation delivering 3 core business recommendations.",
                difficulty: "intermediate",
                skillSlugs: ["data-visualization"],
              },
            ],
            interviewTopics: [
              "Key components of an executive KPI dashboard layout",
              "Structuring a data story: Context -> Problem -> Insight -> Actionable Recommendation",
            ],
          },
        ],
      },
      {
        phaseId: "da-phase-6-nosql-rest-case-studies",
        title: "Phase 6: Data Access Integration & Analytical Case Studies",
        description: "Access NoSQL document data in MongoDB, extract REST API payloads, and execute real-world business analytics case studies.",
        order: 5,
        steps: [
          {
            stepId: "da-step-nosql-querying",
            title: "Querying NoSQL Document Collections for Analytics",
            description: "Understand NoSQL document collections, JSON/BSON structures, write MongoDB find queries, filter criteria, projections, and aggregation pipelines.",
            order: 0,
            estimatedHours: 20,
            difficulty: "beginner",
            skillSlugs: ["mongodb-nosql"],
            resources: [
              {
                title: "MongoDB Official Manual: Querying Documents",
                type: "documentation",
                url: "https://www.mongodb.com/docs/manual/tutorial/query-documents/",
              },
            ],
            projects: [
              {
                title: "User Activity Document Query Analysis",
                description: "Write MongoDB query scripts extracting user event logs and filtering active user sessions from document collections.",
                difficulty: "beginner",
                skillSlugs: ["mongodb-nosql"],
              },
            ],
            interviewTopics: [
              "Key differences between relational SQL tables and MongoDB NoSQL document collections",
              "MongoDB Aggregation Pipeline stages ($match, $group, $project)",
            ],
          },
          {
            stepId: "da-step-rest-api-data",
            title: "Consuming & Parsing External REST API Datasets",
            description: "Fetch web data from public REST APIs over HTTP, inspect JSON response structures, and transform payloads into Pandas DataFrames for analysis.",
            order: 1,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["rest-api", "python"],
            resources: [
              {
                title: "Python Requests & REST API Data Extraction Guide",
                type: "documentation",
                url: "https://docs.python-requests.org/",
              },
            ],
            projects: [
              {
                title: "Financial Market REST API Extractor & Pipeline",
                description: "Fetch historical financial market data from a public REST API using Python requests and convert it into a Pandas DataFrame for analysis.",
                difficulty: "intermediate",
                skillSlugs: ["rest-api", "python"],
              },
            ],
            interviewTopics: [
              "Consuming JSON payloads from REST API endpoints for analytics",
              "Handling pagination and rate limits when retrieving API datasets",
            ],
          },
          {
            stepId: "da-step-business-case-studies",
            title: "Real-World Business Analytics Case Studies",
            description: "Solve practical business case studies: customer acquisition cost (CAC), customer lifetime value (LTV), cohort analysis, and pricing optimization.",
            order: 2,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["sql-relational-db", "pandas"],
            resources: [
              {
                title: "Harvard Business Review Guide: Data-Driven Decision Making",
                type: "documentation",
                url: "https://pandas.pydata.org/docs/",
              },
            ],
            projects: [
              {
                title: "E-Commerce Cohort Retention & LTV Case Study",
                description: "Perform cohort analysis on customer transaction records to calculate customer retention rates and lifetime value (LTV).",
                difficulty: "intermediate",
                skillSlugs: ["sql-relational-db", "pandas"],
              },
            ],
            interviewTopics: [
              "Calculating Customer Acquisition Cost (CAC) vs Lifetime Value (LTV)",
              "How to perform cohort analysis to track user retention over time",
            ],
          },
        ],
      },
      {
        phaseId: "da-phase-7-capstone-interview",
        title: "Phase 7: Portfolio Capstone & Data Analyst Interview Readiness",
        description: "Execute a comprehensive end-to-end data analytics capstone project and prepare for entry-level data analyst technical and case study interviews.",
        order: 6,
        steps: [
          {
            stepId: "da-step-capstone-project",
            title: "Building a Portfolio-Grade Data Analytics Capstone",
            description: "Perform an end-to-end data analytics capstone project: database querying (SQL), data cleaning & Pandas transformation, statistical EDA, visual dashboarding, and executive reporting.",
            order: 0,
            estimatedHours: 45,
            difficulty: "advanced",
            skillSlugs: [
              "sql-relational-db",
              "postgresql",
              "python",
              "pandas",
              "data-visualization",
              "excel-spreadsheets",
              "git",
            ],
            resources: [
              {
                title: "Kaggle Open Datasets Repository for Analytics",
                type: "documentation",
                url: "https://www.postgresql.org/docs/",
              },
            ],
            projects: [
              {
                title: "Full Capstone: End-to-End E-Commerce Customer Retention & Revenue Analytics",
                description: "Execute an end-to-end analytics project: query relational SQL transactions, clean data anomalies with Pandas, compute customer retention metrics, build an interactive visualization dashboard, and present executive recommendations.",
                difficulty: "advanced",
                skillSlugs: ["sql-relational-db", "python", "pandas", "data-visualization"],
              },
            ],
            interviewTopics: [
              "Walking through an end-to-end data analytics capstone project in technical interviews",
              "Explaining data cleaning decisions, statistical assumptions, and business trade-offs",
            ],
          },
          {
            stepId: "da-step-interview-readiness",
            title: "Data Analyst Technical & Case Study Interview Readiness",
            description: "Practice entry-level data analyst interview exercises: writing live SQL queries, Python/Pandas coding challenges, answering business case study scenarios, and behavioral questions.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["sql-relational-db", "python", "pandas"],
            resources: [
              {
                title: "SQL & Data Analytics Interview Questions Handbook",
                type: "article",
                url: "https://www.postgresqltutorial.com/",
              },
            ],
            projects: [
              {
                title: "SQL Query Coding & Business Case Study Mock Suite",
                description: "Complete mock coding challenges: solving complex SQL aggregations, Pandas transformations, and answering a 30-minute business case study scenario.",
                difficulty: "intermediate",
                skillSlugs: ["sql-relational-db", "python", "pandas"],
              },
            ],
            interviewTopics: [
              "Live SQL and Python/Pandas coding interview practice",
              "Answering business case study questions: 'Sales dropped by 10% this month, how would you investigate?'",
              "Behavioral interview preparation using the STAR method for analytical projects",
            ],
          },
        ],
      },
    ],
  },
};

module.exports = dataAnalystCareerData;

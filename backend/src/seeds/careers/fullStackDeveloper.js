/**
 * Canonical Career Seed Data: Full Stack Developer (Phase C6.2)
 * Designed for student navigation, progressive learning, and entry-level full-stack engineering readiness.
 */
const fullStackDeveloperCareerData = {
  name: "Full Stack Developer",
  slug: "full-stack-developer",
  category: "development",
  shortDescription: "Master end-to-end web engineering: build reactive React interfaces, design robust Express REST APIs, model relational & NoSQL databases, implement authentication, and deploy production full-stack applications.",
  description: "Full Stack Developers bridge client-side user experience with server-side business logic and data storage. This career path guides students step-by-step through modern web foundations (HTML, CSS, JS), component-driven frontend engineering with React, server-side development with Node.js & Express, relational (PostgreSQL) and document (MongoDB) databases, end-to-end authentication & authorization (JWT, bcrypt), automated testing, containerization with Docker, and cloud deployment.",
  difficulty: "intermediate",
  requiredSkillSlugs: [
    "html5",
    "css3",
    "javascript",
    "git",
    "responsive-design",
    "rest-api",
    "react",
    "node-js",
    "express-js",
    "sql-relational-db",
    "postgresql",
    "mongodb-nosql",
    "data-modeling",
    "backend-auth-security",
  ],
  optionalSkillSlugs: [
    "typescript",
    "state-management",
    "web-accessibility",
    "unit-testing-frontend",
    "unit-testing-backend",
    "docker",
    "linux-basics",
    "web-performance",
  ],
  marketMetadata: {
    salaryRange: {
      min: 75000,
      max: 140000,
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
        phaseId: "fs-phase-1-foundations",
        title: "Phase 1: Web & Programming Foundations",
        description: "Master modern document markup, responsive CSS layout techniques, core JavaScript programming, and version control with Git.",
        order: 0,
        steps: [
          {
            stepId: "fs-step-html-css",
            title: "Semantic HTML5 & Modern Responsive CSS Layouts",
            description: "Build accessible web page structures, master CSS Flexbox and Grid layouts, responsive media queries, and mobile-first principles.",
            order: 0,
            estimatedHours: 20,
            difficulty: "beginner",
            skillSlugs: ["html5", "css3", "responsive-design"],
            resources: [
              {
                title: "MDN Web Docs: Structuring & Styling the Web",
                type: "documentation",
                url: "https://developer.mozilla.org/en-US/docs/Learn",
              },
            ],
            projects: [
              {
                title: "Responsive Multi-Section Product Landing Page",
                description: "Build a semantic, fully responsive landing page interface utilizing CSS Flexbox and Grid.",
                difficulty: "beginner",
                skillSlugs: ["html5", "css3", "responsive-design"],
              },
            ],
            interviewTopics: [
              "Semantic HTML tags and their importance for SEO and accessibility",
              "CSS Box Model: margins, borders, padding, and content box",
              "Flexbox vs CSS Grid layout use cases",
            ],
          },
          {
            stepId: "fs-step-js-logic",
            title: "JavaScript ES6+ Syntax, Data Structures & Async Logic",
            description: "Learn core JavaScript programming: data types, control flow, functions, array methods (map, filter, reduce), DOM events, and async/await.",
            order: 1,
            estimatedHours: 25,
            difficulty: "beginner",
            skillSlugs: ["javascript"],
            resources: [
              {
                title: "javascript.info: Modern JavaScript Tutorial",
                type: "documentation",
                url: "https://javascript.info/",
              },
            ],
            projects: [
              {
                title: "Interactive DOM Data Processor & Filter App",
                description: "Build a JavaScript application that manipulates DOM elements and processes JSON data arrays dynamically.",
                difficulty: "beginner",
                skillSlugs: ["javascript"],
              },
            ],
            interviewTopics: [
              "Difference between var, let, and const declarations",
              "Event loop, execution stack, and Promises in JavaScript",
              "Array transformation methods: map vs filter vs reduce",
            ],
          },
          {
            stepId: "fs-step-git-workflow",
            title: "Source Code Control with Git & GitHub",
            description: "Track code changes, manage feature branches, create pull requests, resolve merge conflicts, and publish repositories on GitHub.",
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
                title: "GitHub Full-Stack Project Scaffolding",
                description: "Initialize a monorepo or dual-folder Git repository setup for a full-stack project with documentation.",
                difficulty: "beginner",
                skillSlugs: ["git"],
              },
            ],
            interviewTopics: [
              "Core Git commands: add, commit, push, pull, status, branch",
              "Handling Git merge conflicts and branch management",
            ],
          },
        ],
      },
      {
        phaseId: "fs-phase-2-frontend-react",
        title: "Phase 2: Component-Driven Frontend Development (React.js)",
        description: "Build interactive client-side single-page applications (SPAs) using React.js, component props, state hooks, and client routing.",
        order: 1,
        steps: [
          {
            stepId: "fs-step-react-basics",
            title: "React Component Architecture, JSX & Props",
            description: "Understand component composition, JSX syntax, passing data via props, key prop rules, and rendering dynamic UI lists.",
            order: 0,
            estimatedHours: 25,
            difficulty: "intermediate",
            skillSlugs: ["react", "javascript"],
            resources: [
              {
                title: "React Official Documentation: Describing the UI",
                type: "documentation",
                url: "https://react.dev/learn",
              },
            ],
            projects: [
              {
                title: "Reusable UI Component Library Suite",
                description: "Create a library of reusable React components (buttons, modals, navigation cards, input fields).",
                difficulty: "intermediate",
                skillSlugs: ["react"],
              },
            ],
            interviewTopics: [
              "What is JSX and how React renders virtual DOM nodes",
              "Props vs State in React components",
            ],
          },
          {
            stepId: "fs-step-react-state-hooks",
            title: "State Management & React Hooks",
            description: "Manage component interactivity using useState, handle side-effects and API subscriptions with useEffect, and custom hooks.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["react"],
            resources: [
              {
                title: "React Documentation: Managing State",
                type: "documentation",
                url: "https://react.dev/learn/managing-state",
              },
            ],
            projects: [
              {
                title: "Interactive E-Commerce Shopping Cart UI",
                description: "Build an interactive product catalog with cart state management and price calculations in React.",
                difficulty: "intermediate",
                skillSlugs: ["react"],
              },
            ],
            interviewTopics: [
              "Rules of React Hooks",
              "useEffect dependency array behavior and cleanup functions",
            ],
          },
          {
            stepId: "fs-step-react-routing-api",
            title: "Single Page Application Routing & API Integration",
            description: "Implement multi-page client-side navigation using React Router DOM, extract route params, and fetch remote REST API endpoints.",
            order: 2,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["react", "rest-api"],
            resources: [
              {
                title: "React Router Official Documentation",
                type: "documentation",
                url: "https://reactrouter.com/",
              },
            ],
            projects: [
              {
                title: "Multi-Page Movie & Media Portal",
                description: "Build a client-side multi-page application fetching movie data from a public REST API.",
                difficulty: "intermediate",
                skillSlugs: ["react", "rest-api"],
              },
            ],
            interviewTopics: [
              "Client-side routing vs traditional server-side page navigation",
              "Handling loading and error states during API fetching",
            ],
          },
        ],
      },
      {
        phaseId: "fs-phase-3-backend-express",
        title: "Phase 3: Server-Side Web Framework & REST API Engineering",
        description: "Engineer server-side applications using Node.js and Express.js, routing pipelines, middleware processing, and REST API standards.",
        order: 2,
        steps: [
          {
            stepId: "fs-step-nodejs-express-routing",
            title: "Node.js Runtime & Express.js HTTP Routing",
            description: "Understand the Node.js event loop, build HTTP servers with Express.js, define GET/POST/PUT/DELETE routes, and parse request bodies.",
            order: 0,
            estimatedHours: 25,
            difficulty: "intermediate",
            skillSlugs: ["node-js", "express-js"],
            resources: [
              {
                title: "Express.js Documentation: Routing Guide",
                type: "documentation",
                url: "https://expressjs.com/en/guide/routing.html",
              },
            ],
            projects: [
              {
                title: "Express.js RESTful Task API",
                description: "Build an Express API providing CRUD endpoints for managing tasks with appropriate HTTP status codes.",
                difficulty: "intermediate",
                skillSlugs: ["node-js", "express-js", "rest-api"],
              },
            ],
            interviewTopics: [
              "What is Express.js middleware and how next() controls execution flow",
              "REST API design principles and HTTP status codes (200, 201, 400, 404, 500)",
            ],
          },
          {
            stepId: "fs-step-express-rest-design",
            title: "Designing RESTful API Endpoints & Request Handling",
            description: "Design structured resource paths, handle query parameters, URL path parameters, request validation, and JSON payload responses.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["express-js", "rest-api"],
            resources: [
              {
                title: "MDN Web Docs: Overview of HTTP Methods",
                type: "documentation",
                url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",
              },
            ],
            projects: [
              {
                title: "Inventory & Catalog REST Micro-Service",
                description: "Design and implement a structured RESTful API for inventory items supporting search and category filtering.",
                difficulty: "intermediate",
                skillSlugs: ["express-js", "rest-api"],
              },
            ],
            interviewTopics: [
              "Idempotency in HTTP methods (GET/PUT/DELETE vs POST)",
              "Handling URL params vs query string parameters",
            ],
          },
          {
            stepId: "fs-step-validation-error-handling",
            title: "Express Input Validation & Error Middleware",
            description: "Sanitize request data, validate incoming JSON payloads, write custom error classes, and implement centralized Express error middleware.",
            order: 2,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["express-js"],
            resources: [
              {
                title: "Express.js Guide: Error Handling",
                type: "documentation",
                url: "https://expressjs.com/en/guide/error-handling.html",
              },
            ],
            projects: [
              {
                title: "Centralized Error & Input Validation Subsystem",
                description: "Add robust payload validation middleware and centralized JSON error responses to an Express API.",
                difficulty: "intermediate",
                skillSlugs: ["express-js"],
              },
            ],
            interviewTopics: [
              "Centralized error handling pattern in Express.js",
              "Sanitizing user inputs to prevent server crashes",
            ],
          },
        ],
      },
      {
        phaseId: "fs-phase-4-databases",
        title: "Phase 4: Database Engineering & Data Persistence",
        description: "Design persistent storage schemas: relational database queries with PostgreSQL and document NoSQL collections with MongoDB.",
        order: 3,
        steps: [
          {
            stepId: "fs-step-sql-postgresql",
            title: "Relational Data Modeling & PostgreSQL SQL Queries",
            description: "Learn relational database design, writing SQL queries (SELECT, JOIN, WHERE, GROUP BY), foreign keys, 1:N and N:M table relationships.",
            order: 0,
            estimatedHours: 25,
            difficulty: "intermediate",
            skillSlugs: ["sql-relational-db", "postgresql"],
            resources: [
              {
                title: "PostgreSQL Tutorial: SQL & Schema Basics",
                type: "documentation",
                url: "https://www.postgresqltutorial.com/",
              },
            ],
            projects: [
              {
                title: "E-Commerce Relational Database Schema",
                description: "Design a PostgreSQL schema for customers, products, and orders with foreign key relationships.",
                difficulty: "intermediate",
                skillSlugs: ["sql-relational-db", "postgresql"],
              },
            ],
            interviewTopics: [
              "SQL Joins: INNER JOIN, LEFT JOIN, RIGHT JOIN differences",
              "Primary Key vs Foreign Key constraints and 3NF normalization",
            ],
          },
          {
            stepId: "fs-step-mongodb-nosql",
            title: "NoSQL Document Databases with MongoDB & Mongoose",
            description: "Understand NoSQL document databases, BSON formats, MongoDB CRUD operations, indexing, and object-data modeling with Mongoose.",
            order: 1,
            estimatedHours: 20,
            difficulty: "beginner",
            skillSlugs: ["mongodb-nosql", "data-modeling"],
            resources: [
              {
                title: "MongoDB Official Manual: Getting Started",
                type: "documentation",
                url: "https://www.mongodb.com/docs/manual/introduction/",
              },
            ],
            projects: [
              {
                title: "Blog Content & Commenting MongoDB Data Model",
                description: "Model a document database for blog posts with embedded comments and referenced author IDs using Mongoose.",
                difficulty: "intermediate",
                skillSlugs: ["mongodb-nosql", "data-modeling"],
              },
            ],
            interviewTopics: [
              "SQL vs NoSQL database trade-offs and use cases",
              "Embedding vs Referencing data models in MongoDB",
            ],
          },
          {
            stepId: "fs-step-api-database-integration",
            title: "Integrating Databases with Express REST APIs",
            description: "Connect Express.js application servers to databases (MongoDB Atlas / PostgreSQL pool), handling asynchronous queries and environment variables.",
            order: 2,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["express-js", "mongodb-nosql", "postgresql"],
            resources: [
              {
                title: "Mongoose ODM Documentation: Guide & Queries",
                type: "documentation",
                url: "https://mongoosejs.com/docs/guide.html",
              },
            ],
            projects: [
              {
                title: "Persistent Full-Stack Catalog API",
                description: "Connect an Express REST API to a MongoDB database with full CRUD persistence and search filtering.",
                difficulty: "intermediate",
                skillSlugs: ["express-js", "mongodb-nosql"],
              },
            ],
            interviewTopics: [
              "Managing database connection pools in Node.js applications",
              "Handling database error codes cleanly in HTTP responses",
            ],
          },
        ],
      },
      {
        phaseId: "fs-phase-5-auth-security",
        title: "Phase 5: Full Stack Integration, Authentication & Security",
        description: "Connect React frontends to Express backends with end-to-end user authentication, JWT tokens, RBAC permissions, and API security.",
        order: 4,
        steps: [
          {
            stepId: "fs-step-auth-jwt",
            title: "Full-Stack Authentication: Password Hashing & JWT Tokens",
            description: "Implement secure user registration, bcrypt password hashing, generating JWT access tokens, and verifying authorization headers.",
            order: 0,
            estimatedHours: 25,
            difficulty: "intermediate",
            skillSlugs: ["backend-auth-security", "express-js"],
            resources: [
              {
                title: "JWT.io: Introduction to JSON Web Tokens",
                type: "documentation",
                url: "https://jwt.io/introduction",
              },
              {
                title: "OWASP Cheat Sheet: Password Storage",
                type: "documentation",
                url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html",
              },
            ],
            projects: [
              {
                title: "Full-Stack User Auth Subsystem",
                description: "Build an Express auth service handling registration, hashed passwords, and JWT issue/verification.",
                difficulty: "intermediate",
                skillSlugs: ["backend-auth-security", "express-js"],
              },
            ],
            interviewTopics: [
              "Why plain-text passwords must never be stored and salt + bcrypt hashing",
              "JWT token structure: Header, Payload, and Signature",
            ],
          },
          {
            stepId: "fs-step-rbac-security",
            title: "Role-Based Access Control (RBAC) & Security Hardening",
            description: "Enforce authorization boundaries (Student vs Admin), protect endpoints from IDOR, apply Helmet headers, CORS rules, and rate limiting.",
            order: 1,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["backend-auth-security"],
            resources: [
              {
                title: "OWASP Top 10 Web Application Security Risks",
                type: "documentation",
                url: "https://owasp.org/www-project-top-ten/",
              },
            ],
            projects: [
              {
                title: "Security-Hardened Multi-Role API",
                description: "Implement RBAC authorization middleware, rate limiting, and CORS security headers on an Express server.",
                difficulty: "advanced",
                skillSlugs: ["backend-auth-security", "express-js"],
              },
            ],
            interviewTopics: [
              "Authentication vs Authorization differences",
              "Preventing Insecure Direct Object Reference (IDOR) vulnerabilities",
              "Common security threats: SQLi, NoSQLi, XSS, and CORS misconfigurations",
            ],
          },
          {
            stepId: "fs-step-frontend-backend-integration",
            title: "Connecting React Frontend to Authenticated Express APIs",
            description: "Integrate React frontend applications with Express APIs: storing JWT tokens securely, adding Bearer tokens to Axios/Fetch requests, and protected route rendering.",
            order: 2,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["react", "express-js", "backend-auth-security"],
            resources: [
              {
                title: "MDN Web Docs: Using the Fetch API",
                type: "documentation",
                url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
              },
            ],
            projects: [
              {
                title: "Authenticated Full-Stack Task Workspace App",
                description: "Connect a React frontend to a protected Express API, rendering user-specific task lists based on JWT token context.",
                difficulty: "advanced",
                skillSlugs: ["react", "express-js", "backend-auth-security"],
              },
            ],
            interviewTopics: [
              "Handling authentication state and token storage in React applications",
              "Managing CORS headers during local development vs production",
            ],
          },
        ],
      },
      {
        phaseId: "fs-phase-6-testing-ops",
        title: "Phase 6: Testing, Docker & Cloud Deployment",
        description: "Ensure full-stack application reliability with automated testing, containerize services using Docker Compose, and deploy to cloud platforms.",
        order: 5,
        steps: [
          {
            stepId: "fs-step-fullstack-testing",
            title: "Automated Testing for Frontend & Backend",
            description: "Write integration tests for Express API endpoints using Jest & Supertest, and component unit tests using React Testing Library.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["unit-testing-backend", "unit-testing-frontend"],
            resources: [
              {
                title: "Jest Official Documentation: Getting Started",
                type: "documentation",
                url: "https://jestjs.io/docs/getting-started",
              },
            ],
            projects: [
              {
                title: "Automated Test Suite for Full-Stack API & UI",
                description: "Write automated tests covering user registration, login API response, and React component rendering.",
                difficulty: "advanced",
                skillSlugs: ["unit-testing-backend"],
              },
            ],
            interviewTopics: [
              "Unit testing vs Integration testing in full-stack applications",
              "Mocking API network requests during frontend component testing",
            ],
          },
          {
            stepId: "fs-step-docker-compose",
            title: "Containerizing Full-Stack Services with Docker Compose",
            description: "Package full-stack applications into multi-container environments: Dockerfiles for React and Node.js, and Docker Compose for orchestration.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["docker", "linux-basics"],
            resources: [
              {
                title: "Docker Documentation: Docker Compose Overview",
                type: "documentation",
                url: "https://docs.docker.com/compose/",
              },
            ],
            projects: [
              {
                title: "Dockerized Full-Stack Web Application",
                description: "Create a docker-compose.yml file managing React frontend, Express API backend, and MongoDB container instances.",
                difficulty: "advanced",
                skillSlugs: ["docker"],
              },
            ],
            interviewTopics: [
              "What is Docker Compose and how multi-container applications communicate",
              "Dockerfile directives: FROM, WORKDIR, COPY, EXPOSE, and CMD",
            ],
          },
          {
            stepId: "fs-step-fullstack-deployment",
            title: "Full-Stack Cloud Deployment (Vercel & Render)",
            description: "Deploy client-side React single-page apps to Vercel/Netlify, deploy Express APIs to Render/Railway, and configure production environment variables.",
            order: 2,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["express-js", "react"],
            resources: [
              {
                title: "Render Documentation: Deploying Full-Stack Applications",
                type: "documentation",
                url: "https://render.com/docs/deploy-node-express-app",
              },
              {
                title: "Vercel Documentation: Deploying React Apps",
                type: "documentation",
                url: "https://vercel.com/docs",
              },
            ],
            projects: [
              {
                title: "Live Production Full-Stack Application Deployment",
                description: "Deploy a full-stack React + Express application with live MongoDB Atlas connection to Vercel and Render.",
                difficulty: "intermediate",
                skillSlugs: ["react", "express-js"],
              },
            ],
            interviewTopics: [
              "Configuring production environment variables vs local .env files",
              "Configuring CORS origins for production frontend and backend domains",
            ],
          },
        ],
      },
      {
        phaseId: "fs-phase-7-capstone",
        title: "Phase 7: Portfolio Capstone & Full Stack Technical Readiness",
        description: "Build a production-grade full-stack capstone application and prepare for entry-level full-stack developer technical interviews.",
        order: 6,
        steps: [
          {
            stepId: "fs-step-capstone-project",
            title: "Building a Portfolio-Grade Full-Stack Application Capstone",
            description: "Design and build an end-to-end full-stack application featuring a React UI, Express REST API, database persistence, authentication, validation, testing, and deployment.",
            order: 0,
            estimatedHours: 45,
            difficulty: "advanced",
            skillSlugs: [
              "react",
              "node-js",
              "express-js",
              "backend-auth-security",
              "data-modeling",
              "mongodb-nosql",
            ],
            resources: [
              {
                title: "Swagger / OpenAPI Specification Standard",
                type: "documentation",
                url: "https://swagger.io/specification/",
              },
            ],
            projects: [
              {
                title: "Full Capstone: Production-Grade E-Commerce or Community Platform",
                description: "Build and deploy a complete full-stack web application featuring user auth, catalog management, dynamic shopping cart/reviews, responsive UI, database persistence, and API documentation.",
                difficulty: "advanced",
                skillSlugs: ["react", "express-js", "backend-auth-security", "data-modeling"],
              },
            ],
            interviewTopics: [
              "Walking through full-stack system architecture and data flow in technical interviews",
              "Explaining trade-offs between monolithic full-stack applications and decoupled architectures",
            ],
          },
          {
            stepId: "fs-step-interview-readiness",
            title: "Full Stack Technical Interview Readiness",
            description: "Prepare for entry-level full-stack engineering interviews: JavaScript machine coding, SQL/NoSQL query challenges, REST API design, and system design basics.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["javascript", "react", "express-js"],
            resources: [
              {
                title: "System Design Primer & Interview Guide",
                type: "article",
                url: "https://github.com/donnemartin/system-design-primer",
              },
            ],
            projects: [
              {
                title: "Full-Stack Coding Challenge & Mock Interview Suite",
                description: "Complete full-stack mock coding challenges: implementing debounced search inputs, designing database schemas, and explaining API security.",
                difficulty: "intermediate",
                skillSlugs: ["javascript", "react", "express-js"],
              },
            ],
            interviewTopics: [
              "Explaining full-stack request lifecycle: from browser click to database query and response",
              "Handling state synchronization between frontend React state and backend database state",
              "Behavioral interview preparation using the STAR method for software projects",
            ],
          },
        ],
      },
    ],
  },
};

module.exports = fullStackDeveloperCareerData;

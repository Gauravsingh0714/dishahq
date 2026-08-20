/**
 * Canonical Career Seed Data: Backend Developer (Phase C6.1)
 * Designed for student navigation, progressive learning, and entry-level backend engineering readiness.
 */
const backendDeveloperCareerData = {
  name: "Backend Developer",
  slug: "backend-developer",
  category: "development",
  shortDescription: "Design server-side application logic, build scalable REST APIs, model relational & NoSQL databases, implement authentication, and deploy production services.",
  description: "Backend Developers engineer the server-side architecture, business logic, databases, and API endpoints that power web and mobile applications. This career path guides students step-by-step from core programming fundamentals and HTTP protocols to database engineering (SQL & NoSQL), RESTful API design with Express.js, security & authentication (JWT, bcrypt), automated testing, containerization with Docker, and cloud deployment.",
  difficulty: "beginner",
  requiredSkillSlugs: [
    "javascript",
    "node-js",
    "express-js",
    "rest-api",
    "sql-relational-db",
    "postgresql",
    "mongodb-nosql",
    "data-modeling",
    "backend-auth-security",
    "git",
  ],
  optionalSkillSlugs: [
    "typescript",
    "unit-testing-backend",
    "docker",
    "linux-basics",
  ],
  marketMetadata: {
    salaryRange: {
      min: 70000,
      max: 135000,
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
        phaseId: "be-phase-1-programming",
        title: "Phase 1: Backend Programming Fundamentals & Runtime Environment",
        description: "Develop strong core programming logic, understand asynchronous JavaScript, and master the Node.js server execution environment.",
        order: 0,
        steps: [
          {
            stepId: "be-step-js-logic",
            title: "Core Programming & JavaScript ES6+ Data Structures",
            description: "Master variables, control flow, functions, objects, arrays, ES6 Modules, and error handling mechanics in JavaScript.",
            order: 0,
            estimatedHours: 30,
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
                title: "Command-Line Data Processing Utility",
                description: "Build a Node.js CLI script that parses, transforms, and filters JSON data files using JavaScript array methods.",
                difficulty: "beginner",
                skillSlugs: ["javascript"],
              },
            ],
            interviewTopics: [
              "Difference between primitive types and reference types in JavaScript",
              "Arrow functions vs traditional functions: scoping and binding",
              "Array transformation methods: map, filter, and reduce",
            ],
          },
          {
            stepId: "be-step-nodejs-runtime",
            title: "Node.js Runtime, File System & Event Loop",
            description: "Understand the Node.js execution model: Event Loop, Non-blocking I/O, Call Stack, File System module (fs), and Path utility APIs.",
            order: 1,
            estimatedHours: 25,
            difficulty: "beginner",
            skillSlugs: ["node-js", "javascript"],
            resources: [
              {
                title: "Node.js Official Documentation: Introduction & Event Loop",
                type: "documentation",
                url: "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/",
              },
            ],
            projects: [
              {
                title: "CLI File System Log Parser",
                description: "Build a Node.js script that reads server log files, extracts error lines asynchronously, and writes aggregated summary statistics to a file.",
                difficulty: "beginner",
                skillSlugs: ["node-js"],
              },
            ],
            interviewTopics: [
              "How the Node.js Event Loop handles asynchronous I/O operations",
              "CommonJS (require) vs ES Modules (import/export)",
              "Handling asynchronous errors with try/catch and Promises",
            ],
          },
          {
            stepId: "be-step-git-control",
            title: "Version Control with Git & GitHub",
            description: "Track code changes, create git branches, manage commits, resolve merge conflicts, and collaborate using GitHub repositories.",
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
                title: "Backend Repository & Branching Setup",
                description: "Configure a Git repository for a backend project with branching workflows, .gitignore configuration, and documentation.",
                difficulty: "beginner",
                skillSlugs: ["git"],
              },
            ],
            interviewTopics: [
              "Core Git commands: status, log, diff, checkout, merge",
              "Best practices for commit messages and branching strategies",
            ],
          },
        ],
      },
      {
        phaseId: "be-phase-2-web-protocols",
        title: "Phase 2: Web Protocols & Server Fundamentals",
        description: "Learn how the internet works: HTTP/HTTPS client-server communication, request/response headers, status codes, and Linux server CLI navigation.",
        order: 1,
        steps: [
          {
            stepId: "be-step-http-architecture",
            title: "HTTP/HTTPS Architecture, Methods & Status Codes",
            description: "Understand client-server architecture, HTTP request methods (GET, POST, PUT, PATCH, DELETE), HTTP status codes (2xx, 4xx, 5xx), headers, and JSON payloads.",
            order: 0,
            estimatedHours: 20,
            difficulty: "beginner",
            skillSlugs: ["rest-api"],
            resources: [
              {
                title: "MDN Web Docs: Overview of HTTP",
                type: "documentation",
                url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
              },
            ],
            projects: [
              {
                title: "HTTP Client & Status Code Tester Script",
                description: "Write a Node.js script using native http/https modules to fetch remote URLs and inspect response headers and status codes.",
                difficulty: "beginner",
                skillSlugs: ["rest-api", "node-js"],
              },
            ],
            interviewTopics: [
              "Difference between HTTP GET, POST, PUT, PATCH, and DELETE",
              "Common HTTP status codes: 200, 201, 400, 401, 403, 404, 409, 500",
              "Stateless nature of HTTP and how sessions/tokens maintain state",
            ],
          },
          {
            stepId: "be-step-linux-cli",
            title: "Linux CLI & Basic Server Administration",
            description: "Navigate Linux file systems, manage file permissions (chmod), environment variables, process management (ps, kill), and system logging.",
            order: 1,
            estimatedHours: 20,
            difficulty: "beginner",
            skillSlugs: ["linux-basics"],
            resources: [
              {
                title: "Ubuntu Documentation: Linux Command Line Primer",
                type: "documentation",
                url: "https://ubuntu.com/tutorials/command-line-for-beginners",
              },
            ],
            projects: [
              {
                title: "Automated Shell Maintenance Script",
                description: "Write a Bash script that inspects server memory, checks disk usage, and archives old log files into a backup folder.",
                difficulty: "beginner",
                skillSlugs: ["linux-basics"],
              },
            ],
            interviewTopics: [
              "Basic Linux navigation commands: ls, cd, pwd, cat, grep, find",
              "File permissions in Linux: read, write, execute (chmod 755)",
              "Environment variables and their role in backend configuration",
            ],
          },
        ],
      },
      {
        phaseId: "be-phase-3-databases",
        title: "Phase 3: Database Engineering & Data Modeling",
        description: "Master persistent storage: relational databases (SQL, PostgreSQL) and document NoSQL databases (MongoDB, Mongoose ODM).",
        order: 2,
        steps: [
          {
            stepId: "be-step-sql-queries",
            title: "Relational Database Fundamentals & SQL Queries",
            description: "Learn relational database design, writing SQL queries (SELECT, INSERT, UPDATE, DELETE), filtering (WHERE), sorting (ORDER BY), and aggregations (GROUP BY, HAVING).",
            order: 0,
            estimatedHours: 30,
            difficulty: "beginner",
            skillSlugs: ["sql-relational-db"],
            resources: [
              {
                title: "PostgreSQL Tutorial: SQL Basics for Beginners",
                type: "documentation",
                url: "https://www.postgresqltutorial.com/",
              },
            ],
            projects: [
              {
                title: "E-Commerce Relational Query Suite",
                description: "Write SQL scripts executing complex data retrieval across customers, orders, and products tables.",
                difficulty: "beginner",
                skillSlugs: ["sql-relational-db"],
              },
            ],
            interviewTopics: [
              "SQL Joins: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN differences",
              "Aggregate functions: COUNT, SUM, AVG, GROUP BY vs HAVING clause",
              "Primary Key vs Foreign Key constraints",
            ],
          },
          {
            stepId: "be-step-postgresql-modeling",
            title: "Relational Data Modeling & PostgreSQL",
            description: "Design relational database schemas, 1:1, 1:N, and N:M table relationships, indexing strategies for query performance, and database transactions.",
            order: 1,
            estimatedHours: 25,
            difficulty: "intermediate",
            skillSlugs: ["postgresql", "data-modeling"],
            resources: [
              {
                title: "PostgreSQL Official Documentation: Data Definition & Indexing",
                type: "documentation",
                url: "https://www.postgresql.org/docs/current/ddl.html",
              },
            ],
            projects: [
              {
                title: "University Student Enrollment Database Schema",
                description: "Design and implement a PostgreSQL schema for students, courses, enrollments, and professors with foreign key integrity.",
                difficulty: "intermediate",
                skillSlugs: ["postgresql", "data-modeling"],
              },
            ],
            interviewTopics: [
              "Database normalization (1NF, 2NF, 3NF) principles",
              "How B-Tree indexes improve database query speed and when NOT to index",
              "ACID properties of database transactions",
            ],
          },
          {
            stepId: "be-step-mongodb-mongoose",
            title: "Document Databases with MongoDB & Mongoose ODM",
            description: "Understand NoSQL document databases, BSON document structure, MongoDB CRUD operations, indexing, and object-data modeling with Mongoose.",
            order: 2,
            estimatedHours: 25,
            difficulty: "beginner",
            skillSlugs: ["mongodb-nosql", "data-modeling"],
            resources: [
              {
                title: "MongoDB Documentation: Getting Started & Mongoose Docs",
                type: "documentation",
                url: "https://www.mongodb.com/docs/manual/introduction/",
              },
            ],
            projects: [
              {
                title: "Blog & Commenting System MongoDB Schema",
                description: "Model a document database for blog posts with embedded comment subdocuments and referenced author ObjectIds using Mongoose.",
                difficulty: "intermediate",
                skillSlugs: ["mongodb-nosql", "data-modeling"],
              },
            ],
            interviewTopics: [
              "SQL vs NoSQL database trade-offs and use cases",
              "Embedding vs Referencing data models in MongoDB",
              "Mongoose schema validation and unique indexes",
            ],
          },
        ],
      },
      {
        phaseId: "be-phase-4-express-apis",
        title: "Phase 4: Web Framework & RESTful API Architecture",
        description: "Build production-ready HTTP servers using Node.js and Express.js, routing pipelines, input validation, and database connections.",
        order: 3,
        steps: [
          {
            stepId: "be-step-express-routing",
            title: "Building RESTful APIs with Express.js",
            description: "Create server applications with Express.js: handling URL routes, request parameters (params, query, body), middleware functions, and sending JSON responses.",
            order: 0,
            estimatedHours: 30,
            difficulty: "intermediate",
            skillSlugs: ["express-js", "rest-api", "node-js"],
            resources: [
              {
                title: "Express.js Documentation: Routing & Writing Middleware",
                type: "documentation",
                url: "https://expressjs.com/en/guide/routing.html",
              },
            ],
            projects: [
              {
                title: "In-Memory Resource Management REST API",
                description: "Build an Express.js server providing complete CRUD REST endpoints for managing an inventory catalog with appropriate HTTP status codes.",
                difficulty: "intermediate",
                skillSlugs: ["express-js", "rest-api"],
              },
            ],
            interviewTopics: [
              "What is Express.js middleware and how does the next() function work?",
              "RESTful API design principles: resource Nouns, HTTP methods, and idempotency",
            ],
          },
          {
            stepId: "be-step-error-validation",
            title: "Input Validation & Central Error Middleware",
            description: "Sanitize request data, validate incoming JSON payloads, handle malformed input gracefully, and write centralized Express error handling middleware.",
            order: 1,
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
                title: "Robust Validation & Error-Handling API Subsystem",
                description: "Implement custom operational error classes and error handling middleware returning standardized JSON error responses.",
                difficulty: "intermediate",
                skillSlugs: ["express-js"],
              },
            ],
            interviewTopics: [
              "Centralized error handling pattern in Express.js",
              "Sanitizing client inputs to prevent unexpected application crashes",
            ],
          },
          {
            stepId: "be-step-api-db-integration",
            title: "Database Integration & Data Access Patterns",
            description: "Connect Express.js application servers to database drivers (Postgres client / Mongoose ODM), managing connection pools and environment variables.",
            order: 2,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["express-js", "mongodb-nosql", "postgresql"],
            resources: [
              {
                title: "Mongoose ODM Documentation: Connecting & Queries",
                type: "documentation",
                url: "https://mongoosejs.com/docs/guide.html",
              },
            ],
            projects: [
              {
                title: "Full CRUD Product Catalog API with Database Persistence",
                description: "Build a REST API that persists product and category documents into MongoDB Atlas with search and filtering query parameters.",
                difficulty: "intermediate",
                skillSlugs: ["express-js", "mongodb-nosql"],
              },
            ],
            interviewTopics: [
              "Database connection pooling and environment configuration",
              "Handling database error codes cleanly in API responses",
            ],
          },
        ],
      },
      {
        phaseId: "be-phase-5-auth-security",
        title: "Phase 5: Authentication, Authorization & Security Hardening",
        description: "Secure backend services: user registration, bcrypt password hashing, JSON Web Tokens (JWT), Role-Based Access Control (RBAC), and OWASP Top 10 defenses.",
        order: 4,
        steps: [
          {
            stepId: "be-step-auth-jwt",
            title: "User Authentication with Passwords & JWT Tokens",
            description: "Implement user authentication workflows: password hashing using bcrypt, generating JWT access tokens, verifying Bearer tokens in request headers, and protect middleware.",
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
                title: "User Registration & JWT Auth Server",
                description: "Build an Express API allowing users to register with hashed passwords, log in, and receive a signed JWT token to access protected routes.",
                difficulty: "intermediate",
                skillSlugs: ["backend-auth-security", "express-js"],
              },
            ],
            interviewTopics: [
              "Why passwords must never be stored in plain text and how salt + bcrypt hashing works",
              "JWT token structure: Header, Payload, Signature, and expiration security",
              "Stateful sessions vs stateless JWT authentication trade-offs",
            ],
          },
          {
            stepId: "be-step-rbac-security",
            title: "Role-Based Access Control (RBAC) & API Security",
            description: "Enforce authorization rules (Student vs Admin permissions), prevent Insecure Direct Object References (IDOR), apply Helmet headers, CORS, and rate limiting.",
            order: 1,
            estimatedHours: 25,
            difficulty: "intermediate",
            skillSlugs: ["backend-auth-security"],
            resources: [
              {
                title: "OWASP Top 10 Security Risks Overview",
                type: "documentation",
                url: "https://owasp.org/www-project-top-ten/",
              },
            ],
            projects: [
              {
                title: "Multi-Role Content Management API with Security Hardening",
                description: "Implement role-based authorization middleware protecting admin endpoints, rate limiting auth routes, and configuring Helmet and CORS.",
                difficulty: "advanced",
                skillSlugs: ["backend-auth-security", "express-js"],
              },
            ],
            interviewTopics: [
              "Authentication (who you are) vs Authorization (what you can do)",
              "Insecure Direct Object Reference (IDOR) vulnerability and how to prevent it",
              "Common web attacks: SQL Injection, NoSQL Injection, XSS, and CORS misconfiguration",
            ],
          },
        ],
      },
      {
        phaseId: "be-phase-6-testing-ops",
        title: "Phase 6: Testing, Containerization & Production Deployment",
        description: "Verify backend reliability with automated integration tests, package applications into Docker containers, and deploy production services.",
        order: 5,
        steps: [
          {
            stepId: "be-step-testing-jest",
            title: "Automated Integration Testing with Jest & Supertest",
            description: "Write unit tests for core service logic and end-to-end HTTP integration tests for API endpoints using Jest and Supertest against a test database.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["unit-testing-backend", "express-js"],
            resources: [
              {
                title: "Jest Documentation: Getting Started",
                type: "documentation",
                url: "https://jestjs.io/docs/getting-started",
              },
            ],
            projects: [
              {
                title: "Automated Test Suite for Auth & Resource API",
                description: "Write a complete integration test suite verifying user registration, login errors, token verification, and route authorization.",
                difficulty: "advanced",
                skillSlugs: ["unit-testing-backend"],
              },
            ],
            interviewTopics: [
              "Unit testing vs integration testing vs end-to-end testing in backend systems",
              "Mocking database queries and external service dependencies during testing",
            ],
          },
          {
            stepId: "be-step-docker",
            title: "Containerizing Backend Services with Docker",
            description: "Package Node.js applications into lightweight Docker containers: writing Dockerfiles, creating container images, environment variables, and Docker Compose.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["docker", "linux-basics"],
            resources: [
              {
                title: "Docker Official Documentation: Node.js Web App Quickstart",
                type: "documentation",
                url: "https://docs.docker.com/language/nodejs/",
              },
            ],
            projects: [
              {
                title: "Dockerized Node.js & Database Micro-Environment",
                description: "Write a Dockerfile and docker-compose.yml file spinning up a Node.js API server connected to a containerized PostgreSQL/MongoDB database.",
                difficulty: "intermediate",
                skillSlugs: ["docker"],
              },
            ],
            interviewTopics: [
              "What is a container and how does Docker differ from a Virtual Machine?",
              "Key Dockerfile directives: FROM, WORKDIR, COPY, RUN, EXPOSE, and CMD",
            ],
          },
          {
            stepId: "be-step-cloud-deployment",
            title: "Deploying Production Backend Services",
            description: "Deploy Node.js API services to cloud hosting platforms (e.g. Render, Railway, Vercel Serverless), managing production environment variables and monitoring logs.",
            order: 2,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["express-js", "node-js"],
            resources: [
              {
                title: "Render Documentation: Deploying a Node Express App",
                type: "documentation",
                url: "https://render.com/docs/deploy-node-express-app",
              },
            ],
            projects: [
              {
                title: "Live Production Cloud API Deployment",
                description: "Deploy an Express API server with MongoDB Atlas connection to a live cloud platform with production environment variable configuration.",
                difficulty: "intermediate",
                skillSlugs: ["express-js"],
              },
            ],
            interviewTopics: [
              "Configuring production environment variables vs local development .env files",
              "Fail-fast application startup checks and server health monitoring",
            ],
          },
        ],
      },
      {
        phaseId: "be-phase-7-capstone",
        title: "Phase 7: Portfolio Capstone & Technical Interview Readiness",
        description: "Design and build a portfolio-grade backend capstone service and prepare for entry-level backend engineering interviews.",
        order: 6,
        steps: [
          {
            stepId: "be-step-capstone-project",
            title: "Building a Portfolio-Grade Backend Service Capstone",
            description: "Design and deploy a full-scale backend service featuring authentication, role-based authorization, relational/document persistence, validation, testing, and deployment.",
            order: 0,
            estimatedHours: 40,
            difficulty: "advanced",
            skillSlugs: [
              "express-js",
              "node-js",
              "backend-auth-security",
              "data-modeling",
              "postgresql",
            ],
            resources: [
              {
                title: "Swagger / OpenAPI Specification: API Documentation Standard",
                type: "documentation",
                url: "https://swagger.io/specification/",
              },
            ],
            projects: [
              {
                title: "Full Capstone: Production-Style E-Commerce or Learning Management API",
                description: "Build a production-deployed backend API service featuring user authentication, role-based access control (RBAC), database persistence, input validation, centralized error handling, integration testing, Docker containerization, and OpenAPI docs. (Optional Advanced Extension: Multi-tenant organization boundaries).",
                difficulty: "advanced",
                skillSlugs: ["express-js", "backend-auth-security", "data-modeling"],
              },
            ],
            interviewTopics: [
              "Walking through backend application architecture and database design decisions in technical interviews",
              "API documentation standards (OpenAPI / Postman collections)",
            ],
          },
          {
            stepId: "be-step-interview-readiness",
            title: "Backend Technical Interview Readiness",
            description: "Practice entry-level backend engineering interview topics: SQL query coding exercises, data structure fundamentals, REST API design problems, and system design basics.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["node-js", "sql-relational-db", "express-js"],
            resources: [
              {
                title: "Backend Engineering Interview Handbook",
                type: "article",
                url: "https://github.com/donnemartin/system-design-primer",
              },
            ],
            projects: [
              {
                title: "Backend Coding & System Design Mock Exercise Suite",
                description: "Complete mock coding challenges: designing rate-limiter logic, writing complex SQL JOINs, and designing a basic URL shortener database schema.",
                difficulty: "intermediate",
                skillSlugs: ["sql-relational-db", "express-js"],
              },
            ],
            interviewTopics: [
              "Explaining database indexing and query optimization in technical interviews",
              "Handling high-concurrency requests and basic caching concepts (Redis overview)",
              "Walking through behavioral questions using the STAR method for software projects",
            ],
          },
        ],
      },
    ],
  },
};

module.exports = backendDeveloperCareerData;

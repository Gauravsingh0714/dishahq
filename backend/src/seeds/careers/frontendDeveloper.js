/**
 * Reference Canonical Career Seed Data: Frontend Developer (Phase C6)
 * Designed for student navigation, progressive learning, and entry-level employment readiness.
 */
const frontendDeveloperCareerData = {
  name: "Frontend Developer",
  slug: "frontend-developer",
  category: "development",
  shortDescription: "Build responsive, accessible, and high-performance web applications using modern HTML, CSS, JavaScript, and React.",
  description: "Frontend Developers create the visual interfaces, interactive experiences, and client-side application logic of modern web applications. This career path guides students step-by-step from core web markup and styling to modern component architecture, TypeScript, state management, automated testing, and web performance optimization.",
  difficulty: "beginner",
  requiredSkillSlugs: [
    "html5",
    "css3",
    "javascript",
    "git",
    "responsive-design",
    "rest-api",
    "react",
    "typescript",
  ],
  optionalSkillSlugs: [
    "state-management",
    "web-accessibility",
    "unit-testing-frontend",
    "web-performance",
  ],
  marketMetadata: {
    salaryRange: {
      min: 65000,
      max: 130000,
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
        phaseId: "fe-phase-1-fundamentals",
        title: "Phase 1: Web Foundation & Document Styling",
        description: "Master the structure and presentation layers of the web using modern semantic HTML5 and CSS3 layouts.",
        order: 0,
        steps: [
          {
            stepId: "fe-step-html5-basics",
            title: "Semantic HTML5 & Web Document Structure",
            description: "Understand page markup, document hierarchy, forms, input validation, semantic elements, and SEO metadata.",
            order: 0,
            estimatedHours: 15,
            difficulty: "beginner",
            skillSlugs: ["html5"],
            resources: [
              {
                title: "MDN Web Docs: Structuring the Web with HTML",
                type: "documentation",
                url: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
              },
            ],
            projects: [
              {
                title: "Personal Profile Page",
                description: "Build a semantic, well-structured single-page profile with header, bio, contact form, and navigation.",
                difficulty: "beginner",
                skillSlugs: ["html5"],
              },
            ],
            interviewTopics: [
              "Difference between block and inline elements",
              "Importance of semantic HTML tags for SEO and accessibility",
              "HTML5 form input types and attribute validation",
            ],
          },
          {
            stepId: "fe-step-css3-layouts",
            title: "Modern CSS Layouts with Flexbox & Grid",
            description: "Master CSS box model, positioning, CSS Flexbox for 1D layouts, and CSS Grid for complex 2D interfaces.",
            order: 1,
            estimatedHours: 25,
            difficulty: "beginner",
            skillSlugs: ["css3"],
            resources: [
              {
                title: "CSS Tricks: A Complete Guide to Flexbox",
                type: "article",
                url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
              },
              {
                title: "CSS Tricks: A Complete Guide to Grid",
                type: "article",
                url: "https://css-tricks.com/snippets/css/complete-guide-grid/",
              },
            ],
            projects: [
              {
                title: "Product Landing Page Layout",
                description: "Style a multi-section landing page using CSS Flexbox for navigation and Grid for feature cards.",
                difficulty: "beginner",
                skillSlugs: ["css3"],
              },
            ],
            interviewTopics: [
              "CSS Box Model: margin, border, padding, and content",
              "Flexbox vs CSS Grid use cases",
              "CSS specificity rules and inheritance",
            ],
          },
          {
            stepId: "fe-step-responsive-design",
            title: "Responsive Web Design & Mobile-First Media Queries",
            description: "Build adaptive user interfaces using fluid viewport units, breakpoints, mobile-first CSS media queries, and responsive images.",
            order: 2,
            estimatedHours: 20,
            difficulty: "beginner",
            skillSlugs: ["responsive-design", "css3"],
            resources: [
              {
                title: "web.dev: Responsive Web Design Basics",
                type: "documentation",
                url: "https://web.dev/responsive-web-design-basics/",
              },
            ],
            projects: [
              {
                title: "Responsive Tech Blog Layout",
                description: "Create a blog interface that seamlessly adapts from mobile screen sizes to desktop displays.",
                difficulty: "beginner",
                skillSlugs: ["responsive-design"],
              },
            ],
            interviewTopics: [
              "Mobile-first vs desktop-first CSS design strategy",
              "Viewport meta tag configuration and media query syntax",
            ],
          },
        ],
      },
      {
        phaseId: "fe-phase-2-javascript",
        title: "Phase 2: Programming Fundamentals & Version Control",
        description: "Develop core client-side programming skills with modern JavaScript (ES6+), DOM manipulation, asynchronous programming, and Git.",
        order: 1,
        steps: [
          {
            stepId: "fe-step-js-syntax",
            title: "JavaScript Fundamentals: Syntax, Logic & Functions",
            description: "Learn variable declarations (const, let), data types, operators, conditional control flow, loops, array methods (map, filter, reduce), and functions.",
            order: 0,
            estimatedHours: 30,
            difficulty: "beginner",
            skillSlugs: ["javascript"],
            resources: [
              {
                title: "javascript.info: The Modern JavaScript Tutorial",
                type: "documentation",
                url: "https://javascript.info/",
              },
            ],
            projects: [
              {
                title: "Command-Line Array & Object Data Processor",
                description: "Write utility functions processing array datasets using map, filter, and reduce operations.",
                difficulty: "beginner",
                skillSlugs: ["javascript"],
              },
            ],
            interviewTopics: [
              "Difference between var, let, and const",
              "Array iteration methods: map vs filter vs reduce vs forEach",
              "Functions: arrow functions vs regular function declarations",
            ],
          },
          {
            stepId: "fe-step-js-dom",
            title: "DOM Manipulation & Browser Event Handling",
            description: "Select, manipulate, and dynamic update HTML elements in real-time, handle keyboard/click events, and manage form input state.",
            order: 1,
            estimatedHours: 25,
            difficulty: "beginner",
            skillSlugs: ["javascript"],
            resources: [
              {
                title: "MDN: Introduction to the DOM",
                type: "documentation",
                url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
              },
            ],
            projects: [
              {
                title: "Interactive Task & Todo App",
                description: "Build an interactive Todo application with dynamic item creation, task status toggling, and local storage persistence.",
                difficulty: "intermediate",
                skillSlugs: ["javascript", "html5", "css3"],
              },
            ],
            interviewTopics: [
              "Event bubbling, capturing, and event delegation",
              "Manipulating DOM nodes using querySelector and innerHTML vs textContent",
            ],
          },
          {
            stepId: "fe-step-js-async",
            title: "Asynchronous JavaScript & Fetch API",
            description: "Understand the Event Loop, Call Stack, Promises, async/await syntax, HTTP request methods, and fetching API data.",
            order: 2,
            estimatedHours: 25,
            difficulty: "intermediate",
            skillSlugs: ["javascript", "rest-api"],
            resources: [
              {
                title: "MDN: Asynchronous JavaScript",
                type: "documentation",
                url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous",
              },
            ],
            projects: [
              {
                title: "Live Weather & Forecast Dashboard",
                description: "Fetch real-time weather data from a public REST API and render dynamic weather cards with loading/error states.",
                difficulty: "intermediate",
                skillSlugs: ["javascript", "rest-api"],
              },
            ],
            interviewTopics: [
              "The JavaScript Event Loop, Call Stack, and Microtask Queue",
              "Promises: resolve, reject, .then(), and try/catch with async/await",
            ],
          },
          {
            stepId: "fe-step-git-workflow",
            title: "Version Control with Git & GitHub",
            description: "Manage source code history, create feature branches, solve merge conflicts, write clear commit messages, and collaborate on GitHub.",
            order: 3,
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
                title: "GitHub Open Source Repository Setup",
                description: "Create a GitHub repository with branches, pull requests, issue templates, and a detailed README.",
                difficulty: "beginner",
                skillSlugs: ["git"],
              },
            ],
            interviewTopics: [
              "Basic Git workflow: status, add, commit, push, pull",
              "Resolving merge conflicts and git rebase vs git merge",
            ],
          },
        ],
      },
      {
        phaseId: "fe-phase-3-react",
        title: "Phase 3: Modern Component UI Framework (React.js)",
        description: "Build declarative, component-driven user interfaces using React.js, hooks, props, and client-side single-page app routing.",
        order: 2,
        steps: [
          {
            stepId: "fe-step-react-components",
            title: "React Component Architecture & JSX",
            description: "Understand single-page application concepts, JSX syntax, functional components, props passing, and key prop rules for array rendering.",
            order: 0,
            estimatedHours: 25,
            difficulty: "intermediate",
            skillSlugs: ["react", "javascript"],
            resources: [
              {
                title: "React Documentation: Quick Start & Describing the UI",
                type: "documentation",
                url: "https://react.dev/learn",
              },
            ],
            projects: [
              {
                title: "Course Catalog Component Suite",
                description: "Build reusable card, grid, header, and badge React components passing dynamic course data via props.",
                difficulty: "intermediate",
                skillSlugs: ["react"],
              },
            ],
            interviewTopics: [
              "What is JSX and how does React render virtual DOM elements?",
              "Props vs state in React components",
              "Why key props are required when rendering lists in React",
            ],
          },
          {
            stepId: "fe-step-react-hooks",
            title: "Component State & Side Effects with React Hooks",
            description: "Manage component state with useState, handle side-effects and API subscriptions with useEffect, and optimize rendering with useMemo/useCallback.",
            order: 1,
            estimatedHours: 30,
            difficulty: "intermediate",
            skillSlugs: ["react"],
            resources: [
              {
                title: "React Documentation: Managing State & Adding Interactivity",
                type: "documentation",
                url: "https://react.dev/learn/managing-state",
              },
            ],
            projects: [
              {
                title: "E-Commerce Shopping Cart UI",
                description: "Build an interactive product catalog with cart item count management, total price calculation, and local storage sync.",
                difficulty: "intermediate",
                skillSlugs: ["react"],
              },
            ],
            interviewTopics: [
              "Rules of React Hooks",
              "useEffect dependency array behavior and cleanup functions",
              "State immutability in React: updating objects and arrays safely",
            ],
          },
          {
            stepId: "fe-step-react-router",
            title: "Client-Side Routing with React Router DOM",
            description: "Implement multi-page single-page application navigation, route params, nested routes, dynamic dynamic loaders, and protected route guards.",
            order: 2,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["react"],
            resources: [
              {
                title: "React Router Documentation: Main Concepts",
                type: "documentation",
                url: "https://reactrouter.com/",
              },
            ],
            projects: [
              {
                title: "Multi-Page Movie Discovery Portal",
                description: "Build a movie database web app with home page, category filters, movie detail page routes, and dynamic search parameters.",
                difficulty: "intermediate",
                skillSlugs: ["react"],
              },
            ],
            interviewTopics: [
              "Client-side routing vs traditional server-side navigation",
              "Extracting route parameters using useParams and useSearchParams",
            ],
          },
        ],
      },
      {
        phaseId: "fe-phase-4-typescript-state",
        title: "Phase 4: Scalable Architecture & Type Safety",
        description: "Enforce robust application architecture using static typing with TypeScript and central state management.",
        order: 3,
        steps: [
          {
            stepId: "fe-step-typescript-react",
            title: "Type Safety in Frontend Apps with TypeScript",
            description: "Integrate TypeScript into React applications: defining component prop types, event handler types, generic state types, and API payload interfaces.",
            order: 0,
            estimatedHours: 25,
            difficulty: "intermediate",
            skillSlugs: ["typescript", "react"],
            resources: [
              {
                title: "TypeScript Documentation: React Integration",
                type: "documentation",
                url: "https://www.typescriptlang.org/docs/handbook/react.html",
              },
            ],
            projects: [
              {
                title: "Type-Safe Dashboard Component Library",
                description: "Refactor a JavaScript React application to TypeScript with 0 implicit 'any' types and strict interface definitions.",
                difficulty: "intermediate",
                skillSlugs: ["typescript", "react"],
              },
            ],
            interviewTopics: [
              "Interface vs Type alias in TypeScript",
              "Typing React props, children, and DOM event handlers",
            ],
          },
          {
            stepId: "fe-step-global-state",
            title: "Global State Management with Redux Toolkit / Context",
            description: "Manage global application state across complex component trees using React Context API or Redux Toolkit / Zustand store architectures.",
            order: 1,
            estimatedHours: 25,
            difficulty: "intermediate",
            skillSlugs: ["state-management", "react"],
            resources: [
              {
                title: "Redux Toolkit Documentation: Quick Start",
                type: "documentation",
                url: "https://redux-toolkit.js.org/tutorials/quick-start",
              },
            ],
            projects: [
              {
                title: "Global User Workspace & Preferences App",
                description: "Build a multi-user workspace manager storing global user authentication state, theme settings, and notifications.",
                difficulty: "advanced",
                skillSlugs: ["state-management", "react", "typescript"],
              },
            ],
            interviewTopics: [
              "When to use local state vs Context API vs Redux store",
              "Redux core flow: Actions, Reducers, Store, and Selectors",
            ],
          },
        ],
      },
      {
        phaseId: "fe-phase-5-quality",
        title: "Phase 5: Quality, Accessibility & Performance",
        description: "Deliver production-grade applications meeting accessibility standards (a11y), automated testing, and web performance metrics.",
        order: 4,
        steps: [
          {
            stepId: "fe-step-accessibility",
            title: "Web Accessibility (a11y) & WCAG Compliance",
            description: "Implement accessible web interfaces conforming to WCAG standards: ARIA attributes, semantic color contrast, focus traps, and screen reader support.",
            order: 0,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["web-accessibility", "html5"],
            resources: [
              {
                title: "W3C Web Accessibility Initiative (WAI): WCAG Overview",
                type: "documentation",
                url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
              },
            ],
            projects: [
              {
                title: "Accessible Modal Dialog & Navigation Bar",
                description: "Create an accessible modal overlay with keyboard focus trap, escape key handling, and ARIA labels.",
                difficulty: "intermediate",
                skillSlugs: ["web-accessibility"],
              },
            ],
            interviewTopics: [
              "What is ARIA and when should native HTML elements be used instead?",
              "Testing accessibility using screen readers and keyboard navigation",
            ],
          },
          {
            stepId: "fe-step-testing",
            title: "Automated Frontend Testing with Vitest & React Testing Library",
            description: "Write unit tests for utility logic and integration tests for component rendering and user interaction flows using Vitest and React Testing Library.",
            order: 1,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["unit-testing-frontend", "react"],
            resources: [
              {
                title: "Testing Library: React Testing Library Docs",
                type: "documentation",
                url: "https://testing-library.com/docs/react-testing-library/intro/",
              },
            ],
            projects: [
              {
                title: "Tested Form & Authentication Flow Suite",
                description: "Write automated component tests verifying error messages, successful submission, and mock API data responses.",
                difficulty: "advanced",
                skillSlugs: ["unit-testing-frontend"],
              },
            ],
            interviewTopics: [
              "Testing implementation details vs user-visible behavior",
              "Mocking API responses and user events in component tests",
            ],
          },
          {
            stepId: "fe-step-performance",
            title: "Web Performance Optimization & Core Web Vitals",
            description: "Optimize web application load times and responsiveness: lazy loading routes, image compression, code splitting with React.lazy, and analyzing Lighthouse reports.",
            order: 2,
            estimatedHours: 15,
            difficulty: "advanced",
            skillSlugs: ["web-performance", "react"],
            resources: [
              {
                title: "web.dev: Learn Performance & Web Vitals",
                type: "documentation",
                url: "https://web.dev/learn/performance/",
              },
            ],
            projects: [
              {
                title: "Performance Optimization Case Study",
                description: "Audit and optimize an unoptimized React app to achieve a >90 score across Lighthouse Web Vitals metrics.",
                difficulty: "advanced",
                skillSlugs: ["web-performance"],
              },
            ],
            interviewTopics: [
              "Core Web Vitals: LCP, FID/INP, and CLS definitions",
              "Code splitting strategies using React.lazy and dynamic imports",
            ],
          },
        ],
      },
      {
        phaseId: "fe-phase-6-portfolio",
        title: "Phase 6: Portfolio Projects & Interview Preparation",
        description: "Assemble portfolio-grade full-stack integrated applications and practice entry-level frontend engineering technical interview topics.",
        order: 5,
        steps: [
          {
            stepId: "fe-step-capstone-project",
            title: "Building a Portfolio-Grade Frontend Application",
            description: "Design and deploy an end-to-end frontend application combining React, TypeScript, global state, REST API integration, accessibility, and CI/CD deployment.",
            order: 0,
            estimatedHours: 40,
            difficulty: "advanced",
            skillSlugs: ["react", "typescript", "rest-api", "state-management"],
            resources: [
              {
                title: "Vercel Documentation: Deploying Frontend Applications",
                type: "documentation",
                url: "https://vercel.com/docs",
              },
            ],
            projects: [
              {
                title: "Full Capstone: Collaborative Task Management Workspace",
                description: "Build a production-deployed workspace management application featuring user auth, board views, data filtering, and responsive design.",
                difficulty: "advanced",
                skillSlugs: ["react", "typescript", "state-management"],
              },
            ],
            interviewTopics: [
              "Architectural decisions in full-scale React/TypeScript applications",
              "Deploying single-page applications and configuring CORS/routing",
            ],
          },
          {
            stepId: "fe-step-interview-prep",
            title: "Frontend Technical Interview Readiness",
            description: "Prepare for entry-level frontend developer technical interviews: coding challenges, JavaScript machine coding, DOM exercises, and system design for small frontend apps.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["javascript", "react"],
            resources: [
              {
                title: "GreatFrontEnd: Frontend Interview Guide",
                type: "article",
                url: "https://www.greatfrontend.com/",
              },
            ],
            projects: [
              {
                title: "Machine Coding Interview Practice Suite",
                description: "Implement classic frontend machine coding exercises: debounced search input, tabbed interface, carousel, and infinite scroll.",
                difficulty: "intermediate",
                skillSlugs: ["javascript", "react"],
              },
            ],
            interviewTopics: [
              "Debouncing vs throttling function executions",
              "Explaining state management and asynchronous data fetching in technical interviews",
              "Behavioral interview preparation and walking through portfolio project trade-offs",
            ],
          },
        ],
      },
    ],
  },
};

module.exports = frontendDeveloperCareerData;

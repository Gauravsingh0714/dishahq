/**
 * UI/UX Designer Canonical Career Seed Data (Phase C6.11)
 * Comprehensive, industry-validated career path for UI/UX Design using Figma as the primary practical design tool.
 */
const uiUxDesignerCareerData = {
  name: "UI/UX Designer",
  slug: "ui-ux-designer",
  category: "design",
  shortDescription:
    "Design intuitive, user-centered digital products: user research, information architecture, wireframing, high-fidelity Figma prototyping, design systems, usability testing, WCAG accessibility, and developer handoff.",
  description:
    "The UI/UX Designer career path equips aspiring designers with end-to-end product design capabilities. Grounded in design thinking and user-centered design principles, this roadmap takes you from fundamental visual design and qualitative user research to low-fidelity wireframing, interactive Figma prototyping, design system architecture, accessibility audits, usability validation, and seamless developer handoff. You will build portfolio-ready case studies demonstrating real-world problem solving for web and mobile applications.",
  difficulty: "beginner",
  requiredSkillSlugs: [
    "design-principles",
    "user-research",
    "wireframing-prototyping",
    "design-systems",
    "web-accessibility",
  ],
  optionalSkillSlugs: [
    "responsive-design",
    "web-performance",
    "unit-testing-frontend",
    "react",
    "git",
  ],
  marketMetadata: {
    averageSalary: {
      amount: 92000,
      currency: "USD",
    },
    demandLevel: "high",
    region: "Global / North America / Europe / Asia",
    updatedAt: new Date("2026-01-01"),
  },
  isPublished: true,
  roadmap: {
    roadmapVersion: 1,
    phases: [
      {
        phaseId: "uux-phase-ux-design-foundations",
        title: "UX & Design Foundations",
        description:
          "Establish core product design principles, design thinking frameworks, problem framing methodologies, visual fundamentals, and the distinction between UX research and UI visual design.",
        order: 1,
        steps: [
          {
            stepId: "uux-step-what-is-ui-ux",
            title: "What UI/UX Design Is",
            description:
              "Understand the scope of digital product design: distinguishing UX (User Experience) strategy and research from UI (User Interface) visual craftsmanship, user-centered design (UCD) lifecycles, and business goal alignment.",
            order: 0,
            estimatedHours: 15,
            difficulty: "beginner",
            skillSlugs: ["design-principles"],
            resources: [
              {
                title: "Nielsen Norman Group: UX vs UI Overview & Definitions",
                type: "documentation",
                url: "https://www.nngroup.com/articles/definition-user-experience/",
              },
            ],
            projects: [
              {
                title: "Digital Product UX Audit & Deconstruction",
                description:
                  "Analyze an existing mobile or web application to identify user experience pain points, usability strengths, visual design consistency, and target user objectives.",
                difficulty: "beginner",
                skillSlugs: ["design-principles"],
              },
            ],
            interviewTopics: [
              "What is the fundamental distinction between User Experience (UX) design and User Interface (UI) design?",
              "How does User-Centered Design (UCD) balance user needs with commercial business goals?",
              "How does design debt accrue over fast-paced product releases, and how can designers address it?",
            ],
          },
          {
            stepId: "uux-step-design-thinking-problem-framing",
            title: "Design Thinking & Problem Framing",
            description:
              "Master the 5-stage Design Thinking process: Empathize, Define, Ideate, Prototype, Test. Learn how to write actionable problem statements, How Might We (HMW) statements, and hypothesis frameworks.",
            order: 1,
            estimatedHours: 15,
            difficulty: "beginner",
            skillSlugs: ["design-principles", "user-research"],
            resources: [
              {
                title: "Interaction Design Foundation: Design Thinking Framework",
                type: "documentation",
                url: "https://www.ixdf.org/literature/topics/design-thinking",
              },
            ],
            projects: [
              {
                title: "Product Problem Framing & HMW Statement Workshop",
                description:
                  "Formulate a structured problem statement for a common user friction point (e.g., food delivery order tracking) and generate 10 actionable How Might We (HMW) ideation prompts.",
                difficulty: "beginner",
                skillSlugs: ["design-principles", "user-research"],
              },
            ],
            interviewTopics: [
              "Walk through the 5 stages of the Design Thinking process and explain how ideation connects to prototyping.",
              "What is a How Might We (HMW) statement, and how does it prevent jumping to premature design solutions?",
            ],
          },
          {
            stepId: "uux-step-visual-design-fundamentals",
            title: "Visual Design Fundamentals",
            description:
              "Learn core visual design principles: visual weight, focal points, whitespace (negative space), alignment grids, proximity, contrast, scale, and Gestalt principles of visual perception.",
            order: 2,
            estimatedHours: 15,
            difficulty: "beginner",
            skillSlugs: ["design-principles"],
            resources: [
              {
                title: "Material Design: Foundation & Visual Design Guidelines",
                type: "documentation",
                url: "https://m3.material.io/foundations",
              },
            ],
            projects: [
              {
                title: "Gestalt Principles & Visual Hierarchy Layout Study",
                description:
                  "Design a set of 4 digital artboards applying Gestalt principles (Proximity, Similarity, Continuity, Closure) to guide visual scanning and hierarchy.",
                difficulty: "beginner",
                skillSlugs: ["design-principles"],
              },
            ],
            interviewTopics: [
              "How do Gestalt principles (such as Proximity and Common Region) influence layout design and component grouping?",
              "Why is whitespace critical in digital interface design, and how does it affect cognitive load?",
              "How do typography scale and line height impact reading comprehension across screen densities?",
            ],
          },
        ],
      },
      {
        phaseId: "uux-phase-user-research",
        title: "User Research & Insights Synthesis",
        description:
          "Conduct qualitative and quantitative user research, perform competitor benchmarking, build user personas, construct end-to-end customer journey maps, and translate raw data into design insights.",
        order: 2,
        steps: [
          {
            stepId: "uux-step-research-methods",
            title: "Research Methods",
            description:
              "Master primary and secondary research methods: semi-structured user interviews, contextual inquiry, survey design, competitive analysis matrices, and heuristic evaluation.",
            order: 0,
            estimatedHours: 15,
            difficulty: "beginner",
            skillSlugs: ["user-research"],
            resources: [
              {
                title: "Nielsen Norman Group: User Research Methods & When to Use Them",
                type: "documentation",
                url: "https://www.nngroup.com/articles/which-ux-research-methods/",
              },
            ],
            projects: [
              {
                title: "User Interview Script & Competitive Analysis Matrix",
                description:
                  "Draft a 10-question qualitative user interview script for a travel planning app and perform a feature matrix benchmark of 3 competing products.",
                difficulty: "beginner",
                skillSlugs: ["user-research"],
              },
            ],
            interviewTopics: [
              "When should you choose qualitative user interviews over quantitative surveys during product discovery?",
              "What is a heuristic evaluation, and how do Nielsen's 10 Usability Heuristics serve as an inspection framework?",
            ],
          },
          {
            stepId: "uux-step-user-personas-journey-maps",
            title: "User Personas & Journey Maps",
            description:
              "Transform research findings into realistic user personas (goals, behaviors, pain points, motivations) and detailed Customer Journey Maps (CJM) detailing touchpoints, emotions, and opportunity areas.",
            order: 1,
            estimatedHours: 20,
            difficulty: "beginner",
            skillSlugs: ["user-research"],
            resources: [
              {
                title: "Nielsen Norman Group: Journey Mapping 101",
                type: "documentation",
                url: "https://www.nngroup.com/articles/journey-mapping-101/",
              },
            ],
            projects: [
              {
                title: "Primary User Persona & Customer Journey Map Blueprint",
                description:
                  "Create an evidence-based primary user persona and a 5-stage customer journey map mapping user emotions, friction points, and design opportunities for a fitness tracking app.",
                difficulty: "intermediate",
                skillSlugs: ["user-research"],
              },
            ],
            interviewTopics: [
              "How do you ensure user personas are grounded in actual empirical research data rather than internal assumptions?",
              "What key elements must be included in a comprehensive Customer Journey Map?",
            ],
          },
          {
            stepId: "uux-step-research-synthesis-insights",
            title: "Research Synthesis & Insights",
            description:
              "Synthesize qualitative user feedback using Affinity Diagramming, thematic coding, empathy mapping, and insight statements that directly inform feature prioritization and design requirements.",
            order: 2,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["user-research"],
            resources: [
              {
                title: "Figma Community: Affinity Diagramming & Research Synthesis",
                type: "documentation",
                url: "https://help.figma.com/hc/en-us/articles/360041068214-Guide-to-FigJam",
              },
            ],
            projects: [
              {
                title: "Affinity Mapping & Design Recommendation Deliverable",
                description:
                  "Group 30 qualitative interview quotes into an affinity map in FigJam/Figma, extract 4 key thematic insights, and present prioritized design recommendations.",
                difficulty: "intermediate",
                skillSlugs: ["user-research"],
              },
            ],
            interviewTopics: [
              "How do you use affinity diagramming to cluster unstructured research observations into actionable themes?",
              "How do you communicate research synthesis insights to non-design stakeholders and engineering leads?",
            ],
          },
        ],
      },
      {
        phaseId: "uux-phase-information-architecture-user-flows",
        title: "Information Architecture & User Flows",
        description:
          "Organize digital content structures, design intuitive navigation systems, map user decision trees, construct task flows, and conduct card sorting validation.",
        order: 3,
        steps: [
          {
            stepId: "uux-step-information-architecture",
            title: "Information Architecture",
            description:
              "Learn the core principles of Information Architecture (IA): content hierarchy, sitemaps, taxonomy classification, search mechanics, card sorting (open vs closed), and mental model alignment.",
            order: 0,
            estimatedHours: 15,
            difficulty: "beginner",
            skillSlugs: ["design-principles", "user-research"],
            resources: [
              {
                title: "Nielsen Norman Group: Information Architecture Study Guide",
                type: "documentation",
                url: "https://www.nngroup.com/articles/ia-study-guide/",
              },
            ],
            projects: [
              {
                title: "E-Commerce Platform Sitemap & Card Sorting Study",
                description:
                  "Build a comprehensive sitemap for a multi-category e-commerce platform and analyze card sorting data to optimize navigation categories.",
                difficulty: "intermediate",
                skillSlugs: ["design-principles", "user-research"],
              },
            ],
            interviewTopics: [
              "What is the difference between open card sorting and closed card sorting in navigation architecture?",
              "How does aligning information architecture with user mental models prevent navigation failure?",
            ],
          },
          {
            stepId: "uux-step-user-flows-task-flows",
            title: "User Flows & Task Flows",
            description:
              "Map screen-by-screen user flows, decision logic branches, happy paths, edge cases, error states, and task flows for key product interactions.",
            order: 1,
            estimatedHours: 18,
            difficulty: "intermediate",
            skillSlugs: ["design-principles", "wireframing-prototyping"],
            resources: [
              {
                title: "Figma Official Docs: Mapping User Flows and Diagrams",
                type: "documentation",
                url: "https://help.figma.com/hc/en-us/articles/1500004362541-Diagramming-in-Figma",
              },
            ],
            projects: [
              {
                title: "Multi-Step Onboarding & Checkout User Flow Diagram",
                description:
                  "Create a complete user flow diagram mapping the happy path, login edge cases, payment failure fallbacks, and confirmation screens for a subscription service.",
                difficulty: "intermediate",
                skillSlugs: ["design-principles", "wireframing-prototyping"],
              },
            ],
            interviewTopics: [
              "What is the difference between a high-level user flow and a granular step-by-step task flow?",
              "How do you account for system error states and edge cases when mapping user decision trees?",
            ],
          },
          {
            stepId: "uux-step-navigation-content-structure",
            title: "Navigation & Content Structure",
            description:
              "Design responsive navigation patterns: tab bars, bottom navigation, drawer menus, breadcrumbs, search filtering UI, and sticky headers across desktop and mobile devices.",
            order: 2,
            estimatedHours: 17,
            difficulty: "intermediate",
            skillSlugs: ["design-principles", "responsive-design"],
            resources: [
              {
                title: "Apple Human Interface Guidelines: Navigation Patterns",
                type: "documentation",
                url: "https://developer.apple.com/design/human-interface-guidelines/navigation-bars",
              },
            ],
            projects: [
              {
                title: "Cross-Platform Navigation Component Suite",
                description:
                  "Design mobile bottom navigation bars, desktop global header dropdowns, and breadcrumb structures for a content-heavy news application.",
                difficulty: "intermediate",
                skillSlugs: ["design-principles", "responsive-design"],
              },
            ],
            interviewTopics: [
              "When should a designer choose a bottom tab bar over a side drawer navigation menu on mobile devices?",
              "How do breadcrumb navigation structures enhance usability in deep web application hierarchies?",
            ],
          },
        ],
      },
      {
        phaseId: "uux-phase-wireframing-prototyping",
        title: "Wireframing & Interactive Prototyping",
        description:
          "Transform concept structures into low-fidelity paper and digital wireframes, construct interactive Figma prototypes, define component transitions, and design micro-interactions.",
        order: 4,
        steps: [
          {
            stepId: "uux-step-low-fidelity-wireframes",
            title: "Low-Fidelity Wireframes",
            description:
              "Master rapid sketching, low-fidelity digital wireframing in Figma, layout gridding, block frames, copy placement, and visual hierarchy without getting distracted by colors or visual polish.",
            order: 0,
            estimatedHours: 18,
            difficulty: "beginner",
            skillSlugs: ["wireframing-prototyping"],
            resources: [
              {
                title: "Figma Official Docs: Designing Low-Fidelity Layouts & Grids",
                type: "documentation",
                url: "https://help.figma.com/hc/en-us/articles/360040450513-Guide-to-layout-grids",
              },
            ],
            projects: [
              {
                title: "SaaS Dashboard Low-Fidelity Wireframe Suite",
                description:
                  "Sketch and digitize a 6-screen low-fidelity wireframe set for a B2B SaaS analytics dashboard focusing on layout hierarchy, data tables, and card placement.",
                difficulty: "beginner",
                skillSlugs: ["wireframing-prototyping"],
              },
            ],
            interviewTopics: [
              "Why is low-fidelity wireframing essential before jumping into high-fidelity UI design?",
              "How do layout grids (such as 12-column desktop grids and 4-column mobile grids) maintain visual alignment?",
            ],
          },
          {
            stepId: "uux-step-high-fidelity-prototypes",
            title: "High-Fidelity Prototypes",
            description:
              "Build interactive high-fidelity Figma prototypes using frames, component instances, interactive variants, smart animate transitions, scroll overflow areas, and dynamic overlay modals.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["wireframing-prototyping"],
            resources: [
              {
                title: "Figma Official Documentation: Prototyping & Smart Animate",
                type: "documentation",
                url: "https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma",
              },
              {
                title: "Figma Community: Interactive Component Variants & Variables",
                type: "documentation",
                url: "https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma",
              },
            ],
            projects: [
              {
                title: "Interactive Mobile Banking Figma Prototype",
                description:
                  "Construct a fully clickable 12-screen mobile banking app prototype in Figma featuring interactive input states, slide-over modals, and transaction flow animations.",
                difficulty: "intermediate",
                skillSlugs: ["wireframing-prototyping"],
              },
            ],
            interviewTopics: [
              "How does Figma's Smart Animate interpret layer naming and hierarchy to generate smooth transitions?",
              "What is the difference between interactive component variants and frame-to-frame prototyping connections?",
            ],
          },
          {
            stepId: "uux-step-interaction-microinteraction-design",
            title: "Interaction & Micro-interaction Design",
            description:
              "Design intentional micro-interactions: button hover/press states, toggle animations, drag-to-dismiss cards, pull-to-refresh indicators, loading skeletons, and subtle motion timing curves.",
            order: 2,
            estimatedHours: 17,
            difficulty: "intermediate",
            skillSlugs: ["wireframing-prototyping", "design-principles"],
            resources: [
              {
                title: "Nielsen Norman Group: Micro-interactions in Digital Interfaces",
                type: "documentation",
                url: "https://www.nngroup.com/articles/microinteractions/",
              },
            ],
            projects: [
              {
                title: "Micro-interaction & Component State Library",
                description:
                  "Design a interactive component library set in Figma showcasing button ripple effects, heart favorite animations, skeleton loading placeholders, and toast notification entries.",
                difficulty: "intermediate",
                skillSlugs: ["wireframing-prototyping", "design-principles"],
              },
            ],
            interviewTopics: [
              "What are the 4 structural components of a micro-interaction according to Dan Saffer (Trigger, Rules, Feedback, Loops/Modes)?",
              "How do micro-interactions provide tactile digital feedback and reinforce user confidence?",
            ],
          },
        ],
      },
      {
        phaseId: "uux-phase-visual-ui-design-systems",
        title: "Visual UI & Design Systems",
        description:
          "Master typography scale, color theory, design tokens, component architecture, auto layout, component variants, responsive layout grids, and design system governance.",
        order: 5,
        steps: [
          {
            stepId: "uux-step-typography-color-visual-hierarchy",
            title: "Typography, Color & Visual Hierarchy",
            description:
              "Master digital typography: modular type scales, line heights, letter spacing, font pairing, and WCAG color contrast compliance (4.5:1 ratio for normal text, 3:1 for large text), primary/secondary/accent color palettes.",
            order: 0,
            estimatedHours: 18,
            difficulty: "beginner",
            skillSlugs: ["design-principles"],
            resources: [
              {
                title: "Material Design 3: Color System & Typography Guidelines",
                type: "documentation",
                url: "https://m3.material.io/styles/color/overview",
              },
            ],
            projects: [
              {
                title: "Accessible Brand Style Guide & Typography Scale",
                description:
                  "Create a complete digital brand style guide featuring a modular typography scale, semantic color palette (Light/Dark mode), and contrast validation matrix.",
                difficulty: "beginner",
                skillSlugs: ["design-principles"],
              },
            ],
            interviewTopics: [
              "How do you establish a mathematical modular type scale for web and mobile interfaces?",
              "What are the minimum WCAG AA contrast ratio requirements for body text and interactive UI elements?",
            ],
          },
          {
            stepId: "uux-step-components-design-systems",
            title: "Components & Design Systems",
            description:
              "Architect scalable design systems in Figma using Auto Layout 5.0, Component Properties (Boolean, Instance Swap, Text), Design Tokens (Color, Spacing, Elevation), and component libraries.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["design-systems", "wireframing-prototyping"],
            resources: [
              {
                title: "Figma Official Guide: Building Design Systems with Auto Layout & Variants",
                type: "documentation",
                url: "https://help.figma.com/hc/en-us/articles/360040451373-Create-and-use-variants",
              },
              {
                title: "Storybook: Design Systems for Developers & Designers",
                type: "documentation",
                url: "https://storybook.js.org/docs/get-started/design-systems-for-developers",
              },
            ],
            projects: [
              {
                title: "Scalable UI Design System & Component Library",
                description:
                  "Build a comprehensive Figma Design System containing buttons, form inputs, modal dialogs, cards, navigation bars, and status badges powered by Auto Layout and Design Tokens.",
                difficulty: "intermediate",
                skillSlugs: ["design-systems", "wireframing-prototyping"],
              },
            ],
            interviewTopics: [
              "How do Figma Auto Layout properties (padding, gap, alignment, hug/fill) mirror CSS Flexbox behavior for developers?",
              "What is a Design Token, and how does tokenization bridge design systems between Figma and frontend codebases?",
            ],
          },
          {
            stepId: "uux-step-responsive-adaptive-interfaces",
            title: "Responsive & Adaptive Interfaces",
            description:
              "Design responsive web layouts and adaptive mobile interfaces across desktop (1440px), tablet (768px), and mobile (375px) breakpoints, managing fluid scaling and breakpoint reflow.",
            order: 2,
            estimatedHours: 17,
            difficulty: "intermediate",
            skillSlugs: ["design-principles", "responsive-design"],
            resources: [
              {
                title: "Apple Human Interface Guidelines: Layout & Adaptability",
                type: "documentation",
                url: "https://developer.apple.com/design/human-interface-guidelines/layout",
              },
            ],
            projects: [
              {
                title: "Responsive SaaS Landing Page & Web App UI Set",
                description:
                  "Design a responsive SaaS product marketing landing page and app dashboard across 3 distinct breakpoints (Desktop, Tablet, Mobile) using fluid layout grids.",
                difficulty: "intermediate",
                skillSlugs: ["design-principles", "responsive-design"],
              },
            ],
            interviewTopics: [
              "What is the difference between Responsive Web Design (fluid grids) and Adaptive Web Design (fixed break-point layouts)?",
              "How do you design touch targets for mobile (minimum 44x44 pt / 48x48 dp) vs cursor click targets on desktop?",
            ],
          },
        ],
      },
      {
        phaseId: "uux-phase-usability-accessibility-validation",
        title: "Usability, Accessibility & Validation",
        description:
          "Conduct moderated and unmoderated usability testing sessions, execute WCAG 2.2 accessibility audits, evaluate screen reader compatibility, and iterate designs based on feedback.",
        order: 6,
        steps: [
          {
            stepId: "uux-step-usability-testing",
            title: "Usability Testing",
            description:
              "Plan and execute usability testing: writing test plans, task scenarios, conducting moderated 1-on-1 test sessions, analyzing unmoderated Maze tests, computing System Usability Scale (SUS) scores, and calculating task completion rates.",
            order: 0,
            estimatedHours: 18,
            difficulty: "intermediate",
            skillSlugs: ["user-research", "wireframing-prototyping"],
            resources: [
              {
                title: "Nielsen Norman Group: How to Conduct Usability Testing",
                type: "documentation",
                url: "https://www.nngroup.com/articles/usability-testing-101/",
              },
            ],
            projects: [
              {
                title: "Moderated Usability Test Plan & Insight Findings Report",
                description:
                  "Write a usability test script for an e-commerce checkout flow, test 5 participants, calculate task completion rates and SUS score, and produce a video-timestamped findings report.",
                difficulty: "intermediate",
                skillSlugs: ["user-research", "wireframing-prototyping"],
              },
            ],
            interviewTopics: [
              "How do you calculate and interpret the System Usability Scale (SUS) benchmark score?",
              "What strategies do you use during moderated usability testing to avoid prompting or biasing the participant?",
            ],
          },
          {
            stepId: "uux-step-accessibility-inclusive-design",
            title: "Accessibility & Inclusive Design",
            description:
              "Master WCAG 2.2 AA standards: ARIA landmark semantics, keyboard focus order, color independence, alt text guidelines, touch target size requirements, screen reader accessibility, and cognitive accessibility.",
            order: 1,
            estimatedHours: 17,
            difficulty: "intermediate",
            skillSlugs: ["web-accessibility", "design-principles"],
            resources: [
              {
                title: "W3C Web Accessibility Initiative (WAI): WCAG 2.2 Guidelines Overview",
                type: "documentation",
                url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
              },
            ],
            projects: [
              {
                title: "Comprehensive Accessibility Audit & Remediation Spec",
                description:
                  "Audit a live digital product using Stark/A11y Figma plugins for color contrast, focus indicator visibility, and screen reader announcements, delivering a remediated UI design.",
                difficulty: "intermediate",
                skillSlugs: ["web-accessibility", "design-principles"],
              },
            ],
            interviewTopics: [
              "What are the 4 core principles of WCAG accessibility (POUR: Perceivable, Operable, Understandable, Robust)?",
              "How do you ensure a design is fully navigable using keyboard-only interaction and visual focus indicators?",
            ],
          },
          {
            stepId: "uux-step-iteration-design-validation",
            title: "Iteration & Design Validation",
            description:
              "Iterate UI designs based on quantitative usability data, A/B testing hypotheses, design critique feedback, and stakeholder reviews while documenting design decision rationales.",
            order: 2,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["design-principles", "user-research"],
            resources: [
              {
                title: "Nielsen Norman Group: Design Iteration & Feedback Loops",
                type: "documentation",
                url: "https://www.nngroup.com/articles/design-iteration/",
              },
            ],
            projects: [
              {
                title: "Before-and-After Design Iteration Showcase",
                description:
                  "Take an initial prototype, analyze usability failure data, re-design key screens, and produce a before-and-after validation comparison deck explaining all design changes.",
                difficulty: "intermediate",
                skillSlugs: ["design-principles", "user-research"],
              },
            ],
            interviewTopics: [
              "How do you defend design iterations using user research evidence when faced with subjective stakeholder feedback?",
              "What is the difference between formative usability testing during prototyping and summative usability testing prior to launch?",
            ],
          },
        ],
      },
      {
        phaseId: "uux-phase-product-design-developer-handoff",
        title: "Product Design & Developer Handoff",
        description:
          "Design for production constraints, create detailed developer handoff specifications, write microcopy/UX text, collaborate with engineering teams, and conduct Design QA.",
        order: 7,
        steps: [
          {
            stepId: "uux-step-designing-for-real-products",
            title: "Designing for Real Products",
            description:
              "Understand real-world software constraints: technical feasibility, API data states (empty, loading, success, error, partial), dynamic content limits, localized text expansion, and platform guidelines.",
            order: 0,
            estimatedHours: 18,
            difficulty: "intermediate",
            skillSlugs: ["design-principles", "design-systems"],
            resources: [
              {
                title: "Figma Official Docs: Preparing Files for Development",
                type: "documentation",
                url: "https://help.figma.com/hc/en-us/articles/360040515833-Guide-to-developer-handoff",
              },
            ],
            projects: [
              {
                title: "Complete Data State & Edge Case UI Specification",
                description:
                  "Design a complex data table component showcasing all 5 data states: Loading (skeleton), Empty (illustration + CTA), Error (toast), Partial, and Full populated data states.",
                difficulty: "intermediate",
                skillSlugs: ["design-principles", "design-systems"],
              },
            ],
            interviewTopics: [
              "Why must designers account for empty states, loading skeletons, and server error responses in production UI specs?",
              "How do internationalization (i18n) and text expansion affect fixed-width UI component containers?",
            ],
          },
          {
            stepId: "uux-step-design-specs-developer-handoff",
            title: "Design Specs & Developer Handoff",
            description:
              "Master developer handoff in Figma: organizing pages, annotating spacing and dimensions, exporting assets (SVG, PNG, WebP), documenting animation specifications, and leveraging Figma Dev Mode.",
            order: 1,
            estimatedHours: 18,
            difficulty: "intermediate",
            skillSlugs: ["design-systems", "git"],
            resources: [
              {
                title: "Figma Official Docs: Using Dev Mode & Code Inspection",
                type: "documentation",
                url: "https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode",
              },
            ],
            projects: [
              {
                title: "Production Developer Handoff Package & Annotation Spec",
                description:
                  "Prepare a production-ready Figma file containing annotated component dimensions, CSS token mapping, asset export rules, and a Redline specification doc for frontend engineers.",
                difficulty: "intermediate",
                skillSlugs: ["design-systems", "git"],
              },
            ],
            interviewTopics: [
              "How do you annotate a Figma design file so frontend developers can accurately implement spacing, colors, and responsive rules?",
              "What role does Figma Dev Mode play in streamlining design-to-code translation?",
            ],
          },
          {
            stepId: "uux-step-working-with-product-engineering-teams",
            title: "Working With Product & Engineering Teams",
            description:
              "Collaborate in cross-functional Agile/Scrum teams: participating in sprint planning, design grooming, conducting Design QA audits against staged builds, and managing design debt.",
            order: 2,
            estimatedHours: 19,
            difficulty: "intermediate",
            skillSlugs: ["design-systems", "git"],
            resources: [
              {
                title: "Nielsen Norman Group: Agile UX & Integrating Design in Sprints",
                type: "documentation",
                url: "https://www.nngroup.com/articles/agile-ux-study-guide/",
              },
            ],
            projects: [
              {
                title: "Design QA Audit & Bug Ticket Reporting Suite",
                description:
                  "Perform a visual and interaction Design QA audit on a staged web app, log 5 visual regression bug tickets with screenshots/CSS annotations in a tracking sheet.",
                difficulty: "intermediate",
                skillSlugs: ["design-systems", "git"],
              },
            ],
            interviewTopics: [
              "How do you integrate UX design activities into 2-week Agile software development sprints?",
              "What is Design QA, and how do you handle discrepancies between Figma designs and deployed frontend code?",
            ],
          },
        ],
      },
      {
        phaseId: "uux-phase-portfolio-career-preparation",
        title: "Portfolio & Career Preparation",
        description:
          "Construct a professional UI/UX portfolio, write compelling end-to-end case studies, practice design presentations, and prepare for technical design interviews and whiteboard challenges.",
        order: 8,
        steps: [
          {
            stepId: "uux-step-end-to-end-case-study",
            title: "End-to-End Case Study",
            description:
              "Synthesize your design journey into a comprehensive portfolio case study: framing the problem, research findings, IA, wireframes, visual UI, usability testing results, iteration, and business metrics impact.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: [
              "design-principles",
              "user-research",
              "wireframing-prototyping",
              "design-systems",
              "web-accessibility",
            ],
            resources: [
              {
                title: "Nielsen Norman Group: How to Write Outstanding UX Case Studies",
                type: "documentation",
                url: "https://www.nngroup.com/articles/ux-one-pagers-portfolios/",
              },
            ],
            projects: [
              {
                title: "Production Capstone: End-to-End Product Design Case Study",
                description:
                  "Execute a full product design lifecycle for a mobile/SaaS app: problem research -> sitemap & user flow -> low-fi wireframes -> high-fi Figma prototype -> usability testing -> accessibility audit -> developer handoff spec -> published case study.",
                difficulty: "intermediate",
                skillSlugs: [
                  "design-principles",
                  "user-research",
                  "wireframing-prototyping",
                  "design-systems",
                  "web-accessibility",
                ],
              },
            ],
            interviewTopics: [
              "How do you structure a UX case study to tell a compelling story about your design process and problem-solving impact?",
              "Why should a design portfolio emphasize research, failures, and iterations rather than just showing beautiful final screens?",
            ],
          },
          {
            stepId: "uux-step-portfolio-design-presentation",
            title: "Portfolio & Design Presentation",
            description:
              "Build a responsive portfolio website or slide deck, craft your personal brand positioning, refine UX writing for case studies, and master presenting design work to hiring managers and design leads.",
            order: 1,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["design-principles", "responsive-design"],
            resources: [
              {
                title: "Figma Community: Portfolio Templates & Presentation Guidelines",
                type: "documentation",
                url: "https://help.figma.com/hc/en-us/articles/360040450433-Present-slides-in-Figma",
              },
            ],
            projects: [
              {
                title: "Interactive UI/UX Portfolio Website & Presentation Deck",
                description:
                  "Design a responsive personal portfolio website layout showcasing 3 detailed case studies, an about section, contact form, and an interactive slide presentation deck.",
                difficulty: "intermediate",
                skillSlugs: ["design-principles", "responsive-design"],
              },
            ],
            interviewTopics: [
              "How do you present a 15-minute portfolio case study walk-through during a senior design interview?",
              "How do you handle challenging questions from interviewers regarding your design decisions?",
            ],
          },
          {
            stepId: "uux-step-ui-ux-interview-preparation",
            title: "UI/UX Interview Preparation",
            description:
              "Prepare for all design interview stages: portfolio walkthroughs, live app critiques, whiteboard design challenges, behavioral questions, and salary negotiation for entry-level UI/UX roles.",
            order: 2,
            estimatedHours: 15,
            difficulty: "beginner",
            skillSlugs: ["design-principles", "user-research"],
            resources: [
              {
                title: "Nielsen Norman Group: UX Interview Preparation & Portfolio Audits",
                type: "documentation",
                url: "https://www.nngroup.com/articles/ux-career-advice/",
              },
            ],
            projects: [
              {
                title: "Live Whiteboard Challenge & App Critique Practice Suite",
                description:
                  "Complete 3 simulated whiteboard design challenges under 45-minute time constraints and record a 10-minute critique video evaluating a popular commercial application.",
                difficulty: "intermediate",
                skillSlugs: ["design-principles", "user-research"],
              },
            ],
            interviewTopics: [
              "How do you approach a 45-minute live whiteboard design challenge for an unfamiliar product prompt?",
              "How do you respond when an interviewer asks: 'Tell me about a design decision you made that failed'?",
            ],
          },
        ],
      },
    ],
  },
};

module.exports = uiUxDesignerCareerData;

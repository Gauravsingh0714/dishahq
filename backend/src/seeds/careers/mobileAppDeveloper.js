/**
 * Canonical Career Seed Data: Mobile App Developer (Phase C6.10)
 * Comprehensive, intermediate cross-platform mobile development curriculum targeting React Native and Expo architecture, iOS/Android runtime mechanics, component design, mobile navigation patterns, state management, REST API consumption, secure storage, local database persistence (SQLite/AsyncStorage), device hardware capabilities (Camera, GPS, File System), push notifications, deep linking, app lifecycle management, mobile accessibility, testing (Jest/RNTL), performance profiling, OWASP mobile security, EAS builds, app store signing workflows, and portfolio project development.
 */
const mobileAppDeveloperCareerData = {
  name: "Mobile App Developer",
  slug: "mobile-app-developer",
  category: "development",
  shortDescription: "Build cross-platform iOS and Android apps: React Native, Expo, mobile navigation, state architecture, REST APIs, local persistence, native device APIs, push notifications, performance profiling, and app store deployment.",
  description: "Mobile App Developers design, build, test, and release high-performance native-quality applications for iOS and Android devices. This intermediate career path guides developers through mobile application architecture, Android vs iOS platform differences, React Native core components and styling, React Navigation patterns, global mobile state architecture, REST API integration, mobile authentication, secure token storage, local SQLite persistence, native hardware access (Camera, Location, Sensor APIs), push notifications, deep linking, mobile accessibility (VoiceOver/TalkBack), unit testing with Jest and RNTL, mobile performance optimization, OWASP mobile security, EAS build workflows, and app store submission.",
  difficulty: "intermediate",
  requiredSkillSlugs: [
    "javascript",
    "react",
    "state-management",
    "rest-api",
    "git",
  ],
  optionalSkillSlugs: [
    "typescript",
    "backend-auth-security",
    "unit-testing-frontend",
    "web-performance",
    "responsive-design",
  ],
  marketMetadata: {
    salaryRange: {
      min: 78000,
      max: 135000,
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
        phaseId: "mad-phase-1-mobile-foundations-architecture",
        title: "Phase 1: Mobile Development Foundations",
        description: "Understand mobile application architecture, native runtime bridges (JSI/Hermes), Android vs iOS platform mechanics, human interface guidelines, and setting up modern Expo development environments.",
        order: 0,
        steps: [
          {
            stepId: "mad-step-mobile-arch-ecosystem",
            title: "Mobile Application Architecture and Ecosystem",
            description: "Study mobile ecosystem fundamentals: native application runtimes (Android JVM/ART vs iOS Objective-C/Swift), cross-platform compilation models, JavaScript engines (Hermes), and JavaScript Interface (JSI) architecture.",
            order: 0,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["javascript"],
            resources: [
              {
                title: "React Native Official Documentation: Architecture & Runtimes",
                type: "documentation",
                url: "https://reactnative.dev/docs/architecture-overview",
              },
            ],
            projects: [
              {
                title: "Mobile Architecture & Ecosystem Exploration App",
                description: "Build an interactive diagnostic mobile app displaying JavaScript engine runtime details, screen density metrics, and platform hardware properties.",
                difficulty: "beginner",
                skillSlugs: ["javascript"],
              },
            ],
            interviewTopics: [
              "React Native Architecture: Explaining the legacy Bridge vs the New Architecture (JSI, Fabric renderer, TurboModules)",
              "Hermes JavaScript Engine: Purpose, Ahead-Of-Time (AOT) bytecode compilation, and startup performance advantages",
              "Cross-platform compilation models: JavaScript-to-Native bridge communication vs Ahead-Of-Time (AOT) binary compilation",
            ],
          },
          {
            stepId: "mad-step-android-ios-fundamentals",
            title: "Android vs iOS Fundamentals",
            description: "Understand mobile platform differences: Android Material Design 3 vs iOS Human Interface Guidelines (HIG), navigation paradigm contrasts, permissions models, and safe area layout boundaries.",
            order: 1,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["responsive-design"],
            resources: [
              {
                title: "Android Developers Official Guide & Material Design Guidelines",
                type: "documentation",
                url: "https://developer.android.com/guide",
              },
              {
                title: "Apple Developer Documentation & Human Interface Guidelines",
                type: "documentation",
                url: "https://developer.apple.com/design/",
              },
            ],
            projects: [
              {
                title: "Platform Capability Comparison & Adaptive UI App",
                description: "Develop a mobile app rendering platform-adaptive controls: native iOS action sheets on iPhone and Android Material alert dialogs on Android.",
                difficulty: "intermediate",
                skillSlugs: ["responsive-design"],
              },
            ],
            interviewTopics: [
              "Platform UI differences: Android Back button hardware handling vs iOS swipe-to-go-back gesture expectations",
              "SafeAreaView: Handling screen notches, camera islands, dynamic islands, and home indicator layout paddings",
              "Android Material Design 3 vs iOS Human Interface Guidelines: Key design system differences for mobile engineers",
            ],
          },
          {
            stepId: "mad-step-expo-environment-tooling",
            title: "Development Environments and Tooling",
            description: "Configure mobile development tools: Expo CLI, Expo Go, Expo Dev Clients, Android Studio emulator setup, Xcode iOS simulator configuration, and environment setup scripts.",
            order: 2,
            estimatedHours: 15,
            difficulty: "beginner",
            skillSlugs: ["git"],
            resources: [
              {
                title: "Expo Official Documentation: Getting Started & Managed Workflow",
                type: "documentation",
                url: "https://docs.expo.dev/",
              },
              {
                title: "React Native Official Environment Setup Guide",
                type: "documentation",
                url: "https://reactnative.dev/docs/environment-setup",
              },
            ],
            projects: [
              {
                title: "Development Environment & Health Check Setup Project",
                description: "Set up a clean Expo managed project configured with TypeScript, ESLint, Prettier, and environment validation scripts verified on iOS Simulator and Android Emulator.",
                difficulty: "beginner",
                skillSlugs: ["git"],
              },
            ],
            interviewTopics: [
              "Expo Managed Workflow vs Bare React Native Workflow: Trade-offs, native module access, and EAS build integration",
              "Expo Dev Client: Purpose of custom development builds when working with custom native C++/Java/Swift modules",
            ],
          },
        ],
      },
      {
        phaseId: "mad-phase-2-react-native-fundamentals",
        title: "Phase 2: React Native Fundamentals",
        description: "Master React Native UI building blocks: View, Text, Image, Pressable, ScrollView, Flexbox layout positioning, Touchables, FlatList optimization, and reusable mobile design systems.",
        order: 1,
        steps: [
          {
            stepId: "mad-step-rn-core-components-flexbox",
            title: "React Native Components and Styling",
            description: "Build interfaces using core React Native components: View, Text, Image, ImageBackground, StyleSheet API, inline styles, and mobile Flexbox layout (flexDirection, justifyContent, alignItems).",
            order: 0,
            estimatedHours: 20,
            difficulty: "beginner",
            skillSlugs: ["react"],
            resources: [
              {
                title: "React Native Component & Layout Style Reference Guide",
                type: "documentation",
                url: "https://reactnative.dev/docs/components-and-apis",
              },
            ],
            projects: [
              {
                title: "Mobile User Profile & Dashboard UI App",
                description: "Build a polished mobile user profile screen featuring responsive card containers, custom avatar badges, scrollable status feeds, and adaptive screen layout.",
                difficulty: "beginner",
                skillSlugs: ["react"],
              },
            ],
            interviewTopics: [
              "React Native Flexbox vs Web Flexbox: Default flexDirection (column vs row) and position (relative) differences",
              "StyleSheet.create vs inline object styles: Memory allocation, performance optimization, and styling best practices",
            ],
          },
          {
            stepId: "mad-step-touch-inputs-lists-rendering",
            title: "Layouts, Lists, Forms, and Touch Interactions",
            description: "Handle mobile touch interactions and long lists: Pressable API, TouchableOpacity, TextInput, KeyboardAvoidingView, FlatList, and SectionList performance properties (initialNumToRender, maxToRenderPerBatch).",
            order: 1,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["javascript"],
            resources: [
              {
                title: "React Native FlatList & List Performance Documentation",
                type: "documentation",
                url: "https://reactnative.dev/docs/flatlist",
              },
            ],
            projects: [
              {
                title: "Interactive Mobile Task & Feed Manager App",
                description: "Construct a mobile task management application featuring searchable lists, smooth swipe actions, pull-to-refresh list updating, and keyboard-avoiding input forms.",
                difficulty: "intermediate",
                skillSlugs: ["javascript"],
              },
            ],
            interviewTopics: [
              "FlatList vs ScrollView: Why ScrollView renders all children immediately while FlatList virtualizes unrendered items",
              "FlatList optimization props: keyExtractor, getItemLayout, removeClippedSubviews, and windowSize tuning",
            ],
          },
          {
            stepId: "mad-step-reusable-mobile-components-design",
            title: "Reusable Mobile Components",
            description: "Design modular mobile component libraries: custom buttons, modal dialogs, loading spinners, badge indicators, design tokens (colors, typography, spacing), and light/dark theme support.",
            order: 2,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["responsive-design"],
            resources: [
              {
                title: "React Native Theme & Appearance API Guide",
                type: "documentation",
                url: "https://reactnative.dev/docs/appearance",
              },
            ],
            projects: [
              {
                title: "Reusable Mobile UI Component Dashboard",
                description: "Build a standalone mobile UI kit featuring themeable buttons, input fields, modal cards, custom toggle switches, and dark mode theme switching.",
                difficulty: "intermediate",
                skillSlugs: ["responsive-design"],
              },
            ],
            interviewTopics: [
              "Designing accessible touch targets: Enforcing minimum 44x44 pt tap area dimensions for mobile interactive controls",
              "Handling dynamic system light and dark themes using the useColorScheme hook and style tokens",
            ],
          },
        ],
      },
      {
        phaseId: "mad-phase-3-navigation-state-architecture",
        title: "Phase 3: Navigation & Application State",
        description: "Implement mobile screen navigation structures using React Navigation (Native Stack, Bottom Tabs, Drawer), design global state management, and build robust validated mobile form pipelines.",
        order: 2,
        steps: [
          {
            stepId: "mad-step-mobile-navigation-patterns",
            title: "Mobile Navigation Patterns",
            description: "Master screen navigation using React Navigation 6/7: Native Stack Navigator, Bottom Tab Navigator, Drawer Navigator, screen params, header custom styling, and nested navigation stacks.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["react"],
            resources: [
              {
                title: "React Navigation Official Documentation",
                type: "documentation",
                url: "https://reactnavigation.org/docs/getting-started",
              },
            ],
            projects: [
              {
                title: "Multi-Screen Mobile Onboarding & Flow Navigation App",
                description: "Create an multi-screen mobile app combining tab bar navigation, modal detail overlays, onboarding flow stacks, and parameterized route passing.",
                difficulty: "intermediate",
                skillSlugs: ["react"],
              },
            ],
            interviewTopics: [
              "React Navigation Stacks: How native stack navigators leverage underlying iOS UINavigationController and Android Fragment screens",
              "Passing params between routes: Best practices for keeping params minimal, JSON-serializable, and fetching full entity data by ID",
            ],
          },
          {
            stepId: "mad-step-mobile-state-architecture",
            title: "Local Component and Global State",
            description: "Architect application state for mobile: local useState/useReducer, Context API for lightweight global state, and scalable global state libraries (Redux Toolkit, Zustand).",
            order: 1,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["state-management"],
            resources: [
              {
                title: "React Official Documentation: Managing Application State",
                type: "documentation",
                url: "https://react.dev/learn/managing-state",
              },
            ],
            projects: [
              {
                title: "E-Commerce Cart & Favorites Mobile State App",
                description: "Develop a mobile shopping app using global state management to synchronize shopping cart items, total prices, favorite item bookmarks, and user preferences across tabs.",
                difficulty: "intermediate",
                skillSlugs: ["state-management"],
              },
            ],
            interviewTopics: [
              "Context API vs Redux/Zustand in mobile applications: Render re-evaluation performance impact when global context updates",
              "Managing complex asynchronous state: Handling loading, success, empty, and error UI states cleanly on mobile screens",
            ],
          },
          {
            stepId: "mad-step-mobile-forms-async-state",
            title: "Forms, Validation, and Asynchronous State",
            description: "Build robust mobile form pipelines: Controlled vs Uncontrolled inputs, React Hook Form integration, Zod schema validation, touch field blur focus states, and handling async form submission.",
            order: 2,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["typescript"],
            resources: [
              {
                title: "React Hook Form Official Documentation",
                type: "documentation",
                url: "https://react-hook-form.com/get-started",
              },
            ],
            projects: [
              {
                title: "Validated Mobile User Registration & Survey Application",
                description: "Build a multi-step user registration form featuring real-time input validation, inline field error highlighting, scroll-to-error focusing, and submission loading indicators.",
                difficulty: "intermediate",
                skillSlugs: ["typescript"],
              },
            ],
            interviewTopics: [
              "React Hook Form in React Native: Using the Controller component to wrap non-web native input elements",
              "Optimizing mobile form UX: Auto-capitalization, auto-correct settings, inputMode types (email, numeric, phone), and returnKeyType handling",
            ],
          },
        ],
      },
      {
        phaseId: "mad-phase-4-apis-auth-persistence",
        title: "Phase 4: APIs, Authentication & Persistence",
        description: "Connect mobile apps to cloud backends: fetch/Axios networking, OAuth authentication flows, JWT refresh tokens, secure device storage (SecureStore), local database persistence, and offline caching.",
        order: 3,
        steps: [
          {
            stepId: "mad-step-mobile-rest-api-consumption",
            title: "REST API Consumption",
            description: "Integrate RESTful microservices: fetch API, Axios HTTP client, request/response interceptors, timeout handling, network reachability checks (@react-native-community/netinfo), and error state UI screens.",
            order: 0,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["rest-api"],
            resources: [
              {
                title: "React Native Network Guide & Fetch API Usage",
                type: "documentation",
                url: "https://reactnative.dev/docs/network",
              },
            ],
            projects: [
              {
                title: "API-Powered Live News & Content Reader App",
                description: "Build a mobile news app fetching remote REST API feeds, displaying pull-to-refresh news cards, handling offline network errors, and supporting category filtering.",
                difficulty: "intermediate",
                skillSlugs: ["rest-api"],
              },
            ],
            interviewTopics: [
              "Handling network connectivity loss in mobile apps: NetInfo listener monitoring and displaying offline fallback banners",
              "Axios Interceptors: Automatically attaching Auth bearer tokens and handling 401 Unauthorized responses with silent token refresh",
            ],
          },
          {
            stepId: "mad-step-mobile-auth-secure-storage",
            title: "Authentication and Secure Session Handling",
            description: "Implement mobile authentication: user login/signup screens, OAuth 2.0 social login, storing JWT access/refresh tokens securely (Expo SecureStore / iOS Keychain / Android Keystore), and session auto-login.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["backend-auth-security"],
            resources: [
              {
                title: "Expo SecureStore API Documentation for Sensitive Storage",
                type: "documentation",
                url: "https://docs.expo.dev/versions/latest/sdk/securestore/",
              },
            ],
            projects: [
              {
                title: "Authenticated Mobile Client & Secure Vault App",
                description: "Construct an authenticated mobile application featuring token-based auth login, secure JWT persistence in hardware Keychains, automatic token renewal, and secure logout.",
                difficulty: "intermediate",
                skillSlugs: ["backend-auth-security"],
              },
            ],
            interviewTopics: [
              "AsyncStorage vs SecureStore (Keychain/Keystore): Why plain AsyncStorage is insecure for storing JWT tokens or private keys",
              "Implementing silent token refresh in mobile apps without forcing the user to log in again on app launch",
            ],
          },
          {
            stepId: "mad-step-local-persistence-offline-sync",
            title: "Local Persistence and Caching",
            description: "Build offline-first mobile apps: key-value storage (AsyncStorage), embedded relational database (SQLite via expo-sqlite), offline data mutation queuing, and background sync strategies.",
            order: 2,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["state-management"],
            resources: [
              {
                title: "Expo SQLite Module Official Guide",
                type: "documentation",
                url: "https://docs.expo.dev/versions/latest/sdk/sqlite/",
              },
            ],
            projects: [
              {
                title: "Offline-First Mobile Notes & Task Application",
                description: "Develop a mobile notebook app persisting notes to a local SQLite database, supporting full CRUD operations offline, and syncing changes when connectivity is restored.",
                difficulty: "intermediate",
                skillSlugs: ["state-management"],
              },
            ],
            interviewTopics: [
              "Offline-First Mobile Architecture: Strategies for caching server responses locally and queuing offline mutations for background sync",
              "SQLite in Mobile Development: Executing transactions, indexing queries, and migrating local database schema versions",
            ],
          },
        ],
      },
      {
        phaseId: "mad-phase-5-device-features-mobile-ux",
        title: "Phase 5: Device Features & Mobile UX",
        description: "Harness hardware device capabilities: camera, photo library, GPS location, push notifications (Expo Notifications), deep links (URL schemes / Universal Links), app lifecycle, and accessibility.",
        order: 4,
        steps: [
          {
            stepId: "mad-step-device-permissions-hardware-apis",
            title: "Device Permissions and Native Capabilities",
            description: "Access mobile hardware: system permissions model (iOS Info.plist, Android Manifest), Camera API (expo-camera), Location GPS API (expo-location), Media Library, and device sensors (Accelerometer).",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["javascript"],
            resources: [
              {
                title: "Expo SDK Module Overview: Camera & Location Hardware APIs",
                type: "documentation",
                url: "https://docs.expo.dev/versions/latest/",
              },
            ],
            projects: [
              {
                title: "Device Capability & Photo Journal App",
                description: "Build a photo journal mobile app requesting runtime camera/location permissions, capturing high-resolution photos, geotagging entries with GPS coordinates, and previewing images.",
                difficulty: "intermediate",
                skillSlugs: ["javascript"],
              },
            ],
            interviewTopics: [
              "Mobile Permission Workflows: Requesting permissions contextually at runtime vs requesting all permissions on app launch",
              "Handling denied permissions: Directing users to system settings screens when permissions are permanently blocked",
            ],
          },
          {
            stepId: "mad-step-push-notifications-deep-linking",
            title: "Notifications, Deep Links, and App Lifecycle",
            description: "Manage app engagement: local and remote push notifications (Expo Notifications / APNs / FCM), push token registration, custom URI schemes, Universal Links / App Links, and AppState monitoring.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["javascript"],
            resources: [
              {
                title: "Expo Notifications Guide & APNs/FCM Configuration",
                type: "documentation",
                url: "https://docs.expo.dev/push-notifications/overview/",
              },
            ],
            projects: [
              {
                title: "Push Notification & Deep Link Handler App",
                description: "Build an interactive notification test app registering push tokens, triggering local scheduled reminders, and handling deep links to navigate directly to specific app detail screens.",
                difficulty: "intermediate",
                skillSlugs: ["javascript"],
              },
            ],
            interviewTopics: [
              "App Lifecycle States: Active, Background, Inactive/Unattached, and listening to AppState changes to lock screens or pause audio",
              "Deep Linking: Configuring custom schemes (myapp://) and Universal Links (https://myapp.com) for direct in-app navigation",
            ],
          },
          {
            stepId: "mad-step-mobile-ux-accessibility-gestures",
            title: "Mobile UX Patterns and Accessibility",
            description: "Create accessible mobile UI: React Native Gesture Handler, Reanimated animations, screen reader accessibility props (accessible, accessibilityLabel, accessibilityHint, accessibilityRole), and haptic feedback.",
            order: 2,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["responsive-design"],
            resources: [
              {
                title: "React Native Accessibility Official Documentation",
                type: "documentation",
                url: "https://reactnative.dev/docs/accessibility",
              },
            ],
            projects: [
              {
                title: "Accessible Mobile Utility App with Custom Gesture Animations",
                description: "Create an accessible mobile utility application featuring swipeable list items, custom spring animations using Reanimated, haptic feedback on actions, and full VoiceOver screen reader audit compliance.",
                difficulty: "intermediate",
                skillSlugs: ["responsive-design"],
              },
            ],
            interviewTopics: [
              "Mobile Accessibility: Utilizing accessibilityLabel, accessibilityHint, and accessibilityRole for VoiceOver and TalkBack screen readers",
              "Haptics & Micro-Interactions: Enhancing mobile touch feedback using expo-haptics for actions like pull-to-refresh or toggle switches",
            ],
          },
        ],
      },
      {
        phaseId: "mad-phase-6-testing-debugging-performance",
        title: "Phase 6: Testing, Debugging & Performance",
        description: "Ensure app quality and speed: unit testing with Jest, UI component testing with React Native Testing Library (RNTL), debugging with Flipper/DevTools, crash reporting (Sentry), and performance profiling.",
        order: 5,
        steps: [
          {
            stepId: "mad-step-mobile-testing-jest-rntl",
            title: "Mobile Testing Fundamentals",
            description: "Test mobile apps: Unit testing utility functions, component testing with React Native Testing Library (RNTL), mocking native modules, and testing navigation transitions.",
            order: 0,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["unit-testing-frontend"],
            resources: [
              {
                title: "React Native Testing Library Official Documentation",
                type: "documentation",
                url: "https://callstack.github.io/react-native-testing-library/",
              },
            ],
            projects: [
              {
                title: "Tested Mobile Application Suite",
                description: "Author an extensive test suite for a mobile application including unit tests for API transformers, RNTL render tests for components, and form submission user event tests.",
                difficulty: "intermediate",
                skillSlugs: ["unit-testing-frontend"],
              },
            ],
            interviewTopics: [
              "Testing React Native Components: Using render, fireEvent, and screen queries in RNTL vs snapshot testing",
              "Mocking Native Modules in Jest: Setting up jest.mock for modules like AsyncStorage, Location, and SecureStore",
            ],
          },
          {
            stepId: "mad-step-mobile-debugging-crash-reporting",
            title: "Debugging Crashes, Network Issues, and State Problems",
            description: "Debug mobile issues: React Native DevMenu, Flipper integration, inspecting network requests, analyzing JavaScript stack traces, and remote crash monitoring using Sentry.",
            order: 1,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["unit-testing-frontend"],
            resources: [
              {
                title: "React Native Official Debugging Guide & Flipper Tools",
                type: "documentation",
                url: "https://reactnative.dev/docs/debugging",
              },
            ],
            projects: [
              {
                title: "Mobile Debugging & Crash Reporting Challenge Application",
                description: "Diagnose and fix intentional bugs in a broken mobile app: resolve memory leak crashes, fix broken navigation params, capture uncaught JS exceptions, and log custom breadcrumbs to Sentry.",
                difficulty: "intermediate",
                skillSlugs: ["unit-testing-frontend"],
              },
            ],
            interviewTopics: [
              "Debugging Native Crashes: Reading Android logcat logs and iOS Xcode crash logs vs JavaScript redscreen errors",
              "Sentry Crash Reporting: Capturing fatal exceptions, attaching breadcrumbs, and symbolicating JS minified stack traces with source maps",
            ],
          },
          {
            stepId: "mad-step-mobile-performance-memory-optimization",
            title: "Mobile Performance Optimization",
            description: "Optimize app performance: analyzing JS thread vs UI main thread frame drops (FPS monitor), optimizing image sizes (expo-image, WebP format), memoization (useMemo, useCallback, React.memo), and preventing memory leaks.",
            order: 2,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["web-performance"],
            resources: [
              {
                title: "React Native Performance Optimization Guide",
                type: "documentation",
                url: "https://reactnative.dev/docs/performance",
              },
            ],
            projects: [
              {
                title: "High-Performance Mobile List & Media Viewer Case Study",
                description: "Optimize a sluggish mobile media app: refactor long list rendering to 60 FPS using FlatList optimizations, replace standard Image with expo-image caching, and reduce JS bundle startup size.",
                difficulty: "intermediate",
                skillSlugs: ["web-performance"],
              },
            ],
            interviewTopics: [
              "JS Thread vs Native UI Thread: Identifying performance bottlenecks when heavy calculations block screen re-renders",
              "Image Optimization in Mobile: Caching strategies, progressive loading, and using expo-image for memory efficiency",
            ],
          },
        ],
      },
      {
        phaseId: "mad-phase-7-security-production-readiness",
        title: "Phase 7: Security & Production Readiness",
        description: "Hardening mobile applications: OWASP Mobile Top 10 security risks, SSL pinning, biometric authentication (FaceID/TouchID), environment secret management, and production app configurations.",
        order: 6,
        steps: [
          {
            stepId: "mad-step-owasp-mobile-security-fundamentals",
            title: "Mobile Application Security Fundamentals",
            description: "Study OWASP Mobile Top 10 vulnerabilities: improper credential storage, insecure communication, reverse engineering risks, code tampering, and insecure data leakage via screenshots/backups.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["backend-auth-security"],
            resources: [
              {
                title: "OWASP Mobile Application Security (MAS) Project & Verification Standard (MASVS)",
                type: "documentation",
                url: "https://owasp.org/www-project-mobile-app-security/",
              },
            ],
            projects: [
              {
                title: "Security-Hardened Mobile Client Audit Lab",
                description: "Audit a mobile app for OWASP MASVS compliance: prevent sensitive data caching in iOS/Android system backups, obscure sensitive screens on app backgrounding, and enforce secure storage.",
                difficulty: "intermediate",
                skillSlugs: ["backend-auth-security"],
              },
            ],
            interviewTopics: [
              "OWASP Mobile Top 10: Insecure Data Storage vs Insecure Communication hazards",
              "Preventing Screen Capture: Disabling screenshots and obscuring app previews in task switchers for sensitive screens",
            ],
          },
          {
            stepId: "mad-step-secure-mobile-api-biometrics",
            title: "Secure API Communication and Data Handling",
            description: "Secure data in transit and on device: SSL/TLS certificate pinning, biometric authentication integration (expo-local-authentication for FaceID / TouchID / BiometricPrompt), and encrypting local SQLite databases.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["backend-auth-security"],
            resources: [
              {
                title: "Expo LocalAuthentication API Guide for Biometrics",
                type: "documentation",
                url: "https://docs.expo.dev/versions/latest/sdk/local-authentication/",
              },
            ],
            projects: [
              {
                title: "Biometric Authenticated Secure Mobile Client",
                description: "Build a biometric-protected financial app requiring FaceID/Fingerprint authentication before unlocking encrypted local data and sending authenticated API requests.",
                difficulty: "intermediate",
                skillSlugs: ["backend-auth-security"],
              },
            ],
            interviewTopics: [
              "Biometric Authentication: Implementing FaceID/TouchID checks via expo-local-authentication with passcode fallback",
              "SSL Certificate Pinning: Purpose of pinning backend SSL public keys in mobile apps to mitigate Man-In-The-Middle (MITM) proxy attacks",
            ],
          },
          {
            stepId: "mad-step-production-app-config-secrets",
            title: "Production Configuration and Environment Management",
            description: "Manage app environments: app.json / app.config.js dynamic configuration, environment variables (.env via expo-constants), bundle IDs / package names, and app versioning (version, versionCode, buildNumber).",
            order: 2,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["git"],
            resources: [
              {
                title: "Expo Dynamic App Configuration (app.config.js) & Environment Variables",
                type: "documentation",
                url: "https://docs.expo.dev/workflow/configuration/",
              },
            ],
            projects: [
              {
                title: "Multi-Environment Production Configuration Project",
                description: "Configure an Expo project supporting distinct Development, Staging, and Production build profiles with unique bundle identifiers, app titles, API endpoints, and icon assets.",
                difficulty: "intermediate",
                skillSlugs: ["git"],
              },
            ],
            interviewTopics: [
              "Managing Environment Variables in Mobile Apps: Why client-side .env variables are exposed in compiled JS bundles and how to secure API keys",
              "App Identifier Conventions: iOS Bundle Identifier (com.company.app) and Android Package Name requirements",
            ],
          },
        ],
      },
      {
        phaseId: "mad-phase-8-release-portfolio-interview-readiness",
        title: "Phase 8: Release, Portfolio & Interview Preparation",
        description: "Build, sign, and release mobile applications: Expo Application Services (EAS Build / EAS Submit), Google Play Store & Apple App Store signing credentials, portfolio app capstone, and technical interview readiness.",
        order: 7,
        steps: [
          {
            stepId: "mad-step-android-ios-build-eas-release",
            title: "Android/iOS Build and Release Workflows",
            description: "Execute app store build and release workflows: EAS Build for Android AAB / iOS IPA generation, managing Android Keystore signing keys and iOS Provisioning Profiles / Certificates, Apple App Store Connect, and Google Play Console.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["git"],
            resources: [
              {
                title: "Expo Application Services (EAS) Build & Submit Official Documentation",
                type: "documentation",
                url: "https://docs.expo.dev/build/introduction/",
              },
            ],
            projects: [
              {
                title: "Android & iOS Automated EAS Build Pipeline Project",
                description: "Configure an automated EAS Build and Submit pipeline generating signed Android AAB binaries and iOS IPA packages configured for store distribution.",
                difficulty: "intermediate",
                skillSlugs: ["git"],
              },
            ],
            interviewTopics: [
              "iOS App Store Signing: Purpose of Development vs Distribution Certificates, App IDs, and Provisioning Profiles",
              "Android App Store Publishing: Google Play Android App Bundle (.aab) format vs legacy APK binaries and Google Play App Signing",
            ],
          },
          {
            stepId: "mad-step-mobile-capstone-project",
            title: "Portfolio-Grade Mobile Application",
            description: "Build and finalize the primary capstone project: a feature-complete cross-platform mobile application featuring multi-tab React Navigation, global state management, REST API integration, authenticated session handling with SecureStore, local SQLite database caching, camera hardware access, push notifications, VoiceOver accessibility compliance, Jest unit tests, and production EAS build configuration.",
            order: 1,
            estimatedHours: 25,
            difficulty: "intermediate",
            skillSlugs: [
              "react",
              "javascript",
              "state-management",
              "rest-api",
              "git",
            ],
            resources: [
              {
                title: "React Native Project Guidelines & Production Checklist",
                type: "documentation",
                url: "https://reactnative.dev/docs/guidelines",
              },
            ],
            projects: [
              {
                title: "Full Capstone: Production-Grade Cross-Platform Mobile Application",
                description: "Construct a complete, portfolio-ready mobile app combining React Navigation tabs, global state store, authenticated REST networking, offline SQLite persistence, native hardware camera/location features, push notification handling, Jest test suites, and EAS build configuration.",
                difficulty: "intermediate",
                skillSlugs: [
                  "react",
                  "javascript",
                  "state-management",
                  "rest-api",
                  "git",
                ],
              },
            ],
            interviewTopics: [
              "Walking an interviewer through an end-to-end mobile architecture: From component design and state management to offline caching and app store submission",
              "Strategies for maintaining cross-platform codebases while handling platform-specific edge cases cleanly using Platform.OS and Platform.select",
            ],
          },
          {
            stepId: "mad-step-mobile-interview-system-design-readiness",
            title: "Mobile Developer Interview Preparation",
            description: "Prepare for intermediate Mobile Developer interviews: solving mobile coding challenges, explaining React Native performance tuning, designing mobile system architectures live (e.g. designing an offline-first chat client or news feed), and behavioral mobile engineering interview scenarios.",
            order: 2,
            estimatedHours: 10,
            difficulty: "intermediate",
            skillSlugs: ["react", "javascript"],
            resources: [
              {
                title: "Tech Interview Handbook: Mobile System Design & Engineering Scenarios",
                type: "article",
                url: "https://github.com/yangshun/tech-interview-handbook",
              },
            ],
            projects: [
              {
                title: "Mobile System Design & Coding Interview Practice Suite",
                description: "Complete mock mobile engineering interviews solving live coding challenges, profiling sluggish component rendering, and drafting a mobile system design architecture for an offline video streaming app.",
                difficulty: "intermediate",
                skillSlugs: ["react", "javascript"],
              },
            ],
            interviewTopics: [
              "Mobile System Design: How to design an offline-capable photo sharing mobile application serving millions of users",
              "Explaining complex mobile rendering issues and network caching strategies to engineering leaders",
            ],
          },
        ],
      },
    ],
  },
};

module.exports = mobileAppDeveloperCareerData;

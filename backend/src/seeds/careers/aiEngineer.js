/**
 * Canonical Career Seed Data: AI Engineer (Phase C6.6)
 * Comprehensive, production-focused curriculum targeting AI Engineering, LLM Integration, Vector Search, RAG Systems, AI Agents, Guardrails, Evaluation, and FastAPI Microservices.
 */
const aiEngineerCareerData = {
  name: "AI Engineer",
  slug: "ai-engineer",
  category: "ai_ml",
  shortDescription: "Build, deploy, and scale production AI applications: LLM API integration, prompt engineering, structured outputs, text embeddings, vector databases, RAG pipelines, autonomous AI agents, LLM guardrails, evaluation suites, and FastAPI microservices.",
  description: "AI Engineers design, build, and deploy production application systems powered by Artificial Intelligence and Large Language Models. They integrate LLM APIs (OpenAI, Anthropic, Ollama), craft advanced prompt strategies, enforce structured Pydantic outputs, construct vector search indices (Chroma, Qdrant), build Retrieval-Augmented Generation (RAG) pipelines, orchestrate agentic workflows (LangGraph), implement safety guardrails, evaluate RAG metrics (Ragas), and serve containerized microservices using FastAPI and Docker.",
  difficulty: "advanced",
  requiredSkillSlugs: [
    "python",
    "rest-api",
    "deep-learning",
    "mlops",
    "docker",
    "linux-basics",
    "git",
    "typescript",
  ],
  optionalSkillSlugs: [
    "machine-learning",
    "data-modeling",
    "postgresql",
    "mongodb-nosql",
    "backend-auth-security",
  ],
  marketMetadata: {
    salaryRange: {
      min: 90000,
      max: 170000,
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
        phaseId: "aie-phase-1-foundations-python-api",
        title: "Phase 1: AI Engineering Foundations, Python & API Integration",
        description: "Master production Python engineering for AI: asynchronous I/O, RESTful API consumption, environment configuration, and collaborative Git workflows.",
        order: 0,
        steps: [
          {
            stepId: "aie-step-async-python",
            title: "Production Python for AI Applications & Async I/O",
            description: "Study Python asyncio concurrency, async/await patterns, non-blocking HTTP requests, type hinting, and modular project structures for AI microservices.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["python"],
            resources: [
              {
                title: "Official Python Documentation: Asyncio Concurrency",
                type: "documentation",
                url: "https://docs.python.org/3/library/asyncio.html",
              },
            ],
            projects: [
              {
                title: "Async Concurrent AI Request Processing Pipeline",
                description: "Build an asynchronous Python script processing multiple concurrent API requests using asyncio and httpx with rate limiting and retry logic.",
                difficulty: "intermediate",
                skillSlugs: ["python"],
              },
            ],
            interviewTopics: [
              "Python asyncio vs multi-threading vs multi-processing for I/O-bound AI API calls",
              "Handling rate limits and exponential backoff when calling external LLM APIs",
            ],
          },
          {
            stepId: "aie-step-llm-api-sdks",
            title: "RESTful API Integration & OpenAI/Anthropic SDKs",
            description: "Integrate commercial and open-source LLM APIs: API authentication, streaming responses (SSE), error handling, and parameter configuration (temperature, top_p).",
            order: 1,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["rest-api", "python"],
            resources: [
              {
                title: "OpenAI API Official Documentation",
                type: "documentation",
                url: "https://platform.openai.com/docs/introduction",
              },
            ],
            projects: [
              {
                title: "Multi-Provider Streaming LLM Client Library",
                description: "Develop a Python client wrapper supporting streaming chat completions across OpenAI and Anthropic SDKs with fallback handling.",
                difficulty: "intermediate",
                skillSlugs: ["rest-api", "python"],
              },
            ],
            interviewTopics: [
              "Server-Sent Events (SSE) vs WebSockets for streaming LLM response tokens",
              "Configuring sampling parameters: Temperature, Top-P, and Frequency Penalty",
            ],
          },
          {
            stepId: "aie-step-git-env-config",
            title: "Git Workflows & Environment Configuration for AI Services",
            description: "Manage AI project repositories with Git, configuring environment secrets (.env), pre-commit hooks, and dependency management (Poetry/UV).",
            order: 2,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["git"],
            resources: [
              {
                title: "Git Book: Advanced Branching and Workflow Patterns",
                type: "documentation",
                url: "https://git-scm.com/book/en/v2",
              },
            ],
            projects: [
              {
                title: "Secure AI Service Repository & Secret Manager Setup",
                description: "Configure a Git repository with strict environment secret isolation, pre-commit linting, and automated dependency lockfiles.",
                difficulty: "intermediate",
                skillSlugs: ["git"],
              },
            ],
            interviewTopics: [
              "Managing API keys safely in production deployment environments",
              "Pre-commit hooks for preventing secret leakage in open-source AI projects",
            ],
          },
        ],
      },
      {
        phaseId: "aie-phase-2-llm-prompting-structured",
        title: "Phase 2: LLM Fundamentals, Prompt Engineering & Structured Outputs",
        description: "Master Large Language Model mechanics, advanced prompt strategies, in-context learning, and guaranteed Pydantic structured JSON outputs.",
        order: 1,
        steps: [
          {
            stepId: "aie-step-llm-tokenization",
            title: "LLM Architecture Principles, Tokenization & Context Windows",
            description: "Understand transformer tokenization (BPE), context window limits, token estimation, cost calculation, and open vs proprietary model trade-offs.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["python", "deep-learning"],
            resources: [
              {
                title: "OpenAI Prompt Engineering Guide & Tokenization",
                type: "documentation",
                url: "https://platform.openai.com/docs/guides/prompt-engineering",
              },
            ],
            projects: [
              {
                title: "Token Counter & Dynamic Context Truncation Utility",
                description: "Write a Python utility using tiktoken to estimate token counts and truncate context windows dynamically before API submission.",
                difficulty: "intermediate",
                skillSlugs: ["python"],
              },
            ],
            interviewTopics: [
              "Byte-Pair Encoding (BPE) tokenization mechanics and its impact on cost/latency",
              "Strategies for managing context window overflow in multi-turn conversations",
            ],
          },
          {
            stepId: "aie-step-prompt-engineering",
            title: "Advanced Prompt Engineering & Few-Shot In-Context Learning",
            description: "Craft systematic prompts: system instructions, Chain-of-Thought (CoT) reasoning, Few-Shot learning examples, and system persona constraints.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["python"],
            resources: [
              {
                title: "Anthropic Claude Prompt Engineering Interactive Guide",
                type: "documentation",
                url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering",
              },
            ],
            projects: [
              {
                title: "Systematic Few-Shot Prompting Evaluation Engine",
                description: "Build a Python test harness benchmarking model accuracy across Zero-Shot, Few-Shot, and Chain-of-Thought prompt variations.",
                difficulty: "intermediate",
                skillSlugs: ["python"],
              },
            ],
            interviewTopics: [
              "Chain-of-Thought (CoT) prompting vs Zero-Shot prompting effectiveness",
              "Techniques for mitigating prompt injection attacks in user-facing applications",
            ],
          },
          {
            stepId: "aie-step-structured-outputs",
            title: "Guaranteeing Structured JSON Outputs (Pydantic, Instructor, Outlines)",
            description: "Enforce strict JSON schema responses using OpenAI Structured Outputs, Pydantic validation, Instructor, and constrained grammar parsing.",
            order: 2,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["python", "rest-api"],
            resources: [
              {
                title: "Pydantic Official Documentation: Data Validation",
                type: "documentation",
                url: "https://docs.pydantic.dev/",
              },
              {
                title: "Instructor Library Official Documentation: Structured Outputs",
                type: "documentation",
                url: "https://python.useinstructor.com/",
              },
            ],
            projects: [
              {
                title: "Automated Data Extraction Engine with Pydantic Validation",
                description: "Build a Python pipeline extracting complex structured JSON entities from unstructured text with strict Pydantic schema validation.",
                difficulty: "intermediate",
                skillSlugs: ["python", "rest-api"],
              },
            ],
            interviewTopics: [
              "JSON Mode vs Schema-Enforced Constrained Decoding (Grammar Parsing)",
              "Handling validation errors and automatic retries with Instructor in Python",
              "Trade-offs between dynamic schema generation and static Pydantic models for LLM outputs",
            ],
          },
        ],
      },
      {
        phaseId: "aie-phase-3-embeddings-vector-dbs",
        title: "Phase 3: Embeddings, Vector Databases & Semantic Search",
        description: "Understand text embeddings, vector space geometry, document chunking techniques, vector database indexing (Chroma, Qdrant), and hybrid search.",
        order: 2,
        steps: [
          {
            stepId: "aie-step-embeddings-vector-spaces",
            title: "Text Embeddings, Vector Spaces & Cosine Similarity Metrics",
            description: "Understand dense vector embeddings (OpenAI, Sentence-Transformers), vector dimensions, distance metrics (Cosine Similarity, Euclidean, Dot Product), and semantic similarity.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["python", "deep-learning"],
            resources: [
              {
                title: "Sentence-Transformers Official Documentation & Models",
                type: "documentation",
                url: "https://huggingface.co/docs/sentence-transformers/index",
              },
            ],
            projects: [
              {
                title: "Semantic Text Search & Embedding Evaluator",
                description: "Generate embeddings for document datasets using Sentence-Transformers and build a NumPy cosine similarity search engine.",
                difficulty: "intermediate",
                skillSlugs: ["python"],
              },
            ],
            interviewTopics: [
              "Cosine Similarity vs Dot Product vs Euclidean distance in vector search",
              "Embedding model selection: Dimensions, latency, and domain adaptability",
            ],
          },
          {
            stepId: "aie-step-chunking-vector-ingestion",
            title: "Document Chunking Strategies & Vector Database Ingestion (Chroma/Qdrant)",
            description: "Implement document chunking (Fixed-size, Recursive Character, Semantic chunking), metadata tagging, and indexing into vector databases (Chroma, Qdrant).",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["python", "data-modeling"],
            resources: [
              {
                title: "Chroma Vector Database Documentation",
                type: "documentation",
                url: "https://docs.trychroma.com/",
              },
              {
                title: "Qdrant Vector Search Engine Documentation",
                type: "documentation",
                url: "https://qdrant.tech/documentation/",
              },
            ],
            projects: [
              {
                title: "Automated Document Ingestion & Vector Indexing Service",
                description: "Build a Python service chunking PDF/Markdown files, computing embeddings, and storing vectors with metadata in Qdrant.",
                difficulty: "intermediate",
                skillSlugs: ["python", "data-modeling"],
              },
            ],
            interviewTopics: [
              "Fixed-size vs Recursive Character vs Semantic Document Chunking trade-offs",
              "HNSW (Hierarchical Navigable Small World) vector indexing mechanics",
            ],
          },
          {
            stepId: "aie-step-hybrid-search-reranking",
            title: "Semantic Search Optimization, Hybrid Search & Reranking (Cross-Encoders)",
            description: "Combine keyword search (BM25) with vector similarity (Hybrid Search), applying Cross-Encoder reranking models (Cohere, BGE-Reranker) for precision retrieval.",
            order: 2,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["python"],
            resources: [
              {
                title: "Qdrant Hybrid Search & Reranking Tutorials",
                type: "documentation",
                url: "https://qdrant.tech/documentation/concepts/hybrid-queries/",
              },
            ],
            projects: [
              {
                title: "Hybrid Search & Cross-Encoder Reranking Engine",
                description: "Construct a hybrid search pipeline combining BM25 keyword matching and vector search, reranking top-k results with a Cross-Encoder.",
                difficulty: "advanced",
                skillSlugs: ["python"],
              },
            ],
            interviewTopics: [
              "Bi-Encoder vs Cross-Encoder architectures for retrieval and reranking",
              "Reciprocal Rank Fusion (RRF) for combining vector and keyword search scores",
            ],
          },
        ],
      },
      {
        phaseId: "aie-phase-4-rag-systems",
        title: "Phase 4: Retrieval-Augmented Generation (RAG) Systems",
        description: "Construct end-to-end RAG systems: context injection, query transformation, parent document retrieval, and multimodal context processing.",
        order: 3,
        steps: [
          {
            stepId: "aie-step-core-rag-architecture",
            title: "Core RAG Pipeline Architecture & Context Injection",
            description: "Build foundational RAG pipelines: query embedding, top-k retrieval, context formatting, system prompt augmentation, and grounded LLM generation.",
            order: 0,
            estimatedHours: 25,
            difficulty: "intermediate",
            skillSlugs: ["python", "rest-api"],
            resources: [
              {
                title: "LangChain RAG Documentation & Conceptual Guide",
                type: "documentation",
                url: "https://python.langchain.com/docs/concepts/rag/",
              },
            ],
            projects: [
              {
                title: "Production Grounded Document Q&A RAG Service",
                description: "Build a Python RAG service ingesting user queries, retrieving relevant vector contexts, and generating citations grounded strictly in source documents.",
                difficulty: "intermediate",
                skillSlugs: ["python", "rest-api"],
              },
            ],
            interviewTopics: [
              "Core components of a Retrieval-Augmented Generation (RAG) architecture",
              "Mitigating context window pollution and hallucination through retrieval filtering",
            ],
          },
          {
            stepId: "aie-step-advanced-rag-patterns",
            title: "Advanced RAG: Query Transformation, Sub-Query Decomposition & Parent Document Retrieval",
            description: "Implement advanced RAG patterns: HyDE (Hypothetical Document Embeddings), query rewriting, sub-query decomposition, and Parent Document Retriever indexing.",
            order: 1,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["python"],
            resources: [
              {
                title: "LlamaIndex Documentation: Advanced Retrieval Patterns",
                type: "documentation",
                url: "https://docs.llamaindex.ai/en/stable/",
              },
            ],
            projects: [
              {
                title: "Advanced Multi-Strategy RAG Pipeline Engine",
                description: "Build an advanced RAG pipeline implementing HyDE query transformations and Parent Document retrieval for complex multi-page document queries.",
                difficulty: "advanced",
                skillSlugs: ["python"],
              },
            ],
            interviewTopics: [
              "Hypothetical Document Embeddings (HyDE) mechanism and when to use it",
              "Parent Document Retrieval: Searching small chunks while returning large context windows",
            ],
          },
          {
            stepId: "aie-step-multimodal-rag",
            title: "Multimodal RAG & Contextual Document Understanding",
            description: "Extend RAG to multimodal inputs: processing PDF images, tables (Unstructured/PyMuPDF), vision-language models (GPT-4o, Claude 3.5 Sonnet), and chart extraction.",
            order: 2,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["python", "deep-learning"],
            resources: [
              {
                title: "HuggingFace Multimodal Models Documentation",
                type: "documentation",
                url: "https://huggingface.co/docs/transformers/model_doc/vision_encoder_decoder",
              },
            ],
            projects: [
              {
                title: "Multimodal PDF Table & Diagram RAG Assistant",
                description: "Build a Python RAG pipeline extracting tables and diagrams from complex PDF reports using vision-language models and vector indexing.",
                difficulty: "advanced",
                skillSlugs: ["python", "deep-learning"],
              },
            ],
            interviewTopics: [
              "Strategies for parsing tabular data and embedded diagrams in RAG pipelines",
              "Multimodal embeddings vs multi-vector indexing for document images",
            ],
          },
        ],
      },
      {
        phaseId: "aie-phase-5-ai-agents-workflows",
        title: "Phase 5: AI Agents, Tool Calling & Workflow Architecture",
        description: "Develop autonomous AI agents: function/tool calling, ReAct reasoning loops, short/long-term memory management, and state machine workflows (LangGraph).",
        order: 4,
        steps: [
          {
            stepId: "aie-step-function-tool-calling",
            title: "LLM Function & Tool Calling Infrastructure",
            description: "Implement LLM tool calling: defining JSON schema tools, API parameter binding, executing external Python functions, and feeding results back to LLMs.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["python", "rest-api"],
            resources: [
              {
                title: "OpenAI Function Calling & Tool Guide",
                type: "documentation",
                url: "https://platform.openai.com/docs/guides/function-calling",
              },
            ],
            projects: [
              {
                title: "Multi-Tool Executing AI Assistant Microservice",
                description: "Build a Python service equipping an LLM with custom tools (weather API, database lookup, calculator) that automatically invokes functions based on user queries.",
                difficulty: "intermediate",
                skillSlugs: ["python", "rest-api"],
              },
            ],
            interviewTopics: [
              "LLM Function Calling execution flow and JSON schema tool definitions",
              "Handling tool execution errors and malformed arguments gracefully",
            ],
          },
          {
            stepId: "aie-step-autonomous-agentic-patterns",
            title: "Autonomous Agentic Architectures (ReAct, Planning & Memory Management)",
            description: "Build autonomous agents using ReAct (Reasoning + Acting) loops, task planning, plan decomposition, and memory management (conversation buffer, vector memory).",
            order: 1,
            estimatedHours: 25,
            difficulty: "advanced",
            skillSlugs: ["python"],
            resources: [
              {
                title: "ReAct: Synergizing Reasoning and Acting in Language Models (Paper)",
                type: "documentation",
                url: "https://arxiv.org/abs/2210.03629",
              },
            ],
            projects: [
              {
                title: "Autonomous ReAct Research Agent",
                description: "Develop an autonomous Python research agent that plans research steps, searches web sources via tools, summarizes findings, and stores memory in a vector index.",
                difficulty: "advanced",
                skillSlugs: ["python"],
              },
            ],
            interviewTopics: [
              "ReAct (Thought -> Action -> Observation) loop mechanics",
              "Managing short-term conversation context vs long-term persistent vector memory",
            ],
          },
          {
            stepId: "aie-step-state-machine-langgraph",
            title: "State Machine Agent Workflows (LangGraph) & Human-in-the-Loop Controls",
            description: "Construct complex multi-step agent workflows using state machines (LangGraph), conditional routing, cycle management, and Human-in-the-Loop (HITL) approval gates.",
            order: 2,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["python", "typescript"],
            resources: [
              {
                title: "LangGraph Framework Documentation & Tutorials",
                type: "documentation",
                url: "https://langchain-ai.github.io/langgraph/",
              },
            ],
            projects: [
              {
                title: "Stateful Multi-Agent Workflow Engine with Human Approval",
                description: "Build a LangGraph state machine workflow with multiple specialized agent nodes (coder, reviewer, tester) featuring human-in-the-loop approval before final deployment.",
                difficulty: "advanced",
                skillSlugs: ["python"],
              },
            ],
            interviewTopics: [
              "DAG vs State Machine graph architectures for multi-agent workflows",
              "Implementing Human-in-the-Loop (HITL) pause-and-resume mechanisms in agent graphs",
            ],
          },
        ],
      },
      {
        phaseId: "aie-phase-6-eval-guardrails-observability",
        title: "Phase 6: Evaluation, Guardrails & AI Observability",
        description: "Ensure AI application safety and reliability: input/output guardrails, automated RAG evaluation (Ragas), hallucination mitigation, and LLM tracing (LangSmith).",
        order: 5,
        steps: [
          {
            stepId: "aie-step-guardrails-safety",
            title: "LLM Guardrails, Input/Output Sanitization & PII Masking",
            description: "Implement AI safety guardrails: prompt injection prevention, PII masking, toxic content filtering, and output verification using Guardrails AI or NeMo Guardrails.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["python"],
            resources: [
              {
                title: "NVIDIA NeMo Guardrails Official Documentation",
                type: "documentation",
                url: "https://github.com/NVIDIA/NeMo-Guardrails",
              },
            ],
            projects: [
              {
                title: "Production AI Safety & PII Sanitization Gateway",
                description: "Build a Python API middleware inspecting user prompts for injection attacks and masking sensitive PII data before passing queries to LLMs.",
                difficulty: "intermediate",
                skillSlugs: ["python"],
              },
            ],
            interviewTopics: [
              "Prompt Injection defense strategies: Input sanitization, separate system channels, and guardrail models",
              "Masking Personally Identifiable Information (PII) before external API calls",
            ],
          },
          {
            stepId: "aie-step-rag-evaluation-ragas",
            title: "RAG & Agent Evaluation Frameworks (Ragas, TruLens, Faithfulness & Answer Relevance)",
            description: "Benchmark RAG systems using evaluation frameworks (Ragas, TruLens): measuring Context Precision, Context Recall, Faithfulness (Hallucination score), and Answer Relevance.",
            order: 1,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["python", "mlops"],
            resources: [
              {
                title: "Ragas Framework Official Documentation",
                type: "documentation",
                url: "https://docs.ragas.io/en/stable/",
              },
            ],
            projects: [
              {
                title: "Automated RAG Evaluation Suite & Benchmark Dashboard",
                description: "Construct an automated test suite evaluating RAG pipeline performance using Ragas metrics, generating faithfulness and retrieval precision benchmark reports.",
                difficulty: "advanced",
                skillSlugs: ["python", "mlops"],
              },
            ],
            interviewTopics: [
              "The RAG Triad: Faithfulness, Answer Relevance, and Context Relevance metrics",
              "LLM-as-a-Judge evaluation methodology, biases, and calibration strategies",
            ],
          },
          {
            stepId: "aie-step-llm-observability-tracing",
            title: "Production AI Observability & Tracing (LangSmith, Phoenix)",
            description: "Implement end-to-end tracing for AI applications: logging token usage, latency per component, chain traces, and debugging agent execution paths using LangSmith or OpenInference.",
            order: 2,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["python", "mlops"],
            resources: [
              {
                title: "LangSmith Documentation: Observability & Tracing",
                type: "documentation",
                url: "https://docs.smith.langchain.com/",
              },
            ],
            projects: [
              {
                title: "Production LLM Tracing & Token Cost Observability Setup",
                description: "Integrate OpenInference tracing into a multi-step RAG application, logging latency distributions and token costs to an observability dashboard.",
                difficulty: "intermediate",
                skillSlugs: ["python", "mlops"],
              },
            ],
            interviewTopics: [
              "Distributed tracing in multi-agent workflows and LLM chains",
              "Monitoring token consumption, request latency, and cost per query in production",
            ],
          },
        ],
      },
      {
        phaseId: "aie-phase-7-production-deployment-docker",
        title: "Phase 7: Production AI Microservices, Docker & Deployment",
        description: "Serve production AI applications: building async FastAPI microservices, containerizing with Docker, running local LLMs (Ollama/vLLM), and automating CI/CD deployments.",
        order: 6,
        steps: [
          {
            stepId: "aie-step-fastapi-ai-microservices",
            title: "Building Asynchronous High-Performance AI APIs with FastAPI",
            description: "Construct production REST APIs for AI services using FastAPI: streaming token endpoints (StreamingResponse), async task queues, Pydantic validation, and CORS handling.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["rest-api", "python"],
            resources: [
              {
                title: "FastAPI Official Documentation & Tutorial",
                type: "documentation",
                url: "https://fastapi.tiangolo.com/",
              },
            ],
            projects: [
              {
                title: "Asynchronous Streaming RAG Microservice API",
                description: "Build a production FastAPI service exposing a streaming RAG endpoint that streams generated answer tokens to clients via Server-Sent Events.",
                difficulty: "intermediate",
                skillSlugs: ["rest-api", "python"],
              },
            ],
            interviewTopics: [
              "FastAPI StreamingResponse implementation for token-by-token LLM output",
              "Managing async connections and worker threads for concurrent AI requests",
            ],
          },
          {
            stepId: "aie-step-docker-local-llms",
            title: "Containerizing AI Applications with Docker & Local LLM Serving (Ollama/vLLM)",
            description: "Containerize AI microservices using Docker multi-stage builds, managing vector database containers, and serving open-source local LLMs via Ollama or vLLM.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["docker", "linux-basics"],
            resources: [
              {
                title: "Docker Official Documentation: Multi-Stage Builds Guide",
                type: "documentation",
                url: "https://docs.docker.com/build/building/multi-stage/",
              },
            ],
            projects: [
              {
                title: "Docker Compose Stack for Local LLM & RAG Application",
                description: "Configure a Docker Compose stack orchestrating a FastAPI app, Qdrant vector database, and Ollama local LLM server.",
                difficulty: "intermediate",
                skillSlugs: ["docker", "linux-basics"],
              },
            ],
            interviewTopics: [
              "Optimizing Docker container size for Python AI applications",
              "Proprietary API vs Local LLM serving (Ollama/vLLM) trade-offs in enterprise applications",
            ],
          },
          {
            stepId: "aie-step-cicd-cloud-deployment",
            title: "CI/CD Pipelines & Cloud Production Deployment for AI Microservices",
            description: "Automate AI application deployments using GitHub Actions CI/CD: automated pytest testing, RAG benchmark validation, container building, and deployment.",
            order: 2,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["mlops", "git", "docker"],
            resources: [
              {
                title: "GitHub Actions Official Documentation & Workflows",
                type: "documentation",
                url: "https://docs.github.com/en/actions",
              },
            ],
            projects: [
              {
                title: "Automated CI/CD Pipeline for Containerized AI API",
                description: "Build a GitHub Actions CI/CD workflow running unit tests, evaluating RAG benchmarks, building a Docker container, and deploying to cloud infrastructure.",
                difficulty: "advanced",
                skillSlugs: ["mlops", "git", "docker"],
              },
            ],
            interviewTopics: [
              "Designing CI/CD pipelines with automated evaluation gates for LLM applications",
              "Blue-Green vs Canary deployment strategies for production AI microservices",
            ],
          },
        ],
      },
      {
        phaseId: "aie-phase-8-portfolio-capstone",
        title: "Phase 8: AI Engineering Portfolio Capstone & Interview Readiness",
        description: "Architect and execute an enterprise-grade autonomous AI assistant system, integrating RAG, tool calling, state machine agents, evaluation, guardrails, and cloud deployment.",
        order: 7,
        steps: [
          {
            stepId: "aie-step-system-architecture",
            title: "Enterprise Production AI System Architecture Design",
            description: "Architect complex enterprise AI applications: document ingestion pipelines, hybrid vector search, agent workflows, safety guardrails, FastAPI microservices, and observability.",
            order: 0,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["mlops", "docker", "python"],
            resources: [
              {
                title: "Google Cloud AI & Machine Learning Architecture Guide",
                type: "documentation",
                url: "https://cloud.google.com/architecture/ai-ml",
              },
            ],
            projects: [
              {
                title: "Enterprise Production AI System Architecture Blueprint",
                description: "Design a comprehensive system architecture diagram and technical design document for a multi-tenant enterprise RAG & Agent platform.",
                difficulty: "advanced",
                skillSlugs: ["mlops", "docker", "python"],
              },
            ],
            interviewTopics: [
              "AI System Design: Designing an enterprise knowledge search and action agent",
              "Trade-offs between latency, accuracy, and cost in LLM application design",
            ],
          },
          {
            stepId: "aie-step-capstone-project",
            title: "Full End-to-End Autonomous Enterprise AI Agent Capstone",
            description: "Execute the primary capstone project: build an autonomous enterprise knowledge assistant featuring semantic chunking, Qdrant hybrid vector search, LangGraph state machine agents, tool calling, NeMo safety guardrails, Ragas evaluation suites, FastAPI streaming endpoints, Docker containerization, and LangSmith tracing.",
            order: 1,
            estimatedHours: 30,
            difficulty: "advanced",
            skillSlugs: [
              "python",
              "rest-api",
              "deep-learning",
              "mlops",
              "docker",
              "linux-basics",
              "git",
              "typescript",
            ],
            resources: [
              {
                title: "DeepLearning.AI: Building Systems with ChatGPT",
                type: "course",
                url: "https://www.deeplearning.ai/short-courses/",
              },
            ],
            projects: [
              {
                title: "Full Capstone: Production Enterprise Intelligent Knowledge Assistant & Autonomous AI Agent System",
                description: "Build and deploy an enterprise-grade AI system: ingest documents, compute embeddings, index into Qdrant, construct hybrid RAG pipelines, orchestrate LangGraph agent workflows, enforce safety guardrails, evaluate performance with Ragas, serve streaming FastAPI endpoints, package in Docker, and trace runs with LangSmith.",
                difficulty: "advanced",
                skillSlugs: ["python", "rest-api", "deep-learning", "mlops", "docker", "git"],
              },
            ],
            interviewTopics: [
              "Walking through an end-to-end production AI system architecture in technical interviews",
              "Explaining trade-offs between RAG, Fine-Tuning, and Agentic reasoning for domain applications",
            ],
          },
          {
            stepId: "aie-step-interview-readiness",
            title: "AI Engineering System Design & Technical Interview Readiness",
            description: "Prepare for AI Engineer technical interviews: LLM system design case studies, live Python coding, prompt optimization, RAG troubleshooting, and agentic reasoning questions.",
            order: 2,
            estimatedHours: 15,
            difficulty: "advanced",
            skillSlugs: ["python", "rest-api", "mlops"],
            resources: [
              {
                title: "LeetCode Algorithms & API Coding Exercises",
                type: "article",
                url: "https://leetcode.com/",
              },
            ],
            projects: [
              {
                title: "AI Engineering System Design Mock Interview Suite",
                description: "Complete mock technical interviews solving AI system design cases (e.g. designing an automated customer support agent) and live Python coding challenges.",
                difficulty: "advanced",
                skillSlugs: ["python", "rest-api", "mlops"],
              },
            ],
            interviewTopics: [
              "Live coding: Implementing custom vector similarity calculations and RAG text splitters",
              "AI System Design: Designing a multi-tenant enterprise search assistant",
              "Behavioral & STAR method interviews for AI Engineers",
            ],
          },
        ],
      },
    ],
  },
};

module.exports = aiEngineerCareerData;

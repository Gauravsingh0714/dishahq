/**
 * Canonical Career Seed Data: Machine Learning Engineer (Phase C6.5 Corrected)
 * Comprehensive, production-focused curriculum targeting ML Engineering, Reproducible Pipelines, Model Packaging, FastAPI Serving, Docker, MLOps, CI/CD, and Model Optimization.
 */
const machineLearningEngineerCareerData = {
  name: "Machine Learning Engineer",
  slug: "machine-learning-engineer",
  category: "ai_ml",
  shortDescription: "Build, deploy, scale, and monitor production machine learning systems: scalable training pipelines, PyTorch neural networks, FastAPI microservices, Docker containerization, MLflow tracking, automated CI/CD MLOps quality gates, and ONNX model quantization.",
  description: "Machine Learning Engineers bridge the gap between machine learning research and production software engineering. They design reproducible training pipelines, develop scikit-learn and PyTorch models, package high-throughput FastAPI microservices, containerize applications with Docker, construct automated MLOps pipelines with MLflow, establish CI/CD quality gates, implement Evidently AI drift monitoring, and optimize production inference speed using ONNX and quantization.",
  difficulty: "advanced",
  requiredSkillSlugs: [
    "python",
    "machine-learning",
    "deep-learning",
    "mlops",
    "docker",
    "linux-basics",
    "git",
    "rest-api",
  ],
  optionalSkillSlugs: [
    "pandas",
    "sql-relational-db",
    "postgresql",
    "data-modeling",
    "unit-testing-backend",
  ],
  marketMetadata: {
    salaryRange: {
      min: 95000,
      max: 175000,
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
        phaseId: "mle-phase-1-python-engineering",
        title: "Phase 1: Machine Learning & Python Engineering Foundations",
        description: "Master production-grade Python engineering: object-oriented design patterns, Pydantic data validation, Linux shell automation, and collaborative Git workflows for ML codebases.",
        order: 0,
        steps: [
          {
            stepId: "mle-step-oop-python",
            title: "Object-Oriented Python, Design Patterns & Module Architecture for ML Systems",
            description: "Study OOP principles, factory/strategy design patterns, type hinting, Pydantic data validation schemas, abstract base classes, and modular Python package design for ML codebases.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["python"],
            resources: [
              {
                title: "Official Python Documentation: Classes & Modules",
                type: "documentation",
                url: "https://docs.python.org/3/tutorial/classes.html",
              },
              {
                title: "Pydantic Official Documentation: Data Validation",
                type: "documentation",
                url: "https://docs.pydantic.dev/",
              },
            ],
            projects: [
              {
                title: "Modular Machine Learning Model Pipeline Package",
                description: "Build an object-oriented Python package with Abstract Base Classes for dataset loaders, preprocessing transformations, and model trainers.",
                difficulty: "intermediate",
                skillSlugs: ["python"],
              },
            ],
            interviewTopics: [
              "Python Abstract Base Classes (ABC) and interface enforcement in ML packages",
              "Pydantic data validation vs dataclasses for config parsing",
              "Design Patterns in ML: Strategy Pattern for model swapping",
            ],
          },
          {
            stepId: "mle-step-linux-automation",
            title: "Linux CLI & Shell Script Automation for Data Workflows",
            description: "Master Linux CLI tools, Bash scripting, process management (cron, systemd), environment variable management, and automated background execution of training tasks.",
            order: 1,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["linux-basics"],
            resources: [
              {
                title: "Linux Command Line & Shell Scripting Guide",
                type: "documentation",
                url: "https://www.gnu.org/software/bash/manual/",
              },
            ],
            projects: [
              {
                title: "Automated Linux Training Pipeline Orchestration Script",
                description: "Write a production Bash script automating dataset downloading, environment setup, GPU memory check, python training execution, and log archiving.",
                difficulty: "intermediate",
                skillSlugs: ["linux-basics"],
              },
            ],
            interviewTopics: [
              "Managing background ML jobs with nohup, tmux, and systemd",
              "Environment variable security and config loading in production Linux servers",
            ],
          },
          {
            stepId: "mle-step-git-workflows",
            title: "Git Workflows, Collaborative Code Quality & Pre-Commit Hooks",
            description: "Practice feature branching, Git rebase vs merge, pull request reviews, pre-commit hooks (black, flake8, mypy), and release tagging for machine learning repositories.",
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
                title: "Production ML Repository Setup with Pre-Commit Code Quality Hooks",
                description: "Configure a Git repository with pre-commit hooks automatically enforcing code formatting (Black), linting (Flake8), and type-checking (Mypy).",
                difficulty: "intermediate",
                skillSlugs: ["git"],
              },
            ],
            interviewTopics: [
              "Git rebase vs git merge strategies for collaborative ML repositories",
              "Configuring pre-commit hooks to enforce code quality before commits",
            ],
          },
        ],
      },
      {
        phaseId: "mle-phase-2-classical-ml-systems",
        title: "Phase 2: Production Supervised & Unsupervised ML Systems",
        description: "Develop, evaluate, tune, and serialize supervised, unsupervised, and gradient boosted ensemble machine learning models using scikit-learn and XGBoost.",
        order: 1,
        steps: [
          {
            stepId: "mle-step-supervised-models",
            title: "Reproducible Supervised Classification & Regression Training Pipelines",
            description: "Implement scikit-learn Linear/Logistic Regression, Support Vector Machines, and Decision Trees, tuning hyperparameters with cross-validation and regularizers.",
            order: 0,
            estimatedHours: 25,
            difficulty: "intermediate",
            skillSlugs: ["machine-learning", "python"],
            resources: [
              {
                title: "Scikit-Learn Official User Guide: Supervised Learning",
                type: "documentation",
                url: "https://scikit-learn.org/stable/supervised_learning.html",
              },
            ],
            projects: [
              {
                title: "Reproducible Customer Churn Training Pipeline",
                description: "Build an end-to-end Python script training and evaluating Logistic Regression and Decision Tree models with cross-validation and model artifact serialization.",
                difficulty: "intermediate",
                skillSlugs: ["machine-learning", "python"],
              },
            ],
            interviewTopics: [
              "Supervised algorithm selection: Logistic Regression vs Decision Trees vs SVMs",
              "Preventing overfitting through L1 (Lasso) and L2 (Ridge) penalty tuning",
            ],
          },
          {
            stepId: "mle-step-unsupervised-clustering",
            title: "Unsupervised Learning, Clustering Systems & Dimensionality Reduction",
            description: "Apply K-Means clustering, Hierarchical clustering, DBSCAN, and Principal Component Analysis (PCA) for customer segmentation and feature reduction.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["machine-learning", "python"],
            resources: [
              {
                title: "Scikit-Learn Official User Guide: Unsupervised Learning",
                type: "documentation",
                url: "https://scikit-learn.org/stable/modules/clustering.html",
              },
            ],
            projects: [
              {
                title: "PCA Dimensionality Reduction & K-Means Pipeline",
                description: "Implement a PCA dimensionality reduction pipeline combined with K-Means clustering to process high-dimensional behavioral features.",
                difficulty: "intermediate",
                skillSlugs: ["machine-learning", "python"],
              },
            ],
            interviewTopics: [
              "Evaluating clustering quality: Silhouette Score vs Inertia (Elbow Method)",
              "PCA explained variance ratio and selecting the optimal number of components",
            ],
          },
          {
            stepId: "mle-step-gradient-boosting-xgboost",
            title: "High-Performance Gradient Boosted Decision Trees (XGBoost/LightGBM)",
            description: "Master ensemble algorithms: Random Forests, Gradient Boosting, XGBoost, LightGBM, custom objective functions, and GPU-accelerated decision trees.",
            order: 2,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["machine-learning", "python"],
            resources: [
              {
                title: "XGBoost Official Documentation & Python API",
                type: "documentation",
                url: "https://xgboost.readthedocs.io/",
              },
              {
                title: "LightGBM Official Documentation & Parameters",
                type: "documentation",
                url: "https://lightgbm.readthedocs.io/",
              },
            ],
            projects: [
              {
                title: "High-Throughput XGBoost Risk Assessment Model",
                description: "Train an XGBoost classifier with early stopping, hyperparameter tuning, and feature importance inspection on large tabular datasets.",
                difficulty: "advanced",
                skillSlugs: ["machine-learning", "python"],
              },
            ],
            interviewTopics: [
              "Random Forest (Bagging) vs XGBoost (Gradient Boosting) algorithmic differences",
              "XGBoost hyperparameters: max_depth, learning_rate (eta), subsample, and colsample_bytree",
            ],
          },
        ],
      },
      {
        phaseId: "mle-phase-3-data-pipelines-features",
        title: "Phase 3: Data Engineering, SQL Analytics & Feature Store Pipelines",
        description: "Build robust tabular data pipelines, query relational database warehouses efficiently, and construct batch feature transformation pipelines.",
        order: 2,
        steps: [
          {
            stepId: "mle-step-tabular-data-pipelines",
            title: "High-Throughput Tabular Data Preprocessing & Parquet File Ingestion",
            description: "Build high-throughput Pandas and NumPy vectorized data pipelines, memory-efficient data chunking, Parquet file format I/O, and automated data validation.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["pandas", "python"],
            resources: [
              {
                title: "Pandas User Guide: High-Performance Data Ingestion & Parquet",
                type: "documentation",
                url: "https://pandas.pydata.org/docs/user_guide/enhancingperf.html",
              },
            ],
            projects: [
              {
                title: "High-Throughput Parquet Data Processing Engine",
                description: "Process multi-gigabyte tabular datasets using Pandas chunking and Parquet compression for memory-efficient feature processing.",
                difficulty: "intermediate",
                skillSlugs: ["pandas", "python"],
              },
            ],
            interviewTopics: [
              "Parquet vs CSV file format: Columnar storage benefits for ML data pipelines",
              "Memory optimization in Pandas using categorical dtypes and chunking",
            ],
          },
          {
            stepId: "mle-step-sql-etl-queries",
            title: "SQL Analytics & Relational Data Extraction for Training Sets",
            description: "Query relational data warehouses (PostgreSQL) using advanced SQL window functions, indexing, subqueries, and Python database connectivity (SQLAlchemy/psycopg2).",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["sql-relational-db", "postgresql"],
            resources: [
              {
                title: "PostgreSQL Official Documentation: Performance & Indexing",
                type: "documentation",
                url: "https://www.postgresql.org/docs/current/performance-tips.html",
              },
            ],
            projects: [
              {
                title: "Automated SQL ETL Training Data Extraction Pipeline",
                description: "Build a Python SQLAlchemy pipeline executing complex analytical SQL queries against PostgreSQL to generate ML model training sets.",
                difficulty: "intermediate",
                skillSlugs: ["sql-relational-db", "postgresql"],
              },
            ],
            interviewTopics: [
              "Database Indexing strategies for fast query execution in ML data extraction",
              "SQL Window Functions for computing rolling behavioral features",
            ],
          },
          {
            stepId: "mle-step-feature-engineering-store",
            title: "Feature Engineering Architecture & Batch Feature Stores",
            description: "Design reusable feature engineering transformations (one-hot, scaling, embeddings), batch transformation pipelines, and understand Feature Store concepts (Feast).",
            order: 2,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["python", "pandas"],
            resources: [
              {
                title: "Feast Feature Store Documentation & Architecture",
                type: "documentation",
                url: "https://docs.feast.dev/",
              },
            ],
            projects: [
              {
                title: "Feature Store Style Data Transformation Pipeline",
                description: "Build a scikit-learn ColumnTransformer pipeline for consistent offline training and online prediction feature transformation.",
                difficulty: "advanced",
                skillSlugs: ["python", "pandas"],
              },
            ],
            interviewTopics: [
              "What is a Feature Store (Feast) and how does it prevent train-serve skew?",
              "Designing reproducible offline-to-online feature transformation pipelines",
            ],
          },
        ],
      },
      {
        phaseId: "mle-phase-4-deep-learning-systems",
        title: "Phase 4: Deep Learning Systems with PyTorch",
        description: "Construct, train, and optimize deep neural networks using PyTorch: Multi-Layer Perceptrons, Convolutional Neural Networks (CNNs), and Transformer fine-tuning.",
        order: 3,
        steps: [
          {
            stepId: "mle-step-pytorch-foundations",
            title: "PyTorch Neural Network Architecture, Custom Layers & Autograd Engine",
            description: "Master PyTorch core API: Tensors, autograd engine, nn.Module, custom Dataset/DataLoader iterators, loss functions, AdamW optimizers, and GPU CUDA acceleration.",
            order: 0,
            estimatedHours: 25,
            difficulty: "advanced",
            skillSlugs: ["deep-learning", "python"],
            resources: [
              {
                title: "PyTorch Official Documentation & Tutorials",
                type: "documentation",
                url: "https://pytorch.org/docs/stable/index.html",
              },
            ],
            projects: [
              {
                title: "PyTorch Custom Neural Network Training Loop",
                description: "Write a clean PyTorch training loop from scratch with custom Dataset/DataLoader classes, validation loops, learning rate schedulers, and checkpoint saving.",
                difficulty: "advanced",
                skillSlugs: ["deep-learning", "python"],
              },
            ],
            interviewTopics: [
              "PyTorch Autograd engine and backward pass gradient calculation",
              "Writing custom PyTorch Dataset and DataLoader classes with multi-process workers",
            ],
          },
          {
            stepId: "mle-step-cnn-computer-vision",
            title: "Computer Vision Architectures (CNNs, ResNets) & GPU Execution",
            description: "Study 2D Convolutions, MaxPool layers, ResNet architectures, Transfer Learning, Mixed Precision Training (torch.cuda.amp), and CUDA GPU memory management.",
            order: 1,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["deep-learning", "python"],
            resources: [
              {
                title: "PyTorch Vision (Torchvision) Official Models Guide",
                type: "documentation",
                url: "https://pytorch.org/vision/stable/models.html",
              },
            ],
            projects: [
              {
                title: "Transfer Learning Image Classifier with Mixed Precision",
                description: "Fine-tune a torchvision pre-trained ResNet model using automatic mixed precision (AMP) for fast GPU training.",
                difficulty: "advanced",
                skillSlugs: ["deep-learning", "python"],
              },
            ],
            interviewTopics: [
              "Transfer Learning strategies: Freezing backbone layers vs full fine-tuning",
              "Automatic Mixed Precision (AMP) training benefits for FP16 execution",
            ],
          },
          {
            stepId: "mle-step-transformers-seq",
            title: "Sequential Modeling (LSTMs) & Attention / Transformer Fine-Tuning",
            description: "Implement Recurrent Neural Networks (LSTMs), Self-Attention mechanisms, and fine-tuning Transformer models using PyTorch and HuggingFace Transformers.",
            order: 2,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["deep-learning", "python"],
            resources: [
              {
                title: "HuggingFace Transformers Official Documentation",
                type: "documentation",
                url: "https://huggingface.co/docs/transformers/index",
              },
            ],
            projects: [
              {
                title: "HuggingFace Transformer Sequence Classification Pipeline",
                description: "Fine-tune a HuggingFace Transformer model for text sequence classification using PyTorch and save model weights for deployment.",
                difficulty: "advanced",
                skillSlugs: ["deep-learning", "python"],
              },
            ],
            interviewTopics: [
              "Self-Attention mechanism: Query, Key, Value (Q, K, V) vector dot-product attention",
              "HuggingFace Trainer API vs custom PyTorch training loops for Transformers",
            ],
          },
        ],
      },
      {
        phaseId: "mle-phase-5-serving-microservices",
        title: "Phase 5: High-Concurrency Model Serving & Containerized APIs",
        description: "Build, package, and containerize REST model serving microservices using FastAPI, Pydantic validation, and Docker multi-stage builds.",
        order: 4,
        steps: [
          {
            stepId: "mle-step-fastapi-serving",
            title: "Production REST API Model Serving with FastAPI & Pydantic Validation",
            description: "Construct production REST APIs with FastAPI: Pydantic request validation, async endpoint handlers, model loading/caching, and health check endpoints.",
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
                title: "Containerized Real-Time Fraud Detection API",
                description: "Build a production FastAPI REST microservice serving an ONNX fraud detection model with Pydantic request validation and async handling.",
                difficulty: "intermediate",
                skillSlugs: ["rest-api", "python"],
              },
            ],
            interviewTopics: [
              "FastAPI async def vs def handlers for CPU-bound ML model inference",
              "Pydantic input validation and structured JSON error responses in serving APIs",
            ],
          },
          {
            stepId: "mle-step-docker-containerization",
            title: "Containerizing Machine Learning Microservices with Docker",
            description: "Package ML applications with Docker: Dockerfiles, multi-stage builds for small image sizes, .dockerignore, environment variables, and container security.",
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
                title: "Lightweight Multi-Stage Docker Container for FastAPI ML Serving",
                description: "Create an optimized multi-stage Dockerfile packaging a Python FastAPI model server into an ultra-slim container image (<200MB).",
                difficulty: "intermediate",
                skillSlugs: ["docker", "linux-basics"],
              },
            ],
            interviewTopics: [
              "Multi-stage Docker builds to reduce container image size for ML APIs",
              "Docker Compose orchestration for multi-container ML serving architectures",
            ],
          },
          {
            stepId: "mle-step-container-orchestration",
            title: "Multi-Container Microservice Orchestration with Docker Compose",
            description: "Manage multi-container applications with Docker Compose, understanding environment isolation, port mapping, and Redis prediction caching.",
            order: 2,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["docker", "rest-api"],
            resources: [
              {
                title: "Docker Compose Official Manual",
                type: "documentation",
                url: "https://docs.docker.com/compose/",
              },
            ],
            projects: [
              {
                title: "Multi-Container ML Serving Architecture with Docker Compose",
                description: "Deploy a Docker Compose environment running a FastAPI model server, Redis prediction cache, and Nginx reverse proxy.",
                difficulty: "advanced",
                skillSlugs: ["docker", "rest-api"],
              },
            ],
            interviewTopics: [
              "Microservices architecture: Decoupling frontend, feature store, and model serving APIs",
              "Using Redis for caching prediction results to reduce model load",
            ],
          },
        ],
      },
      {
        phaseId: "mle-phase-6-mlops-cicd-monitoring",
        title: "Phase 6: MLOps, Experiment Tracking & Automated CI/CD Pipelines",
        description: "Implement automated MLOps infrastructure: MLflow experiment tracking & model registry, automated GitHub Actions CI/CD quality gates, and Evidently AI drift monitoring.",
        order: 5,
        steps: [
          {
            stepId: "mle-step-mlflow-tracking",
            title: "Experiment Tracking & Model Registry Lifecycle Management with MLflow",
            description: "Track ML experiments using MLflow: logging parameters, metrics, artifacts, autologging, Model Registry lifecycle stages (Staging, Production, Archived).",
            order: 0,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["mlops", "python"],
            resources: [
              {
                title: "MLflow Official Documentation & Tracking Guide",
                type: "documentation",
                url: "https://mlflow.org/docs/latest/index.html",
              },
            ],
            projects: [
              {
                title: "ML Experiment Tracking and Model Registry System",
                description: "Set up an MLflow tracking server in Python logging experiment runs, metrics, and promoting top-performing models to the MLflow Model Registry.",
                difficulty: "advanced",
                skillSlugs: ["mlops", "python"],
              },
            ],
            interviewTopics: [
              "MLflow Tracking vs Model Registry: Logging runs vs managing model lifecycle stages",
              "Model Versioning and artifact immutability in production MLOps",
            ],
          },
          {
            stepId: "mle-step-cicd-github-actions",
            title: "Automated CI/CD Pipelines for ML with Model Testing & Quality Gates",
            description: "Automate ML deployment pipelines using GitHub Actions: running automated unit tests, linting, model accuracy quality gates, and container publishing.",
            order: 1,
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
                title: "End-to-End ML Deployment with CI/CD",
                description: "Build a GitHub Actions workflow that runs pytest unit tests, checks model accuracy thresholds, builds a Docker container, and pushes to a container registry.",
                difficulty: "advanced",
                skillSlugs: ["mlops", "git", "docker"],
              },
            ],
            interviewTopics: [
              "Designing CI/CD quality gates for ML: Automated performance regression tests",
              "Continuous Deployment vs Continuous Training (CT) in MLOps pipelines",
            ],
          },
          {
            stepId: "mle-step-monitoring-drift-detection",
            title: "Production Model Observability & Data/Concept Drift Monitoring",
            description: "Monitor live ML models in production: tracking prediction metrics, detecting Data Drift & Concept Drift using Evidently AI, and setting up automated alerts.",
            order: 2,
            estimatedHours: 25,
            difficulty: "advanced",
            skillSlugs: ["mlops", "python"],
            resources: [
              {
                title: "Evidently AI Documentation: Data Drift & ML Monitoring",
                type: "documentation",
                url: "https://docs.evidentlyai.com/",
              },
            ],
            projects: [
              {
                title: "Production Model Monitoring Pipeline",
                description: "Build a Python monitoring pipeline using Evidently AI comparing live inference logs against baseline training distributions to detect Data Drift.",
                difficulty: "advanced",
                skillSlugs: ["mlops", "python"],
              },
            ],
            interviewTopics: [
              "Data Drift vs Concept Drift: Definitions, detection methods, and retraining triggers",
              "Statistical drift metrics: Kolmogorov-Smirnov test and Population Stability Index (PSI)",
            ],
          },
        ],
      },
      {
        phaseId: "mle-phase-7-model-optimization",
        title: "Phase 7: Model Optimization, Quantization & Performance Tuning",
        description: "Optimize trained models for low-latency production inference: INT8/FP16 quantization, pruning, ONNX runtime conversion, and p95/p99 latency benchmarking.",
        order: 6,
        steps: [
          {
            stepId: "mle-step-quantization-pruning",
            title: "Model Compression: Post-Training Quantization (INT8) & Pruning",
            description: "Learn model compression techniques: Post-Training Quantization (PTQ), Quantization-Aware Training (QAT), weight pruning, and knowledge distillation.",
            order: 0,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["machine-learning", "deep-learning"],
            resources: [
              {
                title: "PyTorch Quantization Documentation & User Guide",
                type: "documentation",
                url: "https://pytorch.org/docs/stable/quantization.html",
              },
            ],
            projects: [
              {
                title: "PyTorch Neural Network INT8 Post-Training Quantization",
                description: "Apply INT8 post-training quantization to a PyTorch neural network, measuring 3x latency speedup and model memory reduction.",
                difficulty: "advanced",
                skillSlugs: ["deep-learning", "python"],
              },
            ],
            interviewTopics: [
              "Post-Training Quantization (PTQ) vs Quantization-Aware Training (QAT)",
              "Knowledge Distillation: Teacher-Student model training dynamics",
            ],
          },
          {
            stepId: "mle-step-onnx-conversion",
            title: "ONNX Runtime Conversion & Accelerated Inference Execution",
            description: "Export scikit-learn, XGBoost, and PyTorch models to Open Neural Network Exchange (ONNX) format, running inference using ONNX Runtime.",
            order: 1,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["machine-learning", "deep-learning"],
            resources: [
              {
                title: "ONNX Runtime Official Documentation & Python API",
                type: "documentation",
                url: "https://onnxruntime.ai/docs/",
              },
            ],
            projects: [
              {
                title: "ONNX Model Export & High-Performance Inference Engine",
                description: "Export an XGBoost model and PyTorch neural net to ONNX format and run accelerated C++/Python inference using ONNX Runtime.",
                difficulty: "advanced",
                skillSlugs: ["machine-learning", "deep-learning"],
              },
            ],
            interviewTopics: [
              "Benefits of ONNX format for cross-platform model execution",
              "ONNX Runtime execution providers (CPU, CUDA, TensorRT)",
            ],
          },
          {
            stepId: "mle-step-benchmarking-throughput",
            title: "Inference Latency (p95/p99) Benchmarking & Hardware Optimization",
            description: "Benchmark ML model latency (p50, p95, p99), throughput (requests/sec), memory footprint, and hardware utilization constraints.",
            order: 2,
            estimatedHours: 15,
            difficulty: "advanced",
            skillSlugs: ["python"],
            resources: [
              {
                title: "PyTorch Benchmark Utility Documentation",
                type: "documentation",
                url: "https://pytorch.org/docs/stable/benchmark_utils.html",
              },
            ],
            projects: [
              {
                title: "Automated ML Inference Latency Benchmark Suite",
                description: "Build a Python benchmarking script measuring p95/p99 latency and memory usage across PyTorch, ONNX, and scikit-learn models.",
                difficulty: "advanced",
                skillSlugs: ["python"],
              },
            ],
            interviewTopics: [
              "Measuring p50, p95, p99 latency vs average latency in production serving",
              "Optimizing memory allocation and batch sizes for high-throughput inference",
            ],
          },
        ],
      },
      {
        phaseId: "mle-phase-8-portfolio-capstone",
        title: "Phase 8: Production ML Engineering Portfolio Capstone & Interview Readiness",
        description: "Integrate all ML engineering competencies into a complete, enterprise-grade automated machine learning production system and prepare for technical interviews.",
        order: 7,
        steps: [
          {
            stepId: "mle-step-system-architecture",
            title: "Production Multi-Service ML Pipeline Architecture Design",
            description: "Design multi-service production ML systems: data ingestion, feature store transformation, model training, MLflow registry, FastAPI serving, and Docker Compose deployment.",
            order: 0,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["mlops", "docker", "python"],
            resources: [
              {
                title: "Google Cloud MLOps Architecture & Best Practices Guide",
                type: "documentation",
                url: "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-in-machine-learning",
              },
            ],
            projects: [
              {
                title: "Multi-Service Production ML Architecture Blueprint",
                description: "Design an end-to-end multi-service ML system blueprint connecting data ingestion, feature transformations, model registry, and FastAPI microservice.",
                difficulty: "advanced",
                skillSlugs: ["mlops", "docker", "python"],
              },
            ],
            interviewTopics: [
              "ML System Design: Designing a scalable real-time recommendation engine",
              "Trade-offs between batch inference vs real-time REST API prediction",
            ],
          },
          {
            stepId: "mle-step-capstone-project",
            title: "End-to-End Automated Production Machine Learning Capstone",
            description: "Execute the primary capstone project: build an automated production ML pipeline with data cleaning, feature stores, XGBoost/PyTorch training, MLflow tracking, ONNX optimization, FastAPI microservice, Docker containerization, GitHub Actions CI/CD, and Evidently AI drift monitoring.",
            order: 1,
            estimatedHours: 30,
            difficulty: "advanced",
            skillSlugs: [
              "python",
              "machine-learning",
              "deep-learning",
              "mlops",
              "docker",
              "linux-basics",
              "git",
              "rest-api",
            ],
            resources: [
              {
                title: "Kaggle Competitions & Production ML System Examples",
                type: "documentation",
                url: "https://www.kaggle.com/competitions",
              },
            ],
            projects: [
              {
                title: "Full Capstone: Automated Enterprise Machine Learning System with MLflow, ONNX, FastAPI, Docker & CI/CD",
                description: "Build and deploy an enterprise-grade machine learning system: ingest data, transform features, train XGBoost/PyTorch models, log to MLflow Registry, export to ONNX, serve via FastAPI microservice, containerize with Docker, deploy with GitHub Actions CI/CD, and monitor for Data Drift.",
                difficulty: "advanced",
                skillSlugs: ["machine-learning", "deep-learning", "mlops", "docker", "rest-api", "python"],
              },
            ],
            interviewTopics: [
              "Walking through an end-to-end production ML system architecture in technical interviews",
              "Explaining trade-offs in model optimization, ONNX quantization, and CI/CD quality gates",
            ],
          },
          {
            stepId: "mle-step-interview-readiness",
            title: "Machine Learning Engineering System Design & Technical Interview Readiness",
            description: "Prepare for senior Machine Learning Engineer interviews: ML system design case studies, live Python coding, docker containerization questions, and MLOps scenario questions.",
            order: 2,
            estimatedHours: 15,
            difficulty: "advanced",
            skillSlugs: ["python", "machine-learning", "mlops"],
            resources: [
              {
                title: "LeetCode Machine Learning & Algorithms Study Plans",
                type: "article",
                url: "https://leetcode.com/",
              },
            ],
            projects: [
              {
                title: "ML Engineering System Design Mock Interview Suite",
                description: "Complete mock technical interviews solving ML system design cases (e.g. designing a news feed ranker or ad click predictor) and live Python algorithm coding.",
                difficulty: "advanced",
                skillSlugs: ["python", "machine-learning", "mlops"],
              },
            ],
            interviewTopics: [
              "Live coding: Implementing custom Python algorithms and vector operations",
              "ML System Design: Designing a scalable fraud detection pipeline",
              "Behavioral & STAR method interviews for Machine Learning Engineers",
            ],
          },
        ],
      },
    ],
  },
};

module.exports = machineLearningEngineerCareerData;

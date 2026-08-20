/**
 * Canonical Career Seed Data: Data Scientist (Phase C6.4)
 * Faithfully structured around the official AI and Data Scientist Roadmap (roadmaps.sh / ai-data-scientist.pdf).
 * Covers Mathematics, Statistics, Econometrics, Coding, EDA, Machine Learning, Deep Learning, and MLOps.
 */
const dataScientistCareerData = {
  name: "Data Scientist",
  slug: "data-scientist",
  category: "data",
  shortDescription: "Master end-to-end data science: linear algebra & statistics, A/B testing, econometrics, Python & SQL data processing, classical machine learning, deep neural networks, and MLOps model deployment.",
  description: "Data Scientists combine mathematical theory, statistical experimentation, and machine learning algorithms to build predictive models and derive actionable insights from complex data. Following the official AI and Data Scientist roadmap, this career guides students step-by-step through Linear Algebra & Calculus, Probability & A/B Testing (CUPED/CUPAC), Econometrics & Time Series, Python Data Science & SQL, Exploratory Data Analysis (EDA), Classical Machine Learning (Supervised/Unsupervised/Ensembles), Deep Learning (CNNs, LSTMs, Transformers), and MLOps model deployment.",
  difficulty: "intermediate",
  requiredSkillSlugs: [
    "python",
    "pandas",
    "sql-relational-db",
    "data-visualization",
    "machine-learning",
    "deep-learning",
    "mlops",
    "git",
  ],
  optionalSkillSlugs: [
    "postgresql",
    "docker",
    "linux-basics",
    "rest-api",
    "excel-spreadsheets",
    "data-modeling",
  ],
  marketMetadata: {
    salaryRange: {
      min: 85000,
      max: 160000,
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
        phaseId: "ds-phase-1-mathematics",
        title: "Phase 1: Mathematics & Linear Algebra for Machine Learning",
        description: "Master foundational mathematical concepts required for data science and machine learning: linear algebra, matrix decompositions, calculus, and vector spaces.",
        order: 0,
        steps: [
          {
            stepId: "ds-step-linear-algebra",
            title: "Linear Algebra & Matrix Operations for Machine Learning",
            description: "Understand vectors, matrices, dot products, matrix multiplication, determinants, eigenvalues, eigenvectors, and Principal Component Analysis (PCA) mathematical foundations.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["python"],
            resources: [
              {
                title: "Coursera: Mathematics for Machine Learning Specialization",
                type: "course",
                url: "https://www.coursera.org/specializations/mathematics-machine-learning",
              },
            ],
            projects: [
              {
                title: "Matrix Operations & Eigenvector Computation Notebook",
                description: "Implement core linear algebra operations (matrix multiplication, transpose, eigenvalues) in Python using NumPy.",
                difficulty: "intermediate",
                skillSlugs: ["python"],
              },
            ],
            interviewTopics: [
              "What are Eigenvalues and Eigenvectors and how are they used in PCA?",
              "Matrix multiplication properties and vector dot products",
              "Singular Value Decomposition (SVD) fundamentals",
            ],
          },
          {
            stepId: "ds-step-calculus-optimization",
            title: "Differential Calculus & Optimization Functions",
            description: "Master partial derivatives, gradients, Jacobian & Hessian matrices, gradient descent optimization algorithms, and loss function minimization.",
            order: 1,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["python"],
            resources: [
              {
                title: "Coursera: Algebra and Differential Calculus",
                type: "course",
                url: "https://www.coursera.org/learn/algebra-elementary",
              },
            ],
            projects: [
              {
                title: "Gradient Descent Minimization from Scratch",
                description: "Build a Python gradient descent optimizer from mathematical first principles to minimize quadratic loss functions.",
                difficulty: "intermediate",
                skillSlugs: ["python"],
              },
            ],
            interviewTopics: [
              "Gradient Descent: Learning rate tuning, vanishing gradients, and local minima",
              "Partial derivatives and the chain rule in neural network backpropagation",
            ],
          },
          {
            stepId: "ds-step-vector-spaces",
            title: "Vector Spaces & Mathematical Analysis for ML",
            description: "Study vector spaces, norms (L1 vs L2 regularization mathematics), convex optimization, and distance metrics (Euclidean, Manhattan, Cosine similarity).",
            order: 2,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["python"],
            resources: [
              {
                title: "MIT OpenCourseWare: Linear Algebra & Convex Optimization",
                type: "documentation",
                url: "https://ocw.mit.edu/courses/mathematics/",
              },
            ],
            projects: [
              {
                title: "Mathematical Vector Distance & Similarity Calculator",
                description: "Implement L1, L2 norm metrics and Cosine Similarity in Python to compare high-dimensional vector embeddings.",
                difficulty: "intermediate",
                skillSlugs: ["python"],
              },
            ],
            interviewTopics: [
              "L1 (Lasso) vs L2 (Ridge) regularization mathematical differences",
              "Cosine Similarity vs Euclidean distance in high-dimensional data spaces",
            ],
          },
        ],
      },
      {
        phaseId: "ds-phase-2-statistics-experimentation",
        title: "Phase 2: Probability, Statistics & Experimentation (A/B Testing)",
        description: "Learn statistical probability distributions, Central Limit Theorem, hypothesis testing, experiment design, A/B testing sensitivity (CUPED/CUPAC), and ratio metrics.",
        order: 1,
        steps: [
          {
            stepId: "ds-step-stats-clt",
            title: "Descriptive Statistics, Central Limit Theorem & Sampling",
            description: "Understand probability density functions, standard normal distributions, Z-scores, Central Limit Theorem (CLT), confidence intervals, and sampling methods.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["python"],
            resources: [
              {
                title: "Coursera: Introduction to Statistics (Stanford)",
                type: "course",
                url: "https://www.coursera.org/learn/stanford-statistics",
              },
              {
                title: "Coursera: Probability and Statistics",
                type: "course",
                url: "https://www.coursera.org/learn/probability-intro",
              },
            ],
            projects: [
              {
                title: "Central Limit Theorem Simulation & Sampling Analysis",
                description: "Write Python scripts simulating random sampling from non-normal distributions to prove Central Limit Theorem convergence.",
                difficulty: "intermediate",
                skillSlugs: ["python"],
              },
            ],
            interviewTopics: [
              "What is the Central Limit Theorem and why is it foundational for statistics?",
              "Confidence Intervals: 95% CI definition and interpretation",
              "Probability distributions: Normal, Binomial, Poisson, and Exponential",
            ],
          },
          {
            stepId: "ds-step-hypothesis-testing",
            title: "Hypothesis Testing, Confidence Intervals & P-Values",
            description: "Formulate null/alternative hypotheses, perform T-tests, Chi-Square tests, ANOVA, calculate p-values, and avoid Type I & Type II statistical errors.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["python"],
            resources: [
              {
                title: "Coursera: Hypothesis Testing Course",
                type: "course",
                url: "https://www.coursera.org/learn/hypothesis-testing",
              },
            ],
            projects: [
              {
                title: "Statistical Hypothesis Testing & Significance Engine",
                description: "Build a SciPy statistical test suite in Python evaluating two-sample T-tests, ANOVA, and Chi-Square independence.",
                difficulty: "intermediate",
                skillSlugs: ["python"],
              },
            ],
            interviewTopics: [
              "P-value definition and common misinterpretations",
              "Type I Error (False Positive) vs Type II Error (False Negative) and Statistical Power",
              "Parametric vs Non-parametric statistical tests",
            ],
          },
          {
            stepId: "ds-step-ab-testing-sensitivity",
            title: "A/B Testing, Experiment Design, Variance Reduction (CUPED/CUPAC) & Ratio Metrics",
            description: "Design production A/B tests: minimum detectable effect (MDE), sample size calculation, variance reduction techniques (CUPED/CUPAC), stratification, and Delta Method ratio metrics.",
            order: 2,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["python"],
            resources: [
              {
                title: "Practitioner's Guide to Statistical Tests & Experiment Design",
                type: "article",
                url: "https://www.khoury.northeastern.edu/",
              },
              {
                title: "Improving Test Sensitivity with CUPED (Booking.com & Netflix)",
                type: "article",
                url: "https://booking.design/",
              },
              {
                title: "Microsoft Delta Method in Metric Analytics Paper",
                type: "article",
                url: "https://arxiv.org/",
              },
            ],
            projects: [
              {
                title: "Production A/B Test Evaluator with CUPED Variance Reduction",
                description: "Build an A/B test analysis pipeline in Python implementing sample size calculation, t-tests, CUPED variance reduction, and Delta Method ratio metric evaluations.",
                difficulty: "advanced",
                skillSlugs: ["python"],
              },
            ],
            interviewTopics: [
              "How CUPED (Controlled-Experiment Using Pre-Experiment Data) reduces variance in A/B tests",
              "Calculating Minimum Detectable Effect (MDE) and sample size for product experiments",
              "Handling Ratio Metrics and Delta Method for variance estimation",
            ],
          },
        ],
      },
      {
        phaseId: "ds-phase-3-econometrics-timeseries",
        title: "Phase 3: Econometrics & Time Series Analysis",
        description: "Apply econometric modeling, linear regression diagnostics, distribution fitting, time series decomposition, ARIMA modeling, and forecasting techniques.",
        order: 2,
        steps: [
          {
            stepId: "ds-step-econometrics-fundamentals",
            title: "Econometric Fundamentals & Distribution Fitting",
            description: "Understand econometric modeling, Gauss-Markov assumptions, multicollinearity (VIF), heteroskedasticity (Breusch-Pagan test), and fitting probability distributions.",
            order: 0,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["python", "pandas"],
            resources: [
              {
                title: "Fundamentals of Econometrics & Coursera Econometrics",
                type: "course",
                url: "https://www.coursera.org/learn/era",
              },
            ],
            projects: [
              {
                title: "Econometric Model Diagnostics & Distribution Fitter",
                description: "Implement statsmodels regression diagnostics in Python: checking normality, heteroskedasticity tests, and calculating Variance Inflation Factor (VIF).",
                difficulty: "intermediate",
                skillSlugs: ["python", "pandas"],
              },
            ],
            interviewTopics: [
              "Gauss-Markov assumptions for Ordinary Least Squares (OLS) regression",
              "Multicollinearity detection using Variance Inflation Factor (VIF)",
            ],
          },
          {
            stepId: "ds-step-regression-modeling",
            title: "Linear & Multiple Regression Analysis",
            description: "Master Ordinary Least Squares (OLS) regression, coefficient interpretation, R-squared, adjusted R-squared, residual analysis, and interaction terms.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["python", "pandas"],
            resources: [
              {
                title: "Coursera: Linear Regression Course",
                type: "course",
                url: "https://www.coursera.org/learn/linear-regression",
              },
            ],
            projects: [
              {
                title: "Economic Price Elasticity Multiple Regression Model",
                description: "Build an OLS multiple regression model analyzing market demand, price elasticity, and promotional interaction effects.",
                difficulty: "intermediate",
                skillSlugs: ["python", "pandas"],
              },
            ],
            interviewTopics: [
              "Interpreting OLS regression p-values, coefficients, and R-squared metrics",
              "Handling non-linear relationships using logarithmic transformations",
            ],
          },
          {
            stepId: "ds-step-timeseries-arima",
            title: "Time Series Analysis, ARIMA Modeling & Forecasting",
            description: "Decompose time series data (trend, seasonality, noise), Dickey-Fuller stationarity testing, Autocorrelation (ACF/PACF), ARIMA, SARIMAX, and forecasting metrics.",
            order: 2,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["python", "pandas"],
            resources: [
              {
                title: "Kaggle: Learn Time Series Course & ARIMA Tutorial",
                type: "course",
                url: "https://www.kaggle.com/learn/time-series",
              },
            ],
            projects: [
              {
                title: "Sales Demand Time Series Forecasting Engine",
                description: "Perform time series decomposition, stationarity transformations, fit a SARIMAX forecasting model in Python, and evaluate MAPE accuracy.",
                difficulty: "advanced",
                skillSlugs: ["python", "pandas"],
              },
            ],
            interviewTopics: [
              "Stationarity in Time Series: Augmented Dickey-Fuller test and differencing",
              "ARIMA (p, d, q) parameters: Autoregressive, Integrated, and Moving Average components",
            ],
          },
        ],
      },
      {
        phaseId: "ds-phase-4-coding-eda",
        title: "Phase 4: Python Data Programming, SQL & Exploratory Data Analysis",
        description: "Write clean Python code, master data structures & algorithms (DSA), query SQL databases, and conduct systematic Exploratory Data Analysis (EDA).",
        order: 3,
        steps: [
          {
            stepId: "ds-step-python-dsa-sql",
            title: "Python Programming Basics, Data Structures & SQL Queries",
            description: "Master Python data structures, algorithm efficiency (Big-O), data parsing, and SQL querying (SELECT, JOINs, GROUP BY, CTEs, Window Functions).",
            order: 0,
            estimatedHours: 20,
            difficulty: "beginner",
            skillSlugs: ["python", "sql-relational-db"],
            resources: [
              {
                title: "Learn Python: Kaggle Course & Google's Python Class",
                type: "course",
                url: "https://developers.google.com/edu/python",
              },
              {
                title: "SQL Tutorial for Data Science",
                type: "course",
                url: "https://www.kaggle.com/learn/intro-to-sql",
              },
            ],
            projects: [
              {
                title: "SQL & Python ETL Data Ingestion Pipeline",
                description: "Write a Python script extracting relational database tables via SQL queries and transforming data into structured analytical formats.",
                difficulty: "beginner",
                skillSlugs: ["python", "sql-relational-db"],
              },
            ],
            interviewTopics: [
              "Python list vs dictionary internal time complexity O(1) vs O(N)",
              "SQL Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD)",
            ],
          },
          {
            stepId: "ds-step-pandas-wrangling",
            title: "Data Cleaning & Tabular Manipulation with Pandas",
            description: "Clean complex tabular datasets in Pandas: loc/iloc indexing, vectorization, handling missing values, string parsing, merging, joining, and pivoting DataFrames.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["python", "pandas"],
            resources: [
              {
                title: "Exploratory Data Analysis with Python and Pandas (Kaggle)",
                type: "course",
                url: "https://www.kaggle.com/learn/data-cleaning",
              },
            ],
            projects: [
              {
                title: "Complex Multi-Source Dataset Sanitization Pipeline",
                description: "Wrangle messy multi-source CSV files using Pandas vectorization, imputation, and column transformations into a clean analytical dataset.",
                difficulty: "intermediate",
                skillSlugs: ["python", "pandas"],
              },
            ],
            interviewTopics: [
              "Pandas vectorization vs iterating over DataFrame rows with apply/for loops",
              "Handling duplicate records and multi-index DataFrames in Pandas",
            ],
          },
          {
            stepId: "ds-step-eda-seaborn",
            title: "Exploratory Data Analysis (EDA) & Visualization with Seaborn",
            description: "Conduct systematic Exploratory Data Analysis (EDA): distribution plots, pairplots, correlation heatmaps in Seaborn, anomaly detection, and feature insights.",
            order: 2,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["pandas", "data-visualization"],
            resources: [
              {
                title: "Exploratory Data Analysis for Machine Learning & Seaborn",
                type: "course",
                url: "https://seaborn.pydata.org/tutorial.html",
              },
            ],
            projects: [
              {
                title: "Comprehensive Exploratory Data Analysis (EDA) Jupyter Notebook",
                description: "Perform an exhaustive EDA on a raw dataset producing summary statistical profiles, correlation matrices, Seaborn visualizations, and business hypotheses.",
                difficulty: "intermediate",
                skillSlugs: ["pandas", "data-visualization"],
              },
            ],
            interviewTopics: [
              "Steps in conducting an end-to-end Exploratory Data Analysis (EDA)",
              "Detecting data skewness, multicollinearity, and visual anomalies",
            ],
          },
        ],
      },
      {
        phaseId: "ds-phase-5-machine-learning",
        title: "Phase 5: Classical Machine Learning & Pattern Recognition",
        description: "Master supervised and unsupervised machine learning algorithms: linear models, decision trees, SVMs, clustering, dimensionality reduction, and ensemble methods.",
        order: 4,
        steps: [
          {
            stepId: "ds-step-supervised-learning",
            title: "Supervised Learning: Classification & Regression Algorithms",
            description: "Learn core supervised learning algorithms in scikit-learn: Linear Regression, Logistic Regression, K-Nearest Neighbors (KNN), Decision Trees, and Support Vector Machines (SVM).",
            order: 0,
            estimatedHours: 25,
            difficulty: "intermediate",
            skillSlugs: ["machine-learning", "python", "pandas"],
            resources: [
              {
                title: "Coursera: Machine Learning Specialization (Andrew Ng)",
                type: "course",
                url: "https://www.coursera.org/specializations/machine-learning-introduction",
              },
              {
                title: "Open Machine Learning Course (OpenDataScience)",
                type: "course",
                url: "https://mlcourse.ai/",
              },
            ],
            projects: [
              {
                title: "Supervised Customer Churn Classification Suite",
                description: "Train and compare Logistic Regression, Decision Tree, and SVM models in scikit-learn to predict customer churn probability.",
                difficulty: "intermediate",
                skillSlugs: ["machine-learning", "python", "pandas"],
              },
            ],
            interviewTopics: [
              "Logistic Regression: Sigmoid function, odds ratio, and log-loss cost function",
              "Decision Trees: Information Gain, Entropy, and Gini Impurity calculations",
              "Bias-Variance Tradeoff: High bias (underfitting) vs High variance (overfitting)",
            ],
          },
          {
            stepId: "ds-step-unsupervised-learning",
            title: "Unsupervised Learning: Clustering & Dimensionality Reduction (PCA)",
            description: "Understand unsupervised pattern recognition: K-Means clustering, Silhouette score, Hierarchical clustering, DBSCAN, and Principal Component Analysis (PCA).",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["machine-learning", "python"],
            resources: [
              {
                title: "Pattern Recognition and Machine Learning (Christopher Bishop Book)",
                type: "documentation",
                url: "https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/",
              },
            ],
            projects: [
              {
                title: "Customer Segmentation via K-Means & PCA Clustering",
                description: "Apply PCA dimensionality reduction and K-Means clustering in Python to segment e-commerce customers into actionable behavioral clusters.",
                difficulty: "intermediate",
                skillSlugs: ["machine-learning", "python"],
              },
            ],
            interviewTopics: [
              "K-Means clustering algorithm steps and selecting optimal K via Elbow method / Silhouette score",
              "Principal Component Analysis (PCA): Eigen-decomposition and variance explained ratio",
            ],
          },
          {
            stepId: "ds-step-ensemble-methods",
            title: "Ensemble Methods: Random Forests, Gradient Boosting & XGBoost",
            description: "Master ensemble learning techniques: Bagging (Random Forest), Boosting (AdaBoost, Gradient Boosting, XGBoost, LightGBM), feature importance, and out-of-bag error.",
            order: 2,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["machine-learning", "python", "pandas"],
            resources: [
              {
                title: "Scikit-Learn Ensemble Methods User Guide",
                type: "documentation",
                url: "https://scikit-learn.org/stable/modules/ensemble.html",
              },
            ],
            projects: [
              {
                title: "High-Performance Credit Risk XGBoost Classifier",
                description: "Build an XGBoost gradient boosting classifier for credit risk scoring with hyperparameter tuning and feature importance inspection.",
                difficulty: "advanced",
                skillSlugs: ["machine-learning", "python", "pandas"],
              },
            ],
            interviewTopics: [
              "Bagging vs Boosting algorithms: Random Forest vs Gradient Boosting / XGBoost",
              "How Random Forests reduce variance via random feature subsampling",
            ],
          },
        ],
      },
      {
        phaseId: "ds-phase-6-feature-evaluation",
        title: "Phase 6: Feature Engineering, Model Evaluation & Advanced ML",
        description: "Transform raw features into predictive signals, evaluate classification/regression metrics (ROC-AUC, Precision/Recall), and optimize models with cross-validation.",
        order: 5,
        steps: [
          {
            stepId: "ds-step-feature-engineering",
            title: "Feature Engineering, Encoding & Scaling Techniques",
            description: "Perform feature creation: One-Hot Encoding, Ordinal Encoding, Target Encoding, Standard/MinMax scaling, polynomial features, handling imbalanced data (SMOTE).",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["machine-learning", "pandas"],
            resources: [
              {
                title: "Scikit-Learn Preprocessing & Feature Extraction Guide",
                type: "documentation",
                url: "https://scikit-learn.org/stable/modules/preprocessing.html",
              },
            ],
            projects: [
              {
                title: "Automated Feature Engineering Pipeline",
                description: "Create a scikit-learn ColumnTransformer pipeline applying scaling, encoding, and SMOTE resampling for imbalanced datasets.",
                difficulty: "intermediate",
                skillSlugs: ["machine-learning", "pandas"],
              },
            ],
            interviewTopics: [
              "One-Hot Encoding vs Target Encoding for high-cardinality categorical variables",
              "Addressing class imbalance: SMOTE oversampling vs class weight adjustment",
            ],
          },
          {
            stepId: "ds-step-model-evaluation",
            title: "Model Evaluation Metrics: ROC-AUC, Precision-Recall & Cross-Validation",
            description: "Evaluate model performance: Confusion Matrix, Precision, Recall, F1-score, ROC Curve, AUC, Precision-Recall curves, RMSE/MAE, and K-Fold Cross-Validation.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["machine-learning", "python"],
            resources: [
              {
                title: "Scikit-Learn Model Evaluation Metrics Guide",
                type: "documentation",
                url: "https://scikit-learn.org/stable/modules/model_evaluation.html",
              },
            ],
            projects: [
              {
                title: "Model Evaluation & Benchmark Comparison Framework",
                description: "Build an automated evaluation framework in Python computing ROC-AUC curves, confusion matrices, and Stratified K-Fold cross-validation scores.",
                difficulty: "intermediate",
                skillSlugs: ["machine-learning", "python"],
              },
            ],
            interviewTopics: [
              "When to use Precision vs Recall vs F1-Score vs ROC-AUC in imbalanced problems",
              "Stratified K-Fold Cross-Validation vs K-Fold Cross-Validation",
            ],
          },
          {
            stepId: "ds-step-hyperparameter-tuning",
            title: "Hyperparameter Tuning & Overfitting Regularization",
            description: "Tune model hyperparameters using GridSearchCV, RandomizedSearchCV, Optuna, apply L1/L2 regularization penalties, and prevent data leakage.",
            order: 2,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["machine-learning", "python"],
            resources: [
              {
                title: "Scikit-Learn Hyperparameter Optimization Guide",
                type: "documentation",
                url: "https://scikit-learn.org/stable/modules/grid_search.html",
              },
            ],
            projects: [
              {
                title: "Optuna Automated Hyperparameter Optimizer",
                description: "Implement Optuna Bayesian hyperparameter optimization to find optimal hyperparameters for a machine learning model without data leakage.",
                difficulty: "advanced",
                skillSlugs: ["machine-learning", "python"],
              },
            ],
            interviewTopics: [
              "What is Data Leakage and how to prevent it during preprocessing & scaling?",
              "Grid Search vs Random Search vs Bayesian Optimization (Optuna)",
            ],
          },
        ],
      },
      {
        phaseId: "ds-phase-7-deep-learning",
        title: "Phase 7: Deep Learning Architecture & Neural Networks",
        description: "Build deep neural network architectures: perceptrons, activation functions, backpropagation, CNNs for computer vision, RNNs/LSTMs, and Transformers.",
        order: 6,
        steps: [
          {
            stepId: "ds-step-neural-networks-basics",
            title: "Fully Connected Neural Networks, Backpropagation & Activation Functions",
            description: "Understand artificial neural networks: Multi-Layer Perceptrons (MLP), forward pass, backpropagation algorithm, loss functions, and activation functions (ReLU, Sigmoid, Softmax, Tanh).",
            order: 0,
            estimatedHours: 25,
            difficulty: "advanced",
            skillSlugs: ["deep-learning", "python"],
            resources: [
              {
                title: "Coursera: Deep Learning Specialization (Andrew Ng)",
                type: "course",
                url: "https://www.coursera.org/specializations/deep-learning",
              },
              {
                title: "Deep Learning Book (Ian Goodfellow, Yoshua Bengio)",
                type: "documentation",
                url: "https://www.deeplearningbook.org/",
              },
            ],
            projects: [
              {
                title: "PyTorch Multi-Layer Perceptron (MLP) Classifier",
                description: "Build, train, and evaluate a multi-layer perceptron neural network in PyTorch using custom loss functions and Adam optimizer.",
                difficulty: "advanced",
                skillSlugs: ["deep-learning", "python"],
              },
            ],
            interviewTopics: [
              "How Backpropagation calculates gradients using the calculus Chain Rule",
              "Why ReLU is preferred over Sigmoid in deep neural networks (Vanishing Gradient problem)",
            ],
          },
          {
            stepId: "ds-step-cnn-vision",
            title: "Computer Vision with Convolutional Neural Networks (CNNs)",
            description: "Understand 2D Convolutions, pooling layers (MaxPool), stride, padding, feature maps, ResNet architectures, and Transfer Learning.",
            order: 1,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["deep-learning", "python"],
            resources: [
              {
                title: "PyTorch Computer Vision & CNN Tutorials",
                type: "documentation",
                url: "https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html",
              },
            ],
            projects: [
              {
                title: "Transfer Learning Image Classification Model with PyTorch",
                description: "Fine-tune a pre-trained ResNet CNN architecture in PyTorch for custom image classification.",
                difficulty: "advanced",
                skillSlugs: ["deep-learning", "python"],
              },
            ],
            interviewTopics: [
              "Convolutional layer filters, stride, padding, and pooling operations",
              "Transfer Learning: Freezing base layers vs fine-tuning pre-trained models",
            ],
          },
          {
            stepId: "ds-step-rnn-transformers",
            title: "Sequential Modeling (RNNs, LSTMs) & Attention / Transformer Architectures",
            description: "Master sequential modeling: Recurrent Neural Networks (RNN), Long Short-Term Memory (LSTM), Self-Attention mechanisms, and Transformer architectures.",
            order: 2,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["deep-learning", "python"],
            resources: [
              {
                title: "Attention Is All You Need Paper (Vaswani et al.)",
                type: "article",
                url: "https://arxiv.org/abs/1706.03762",
              },
              {
                title: "The Illustrated Transformer (Jay Alammar)",
                type: "article",
                url: "https://jalammar.github.io/illustrated-transformer/",
              },
            ],
            projects: [
              {
                title: "LSTM Text Sequence Classifier or Transformer Fine-Tuning",
                description: "Train an LSTM or fine-tune a Transformer model for text sentiment classification using PyTorch / HuggingFace.",
                difficulty: "advanced",
                skillSlugs: ["deep-learning", "python"],
              },
            ],
            interviewTopics: [
              "Why LSTMs solve the vanishing gradient problem of standard Recurrent Neural Networks",
              "Self-Attention mechanism: Query, Key, Value (Q, K, V) vector dot-product attention",
            ],
          },
        ],
      },
      {
        phaseId: "ds-phase-8-mlops-capstone",
        title: "Phase 8: MLOps, Portfolio & Data Scientist Interview Readiness",
        description: "Package ML models for production deployment, build REST API endpoints, containerize with Docker, execute an end-to-end data science capstone, and prepare for interviews.",
        order: 7,
        steps: [
          {
            stepId: "ds-step-mlops-deployment",
            title: "MLOps: Model Packaging, Serving APIs & Containerized CI/CD",
            description: "Deploy machine learning models: model serialization (joblib/ONNX), building FastAPI serving endpoints, Docker containerization, and model monitoring.",
            order: 0,
            estimatedHours: 25,
            difficulty: "advanced",
            skillSlugs: ["mlops", "machine-learning", "docker"],
            resources: [
              {
                title: "Coursera: MLOps Specialization (DeepLearning.AI)",
                type: "course",
                url: "https://www.coursera.org/specializations/input-output-machine-learning-in-production",
              },
            ],
            projects: [
              {
                title: "Production Containerized ML Model Serving API",
                description: "Package a trained machine learning model into a FastAPI REST server, containerize it using Docker, and configure automated health checking.",
                difficulty: "advanced",
                skillSlugs: ["mlops", "machine-learning", "docker"],
              },
            ],
            interviewTopics: [
              "Model serving paradigms: Real-time inference REST API vs Batch prediction pipelines",
              "Monitoring ML models in production: Detecting Data Drift and Concept Drift",
            ],
          },
          {
            stepId: "ds-step-capstone-project",
            title: "Full End-to-End Data Science Portfolio Capstone Project",
            description: "Execute a comprehensive end-to-end Data Science project: business framing, data collection, EDA, hypothesis testing/stats, feature engineering, model training, evaluation, PyTorch/XGBoost tuning, FastAPI deployment, and technical documentation.",
            order: 1,
            estimatedHours: 25,
            difficulty: "advanced",
            skillSlugs: [
              "python",
              "pandas",
              "sql-relational-db",
              "machine-learning",
              "deep-learning",
              "mlops",
              "git",
            ],
            resources: [
              {
                title: "Kaggle Competitions & Datasets Repository",
                type: "documentation",
                url: "https://www.kaggle.com/competitions",
              },
            ],
            projects: [
              {
                title: "Full Capstone: Production Predictive Machine Learning & Deep Learning System",
                description: "Build an end-to-end predictive machine learning system: ingest relational data, clean anomalies, compute A/B hypothesis tests, engineer features, train & evaluate XGBoost/PyTorch models, deploy a containerized FastAPI endpoint, and present technical recommendations.",
                difficulty: "advanced",
                skillSlugs: ["machine-learning", "deep-learning", "mlops", "python", "pandas"],
              },
            ],
            interviewTopics: [
              "Walking through an end-to-end Data Science capstone architecture in technical interviews",
              "Explaining trade-offs between model interpretability (Linear/Decision Tree) vs predictive power (XGBoost/Neural Nets)",
            ],
          },
          {
            stepId: "ds-step-interview-readiness",
            title: "Data Scientist Technical Coding & Machine Learning Interview Readiness",
            description: "Prepare for entry-level / intermediate Data Scientist interviews: live Python coding, SQL queries, machine learning system design case studies, and statistical probability questions.",
            order: 2,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["python", "sql-relational-db", "machine-learning"],
            resources: [
              {
                title: "LeetCode Data Science & Machine Learning Study Plans",
                type: "article",
                url: "https://leetcode.com/",
              },
            ],
            projects: [
              {
                title: "Data Science Machine Coding & ML System Design Mock Suite",
                description: "Complete mock technical interviews: writing Python algorithms, solving complex SQL queries, and designing an ML recommendation system case study.",
                difficulty: "intermediate",
                skillSlugs: ["python", "machine-learning"],
              },
            ],
            interviewTopics: [
              "Live coding interview preparation: Python data manipulation and SQL query challenges",
              "Machine Learning System Design: Designing a recommendation engine or spam filter",
              "Behavioral interview preparation using the STAR method for Data Science projects",
            ],
          },
        ],
      },
    ],
  },
};

module.exports = dataScientistCareerData;

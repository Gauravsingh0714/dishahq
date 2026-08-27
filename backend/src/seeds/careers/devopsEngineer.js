/**
 * Canonical Career Seed Data: DevOps Engineer (Phase C6.7)
 * Comprehensive, production-focused curriculum targeting Linux System Administration, Shell Scripting, GitOps Workflows, Docker Containerization, CI/CD Automation, Infrastructure as Code (Terraform), Kubernetes Orchestration, Observability (Prometheus/Grafana), and Site Reliability Engineering (SRE).
 */
const devopsEngineerCareerData = {
  name: "DevOps Engineer",
  slug: "devops-engineer",
  category: "devops_cloud",
  shortDescription: "Automate software delivery and infrastructure management: Linux administration, shell automation, GitOps, Docker containerization, CI/CD pipelines, Terraform IaC, Kubernetes orchestration, Prometheus/Grafana observability, and SRE principles.",
  description: "DevOps Engineers bridge software development and IT operations by automating infrastructure provisioning, software building, testing, deployment, and monitoring. This career path guides learners through Linux system administration, shell scripting, advanced Git workflows, Docker microservices, automated CI/CD pipelines (GitHub Actions), Infrastructure as Code with Terraform and Ansible, Kubernetes container orchestration, Prometheus/Grafana observability, log aggregation with Loki, and Site Reliability Engineering (SRE) practices.",
  difficulty: "intermediate",
  requiredSkillSlugs: [
    "linux-basics",
    "git",
    "docker",
    "python",
    "rest-api",
    "mlops",
  ],
  optionalSkillSlugs: [
    "postgresql",
    "sql-relational-db",
    "node-js",
    "unit-testing-backend",
    "backend-auth-security",
  ],
  marketMetadata: {
    salaryRange: {
      min: 85000,
      max: 155000,
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
        phaseId: "doe-phase-1-linux-admin-shell",
        title: "Phase 1: Linux System Administration, Shell Scripting & CLI Fundamentals",
        description: "Master Linux operating system management, terminal navigation, file permissions, process control, and production Bash shell scripting automation.",
        order: 0,
        steps: [
          {
            stepId: "doe-step-linux-sysadmin",
            title: "Linux Architecture, Command-Line Navigation & System Utilities",
            description: "Study Linux kernel architecture, directory hierarchy, user administration, file permissions (chmod, chown), process management (ps, top, kill), and system load analysis.",
            order: 0,
            estimatedHours: 20,
            difficulty: "beginner",
            skillSlugs: ["linux-basics"],
            resources: [
              {
                title: "GNU Coreutils Manual: Core Linux Utilities",
                type: "documentation",
                url: "https://www.gnu.org/software/coreutils/manual/",
              },
            ],
            projects: [
              {
                title: "Interactive Linux System Health & Diagnostics Dashboard Script",
                description: "Build a Bash script monitoring CPU usage, memory utilization, disk space, and active network sockets with formatted terminal outputs.",
                difficulty: "beginner",
                skillSlugs: ["linux-basics"],
              },
            ],
            interviewTopics: [
              "Linux file permissions: File mode bits, umask, and special permissions (SUID, SGID, Sticky Bit)",
              "Process states, signals (SIGTERM vs SIGKILL), and background process execution with nohup",
            ],
          },
          {
            stepId: "doe-step-bash-automation",
            title: "Bash Shell Automation, Input Parsing & Pipeline Scripting",
            description: "Write production Bash scripts utilizing control structures, environment variables, command substitution, stream redirection, and text processing with grep, awk, and sed.",
            order: 1,
            estimatedHours: 15,
            difficulty: "beginner",
            skillSlugs: ["linux-basics"],
            resources: [
              {
                title: "Advanced Bash Scripting Guide & Reference Manual",
                type: "documentation",
                url: "https://tldp.org/LDP/abs/html/",
              },
            ],
            projects: [
              {
                title: "Automated Production Log Rotation & Cleanup Shell Script",
                description: "Construct a robust Bash script parsing log directories, compressing old logs, deleting expired files, and sending email alerts on low disk space.",
                difficulty: "beginner",
                skillSlugs: ["linux-basics"],
              },
            ],
            interviewTopics: [
              "Parsing text streams using awk, sed, and grep pipelines",
              "Handling error codes (set -e, set -u, set -o pipefail) in production Bash scripts",
            ],
          },
          {
            stepId: "doe-step-systemd-cron",
            title: "System Process Control, Systemd Services & Cron Automation",
            description: "Configure system daemons using systemd unit files, manage background services (systemctl, journalctl), and automate scheduled tasks using cron jobs.",
            order: 2,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["linux-basics"],
            resources: [
              {
                title: "Systemd Official Documentation & Manual Pages",
                type: "documentation",
                url: "https://systemd.io/",
              },
            ],
            projects: [
              {
                title: "Custom Systemd Daemon Service & Automated Backup Cron Job",
                description: "Author a systemd service unit file managing a background application daemon alongside a crontab schedule executing database backups.",
                difficulty: "intermediate",
                skillSlugs: ["linux-basics"],
              },
            ],
            interviewTopics: [
              "Systemd service configuration: Type, ExecStart, Restart, and Dependency options",
              "Troubleshooting system service failures using journalctl log filtering",
            ],
          },
        ],
      },
      {
        phaseId: "doe-phase-2-version-control-gitops",
        title: "Phase 2: Version Control, GitOps Workflows & Branching Strategies",
        description: "Master advanced Git version control, collaborative branching models, commit hygiene, automated pre-commit validation, and foundational GitOps principles.",
        order: 1,
        steps: [
          {
            stepId: "doe-step-advanced-git",
            title: "Advanced Git Operations, Interactive Rebase & Commit History Cleanliness",
            description: "Execute complex Git operations: interactive rebasing (squash, reword, fixup), git cherry-pick, reflog recovery, submodules, and advanced merge conflict resolution.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["git"],
            resources: [
              {
                title: "Pro Git Book: Advanced Branching and Rebase",
                type: "documentation",
                url: "https://git-scm.com/book/en/v2",
              },
            ],
            projects: [
              {
                title: "Enterprise Git Workflow Audit & Clean Commit Enforcement",
                description: "Refactor a messy multi-branch repository into a clean linear commit history using interactive rebase and cherry-pick operations.",
                difficulty: "intermediate",
                skillSlugs: ["git"],
              },
            ],
            interviewTopics: [
              "Git Merge vs Git Rebase: Internal mechanics, advantages, and risks",
              "Recovering lost commits and detached HEAD states using git reflog",
            ],
          },
          {
            stepId: "doe-step-git-branching",
            title: "Trunk-Based Development, Branch Protection & Pull Request Workflows",
            description: "Implement modern branching models (Trunk-Based Development vs GitFlow), configure branch protection rules, and enforce automated pre-commit hook suites.",
            order: 1,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["git"],
            resources: [
              {
                title: "GitHub Branch Protection & Collaboration Documentation",
                type: "documentation",
                url: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches",
              },
            ],
            projects: [
              {
                title: "Git Branching Policy & Automated Pre-Commit Hook Suite",
                description: "Configure pre-commit hooks enforcing commit message formatting, linting checks, and secret scanning prior to Git push.",
                difficulty: "intermediate",
                skillSlugs: ["git"],
              },
            ],
            interviewTopics: [
              "Trunk-Based Development vs GitFlow in high-velocity DevOps engineering teams",
              "Enforcing mandatory status checks and code owner reviews on protected branches",
            ],
          },
          {
            stepId: "doe-step-gitops-foundations",
            title: "GitOps Core Principles & Declarative Repository Structures",
            description: "Understand GitOps philosophy: declarative infrastructure, Git as the single source of truth, automated synchronization, and push vs pull reconciliation.",
            order: 2,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["git", "linux-basics"],
            resources: [
              {
                title: "OpenGitOps Principles & Specifications",
                type: "documentation",
                url: "https://opengitops.dev/",
              },
            ],
            projects: [
              {
                title: "Declarative Environment Repository Configuration Engine",
                description: "Structure a dual-repository GitOps hierarchy separating application source code from environment manifest repositories.",
                difficulty: "intermediate",
                skillSlugs: ["git"],
              },
            ],
            interviewTopics: [
              "The four core principles of GitOps according to OpenGitOps standards",
              "Pull-based (agent-in-cluster) vs Push-based (CI pipeline) deployment architectures",
            ],
          },
        ],
      },
      {
        phaseId: "doe-phase-3-containerization-docker",
        title: "Phase 3: Containerization & Microservice Packaging with Docker",
        description: "Package application microservices into lightweight, secure container images using Docker, multi-stage builds, and Docker Compose orchestration.",
        order: 2,
        steps: [
          {
            stepId: "doe-step-docker-foundations",
            title: "Container Mechanics, Docker CLI & Custom Dockerfile Authoring",
            description: "Understand container virtualization vs hypervisor VMs, Linux namespaces, control groups (cgroups), Docker engine architecture, image layers, and basic Dockerfiles.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["docker", "linux-basics"],
            resources: [
              {
                title: "Docker Engine Official Documentation & Architecture Guide",
                type: "documentation",
                url: "https://docs.docker.com/engine/",
              },
            ],
            projects: [
              {
                title: "Containerized Multi-Tier Python API Microservice",
                description: "Write a Dockerfile packaging a Python REST API with custom environment configuration, port exposure, and entrypoint scripts.",
                difficulty: "intermediate",
                skillSlugs: ["docker", "python"],
              },
            ],
            interviewTopics: [
              "Containers vs Virtual Machines: Memory overhead, boot times, and OS kernel sharing",
              "How Linux Namespaces and Control Groups (cgroups) isolate containerized processes",
            ],
          },
          {
            stepId: "doe-step-docker-multistage",
            title: "Multi-Stage Builds, Security Hardening & Image Size Minimization",
            description: "Optimize Docker images using multi-stage builds, minimal base images (Alpine, Distroless), non-root user execution, layer caching, and image vulnerability scanning (Trivy).",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["docker"],
            resources: [
              {
                title: "Docker Official Documentation: Multi-Stage Builds Guide",
                type: "documentation",
                url: "https://docs.docker.com/build/building/multi-stage/",
              },
            ],
            projects: [
              {
                title: "Production-Hardened Alpine/Distroless Docker Build Pipeline",
                description: "Refactor a bloated Dockerfile into a secure, multi-stage build producing a minimal non-root image verified by container security scanners.",
                difficulty: "intermediate",
                skillSlugs: ["docker"],
              },
            ],
            interviewTopics: [
              "Strategies for optimizing Docker image build layer caching and reducing final image size",
              "Hardening container security: Non-root users, read-only filesystems, and vulnerability scanning",
            ],
          },
          {
            stepId: "doe-step-docker-compose",
            title: "Multi-Container Orchestration with Docker Compose",
            description: "Orchestrate multi-container applications using Docker Compose: service definitions, custom networks, persistent volumes, environment variables, and health checks.",
            order: 2,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["docker", "rest-api"],
            resources: [
              {
                title: "Docker Compose Official Specification & User Guide",
                type: "documentation",
                url: "https://docs.docker.com/compose/",
              },
            ],
            projects: [
              {
                title: "Multi-Service Application Environment Stack (Node/Python + PostgreSQL + Redis)",
                description: "Configure a Docker Compose stack running an API microservice, PostgreSQL database, and Redis cache with custom bridge networking and volume persistence.",
                difficulty: "intermediate",
                skillSlugs: ["docker"],
              },
            ],
            interviewTopics: [
              "Bridge vs Host vs Overlay container networking drivers in Docker",
              "Managing persistent data across container restarts using Docker volumes vs bind mounts",
            ],
          },
        ],
      },
      {
        phaseId: "doe-phase-4-cicd-pipelines",
        title: "Phase 4: Continuous Integration & Continuous Deployment (CI/CD) Pipelines",
        description: "Automate software build, test, containerization, and release pipelines using GitHub Actions, container registries, and zero-downtime deployment strategies.",
        order: 3,
        steps: [
          {
            stepId: "doe-step-ci-pipeline-automation",
            title: "CI Pipeline Automation: Unit Testing, Linting & Artifact Building",
            description: "Construct automated Continuous Integration (CI) workflows in GitHub Actions: event triggers (pull_request, push), job dependencies, test matrices, and build artifacts.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["mlops", "git"],
            resources: [
              {
                title: "GitHub Actions Official Documentation & Workflows Guide",
                type: "documentation",
                url: "https://docs.github.com/en/actions",
              },
            ],
            projects: [
              {
                title: "Automated GitHub Actions CI Testing & Linting Matrix",
                description: "Build a GitHub Actions workflow executing code linting, static analysis, and unit test matrices on pull requests.",
                difficulty: "intermediate",
                skillSlugs: ["mlops", "git"],
              },
            ],
            interviewTopics: [
              "Continuous Integration vs Continuous Delivery vs Continuous Deployment definitions",
              "Caching dependencies and artifacts in CI workflows to accelerate pipeline execution",
            ],
          },
          {
            stepId: "doe-step-container-registry-cicd",
            title: "Automated Container Image Building, Tagging & Container Registry Push",
            description: "Automate container image builds in CI pipelines: semantic versioning tags, Git commit SHA tagging, Docker Buildx multi-architecture support, and pushing to Docker Hub or GHCR.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["mlops", "docker", "git"],
            resources: [
              {
                title: "Docker Build & Push GitHub Action Documentation",
                type: "documentation",
                url: "https://docs.docker.com/build/ci/github-actions/",
              },
            ],
            projects: [
              {
                title: "Automated Container Build & Docker Hub/GHCR Registry Pipeline",
                description: "Create a GitHub Actions pipeline building multi-arch Docker images, tagging with release versions and commit SHAs, and publishing to GitHub Container Registry.",
                difficulty: "intermediate",
                skillSlugs: ["mlops", "docker"],
              },
            ],
            interviewTopics: [
              "Image tagging strategies: Immutable commit SHA tags vs mutable version tags",
              "Securing registry authentication and access tokens within CI/CD runner secrets",
            ],
          },
          {
            stepId: "doe-step-cd-deployment-strategies",
            title: "Automated CD Deployment Strategies: Zero-Downtime, Rolling & Canary Releases",
            description: "Implement Continuous Deployment (CD) strategies: Blue-Green deployments, Rolling updates, Canary releases, automated health check validation, and pipeline rollback triggers.",
            order: 2,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["mlops", "rest-api"],
            resources: [
              {
                title: "Google Cloud Guide: Deployment Strategies & Release Patterns",
                type: "documentation",
                url: "https://cloud.google.com/architecture/deployment-strategies-globally-available-services",
              },
            ],
            projects: [
              {
                title: "Automated Blue-Green & Canary Deployment Script Suite",
                description: "Develop automated deployment scripts executing Blue-Green environment switching and Canary traffic splitting with automated rollback on error threshold breach.",
                difficulty: "advanced",
                skillSlugs: ["mlops", "rest-api"],
              },
            ],
            interviewTopics: [
              "Blue-Green vs Canary vs Rolling update deployment strategies: Trade-offs and complexity",
              "Implementing automated smoke tests and rollback triggers during CD pipeline execution",
            ],
          },
        ],
      },
      {
        phaseId: "doe-phase-5-iac-terraform-ansible",
        title: "Phase 5: Infrastructure as Code (IaC) with Terraform & Configuration Management",
        description: "Provision and manage infrastructure declaratively using HashiCorp Terraform modules, remote state backends, and Ansible configuration playbooks.",
        order: 4,
        steps: [
          {
            stepId: "doe-step-terraform-fundamentals",
            title: "Declarative Infrastructure Provisioning with Terraform Fundamentals",
            description: "Study HashiCorp Terraform architecture: HCL (HashiCorp Configuration Language), providers, resources, variables, outputs, resource dependencies, and terraform plan/apply lifecycle.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["linux-basics", "python"],
            resources: [
              {
                title: "HashiCorp Terraform Documentation & Tutorials",
                type: "documentation",
                url: "https://developer.hashicorp.com/terraform/docs",
              },
              {
                title: "HashiCorp Terraform CLI Command Reference",
                type: "documentation",
                url: "https://developer.hashicorp.com/terraform/cli",
              },
            ],
            projects: [
              {
                title: "Modular Local Infrastructure Provisioning with Terraform",
                description: "Author reusable Terraform modules provisioning local virtual network environments, security rules, and server configurations.",
                difficulty: "intermediate",
                skillSlugs: ["linux-basics"],
              },
            ],
            interviewTopics: [
              "Declarative (Terraform) vs Imperative (Scripts) Infrastructure as Code approaches",
              "Terraform execution lifecycle: init, plan, apply, and destroy steps",
              "Structuring reusable Terraform modules and input/output variable interfaces",
            ],
          },
          {
            stepId: "doe-step-terraform-state-management",
            title: "Terraform State Management, Remote Backends & State Locking",
            description: "Manage Terraform state safely: local vs remote backends (S3/GCS), state locking (DynamoDB), state inspection (terraform state list/show), and importing existing resources.",
            order: 1,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["linux-basics"],
            resources: [
              {
                title: "Terraform Remote Backends Official Configuration Guide",
                type: "documentation",
                url: "https://developer.hashicorp.com/terraform/language/settings/backends/configuration",
              },
            ],
            projects: [
              {
                title: "Remote State Backend Infrastructure with Lock Management",
                description: "Configure a secure remote state backend with encryption and state locking mechanisms for multi-developer Terraform collaboration.",
                difficulty: "advanced",
                skillSlugs: ["linux-basics"],
              },
            ],
            interviewTopics: [
              "Purpose of the terraform.tfstate file and why remote state locking is mandatory in team environments",
              "Importing pre-existing cloud resources into Terraform state using terraform import",
            ],
          },
          {
            stepId: "doe-step-ansible-configuration",
            title: "Automated Configuration Management & Server Provisioning with Ansible",
            description: "Automate server configuration using Ansible: inventory files, playbooks, YAML task syntax, roles, idempotent execution, and encrypting secrets using Ansible Vault.",
            order: 2,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["linux-basics", "python"],
            resources: [
              {
                title: "Ansible Community Documentation & User Guide",
                type: "documentation",
                url: "https://docs.ansible.com/ansible/latest/user_guide/index.html",
              },
            ],
            projects: [
              {
                title: "Automated Server Configuration & Package Setup Ansible Playbook",
                description: "Create an idempotent Ansible playbook configuring Linux server hardening, user creation, Docker installation, and firewall configuration.",
                difficulty: "intermediate",
                skillSlugs: ["linux-basics"],
              },
            ],
            interviewTopics: [
              "Ansible agentless (SSH-based) architecture vs agent-based configuration tools",
              "Ensuring idempotency in Ansible playbooks across repeated execution runs",
            ],
          },
        ],
      },
      {
        phaseId: "doe-phase-6-kubernetes-orchestration",
        title: "Phase 6: Container Orchestration & Production Cluster Operations with Kubernetes",
        description: "Orchestrate containerized applications at scale using Kubernetes: cluster architecture, deployments, services, ingress routing, storage, Helm, and GitOps sync.",
        order: 5,
        steps: [
          {
            stepId: "doe-step-kubernetes-architecture",
            title: "Kubernetes Architecture, Core Objects & Minikube/K3s Setup",
            description: "Study Kubernetes cluster architecture: control plane (kube-apiserver, etcd, kube-scheduler, kube-controller-manager) vs worker nodes (kubelet, kube-proxy), Pods, Deployments, and Services.",
            order: 0,
            estimatedHours: 25,
            difficulty: "intermediate",
            skillSlugs: ["docker", "linux-basics"],
            resources: [
              {
                title: "Kubernetes Official Documentation & Core Concepts",
                type: "documentation",
                url: "https://kubernetes.io/docs/home/",
              },
              {
                title: "Minikube Official Documentation & Local Setup Guide",
                type: "documentation",
                url: "https://minikube.sigs.k8s.io/docs/",
              },
            ],
            projects: [
              {
                title: "Microservice Deployment Stack on Kubernetes Cluster",
                description: "Deploy a multi-replica application onto a local Kubernetes cluster (Minikube/K3s) with ClusterIP and NodePort Service routing.",
                difficulty: "intermediate",
                skillSlugs: ["docker", "linux-basics"],
              },
            ],
            interviewTopics: [
              "Kubernetes Control Plane architecture and roles of API Server, Etcd, and Scheduler",
              "Kubernetes Service types: ClusterIP vs NodePort vs LoadBalancer vs ExternalName",
              "Pod lifecycle states, liveness and readiness probes, and container restart policies",
            ],
          },
          {
            stepId: "doe-step-k8s-config-ingress",
            title: "Kubernetes Storage, ConfigMaps, Secrets & Ingress Controllers",
            description: "Manage cluster storage and networking: Persistent Volumes (PV/PVC), ConfigMaps, Kubernetes Secrets, NGINX Ingress Controller routing, and TLS certificate termination.",
            order: 1,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["docker", "linux-basics"],
            resources: [
              {
                title: "Kubernetes Ingress Controllers & Routing Guide",
                type: "documentation",
                url: "https://kubernetes.io/docs/concepts/services-networking/ingress/",
              },
            ],
            projects: [
              {
                title: "Ingress-Routed Secure Multi-Tenant Kubernetes Application",
                description: "Configure an NGINX Ingress Controller routing path-based traffic to backend deployments using ConfigMaps and encrypted Kubernetes Secrets.",
                difficulty: "advanced",
                skillSlugs: ["docker", "linux-basics"],
              },
            ],
            interviewTopics: [
              "PersistentVolume (PV) and PersistentVolumeClaim (PVC) binding workflow in Kubernetes",
              "Ingress Controllers vs Kubernetes LoadBalancer Services for HTTP/HTTPS routing",
            ],
          },
          {
            stepId: "doe-step-helm-gitops-sync",
            title: "Helm Package Management & GitOps Cluster Sync (ArgoCD/Flux)",
            description: "Package Kubernetes manifests into Helm charts (templates, values.yaml) and automate continuous deployment using GitOps controllers (ArgoCD or Flux).",
            order: 2,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["docker", "mlops", "git"],
            resources: [
              {
                title: "Helm Package Manager Official Documentation",
                type: "documentation",
                url: "https://helm.sh/docs/",
              },
            ],
            projects: [
              {
                title: "Enterprise Helm Chart Package & ArgoCD GitOps Sync Pipeline",
                description: "Create a custom Helm chart for a microservice and set up an ArgoCD application synchronizing cluster state automatically from a Git repository.",
                difficulty: "advanced",
                skillSlugs: ["docker", "mlops", "git"],
              },
            ],
            interviewTopics: [
              "Helm Templating engine: values.yaml, Chart.yaml, and release revision rollbacks",
              "Automated GitOps drift detection and cluster reconciliation using ArgoCD",
            ],
          },
        ],
      },
      {
        phaseId: "doe-phase-7-observability-monitoring-logging",
        title: "Phase 7: System Observability, Centralized Logging, Monitoring & Alerting",
        description: "Implement end-to-end production observability: collecting metrics with Prometheus, visualizing dashboards with Grafana, aggregating logs with Loki, and configuring Alertmanager.",
        order: 6,
        steps: [
          {
            stepId: "doe-step-prometheus-metrics",
            title: "Metrics Collection, Timeseries Data & Prometheus Monitoring",
            description: "Understand observability pillars (Metrics, Logs, Traces), Prometheus architecture (scrape targets, pull model), PromQL query language, and exporters (node-exporter).",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["rest-api", "linux-basics"],
            resources: [
              {
                title: "Prometheus Official Documentation & Overview",
                type: "documentation",
                url: "https://prometheus.io/docs/introduction/overview/",
              },
            ],
            projects: [
              {
                title: "Prometheus Metrics Exporter & Monitoring Pipeline Setup",
                description: "Deploy Prometheus scraping system metrics from Node Exporter and custom application endpoints using PromQL queries.",
                difficulty: "intermediate",
                skillSlugs: ["rest-api", "linux-basics"],
              },
            ],
            interviewTopics: [
              "The three pillars of Observability: Metrics vs Logs vs Distributed Tracing",
              "Prometheus Pull vs Push metric collection model and PromQL metric types (Counter, Gauge, Histogram)",
            ],
          },
          {
            stepId: "doe-step-grafana-dashboards",
            title: "Dashboard Visualization & Alerting Rules with Grafana",
            description: "Build Grafana monitoring dashboards: data source integration, panel design, PromQL visualizations, Alertmanager routing rules, and notification channels (Slack, PagerDuty).",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["rest-api", "mlops"],
            resources: [
              {
                title: "Grafana Official Documentation & Alerting Guide",
                type: "documentation",
                url: "https://grafana.com/docs/grafana/latest/",
              },
            ],
            projects: [
              {
                title: "Real-Time Infrastructure & Application Observability Dashboard",
                description: "Construct a comprehensive Grafana dashboard displaying CPU, RAM, network traffic, and HTTP status code rates with custom alerting thresholds.",
                difficulty: "intermediate",
                skillSlugs: ["rest-api", "mlops"],
              },
            ],
            interviewTopics: [
              "Designing effective monitoring dashboards without visual clutter or noise",
              "Alertmanager alert routing, grouping, inhibition, and deduplication rules",
            ],
          },
          {
            stepId: "doe-step-logging-tracing-loki",
            title: "Centralized Log Aggregation (Loki/FluentBit) & Distributed Tracing",
            description: "Implement centralized log management using Grafana Loki and FluentBit/Logstash, querying log streams with LogQL, and tracing request propagation.",
            order: 2,
            estimatedHours: 15,
            difficulty: "advanced",
            skillSlugs: ["linux-basics", "mlops"],
            resources: [
              {
                title: "Grafana Loki Official Documentation & LogQL Guide",
                type: "documentation",
                url: "https://grafana.com/docs/loki/latest/",
              },
            ],
            projects: [
              {
                title: "Centralized Log Aggregation Stack with Grafana Loki & FluentBit",
                description: "Deploy FluentBit shipping container logs to Grafana Loki, building LogQL dashboards correlating logs with application error events.",
                difficulty: "advanced",
                skillSlugs: ["linux-basics", "mlops"],
              },
            ],
            interviewTopics: [
              "Grafana Loki log indexing strategy (label indexing) vs Elasticsearch full-text indexing",
              "Log aggregation architectures: Log shippers (FluentBit) vs central log storage",
            ],
          },
        ],
      },
      {
        phaseId: "doe-phase-8-sre-capstone-interview",
        title: "Phase 8: Production Site Reliability Engineering Capstone & DevOps Interview Readiness",
        description: "Apply Site Reliability Engineering (SRE) principles: SLOs, SLIs, Error Budgets, chaos engineering, execute an end-to-end GitOps DevOps capstone, and prepare for system design interviews.",
        order: 7,
        steps: [
          {
            stepId: "doe-step-sre-principles",
            title: "Site Reliability Engineering Principles (SLOs, SLIs, Error Budgets & Chaos Engineering)",
            description: "Study Google SRE methodology: Service Level Indicators (SLIs), Service Level Objectives (SLOs), Error Budgets, toil reduction, blameless post-mortems, and chaos engineering.",
            order: 0,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["mlops", "linux-basics"],
            resources: [
              {
                title: "Google Site Reliability Engineering (SRE) Book",
                type: "documentation",
                url: "https://sre.google/sre-book/table-of-contents/",
              },
            ],
            projects: [
              {
                title: "Production Service Level Objective (SLO) & Error Budget Calculator",
                description: "Build a tool measuring system availability SLIs against defined SLO targets, calculating remaining Error Budgets and triggering deployment freezes when exhausted.",
                difficulty: "advanced",
                skillSlugs: ["mlops", "python"],
              },
            ],
            interviewTopics: [
              "SLI vs SLO vs SLA definitions and how Error Budgets balance feature velocity with stability",
              "Blameless post-mortem culture and root cause analysis (RCA) methodology",
            ],
          },
          {
            stepId: "doe-step-capstone-project",
            title: "End-to-End Automated Enterprise DevOps Capstone",
            description: "Execute the primary capstone project: build an automated production infrastructure and CI/CD GitOps pipeline combining Terraform infrastructure provisioning, GitHub Actions CI, Docker container builds, Helm chart deployment onto Kubernetes, ArgoCD sync, and Prometheus/Grafana observability.",
            order: 1,
            estimatedHours: 25,
            difficulty: "advanced",
            skillSlugs: [
              "linux-basics",
              "git",
              "docker",
              "python",
              "rest-api",
              "mlops",
            ],
            resources: [
              {
                title: "Cloud Native Computing Foundation (CNCF) Landscape Documentation",
                type: "documentation",
                url: "https://landscape.cncf.io/",
              },
            ],
            projects: [
              {
                title: "Full Capstone: Automated Production Infrastructure & CI/CD GitOps Pipeline with Terraform, Kubernetes, Helm, Prometheus & Grafana",
                description: "Provision and deploy an end-to-end production pipeline: provision local cluster infrastructure via Terraform, build containerized microservices via GitHub Actions CI, package Helm charts, sync deployments via ArgoCD, and monitor health with Prometheus and Grafana dashboards.",
                difficulty: "advanced",
                skillSlugs: ["linux-basics", "git", "docker", "mlops", "python", "rest-api"],
              },
            ],
            interviewTopics: [
              "Architecting an end-to-end automated GitOps CI/CD pipeline from code commit to production monitoring",
              "Handling high-availability, disaster recovery, and automated cluster failover in enterprise environments",
            ],
          },
          {
            stepId: "doe-step-interview-readiness",
            title: "DevOps System Design & Technical Interview Readiness",
            description: "Prepare for DevOps technical interviews: infrastructure system design case studies, live shell scripting, Kubernetes troubleshooting, and incident response scenarios.",
            order: 2,
            estimatedHours: 10,
            difficulty: "advanced",
            skillSlugs: ["linux-basics", "docker", "mlops"],
            resources: [
              {
                title: "Tech Interview Handbook: DevOps & Infrastructure Scenarios",
                type: "article",
                url: "https://github.com/yangshun/tech-interview-handbook",
              },
            ],
            projects: [
              {
                title: "DevOps Infrastructure System Design & Incident Response Suite",
                description: "Complete mock technical interviews solving infrastructure system design cases (e.g. designing a global multi-region cluster) and live outage debugging scenarios.",
                difficulty: "advanced",
                skillSlugs: ["linux-basics", "docker", "mlops"],
              },
            ],
            interviewTopics: [
              "Live troubleshooting: Diagnosing a failing Kubernetes Pod (CrashLoopBackOff, OOMKilled)",
              "DevOps Infrastructure System Design: Designing a scalable, resilient deployment pipeline for microservices",
            ],
          },
        ],
      },
    ],
  },
};

module.exports = devopsEngineerCareerData;

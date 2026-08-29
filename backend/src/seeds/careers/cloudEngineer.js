/**
 * Canonical Career Seed Data: Cloud Engineer (Phase C6.8)
 * Comprehensive, production-focused curriculum targeting Cloud Architecture, Virtual Private Cloud (VPC) Networking, Cloud Compute (EC2/VMs), Object & Block Storage (S3/EBS), Managed Relational & NoSQL Databases (RDS/Cloud SQL/DynamoDB), Identity & Access Management (IAM), Security Hardening (KMS/WAF), Infrastructure as Code (Terraform), Serverless Computing (Lambda/Cloud Run), Cloud Financial Management (FinOps), and Multi-Region High Availability Blueprints.
 */
const cloudEngineerCareerData = {
  name: "Cloud Engineer",
  slug: "cloud-engineer",
  category: "devops_cloud",
  shortDescription: "Architect, provision, secure, and operate scalable cloud infrastructure: VPC networking, EC2 compute, S3 storage, RDS/DynamoDB databases, IAM security, Terraform IaC, serverless architecture, FinOps, and multi-region high availability.",
  description: "Cloud Engineers design, deploy, secure, and manage enterprise infrastructure and services natively on public cloud platforms (AWS, Google Cloud, Azure). This career path guides learners through operating system administration, Boto3/SDK cloud automation, Virtual Private Cloud (VPC) subnets and routing, compute virtualization, Application Load Balancers, S3 object storage engineering, managed cloud databases, IAM least-privilege security policies, KMS encryption, Terraform Infrastructure as Code, serverless execution (Lambda/Cloud Run), FinOps cost optimization, and multi-region disaster recovery blueprints.",
  difficulty: "intermediate",
  requiredSkillSlugs: [
    "linux-basics",
    "git",
    "docker",
    "python",
    "rest-api",
    "backend-auth-security",
    "mlops",
  ],
  optionalSkillSlugs: [
    "postgresql",
    "sql-relational-db",
    "node-js",
    "unit-testing-backend",
    "data-modeling",
  ],
  marketMetadata: {
    salaryRange: {
      min: 88000,
      max: 160000,
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
        phaseId: "cle-phase-1-cloud-foundations-cli",
        title: "Phase 1: Cloud & Operating System Foundations, CLI Tools & Python Automation",
        description: "Master Linux cloud server administration, SSH key management, cloud provider CLI tools, and automated cloud resource provisioning using Python SDKs (Boto3/Google Cloud Client).",
        order: 0,
        steps: [
          {
            stepId: "cle-step-linux-cloud-admin",
            title: "Linux Cloud Server Administration, SSH Key Auth & Shell Environments",
            description: "Manage Linux cloud server instances: SSH public/private key authentication, file permissions (chmod, chown), environment variables, system services (systemd), and process monitoring.",
            order: 0,
            estimatedHours: 20,
            difficulty: "beginner",
            skillSlugs: ["linux-basics"],
            resources: [
              {
                title: "Linux System Administration & Cloud Server Guide",
                type: "documentation",
                url: "https://www.gnu.org/software/coreutils/manual/",
              },
            ],
            projects: [
              {
                title: "Automated Linux Cloud Instance Provisioning & Hardening Script",
                description: "Write a Bash script automating SSH key generation, firewall configuration (UFW), user privilege setup, and security updates on a Linux cloud server.",
                difficulty: "beginner",
                skillSlugs: ["linux-basics"],
              },
            ],
            interviewTopics: [
              "SSH Public Key Cryptography: How asymmetric key pairs authenticate remote Linux cloud servers",
              "Managing environment variables, systemd daemons, and security hardening on Linux instances",
            ],
          },
          {
            stepId: "cle-step-cloud-cli-sdk-automation",
            title: "Cloud CLI Tools, Authentication Profiles & Automated Boto3/SDK Scripting",
            description: "Configure AWS/GCP CLI profiles, IAM access keys, credential rotation, and write Python scripts utilizing Boto3 or Google Cloud SDKs to programmatically inspect and manage cloud assets.",
            order: 1,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["python", "rest-api"],
            resources: [
              {
                title: "Boto3 Python SDK Official Documentation",
                type: "documentation",
                url: "https://boto3.amazonaws.com/v1/documentation/api/latest/index.html",
              },
            ],
            projects: [
              {
                title: "Automated Cloud Resource Auditor & Inventory Script",
                description: "Build a Python CLI tool using Boto3 querying cloud APIs to generate reports on active compute instances, unattached storage volumes, and open security groups.",
                difficulty: "intermediate",
                skillSlugs: ["python", "rest-api"],
              },
            ],
            interviewTopics: [
              "Configuring cloud CLI credentials and security risks of hardcoding AWS access keys",
              "Handling API rate limiting, pagination, and exponential backoff in Python cloud SDKs",
            ],
          },
          {
            stepId: "cle-step-git-infra-version-control",
            title: "Git Infrastructure Version Control & Collaborative Cloud Repository Layouts",
            description: "Apply Git version control to cloud infrastructure code: directory structures, environment branching (dev, staging, prod), commit conventions, and repository secret masking.",
            order: 2,
            estimatedHours: 15,
            difficulty: "beginner",
            skillSlugs: ["git"],
            resources: [
              {
                title: "Pro Git Book: Infrastructure Code Versioning Patterns",
                type: "documentation",
                url: "https://git-scm.com/book/en/v2",
              },
            ],
            projects: [
              {
                title: "Enterprise Multi-Environment Infrastructure Repository Layout",
                description: "Structure a modular Git repository enforcing branch protection, commit hooks, and environment isolation for cloud infrastructure code.",
                difficulty: "beginner",
                skillSlugs: ["git"],
              },
            ],
            interviewTopics: [
              "Git branching strategies for managing multi-environment cloud infrastructure repositories",
              "Preventing accidental secret commits using git-secrets and pre-commit scanning tools",
            ],
          },
        ],
      },
      {
        phaseId: "cle-phase-2-networking-vpc-dns",
        title: "Phase 2: Cloud Networking, Virtual Private Clouds (VPC) & DNS Architecture",
        description: "Design isolated Virtual Private Cloud (VPC) topologies: CIDR block subnetting, public vs private subnets, Internet Gateways, NAT Gateways, Security Groups, NACLs, Route 53, and CDNs.",
        order: 1,
        steps: [
          {
            stepId: "cle-step-vpc-networking-subnets",
            title: "VPC Subnetting, Route Tables, Internet & NAT Gateways",
            description: "Design custom VPC networks: IPv4 CIDR allocation, public and private subnet division across Availability Zones, Route Tables, Internet Gateways, and NAT Gateways.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["rest-api", "linux-basics"],
            resources: [
              {
                title: "AWS VPC User Guide & Subnetting Architecture",
                type: "documentation",
                url: "https://docs.aws.amazon.com/vpc/",
              },
            ],
            projects: [
              {
                title: "Multi-AZ Isolated VPC Networking Blueprint",
                description: "Architect a custom VPC with public subnets for load balancers and private subnets for application/database tiers routed through NAT Gateways.",
                difficulty: "intermediate",
                skillSlugs: ["rest-api"],
              },
            ],
            interviewTopics: [
              "Calculating IPv4 CIDR subnet blocks (e.g. /16 vs /24) and reserved IP addresses in cloud VPCs",
              "Public vs Private subnets and routing traffic out through NAT Gateways",
              "VPC peering vs Transit Gateway vs AWS Direct Connect for hybrid enterprise connectivity",
            ],
          },
          {
            stepId: "cle-step-cloud-network-security",
            title: "Cloud Security Groups, Network ACLs (NACLs) & Bastion Hosts",
            description: "Secure VPC network boundaries: Stateful Security Groups (instance-level firewall), Stateless Network ACLs (subnet-level firewall), and secure SSH Bastion Hosts (Jump Boxes).",
            order: 1,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["backend-auth-security", "linux-basics"],
            resources: [
              {
                title: "AWS Network ACLs and Security Groups Comparison Guide",
                type: "documentation",
                url: "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html",
              },
            ],
            projects: [
              {
                title: "Zero-Trust Network Perimeter & Bastion Host Jump Architecture",
                description: "Configure Security Groups and NACLs restricting database access exclusively to application tiers and enabling SSH access via an isolated Bastion Host.",
                difficulty: "intermediate",
                skillSlugs: ["backend-auth-security"],
              },
            ],
            interviewTopics: [
              "Security Groups (Stateful) vs Network ACLs (Stateless): Key functional and operational differences",
              "Designing secure SSH access patterns to private instances without exposing public IP addresses",
            ],
          },
          {
            stepId: "cle-step-dns-cdn-routing",
            title: "Domain Name Systems (DNS), Route 53 / Cloud DNS & Content Delivery Networks (CloudFront/CDN)",
            description: "Manage global domain routing: DNS record types (A, CNAME, ALIAS, MX, TXT), Route 53 routing policies (Weighted, Latency, Failover), and caching static content using CloudFront CDN.",
            order: 2,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["rest-api"],
            resources: [
              {
                title: "AWS Route 53 Official Developer Documentation",
                type: "documentation",
                url: "https://docs.aws.amazon.com/route53/",
              },
            ],
            projects: [
              {
                title: "Global Edge-Accelerated Web Application Distribution Architecture",
                description: "Configure custom domain routing in Route 53 integrated with CloudFront CDN for global HTTPS edge caching and latency-based failover.",
                difficulty: "intermediate",
                skillSlugs: ["rest-api"],
              },
            ],
            interviewTopics: [
              "Route 53 Routing Policies: Simple vs Weighted vs Latency-based vs Geolocation vs Failover",
              "How CloudFront Edge Locations cache static assets and accelerate dynamic API responses",
            ],
          },
        ],
      },
      {
        phaseId: "cle-phase-3-compute-autoscaling-loadbalancing",
        title: "Phase 3: Cloud Compute, Auto Scaling & Elastic Load Balancing",
        description: "Provision and scale cloud virtual machines: EC2 instance families, AMI image templates, Application Load Balancers (ALB), Target Groups, Auto Scaling Groups (ASG), and high availability.",
        order: 2,
        steps: [
          {
            stepId: "cle-step-cloud-compute-vms",
            title: "Cloud Virtual Machines (EC2/Compute Engine) & Custom Image Machine Templates",
            description: "Provision virtual machine compute instances: EC2 instance types (General Purpose, Compute, Memory), EBS root volumes, User Data bootstrap scripts, and creating reusable AMIs.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["linux-basics"],
            resources: [
              {
                title: "Amazon EC2 Official User Guide for Linux Instances",
                type: "documentation",
                url: "https://docs.aws.amazon.com/ec2/",
              },
            ],
            projects: [
              {
                title: "Automated Custom Amazon Machine Image (AMI) Baking Pipeline",
                description: "Write EC2 User Data bootstrap scripts provisioning web servers, packaging them into custom AMIs for rapid compute deployment.",
                difficulty: "intermediate",
                skillSlugs: ["linux-basics"],
              },
            ],
            interviewTopics: [
              "EC2 Instance Purchasing Models: On-Demand vs Reserved Instances vs Savings Plans vs Spot Instances",
              "Using EC2 User Data scripts and Launch Templates to automate VM bootstrapping",
              "EC2 Placement Groups: Cluster vs Spread vs Partition for latency and resiliency optimization",
            ],
          },
          {
            stepId: "cle-step-load-balancing-alb-nlb",
            title: "Elastic Load Balancing (Application ALB & Network NLB) & Health Check Target Groups",
            description: "Distribute incoming traffic using Elastic Load Balancing: Layer 7 Application Load Balancer (ALB) path-based routing, Layer 4 Network Load Balancer (NLB), Target Groups, and health checks.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["rest-api"],
            resources: [
              {
                title: "AWS Elastic Load Balancing User Guide & Architecture",
                type: "documentation",
                url: "https://docs.aws.amazon.com/elasticloadbalancing/",
              },
            ],
            projects: [
              {
                title: "Path-Routed Multi-Target Application Load Balancer Architecture",
                description: "Deploy an Application Load Balancer routing HTTP traffic to distinct target groups based on URL path rules with health check thresholds.",
                difficulty: "intermediate",
                skillSlugs: ["rest-api"],
              },
            ],
            interviewTopics: [
              "Application Load Balancer (Layer 7) vs Network Load Balancer (Layer 4): Selection criteria",
              "How Load Balancer health checks automatically deregister unhealthy compute instances",
            ],
          },
          {
            stepId: "cle-step-autoscaling-high-availability",
            title: "Auto Scaling Groups (ASG), Dynamic Scaling Policies & High Availability Blueprints",
            description: "Configure elastic elasticity using Auto Scaling Groups: Launch Templates, minimum/maximum capacity bounds, target tracking scaling policies (CPU/request count), and multi-AZ resilience.",
            order: 2,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["linux-basics", "rest-api"],
            resources: [
              {
                title: "AWS Auto Scaling User Guide & Scaling Policies",
                type: "documentation",
                url: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html",
              },
            ],
            projects: [
              {
                title: "Highly Available Self-Healing Compute Architecture with Auto Scaling",
                description: "Deploy an EC2 Auto Scaling Group behind an ALB spanning multiple Availability Zones with CPU-based scaling policies and automated instance replacement.",
                difficulty: "intermediate",
                skillSlugs: ["linux-basics"],
              },
            ],
            interviewTopics: [
              "Configuring Auto Scaling target tracking policies to dynamically respond to traffic spikes",
              "Designing self-healing compute infrastructure spanning multiple Availability Zones",
            ],
          },
        ],
      },
      {
        phaseId: "cle-phase-4-cloud-storage-archival",
        title: "Phase 4: Cloud Storage Systems, Object Storage & Data Archival Architecture",
        description: "Engineer cloud storage solutions: S3 object storage buckets, bucket policies, lifecycle rules, EBS block volumes, EFS network file systems, KMS encryption, and Glacier cold archival.",
        order: 3,
        steps: [
          {
            stepId: "cle-step-object-storage-s3",
            title: "Object Storage Engineering (S3 / Cloud Storage), Bucket Policies & Lifecycle Rules",
            description: "Master object storage fundamentals: Amazon S3 buckets, object key hierarchies, storage classes (Standard, Intelligent-Tiering, Glacier), versioning, CORS, and bucket access policies.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["rest-api"],
            resources: [
              {
                title: "Amazon S3 User Guide & Storage Classes Architecture",
                type: "documentation",
                url: "https://docs.aws.amazon.com/s3/",
              },
            ],
            projects: [
              {
                title: "Secure Enterprise S3 Data Lake & Automated Lifecycle Archival System",
                description: "Create an S3 bucket hierarchy configured with versioning, Block Public Access rules, bucket policy restrictions, and automated transition to Glacier cold storage.",
                difficulty: "intermediate",
                skillSlugs: ["rest-api"],
              },
            ],
            interviewTopics: [
              "Amazon S3 Storage Classes: Trade-offs between Standard, Infrequent Access, and Glacier Archival",
              "Writing JSON S3 Bucket Policies to enforce encrypted uploads and restricted principal access",
            ],
          },
          {
            stepId: "cle-step-block-file-storage",
            title: "Block Storage (EBS/Persistent Disk), File Systems (EFS/Filestore) & Snapshot Management",
            description: "Provision block and file storage: EBS volume types (gp3, io2), attaching volumes to EC2 instances, automated EBS snapshot backups, and shared Elastic File System (EFS) mounts.",
            order: 1,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["linux-basics"],
            resources: [
              {
                title: "Amazon EBS User Guide & EBS Volume Types",
                type: "documentation",
                url: "https://docs.aws.amazon.com/ebs/",
              },
            ],
            projects: [
              {
                title: "Shared Network Storage System & Automated EBS Snapshot Manager",
                description: "Mount an EFS network file system across multiple web servers and build a Python script creating automated scheduled EBS volume snapshots.",
                difficulty: "intermediate",
                skillSlugs: ["linux-basics", "python"],
              },
            ],
            interviewTopics: [
              "Block Storage (EBS) vs Object Storage (S3) vs Network File Storage (EFS): Architectural selection",
              "EBS Volume IOPS and Throughput tuning (gp3 vs io2 Provisioned IOPS)",
            ],
          },
          {
            stepId: "cle-step-storage-replication-kms",
            title: "Cross-Region Data Replication, Storage Encryption (KMS) & Cold Glacier Archival",
            description: "Secure and replicate data globally: S3 Cross-Region Replication (CRR), customer managed keys in Key Management Service (KMS), server-side encryption (SSE-KMS), and Glacier Vault Locks.",
            order: 2,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["backend-auth-security", "rest-api"],
            resources: [
              {
                title: "AWS Key Management Service (KMS) Developer Guide",
                type: "documentation",
                url: "https://docs.aws.amazon.com/kms/",
              },
            ],
            projects: [
              {
                title: "Multi-Region Encrypted Data Vault & Disaster Recovery Replication Engine",
                description: "Implement S3 Cross-Region Replication using custom KMS keys to automatically encrypt and mirror critical application storage to a secondary cloud region.",
                difficulty: "advanced",
                skillSlugs: ["backend-auth-security"],
              },
            ],
            interviewTopics: [
              "Server-Side Encryption options: SSE-S3 vs SSE-KMS vs SSE-C in Amazon S3",
              "Implementing S3 Cross-Region Replication (CRR) for high-availability disaster recovery",
            ],
          },
        ],
      },
      {
        phaseId: "cle-phase-5-cloud-databases-data-tier",
        title: "Phase 5: Managed Cloud Databases & Data Tier Infrastructure",
        description: "Deploy managed database infrastructure: relational databases (RDS/Cloud SQL), Multi-AZ failover, read replicas, NoSQL databases (DynamoDB), in-memory caching (ElastiCache/Redis), and backups.",
        order: 4,
        steps: [
          {
            stepId: "cle-step-cloud-relational-db",
            title: "Relational Database Provisioning (RDS / Cloud SQL) & High-Availability Multi-AZ Failover",
            description: "Deploy managed relational databases: Amazon RDS PostgreSQL/MySQL, DB Parameter Groups, Subnet Groups, Multi-AZ synchronous replication failover, and Read Replicas.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["postgresql", "sql-relational-db"],
            resources: [
              {
                title: "Amazon RDS User Guide & Multi-AZ Deployment Architecture",
                type: "documentation",
                url: "https://docs.aws.amazon.com/rds/",
              },
            ],
            projects: [
              {
                title: "High-Availability Multi-AZ Managed PostgreSQL Database Cluster",
                description: "Provision a multi-AZ Amazon RDS PostgreSQL database with automated failover standby instances, private subnet isolation, and Read Replicas.",
                difficulty: "intermediate",
                skillSlugs: ["postgresql", "sql-relational-db"],
              },
            ],
            interviewTopics: [
              "Amazon RDS Multi-AZ synchronous replication vs Read Replica asynchronous replication",
              "Securing database endpoints within private subnets with Security Group restrictions",
            ],
          },
          {
            stepId: "cle-step-cloud-nosql-dynamodb",
            title: "NoSQL Cloud Database Management (DynamoDB / Firestore) & Read Replicas",
            description: "Architect managed NoSQL data stores: Amazon DynamoDB tables, partition keys, sort keys, Global Secondary Indexes (GSI), provisioned vs on-demand capacity, and Global Tables.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["data-modeling", "rest-api"],
            resources: [
              {
                title: "Amazon DynamoDB Developer Guide & Data Modeling",
                type: "documentation",
                url: "https://docs.aws.amazon.com/dynamodb/",
              },
            ],
            projects: [
              {
                title: "Scalable NoSQL Document & State Store with Global Secondary Indexes",
                description: "Design a DynamoDB data model with partition/sort key schemes, GSIs, and auto-scaling read/write capacity units for high-throughput session state.",
                difficulty: "intermediate",
                skillSlugs: ["data-modeling"],
              },
            ],
            interviewTopics: [
              "DynamoDB Single-Table Design principles and partition key cardinality optimization",
              "On-Demand vs Provisioned throughput capacity modes in Amazon DynamoDB",
            ],
          },
          {
            stepId: "cle-step-database-caching-backups",
            title: "Database In-Memory Caching (ElastiCache / Redis) & Automated Backup Recovery",
            description: "Accelerate data tier performance and resilience: Amazon ElastiCache Redis clusters, cache eviction policies, automated point-in-time database snapshots, and backup restore testing.",
            order: 2,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["postgresql", "rest-api"],
            resources: [
              {
                title: "Amazon ElastiCache User Guide for Redis",
                type: "documentation",
                url: "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.html",
              },
            ],
            projects: [
              {
                title: "In-Memory Redis Caching Tier & Automated Point-in-Time Database Recovery Suite",
                description: "Integrate an ElastiCache Redis cluster into a web tier and automate point-in-time restoration testing for PostgreSQL database snapshots.",
                difficulty: "intermediate",
                skillSlugs: ["postgresql"],
              },
            ],
            interviewTopics: [
              "Caching Strategies: Lazy loading (Cache-Aside) vs Write-Through caching patterns",
              "Database Point-in-Time Recovery (PITR) mechanics using continuous transaction log archiving",
            ],
          },
        ],
      },
      {
        phaseId: "cle-phase-6-iam-security-compliance",
        title: "Phase 6: Identity and Access Management (IAM), Cloud Security & Compliance",
        description: "Enforce cloud security governance: IAM policies, roles, least privilege, KMS encryption keys, Certificate Manager TLS certificates, WAF, GuardDuty, and compliance auditing.",
        order: 5,
        steps: [
          {
            stepId: "cle-step-iam-policies-least-privilege",
            title: "IAM Identity Policies, Roles, Least Privilege & Cross-Account Access",
            description: "Implement cloud access control: IAM Users, Groups, Roles, Managed vs Inline Policies, JSON policy syntax (Effect, Principal, Action, Resource, Condition), and IAM Service Roles.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["backend-auth-security"],
            resources: [
              {
                title: "AWS Identity and Access Management (IAM) User Guide",
                type: "documentation",
                url: "https://docs.aws.amazon.com/iam/",
              },
            ],
            projects: [
              {
                title: "Least-Privilege Enterprise IAM Role & Policy Governance Framework",
                description: "Design custom JSON IAM policies enforcing strict least-privilege permissions and assume-role delegation for developers and compute services.",
                difficulty: "intermediate",
                skillSlugs: ["backend-auth-security"],
              },
            ],
            interviewTopics: [
              "IAM Policy Evaluation Logic: Explicit Deny vs Explicit Allow vs Implicit Deny",
              "IAM Roles vs IAM Users: Why EC2 instances and Lambda functions must use Service Roles",
            ],
          },
          {
            stepId: "cle-step-cloud-encryption-kms-tls",
            title: "Cloud Encryption at Rest & in Transit (KMS, Certificate Manager, TLS)",
            description: "Implement cloud encryption standards: KMS symmetric and asymmetric keys, key rotation, AWS Certificate Manager (ACM) SSL/TLS certificate provisioning, and HTTPS termination.",
            order: 1,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["backend-auth-security"],
            resources: [
              {
                title: "AWS Certificate Manager (ACM) User Guide",
                type: "documentation",
                url: "https://docs.aws.amazon.com/acm/",
              },
            ],
            projects: [
              {
                title: "End-to-End Encrypted Cloud Infrastructure with ACM TLS Termination",
                description: "Provision ACM public SSL/TLS certificates and configure ALB HTTPS listeners with customer-managed KMS key encryption for data at rest.",
                difficulty: "advanced",
                skillSlugs: ["backend-auth-security"],
              },
            ],
            interviewTopics: [
              "Envelope Encryption mechanics using KMS Master Keys and Data Encryption Keys (DEKs)",
              "Provisioning and auto-renewing SSL/TLS certificates using AWS Certificate Manager",
            ],
          },
          {
            stepId: "cle-step-cloud-security-auditing-waf",
            title: "Cloud Security Auditing, Compliance Frameworks (WAF, GuardDuty, Security Hub)",
            description: "Protect cloud applications against threats: AWS Web Application Firewall (WAF) rule groups (SQLi/XSS protection), AWS GuardDuty threat detection, CloudTrail logging, and Security Hub.",
            order: 2,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["backend-auth-security", "linux-basics"],
            resources: [
              {
                title: "AWS Web Application Firewall (WAF) Developer Guide",
                type: "documentation",
                url: "https://docs.aws.amazon.com/waf/",
              },
              {
                title: "AWS CloudTrail User Guide for API Activity Tracking",
                type: "documentation",
                url: "https://docs.aws.amazon.com/cloudtrail/",
              },
            ],
            projects: [
              {
                title: "WAF Protection & Threat Detection Monitoring Architecture",
                description: "Deploy AWS WAF rules shielding an ALB against OWASP Top 10 web vulnerabilities and aggregate CloudTrail security audit logs into an S3 bucket.",
                difficulty: "advanced",
                skillSlugs: ["backend-auth-security"],
              },
            ],
            interviewTopics: [
              "AWS WAF Rule Groups: Defending web applications against SQL Injection, XSS, and rate-based DDoS attacks",
              "Auditing cloud API actions and user activity using AWS CloudTrail logs",
            ],
          },
        ],
      },
      {
        phaseId: "cle-phase-7-iac-serverless-cloud-services",
        title: "Phase 7: Infrastructure as Code (IaC) & Serverless Cloud Microservices",
        description: "Provision cloud environments programmatically using HashiCorp Terraform IaC modules, AWS Lambda serverless execution, API Gateway, and containerized Cloud Run / ECS services.",
        order: 6,
        steps: [
          {
            stepId: "cle-step-terraform-cloud-provisioning",
            title: "Declarative Cloud Infrastructure Provisioning with Terraform & Remote State Backends",
            description: "Build reusable Terraform IaC modules: HCL syntax, AWS/GCP provider resources, input variables, outputs, remote S3 state backends, state locking with DynamoDB, and terraform plan/apply pipelines.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["mlops", "linux-basics"],
            resources: [
              {
                title: "HashiCorp Terraform AWS Provider Documentation",
                type: "documentation",
                url: "https://registry.terraform.io/providers/hashicorp/aws/latest/docs",
              },
            ],
            projects: [
              {
                title: "Production Modular AWS Cloud Infrastructure Terraform Suite",
                description: "Author modular Terraform code provisioning VPC, subnets, EC2 instances, and RDS databases backed by remote S3 state storage and DynamoDB locking.",
                difficulty: "intermediate",
                skillSlugs: ["mlops"],
              },
            ],
            interviewTopics: [
              "Terraform Module Architecture: Input variables, local values, output exports, and provider inheritance",
              "Managing multi-environment Terraform state files safely with S3 remote backends and state locks",
            ],
          },
          {
            stepId: "cle-step-serverless-compute-lambda",
            title: "Serverless Compute Architecture (AWS Lambda / Cloud Functions / Cloud Run) & Event Triggers",
            description: "Develop serverless applications: AWS Lambda function authoring, event source mappings (S3 upload triggers, DynamoDB Streams), API Gateway HTTP endpoints, and execution limits.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["python", "rest-api"],
            resources: [
              {
                title: "AWS Lambda Developer Guide & Serverless Architecture",
                type: "documentation",
                url: "https://docs.aws.amazon.com/lambda/",
              },
              {
                title: "Amazon API Gateway Developer Guide",
                type: "documentation",
                url: "https://docs.aws.amazon.com/apigateway/",
              },
            ],
            projects: [
              {
                title: "Event-Driven Serverless Data Processing Pipeline",
                description: "Build an event-driven serverless pipeline executing Python Lambda functions triggered by S3 image uploads, writing metadata to DynamoDB behind API Gateway.",
                difficulty: "intermediate",
                skillSlugs: ["python", "rest-api"],
              },
            ],
            interviewTopics: [
              "Serverless Cold Starts: Causes, performance impact, and mitigation using Provisioned Concurrency",
              "Integrating Amazon API Gateway HTTP endpoints with AWS Lambda backend functions",
            ],
          },
          {
            stepId: "cle-step-containerized-cloud-services",
            title: "Containerized Microservices in the Cloud (ECS / EKS / Cloud Run Managed Containers)",
            description: "Deploy containerized applications to managed cloud services: Amazon Elastic Container Service (ECS Fargate), ECR container registry, Task Definitions, and Kubernetes EKS clusters.",
            order: 2,
            estimatedHours: 20,
            difficulty: "advanced",
            skillSlugs: ["docker", "mlops"],
            resources: [
              {
                title: "Amazon ECS Developer Guide & AWS Fargate Serverless Compute",
                type: "documentation",
                url: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html",
              },
            ],
            projects: [
              {
                title: "Serverless Container Microservice Stack on AWS ECS Fargate",
                description: "Package a Python web application into Docker images pushed to ECR, deploying serverless container tasks on ECS Fargate integrated with an Application Load Balancer.",
                difficulty: "advanced",
                skillSlugs: ["docker", "mlops"],
              },
            ],
            interviewTopics: [
              "AWS ECS Launch Types: EC2 Instances vs AWS Fargate serverless containers",
              "Creating ECS Task Definitions, Service auto-scaling rules, and target group bindings",
            ],
          },
        ],
      },
      {
        phaseId: "cle-phase-8-finops-observability-capstone",
        title: "Phase 8: Cloud Financial Management (FinOps), Observability, Resilience & Primary Capstone",
        description: "Optimize cloud cost governance (FinOps), configure CloudWatch observability, design multi-region disaster recovery blueprints, complete the primary enterprise capstone, and prepare for system design interviews.",
        order: 7,
        steps: [
          {
            stepId: "cle-step-cloud-finops-cost-optimization",
            title: "Cloud Financial Optimization (FinOps), Cost Explorer, Reserved Instances & Savings Plans",
            description: "Implement Cloud Financial Management (FinOps): AWS Cost Explorer, Budgets, cost allocation tags, Spot Instances, Rightsizing underutilized resources, and Savings Plans optimization.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["mlops", "python"],
            resources: [
              {
                title: "AWS Cost Management & FinOps Framework Documentation",
                type: "documentation",
                url: "https://docs.aws.amazon.com/cost-management/",
              },
            ],
            projects: [
              {
                title: "Automated Cloud Cost Optimization Engine & Unused Asset Cleanup Tool",
                description: "Develop a Python Lambda script analyzing AWS Cost Explorer metrics to identify idle EC2 instances, unattached EBS volumes, and unreferenced elastic IPs with Slack budget alerts.",
                difficulty: "intermediate",
                skillSlugs: ["python", "mlops"],
              },
            ],
            interviewTopics: [
              "FinOps Best Practices: Cost allocation tags, resource rightsizing, and Savings Plans vs Reserved Instances",
              "Strategies for identifying and automatically terminating orphaned cloud resources",
            ],
          },
          {
            stepId: "cle-step-cloud-capstone-project",
            title: "End-to-End Enterprise Cloud Architecture Capstone",
            description: "Execute the primary capstone project: build an end-to-end multi-tier production cloud infrastructure using Terraform IaC, deploying a multi-AZ VPC, ALB load balancers, EC2 Auto Scaling, RDS PostgreSQL Multi-AZ databases, S3 storage, WAF rules, CloudWatch alarms, and ACM TLS encryption.",
            order: 1,
            estimatedHours: 25,
            difficulty: "advanced",
            skillSlugs: [
              "linux-basics",
              "git",
              "docker",
              "python",
              "rest-api",
              "backend-auth-security",
              "mlops",
            ],
            resources: [
              {
                title: "AWS Well-Architected Framework: Reliability and Performance Efficiency Pillars",
                type: "documentation",
                url: "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html",
              },
            ],
            projects: [
              {
                title: "Full Capstone: Multi-Region Production Enterprise Cloud Infrastructure Blueprint with Terraform, VPC, ALB, EC2 ASG, RDS Multi-AZ & FinOps Monitoring",
                description: "Provision a multi-region production cloud architecture via Terraform: multi-AZ isolated VPCs, Application Load Balancers, self-healing EC2 Auto Scaling, RDS PostgreSQL Multi-AZ clusters, KMS-encrypted S3 data replication, CloudWatch observability dashboards, and FinOps budget controls.",
                difficulty: "advanced",
                skillSlugs: [
                  "linux-basics",
                  "git",
                  "docker",
                  "python",
                  "rest-api",
                  "backend-auth-security",
                  "mlops",
                ],
              },
            ],
            interviewTopics: [
              "Architecting resilient cloud applications conforming to the AWS Well-Architected Framework pillars",
              "Multi-region disaster recovery strategies: Active-Passive vs Active-Active failover architectures",
            ],
          },
          {
            stepId: "cle-step-cloud-interview-readiness",
            title: "Cloud Engineering System Design & Technical Interview Readiness",
            description: "Prepare for Cloud Engineering technical interviews: cloud system design scenarios (e.g. designing a high-availability video streaming network), AWS architectural trade-off analysis, live CLI troubleshooting, and incident recovery.",
            order: 2,
            estimatedHours: 15,
            difficulty: "advanced",
            skillSlugs: ["linux-basics", "rest-api", "backend-auth-security"],
            resources: [
              {
                title: "Tech Interview Handbook: Cloud System Design Scenarios",
                type: "article",
                url: "https://github.com/yangshun/tech-interview-handbook",
              },
            ],
            projects: [
              {
                title: "Cloud Infrastructure System Design & Disaster Recovery Incident Suite",
                description: "Complete mock technical interviews designing cloud infrastructure blueprints (e.g. multi-region web platform) and debugging live cloud service outage scenarios.",
                difficulty: "advanced",
                skillSlugs: ["linux-basics", "rest-api", "backend-auth-security"],
              },
            ],
            interviewTopics: [
              "Cloud System Design: Designing a resilient, auto-scaling web application serving millions of global users",
              "Diagnosing cloud infrastructure failures: VPC routing issues, IAM access denied errors, and database connection limits",
            ],
          },
        ],
      },
    ],
  },
};

module.exports = cloudEngineerCareerData;

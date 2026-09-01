/**
 * Canonical Career Seed Data: Cybersecurity Analyst (Phase C6.9)
 * Comprehensive, beginner-to-job-ready defensive security curriculum targeting Security Operations Center (SOC) workflows, SIEM log analysis (Wazuh/Elastic Security), network packet inspection (Wireshark/Nmap), vulnerability assessment (CVE/CVSS/NVD), threat detection (Sigma/YARA), incident response playbooks (NIST SP 800-61), threat intelligence (MITRE ATT&CK), OWASP web security, and system hardening.
 */
const cybersecurityAnalystCareerData = {
  name: "Cybersecurity Analyst",
  slug: "cybersecurity-analyst",
  category: "cybersecurity",
  shortDescription: "Protect and defend IT infrastructure: SOC security monitoring, SIEM log analysis, network packet inspection, vulnerability assessment, threat detection, incident response, and MITRE ATT&CK mapping.",
  description: "Cybersecurity Analysts defend organizations against cyber threats by monitoring network traffic, inspecting security logs, triaging alerts, identifying vulnerabilities, and executing incident response playbooks. This entry-level career path guides learners through operating system security, network packet analysis with Wireshark and Nmap, SOC workflows, SIEM platform operations (Wazuh/Elastic), threat detection with Sigma rules, vulnerability scanning (CVE/CVSS), OWASP web security, NIST incident response, and MITRE ATT&CK threat intelligence mapping.",
  difficulty: "beginner",
  requiredSkillSlugs: [
    "linux-basics",
    "python",
    "backend-auth-security",
    "rest-api",
  ],
  optionalSkillSlugs: [
    "git",
    "docker",
    "sql-relational-db",
  ],
  marketMetadata: {
    salaryRange: {
      min: 72000,
      max: 125000,
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
        phaseId: "csa-phase-1-foundations-linux-security",
        title: "Phase 1: Cybersecurity Fundamentals, Operating System Security & Linux CLI",
        description: "Master foundational cybersecurity principles (CIA triad, threat models), Linux operating system security administration, SSH hardening, user privilege management, and security automation scripting with Python.",
        order: 0,
        steps: [
          {
            stepId: "csa-step-sec-foundations-linux",
            title: "Security Principles, CIA Triad, Threat Actors & Linux Security Admin",
            description: "Study security fundamentals: Confidentiality, Integrity, Availability (CIA Triad), threat actor classifications, defense-in-depth, and basic Linux terminal security administration.",
            order: 0,
            estimatedHours: 15,
            difficulty: "beginner",
            skillSlugs: ["linux-basics"],
            resources: [
              {
                title: "NIST Computer Security Resource Center: Security Fundamentals",
                type: "documentation",
                url: "https://csrc.nist.gov/",
              },
            ],
            projects: [
              {
                title: "Linux Security Hardening & Audit Script",
                description: "Write a Bash script auditing user accounts, password aging policies, SSH configuration parameters, and open ports on a Linux server.",
                difficulty: "beginner",
                skillSlugs: ["linux-basics"],
              },
            ],
            interviewTopics: [
              "The CIA Triad (Confidentiality, Integrity, Availability) and real-world trade-offs in security operations",
              "Defense-in-depth architecture: Layered security controls across network, endpoint, application, and data tiers",
              "Defense-in-depth security principles: Aligning technical, administrative, and physical controls",
            ],
          },
          {
            stepId: "csa-step-linux-permissions-privileges",
            title: "Linux File System Permissions, User Privileges & Access Controls",
            description: "Manage Linux access controls: file permission modes (chmod), ownership (chown), umask settings, sudoer access restrictions, SUID/SGID risk analysis, and account locking.",
            order: 1,
            estimatedHours: 15,
            difficulty: "beginner",
            skillSlugs: ["linux-basics"],
            resources: [
              {
                title: "GNU Coreutils Manual: Linux File Permissions & Privileges",
                type: "documentation",
                url: "https://www.gnu.org/software/coreutils/manual/",
              },
            ],
            projects: [
              {
                title: "System User Privilege & File Access Permission Auditor",
                description: "Build a tool scanning a Linux file system for misconfigured SUID/SGID binaries, world-writable sensitive files, and unassigned file ownerships.",
                difficulty: "beginner",
                skillSlugs: ["linux-basics"],
              },
            ],
            interviewTopics: [
              "Linux File Permissions: Interpreting numeric vs symbolic modes and security risks of world-writable files",
              "SUID and SGID bits: Purpose, security risks, and identifying privilege escalation vulnerabilities",
            ],
          },
          {
            stepId: "csa-step-sec-automation-python",
            title: "Bash & Python Automation for Security Operations Scripting",
            description: "Automate security tasks using Python and Bash: string parsing, regular expressions (re), file handling, HTTP requests, and automating security check suites.",
            order: 2,
            estimatedHours: 15,
            difficulty: "beginner",
            skillSlugs: ["python", "linux-basics"],
            resources: [
              {
                title: "Python 3 Official Documentation: Standard Library",
                type: "documentation",
                url: "https://docs.python.org/3/",
              },
            ],
            projects: [
              {
                title: "Automated Security Compliance Checker Script",
                description: "Develop a Python script checking system configuration against a security baseline checklist and generating an automated pass/fail report.",
                difficulty: "beginner",
                skillSlugs: ["python"],
              },
            ],
            interviewTopics: [
              "Automating repetitive security operations tasks using Python standard library modules",
              "Using Regular Expressions (regex) in Python for log parsing and indicator pattern matching",
            ],
          },
        ],
      },
      {
        phaseId: "csa-phase-2-networking-protocols-reconnaissance",
        title: "Phase 2: Computer Networking, Protocols & Network Security Operations",
        description: "Understand computer networking mechanics for security analysts: TCP/IP model, OSI layers, DNS, HTTP/HTTPS, ARP, port scanning with Nmap, and packet inspection using Wireshark.",
        order: 1,
        steps: [
          {
            stepId: "csa-step-networking-tcpip-packet-analysis",
            title: "TCP/IP Model, OSI Layers, Subnetting & Network Packet Analysis",
            description: "Study network fundamentals for security: OSI 7-layer model, TCP/IP stack, IP addressing, subnetting, TCP 3-way handshake, UDP vs TCP, and common protocol ports.",
            order: 0,
            estimatedHours: 20,
            difficulty: "beginner",
            skillSlugs: ["rest-api", "linux-basics"],
            resources: [
              {
                title: "Internet Engineering Task Force (IETF) Networking RFC Standards",
                type: "documentation",
                url: "https://www.ietf.org/",
              },
            ],
            projects: [
              {
                title: "Network Protocol Map & Port Architecture Guide Lab",
                description: "Build a comprehensive network topology document detailing common service ports (22, 53, 80, 443, 3389) and packet flow paths across subnets.",
                difficulty: "beginner",
                skillSlugs: ["rest-api"],
              },
            ],
            interviewTopics: [
              "The TCP 3-Way Handshake (SYN, SYN-ACK, ACK) and connection termination sequence",
              "OSI Model vs TCP/IP Model: Mapping protocols (HTTP, TCP, IP, Ethernet) to layers",
              "Differentiating TCP SYN floods, UDP amplification attacks, and ICMP flood patterns",
            ],
          },
          {
            stepId: "csa-step-network-recon-nmap",
            title: "Network Reconnaissance, Port Scanning & Nmap Analysis",
            description: "Execute network discovery and port scanning with Nmap: SYN stealth scans (-sS), service version detection (-sV), OS detection (-O), NSE scripts, and analyzing scan outputs.",
            order: 1,
            estimatedHours: 15,
            difficulty: "beginner",
            skillSlugs: ["linux-basics"],
            resources: [
              {
                title: "Nmap Network Mapper Official Reference Guide",
                type: "documentation",
                url: "https://nmap.org/book/man.html",
              },
            ],
            projects: [
              {
                title: "Authorized Network Asset Discovery & Open Port Audit",
                description: "Perform authorized Nmap scans against a target lab network, cataloging listening services, OS versions, and identifying unauthorized open ports.",
                difficulty: "beginner",
                skillSlugs: ["linux-basics"],
              },
            ],
            interviewTopics: [
              "Nmap Scan Types: TCP SYN Scan (-sS) vs TCP Connect Scan (-sT) mechanics and detection differences",
              "Differentiating between open, closed, and filtered ports during network scanning",
            ],
          },
          {
            stepId: "csa-step-wireshark-packet-inspection",
            title: "Network Traffic Inspection & Deep Packet Analysis with Wireshark",
            description: "Inspect network traffic using Wireshark and TShark: capture filters, display filters (ip.addr, tcp.port, http), analyzing PCAP files, and identifying anomalous traffic patterns.",
            order: 2,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["rest-api", "linux-basics"],
            resources: [
              {
                title: "Wireshark User Guide & Display Filter Reference",
                type: "documentation",
                url: "https://www.wireshark.org/docs/wsug_html_chunked/",
              },
            ],
            projects: [
              {
                title: "Network PCAP Investigation & Malicious Traffic Forensics Lab",
                description: "Analyze a suspicious PCAP capture file in Wireshark, filtering DNS exfiltration, unencrypted HTTP credentials, and suspicious TCP connections.",
                difficulty: "intermediate",
                skillSlugs: ["rest-api"],
              },
            ],
            interviewTopics: [
              "Wireshark Capture Filters vs Display Filters: Syntax and execution timing differences",
              "Identifying suspicious network behavior: DNS tunneling, ARP spoofing, and port scanning patterns in PCAP data",
            ],
          },
        ],
      },
      {
        phaseId: "csa-phase-3-soc-workflows-logging",
        title: "Phase 3: Security Operations Center (SOC) Workflows, Logging & Audit Systems",
        description: "Master Security Operations Center (SOC) Tier-1 workflows, alert triage, log formats (Syslog, Windows Event Logs, Linux Auditd), log aggregation, and security event analysis.",
        order: 2,
        steps: [
          {
            stepId: "csa-step-soc-workflows-alert-triage",
            title: "SOC Architecture, Alert Lifecycle & Incident Triage Protocols",
            description: "Study SOC team roles (Tier 1, Tier 2, Tier 3), alert lifecycle management, false positive reduction, severity categorization, ticket escalation, and SOC SLAs.",
            order: 0,
            estimatedHours: 15,
            difficulty: "beginner",
            skillSlugs: ["backend-auth-security"],
            resources: [
              {
                title: "CISA Cybersecurity Division: SOC & Incident Management Guides",
                type: "documentation",
                url: "https://www.cisa.gov/topics/cybersecurity-best-practices",
              },
            ],
            projects: [
              {
                title: "SOC Security Alert Triage & Incident Classification Matrix",
                description: "Design a standardized alert triage decision tree and classification matrix for prioritizing high, medium, and low security events.",
                difficulty: "beginner",
                skillSlugs: ["backend-auth-security"],
              },
            ],
            interviewTopics: [
              "SOC Alert Triage: Differentiating between True Positives, False Positives, True Negatives, and False Negatives",
              "Tier 1 SOC Analyst responsibilities during security alert triage and escalation protocols",
            ],
          },
          {
            stepId: "csa-step-system-logging-auditd",
            title: "Centralized System Logging (Syslog, Windows Event Logs, Linux Auditd)",
            description: "Understand operating system event logging: Syslog facilities/severities, Windows Security Event Log IDs (e.g. 4624, 4625, 4672, 4720), and Linux auditd framework.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["linux-basics"],
            resources: [
              {
                title: "Linux Auditd Framework Official Documentation",
                type: "documentation",
                url: "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/securing_networks/auditing-the-system_securing-networks",
              },
            ],
            projects: [
              {
                title: "Linux Auditd Security Logging & Monitoring Configuration Lab",
                description: "Configure Linux auditd rules monitoring changes to /etc/passwd, /etc/shadow, and tracking execution of privilege escalation commands.",
                difficulty: "intermediate",
                skillSlugs: ["linux-basics"],
              },
            ],
            interviewTopics: [
              "Key Windows Event IDs for security analysis: 4624 (Successful Logon), 4625 (Failed Logon), 4720 (User Account Created)",
              "Configuring Syslog severities (Emergency to Debug) and forwarding logs to a central log server",
            ],
          },
          {
            stepId: "csa-step-log-parsing-event-analysis",
            title: "Security Log Parsing, Event Filtering & Log Analysis Scripting",
            description: "Parse and analyze security logs: extracting IP addresses, timestamps, HTTP user-agents, failed login counts, and writing Python scripts to process multi-gigabyte log files.",
            order: 2,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["python", "linux-basics"],
            resources: [
              {
                title: "Elastic Common Schema (ECS) Reference Documentation",
                type: "documentation",
                url: "https://www.elastic.co/guide/en/ecs/current/index.html",
              },
            ],
            projects: [
              {
                title: "Automated Security Log Parser & Brute-Force Detector",
                description: "Build a Python log parsing tool analyzing web and SSH auth logs to detect brute-force attacks and extract attacker IP addresses.",
                difficulty: "intermediate",
                skillSlugs: ["python"],
              },
            ],
            interviewTopics: [
              "Parsing unstructured security log data into structured fields for threat analysis",
              "Calculating threshold baselines to detect brute-force login attempts in authentication logs",
            ],
          },
        ],
      },
      {
        phaseId: "csa-phase-4-siem-detection-analytics",
        title: "Phase 4: SIEM Operations, Event Correlation & Threat Detection",
        description: "Operate Security Information and Event Management (SIEM) systems (Wazuh, Elastic Security), write threat detection rules (Sigma/YARA), and analyze Network Intrusion Detection System (Suricata) alerts.",
        order: 3,
        steps: [
          {
            stepId: "csa-step-siem-wazuh-elastic",
            title: "SIEM Architecture & Multi-Source Log Aggregation (Wazuh / Elastic Security)",
            description: "Study SIEM components: log collectors, indexers, search engines, dashboards, agent deployment (Wazuh Agent / Beats), and building security dashboards.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["backend-auth-security", "linux-basics"],
            resources: [
              {
                title: "Wazuh Open Source Security Platform Documentation",
                type: "documentation",
                url: "https://documentation.wazuh.com/current/index.html",
              },
            ],
            projects: [
              {
                title: "Open-Source SIEM (Wazuh/Elastic) Monitoring Stack Lab",
                description: "Deploy a local Wazuh SIEM stack monitoring a Linux host agent, visualizing login events and file integrity monitoring (FIM) alerts on dashboards.",
                difficulty: "intermediate",
                skillSlugs: ["backend-auth-security"],
              },
            ],
            interviewTopics: [
              "SIEM Architecture: Function of log collection agents, indexers, storage, and alert engines",
              "File Integrity Monitoring (FIM): How SIEM agents detect unauthorized file modifications",
            ],
          },
          {
            stepId: "csa-step-siem-detection-rules-sigma",
            title: "Security Event Correlation & Writing SIEM Detection Rules (Sigma / YARA)",
            description: "Author custom detection rules: Sigma rule format (title, logsource, detection, condition), YARA pattern matching rules for files, and correlating events across log sources.",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["backend-auth-security", "python"],
            resources: [
              {
                title: "Sigma Generic Detection Rule Format Specification",
                type: "documentation",
                url: "https://sigmahq.github.io/",
              },
              {
                title: "YARA Pattern Matching Official Documentation",
                type: "documentation",
                url: "https://yara.readthedocs.io/en/stable/",
              },
            ],
            projects: [
              {
                title: "Custom Sigma & YARA Threat Detection Rule Suite",
                description: "Write Sigma rules detecting suspicious PowerShell execution and YARA rules detecting webshell signature patterns.",
                difficulty: "intermediate",
                skillSlugs: ["backend-auth-security"],
              },
            ],
            interviewTopics: [
              "Sigma Rules: Purpose of vendor-agnostic detection rules and converting Sigma to SIEM queries",
              "YARA Rules: Writing rules with strings, hexadecimal patterns, and boolean conditions",
            ],
          },
          {
            stepId: "csa-step-ids-ips-suricata-alerts",
            title: "Intrusion Detection Systems (IDS/IPS - Suricata/Snort) & Network Alerts",
            description: "Operate Network Intrusion Detection Systems (NIDS): Suricata/Snort signature syntax (action, header, options), analyzing NIDS alerts, and tuning rules to reduce false positives.",
            order: 2,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["rest-api", "linux-basics"],
            resources: [
              {
                title: "Suricata Open Source NIDS User Guide & Rule Documentation",
                type: "documentation",
                url: "https://docs.suricata.io/en/latest/",
              },
            ],
            projects: [
              {
                title: "Network Intrusion Detection System (Suricata) Deployment & Tuning",
                description: "Deploy Suricata NIDS capturing live network traffic, creating custom alert rules for HTTP command injection attempts and inspecting alert output logs.",
                difficulty: "intermediate",
                skillSlugs: ["rest-api"],
              },
            ],
            interviewTopics: [
              "IDS (Intrusion Detection System) vs IPS (Intrusion Prevention System): Inline vs Promiscuous mode deployment",
              "Suricata Rule Anatomy: Action, Protocol, Header, and Option keywords (msg, sid, rev, content)",
            ],
          },
        ],
      },
      {
        phaseId: "csa-phase-5-vulnerability-management-web-security",
        title: "Phase 5: Vulnerability Management & Security Assessment",
        description: "Conduct vulnerability assessments: vulnerability scanning tools, CVE/NVD database research, CVSS v3.1 scoring, system patch management, and OWASP Top 10 web application security auditing.",
        order: 4,
        steps: [
          {
            stepId: "csa-step-vulnerability-scanning-cve",
            title: "Vulnerability Scanning, CVE/NVD Database Auditing & CVSS Scoring",
            description: "Study vulnerability management workflows: CVE identifiers, National Vulnerability Database (NVD), CVSS v3.1 vector strings (AV, AC, PR, UI, S, C, I, A), and vulnerability scanners (OpenVAS/Tenable).",
            order: 0,
            estimatedHours: 20,
            difficulty: "beginner",
            skillSlugs: ["backend-auth-security"],
            resources: [
              {
                title: "NIST National Vulnerability Database (NVD) & CVSS Calculator",
                type: "documentation",
                url: "https://nvd.nist.gov/",
              },
              {
                title: "CVE Program Official Vulnerability Reference",
                type: "documentation",
                url: "https://www.cve.org/",
              },
            ],
            projects: [
              {
                title: "Vulnerability Scan Audit & CVSS Risk Assessment Report",
                description: "Run a vulnerability scan against a target environment, look up identified CVEs in NVD, calculate CVSS scores, and produce a prioritized remediation report.",
                difficulty: "beginner",
                skillSlugs: ["backend-auth-security"],
              },
            ],
            interviewTopics: [
              "CVSS Metrics: Explaining Access Vector (AV), Attack Complexity (AC), and Impact (C/I/A) in CVSS scoring",
              "Vulnerability Scanning vs Penetration Testing: Scope, objective, and execution differences",
            ],
          },
          {
            stepId: "csa-step-system-hardening-compliance",
            title: "System Hardening, Patch Management & Security Compliance Frameworks",
            description: "Apply system hardening baselines (CIS Benchmarks), patch management lifecycles, service minimization, firewall policy configuration, and compliance frameworks (NIST CSF).",
            order: 1,
            estimatedHours: 15,
            difficulty: "beginner",
            skillSlugs: ["linux-basics", "backend-auth-security"],
            resources: [
              {
                title: "Center for Internet Security (CIS) Benchmarks & Controls Guide",
                type: "documentation",
                url: "https://www.cisecurity.org/cis-benchmarks/",
              },
            ],
            projects: [
              {
                title: "CIS Baseline Server Security Hardening Blueprint",
                description: "Apply CIS hardening recommendations to a Linux server: disabling unneeded services, configuring kernel parameters (sysctl), and setting up firewall rules.",
                difficulty: "beginner",
                skillSlugs: ["linux-basics"],
              },
            ],
            interviewTopics: [
              "System Hardening: Minimizing attack surfaces by disabling unused services, ports, and default credentials",
              "Patch Management: Testing, scheduling, and deploying security updates without causing downtime",
            ],
          },
          {
            stepId: "csa-step-web-security-owasp-top10",
            title: "Web Application Security Fundamentals & OWASP Top 10 Assessment",
            description: "Assess web security risks: OWASP Top 10 vulnerabilities (SQL Injection, Cross-Site Scripting XSS, Broken Access Control, CSRF), inspecting HTTP traffic, and remediation strategies.",
            order: 2,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["rest-api", "backend-auth-security"],
            resources: [
              {
                title: "OWASP Top 10 Web Application Security Risks Reference",
                type: "documentation",
                url: "https://owasp.org/www-project-top-ten/",
              },
            ],
            projects: [
              {
                title: "OWASP Top 10 Web Security Audit & Remediation Guide Lab",
                description: "Audit a vulnerable web application lab (Juice Shop / DVWA), identifying SQL Injection and XSS flaws, and documenting defensive code remediations.",
                difficulty: "intermediate",
                skillSlugs: ["rest-api", "backend-auth-security"],
              },
            ],
            interviewTopics: [
              "OWASP Top 10: Explaining SQL Injection (SQLi) and how parameterized queries prevent it",
              "Cross-Site Scripting (XSS): Stored vs Reflected XSS and Content Security Policy (CSP) defenses",
            ],
          },
        ],
      },
      {
        phaseId: "csa-phase-6-incident-response-forensics-intel",
        title: "Phase 6: Incident Response, Digital Investigation & Threat Intelligence",
        description: "Execute incident response procedures: NIST SP 800-61 incident lifecycle, forensic evidence preservation, endpoint triage, indicator of compromise (IOC) extraction, and MITRE ATT&CK mapping.",
        order: 5,
        steps: [
          {
            stepId: "csa-step-incident-response-nist-playbooks",
            title: "Incident Response Lifecycle (PICERL - NIST SP 800-61) & Playbook Execution",
            description: "Study incident response steps: Preparation, Identification, Containment, Eradication, Recovery, and Lessons Learned (PICERL framework) and executing response playbooks.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["backend-auth-security"],
            resources: [
              {
                title: "NIST SP 800-61 Rev. 2: Computer Security Incident Handling Guide",
                type: "documentation",
                url: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final",
              },
            ],
            projects: [
              {
                title: "Ransomware Incident Response Playbook & Simulation Exercise",
                description: "Develop a step-by-step incident response playbook for a malware/ransomware infection scenario, covering isolation, evidence capture, and eradication.",
                difficulty: "intermediate",
                skillSlugs: ["backend-auth-security"],
              },
            ],
            interviewTopics: [
              "NIST SP 800-61 Incident Response Lifecycle phases: Preparation to Lessons Learned",
              "Short-term vs Long-term Containment strategies during an active network intrusion",
            ],
          },
          {
            stepId: "csa-step-endpoint-security-forensics",
            title: "Endpoint Security, Process Triage & Forensic Evidence Collection",
            description: "Perform basic digital forensics and process triage: collecting volatile memory/artifacts, examining running processes, network sockets, persistence mechanisms (registry, cron, startup).",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["linux-basics", "python"],
            resources: [
              {
                title: "SANS Institute Information Security Reading Room & Forensics Guides",
                type: "documentation",
                url: "https://www.sans.org/white-papers/",
              },
            ],
            projects: [
              {
                title: "Compromised Endpoint Memory & File System Forensics Triage Lab",
                description: "Analyze a compromised system image, extracting running process trees, network connections, persistence mechanisms, and creating a forensic timeline.",
                difficulty: "intermediate",
                skillSlugs: ["linux-basics"],
              },
            ],
            interviewTopics: [
              "Chain of Custody in digital forensics and volatile memory (RAM) collection priority",
              "Identifying common persistence mechanisms on Linux (cron, systemd) and Windows (Registry Run keys)",
            ],
          },
          {
            stepId: "csa-step-threat-intel-mitre-attack",
            title: "Cyber Threat Intelligence & MITRE ATT&CK Framework Mapping",
            description: "Apply Cyber Threat Intelligence (CTI): Indicators of Compromise (IOCs - hashes, IPs, domains), Pyramid of Pain, and mapping adversary tactics, techniques, and procedures (TTPs) to MITRE ATT&CK.",
            order: 2,
            estimatedHours: 15,
            difficulty: "intermediate",
            skillSlugs: ["backend-auth-security"],
            resources: [
              {
                title: "MITRE ATT&CK Framework Knowledge Base & Tactic Matrix",
                type: "documentation",
                url: "https://attack.mitre.org/",
              },
            ],
            projects: [
              {
                title: "Threat Intelligence Report & MITRE ATT&CK Adversary Mapping",
                description: "Analyze a published threat intelligence report on an APT group, mapping observed adversary TTPs to the MITRE ATT&CK matrix and extracting actionable IOCs.",
                difficulty: "intermediate",
                skillSlugs: ["backend-auth-security"],
              },
            ],
            interviewTopics: [
              "The Pyramid of Pain (David Bianco): Why indicators like file hashes are easy to change while TTPs are tough for adversaries",
              "MITRE ATT&CK Framework: Explaining Tactics (Why), Techniques (How), and Procedures (Specific implementation)",
            ],
          },
        ],
      },
      {
        phaseId: "csa-phase-7-identity-endpoint-cloud-security",
        title: "Phase 7: Identity, Application, Endpoint & Cloud Security Fundamentals",
        description: "Implement core security controls: Identity and Access Management (IAM), Multi-Factor Authentication (MFA), Endpoint Detection & Response (EDR), and cloud security monitoring.",
        order: 6,
        steps: [
          {
            stepId: "csa-step-iam-auth-mfa-security",
            title: "Identity & Access Management (IAM), Authentication Security & MFA Enforcement",
            description: "Secure identities: Authentication vs Authorization, Role-Based Access Control (RBAC), Least Privilege, Multi-Factor Authentication (MFA/2FA), Single Sign-On (SSO), and OAuth2/OIDC basics.",
            order: 0,
            estimatedHours: 15,
            difficulty: "beginner",
            skillSlugs: ["backend-auth-security"],
            resources: [
              {
                title: "NIST SP 800-63-3: Digital Identity Guidelines",
                type: "documentation",
                url: "https://pages.nist.gov/800-63-3/",
              },
            ],
            projects: [
              {
                title: "Role-Based Access Control (RBAC) & MFA Governance Blueprint",
                description: "Design an enterprise IAM access control policy specifying RBAC roles, least privilege permission boundaries, and mandatory MFA enforcement rules.",
                difficulty: "beginner",
                skillSlugs: ["backend-auth-security"],
              },
            ],
            interviewTopics: [
              "Authentication vs Authorization: Definitions and protocols (OAuth2 vs SAML vs OIDC)",
              "Multi-Factor Authentication (MFA): Something you know, have, and are, and defending against MFA fatigue attacks",
            ],
          },
          {
            stepId: "csa-step-edr-malware-triage",
            title: "Endpoint Detection & Response (EDR Concepts, Antivirus & Malware Triage)",
            description: "Understand endpoint protection: EDR architecture, behavioral telemetry collection, static vs dynamic malware analysis concepts, sandbox execution, and hash lookup (VirusTotal).",
            order: 1,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["backend-auth-security", "python"],
            resources: [
              {
                title: "CISA Endpoint Security Best Practices & Guidance",
                type: "documentation",
                url: "https://www.cisa.gov/resources-tools/",
              },
            ],
            projects: [
              {
                title: "Suspicious File Static Triage & Hash Lookup Automation Tool",
                description: "Build a Python tool extracting file hashes (MD5, SHA256), inspecting file headers, querying VirusTotal API, and generating malware triage summary reports.",
                difficulty: "intermediate",
                skillSlugs: ["python"],
              },
            ],
            interviewTopics: [
              "Traditional Antivirus (Signature-based) vs EDR (Behavioral Telemetry-based): Detection capabilities",
              "Static Analysis vs Dynamic Analysis during initial malware triage",
            ],
          },
          {
            stepId: "csa-step-cloud-security-monitoring-essentials",
            title: "Cloud Security Fundamentals & Security Monitoring in Cloud Environments",
            description: "Study cloud security basics: Shared Responsibility Model (IaaS/PaaS/SaaS), cloud audit logging (AWS CloudTrail, GCP Audit Logs), cloud misconfigurations, and cloud IAM risks.",
            order: 2,
            estimatedHours: 15,
            difficulty: "beginner",
            skillSlugs: ["backend-auth-security", "rest-api"],
            resources: [
              {
                title: "Cloud Security Alliance (CSA) Security Guidance for Cloud Computing",
                type: "documentation",
                url: "https://cloudsecurityalliance.org/research/guidance/",
              },
            ],
            projects: [
              {
                title: "Cloud Infrastructure Security Audit & Log Analysis Lab",
                description: "Analyze simulated AWS CloudTrail logs identifying unauthorized IAM user creation, root login events, and publicly accessible storage buckets.",
                difficulty: "beginner",
                skillSlugs: ["backend-auth-security"],
              },
            ],
            interviewTopics: [
              "The Cloud Shared Responsibility Model: Customer vs Cloud Provider security duties across IaaS, PaaS, and SaaS",
              "Common cloud security misconfigurations: Publicly accessible storage buckets and overly permissive IAM policies",
            ],
          },
        ],
      },
      {
        phaseId: "csa-phase-8-soc-capstone-interview-readiness",
        title: "Phase 8: Security Operations Capstone, Portfolio & Interview Readiness",
        description: "Execute an end-to-end enterprise SOC threat hunting exercise, complete the primary defensive security operations capstone project, and prepare for technical cybersecurity analyst interviews.",
        order: 7,
        steps: [
          {
            stepId: "csa-step-soc-simulation-threat-hunting",
            title: "Enterprise SOC Simulation & Threat Hunting Exercise",
            description: "Execute proactive threat hunting: hypothesis-driven threat hunting, searching SIEM data for anomalous execution, reviewing suspicious outbound connections, and drafting threat hunt reports.",
            order: 0,
            estimatedHours: 20,
            difficulty: "intermediate",
            skillSlugs: ["backend-auth-security", "python"],
            resources: [
              {
                title: "MITRE CAR (Cyber Analytics Repository) Threat Hunting Knowledge Base",
                type: "documentation",
                url: "https://car.mitre.org/",
              },
            ],
            projects: [
              {
                title: "Hypothesis-Driven Threat Hunting Exercise & Report",
                description: "Formulate a threat hunting hypothesis (e.g. undetected persistence via cron), query SIEM event logs, identify anomalous activity, and author a threat hunt summary report.",
                difficulty: "intermediate",
                skillSlugs: ["backend-auth-security"],
              },
            ],
            interviewTopics: [
              "Proactive Threat Hunting vs Reactive Alert Monitoring in a SOC environment",
              "Formulating a Threat Hunt Hypothesis using the MITRE ATT&CK framework",
            ],
          },
          {
            stepId: "csa-step-cybersecurity-capstone-project",
            title: "Primary Capstone: End-to-End Defensive Security Operations & Incident Response Lab",
            description: "Execute the primary capstone project: build and operate an end-to-end security operations lab combining Linux log collection, network traffic capture with Wireshark/Nmap, SIEM log analysis with Wazuh/Elastic, Sigma detection rule writing, vulnerability assessment, and executing a complete incident response report adhering to NIST SP 800-61.",
            order: 1,
            estimatedHours: 25,
            difficulty: "intermediate",
            skillSlugs: [
              "linux-basics",
              "python",
              "backend-auth-security",
              "rest-api",
            ],
            resources: [
              {
                title: "CISA Cyber Incident Response Playbook Specification",
                type: "documentation",
                url: "https://www.cisa.gov/resources-tools/services/cyber-incident-response-playbooks",
              },
            ],
            projects: [
              {
                title: "Full Capstone: End-to-End Defensive Security Operations & Incident Response Lab",
                description: "Construct an end-to-end security operations lab: ingest multi-source logs into a SIEM, detect suspicious network activity, write custom Sigma detection rules, execute vulnerability scans, conduct forensic analysis, and produce an executive Incident Response Report.",
                difficulty: "intermediate",
                skillSlugs: [
                  "linux-basics",
                  "python",
                  "backend-auth-security",
                  "rest-api",
                ],
              },
            ],
            interviewTopics: [
              "Walking an interviewer through an end-to-end incident investigation from alert trigger to containment and post-mortem",
              "Documenting security findings for both technical teams and executive management",
            ],
          },
          {
            stepId: "csa-step-cybersecurity-interview-readiness",
            title: "Cybersecurity Analyst Technical Interview & System Design Readiness",
            description: "Prepare for entry-level Cybersecurity Analyst interviews: answering core technical questions, explaining security concepts simply, analyzing scenario-based incident logs live, and behavioral SOC interview preparation.",
            order: 2,
            estimatedHours: 10,
            difficulty: "beginner",
            skillSlugs: ["linux-basics", "backend-auth-security", "rest-api"],
            resources: [
              {
                title: "Tech Interview Handbook: Security Analyst Interview Questions",
                type: "article",
                url: "https://github.com/yangshun/tech-interview-handbook",
              },
            ],
            projects: [
              {
                title: "Cybersecurity Analyst Technical Interview & Incident Scenario Suite",
                description: "Complete mock technical interviews solving real-world security incident scenarios (e.g. suspected credential theft, phishing investigation) and explaining core defensive concepts.",
                difficulty: "beginner",
                skillSlugs: ["backend-auth-security"],
              },
            ],
            interviewTopics: [
              "How to handle a suspected phishing incident from user report to email gateway domain blocking",
              "Explaining complex security incidents clearly to non-technical stakeholders",
            ],
          },
        ],
      },
    ],
  },
};

module.exports = cybersecurityAnalystCareerData;

export interface ExperienceItem {
  date: string;
  location: string;
  title: string;
  company: string;
  description: string;
  bullets: string[];
  color: string;
}

export const experiences: ExperienceItem[] = [
  {
    date: 'Jul 2025 – Present',
    location: 'Salt Lake City, UT',
    title: 'AI Engineer',
    company: 'Paxel AI',
    description: 'Pharma sales intelligence startup. Building a governed LLM agent and intelligence warehouse that lets pharma sales reps query multi-million-row business data across 10+ domains in plain English, safely.',
    bullets: [
      'Built an intelligence warehouse over a multi-million-row pharmaceutical sales dataset in Aurora PostgreSQL, mapping 10+ business domains (including sales, accounts, contracts, products, GPOs, wholesalers, comp plans, contacts) into one curated, cited knowledge layer: numbered rules per domain, each traced to a data-dictionary section or application source line, validated and compiled by an offline build into a ~60K-token, provider-agnostic doc any service can build AI-native features on without re-modeling the data.',
      'Built the production AI assistant on that layer: a tool-calling agent that turns plain-English rep questions into SQL over their tenant\'s governed data, with service-side entity resolution (8 entity kinds, 5 matching tiers from exact to gated trigram) that binds names as parameters instead of SQL literals.',
      'Deployed the service on AWS ECS Fargate (dynamic task allocation) with Aurora behind RDS Proxy, streaming answers to the rep over Server-Sent Events as the model generates them; the full catalog ships in every prompt, reaching a 98.6% prompt-cache hit rate.',
      'Designed the governed data layer: 17 Postgres views that enforce tenant and per-rep row scoping (rep, director, admin) inside the database and fail closed when session context is missing; the agent\'s database role can read those views and nothing else, with no base-table and no write grant anywhere.',
      'Built the SQL safety gate with Postgres\'s own parser (pglast): only a single SELECT over allowlisted views and functions, bound parameters, an EXPLAIN cost gate, a read-only transaction with a statement timeout, and a post-execution check that discards results if a query tampered with the session\'s scoping settings.',
      'Built the eval harness (80 golden questions, 240 paraphrases, multi-turn journeys and an unseen question set) that grades answers value by value against a recorded baseline: about 90% accuracy across 270 graded turns (answers with no silently wrong number) at a ~5s median response, backed by 890+ offline tests.',
    ],
    color: 'cyan',
  },
  {
    date: 'Jun 2025 – May 2026',
    location: 'Salt Lake City, UT',
    title: 'IT Systems & Security Intern',
    company: 'University of Utah • VP for Research',
    description: 'Securing research infrastructure for a $650M+ annual research enterprise.',
    bullets: [
      'Engineered and automated endpoint management and security workflows using Python and enterprise tools (Microsoft Intune, Tanium, BeyondTrust), improving compliance by 60% across a $650M+ research infrastructure.',
      'Built and optimized scalable device provisioning pipelines (OS imaging, configuration, full-disk encryption), onboarding 70+ endpoints with consistent, policy-compliant deployments.',
      'Diagnosed and resolved system-level, identity, and network issues (Linux, Windows, macOS, TCP/IP, Active Directory, Entra ID), applying root-cause analysis to improve reliability and reduce recurring incidents.',
      'Collaborated across IT and research teams to support distributed systems infrastructure, balancing security, performance, and usability in production environments.',
    ],
    color: 'primary',
  },
  {
    date: 'May 2025 – Aug 2025',
    location: 'Logan, UT (Remote)',
    title: 'AI Software Engineer (Summer\'25 Intern)',
    company: 'AVI Human Services',
    description: 'Built applied GenAI tools used by state administrators.',
    bullets: [
      'Shipped a real-time AI SWOT analytics dashboard (React, Node.js, Gemini Flash 2.0, Docker, AWS) processing 50,000+ student records across 10 agencies, cutting analysis time 75%.',
      'Designed a LangChain pipeline with the Gemini API and vector embeddings for automated curriculum content generation, with a RAG prompt optimization framework that improved relevance by 40%.',
      'Built fault-tolerant REST APIs with Redis caching and tuned MySQL indexes, holding median response times under 200ms under concurrent load.',
      'Added automated alerting and graceful degradation so queries stayed available during partial failures, shipping in an iterative delivery cycle.',
    ],
    color: 'accent',
  },
  {
    date: 'Jul 2023 – Feb 2024',
    location: 'Pune, India',
    title: 'Software Developer Intern',
    company: 'eWarranty Solutions',
    description: '',
    bullets: [
      'Built a QR code warranty verification system (Java, Kotlin, Spring Boot, RESTful APIs), supporting 45,000+ products and reducing manual errors by 30%.',
      'Modeled the analytics pipeline as an async computation graph with Java CompletableFuture chains and a read-optimized MySQL schema, decoupling query latency from write throughput and powering real-time dashboards.',
      'Improved performance via query + architecture tuning and HikariCP pooling, reducing response time 40%.',
    ],
    color: 'blue',
  },
  {
    date: 'May 2022 – Jul 2023',
    location: 'Pune, India',
    title: 'Research Assistant',
    company: 'Research & Innovation Cell • RMD Sinhgad (Savitribai Phule Pune University)',
    description: '',
    bullets: [
      'Supported research methodology design through literature reviews and synthesis.',
      'Trained students on statistical analysis, improving research accuracy by ~60% and contributing to publications and patents.',
      'Helped with survey design, data collection, and analysis for peer-reviewed work.',
    ],
    color: 'slate',
  },
  {
    date: 'Jan 2022 – Jul 2022',
    location: 'Pune, India',
    title: 'Cyber Security Analyst (Intern)',
    company: 'ShellStrong Technologies',
    description: '',
    bullets: [
      'Resolved 7 high-priority digital forensic cases with mitigations like MFA, encryption, and firewall rule hardening.',
      'Ran vulnerability assessments using Nmap, Wireshark, and Metasploit, reducing issues by 30% and improving compliance.',
      'Implemented ISO 27001-aligned InfoSec protocols to reduce risk and improve operational discipline.',
    ],
    color: 'red',
  },
];

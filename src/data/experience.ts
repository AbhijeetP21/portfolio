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
    date: 'Jun 2025 – Present',
    location: 'Salt Lake City, UT',
    title: 'IT Systems & Security Intern',
    company: 'University of Utah • VP for Research',
    description: 'Securing research infrastructure for a $650M+ annual research enterprise.',
    bullets: [
      'Engineered and automated endpoint management and security workflows using Python and enterprise tools (Microsoft Intune, Tanium, BeyondTrust), improving compliance by 60% across a $650M+ research infrastructure.',
      'Built and optimized scalable device provisioning pipelines (OS imaging, configuration, full-disk encryption), onboarding 70+ endpoints with consistent, policy-compliant deployments.',
      'Diagnosed and resolved system-level, identity, and network issues (Windows, macOS, TCP/IP, Active Directory, Entra ID), applying root-cause analysis to improve reliability and reduce recurring incidents.',
      'Collaborated across IT and research teams to support distributed systems infrastructure, balancing security, performance, and usability in production environments.',
    ],
    color: 'primary',
  },
  {
    date: 'May 2025 – Aug 2025',
    location: 'Remote, USA',
    title: 'AI Software Engineer (Summer\'25 Intern)',
    company: 'AVI Human Services',
    description: 'Built applied GenAI tools used by state administrators.',
    bullets: [
      'Shipped a real-time AI SWOT analytics dashboard (React, Node.js, Gemini Flash 2.0, Docker, AWS) processing 50,000+ student records across 10 agencies, cutting analysis time 75%.',
      'Designed a RAG prompt optimization framework for curriculum generation, improving relevance by 40%.',
      'Built REST APIs with Redis caching and MySQL tuning to keep sub-200ms responses under concurrent workloads.',
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
      'Built a QR code warranty verification system (Java, Spring Boot, REST), supporting 45,000+ products and reducing manual errors by 30%.',
      'Implemented real-time analytics with async data retrieval (CompletableFuture) and MySQL-backed dashboards.',
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

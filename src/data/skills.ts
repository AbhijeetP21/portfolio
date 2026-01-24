export interface SkillCategory {
  title: string;
  items: {
    name: string;
    icon: string;
    iconColor: string;
  }[];
}

export const skills: SkillCategory[] = [
  {
    title: 'Programming',
    items: [
      { name: 'Java', icon: 'fa-java', iconColor: 'text-primary-500' },
      { name: 'Python', icon: 'fa-python', iconColor: 'text-yellow-500' },
      { name: 'C++', icon: 'fa-code', iconColor: 'text-blue-500' },
      { name: 'Kotlin', icon: 'fa-code', iconColor: 'text-purple-500' },
      { name: 'JavaScript / TypeScript', icon: 'fa-js', iconColor: 'text-yellow-400' },
      { name: 'HTML / CSS / SCSS / Tailwind', icon: 'fa-file-code', iconColor: 'text-slate-500' },
    ],
  },
  {
    title: 'Backend / Cloud',
    items: [
      { name: 'AWS (EC2/S3/Lambda)', icon: 'fa-aws', iconColor: 'text-orange-500' },
      { name: 'Docker / Kubernetes', icon: 'fa-docker', iconColor: 'text-blue-500' },
      { name: 'CI/CD (GitHub Actions)', icon: 'fa-code-branch', iconColor: 'text-slate-600' },
      { name: 'Spring Boot', icon: 'fa-leaf', iconColor: 'text-green-600' },
      { name: 'Node.js / Express.js', icon: 'fa-node', iconColor: 'text-green-600' },
      { name: 'MySQL / MongoDB / PostgreSQL', icon: 'fa-database', iconColor: 'text-blue-500' },
    ],
  },
  {
    title: 'AI / ML',
    items: [
      { name: 'PyTorch / TensorFlow', icon: 'fa-brain', iconColor: 'text-accent-500' },
      { name: 'OpenCV / CNNs', icon: 'fa-eye', iconColor: 'text-accent-500' },
      { name: 'RAG', icon: 'fa-robot', iconColor: 'text-accent-500' },
      { name: 'Scikit-Learn', icon: 'fa-chart-line', iconColor: 'text-accent-500' },
      { name: 'Vector embeddings', icon: 'fa-database', iconColor: 'text-accent-500' },
    ],
  },
  {
    title: 'Enterprise Security',
    items: [
      { name: 'Digital forensics', icon: 'fa-user-secret', iconColor: 'text-red-500' },
      { name: 'Wireshark / Nmap', icon: 'fa-network-wired', iconColor: 'text-red-500' },
      { name: 'ISO 27001', icon: 'fa-lock', iconColor: 'text-red-500' },
      { name: 'Vulnerability assessment', icon: 'fa-bug', iconColor: 'text-red-500' },
      { name: 'Privilege management', icon: 'fa-shield-halved', iconColor: 'text-red-500' },
    ],
  },
];

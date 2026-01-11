export interface Patent {
  type: 'PATENT FILED' | 'IEEE PUBLICATION';
  title: string;
  reference: string;
  icon: string;
  iconColor: string;
  badgeColor: string;
  link?: string; // URL for IEEE publications or patent links
}

export const patents: Patent[] = [
  {
    type: 'PATENT FILED',
    title: 'TASA: Virtual Assistant With Face Authentication',
    reference: 'Ref: 202221066577',
    icon: 'fa-lightbulb',
    iconColor: 'text-yellow-500',
    badgeColor: 'text-yellow-600 dark:text-yellow-500 border-yellow-500/30',
  },
  {
    type: 'PATENT FILED',
    title: 'Safety H‑Shield: Wearable Security Device',
    reference: 'Ref: 202221048969',
    icon: 'fa-lightbulb',
    iconColor: 'text-yellow-500',
    badgeColor: 'text-yellow-600 dark:text-yellow-500 border-yellow-500/30',
  },
  {
    type: 'IEEE PUBLICATION',
    title: 'TASA: Virtual AI Assistant with Multilevel Authentication',
    reference: 'ICCUBEA 2023',
    icon: 'fa-book-open',
    iconColor: 'text-primary-500',
    badgeColor: 'text-primary-600 dark:text-primary-500 border-primary-500/30',
    link: 'https://ieeexplore.ieee.org/document/10392101/',
  },
  {
    type: 'IEEE PUBLICATION',
    title: 'Image-Dev: Advanced Text to Image AI Model',
    reference: 'PuneCon 2022',
    icon: 'fa-book-open',
    iconColor: 'text-primary-500',
    badgeColor: 'text-primary-600 dark:text-primary-500 border-primary-500/30',
    link: 'https://ieeexplore.ieee.org/document/10014718',
  },
];

export interface Award {
  title: string;
  organization: string;
  icon: string;
}

export const awards: Award[] = [
  {
    title: 'Best Innovator & Best Cybersecurity Expert',
    organization: 'Department of Computer Engineering, RMDSSOE',
    icon: 'fa-trophy',
  },
  {
    title: 'Smart India Hackathon 2022 Finalist',
    organization: 'SIH1019',
    icon: 'fa-medal',
  },
  {
    title: 'First Runner Up',
    organization: 'Innovation Thinking & Ideation Competition',
    icon: 'fa-lightbulb',
  },
  {
    title: 'Cybersecurity Awareness Program',
    organization: 'Pune Cyber Police Cell',
    icon: 'fa-shield-halved',
  },
];

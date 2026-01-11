export interface Project {
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  borderColor: string;
  tags: string[];
  images?: string[]; // Array of image paths for screenshots
  featured?: boolean; // Featured projects appear first
  links?: {
    github?: string;
    demo?: string;
    patent?: boolean;
    paper?: boolean;
  };
}

export const projects: Project[] = [
  {
    title: 'Dinodash',
    description: 'Fast-paced, action-packed dinosaur survival game where players dodge obstacles, collect power-ups, and unlock achievements. Built with C++ and Raylib featuring immersive gameplay and pixel-art visuals.',
    icon: 'fa-gamepad',
    iconColor: 'text-green-500',
    borderColor: 'hover:border-green-500/50',
    tags: ['C++', 'Raylib', 'Game Development'],
    featured: true,
    images: [
      '/projects/dinodash/Dinodash_start.png',
      '/projects/dinodash/dinodash_ingame.png',
      '/projects/dinodash/dinodash_night.png',
    ],
    links: {
      github: 'https://github.com/AbhijeetP21/Dinodash',
      demo: 'https://abhijeetp21.github.io/Dinodash-play/',
    },
  },
  {
    title: 'TASA',
    description: 'Trusted Assistant with Secure Access. Real-time face recognition with CNN + HOG, anti-spoofing, and Raspberry Pi deployment. ~90% authentication accuracy.',
    icon: 'fa-fingerprint',
    iconColor: 'text-primary-500',
    borderColor: 'hover:border-primary-500/50',
    tags: ['Python', 'OpenCV', 'TensorFlow'],
    links: {
      github: 'https://github.com/AbhijeetP21',
      patent: true,
    },
  },
  {
    title: 'Image-Dev (GenAI)',
    description: 'Text-to-image system combining TF-IDF + diffusion. Generates high-res 1024×1024 images with strong contextual relevance (~93%).',
    icon: 'fa-wand-magic-sparkles',
    iconColor: 'text-accent-500',
    borderColor: 'hover:border-accent-500/50',
    tags: ['Diffusion', 'AWS', 'PyTorch'],
    links: {
      paper: true,
    },
  },
  {
    title: 'Safety H‑Shield (IoT)',
    description: 'Women safety wearable with GPS tracking, emergency alerting, and biometric authentication. Edge-based threat detection with ~3s response window.',
    icon: 'fa-shield-heart',
    iconColor: 'text-red-500',
    borderColor: 'hover:border-red-500/50',
    tags: ['C++', 'GSM/BLE', 'AWS IoT'],
    links: {
      demo: 'https://6474fc7dad8ac00008e69c34--steady-creponne-a65d1e.netlify.app/',
    },
  },
  {
    title: 'Enterprise Warranty System',
    description: 'Scalable backend for product verification and analytics. Optimized async data retrieval and database performance for faster decision workflows.',
    icon: 'fa-qrcode',
    iconColor: 'text-blue-500',
    borderColor: 'hover:border-blue-500/50',
    tags: ['Spring Boot', 'MySQL', 'REST'],
    links: {},
  },
  {
    title: 'AI Prompt + RAG Toolkit',
    description: 'Prompt optimization and retrieval setup used for curriculum generation and analytics workflows (embeddings, retrieval, evaluation loops).',
    icon: 'fa-robot',
    iconColor: 'text-purple-500',
    borderColor: 'hover:border-purple-500/50',
    tags: ['RAG', 'Embeddings', 'Evaluation'],
    links: {},
  },
];

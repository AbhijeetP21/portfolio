export interface Project {
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  borderColor: string;
  tags: string[];
  images?: string[]; // Array of image paths for screenshots
  featured?: boolean; // Featured projects appear first
  youtubeUrl?: string; // YouTube video URL for embed (takes priority over images)
  liveUrl?: string; // Live site URL for preview (used if no youtubeUrl)
  links?: {
    github?: string;
    demo?: string;
    patent?: boolean;
    paper?: boolean;
  };
}

export const projects: Project[] = [
  {
    title: 'Good Bowls',
    description: 'Full-stack salad bowl restaurant app with React, Node.js, MongoDB, and Stripe payments. Features menu browsing, custom bowl builder, cart management, secure checkout, user authentication, and admin dashboard.',
    icon: 'fa-bowl-food',
    iconColor: 'text-emerald-500',
    borderColor: 'hover:border-emerald-500/50',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    featured: true,
    images: [
      '/projects/goodbowls/goodbowls_landing.png',
      '/projects/goodbowls/home.png',
      '/projects/goodbowls/good_bowls_login.png',
      '/projects/goodbowls/buildyourown.png',
      '/projects/goodbowls/cart.png',
      '/projects/goodbowls/account.png',
      '/projects/goodbowls/myorder.png',
    ],
    liveUrl: 'https://good-bowls.vercel.app',
    links: {
      github: 'https://github.com/AbhijeetP21/Good_Bowls',
      demo: 'https://good-bowls.vercel.app',
    },
  },
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
    youtubeUrl: 'https://youtu.be/naddU47TrCw?si=yloByl8n1Hw-KhiU',
    liveUrl: 'https://abhijeetp21.github.io/Dinodash-play/',
    links: {
      github: 'https://github.com/AbhijeetP21/Dinodash',
      demo: 'https://abhijeetp21.github.io/Dinodash-play/',
    },
  },
  {
    title: 'Custom Unix Shell',
    description: 'A minimal Unix-like shell implementation supporting command execution, piping, I/O redirections (>, <, >>), background execution (&), logical operators (&&, ||), and command history (!n). Built in C for CS5460/6460 Operating Systems.',
    icon: 'fa-terminal',
    iconColor: 'text-orange-500',
    borderColor: 'hover:border-orange-500/50',
    tags: ['C', 'Operating Systems', 'Shell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=MRQHSn69ySQ&t=12s',
    links: {
      github: 'https://github.com/AbhijeetP21/Custom-Unix-Shell',
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
    title: 'AI Prompt + RAG Toolkit',
    description: 'Prompt optimization and retrieval setup used for curriculum generation and analytics workflows (embeddings, retrieval, evaluation loops).',
    icon: 'fa-robot',
    iconColor: 'text-purple-500',
    borderColor: 'hover:border-purple-500/50',
    tags: ['RAG', 'Embeddings', 'Evaluation'],
    links: {},
  },
];

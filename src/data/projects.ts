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
    writeup?: string;
  };
}

export const projects: Project[] = [
  {
    title: 'ClipSync',
    description: 'A secure, serverless real-time clipboard manager. Syncs clipboard content, files, and links across devices instantly using Next.js, Supabase, and PostgreSQL with Row Level Security (RLS).',
    icon: 'fa-copy',
    iconColor: 'text-cyan-500',
    borderColor: 'hover:border-cyan-500/50',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vercel'],
    featured: true,
    liveUrl: 'https://clipsync.abhijeetpachpute.com',
    links: {
      github: 'https://github.com/AbhijeetP21/ClipSync',
      demo: 'https://clipsync.abhijeetpachpute.com',
      writeup: '/writing/clipsync',
    },
  },
  {
    title: 'Multi-Agent Data Wrangler',
    description: 'An auditable, configurable, and composable data transformation system modeled as a graph problem. Features distinct agents for profiling, candidate generation, validation, scoring, and ranking, with robust failure recovery.',
    icon: 'fa-network-wired',
    iconColor: 'text-indigo-500',
    borderColor: 'hover:border-indigo-500/50',
    tags: ['Python', 'Streamlit', 'Pydantic', 'Data Engineering'],
    featured: true,
    images: ['/projects/multi-agent-data-wrangler/demo.png'],
    links: {
      github: 'https://github.com/AbhijeetP21/multi-agent-data-wrangler',
      demo: 'https://multi-agent-data-wrangler.streamlit.app/',
      writeup: '/writing/multi-agent-data-wrangler',
    },
  },
  {
    title: 'Dinodash',
    description: 'Fast-paced, action-packed dinosaur survival game where players dodge obstacles, collect power-ups, and unlock achievements. Built with C++ and Raylib featuring immersive gameplay and pixel-art visuals.',
    icon: 'fa-gamepad',
    iconColor: 'text-green-500',
    borderColor: 'hover:border-green-500/50',
    tags: ['C++', 'Raylib', 'WebAssembly', 'Systems Architecture', 'Runtime Portability'],
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
      writeup: '/writing/dinodash-web-runtime',
    },
  },
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
      writeup: '/writing/good-bowls-ecommerce',
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
    title: 'AI Prompt + RAG Toolkit',
    description: 'Built a data analytics dashboard with natural language query capabilities using lightweight RAG. Combines client-side CSV processing with Gemini API for actionable insights on complex datasets.',
    icon: 'fa-robot',
    iconColor: 'text-purple-500',
    borderColor: 'hover:border-purple-500/50',
    tags: ['RAG', 'Gemini API', 'Analytics'],
    links: {
      writeup: '/writing/rag-optimization-techniques',
    },
  },
];

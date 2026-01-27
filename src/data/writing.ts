export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  icon: string;
  iconColor: string;
  status: 'published' | 'coming-soon';
}

export const posts: BlogPost[] = [
  {
    slug: 'dinodash-web-runtime',
    title: 'Dinodash: Engineering a Native C++ Game Engine for the Web Runtime',
    description: 'A deep dive into building a multi-runtime system: native C++ game engine with WebAssembly adaptation, browser deployment, and runtime portability design.',
    date: '2026-01-26',
    readTime: '6 min read',
    tags: ['C++', 'WebAssembly', 'Systems Architecture', 'Raylib'],
    icon: 'fa-gamepad',
    iconColor: 'text-green-500',
    status: 'published',
  },
  {
    slug: 'good-bowls-ecommerce',
    title: 'Good Bowls: Building a Production-Grade E-Commerce Platform',
    description: 'A technical exploration of full-stack architecture: three-tier separation, state synchronization, Stripe payment processing, and free-tier deployment strategies.',
    date: '2026-01-27',
    readTime: '12 min read',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    icon: 'fa-cart-shopping',
    iconColor: 'text-orange-500',
    status: 'published',
  },
  {
    slug: 'how-i-built-tasa',
    title: 'How I Built TASA: Face Authentication for a Virtual Assistant',
    description: 'A deep dive into building a real-time face recognition system with CNN + HOG, anti-spoofing measures, and Raspberry Pi deployment.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['Python', 'OpenCV', 'TensorFlow', 'Security'],
    icon: 'fa-fingerprint',
    iconColor: 'text-primary-500',
    status: 'coming-soon',
  },
  {
    slug: 'rag-optimization-techniques',
    title: 'RAG Optimization Techniques for Production AI',
    description: 'Practical techniques for improving retrieval-augmented generation systems: chunking strategies, embedding selection, and relevance tuning.',
    date: '2024-02-10',
    readTime: '10 min read',
    tags: ['RAG', 'Embeddings', 'LLMs', 'AI'],
    icon: 'fa-robot',
    iconColor: 'text-accent-500',
    status: 'coming-soon',
  },
  {
    slug: 'building-secure-systems',
    title: 'Lessons from Securing a $650M Research Enterprise',
    description: 'What I learned deploying endpoint security, remediating CSRF vulnerabilities, and building security culture at scale.',
    date: '2024-03-05',
    readTime: '6 min read',
    tags: ['Security', 'Enterprise', 'Compliance'],
    icon: 'fa-shield-halved',
    iconColor: 'text-red-500',
    status: 'coming-soon',
  },
];

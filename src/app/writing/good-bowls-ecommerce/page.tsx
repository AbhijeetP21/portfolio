'use client';

import Link from 'next/link';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { CustomCursor } from '@/components/CustomCursor';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function GoodBowlsArticle() {
    return (
        <>
            <CustomCursor />
            <BackgroundEffects />

            {/* Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-800/50">
                <nav className="container mx-auto px-6 flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-2xl font-bold tracking-tighter font-mono text-slate-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                        &lt;AP /&gt;
                    </Link>

                    <div className="flex items-center gap-4 sm:gap-6">
                        <Link
                            href="/writing"
                            className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                        >
                            <i className="fa-solid fa-arrow-left mr-2"></i>
                            <span className="hidden sm:inline">Back to Writing</span>
                            <span className="sm:hidden">Back</span>
                        </Link>
                        <ThemeToggle />
                    </div>
                </nav>
            </header>

            {/* Article Content */}
            <main className="min-h-screen pt-32 pb-16">
                <article className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto">

                        {/* Article Header */}
                        <header className="mb-16 text-center">
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-medium rounded-full">
                                    <i className="fa-solid fa-cart-shopping mr-2"></i>
                                    Full-Stack Engineering
                                </span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">12 min read</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-slate-900 dark:text-white">
                                Good Bowls: Building a Production-Grade E-Commerce Platform
                            </h1>

                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
                                Engineering a scalable food ordering system with three-tier architecture, secure payment processing, and modern state management.
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 mt-8">
                                {['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe', 'JWT'].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-slate-100 dark:bg-slate-800/50 text-sm text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </header>

                        {/* Article Body */}
                        <div className="space-y-16">

                            {/* Section: The Problem */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    The Problem Space
                                </h2>
                                <div>
                                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        Building an e-commerce platform for a salad bowl restaurant requires solving several interconnected challenges: <strong className="text-slate-900 dark:text-white">real-time cart management</strong>, secure payment processing, dynamic pricing logic for custom orders, and user authentication, all while maintaining separation of concerns.
                                    </p>
                                    <blockquote className="border-l-4 border-orange-500 pl-6 py-4 bg-slate-50 dark:bg-slate-800/30 rounded-r-xl my-6">
                                        <p className="text-lg italic text-slate-700 dark:text-slate-300">
                                            The core question: how do you architect a system where the frontend handles optimistic UI updates, the backend enforces pricing integrity, and the database maintains order history accuracy?</p>
                                    </blockquote>
                                </div>
                            </section>

                            {/* Section: Architecture Overview */}
                            <section className="glass-surface rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                                <h2 className="text-sm font-bold uppercase tracking-wider text-orange-500 mb-6">
                                    Three-Tier Architecture
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <i className="fa-brands fa-react text-blue-500"></i>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">Presentation Layer</h3>
                                            <p className="text-slate-600 dark:text-slate-400">React + Redux for UI rendering and client-side state with localStorage persistence</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                                            <i className="fa-brands fa-node-js text-green-500"></i>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">Business Logic Layer</h3>
                                            <p className="text-slate-600 dark:text-slate-400">Express + Node.js with stateless JWT auth for horizontal scaling</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                                            <i className="fa-solid fa-database text-emerald-500"></i>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">Data Layer</h3>
                                            <p className="text-slate-600 dark:text-slate-400">MongoDB Atlas with document-oriented storage for natural order modeling</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Why Split Architecture */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Why Not a Monolith?
                                </h2>
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        Separating client and server wasn&apos;t just about following best practices. It solved <strong className="text-slate-900 dark:text-white">real deployment constraints</strong>. Vercel offers instant CDN-backed static hosting for the React build, while Render provides containerized Node.js hosting.
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                        <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50">
                                            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">
                                                <i className="fa-solid fa-check mr-2"></i>Benefits
                                            </h4>
                                            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                                                <li>• Specialized platform advantages</li>
                                                <li>• Independent scaling per tier</li>
                                                <li>• Optimal caching strategies</li>
                                            </ul>
                                        </div>
                                        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50">
                                            <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">
                                                <i className="fa-solid fa-triangle-exclamation mr-2"></i>Tradeoffs
                                            </h4>
                                            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                                                <li>• Network latency between tiers</li>
                                                <li>• CORS configuration complexity</li>
                                                <li>• Deployment orchestration</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        In development, I proxy API requests from port 3000 to 8080 via the client&apos;s <code className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-sm font-mono">package.json</code>. In production, explicit CORS headers whitelist the Vercel origin.
                                    </p>
                                </div>
                            </section>

                            {/* Section: State Management */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    State Management Strategy
                                </h2>
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        The cart presented an interesting state management problem: it needs to be <strong className="text-slate-900 dark:text-white">reactive</strong> (updates reflect immediately), <strong className="text-slate-900 dark:text-white">persistent</strong> (survives refreshes), and <strong className="text-slate-900 dark:text-white">eventually consistent</strong> with the backend.
                                    </p>

                                    <div className="space-y-4 mb-8">
                                        {[
                                            { num: '1', title: 'Redux as Single Source of Truth', desc: 'All cart operations dispatch actions that update a normalized state tree. Components subscribe to derived selectors.' },
                                            { num: '2', title: 'LocalStorage as Persistence', desc: 'A Redux middleware watches for mutations and syncs to localStorage. On app init, we hydrate from storage.' },
                                            { num: '3', title: 'Backend as Authority on Checkout', desc: 'The frontend sends the cart to the backend, which validates prices against the database before creating the order.' },
                                        ].map((item) => (
                                            <div key={item.num} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                                                    <span className="text-orange-500 font-bold text-sm">{item.num}</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Section: Custom Bowl Builder */}
                            <section className="glass-surface rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                                <h2 className="text-sm font-bold uppercase tracking-wider text-orange-500 mb-6">
                                    The Custom Bowl Builder Challenge
                                </h2>
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                                        Custom bowls introduced complexity: users select a base, multiple toppings, proteins, cheeses, and dressings, each with individual prices. The builder needs to show a <strong className="text-slate-900 dark:text-white">running total</strong> as users add/remove ingredients.
                                    </p>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                                        I solved this with a <strong className="text-slate-900 dark:text-white">component-local state machine</strong> that tracks selections, then calculates price on-the-fly. When the user clicks &quot;Add to Cart,&quot; it dispatches to Redux with the complete specification.
                                    </p>
                                    <div className="mt-6 p-4 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800/50">
                                        <p className="text-sm text-primary-700 dark:text-primary-300">
                                            <i className="fa-solid fa-lightbulb mr-2"></i>
                                            <strong>Why not Redux?</strong> The builder is ephemeral. Selections only matter while the modal is open. Lifting this to Redux would pollute the global store with transient data.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Authentication */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Authentication & Authorization
                                </h2>
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        The authentication flow uses JWTs with a design choice: the payload includes both a <strong className="text-slate-900 dark:text-white">user ID and an admin role flag</strong>. This eliminates database lookups on every request just to check permissions.
                                    </p>

                                    <div className="bg-slate-900 dark:bg-slate-950 rounded-2xl p-6 font-mono text-sm mb-6 overflow-x-auto">
                                        <div className="mb-2">
                                            <span className="text-slate-500">// Token Generation</span>
                                        </div>
                                        <div className="text-slate-300">
                                            <span className="text-purple-400">const</span> <span className="text-blue-300">payload</span> = {'{'} <span className="text-green-400">_id</span>: user._id, <span className="text-green-400">isAdmin</span>: user.isAdmin {'}'};
                                        </div>
                                        <div className="text-slate-300">
                                            <span className="text-purple-400">const</span> <span className="text-blue-300">token</span> = jwt.<span className="text-yellow-300">sign</span>(payload, process.env.JWTPRIVATEKEY, {'{'} <span className="text-green-400">expiresIn</span>: <span className="text-orange-300">&quot;7d&quot;</span> {'}'});
                                        </div>
                                    </div>

                                    <div className="grid gap-4">
                                        {[
                                            { icon: 'fa-key', title: 'Verification Middleware', desc: 'Extracts token from x-auth-token header, verifies signature, attaches decoded payload to req.user' },
                                            { icon: 'fa-lock', title: 'Password Security', desc: 'Passwords are hashed with bcrypt using async operations (`await bcrypt.hash()`) to avoid blocking Node.js\'s event loop. Salt rounds are configurable via environment variables.' },
                                        ].map((item) => (
                                            <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                                <i className={`fa-solid ${item.icon} text-primary-500 mt-1`}></i>
                                                <div>
                                                    <h4 className="font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50">
                                        <p className="text-sm text-amber-800 dark:text-amber-300">
                                            <i className="fa-solid fa-triangle-exclamation mr-2"></i>
                                            <strong>Tradeoff:</strong> JWTs can&apos;t be revoked before expiry. For a restaurant app, this is acceptable. The blast radius is limited to order history visibility.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Payment Integration */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    <i className="fa-brands fa-stripe text-purple-500 mr-3"></i>
                                    Payment Integration
                                </h2>
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        Payment processing follows Stripe&apos;s recommended pattern: the client collects card details using <strong className="text-slate-900 dark:text-white">Stripe Elements</strong> (PCI-compliant inputs), the backend creates a PaymentIntent, and the client confirms payment.
                                    </p>

                                    <div className="bg-slate-900 dark:bg-slate-950 rounded-2xl p-6 font-mono text-sm mb-6 overflow-hidden">
                                        <div className="mb-4">
                                            <span className="text-slate-500">// Payment Flow</span>
                                        </div>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center gap-3">
                                                <span className="text-slate-500">1.</span>
                                                <span className="text-blue-400">Client</span>
                                                <span className="text-slate-500">→</span>
                                                <span className="text-slate-300">sends cart items to /api/payment/create-payment-intent</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-slate-500">2.</span>
                                                <span className="text-green-400">Backend</span>
                                                <span className="text-slate-500">→</span>
                                                <span className="text-slate-300">calculates total from database prices</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-slate-500">3.</span>
                                                <span className="text-green-400">Backend</span>
                                                <span className="text-slate-500">→</span>
                                                <span className="text-slate-300">creates PaymentIntent with Stripe API</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-slate-500">4.</span>
                                                <span className="text-blue-400">Client</span>
                                                <span className="text-slate-500">→</span>
                                                <span className="text-slate-300">receives clientSecret, confirms payment</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50">
                                        <p className="text-sm text-red-800 dark:text-red-300">
                                            <i className="fa-solid fa-shield-halved mr-2"></i>
                                            <strong>Key Insight:</strong> Never send the dollar amount from the client. The backend always calculates totals from database prices to prevent client-side manipulation.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Database Design */}
                            <section className="glass-surface rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                                <h2 className="text-sm font-bold uppercase tracking-wider text-orange-500 mb-6">
                                    Database Design Patterns
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">Price as Array</h3>
                                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                                            Bowl prices stored as <code className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-sm font-mono">[Small, Medium, Large]</code> arrays. Keeps size pricing denormalized for fast reads with no joins on menu fetch.
                                        </p>
                                    </div>
                                    <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">Order Snapshots</h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            Orders embed full details rather than referencing bowls by ID. This creates a snapshot at order time. If menu prices change later, historical orders remain accurate.
                                        </p>
                                    </div>
                                    <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">Repository Pattern</h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            Database access abstracted behind repositories. Controllers call <code className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-sm font-mono">createOrder(data)</code> rather than invoking Mongoose directly. This keeps business logic testable.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Deployment */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Deployment & The Cold Start Problem
                                </h2>
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        Free-tier Render hosting spins down the container after 15 minutes of inactivity. The first request after downtime takes up to <strong className="text-slate-900 dark:text-white">50 seconds</strong> while the container restarts.
                                    </p>

                                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                                        {[
                                            { icon: 'fa-clock', title: 'Cron Ping', desc: 'Keep service warm with scheduled pings every 10 minutes' },
                                            { icon: 'fa-arrow-up', title: 'Paid Tier', desc: 'Upgrade to persistent containers without cold starts' },
                                            { icon: 'fa-bolt', title: 'Serverless', desc: 'Move to functions with better cold start characteristics' },
                                        ].map((item) => (
                                            <div key={item.title} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 text-center">
                                                <i className={`fa-solid ${item.icon} text-2xl text-primary-500 mb-2`}></i>
                                                <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{item.title}</h4>
                                                <p className="text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        For a portfolio project, the cold start is an acceptable UX tradeoff. The frontend loads instantly from Vercel&apos;s CDN, and a loading indicator manages user expectations.
                                    </p>
                                </div>
                            </section>

                            {/* Section: Technical Depth */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Technical Depth: The Interesting Bits
                                </h2>
                                <div className="space-y-6">
                                    <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                                            <i className="fa-solid fa-shuffle text-orange-500 mr-3"></i>
                                            Race Conditions in Cart Updates
                                        </h3>
                                        <p className="text-slate-700 dark:text-slate-300">
                                            When multiple tabs are open, localStorage writes from one tab don&apos;t automatically sync to Redux in others. I handle this with a <code className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-sm font-mono">storage</code> event listener that watches for external changes and dispatches sync actions.
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                                            <i className="fa-solid fa-calculator text-green-500 mr-3"></i>
                                            Dynamic Pricing Validation
                                        </h3>
                                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                                            Custom bowl price = base + toppings + proteins + cheeses + dressing + sauce. The backend <strong className="text-slate-900 dark:text-white">recomputes and validates</strong> by fetching each ingredient from the database.
                                        </p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            If the client-reported total differs by more than $0.01, the request is rejected. This protects against code manipulation, mid-cart price changes, and floating-point rounding errors.
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                                            <i className="fa-solid fa-layer-group text-purple-500 mr-3"></i>
                                            Middleware Composition
                                        </h3>
                                        <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                                            <span className="text-slate-300">router.</span><span className="text-yellow-300">post</span><span className="text-slate-300">(</span><span className="text-orange-300">&apos;/admin/bowls&apos;</span><span className="text-slate-300">, </span><span className="text-blue-300">auth</span><span className="text-slate-300">, </span><span className="text-blue-300">isAdmin</span><span className="text-slate-300">, </span><span className="text-blue-300">validateBowl</span><span className="text-slate-300">, </span><span className="text-blue-300">createBowl</span><span className="text-slate-300">);</span>
                                        </div>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
                                            Each middleware is focused and reusable: <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs font-mono">auth</code> verifies JWT, <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs font-mono">isAdmin</code> checks role, <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs font-mono">validateBowl</code> runs Joi schema validation.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Lessons Learned */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Lessons Learned
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-bold text-green-600 dark:text-green-400 mb-4 flex items-center">
                                            <i className="fa-solid fa-check-circle mr-2"></i>
                                            What Worked Well
                                        </h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Redux Toolkit eliminated boilerplate',
                                                'DevTools invaluable for debugging',
                                                'Chakra + Ant Design mix worked',
                                                'Layered architecture simplified swaps',
                                            ].map((item) => (
                                                <li key={item} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-amber-600 dark:text-amber-400 mb-4 flex items-center">
                                            <i className="fa-solid fa-rotate-left mr-2"></i>
                                            What I&apos;d Change
                                        </h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Add email verification with Gmail SMTP',
                                                'Validate cart on every page load',
                                                'Add order status tracking state machine',
                                                'Implement webhook for payment confirmation',
                                            ].map((item) => (
                                                <li key={item} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Philosophy */}
                            <section className="text-center py-8">
                                <blockquote className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    &quot;Every architectural decision is a tradeoff.&quot;
                                </blockquote>
                                <p className="text-lg text-orange-500 font-semibold">
                                    Building this system taught me that good architecture isn&apos;t about perfection. It&apos;s about making intentional choices you can defend.
                                </p>
                            </section>

                        </div>

                        {/* CTA Section */}
                        <div className="mt-16 glass-surface rounded-2xl p-8 text-center border border-slate-200 dark:border-slate-700">
                            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                                <i className="fa-solid fa-utensils text-3xl text-orange-500"></i>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Try Good Bowls</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                                Experience the live demo. Allow ~50s for initial backend wake-up.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://goodbowls.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white font-medium rounded-full transition-colors"
                                >
                                    <i className="fa-solid fa-external-link mr-2"></i>
                                    Live Demo
                                </a>
                                <a
                                    href="https://github.com/AbhijeetP21/Good_Bowls"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium rounded-full transition-colors border border-slate-200 dark:border-slate-700"
                                >
                                    <i className="fa-brands fa-github mr-2"></i>
                                    View Source
                                </a>
                            </div>
                        </div>

                    </div>
                </article>
            </main>

            {/* Footer */}
            <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm">
                <p>
                    &copy; {new Date().getFullYear()} Abhijeet Pachpute. Crafted with{' '}
                    <i className="fa-solid fa-code text-primary-500"></i> and{' '}
                    <i className="fa-solid fa-coffee text-yellow-600"></i>.
                </p>
            </footer>
        </>
    );
}

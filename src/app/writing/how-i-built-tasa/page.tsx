'use client';

import Link from 'next/link';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { CustomCursor } from '@/components/CustomCursor';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function TasaArticle() {
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
                                <span className="inline-flex items-center px-4 py-2 bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-medium rounded-full">
                                    <i className="fa-solid fa-fingerprint mr-2"></i>
                                    Biometric Security
                                </span>
                                <span className="inline-flex items-center px-3 py-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-mono rounded-full">
                                    Legacy Project
                                </span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">10 min read</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-slate-900 dark:text-white">
                                How I Built TASA: Face Authentication for a Virtual Assistant
                            </h1>

                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
                                Implementing hierarchical access control and real-time face recognition for privacy-aware voice assistants.
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 mt-8">
                                {['Python', 'TensorFlow', 'OpenCV', 'Raspberry Pi', 'CNN', 'HOG'].map((tag) => (
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

                            {/* Section: The Problem Space */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    The Problem Space
                                </h2>
                                <div>
                                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        Back in 2023, I worked on TASA as my undergraduate research project. The motivation was straightforward: virtual assistants like Alexa and Siri had a fundamental security flaw. They couldn&apos;t distinguish between users. Anyone within earshot could access your calendar, messages, or smart home controls. There was no concept of <strong className="text-slate-900 dark:text-white">ownership or privacy</strong>.
                                    </p>
                                    <blockquote className="border-l-4 border-primary-500 pl-6 py-4 bg-slate-50 dark:bg-slate-800/30 rounded-r-xl my-6">
                                        <p className="text-lg italic text-slate-700 dark:text-slate-300">
                                            TASA (Trusted Assistant with Secure Access) explored whether we could build a virtual assistant with proper authentication and hierarchical access control, without sacrificing the hands-free convenience that makes these systems useful.
                                        </p>
                                    </blockquote>
                                </div>
                            </section>

                            {/* Section: Legacy Project Note */}
                            <section className="glass-surface rounded-2xl p-8 border border-amber-200 dark:border-amber-800/50 bg-amber-50/50 dark:bg-amber-900/10">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                                        <i className="fa-solid fa-clock-rotate-left text-amber-500"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">Legacy Project Note</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                                            This was an academic research project completed in 2023. The code is no longer publicly available, but the technical approach and lessons learned remain relevant for anyone interested in biometric authentication or secure system design.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Authentication Pipeline */}
                            <section className="glass-surface rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                                <h2 className="text-sm font-bold uppercase tracking-wider text-primary-500 mb-6">
                                    The Authentication Pipeline
                                </h2>
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        The core challenge was building a multi-layered authentication system that worked in real-time. We settled on a <strong className="text-slate-900 dark:text-white">two-factor approach</strong>:
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center shrink-0">
                                                <i className="fa-solid fa-camera text-primary-500"></i>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 dark:text-white">Primary: Face Recognition</h3>
                                                <p className="text-slate-600 dark:text-slate-400">CNN with HOG (Histogram of Oriented Gradients) feature descriptors for real-time face identification</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center shrink-0">
                                                <i className="fa-solid fa-key text-accent-500"></i>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 dark:text-white">Secondary: Secret Passphrase</h3>
                                                <p className="text-slate-600 dark:text-slate-400">User-specific passphrase prevents photo-based spoofing and adds a knowledge factor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Why HOG? */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Why HOG for Feature Extraction?
                                </h2>
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        Most modern face recognition systems use deep feature extractors like FaceNet or ArcFace. We chose Histogram of Oriented Gradients for specific reasons:
                                    </p>

                                    <div className="grid gap-4 mb-8">
                                        {[
                                            { icon: 'fa-bolt', title: 'Computational Efficiency', desc: 'Significantly lighter than end-to-end deep learning. Critical for real-time on a Raspberry Pi.' },
                                            { icon: 'fa-eye', title: 'Interpretability', desc: 'HOG captures structural features: gradient orientations that correspond to edges and contours. More transparent than black-box deep features.' },
                                            { icon: 'fa-database', title: 'Low Training Requirements', desc: 'Requires far fewer training samples per user. Realistic when each user only provides 50–100 registration images.' },
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

                                    {/* Pipeline Diagram */}
                                    <div className="bg-slate-900 dark:bg-slate-950 rounded-2xl p-6 font-mono text-sm mb-8 overflow-hidden">
                                        <div className="mb-4">
                                            <span className="text-slate-500">// HOG Feature Extraction Pipeline</span>
                                        </div>
                                        <div className="text-primary-400">
                                            Image → Preprocessing → Gradient Calculation → Cell Division →
                                        </div>
                                        <div className="text-primary-400">
                                            Histogram Generation → Block Normalization → Feature Vector → CNN
                                        </div>
                                        <div className="mt-4">
                                            <span className="text-slate-500">// Per-pixel gradient computation</span>
                                        </div>
                                        <div className="text-slate-300">
                                            <span className="text-purple-400">Magnitude</span>: G = √(Gx² + Gy²)
                                        </div>
                                        <div className="text-slate-300">
                                            <span className="text-purple-400">Orientation</span>: θ = arctan(Gy/Gx)
                                        </div>
                                    </div>

                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        The image is divided into 8×8 pixel cells. For each cell, we build a <strong className="text-slate-900 dark:text-white">9-bin histogram of gradient orientations</strong>. These histograms are then normalized using L2 normalization across overlapping blocks to handle lighting variations. The result is a feature descriptor that&apos;s robust to illumination changes but sensitive to facial structure.
                                    </p>
                                </div>
                            </section>

                            {/* Section: CNN Architecture */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    The CNN Architecture
                                </h2>
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        The HOG descriptors feed into a relatively shallow CNN (3 convolutional layers + 2 fully connected layers). The network learns to classify users into three tiers, detect invalid authentication attempts, and handle <strong className="text-slate-900 dark:text-white">temporal information across video frames</strong>.
                                    </p>

                                    <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 mb-6">
                                        <p className="text-sm text-red-800 dark:text-red-300">
                                            <i className="fa-solid fa-shield-halved mr-2"></i>
                                            <strong>Anti-Spoofing:</strong> Rather than processing single images, we extract features from multiple consecutive frames. The CNN learns patterns that only appear in live video feeds: micro-movements, subtle lighting changes, natural head motion. Static photos fail this temporal consistency check.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Multi-Level Access Control */}
                            <section className="glass-surface rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                                <h2 className="text-sm font-bold uppercase tracking-wider text-primary-500 mb-6">
                                    Multi-Level Access Control
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                                            <i className="fa-solid fa-crown text-amber-500 mr-2"></i>
                                            Admin (Owner)
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">Full system access: personalized data, system configuration, user management, and all standard assistant features.</p>
                                    </div>
                                    <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                                            <i className="fa-solid fa-user-shield text-blue-500 mr-2"></i>
                                            Sub-Admin
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">Configurable partial access: general assistant features, limited personal data, no system configuration rights.</p>
                                    </div>
                                    <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                                            <i className="fa-solid fa-user text-slate-500 mr-2"></i>
                                            Guest
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">Minimal access: public information queries, basic entertainment. Zero access to personal data or system settings.</p>
                                    </div>
                                    <div className="mt-6 p-4 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800/50">
                                        <p className="text-sm text-primary-700 dark:text-primary-300">
                                            <i className="fa-solid fa-lightbulb mr-2"></i>
                                            <strong>Key Design:</strong> This hierarchy is enforced at the backend API level, not just in the UI. Critical for actual security.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Implementation Challenges */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Implementation Challenges
                                </h2>
                                <div className="space-y-6">
                                    <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                                            <i className="fa-solid fa-gauge-high text-green-500 mr-3"></i>
                                            Real-Time Performance
                                        </h3>
                                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                                            Face recognition needed to happen in &lt;500ms to feel seamless. Our initial implementation took 2–3 seconds.
                                        </p>
                                        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                            {[
                                                'Reduced HOG cell size from 16×16 to 8×8',
                                                'Implemented frame skipping: authenticate every 3rd frame',
                                                'Used OpenCV Haar Cascade for initial face detection (very fast) before HOG+CNN',
                                                'Moved histogram normalization to GPU',
                                            ].map((item) => (
                                                <div key={item} className="flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></span>
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-sm text-green-600 dark:text-green-400 font-semibold mt-4">
                                            Result: ~400ms on a Raspberry Pi 4
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                                            <i className="fa-solid fa-image text-red-500 mr-3"></i>
                                            Static Image Bypass
                                        </h3>
                                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                                            Early testing showed users could authenticate using printed photos, defeating the entire purpose.
                                        </p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            <strong className="text-slate-900 dark:text-white">Solution:</strong> Multi-frame temporal analysis. The CNN looks for consistency across 5–10 consecutive frames. A static image shows perfect consistency (too perfect), while a real face shows natural micro-variations. We also added a liveness check: prompting users to turn their head slightly.
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                                            <i className="fa-solid fa-user-xmark text-amber-500 mr-3"></i>
                                            False Rejection Rate
                                        </h3>
                                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                                            Initial accuracy was 90%, but false rejections were frustrating. Users would get denied despite being registered.
                                        </p>
                                        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                            {[
                                                'Histogram equalization during preprocessing',
                                                'Multiple registration sessions under different lighting',
                                                'Confidence thresholding: 70-85% triggers passphrase instead of rejecting',
                                            ].map((item) => (
                                                <div key={item} className="flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-sm text-amber-600 dark:text-amber-400 font-semibold mt-4">
                                            False rejections reduced from ~10% to ~3%
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Results & Performance */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Results &amp; Performance
                                </h2>
                                <div>
                                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                        {[
                                            { value: '90%', label: 'Recognition Accuracy' },
                                            { value: '92%', label: 'Precision' },
                                            { value: '<1%', label: 'False Positive Rate' },
                                            { value: '420ms', label: 'Avg Authentication Time' },
                                        ].map((item) => (
                                            <div key={item.label} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 text-center">
                                                <div className="text-2xl font-bold text-primary-500 mb-1">{item.value}</div>
                                                <div className="text-xs text-slate-600 dark:text-slate-400">{item.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        Compared to consumer products (Alexa, Siri, Google Assistant), TASA offered user authentication, hierarchical access control, anti-spoofing protection, and transparent data access policies. Features none of them had at the time.
                                    </p>

                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        The tradeoff was requiring users to authenticate before each session, but for security-sensitive use cases (banking queries, medical data, confidential work), this seemed reasonable.
                                    </p>
                                </div>
                            </section>

                            {/* Section: Lessons Learned / What I'd Do Differently */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    What I&apos;d Do Differently Today
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-bold text-primary-600 dark:text-primary-400 mb-4 flex items-center">
                                            <i className="fa-solid fa-arrow-up-right-dots mr-2"></i>
                                            Improvements
                                        </h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Use pre-trained face embeddings (FaceNet/dlib)',
                                                'Add voice biometrics for stronger multi-modal auth',
                                                'Edge ML optimization with TFLite or ONNX Runtime',
                                                'Differential privacy for stored biometrics',
                                            ].map((item) => (
                                                <li key={item} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-accent-600 dark:text-accent-400 mb-4 flex items-center">
                                            <i className="fa-solid fa-brain mr-2"></i>
                                            Key Takeaways
                                        </h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Security and UX are in constant tension',
                                                'Traditional CV techniques still have real value',
                                                'Temporal information from video is underutilized',
                                                '90% accuracy ≠ 90% user satisfaction',
                                            ].map((item) => (
                                                <li key={item} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 shrink-0"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Philosophy */}
                            <section className="text-center py-8">
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                                    TASA taught me a fundamental lesson:
                                </p>
                                <blockquote className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    &quot;Build security that people will actually use.&quot;
                                </blockquote>
                                <p className="text-lg text-primary-500 font-semibold">
                                    The safest system is useless if users bypass it out of frustration.
                                </p>
                            </section>

                        </div>

                        {/* Publication CTA */}
                        <div className="mt-16 glass-surface rounded-2xl p-8 text-center border border-slate-200 dark:border-slate-700">
                            <div className="w-16 h-16 rounded-2xl bg-primary-500/10 flex items-center justify-center mx-auto mb-4">
                                <i className="fa-solid fa-award text-3xl text-primary-500"></i>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Published & Patented</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                                TASA was published at IEEE ICCUBEA 2023 and filed as an Indian patent (202221066577).
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                <a
                                    href="https://ieeexplore.ieee.org/document/10392101"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-medium rounded-full hover:bg-primary-500/20 transition-colors"
                                >
                                    <i className="fa-solid fa-scroll mr-2"></i>
                                    IEEE ICCUBEA 2023
                                </a>
                                <a
                                    href="https://iprsearch.ipindia.gov.in/publicsearch"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-medium rounded-full hover:bg-amber-500/20 transition-colors"
                                >
                                    <i className="fa-solid fa-certificate mr-2"></i>
                                    Indian Patent Filed
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

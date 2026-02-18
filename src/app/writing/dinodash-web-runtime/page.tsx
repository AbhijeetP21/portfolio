'use client';

import Link from 'next/link';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { CustomCursor } from '@/components/CustomCursor';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function DinodashArticle() {
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
                                <span className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium rounded-full">
                                    <i className="fa-solid fa-gamepad mr-2"></i>
                                    Systems Engineering
                                </span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">6 min read</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-slate-900 dark:text-white">
                                Dinodash: From Native C++ Game Engine to Web-Deployed System
                            </h1>

                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
                                How I built a multi-runtime system that compiles a native game engine to WebAssembly and runs in the browser.
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 mt-8">
                                {['C++', 'Raylib', 'WebAssembly', 'Systems Design'].map((tag) => (
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

                            {/* Section: Intro */}
                            <section>
                                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                    Dinodash started as a low-level systems project: a real-time 2D game engine written in <strong className="text-slate-900 dark:text-white">C++ using Raylib</strong>. The goal was to explore performance-aware graphics rendering, game loops, physics simulation, and state management.
                                </p>
                                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                                    Over time, it evolved into a <strong className="text-slate-900 dark:text-white">multi-repo system</strong> spanning native execution, web deployment, and platform adaptation. It transformed a local desktop game into a browser-accessible interactive application.
                                </p>
                            </section>

                            {/* Section: The Repos */}
                            <section className="glass-surface rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                                <h2 className="text-sm font-bold uppercase tracking-wider text-primary-500 mb-6">
                                    Project Structure
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                                            <i className="fa-solid fa-code text-green-500"></i>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">Dinodash</h3>
                                            <p className="text-slate-600 dark:text-slate-400">Core C++ game engine (native runtime)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <i className="fa-solid fa-cube text-blue-500"></i>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">Dinodash-web</h3>
                                            <p className="text-slate-600 dark:text-slate-400">WebAssembly compilation + runtime bridge</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                                            <i className="fa-solid fa-globe text-purple-500"></i>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">Dinodash-play</h3>
                                            <p className="text-slate-600 dark:text-slate-400">Deployment, hosting, and browser integration</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section: The Problem */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    The Engineering Problem
                                </h2>
                                <div>
                                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        Rather than treating this as &quot;just a game project,&quot; I approached it as a <strong className="text-slate-900 dark:text-white">systems engineering challenge</strong>:
                                    </p>
                                    <blockquote className="border-l-4 border-primary-500 pl-6 py-4 bg-slate-50 dark:bg-slate-800/30 rounded-r-xl my-6">
                                        <p className="text-lg italic text-slate-700 dark:text-slate-300">
                                            How do you take a performance-sensitive native application and re-architect it for a fundamentally different runtime model (the browser) without losing determinism, performance guarantees, or structural clarity?
                                        </p>
                                    </blockquote>
                                </div>
                            </section>

                            {/* Section: Native Architecture */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Core Engine Architecture
                                </h2>
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        At the base is a traditional real-time engine with deliberate constraints:
                                    </p>

                                    <div className="grid gap-4 mb-8">
                                        {[
                                            { icon: 'fa-rotate', title: 'Deterministic game loop', desc: 'Consistent behavior across frames' },
                                            { icon: 'fa-clock', title: 'Delta-time physics', desc: 'Frame-rate independent simulation' },
                                            { icon: 'fa-keyboard', title: 'Event-driven input', desc: 'Responsive controls without polling' },
                                            { icon: 'fa-layer-group', title: 'Separated render pipeline', desc: 'Logic decoupled from visuals' },
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

                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        The engine is <strong className="text-slate-900 dark:text-white">data-oriented and minimal</strong>. There are no unnecessary abstractions and no deep object hierarchies. Logic is explicit, debuggable, and deterministic. This predictability becomes critical when porting to the web.
                                    </p>
                                </div>
                            </section>

                            {/* Section: Web Constraints */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    The Browser Challenge
                                </h2>
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        The browser is not a native environment. It imposes fundamental constraints:
                                    </p>

                                    <ul className="space-y-3 mb-6">
                                        {[
                                            'No direct system-level access',
                                            'No native threading model',
                                            'Event loop owned by the browser',
                                            'Rendering mediated through Web APIs',
                                        ].map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                                <span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        This is where the architecture shifts from &quot;game dev&quot; to <strong className="text-slate-900 dark:text-white">systems translation</strong>.
                                    </p>
                                </div>
                            </section>

                            {/* Section: Solution */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    The Migration Strategy
                                </h2>
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                                        Instead of rewriting the game in JavaScript, I used <strong className="text-slate-900 dark:text-white">compilation + adaptation</strong>, not reimplementation.
                                    </p>

                                    <div className="bg-slate-900 dark:bg-slate-950 rounded-2xl p-6 font-mono text-sm mb-8 overflow-hidden">
                                        <div className="mb-4">
                                            <span className="text-slate-500">// Native execution path</span>
                                        </div>
                                        <div className="text-green-400 mb-6">
                                            Engine → OS → GPU
                                        </div>
                                        <div className="mb-4">
                                            <span className="text-slate-500">// Web execution path</span>
                                        </div>
                                        <div className="text-blue-400">
                                            Engine → WASM → Browser → Web APIs → GPU
                                        </div>
                                    </div>

                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        Same engine, same logic, same determinism. Just a different transport layer. This avoided logic divergence and ensured identical gameplay semantics across native and web runtimes.
                                    </p>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        The largest challenge was preserving frame pacing and input responsiveness under the browser's event-driven loop.
                                    </p>
                                </div>
                            </section>

                            {/* Section: Design Principles */}
                            <section className="glass-surface rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                                <h2 className="text-sm font-bold uppercase tracking-wider text-primary-500 mb-6">
                                    Design Principles
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">Engine Authority</h3>
                                        <p className="text-slate-600 dark:text-slate-400">The game engine remains the authoritative system. The browser is just a host, so there is no logic duplication across runtimes.</p>
                                    </div>
                                    <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">Determinism First</h3>
                                        <p className="text-slate-600 dark:text-slate-400">Fixed update patterns, consistent state transitions, no browser-driven logic ownership.</p>
                                    </div>
                                    <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">Platform as Adapter</h3>
                                        <p className="text-slate-600 dark:text-slate-400">Treat the platform as an adapter layer, not a rewrite target. Code structured for migration, not lock-in.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Technical Takeaways */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Technical Takeaways
                                </h2>
                                <div>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            { icon: 'fa-brain', label: 'System-level separation of concerns' },
                                            { icon: 'fa-microchip', label: 'Native vs browser runtime constraints' },
                                            { icon: 'fa-sitemap', label: 'Explicit architecture boundaries' },
                                            { icon: 'fa-truck-fast', label: 'Engine portability across runtimes' },
                                            { icon: 'fa-gauge-high', label: 'Performance-aware update loops' },
                                            { icon: 'fa-shield-halved', label: 'Correctness under constrained execution' },
                                        ].map((item) => (
                                            <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                                <i className={`fa-solid ${item.icon} text-accent-500`}></i>
                                                <span className="text-slate-700 dark:text-slate-300">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Section: Philosophy */}
                            <section className="text-center py-8">
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                                    Dinodash reflects a simple philosophy:
                                </p>
                                <blockquote className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    &quot;Build systems that survive environment changes.&quot;
                                </blockquote>
                                <p className="text-lg text-primary-500 font-semibold">
                                    Structure first. Systems second. Platform last.
                                </p>
                            </section>

                        </div>

                        {/* Play Now CTA */}
                        <div className="mt-16 glass-surface rounded-2xl p-8 text-center border border-slate-200 dark:border-slate-700">
                            <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                                <i className="fa-solid fa-gamepad text-3xl text-green-500"></i>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Play Dinodash Now</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                                Experience the game directly in your browser.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://abhijeetp21.github.io/Dinodash-play/"
                                    target="_blank"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-medium rounded-full transition-colors"
                                >
                                    <i className="fa-solid fa-play mr-2"></i>
                                    Play in Browser
                                </a>
                                <a
                                    href="https://github.com/AbhijeetP21/Dinodash"
                                    target="_blank"
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

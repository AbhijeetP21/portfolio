'use client';

import Link from 'next/link';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { CustomCursor } from '@/components/CustomCursor';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function MultiAgentDataWranglerArticle() {
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
                                <span className="inline-flex items-center px-4 py-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium rounded-full">
                                    <i className="fa-solid fa-network-wired mr-2"></i>
                                    Data Engineering
                                </span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">8 min read</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-slate-900 dark:text-white">
                                Building a Multi-Agent Data Wrangling Pipeline
                            </h1>

                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
                                Making the data cleaning process auditable, configurable, and composable with a DAG-based executor.
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 mt-8">
                                {['Python', 'Streamlit', 'Pydantic', 'Data Engineering', 'Multi-Agent'].map((tag) => (
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

                            {/* Section: Intro Quote */}
                            <section>
                                <blockquote className="border-l-4 border-indigo-500 pl-6 py-4 bg-slate-50 dark:bg-slate-800/30 rounded-r-xl mb-6">
                                    <p className="text-lg italic text-slate-700 dark:text-slate-300">
                                        Most data quality tools are monoliths: you feed in a CSV and get back a cleaned version, with no visibility into what changed or why. I wanted something that makes the cleaning process auditable, configurable, and composable &mdash; and that forced me to think about data transformation as a graph problem, not just a list of if-statements.
                                    </p>
                                </blockquote>
                            </section>

                            {/* Section: Why multi-agent */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Why multi-agent for this problem?
                                </h2>
                                <div>
                                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        The short answer: the problem decomposes naturally into specialized concerns that shouldn&apos;t bleed into each other. Profiling a dataset requires different logic than generating transformation candidates, and generating candidates requires different logic than validating that those transformations are safe to apply. Cramming that into a single pipeline function creates a mess that&apos;s hard to test and harder to change.
                                    </p>
                                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        So I structured it as <strong className="text-slate-900 dark:text-white">five distinct agents</strong>: <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-indigo-500">DataProfiler</code>, <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-indigo-500">CandidateGenerator</code>, <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-indigo-500">ValidationService</code>, <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-indigo-500">QualityScorer</code>, and <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-indigo-500">RankingService</code>.
                                    </p>
                                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                                        Each one owns a single contract, takes typed inputs, and returns typed outputs. The <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-indigo-500">AgentCoordinator</code> wires them together, and the <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-indigo-500">PipelineManager</code> handles iteration, state, and failure. The result is a system where you can swap in a different ranking policy without touching validation logic.
                                    </p>
                                </div>
                            </section>

                            {/* Section: Transformations as a DAG */}
                            <section className="glass-surface rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                                <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-500 mb-6">
                                    Transformations as a DAG
                                </h2>
                                <div className="space-y-6">
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        One non-obvious design choice was modeling transformations as a <strong className="text-slate-900 dark:text-white">DAG (Directed Acyclic Graph)</strong> rather than an ordered list. The reason: some transformations have implicit ordering constraints.
                                    </p>

                                    <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50">
                                        <p className="text-sm text-amber-800 dark:text-amber-300">
                                            <i className="fa-solid fa-triangle-exclamation mr-2"></i>
                                            <strong>Why ordering matters:</strong> You should drop duplicates before normalizing, and you should fill missing values before encoding categoricals &mdash; otherwise you risk introducing new nulls or creating spurious categories.
                                        </p>
                                    </div>

                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        Making the dependency graph explicit means the executor can respect those constraints without baking ordering assumptions into the application logic itself.
                                    </p>

                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                                            <i className="fa-solid fa-rotate-left text-green-500"></i>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">Reversibility</h3>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">Transformations also support reversibility. Every applied transformation can be undone, which turned out to be important for the iterative loop: the pipeline runs up to N iterations, and if a candidate transformation reduces the quality score, it gets rolled back instead of committed.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Quality Scoring */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Quality scoring that&apos;s actually meaningful
                                </h2>
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        Most quality metrics I&apos;ve seen are single-dimensional (e.g. &quot;percent non-null&quot;). Here the scorer evaluates four orthogonal dimensions:
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                        {[
                                            { icon: 'fa-check-circle', title: 'Completeness', desc: 'Measures missing values' },
                                            { icon: 'fa-shield-halved', title: 'Validity', desc: 'Checks type correctness' },
                                            { icon: 'fa-fingerprint', title: 'Uniqueness', desc: 'Evaluates duplicates' },
                                            { icon: 'fa-scale-balanced', title: 'Consistency', desc: 'Checks value distributions' },
                                        ].map((item) => (
                                            <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                                    <i className={`fa-solid ${item.icon} text-indigo-500 mt-1`}></i>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        Each one is computed independently and then combined into a composite score using <strong className="text-slate-900 dark:text-white">configurable weights</strong>. This means you can tell the pipeline to optimize for a completeness-heavy score if you&apos;re dealing with survey data, or a uniqueness-heavy score if you&apos;re preparing training data for a model.
                                    </p>

                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        The ranking system then uses those scores to order transformation candidates by expected improvement. The default policy is improvement-based, but it&apos;s pluggable &mdash; the <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm text-indigo-500">RankingService</code> takes any object that conforms to the policy interface.
                                    </p>
                                </div>
                            </section>

                            {/* Section: Failure Recovery */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Failure recovery as a first-class concern
                                </h2>
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        Data is messy and transformations can fail &mdash; a type cast on a column with mixed content, an outlier removal that leaves an empty frame, a normalization on a zero-variance column. Instead of letting exceptions bubble up and kill the run, the pipeline has four configurable recovery strategies:
                                    </p>

                                    <div className="flex flex-wrap gap-3 mb-6">
                                        <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 font-mono text-sm text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700">SKIP</span>
                                        <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 font-mono text-sm text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700">RETRY</span>
                                        <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 font-mono text-sm text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700">ABORT</span>
                                        <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 font-mono text-sm text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700">FALLBACK</span>
                                    </div>

                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        This is set per-run via config, which means a production batch job and an exploratory notebook session can use the same pipeline with different tolerance for failure.
                                    </p>

                                    <div className="p-4 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800/50">
                                        <p className="text-sm text-primary-700 dark:text-primary-300">
                                            <i className="fa-solid fa-lightbulb mr-2"></i>
                                            <strong>Leakage Detector:</strong> The validation layer checks whether a proposed transformation would create target-correlated features or expose information that shouldn&apos;t be available at inference time. This is the kind of thing that&apos;s easy to skip in a quick script but shows up as an embarrassing bug in production.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section: What I'd Do Differently */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    What I&apos;d do differently
                                </h2>
                                <div className="space-y-6">
                                    <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                                            <i className="fa-solid fa-diagram-project text-blue-500 mr-3"></i>
                                            Execution Separation
                                        </h3>
                                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                                            The Streamlit interface is intentionally thin, but state management gets awkward with long-running pipeline executions. Ideally, I&apos;d separate backend/frontend more aggressively (e.g., async job queue with lightweight API) rather than tying computation lifecycle to a session.
                                        </p>
                                    </div>
                                    <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                                            <i className="fa-solid fa-rocket text-purple-500 mr-3"></i>
                                            Execution Engine
                                        </h3>
                                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                                            The pipeline was load-tested up to 200K rows × 42 columns, enough for its intended use. At significantly larger scale, transformation execution should be pushed to Polars or Spark &mdash; pandas stops being the right tool at that point.
                                        </p>
                                    </div>
                                </div>
                            </section>

                        </div>

                        {/* CTA Section */}
                        <div className="mt-16 glass-surface rounded-2xl p-8 text-center border border-slate-200 dark:border-slate-700">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-6">
                                <i className="fa-solid fa-database text-3xl text-indigo-500"></i>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Want to try it out?</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="https://github.com/AbhijeetP21/multi-agent-data-wrangler"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                                >
                                    <i className="fa-brands fa-github text-xl mr-3"></i>
                                    View Source Code
                                </a>
                                <a
                                    href="https://multi-agent-data-wrangler.streamlit.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-indigo-500 text-white font-medium rounded-xl hover:bg-indigo-600 transition-colors"
                                >
                                    <i className="fa-solid fa-arrow-up-right-from-square mr-3"></i>
                                    Live Demo
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

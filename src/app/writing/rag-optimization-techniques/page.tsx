'use client';

import Link from 'next/link';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { CustomCursor } from '@/components/CustomCursor';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function RagOptimizationArticle() {
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
                                <span className="inline-flex items-center px-4 py-2 bg-accent-500/10 text-accent-600 dark:text-accent-400 text-sm font-medium rounded-full">
                                    <i className="fa-solid fa-robot mr-2"></i>
                                    AI / RAG Engineering
                                </span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">10 min read</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-slate-900 dark:text-white">
                                RAG Optimization Techniques for Production AI
                            </h1>

                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
                                How a data analytics dashboard evolved into a natural language query system for complex datasets.
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 mt-8">
                                {['Vanilla JS', 'Gemini API', 'RAG', 'CSV Processing', 'Statistical Analysis'].map((tag) => (
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
                                    When I joined as an intern last summer, the brief was straightforward: build a data analytics dashboard for Pre-Employment Transition Services. What started as a visualization tool evolved into something more interesting: a system that combines traditional data processing with <strong className="text-slate-900 dark:text-white">retrieval-augmented generation</strong> to make complex datasets actually queryable in natural language.
                                </p>
                            </section>

                            {/* Section: The Problem Space */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    The Problem Space
                                </h2>
                                <div>
                                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        State administrators needed to evaluate provider performance across <strong className="text-slate-900 dark:text-white">thousands of participants</strong>, multiple service types, and various time periods. The existing workflow involved manual CSV analysis, spreadsheet pivots, and hours of report generation.
                                    </p>
                                    <blockquote className="border-l-4 border-accent-500 pl-6 py-4 bg-slate-50 dark:bg-slate-800/30 rounded-r-xl my-6">
                                        <p className="text-lg italic text-slate-700 dark:text-slate-300">
                                            The real challenge wasn&apos;t just visualizing the data. It was making it interpretable and actionable without requiring a data science background.
                                        </p>
                                    </blockquote>
                                </div>
                            </section>

                            {/* Section: Architecture */}
                            <section className="glass-surface rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                                <h2 className="text-sm font-bold uppercase tracking-wider text-accent-500 mb-6">
                                    Architecture Decisions
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <i className="fa-solid fa-window-maximize text-blue-500"></i>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">Client-Side Processing</h3>
                                            <p className="text-slate-600 dark:text-slate-400">Vanilla JavaScript, no framework bloat. Uploaded CSVs never leave the user&apos;s browser, ensuring data privacy.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                                            <i className="fa-solid fa-brain text-purple-500"></i>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">Server-Side Intelligence</h3>
                                            <p className="text-slate-600 dark:text-slate-400">Gemini API for natural language interpretation and synthesis. The LLM handles analysis, not data retrieval.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                                            <i className="fa-solid fa-magnifying-glass-chart text-green-500"></i>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">Lightweight Query Engine</h3>
                                            <p className="text-slate-600 dark:text-slate-400">Custom retrieval layer that parses natural language into precise data queries, sitting between user questions and raw data.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section: The Retrieval Component */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    The Retrieval Component
                                </h2>
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        Rather than fine-tuning a model or building a complex vector database, I built a <strong className="text-slate-900 dark:text-white">lightweight query engine</strong> that sits between user questions and the raw data. The key insight: most analytics questions follow predictable patterns.
                                    </p>

                                    <div className="bg-slate-900 dark:bg-slate-950 rounded-2xl p-6 font-mono text-sm mb-8 overflow-x-auto">
                                        <div className="mb-2">
                                            <span className="text-slate-500">// DataQueryEngine core methods</span>
                                        </div>
                                        <div className="space-y-3">
                                            <div>
                                                <span className="text-purple-400">parseTimeframe</span><span className="text-slate-300">(question)</span>
                                                <div className="text-slate-500 ml-4">// &quot;3 months ago&quot;, &quot;May to August&quot;, &quot;last quarter&quot;</div>
                                                <div className="text-slate-500 ml-4">// Convert natural language → date ranges</div>
                                            </div>
                                            <div>
                                                <span className="text-blue-300">identifyEntities</span><span className="text-slate-300">(question, data)</span>
                                                <div className="text-slate-500 ml-4">// Extract agencies, service types, metrics</div>
                                                <div className="text-slate-500 ml-4">// Match against actual dataset values</div>
                                            </div>
                                            <div>
                                                <span className="text-green-400">buildQuery</span><span className="text-slate-300">(parsedQuestion)</span>
                                                <div className="text-slate-500 ml-4">// Construct precise data filters</div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        The engine extracts temporal references, entity mentions (agencies, services), and performance indicators from questions, then builds precise queries against the loaded dataset. This gives the LLM actual data to work with rather than trying to hallucinate answers about CSVs it&apos;s never seen.
                                    </p>
                                </div>
                            </section>

                            {/* Section: Augmented Generation */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Augmented Generation
                                </h2>
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        Once the retrieval engine pulls relevant data, it gets packaged into a <strong className="text-slate-900 dark:text-white">structured prompt</strong> for the Gemini API. The prompt includes:
                                    </p>

                                    <div className="grid gap-4 mb-8">
                                        {[
                                            { icon: 'fa-filter', title: 'Filtered Records', desc: 'Participant IDs, agencies, scores, and timestamps matching the query' },
                                            { icon: 'fa-chart-bar', title: 'Aggregate Metrics', desc: 'Calculated means, totals, and distributions for the filtered set' },
                                            { icon: 'fa-chart-line', title: 'Statistical Context', desc: 'Standard deviations, peer comparisons, and trend data' },
                                            { icon: 'fa-clipboard-check', title: 'Pre-computed SWOT', desc: 'Strengths, weaknesses, opportunities, and threats already analyzed' },
                                        ].map((item) => (
                                            <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                                <i className={`fa-solid ${item.icon} text-accent-500 mt-1`}></i>
                                                <div>
                                                    <h4 className="font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-4 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800/50">
                                        <p className="text-sm text-primary-700 dark:text-primary-300">
                                            <i className="fa-solid fa-lightbulb mr-2"></i>
                                            <strong>Key Insight:</strong> The LLM&apos;s job is interpretation and synthesis, not data retrieval. Ask &quot;which agencies had missing follow-ups in the last 3 months?&quot; and you get exact participant IDs from the query engine + contextual analysis from the LLM.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Statistical Rigor */}
                            <section className="glass-surface rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                                <h2 className="text-sm font-bold uppercase tracking-wider text-accent-500 mb-6">
                                    Statistical Rigor Without Overengineering
                                </h2>
                                <div className="space-y-6">
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        The performance scoring system needed to be <strong className="text-slate-900 dark:text-white">defensible, not vibes-based</strong>. Each agency gets a composite score:
                                    </p>
                                    <div className="space-y-4">
                                        {[
                                            { num: '1', title: 'Improvement Metrics', desc: 'Average pre-post score delta across all participants' },
                                            { num: '2', title: 'Follow-up Completion', desc: 'Percentage of participants with both assessments' },
                                            { num: '3', title: 'Service Variety', desc: 'Breadth of services offered by the agency' },
                                            { num: '4', title: 'Recency Weighting', desc: 'Recent activity matters more than historical data' },
                                            { num: '5', title: 'Confidence Adjustment', desc: 'Agencies with n < 25 participants get penalized' },
                                        ].map((item) => (
                                            <div key={item.num} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                                <div className="w-8 h-8 rounded-full bg-accent-500/10 flex items-center justify-center shrink-0">
                                                    <span className="text-accent-500 font-bold text-sm">{item.num}</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50">
                                        <p className="text-sm text-amber-800 dark:text-amber-300">
                                            <i className="fa-solid fa-triangle-exclamation mr-2"></i>
                                            <strong>Why confidence adjustment matters:</strong> It prevents agencies that served 5 participants (all successful) from outranking agencies with 500 participants and a 90% success rate. Basic statistical power considerations.
                                        </p>
                                    </div>

                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        For outlier detection: flag anything beyond 1σ from the mean within peer groups. Not sophisticated, but administrators aren&apos;t looking for p-values. They need &quot;this agency is underperforming, investigate why.&quot;
                                    </p>
                                </div>
                            </section>

                            {/* Section: What I'd Do Differently */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    What I&apos;d Do Differently
                                </h2>
                                <div className="space-y-6">
                                    <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                                            <i className="fa-solid fa-key text-red-500 mr-3"></i>
                                            API Key Management
                                        </h3>
                                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                                            The prototype hardcodes the Gemini API key in JavaScript (demo only). Production needs server-side proxying or at minimum, environment variables and request signing.
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                                            <i className="fa-solid fa-database text-blue-500 mr-3"></i>
                                            Caching Layer
                                        </h3>
                                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                                            Every &quot;Generate Analysis&quot; click hits the Gemini API. For production, cache analyses by state+period hash, invalidate on data upload. Could cut API costs by 80%.
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                                            <i className="fa-solid fa-scissors text-green-500 mr-3"></i>
                                            Chunking Strategies
                                        </h3>
                                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                                            Currently sending entire filtered datasets in prompts. For states with thousands of participants, this hits token limits. Should implement hierarchical summarization: aggregate at agency level for the prompt, keep raw data for follow-up queries.
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                                            <i className="fa-solid fa-puzzle-piece text-purple-500 mr-3"></i>
                                            Drupal Integration
                                        </h3>
                                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                                            Migration path to Drupal for proper user management and data persistence. The current decoupled frontend architecture makes this relatively clean, but the statistical analysis functions need to move server-side.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Measuring Success */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Measuring Success
                                </h2>
                                <div>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        The dashboard went live for pilot testing in three states. Early feedback showed administrators were actually using the follow-up question feature, asking things like <em>&quot;show me participants who started strong but dropped off&quot;</em> or <em>&quot;compare urban vs rural provider performance.&quot;</em>
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                        {[
                                            { value: '~2h → 30s', label: 'Analysis Generation Time' },
                                            { value: '3 States', label: 'Pilot Testing Scope' },
                                            { value: '80%', label: 'Potential API Cost Savings' },
                                            { value: '90%', label: 'Value vs Full Vector DB Setup' },
                                        ].map((item) => (
                                            <div key={item.label} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 text-center">
                                                <div className="text-2xl font-bold text-accent-500 mb-1">{item.value}</div>
                                                <div className="text-xs text-slate-600 dark:text-slate-400">{item.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        More importantly, the system surfaced actionable insights that weren&apos;t obvious from raw CSVs: correlation between service variety and participant improvement, or specific agencies with concerning follow-up gaps.
                                    </p>
                                </div>
                            </section>

                            {/* Section: Technical Takeaways */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Technical Takeaways
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { icon: 'fa-feather', label: 'RAG doesn\'t require heavy infrastructure. A well-designed query parser + LLM delivers 90% of the value with 10% of the complexity.' },
                                        { icon: 'fa-server', label: 'Know when to stop processing client-side. CSV parsing in JS is fine. Complex statistical analysis? Plan for server-side from day one.' },
                                        { icon: 'fa-calculator', label: 'Statistical literacy matters. Domain expertise + mathematical rigor beats fancy ML every time for structured data use cases.' },
                                        { icon: 'fa-wand-magic-sparkles', label: 'Prompt engineering is system design. The retrieval layer and context structure matter more than the LLM itself.' },
                                    ].map((item) => (
                                        <div key={item.label} className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                            <i className={`fa-solid ${item.icon} text-accent-500 mt-0.5`}></i>
                                            <span className="text-sm text-slate-700 dark:text-slate-300">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Section: Philosophy */}
                            <section className="text-center py-8">
                                <blockquote className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    &quot;The LLM is the least interesting part.&quot;
                                </blockquote>
                                <p className="text-lg text-accent-500 font-semibold">
                                    The difference between a hallucinating chatbot and a reliable analytics tool is how you structure the retrieval layer.
                                </p>
                            </section>

                        </div>

                        {/* CTA Section */}
                        <div className="mt-16 glass-surface rounded-2xl p-8 text-center border border-slate-200 dark:border-slate-700">
                            <div className="w-16 h-16 rounded-2xl bg-accent-500/10 flex items-center justify-center mx-auto mb-4">
                                <i className="fa-solid fa-robot text-3xl text-accent-500"></i>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Built During Internship</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                                Summer 2025 internship project. Currently being integrated into a production Drupal environment.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                <span className="inline-flex items-center px-4 py-2 bg-accent-500/10 text-accent-600 dark:text-accent-400 text-sm font-medium rounded-full">
                                    <i className="fa-solid fa-code mr-2"></i>
                                    Vanilla JS + Gemini API
                                </span>
                                <span className="inline-flex items-center px-4 py-2 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-full">
                                    <i className="fa-solid fa-chart-pie mr-2"></i>
                                    Statistical Analysis
                                </span>
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

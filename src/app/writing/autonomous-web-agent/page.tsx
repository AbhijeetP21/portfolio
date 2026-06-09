'use client';

import Link from 'next/link';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { CustomCursor } from '@/components/CustomCursor';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function AutonomousWebAgentArticle() {
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
                                <span className="inline-flex items-center px-4 py-2 bg-violet-500/10 text-violet-600 dark:text-violet-400 text-sm font-medium rounded-full">
                                    <i className="fa-solid fa-spider mr-2"></i>
                                    AI Engineering
                                </span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">9 min read</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-slate-900 dark:text-white">
                                Autonomous Web Agent: What Makes It Reliable Is Not the Prompt
                            </h1>

                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
                                Building a form-filling agent that actually works: perception pipelines, structured error recovery, and the engineering that surrounds the LLM.
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 mt-8">
                                {['Python', 'Playwright', 'LLM', 'Agentic AI', 'Automation'].map((tag) => (
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
                                <blockquote className="border-l-4 border-violet-500 pl-6 py-4 bg-slate-50 dark:bg-slate-800/30 rounded-r-xl mb-6">
                                    <p className="text-lg italic text-slate-700 dark:text-slate-300">
                                        Most online forms are fifteen questions in a different order. Dropdowns, repeated fields, nothing that required me to actually think. I wanted to point an agent at a form, have it fill what it could, then review and submit. The hard part turned out to be not the form-filling. It was making the agent reliable enough to actually trust with it.
                                    </p>
                                </blockquote>
                            </section>

                            {/* Section: The Loop That Matters */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    The Loop That Matters
                                </h2>
                                <div>
                                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        The agent runs a four-step cycle until the goal is done or a budget runs out: <strong className="text-slate-900 dark:text-white">perceive</strong> the page, <strong className="text-slate-900 dark:text-white">plan</strong> the next action, <strong className="text-slate-900 dark:text-white">act</strong> on it with Playwright, and <strong className="text-slate-900 dark:text-white">record</strong> what happened. Then repeat.
                                    </p>
                                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        That loop is not the interesting part. What surrounds it is.
                                    </p>
                                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                                        Every useful agent needs to handle what happens when a step doesn&apos;t go as planned: the model picks something that doesn&apos;t exist, the page is structured differently than expected, or a critical field doesn&apos;t accept the value provided. The engineering that makes an agent <em>reliable</em> lives in the error recovery, observation pipeline, and memory system, not in the prompt.
                                    </p>
                                </div>
                            </section>

                            {/* Section: How The Agent Sees The Page */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    How the Agent Sees the Page
                                </h2>
                                <div>
                                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        The perception step is where most of the complexity lives. The agent does not receive raw HTML. It receives a structured, pruned snapshot that strips away everything the model doesn&apos;t need: hidden elements, layout wrappers, script tags. What remains is an annotated tree of <strong className="text-slate-900 dark:text-white">interactive elements</strong> with stable references.
                                    </p>
                                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        Each actionable element gets a numeric tag injected into the DOM at extraction time. When the model says &quot;click element 14,&quot; the executor can resolve that to an exact DOM node without ambiguity. This is more reliable than CSS selectors or XPaths, which break when pages restructure or use dynamic class names.
                                    </p>

                                    <div className="bg-slate-900 dark:bg-slate-950 rounded-2xl p-6 font-mono text-sm mb-8 overflow-x-auto text-slate-300">
                                        <div className="text-slate-500 mb-2">// Simplified perception output</div>
                                        <div>
                                            <span className="text-purple-400">{'{'}</span>
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-blue-300">&quot;element_id&quot;</span>: <span className="text-emerald-400">14</span>,
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-blue-300">&quot;type&quot;</span>: <span className="text-emerald-400">&quot;input&quot;</span>,
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-blue-300">&quot;label&quot;</span>: <span className="text-emerald-400">&quot;First Name&quot;</span>,
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-blue-300">&quot;current_value&quot;</span>: <span className="text-emerald-400">&quot;&quot;</span>,
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-blue-300">&quot;required&quot;</span>: <span className="text-cyan-400">true</span>
                                        </div>
                                        <div>
                                            <span className="text-purple-400">{'}'}</span>
                                        </div>
                                    </div>

                                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                                        The perception layer also captures the current state of dropdowns (all available options), checkboxes (checked or not), and validation messages visible on the page. The model receives everything it needs to make a decision without guessing.
                                    </p>
                                </div>
                            </section>

                            {/* Section: Structured Actions */}
                            <section className="glass-surface rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                                <h2 className="text-sm font-bold uppercase tracking-wider text-violet-500 mb-6">
                                    Structured Actions, Not Free-Form Text
                                </h2>
                                <div className="space-y-6">
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        The model does not output Playwright code. It outputs a structured JSON action that the executor translates into browser commands. This separation is the single most important reliability decision in the system.
                                    </p>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        If the model generated arbitrary code, every response would need sandboxing, validation, and error handling for syntax failures. Instead, the action space is constrained to a small set of primitives:
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            { action: 'click', desc: 'Click an element by its numeric tag.' },
                                            { action: 'type', desc: 'Clear and type text into an input field.' },
                                            { action: 'select', desc: 'Choose a dropdown option by visible text.' },
                                            { action: 'scroll', desc: 'Scroll the viewport to reveal more elements.' },
                                            { action: 'wait', desc: 'Pause for a specified duration (page loads, animations).' },
                                            { action: 'done', desc: 'Signal that the task is complete.' },
                                        ].map((item) => (
                                            <div key={item.action} className="flex flex-col p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                                <span className="font-mono text-sm font-bold text-violet-600 dark:text-violet-400 mb-2">{item.action}</span>
                                                <p className="text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        Each action is validated before execution. If the model references an element that doesn&apos;t exist in the current snapshot, or tries to type into a non-input element, <strong className="text-slate-900 dark:text-white">the error is caught before it reaches the browser.</strong> The model gets a clear error message and the next iteration can correct course.
                                    </p>
                                </div>
                            </section>

                            {/* Section: Error Recovery */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Error Recovery Is the Product
                                </h2>
                                <div className="space-y-12">
                                    {/* Error 1 */}
                                    <div className="border-l-4 border-amber-500 pl-6 space-y-4">
                                        <h3 className="font-bold text-xl text-slate-900 dark:text-white">
                                            1. Element Not Found
                                        </h3>
                                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                            The model refers to element 23, but the current page snapshot only has elements up to 19. This happens when the page changed between perception cycles, or when the model hallucinates an element from a previous step.
                                        </p>
                                        <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                                            <p className="text-sm text-amber-800 dark:text-amber-400">
                                                <i className="fa-solid fa-circle-info mr-2"></i>
                                                <strong>Recovery:</strong> The agent re-perceives the page with a fresh snapshot and retries. The model gets the updated element list with its original goal still in context. No hard failure; the loop just runs again with correct information.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Error 2 */}
                                    <div className="border-l-4 border-amber-500 pl-6 space-y-4">
                                        <h3 className="font-bold text-xl text-slate-900 dark:text-white">
                                            2. Action Timeout
                                        </h3>
                                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                            Playwright clicks a button that triggers navigation, but the next page takes too long to load. Or a modal appears that blocks the expected element.
                                        </p>
                                        <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                                            <p className="text-sm text-amber-800 dark:text-amber-400">
                                                <i className="fa-solid fa-circle-info mr-2"></i>
                                                <strong>Recovery:</strong> Timeouts are capped per action. On timeout, the agent captures whatever is currently visible, includes the timeout context in the next prompt, and lets the model decide whether to wait, scroll, or try a different approach.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Error 3 */}
                                    <div className="border-l-4 border-amber-500 pl-6 space-y-4">
                                        <h3 className="font-bold text-xl text-slate-900 dark:text-white">
                                            3. Validation Failure
                                        </h3>
                                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                            The agent fills a field and moves on, but the form shows a validation error: &quot;Invalid phone number format.&quot; The error is only visible after the next perception cycle captures the updated DOM.
                                        </p>
                                        <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                                            <p className="text-sm text-amber-800 dark:text-amber-400">
                                                <i className="fa-solid fa-circle-info mr-2"></i>
                                                <strong>Recovery:</strong> The perception layer explicitly captures validation messages attached to form fields. The model sees &quot;element 14 has error: Invalid phone number format&quot; and can correct the value in the next step. This is the most common recovery path and the one that matters most for form-filling reliability.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Memory and Context */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    Memory and Context Management
                                </h2>
                                <div>
                                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        Every action the agent takes is appended to a running history. The model receives this history alongside each new perception snapshot. This means it knows what it already filled, what failed, and what the page looked like before the current state.
                                    </p>
                                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        The problem is that <strong className="text-slate-900 dark:text-white">history grows fast.</strong> A 30-field form with validation retries can produce 50+ steps. Sending all of that into the context window every time wastes tokens and can push the model past its effective attention range.
                                    </p>

                                    <h3 className="font-bold text-slate-900 dark:text-white text-lg mt-8 mb-4">The solution is a sliding window with summarization:</h3>

                                    <div className="space-y-4">
                                        {[
                                            { icon: 'fa-list-check', label: 'Recent actions', desc: 'The last N actions are kept in full detail, with element references and outcomes.' },
                                            { icon: 'fa-compress', label: 'Older actions', desc: 'Actions beyond the window are compressed into a summary: "Filled first name, last name, email. Selected country as USA."' },
                                            { icon: 'fa-triangle-exclamation', label: 'Errors always kept', desc: 'Any action that resulted in an error is never summarized away. The model needs to remember what went wrong to avoid repeating it.' },
                                        ].map((item) => (
                                            <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-slate-100/50 dark:bg-slate-800/10 border border-slate-200 dark:border-slate-700/30">
                                                <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
                                                    <i className={`fa-solid ${item.icon} text-violet-500`}></i>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{item.label}</h4>
                                                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Section: Budget and Guardrails */}
                            <section className="glass-surface rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                                <h2 className="text-sm font-bold uppercase tracking-wider text-violet-500 mb-6">
                                    Budget and Guardrails
                                </h2>
                                <div className="space-y-6">
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        An agent without a budget is an agent that loops forever. The system enforces two limits: a <strong className="text-slate-900 dark:text-white">maximum number of steps</strong> and a <strong className="text-slate-900 dark:text-white">maximum number of consecutive errors.</strong> If either is exceeded, the agent stops, saves its current state, and reports what it accomplished and where it got stuck.
                                    </p>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        The step budget is not just a safety mechanism. It forces the model to be efficient. With a limited number of actions, the model learns (through in-context examples) to batch related actions and avoid unnecessary exploration. A well-configured agent fills a 20-field form in about 25 steps. A poorly prompted one can take 60+.
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-4 mt-6">
                                        {[
                                            { metric: 'Max Steps', value: '~50', desc: 'Hard limit on total actions per task. Prevents runaway loops.' },
                                            { metric: 'Error Threshold', value: '3-5', desc: 'Consecutive errors before the agent pauses for human review.' },
                                            { metric: 'Action Timeout', value: '10s', desc: 'Per-action timeout. Navigation and page loads get longer windows.' },
                                            { metric: 'Token Budget', value: 'Sliding', desc: 'Context window managed by summarizing old history, keeping errors.' },
                                        ].map((item) => (
                                            <div key={item.metric} className="flex flex-col p-4 rounded-xl bg-slate-100/50 dark:bg-slate-800/10 border border-slate-200 dark:border-slate-700/30">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="font-mono text-sm font-bold text-violet-600 dark:text-violet-400">{item.metric}</span>
                                                    <span className="text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded font-mono">{item.value}</span>
                                                </div>
                                                <p className="text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Section: The Prompt Is the Least Interesting Part */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    The Prompt Is the Least Interesting Part
                                </h2>
                                <div>
                                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        The system prompt is short. It tells the model it&apos;s a web automation agent, describes the action format, and provides the user&apos;s data as key-value pairs. There is no elaborate chain-of-thought scaffolding or multi-page instruction set.
                                    </p>
                                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                        The reason this works is that <strong className="text-slate-900 dark:text-white">the structured environment does most of the work.</strong> The model doesn&apos;t need to reason about how to interact with the browser because the action space is constrained. It doesn&apos;t need to figure out which elements are interactive because the perception layer already filtered them. It doesn&apos;t need to remember what happened ten steps ago because the memory system provides a summary.
                                    </p>
                                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                                        Investing hours in prompt engineering is the wrong optimization target. The returns come from making the perception more accurate, the action space more precise, and the error recovery more robust. The prompt is the glue, not the structure.
                                    </p>
                                </div>
                            </section>

                            {/* Section: What Made It Reliable */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    What Actually Made It Reliable
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { title: 'Deterministic Perception', desc: 'Stripping the DOM to only interactive elements with stable numeric references eliminated most hallucination-related failures.' },
                                        { title: 'Constrained Action Space', desc: 'A small, validated set of actions means the model cannot generate something the executor cannot handle. Every possible output is accounted for.' },
                                        { title: 'Error as Information', desc: 'Errors are not failures. They are observations fed back into the loop. The agent learns from each mistake within a single session.' },
                                        { title: 'Budget Enforcement', desc: 'Hard limits on steps and consecutive errors prevent infinite loops and force efficiency. The agent must make progress or stop.' },
                                    ].map((item) => (
                                        <div key={item.title} className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                            <h4 className="font-semibold text-slate-900 dark:text-white text-base mb-2">{item.title}</h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Section: What I'd Do Differently */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                    What I&apos;d Do Differently
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { title: 'Visual Verification', desc: 'Add screenshot comparison after critical actions to verify the page state matches expectations, not just DOM inspection.' },
                                        { title: 'Multi-Page Workflows', desc: 'Extend the memory system to handle multi-page flows where context from page 1 affects decisions on page 3.' },
                                        { title: 'Parallel Evaluation', desc: 'Run the same task against multiple model providers simultaneously and compare outcomes for reliability benchmarking.' },
                                        { title: 'Human-in-the-Loop', desc: 'Build a review step where the agent pauses before submission, showing everything it filled for human approval.' },
                                    ].map((item) => (
                                        <div key={item.title} className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50">
                                            <h4 className="font-semibold text-slate-900 dark:text-white text-base mb-2">{item.title}</h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </div>

                        {/* CTA Section */}
                        <div className="mt-16 glass-surface rounded-2xl p-8 text-center border border-slate-200 dark:border-slate-700">
                            <div className="w-16 h-16 rounded-2xl bg-violet-500/10 flex items-center justify-center mx-auto mb-6">
                                <i className="fa-solid fa-spider text-3xl text-violet-500"></i>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Explore the source code</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="https://github.com/AbhijeetP21/autonomous-web-agent-v2.1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                                >
                                    <i className="fa-brands fa-github text-xl mr-3"></i>
                                    View Source Code
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

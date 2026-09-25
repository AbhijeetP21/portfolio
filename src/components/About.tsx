'use client';

export function About() {
  return (
    <section id="about" className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-primary-500">/</span> About Me
          </h2>

          <div className="glass-surface rounded-2xl p-8 md:p-10 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed tilt-card">
            <p>
              I&apos;m an AI engineer at Paxel AI, a pharma sales intelligence startup, where I build the governed AI
              assistant that lets field sales reps ask plain-English questions of their own sales data. I care about
              software that is secure, reliable, and production-ready. My background spans software engineering, machine
              learning, and security, shaped by both academic research and hands-on engineering.
            </p>

            <p>
              I started my journey in India, where I worked on early research, patents, and engineering projects before
              moving to the U.S. and completing my MS in Computer Science at the University of Utah, deepening my
              foundation in systems, algorithms, and applied AI.
            </p>

            <p>
              Most of my work today sits where LLMs meet real production data: agents that are grounded in governed data,
              safe to run against a live database, and measured by evals rather than demos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

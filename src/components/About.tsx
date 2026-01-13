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
              I&apos;m a computer science graduate student at the University of Utah, focused on building intelligent
              software that is secure, reliable, and production-ready. My background spans software engineering, machine
              learning, and security. It&apos;s shaped by both academic research and hands-on engineering.
            </p>

            <p>
              I started my journey in India, where I worked on early research, patents, and engineering projects before
              moving to the U.S. to deepen my foundation in systems, algorithms, and applied AI.
            </p>

            <p>
              I&apos;m currently seeking software engineering roles where I can work on meaningful systems, learn from
              strong engineers, and ship work that matters at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

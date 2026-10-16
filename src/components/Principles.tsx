'use client';

import { principles } from '@/data/principles';

export function Principles() {
  return (
    <section id="principles" className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary-500">/</span> Words I Live By
          </h2>
          <p className="text-slate-600 dark:text-slate-400">A few lines I keep coming back to, at work and outside of it.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <ul className="glass-surface rounded-2xl px-8 md:px-10 py-2 divide-y divide-slate-200 dark:divide-slate-700 text-slate-700 dark:text-slate-300 leading-relaxed tilt-card">
            {principles.map((line, idx) => (
              <li key={idx} className="py-4">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

'use client';

import { patents, awards } from '@/data/patents';

export function Patents() {
  return (
    <section id="patents" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary-500">/</span> Intellectual Property &amp; Research
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {patents.map((patent, idx) => (
            <div key={idx} className="glass-surface p-6 rounded-xl flex items-start gap-4 tilt-card cursor-target">
              <div className={`text-3xl ${patent.iconColor}`}>
                <i className={`fa-solid ${patent.icon}`}></i>
              </div>
              <div>
                <span
                  className={`text-xs font-mono ${patent.badgeColor} border px-2 py-0.5 rounded`}
                >
                  {patent.type}
                </span>
                <h3 className="text-lg font-bold text-slate-950 dark:text-white mt-2">{patent.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{patent.reference}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Awards */}
        <div className="max-w-5xl mx-auto mt-14">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Honors &amp; Awards</h3>
            <p className="text-slate-600 dark:text-slate-400">Proof that I can finish what I start.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {awards.map((award, idx) => (
              <div key={idx} className="glass-surface p-6 rounded-xl tilt-card">
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-yellow-500">
                    <i className={`fa-solid ${award.icon}`}></i>
                  </div>
                  <div className="text-sm text-slate-700 dark:text-slate-300">
                    <div className="font-bold text-slate-950 dark:text-white">{award.title}</div>
                    <div className="text-slate-600 dark:text-slate-400">{award.organization}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

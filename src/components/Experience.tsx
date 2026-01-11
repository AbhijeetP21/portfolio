'use client';

import { experiences } from '@/data/experience';

const colorMap: Record<string, string> = {
  primary: 'bg-primary-500',
  accent: 'bg-accent-500',
  blue: 'bg-blue-500',
  slate: 'bg-slate-500',
  red: 'bg-red-500',
};

const hoverRingMap: Record<string, string> = {
  primary: 'group-hover:ring-primary-500/20',
  accent: 'group-hover:ring-accent-500/20',
  blue: 'group-hover:ring-blue-500/20',
  slate: 'group-hover:ring-slate-500/20',
  red: 'group-hover:ring-red-500/20',
};

const titleColorMap: Record<string, string> = {
  primary: 'text-primary-500',
  accent: 'text-accent-500',
  blue: 'text-blue-500',
  slate: 'text-slate-700 dark:text-slate-200',
  red: 'text-red-500',
};

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary-500">/</span> Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400">Work across security, AI engineering, and backend systems.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 gap-10 pb-12 group"
              style={idx === experiences.length - 1 ? { paddingBottom: '0.5rem' } : {}}
            >
              <div className="absolute top-0 left-0 md:left-[40%] h-full w-px bg-slate-200 dark:bg-slate-800 md:-ml-px"></div>
              <div
                className={`absolute top-2 left-[-4px] md:left-[40%] w-2 h-2 rounded-full ${colorMap[exp.color]} md:-ml-1 ring-4 ring-white dark:ring-slate-950 ${hoverRingMap[exp.color]} transition-all`}
              ></div>

              <div className="md:col-span-2 md:text-right mb-2 md:mb-0">
                <h4 className="text-slate-950 dark:text-white font-bold">{exp.date}</h4>
                <span className="text-sm text-slate-500 dark:text-slate-400 font-mono">{exp.location}</span>
              </div>

              <div className="md:col-span-3 pl-6 md:pl-0">
                <h3 className={`text-xl font-bold ${titleColorMap[exp.color]}`}>{exp.title}</h3>
                <h4 className="text-lg font-semibold mb-2">{exp.company}</h4>
                {exp.description && (
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">{exp.description}</p>
                )}
                <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

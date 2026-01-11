'use client';

import { skills } from '@/data/skills';

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-slate-50/40 dark:bg-slate-900/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-accent-500">/</span> Technical Arsenal
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, idx) => (
            <div key={idx} className="glass-surface rounded-2xl p-7 tilt-card">
              <h3 className="text-lg font-bold text-slate-950 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 font-mono text-sm">
                {category.items.map((item, itemIdx) => {
                  const isBrand = ['fa-java', 'fa-python', 'fa-js', 'fa-aws', 'fa-docker', 'fa-node'].includes(item.icon);
                  const iconClass = isBrand ? `fa-brands ${item.icon}` : `fa-solid ${item.icon}`;
                  return (
                    <li key={itemIdx}>
                      <i className={`${iconClass} mr-2 ${item.iconColor}`}></i>
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

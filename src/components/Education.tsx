'use client';

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary-500">/</span> Education
          </h2>
          <p className="text-slate-600 dark:text-slate-400">What I&apos;m studying and what I&apos;ve shipped so far.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="glass-surface rounded-2xl p-8 tilt-card">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">University of Utah</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">Master of Science in Computer Science</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-mono mt-2">
                  Aug 2024 – May 2026 • Salt Lake City, UT
                </p>
              </div>
              <div className="text-primary-500 text-3xl">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-slate-600 dark:text-slate-300 font-semibold mb-2">GPA: 3.7/4.0</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-semibold mb-2">Relevant coursework</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                  Graduate Algorithms (CS 6150)
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                  Operating Systems (CS 6460)
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                  Computer Architecture (CS 6810)
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                  Security &amp; Privacy (CS 6495)
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                  Machine Learning Security (CS 6958)
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                  Deep Learning (CS 6353)
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                  Neuro-Symbolic Modeling (CS 6964, Special Topic)
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                  Manage Data with ML (CS 6964, Special Topic)
                </span>
              </div>
            </div>
          </div>

          <div className="glass-surface rounded-2xl p-8 tilt-card">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">University of Pune</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">Bachelor of Engineering in Computer Engineering</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-mono mt-2">Jul 2019 – May 2023 • Pune, India</p>
              </div>
              <div className="text-accent-500 text-3xl">
                <i className="fa-solid fa-award"></i>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-semibold mb-2">GPA: 8.7/10</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-semibold mb-2">Activities</p>
                <ul className="list-disc list-outside ml-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>Co-founder &amp; Vice President of Meraki</li>
                  <li>Member, Research &amp; Innovation Cell and ACE</li>
                  <li>Japanese language program (hobby)</li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-semibold mb-2">Publications &amp; Outreach</p>
                <ul className="list-disc list-outside ml-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>Published 3 Indian patents and 2 IEEE papers</li>
                  <li>Conducted cybersecurity awareness program at Pune Cyber Police Cell</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

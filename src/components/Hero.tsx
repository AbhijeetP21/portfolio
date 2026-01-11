'use client';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Terminal Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-primary-600 dark:text-primary-400 mb-8 animate-fade-in-up cursor-target">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            System.out.println("Hello World");
          </div>

          <h1
            className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Building <span className="text-gradient">Intelligent</span> &amp; <br />
            <span className="text-slate-950 dark:text-white">Secure Systems</span>
          </h1>

          <p
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            I&apos;m <strong>Abhijeet S Pachpute</strong>, MS in Computer Science @ University of Utah (May 2026). I build
            production software, ship applied AI, and care obsessively about security and reliability.
          </p>

          {/* Quick facts */}
          <div
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10 animate-fade-in-up"
            style={{ animationDelay: '0.25s' }}
          >
            <span className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 text-sm text-slate-700 dark:text-slate-300 cursor-target">
              <i className="fa-solid fa-location-dot mr-2 text-primary-500"></i> Open for roles across US
            </span>
            <span className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 text-sm text-slate-700 dark:text-slate-300 cursor-target">
              <i className="fa-solid fa-graduation-cap mr-2 text-accent-500"></i> MS CS • May 2026
            </span>
            <span className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 text-sm text-slate-700 dark:text-slate-300 cursor-target">
              <i className="fa-solid fa-bolt mr-2 text-yellow-500"></i> Open to SWE / AI / Security roles
            </span>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold rounded-full hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(0,0,0,0.12)] dark:shadow-[0_0_20px_rgba(255,255,255,0.18)] cursor-target"
            >
              View My Work
            </a>
            <a
              href="/Abhijeet_Resume.pdf"
              target="_blank"
              className="px-8 py-4 glass-surface text-slate-950 dark:text-white font-semibold rounded-full hover:opacity-95 transition-all flex items-center gap-2 group cursor-target"
            >
              <span>Download Resume</span>
              <i className="fa-solid fa-download group-hover:animate-bounce"></i>
            </a>
          </div>

          {/* Links */}
          <div className="mt-8 flex justify-center gap-5 text-sm text-slate-600 dark:text-slate-400">
            <a
              className="hover:text-primary-500 transition-colors cursor-target"
              target="_blank"
              href="mailto:abhijeetsp21@gmail.com"
            >
              <i className="fa-solid fa-envelope mr-2"></i>Email
            </a>
            <a
              className="hover:text-primary-500 transition-colors cursor-target"
              target="_blank"
              href="https://linkedin.com/in/abhijeet-pachpute/"
            >
              <i className="fa-brands fa-linkedin mr-2"></i>LinkedIn
            </a>
            <a
              className="hover:text-primary-500 transition-colors cursor-target"
              target="_blank"
              href="https://github.com/AbhijeetP21"
            >
              <i className="fa-brands fa-github mr-2"></i>GitHub
            </a>
          </div>

          {/* Tech Stack Strip */}
          <div className="mt-16 mb-20 pt-8 border-t border-slate-200/70 dark:border-slate-800/50 flex flex-wrap justify-center gap-8 opacity-70 hover:opacity-100 transition-opacity">
            <i className="fa-brands fa-aws text-3xl tech-icon" title="AWS" style={{ animationDelay: '0s' }}></i>
            <i className="fa-brands fa-docker text-3xl tech-icon" title="Docker" style={{ animationDelay: '0.1s' }}></i>
            <i className="fa-brands fa-python text-3xl tech-icon" title="Python" style={{ animationDelay: '0.2s' }}></i>
            <i className="fa-brands fa-java text-3xl tech-icon" title="Java" style={{ animationDelay: '0.3s' }}></i>
            <i className="fa-brands fa-react text-3xl tech-icon animate-spin-slow" title="React" style={{ animationDelay: '0.4s' }}></i>
            <i className="fa-brands fa-node text-3xl tech-icon" title="Node.js" style={{ animationDelay: '0.5s' }}></i>
          </div>
        </div>
      </div>
    </section>
  );
}

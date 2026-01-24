'use client';

import { useToast } from '@/contexts/ToastContext';

export function Contact() {
  const { displayToast } = useToast();

  const copyEmail = () => {
    const email = 'abhijeetsp21@gmail.com';
    navigator.clipboard
      .writeText(email)
      .then(() => displayToast('Email copied to clipboard!'))
      .catch(() => displayToast('Failed to copy email'));
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass-surface rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 tilt-card">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Let&apos;s build something that works at scale.</h2>
            <p className="text-slate-600 dark:text-slate-400">
              If it touches production, reliability, or security… I&apos;m interested.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-500/10 flex items-center justify-center text-accent-500 shrink-0">
                  <i className="fa-solid fa-envelope text-xl"></i>
                </div>
                <div>
                  <h4 className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Email</h4>
                  <a
                    href="mailto:abhijeetsp21@gmail.com"
                    className="text-lg hover:text-accent-500 transition-colors break-all cursor-target"
                  >
                    abhijeetsp21@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-500/10 flex items-center justify-center text-accent-500 shrink-0">
                  <i className="fa-solid fa-phone text-xl"></i>
                </div>
                <div>
                  <h4 className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Phone</h4>
                  <a href="tel:+18019497940" className="text-lg hover:text-accent-500 transition-colors cursor-target">
                    (801) 949-7940
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-500/10 flex items-center justify-center text-accent-500 shrink-0">
                  <i className="fa-solid fa-location-dot text-xl"></i>
                </div>
                <div>
                  <h4 className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Location</h4>
                  <p className="text-lg">United States</p>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://linkedin.com/in/abhijeet-pachpute/"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white hover:bg-[#0077b5] hover:text-white transition-all hover:-translate-y-1 cursor-target"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in text-xl"></i>
                </a>
                <a
                  href="https://github.com/AbhijeetP21"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white hover:bg-slate-700 hover:text-white transition-all hover:-translate-y-1 cursor-target"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github text-xl"></i>
                </a>
                <a
                  href="https://scholar.google.com/citations?user=1aG6rS8AAAAJ&hl=en"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white hover:bg-[#4285F4] hover:text-white transition-all hover:-translate-y-1 cursor-target"
                  aria-label="Google Scholar"
                >
                  <i className="fa-solid fa-graduation-cap text-xl"></i>
                </a>
              </div>
            </div>

            {/* Action */}
            <div className="bg-white/60 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
              <i className="fa-regular fa-paper-plane text-4xl text-accent-500 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Send me a message</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">I usually respond within 24 hours.</p>
              <a
                href="mailto:abhijeetsp21@gmail.com"
                className="inline-block w-full py-3 bg-accent-500 hover:bg-accent-400 text-white font-bold rounded-xl transition-colors cursor-target"
              >
                Launch Email App
              </a>
              <button
                onClick={copyEmail}
                className="mt-4 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white underline decoration-dotted cursor-target"
              >
                Or copy email to clipboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { Navbar } from '@/components/Navbar';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Patents } from '@/components/Patents';
import { Skills } from '@/components/Skills';
import { Principles } from '@/components/Principles';
import { Contact } from '@/components/Contact';
import { Toast } from '@/components/Toast';
import { ToastProvider } from '@/contexts/ToastContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <ToastProvider>
      {/* Skip link for keyboard accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <BackgroundEffects />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Patents />
        <Skills />
        <Principles />
        <Contact />
      </main>
      <Toast />
      <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Abhijeet Pachpute. Crafted with <i className="fa-solid fa-code text-primary-500"></i> and{' '}
          <i className="fa-solid fa-coffee text-yellow-600"></i>.
        </p>
      </footer>
    </ToastProvider>
  );
}

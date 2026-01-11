'use client';

import { Navbar } from '@/components/Navbar';
import { CustomCursor } from '@/components/CustomCursor';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { Hero } from '@/components/Hero';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Patents } from '@/components/Patents';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { Toast } from '@/components/Toast';
import { ToastProvider } from '@/contexts/ToastContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useEffect } from 'react';

export default function Home() {
  useScrollReveal();

  // Initialize custom 3D tilt effect
  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const cards = document.querySelectorAll<HTMLElement>('.tilt-card');

    const settings = {
      max: 10,           // Max rotation in degrees (professional & subtle)
      perspective: 1000, // Perspective value
      scale: 1.025,      // Scale on hover (very subtle)
      speed: 500,        // Animation speed ms
    };

    const handlers: Array<{ el: HTMLElement; enter: () => void; move: (e: MouseEvent) => void; leave: () => void }> = [];

    cards.forEach((card) => {
      const onEnter = () => {
        card.style.transition = `transform ${settings.speed}ms ease-out`;
      };

      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation angles
        const rotateX = ((y - centerY) / centerY) * -settings.max;
        const rotateY = ((x - centerX) / centerX) * settings.max;

        // Apply transform with !important via setProperty
        card.style.setProperty(
          'transform',
          `perspective(${settings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${settings.scale})`,
          'important'
        );
        card.style.transition = 'transform 100ms ease-out';
      };

      const onLeave = () => {
        card.style.setProperty(
          'transform',
          `perspective(${settings.perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
          'important'
        );
        card.style.transition = `transform ${settings.speed}ms ease-out`;
      };

      card.addEventListener('mouseenter', onEnter);
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);

      handlers.push({ el: card, enter: onEnter, move: onMove, leave: onLeave });
    });

    return () => {
      handlers.forEach(({ el, enter, move, leave }) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseleave', leave);
        el.style.removeProperty('transform');
        el.style.removeProperty('transition');
      });
    };
  }, []);

  // Set up cursor hover affordance
  useEffect(() => {
    const setHover = (on: boolean) => document.body.classList.toggle('cursor-hover', on);
    
    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);
    
    const elements = document.querySelectorAll('a, button, .cursor-target');
    elements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <ToastProvider>
      <CustomCursor />
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Patents />
      <Skills />
      <Contact />
      <Toast />
      <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm">
        <p>
          &copy; 2024 Abhijeet Pachpute. Crafted with <i className="fa-solid fa-code text-primary-500"></i> and{' '}
          <i className="fa-solid fa-coffee text-yellow-600"></i>.
        </p>
      </footer>
    </ToastProvider>
  );
}

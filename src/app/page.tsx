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

  useEffect(() => {
    // Initialize enhanced 3D tilt card effects
    const tiltCards = document.querySelectorAll('.tilt-card');
    const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

    const cleanupFunctions: Array<() => void> = [];

    tiltCards.forEach((card) => {
      const cardElement = card as HTMLElement;
      
      // Set initial styles for smooth 3D effect
      cardElement.style.transformStyle = 'preserve-3d';
      cardElement.style.backfaceVisibility = 'hidden';
      cardElement.style.transition = 'transform 0.1s ease-out, box-shadow 0.1s ease-out';
      cardElement.style.willChange = 'transform';

      const handleMouseMove = (e: MouseEvent) => {
        const rect = cardElement.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;

        // Calculate rotation based on mouse position (enhanced 3D effect)
        const rotateY = (px - 0.5) * 20; // Increased for more pronounced tilt
        const rotateX = (0.5 - py) * 20; // Increased for more pronounced tilt
        const lift = 20;
        const scale = 1.02;

        // Clamp rotations to prevent excessive tilting
        const clampedRotateX = clamp(rotateX, -15, 15);
        const clampedRotateY = clamp(rotateY, -15, 15);

        // Apply 3D transform with perspective
        cardElement.style.transform = `perspective(1000px) rotateX(${clampedRotateX}deg) rotateY(${clampedRotateY}deg) translateY(-${lift}px) scale(${scale})`;
        
        // Add dynamic shadow based on tilt for depth
        const shadowX = clampedRotateY * 0.5;
        const shadowY = clampedRotateX * 0.5 + 10;
        cardElement.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)`;
      };

      const handleMouseLeave = () => {
        cardElement.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
        cardElement.style.boxShadow = '';
        cardElement.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease-out';
      };

      const handleMouseEnter = () => {
        // Reset transition for smooth real-time tracking
        cardElement.style.transition = 'transform 0.1s ease-out, box-shadow 0.1s ease-out';
      };

      cardElement.addEventListener('mousemove', handleMouseMove);
      cardElement.addEventListener('mouseleave', handleMouseLeave);
      cardElement.addEventListener('mouseenter', handleMouseEnter);

      // Store cleanup function
      cleanupFunctions.push(() => {
        cardElement.removeEventListener('mousemove', handleMouseMove);
        cardElement.removeEventListener('mouseleave', handleMouseLeave);
        cardElement.removeEventListener('mouseenter', handleMouseEnter);
        cardElement.style.transform = '';
        cardElement.style.boxShadow = '';
        cardElement.style.transition = '';
        cardElement.style.willChange = '';
        cardElement.style.backfaceVisibility = '';
      });
    });

    // Return cleanup function
    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };

    // Set hover affordance for cursor
    const setHover = (on: boolean) => document.body.classList.toggle('cursor-hover', on);
    document.querySelectorAll('a, button, .cursor-target').forEach((el) => {
      el.addEventListener('mouseenter', () => setHover(true));
      el.addEventListener('mouseleave', () => setHover(false));
    });
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

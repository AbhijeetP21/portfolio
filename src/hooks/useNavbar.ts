'use client';

import { useEffect, useState } from 'react';

export function useNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      const nav = document.getElementById('navbar');
      if (!nav) return;

      const root = document.documentElement;
      const isDark = root.classList.contains('dark');
      const isMobile = window.innerWidth < 768;

      if (scrolled) {
        nav.classList.add('shadow-lg', 'navbar-scrolled');
        nav.style.backdropFilter = 'blur(12px)';
        (nav.style as unknown as Record<string, string>).WebkitBackdropFilter = 'blur(12px)';
        nav.style.background = isDark ? 'rgba(2,6,23,0.85)' : 'rgba(255,255,255,0.85)';
        nav.style.borderBottom = isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)';
        
        // Only change padding on desktop, keep consistent on mobile
        if (!isMobile) {
          nav.classList.remove('py-4');
          nav.classList.add('py-2');
        }
      } else {
        nav.classList.remove('shadow-lg', 'navbar-scrolled');
        nav.style.background = 'transparent';
        nav.style.borderBottom = 'none';
        nav.style.backdropFilter = 'none';
        (nav.style as unknown as Record<string, string>).WebkitBackdropFilter = 'none';
        
        if (!isMobile) {
          nav.classList.remove('py-2');
          nav.classList.add('py-4');
        }
      }
    };

    // Run once on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return { isScrolled };
}

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

      if (scrolled) {
        nav.classList.add('shadow-lg');
        nav.classList.remove('py-4');
        nav.classList.add('py-2');
        nav.style.backdropFilter = 'blur(12px)';
        nav.style.background = isDark ? 'rgba(2,6,23,0.55)' : 'rgba(255,255,255,0.72)';
        nav.style.borderBottom = isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)';
      } else {
        nav.classList.remove('shadow-lg');
        nav.classList.remove('py-2');
        nav.classList.add('py-4');
        nav.style.background = 'transparent';
        nav.style.borderBottom = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isScrolled };
}

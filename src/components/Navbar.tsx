'use client';

import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle menu link clicks
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    
    setTimeout(() => {
      // Handle home/top navigation (href is "#" or empty)
      if (href === '#' || href === '') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, isMenuOpen ? 300 : 0);
  };

  const navLinks = [
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#patents', label: 'Research' },
    { href: '#skills', label: 'Skills' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg shadow-sm border-b border-slate-200/50 dark:border-slate-800/50'
            : 'py-5 bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="text-2xl font-bold tracking-tighter font-mono text-slate-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            &lt;AP /&gt;
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <ThemeToggle />
            
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-4 py-2 text-sm font-medium bg-accent-500 hover:bg-accent-400 text-white rounded-full transition-all"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <span
                className={`w-6 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[280px] bg-white dark:bg-slate-950 shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Menu Links */}
          <nav className="flex flex-col pt-20 px-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`py-4 text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-primary-500 dark:hover:text-primary-400 border-b border-slate-100 dark:border-slate-800 transition-all duration-300 ${
                  isMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
              >
                {link.label}
              </a>
            ))}
            
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`mt-6 px-6 py-3 text-center text-sm font-medium bg-accent-500 hover:bg-accent-400 text-white rounded-full transition-all duration-300 ${
                isMenuOpen
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: isMenuOpen ? `${navLinks.length * 50}ms` : '0ms' }}
            >
              Contact Me
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

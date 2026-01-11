'use client';

import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { useNavbar } from '@/hooks/useNavbar';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useNavbar();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('overflow-hidden');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <nav id="navbar" className="fixed w-full z-50 transition-all duration-300 py-4">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tighter font-mono hover:text-primary-400 transition-colors cursor-target">
            &lt;AP /&gt;
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#education" className="hover:text-primary-400 transition-colors cursor-target">
              Education
            </a>
            <a href="#experience" className="hover:text-primary-400 transition-colors cursor-target">
              Experience
            </a>
            <a href="#projects" className="hover:text-primary-400 transition-colors cursor-target">
              Projects
            </a>
            <a href="#patents" className="hover:text-primary-400 transition-colors cursor-target">
              Research
            </a>
            <a href="#skills" className="hover:text-primary-400 transition-colors cursor-target">
              Skills
            </a>

            <ThemeToggle />

            <a
              href="#contact"
              className="px-5 py-2 bg-accent-500 hover:bg-accent-400 text-white rounded-full transition-all transform hover:scale-105 cursor-target"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            onClick={toggleMenu}
            className="md:hidden text-2xl focus:outline-none cursor-target p-2 -mr-2 active:scale-95 transition-transform"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} transition-transform duration-300`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md z-40 transform transition-transform duration-300 md:hidden flex flex-col items-center justify-center space-y-6 text-xl ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => {
          // Close menu when clicking on overlay background
          if (e.target === e.currentTarget) {
            closeMenu();
          }
        }}
      >
        <button
          id="close-menu-btn"
          onClick={closeMenu}
          className="absolute top-6 right-6 text-3xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-target p-2 active:scale-95 transition-all"
          aria-label="Close menu"
        >
          <i className="fa-solid fa-times"></i>
        </button>

        <ThemeToggle mobile />

        <a
          href="#education"
          onClick={closeMenu}
          className="mobile-link hover:text-primary-400 cursor-target py-3 px-6 rounded-lg active:bg-slate-100 dark:active:bg-slate-800 transition-all transform active:scale-95"
          style={{ animationDelay: '0.1s' }}
        >
          Education
        </a>
        <a
          href="#experience"
          onClick={closeMenu}
          className="mobile-link hover:text-primary-400 cursor-target py-3 px-6 rounded-lg active:bg-slate-100 dark:active:bg-slate-800 transition-all transform active:scale-95"
          style={{ animationDelay: '0.2s' }}
        >
          Experience
        </a>
        <a
          href="#projects"
          onClick={closeMenu}
          className="mobile-link hover:text-primary-400 cursor-target py-3 px-6 rounded-lg active:bg-slate-100 dark:active:bg-slate-800 transition-all transform active:scale-95"
          style={{ animationDelay: '0.3s' }}
        >
          Projects
        </a>
        <a
          href="#patents"
          onClick={closeMenu}
          className="mobile-link hover:text-primary-400 cursor-target py-3 px-6 rounded-lg active:bg-slate-100 dark:active:bg-slate-800 transition-all transform active:scale-95"
          style={{ animationDelay: '0.4s' }}
        >
          Research
        </a>
        <a
          href="#skills"
          onClick={closeMenu}
          className="mobile-link hover:text-primary-400 cursor-target py-3 px-6 rounded-lg active:bg-slate-100 dark:active:bg-slate-800 transition-all transform active:scale-95"
          style={{ animationDelay: '0.5s' }}
        >
          Skills
        </a>
        <a
          href="#contact"
          onClick={closeMenu}
          className="mobile-link text-accent-500 cursor-target py-3 px-6 rounded-lg bg-accent-500/10 hover:bg-accent-500/20 active:bg-accent-500/30 transition-all transform active:scale-95 font-semibold"
          style={{ animationDelay: '0.6s' }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

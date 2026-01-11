'use client';

import { useTheme } from '@/hooks/useTheme';

interface ThemeToggleProps {
  mobile?: boolean;
}

export function ThemeToggle({ mobile = false }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button
        className={`w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 hover:scale-105 transition-all grid place-items-center cursor-target ${
          mobile ? 'md:hidden' : ''
        }`}
        aria-label="Toggle theme"
      >
        <i className="fa-solid fa-moon text-slate-700 dark:text-slate-200"></i>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`${
        mobile
          ? 'px-5 py-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 hover:scale-105 transition-all flex items-center gap-3 cursor-target'
          : 'w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 hover:scale-105 transition-all grid place-items-center cursor-target'
      }`}
      aria-label="Toggle theme"
    >
      <i
        className={`fa-solid ${
          theme === 'dark' ? 'fa-sun' : 'fa-moon'
        } ${mobile ? '' : 'text-slate-700 dark:text-slate-200'}`}
      ></i>
      {mobile && <span className="text-base">Toggle theme</span>}
    </button>
  );
}

'use client';

import { useTheme as useNextTheme } from 'next-themes';

export function useTheme() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useNextTheme();
  
  const mounted = typeof window !== 'undefined';
  
  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return { 
    theme: (resolvedTheme || 'light') as 'light' | 'dark', 
    toggleTheme, 
    mounted 
  };
}

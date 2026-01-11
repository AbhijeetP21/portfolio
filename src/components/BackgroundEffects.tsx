'use client';

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 dark:bg-primary-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 dark:opacity-30 animate-blob"></div>
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-accent-500/10 dark:bg-accent-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 dark:opacity-30 animate-blob"
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 dark:opacity-30 animate-blob"
        style={{ animationDelay: '4s' }}
      ></div>
    </div>
  );
}

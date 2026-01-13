'use client';

import Link from 'next/link';
import { posts } from '@/data/writing';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { CustomCursor } from '@/components/CustomCursor';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function WritingPage() {
  return (
    <>
      <CustomCursor />
      <BackgroundEffects />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-800/50">
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter font-mono text-slate-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            &lt;AP /&gt;
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <i className="fa-solid fa-arrow-left mr-2"></i>
              Back to Portfolio
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-primary-500">/</span> Writing
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Technical deep-dives, lessons learned, and thoughts on building software.
              </p>
            </div>

            {/* Posts Grid */}
            <div className="space-y-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className={`glass-surface rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                    post.status === 'coming-soon'
                      ? 'opacity-75'
                      : 'hover:border-primary-500/30 cursor-pointer'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`text-3xl ${post.iconColor} shrink-0`}>
                      <i className={`fa-solid ${post.icon}`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {post.status === 'coming-soon' && (
                          <span className="px-2 py-0.5 text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded">
                            Coming Soon
                          </span>
                        )}
                        <span className="text-xs text-slate-500 dark:text-slate-500">
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {post.title}
                      </h2>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                        {post.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs text-primary-600 dark:text-primary-300 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center glass-surface rounded-2xl p-8">
              <i className="fa-solid fa-pen-nib text-4xl text-accent-500 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">More posts coming soon</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                I&apos;m working on detailed write-ups of my projects and learnings.
              </p>
              <Link
                href="/#contact"
                className="inline-block px-6 py-3 bg-accent-500 hover:bg-accent-400 text-white font-medium rounded-full transition-colors"
              >
                Get Notified
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Abhijeet Pachpute. Crafted with{' '}
          <i className="fa-solid fa-code text-primary-500"></i> and{' '}
          <i className="fa-solid fa-coffee text-yellow-600"></i>.
        </p>
      </footer>
    </>
  );
}

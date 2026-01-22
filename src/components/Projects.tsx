'use client';

import { useState, useRef, useEffect } from 'react';
import { projects } from '@/data/projects';
import { Lightbox } from './Lightbox';

// Helper function to extract YouTube video ID from various URL formats
function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
}

export function Projects() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Sort projects: featured first, then by order
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Mobile swipe gesture handling
  useEffect(() => {
    const cards = cardRefs.current;
    const touchStartX = new Map<number, number>();
    const touchStartY = new Map<number, number>();

    const handleTouchStart = (e: TouchEvent, idx: number) => {
      const touch = e.touches[0];
      touchStartX.set(idx, touch.clientX);
      touchStartY.set(idx, touch.clientY);
    };

    const handleTouchEnd = (e: TouchEvent, idx: number) => {
      const touch = e.changedTouches[0];
      const startX = touchStartX.get(idx);
      const startY = touchStartY.get(idx);

      if (startX === undefined || startY === undefined) return;

      const diffX = touch.clientX - startX;
      const diffY = touch.clientY - startY;
      const absDiffX = Math.abs(diffX);
      const absDiffY = Math.abs(diffY);

      // Only trigger swipe if horizontal movement is greater than vertical
      if (absDiffX > absDiffY && absDiffX > 50) {
        const card = cards[idx];
        if (!card) return;

        // Find image container in this card
        const imageContainer = card.querySelector('.project-image-container');
        if (imageContainer && sortedProjects[idx].images && sortedProjects[idx].images!.length > 0) {
          // Swipe detected - open lightbox
          openLightbox(sortedProjects[idx].images!, 0);
        }
      }

      touchStartX.delete(idx);
      touchStartY.delete(idx);
    };

    cards.forEach((card, idx) => {
      if (!card) return;
      card.addEventListener('touchstart', (e) => handleTouchStart(e, idx), { passive: true });
      card.addEventListener('touchend', (e) => handleTouchEnd(e, idx), { passive: true });
    });

    return () => {
      cards.forEach((card, idx) => {
        if (!card) return;
        card.removeEventListener('touchstart', (e) => handleTouchStart(e, idx));
        card.removeEventListener('touchend', (e) => handleTouchEnd(e, idx));
      });
    };
  }, [sortedProjects]);

  return (
    <>
      <section id="projects" className="py-16 bg-slate-50/60 dark:bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-accent-500">/</span> Featured Projects
              </h2>
              <p className="text-slate-600 dark:text-slate-400">Code that solves real problems.</p>
            </div>
            <a
              href="https://github.com/AbhijeetP21"
              target="_blank"
              className="text-primary-600 dark:text-primary-400 hover:opacity-90 font-mono text-sm mt-4 md:mt-0 cursor-target"
            >
              View all on GitHub <i className="fa-solid fa-arrow-right ml-1"></i>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProjects.map((project, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className={`glass-surface rounded-2xl ${project.borderColor} transition-all duration-300 group tilt-card cursor-target flex flex-col`}
              >
                {/* Project Preview: YouTube Embed, Live Preview, or Images */}
                {project.youtubeUrl ? (
                  // YouTube Embed (highest priority)
                  <div className="project-image-container relative w-full h-56 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    {(() => {
                      const videoId = getYouTubeVideoId(project.youtubeUrl!);
                      if (videoId) {
                        return (
                          <>
                            <iframe
                              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                              title={`${project.title} video`}
                              className="w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              loading="lazy"
                            />
                            {project.liveUrl && (
                              <div className="absolute bottom-2 right-2 z-10">
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-accent-500 hover:bg-accent-400 text-white px-3 py-1.5 rounded-full text-xs font-semibold transition-all transform hover:scale-105 flex items-center gap-1.5 shadow-lg"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <i className="fa-solid fa-external-link-alt"></i>
                                  Play Live
                                </a>
                              </div>
                            )}
                          </>
                        );
                      }
                      // Fallback to live preview or images if video ID extraction fails
                      return project.liveUrl ? (
                        <iframe
                          src={project.liveUrl}
                          title={`${project.title} live preview`}
                          className="w-full h-full"
                          loading="lazy"
                          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                        />
                      ) : project.images && project.images.length > 0 ? (
                        <img
                          src={project.images[0]}
                          alt={`${project.title} screenshot`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : null;
                    })()}
                  </div>
                ) : project.liveUrl ? (
                  // Live Site Preview (iframe)
                  <div className="project-image-container relative w-full h-56 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <iframe
                      src={project.liveUrl}
                      title={`${project.title} live preview`}
                      className="w-full h-full"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold pointer-events-auto"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fa-solid fa-external-link-alt mr-2"></i>Open Live Site
                      </a>
                    </div>
                  </div>
                ) : project.images && project.images.length > 0 ? (
                  // Fallback to Images
                  <div
                    className="project-image-container relative w-full h-56 overflow-hidden cursor-pointer bg-slate-100 dark:bg-slate-800"
                    onClick={() => openLightbox(project.images!, 0)}
                  >
                    <img
                      src={project.images[0]}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback if image doesn't exist - show placeholder
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-600">
                              <i class="fa-solid fa-image text-4xl"></i>
                            </div>
                          `;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold">
                        <i className="fa-solid fa-images mr-2"></i>View Screenshots
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                      <i className={`fa-solid ${project.icon} text-2xl ${project.iconColor}`}></i>
                    </div>
                    <div className="flex items-center gap-3">
                      {project.links?.patent && (
                        <a
                          href="#"
                          className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                          title="Patent Filed"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fa-solid fa-certificate text-lg"></i>
                        </a>
                      )}
                      {project.links?.paper && (
                        <a
                          href="#"
                          className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                          title="Research Paper"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fa-solid fa-scroll text-lg"></i>
                        </a>
                      )}
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                          title="View on GitHub"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fa-brands fa-github text-lg"></i>
                        </a>
                      )}
                      {project.links?.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                          title="View Demo"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fa-solid fa-external-link-alt text-lg"></i>
                        </a>
                      )}
                      {project.images && project.images.length > 0 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openLightbox(project.images!, 0);
                          }}
                          className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                          title="View Screenshots"
                        >
                          <i className="fa-solid fa-images text-lg"></i>
                        </button>
                      )}
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold mb-2 group-hover:${project.iconColor} transition-colors`}>
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs text-primary-600 dark:text-primary-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}

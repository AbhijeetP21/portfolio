'use client';

import { useEffect, useState } from 'react';

export function useCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hasMouse, setHasMouse] = useState(false);

  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let dotX = targetX;
    let dotY = targetY;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringX = lerp(ringX, targetX, 0.12);
      ringY = lerp(ringY, targetY, 0.12);
      dotX = lerp(dotX, targetX, 0.28);
      dotY = lerp(dotY, targetY, 0.28);

      setCursorPosition({ x: ringX, y: ringY });

      const ring = document.getElementById('cursorRing');
      const dot = document.getElementById('cursorDot');
      const flashlight = document.getElementById('flashlight');

      if (ring) {
        ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      if (dot) {
        dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      }
      if (flashlight) {
        flashlight.style.setProperty('--mx', `${ringX}px`);
        flashlight.style.setProperty('--my', `${ringY}px`);
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setHasMouse(true);
      const ring = document.getElementById('cursorRing');
      const dot = document.getElementById('cursorDot');
      if (ring) ring.style.opacity = '1';
      if (dot) dot.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      const ring = document.getElementById('cursorRing');
      const dot = document.getElementById('cursorDot');
      if (ring) ring.style.opacity = '0';
      if (dot) dot.style.opacity = '0';
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    if (hasMouse) {
      document.body.classList.add('has-mouse');
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [hasMouse]);

  useEffect(() => {
    if (isClicking) {
      document.body.classList.add('cursor-click');
    } else {
      document.body.classList.remove('cursor-click');
    }
  }, [isClicking]);

  useEffect(() => {
    if (isHovering) {
      document.body.classList.add('cursor-hover');
    } else {
      document.body.classList.remove('cursor-hover');
    }
  }, [isHovering]);

  return { cursorPosition, isHovering, setIsHovering, hasMouse };
}

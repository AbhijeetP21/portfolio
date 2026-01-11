'use client';

import { useEffect } from 'react';
import { useCursor } from '@/hooks/useCursor';

export function CustomCursor() {
  useCursor();

  return (
    <>
      <div id="flashlight" aria-hidden="true"></div>
      <div id="cursorRing" aria-hidden="true"></div>
      <div id="cursorDot" aria-hidden="true"></div>
    </>
  );
}

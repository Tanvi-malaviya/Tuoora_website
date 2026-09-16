'use client';

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only enable custom cursor for precise pointer devices (desktop mouse)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (!isFinePointer || (hasTouch && window.innerWidth <= 768)) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;
    let isHovered = false;
    let isTextInput = false;
    let rafId = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        ringX = mouseX;
        ringY = mouseY;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }

      // Check for interactive elements without layout thrashing (no getComputedStyle)
      const target = e.target;
      if (target && target.closest) {
        const textTarget = target.closest('input, textarea, [contenteditable="true"], select');
        if (textTarget) {
          isTextInput = true;
          isHovered = false;
        } else {
          isTextInput = false;
          const interactive = target.closest('a, button, [role="button"], .cursor-pointer, input[type="submit"], input[type="button"]');
          isHovered = !!interactive;
        }
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isVisible = true;
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    // Ultra-smooth 60/120/144Hz render loop via requestAnimationFrame
    const loop = () => {
      // Snappy lerp (0.28) for the outer ring: responsive without sluggish lag
      ringX += (mouseX - ringX) * 0.28;
      ringY += (mouseY - ringY) * 0.28;

      if (dotRef.current) {
        if (isTextInput) {
          dotRef.current.style.opacity = '0';
        } else if (isVisible) {
          dotRef.current.style.opacity = '1';
          dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${isHovered ? 1.15 : 1})`;
        }
      }

      if (ringRef.current) {
        if (isTextInput) {
          ringRef.current.style.opacity = '0';
        } else if (isVisible) {
          ringRef.current.style.opacity = '1';
          ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
          ringRef.current.setAttribute('data-hover', isHovered ? 'true' : 'false');
        }
      }

      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Global CSS for desktop custom cursor */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (pointer: fine) and (min-width: 769px) {
          body, a, button, [role="button"], .cursor-pointer {
            cursor: none !important;
          }
          input, textarea, select, [contenteditable="true"] {
            cursor: text !important;
          }
        }
      `}} />

      {/* Outer Follower Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-orange-500/40 bg-orange-500/[0.04] backdrop-blur-[0.5px] transition-[width,height,border-color,background-color,box-shadow] duration-150 ease-out will-change-transform"
        style={{
          width: '34px',
          height: '34px',
          opacity: 0,
        }}
      />

      {/* Instant Center Pointer Icon */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999] flex items-center justify-center transition-[transform,opacity] duration-100 ease-out will-change-transform"
        style={{
          opacity: 0,
        }}
      >
        <img 
          src="/favicon2.png" 
          alt="Tuoora Icon Cursor" 
          className="w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_2px_8px_rgba(240,77,54,0.35)]"
        />
      </div>

      {/* Ring hover styles via data attribute */}
      <style dangerouslySetInnerHTML={{__html: `
        [data-hover="true"] {
          width: 44px !important;
          height: 44px !important;
          border-color: rgba(240, 77, 54, 0.8) !important;
          background-color: rgba(240, 77, 54, 0.1) !important;
          box-shadow: 0 0 16px rgba(240, 77, 54, 0.25) !important;
        }
      `}} />
    </>
  );
}


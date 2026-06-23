'use client';

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Position coordinates for outer ring (exact mouse center)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Position coordinates for inner dot (exact mouse center)
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Smooth spring configuration for the outer trail ring
  const springConfig = { damping: 28, stiffness: 220, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide custom cursor on mobile touch screens
    const checkDevice = () => {
      setIsMobile(
        window.matchMedia("(max-width: 768px)").matches || 
        ('ontouchstart' in window) || 
        navigator.maxTouchPoints > 0
      );
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      dotX.set(e.clientX);
      dotY.set(e.clientY);

      if (!visible) setVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const computedCursor = window.getComputedStyle(target).cursor;
      const isInteractiveTag = ["BUTTON", "A", "INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
      const isClosestInteractive = target.closest("button") || target.closest("a") || target.closest(".cursor-pointer");

      if (
        isInteractiveTag ||
        isClosestInteractive ||
        computedCursor === "pointer"
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [visible, cursorX, cursorY, dotX, dotY]);

  if (isMobile || !visible) return null;

  return (
    <>
      {/* Global CSS to hide default cursor on desktop devices */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 769px) {
          body, a, button, select, input, textarea, [role="button"], .cursor-pointer {
            cursor: none !important;
          }
        }
      `}} />

      {/* Outer Brand Ring (Smooth Trail Capsule) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 pointer-events-none z-[9999] flex items-center justify-center bg-white/5 backdrop-blur-[0.5px] origin-center overflow-hidden"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          width: hovered ? 35 : 32,
          height: hovered ? 35 : 32,
          borderColor: hovered ? "rgba(34, 197, 94, 0.9)" : "rgba(255, 107, 38, 0.4)",
          backgroundColor: hovered ? "rgba(34, 197, 94, 0.05)" : "rgba(255, 255, 255, 0.05)",
          boxShadow: hovered ? "0px 0px 20px rgba(34, 197, 94, 0.3)" : "none"
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />

      {/* Tiny Precision Icon Pointer (Instant tracking) */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: hovered ? 1.2 : 1,
          opacity: 1
        }}
        transition={{ duration: 0.15, ease: "easeInOut" }}
      >
        <img 
          src="/favicon.png" 
          alt="Tuoora Icon Cursor" 
          className="w-full h-full object-contain"
        />
      </motion.div>
    </>
  );
}

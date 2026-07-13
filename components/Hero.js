'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero({ setIsModalOpen, isLoading }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Staggered text reveal animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const revealVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const fadeUpVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="relative pt-12 pb-16 lg:pt-14 lg:pb-1 overflow-hidden text-navy flex items-center justify-center min-h-[75vh] z-0">
      {/* Subtle Ambient Orange Glow matching other sections */}
      <div className="absolute top-[-10%] right-[-5%] w-[45%] h-[45%] bg-primary/8 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* SVG Circuits - Only in Hero section */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Style block for animating SVG dashes with hardware-accelerated CSS properties */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes circuit-pulse-left {
            0% { stroke-dashoffset: 400; }
            100% { stroke-dashoffset: -400; }
          }
          @keyframes circuit-pulse-right {
            0% { stroke-dashoffset: 400; }
            100% { stroke-dashoffset: -400; }
          }
          .animate-circuit-pulse-1 {
            stroke-dasharray: 40 200;
            animation: circuit-pulse-left 6s linear infinite;
          }
          .animate-circuit-pulse-2 {
            stroke-dasharray: 30 150;
            animation: circuit-pulse-left 5s linear infinite;
          }
          .animate-circuit-pulse-3 {
            stroke-dasharray: 40 200;
            animation: circuit-pulse-right 6.5s linear infinite;
          }
          .animate-circuit-pulse-4 {
            stroke-dasharray: 30 150;
            animation: circuit-pulse-right 4.5s linear infinite;
          }
        `}} />

        {/* SVG Circuit Lines - Left Side (Increased stroke opacity to 0.22) */}
        <svg
          className="absolute left-[-2%] top-[10%] w-[35%] h-[80%] fill-none hidden lg:block"
          viewBox="0 0 200 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="circuit-grad-left" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="1" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Base path lines */}
          <path d="M 0 50 L 80 50 L 110 80 L 110 150 L 150 190 L 150 250 L 120 280 L 0 280" stroke="rgba(249, 115, 22, 0.22)" strokeWidth="1.5" />
          <path d="M 0 120 L 50 120 L 70 140 L 70 200 L 100 230 L 100 320" stroke="rgba(249, 115, 22, 0.22)" strokeWidth="1.5" />
          <path d="M 0 350 L 60 350 L 90 320 L 140 320 L 160 300" stroke="rgba(249, 115, 22, 0.16)" strokeWidth="1.5" strokeDasharray="4 4" />

          {/* Animated Overlay Signals */}
          <path d="M 0 50 L 80 50 L 110 80 L 110 150 L 150 190 L 150 250 L 120 280 L 0 280" stroke="url(#circuit-grad-left)" strokeWidth="2.5" className="animate-circuit-pulse-1" />
          <path d="M 0 120 L 50 120 L 70 140 L 70 200 L 100 230 L 100 320" stroke="url(#circuit-grad-left)" strokeWidth="2.5" className="animate-circuit-pulse-2" />

          <circle cx="80" cy="50" r="3" fill="white" stroke="rgba(249, 115, 22, 0.5)" strokeWidth="1.5" />
          <circle cx="110" cy="80" r="3" fill="rgba(249, 115, 22, 0.5)" />
          <circle cx="150" cy="190" r="3" fill="white" stroke="rgba(249, 115, 22, 0.5)" strokeWidth="1.5" />
          <circle cx="120" cy="280" r="3.5" fill="rgba(249, 115, 22, 0.5)" />
          <circle cx="100" cy="230" r="3" fill="white" stroke="rgba(249, 115, 22, 0.5)" strokeWidth="1.5" />
          <circle cx="160" cy="300" r="4" fill="rgba(249, 115, 22, 0.5)" />
        </svg>

        {/* SVG Circuit Lines - Right Side (Increased stroke opacity to 0.22) */}
        <svg
          className="absolute right-[-2%] top-[10%] w-[35%] h-[80%] fill-none hidden lg:block"
          viewBox="0 0 200 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="circuit-grad-right" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0" />
              <stop offset="50%" stopColor="#14b8a6" stopOpacity="1" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Base path lines */}
          <path d="M 200 60 L 120 60 L 90 90 L 90 180 L 50 220 L 50 300 L 80 330 L 200 330" stroke="rgba(20, 184, 166, 0.22)" strokeWidth="1.5" />
          <path d="M 200 150 L 150 150 L 130 170 L 130 240 L 80 290 L 80 380" stroke="rgba(20, 184, 166, 0.22)" strokeWidth="1.5" />
          <path d="M 200 270 L 140 270 L 120 290 L 70 290" stroke="rgba(20, 184, 166, 0.16)" strokeWidth="1.5" strokeDasharray="4 4" />

          {/* Animated Overlay Signals */}
          <path d="M 200 60 L 120 60 L 90 90 L 90 180 L 50 220 L 50 300 L 80 330 L 200 330" stroke="url(#circuit-grad-right)" strokeWidth="2.5" className="animate-circuit-pulse-3" />
          <path d="M 200 150 L 150 150 L 130 170 L 130 240 L 80 290 L 80 380" stroke="url(#circuit-grad-right)" strokeWidth="2.5" className="animate-circuit-pulse-4" />

          <circle cx="120" cy="60" r="3" fill="white" stroke="rgba(20, 184, 166, 0.5)" strokeWidth="1.5" />
          <circle cx="90" cy="90" r="3" fill="rgba(20, 184, 166, 0.5)" />
          <circle cx="50" cy="220" r="3" fill="white" stroke="rgba(20, 184, 166, 0.5)" strokeWidth="1.5" />
          <circle cx="80" cy="330" r="3.5" fill="rgba(20, 184, 166, 0.5)" />
          <circle cx="130" cy="170" r="3" fill="white" stroke="rgba(20, 184, 166, 0.5)" strokeWidth="1.5" />
          <circle cx="70" cy="290" r="4" fill="rgba(20, 184, 166, 0.5)" />
        </svg>
      </div>

      <div className="section-container relative z-10 flex flex-col items-center text-center">

        {mounted && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoading ? "hidden" : "visible"}
            className="max-w-5xl space-y-4 flex flex-col items-center"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary border border-primary/20 shadow-sm mb-1"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-primary" />
              Tuoora Smart Ecosystem
            </motion.div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-[4.2rem] font-bold text-navy leading-[1.08] tracking-tight">
                <span className=" overflow-hidden pb-1">
                  <motion.span variants={revealVariants} className="inline-block">Unlock growth  with every</motion.span>
                </span>

                <span className=" overflow-hidden pb-1">
                  <motion.span
                    variants={revealVariants}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500 font-black"
                  >
                    enrollment
                  </motion.span>
                </span>
              </h1>

              {/* Description */}
              <motion.p
                variants={fadeUpVariants}
                className="text-slate-500 text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto pt-1"
              >
                Automate class scheduling, simplify parents compliance, and automate fee collections through unified QR payments.
              </motion.p>
            </div>

            {/* 🎯 1 Month Free — Bold Offer Strip */}
            <motion.div
              variants={fadeUpVariants}
              className="relative w-full max-w-lg"
            >
              {/* Animated dashed gradient border */}
              <div className="absolute -inset-[1.5px] rounded-2xl bg-gradient-to-r from-primary via-orange-300 to-primary opacity-60 blur-[1px]" />
              <motion.div
                className="absolute -inset-[1.5px] rounded-2xl bg-gradient-to-r from-primary via-orange-400 to-amber-300"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                style={{ backgroundSize: "200% 200%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3.5 flex items-center gap-4">
                {/* Big number */}
                <div className="shrink-0 text-center leading-none">
                  <motion.span
                    className="text-4xl font-black text-primary block"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    30
                  </motion.span>
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Days</span>
                </div>

                {/* Divider */}
                <div className="w-px h-10 bg-slate-200 shrink-0" />

                {/* Text content */}
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm font-black text-navy tracking-tight">Free Trial — No Credit Card</span>
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                      className="text-base"
                    >🎁</motion.span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium">Full access to all features from day one. Cancel anytime.</p>
                </div>

                {/* Tag label */}
                <div className="shrink-0 bg-primary text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1.5 rounded-lg">
                  FREE
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2 justify-center w-full sm:w-auto"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-navy text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-xl overflow-hidden shadow-lg shadow-navy/15 transition-all active:scale-[0.98] min-w-[190px]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              </button>
              <Link href="/why-tuoora" className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-200 bg-white text-[11px] font-black uppercase tracking-[0.2em] rounded-xl text-navy hover:border-primary/40 hover:text-primary transition-all active:scale-[0.98] text-center min-w-[190px]">
                Why Choose Us
              </Link>
            </motion.div>

            {/* Compact QR Code Portals Glass Card */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10 p-3 sm:p-4 bg-white/45 border border-slate-200/50 backdrop-blur-md rounded-2xl shadow-sm max-w-2xl w-full mt-6"
            >
              {/* Web Panel QR Code */}
              <div className="flex items-center gap-3.5">
                <div className="relative p-1 bg-white border border-slate-200 rounded-lg shadow-sm flex-shrink-0">
                  <img
                    src="/qr-code-web.png"
                    alt="Web Panel QR Code"
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <div className="text-left space-y-0.5">
                  <span className="text-[10px] font-black text-navy uppercase tracking-wider block">Web Panel</span>
                  <span className="text-[8.5px] font-bold text-slate-400 block max-w-[160px] leading-tight">
                    Scan to login to institute dashboard.
                  </span>
                </div>
              </div>

              {/* Separator line on desktop */}
              <div className="hidden sm:block w-px h-8 bg-slate-200" />

              {/* Android App QR Code */}
              <div className="flex items-center gap-3.5">
                <div className="relative p-1 bg-white border border-slate-200 rounded-lg shadow-sm flex-shrink-0">
                  <img
                    src="/qr-code-android.png"
                    alt="Android App QR Code"
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <div className="text-left space-y-0.5">
                  <span className="text-[10px] font-black text-navy uppercase tracking-wider block">Android App</span>
                  <span className="text-[8.5px] font-bold text-slate-400 block max-w-[160px] leading-tight">
                    Scan to download official app on Google Play Store.
                  </span>
                </div>
              </div>
            </motion.div>

          </motion.div>
        )}

      </div>
    </section>
  );
}

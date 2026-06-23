'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Sparkles, ArrowRight, Play, Coins, Clock, BookOpen, Shield } from "lucide-react";

export default function Hero({ setIsModalOpen, isLoading }) {
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Mouse coordinate tracking for 3D parallax tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform coordinates into rotation angles for the right-side bento scene
  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = event.clientX - rect.left - width / 2;
    const y = event.clientY - rect.top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    motion.animate(mouseX, 0, { duration: 0.8, ease: "easeOut" });
    motion.animate(mouseY, 0, { duration: 0.8, ease: "easeOut" });
  };

  // Staggered lines/words animations for the left side text
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
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Replace this with your actual YouTube video embed ID
  const youtubeVideoId = "dQw4w9WgXcQ";

  return (
    <section className="relative pt-12 pb-20 lg:pt-2 lg:pb-16 overflow-hidden bg-slate-50/45 text-navy">
      {/* Light Premium Mesh Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[55%] h-[55%] bg-primary/4 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-teal-500/3 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[30%] w-[35%] h-[35%] bg-orange-300/3 rounded-full blur-[110px] animate-[pulse_6s_infinite]" />
      </div>

      {/* Perspective wireframe grid floor (Light theme) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_center,white_70%,transparent_100%)]" />

      <div className="section-container grid gap-14 lg:grid-cols-12 lg:items-center relative z-10">
        
        {/* Left Column - Content Area */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isLoading ? "hidden" : "visible"}
          className="lg:col-span-6 space-y-3"
        >
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary border border-primary/20"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-primary" />
            Tuoora Smart Ecosystem
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-[4.2rem] font-extrabold text-navy leading-[1.04] tracking-tight">
              <span className="block overflow-hidden pb-1">
                <motion.span variants={revealVariants} className="inline-block">Unlock growth</motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span variants={revealVariants} className="inline-block">with every</motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span 
                  variants={revealVariants} 
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500 font-black"
                >
                  enrollment
                </motion.span>
              </span>
            </h1>
            <motion.p 
              variants={fadeUpVariants}
              className="text-slate-500 text-base sm:text-lg leading-relaxed font-medium max-w-xl"
            >
              Automate class scheduling, simplify parents compliance, and automate fee collections through unified QR payments.
            </motion.p>
          </div>

          <motion.div 
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-xl overflow-hidden shadow-lg shadow-navy/15 transition-all active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </button>
            <Link href="/why-tuoora" className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 bg-white text-[11px] font-black uppercase tracking-[0.2em] rounded-xl text-navy hover:border-primary/40 hover:text-primary transition-all active:scale-[0.98] text-center">
               Why Choose Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column - Dribbble-inspired Light Chrome Pedestal & YouTube Player */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex justify-center items-center w-full aspect-square max-w-[500px] p-6 sm:p-10 cursor-pointer group"
            style={{ perspective: "1500px" }}
          >
            {/* Ambient reflective glow */}
            <div className="absolute top-1/4 left-1/4 w-44 h-44 bg-primary/5 rounded-full blur-[65px] -z-10 pointer-events-none" />

            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate={isLoading ? "hidden" : "visible"}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full h-full flex items-center justify-center transition-all duration-200"
            >
              {/* Chrome Pedestals (Light metallic gradients) */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <svg className="w-[110%] h-[110%] overflow-visible" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="metalSideL" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e2e8f0" />
                      <stop offset="50%" stopColor="#cbd5e1" />
                      <stop offset="100%" stopColor="#94a3b8" />
                    </linearGradient>
                    <linearGradient id="metalSideR" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f1f5f9" />
                      <stop offset="50%" stopColor="#e2e8f0" />
                      <stop offset="100%" stopColor="#cbd5e1" />
                    </linearGradient>
                    <linearGradient id="metalTop" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="50%" stopColor="#f8fafc" />
                      <stop offset="100%" stopColor="#e2e8f0" />
                    </linearGradient>
                  </defs>

                  {/* Main Isometric Metal Block */}
                  <g transform="translate(200, 280)">
                    <ellipse cx="0" cy="80" rx="100" ry="32" fill="rgba(148, 163, 184, 0.25)" filter="blur(12px)" />
                    <path d="M -90 0 L -90 60 A 90 25 0 0 0 90 60 L 90 0 A 90 25 0 0 1 -90 0 Z" fill="url(#metalSideL)" stroke="rgba(15, 23, 42, 0.05)" strokeWidth="1" />
                    <ellipse cx="0" cy="0" rx="90" ry="25" fill="url(#metalTop)" stroke="rgba(15, 23, 42, 0.08)" strokeWidth="1.5" />
                  </g>
                </svg>
              </div>

              {/* Glassmorphic YouTube Player Box */}
              <div 
                className="w-[90%] aspect-video rounded-3xl bg-white/85 border border-white/60 shadow-[0_25px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl overflow-hidden relative z-20"
                style={{ transform: "translateZ(30px)" }}
              >
                {!isPlaying ? (
                  <div className="absolute inset-0 flex flex-col justify-between p-5 bg-gradient-to-br from-white/30 via-slate-50/90 to-white/40">
                    {/* Header bar */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-white/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                        <span className="text-[8.5px] font-black text-navy uppercase tracking-widest leading-none">YouTube Video Preview</span>
                      </div>
                      <span className="text-[9px] font-bold text-slate-400">10:00</span>
                    </div>

                    {/* Central Pulsing Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        onClick={() => setIsPlaying(true)}
                        className="h-16 w-16 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center shadow-xl shadow-primary/30 transition-all hover:scale-105 active:scale-95 group/play"
                      >
                        <Play className="w-6 h-6 fill-white ml-1 group-hover/play:scale-105 transition-transform" />
                      </button>
                    </div>

                    {/* Video Title Overlay */}
                    <div className="z-10 bg-white/80 backdrop-blur-md border border-slate-100/50 p-3.5 rounded-2xl flex items-center justify-between mt-auto shadow-[0_8px_32px_rgba(0,0,0,0.02)]">
                      <div className="min-w-0">
                        <span className="text-[8.5px] font-black text-primary uppercase tracking-widest block">Tuoora ERP Overview</span>
                        <p className="text-[7.5px] font-semibold text-slate-500 truncate mt-1">Discover how to manage fees, schedules, and operations.</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                    title="Tuoora YouTube Video Player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-3xl"
                  />
                )}
              </div>

              {/* Floating Light Glassmorphic Badges */}
              
              {/* Badge 1: Fees sync */}
              <motion.div 
                style={{ transform: "translateZ(60px)" }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-8 right-[-10px] bg-white/90 backdrop-blur-md border border-white/60 p-2.5 rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.03)] z-30 flex items-center gap-2"
              >
                <div className="h-6 w-6 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Coins className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[8px] font-black text-navy block leading-none">Instant QR</span>
                  <span className="text-[6px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 block">Fee Paid</span>
                </div>
              </motion.div>

              {/* Badge 2: Auto backup */}
              <motion.div 
                style={{ transform: "translateZ(80px)" }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-[-15px] bg-white/90 backdrop-blur-md border border-white/60 p-2.5 rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.03)] z-30 flex items-center gap-2.5"
              >
                <div className="h-6 w-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[8.5px] font-black text-navy block leading-none">Auto Backup</span>
                  <span className="text-[6px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 block">Secured</span>
                </div>
              </motion.div>

              {/* Badge 3: Timetable schedules */}
              <motion.div 
                style={{ transform: "translateZ(50px)" }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-10 right-0 bg-white/90 backdrop-blur-md border border-white/60 p-2.5 rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.03)] z-30 flex items-center gap-2"
              >
                <div className="h-6 w-6 rounded-lg bg-teal-500/10 text-teal-500 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[8px] font-black text-navy block leading-none">Time Table</span>
                  <span className="text-[6px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 block">12 Lectures</span>
                </div>
              </motion.div>

              {/* Badge 4: Live attendance sync */}
              <motion.div 
                style={{ transform: "translateZ(70px)" }}
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="absolute bottom-8 left-[-10px] bg-white/90 backdrop-blur-md border border-white/60 p-2.5 rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.03)] z-30 flex items-center gap-2"
              >
                <div className="h-6 w-6 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-3.5 h-3.5 animate-pulse" />
                </div>
                <div>
                  <span className="text-[8px] font-black text-navy block leading-none">Live Sync</span>
                  <span className="text-[6px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 block">Attendance</span>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

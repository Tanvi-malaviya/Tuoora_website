'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Overview() {
  const [hoveredModule, setHoveredModule] = useState(null);

  const modules = [
    { 
      icon: "👥", 
      title: "Students", 
      details: "Manage student admissions, access live profiles, print digital certificates, and configure linked sibling accounts." 
    },
    { 
      icon: "📚", 
      title: "Batches", 
      details: "Coordinate class schedules, customize academic cohorts, and assign teachers with automated schedule conflict checks." 
    },
    { 
      icon: "💰", 
      title: "Finance", 
      details: "Track fee payments online, reconcile payments instantly, generate digital invoices, and automate parent payment alerts." 
    },
    { 
      icon: "✅", 
      title: "Attendance", 
      details: "Capture attendance via barcode or app, support RFID scanner hardware integration, and alert parents of absentees." 
    },
    { 
      icon: "📝", 
      title: "Homework", 
      details: "Assign standard syllabus homework, support attachments/notes upload, and log digital grading and feedback feeds." 
    },
    { 
      icon: "💬", 
      title: "Feed", 
      details: "Publish school-wide announcements, share official event circular flyers, and broadcast system notifications." 
    },
    { 
      icon: "👔", 
      title: "Staff", 
      details: "Manage teacher contracts, track biometric clock-ins, coordinate substitute classes, and configure role privileges." 
    },
    { 
      icon: "📉", 
      title: "Expenses", 
      details: "Audit school operational costs, track vendor invoices, manage category budgets, and compile annual finance ledgers." 
    },
  ];

  // Right column container reveal variant
  const rightContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  // Right column item slide/fade-up variant
  const rightItemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="overview" className="py-8 bg-transparent overflow-hidden relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT: Circular Ecosystem Map */}
          <div className="flex flex-col items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square w-full max-w-[560px] mx-auto lg:mx-0"
            >
              
              {/* Connecting Lines (SVG) - Responsive Viewbox */}
              <svg viewBox="0 0 450 450" className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {/* Infinitely crawling outer dashed ring */}
                <motion.circle 
                  cx="225" 
                  cy="225" 
                  r="160" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeDasharray="6 6" 
                  className="text-primary/70"
                  animate={{ strokeDashoffset: [0, -24] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Radial connection lines with dynamic glowing pulses */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const isHovered = hoveredModule === i;
                  return (
                    <g key={i}>
                      {/* Base connection line */}
                      <line
                        x1="225" y1="225"
                        x2={225 + 160 * Math.cos((angle - 90) * (Math.PI / 180))}
                        y2={225 + 160 * Math.sin((angle - 90) * (Math.PI / 180))}
                        stroke="currentColor" 
                        strokeWidth="1" 
                        className="text-primary/20"
                      />
                      {/* Active glowing overlay pulse */}
                      {isHovered && (
                        <motion.line
                          x1="225" y1="225"
                          x2={225 + 160 * Math.cos((angle - 90) * (Math.PI / 180))}
                          y2={225 + 160 * Math.sin((angle - 90) * (Math.PI / 180))}
                          stroke="#F04D36" 
                          strokeWidth="2" 
                          strokeDasharray="10 30"
                          animate={{ strokeDashoffset: [0, -80] }}
                          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                        />
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Center Hub with dynamic icon/content switcher */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-navy border-4 border-white shadow-2xl flex items-center justify-center z-20 overflow-hidden cursor-default transition-all duration-300">
                <motion.div 
                  animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-primary/20"
                />
                <motion.div 
                  animate={{ scale: [1, 1.6, 1], opacity: [0.15, 0, 0.15] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute inset-0 rounded-full bg-teal-500/20"
                />
                
                <div className="text-center z-10 p-1 select-none">
                  <AnimatePresence mode="wait">
                    {hoveredModule !== null ? (
                      <motion.div
                        key={hoveredModule}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.15 }}
                        className="flex flex-col items-center justify-center"
                      >
                        <div className="text-lg sm:text-2xl mb-0.5">{modules[hoveredModule].icon}</div>
                        <span className="text-[6.5px] sm:text-[7.5px] font-black text-primary uppercase tracking-widest block truncate max-w-[65px]">{modules[hoveredModule].title}</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="core"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.15 }}
                        className="flex flex-col items-center justify-center"
                      >
                        <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg bg-primary mx-auto mb-1 flex items-center justify-center font-black text-white italic text-xs sm:text-sm shadow-md">T</div>
                        <span className="text-[7.5px] sm:text-[8.5px] font-black text-white uppercase tracking-widest">CORE</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Orbiting Modules - Percentage Based Positioning with float animations */}
              {modules.map((mod, i) => {
                const angle = i * 45 - 90;
                // Center is 50%, Radius is ~35% (160/450)
                const x = 50 + 35 * Math.cos(angle * (Math.PI / 180));
                const y = 50 + 35 * Math.sin(angle * (Math.PI / 180));
                const isHovered = hoveredModule === i;

                return (
                  <motion.div
                    key={i}
                    onMouseEnter={() => setHoveredModule(i)}
                    onMouseLeave={() => setHoveredModule(null)}
                    className={`absolute w-12 h-12 sm:w-16 sm:h-16 -ml-6 -mt-6 sm:-ml-8 sm:-mt-8 rounded-xl bg-white border flex flex-col items-center justify-center group z-10 cursor-pointer transition-colors duration-300 ${
                      isHovered ? 'border-primary shadow-lg shadow-primary/5' : 'border-slate-100 shadow-md'
                    }`}
                    style={{ left: `${x}%`, top: `${y}%` }}
                    animate={{
                      y: [0, -6, 0],
                      x: [0, 4, 0]
                    }}
                    transition={{
                      duration: 3 + i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.15
                    }}
                    whileHover={{ 
                      scale: 1.15, 
                      zIndex: 30,
                      boxShadow: "0px 10px 25px rgba(249,115,22,0.12)",
                    }}
                  >
                    <div className="text-sm sm:text-xl mb-0.5 group-hover:scale-110 transition-transform">{mod.icon}</div>
                    <span className="text-[6px] sm:text-[7px] font-black text-navy uppercase tracking-widest">{mod.title}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* RIGHT: Content with Staggered Scroll-triggered Reveals */}
          <motion.div 
            variants={rightContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center lg:text-left space-y-6"
          >
            <div>
              <motion.div 
                variants={rightItemVariants}
                className="inline-block rounded-full bg-primary/5 px-4 py-1.5 text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 border border-primary/10"
              >
                Centralized Intelligence
              </motion.div>
              
              <motion.h2 
                variants={rightItemVariants}
                className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-navy tracking-tighter leading-[1.1] mb-6 font-bold"
              >
                The Unified <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500 font-black">Neural Network</span> <br className="hidden sm:block" />
                of Your Institute.
              </motion.h2>
              
              {/* Dynamic Description Transitioning Container */}
              <div className="min-h-[96px] relative text-left">
                <AnimatePresence mode="wait">
                  {hoveredModule !== null ? (
                    <motion.div
                      key={hoveredModule}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="p-4 bg-primary/[0.03] border border-primary/20 rounded-2xl flex items-center gap-3.5 shadow-sm"
                    >
                      <div className="text-2xl p-2.5 bg-primary/10 rounded-xl flex-shrink-0 select-none">
                        {modules[hoveredModule].icon}
                      </div>
                      <div>
                        <span className="text-[9px] font-black text-primary uppercase tracking-wider block">Live Module Stats</span>
                        <h4 className="text-xs font-black text-navy uppercase tracking-tight">{modules[hoveredModule].title} Database</h4>
                        <p className="text-[10px] text-slate-500 font-medium mt-0.5 leading-relaxed">
                          {modules[hoveredModule].details}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.p 
                      key="default"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="text-slate-500 text-base sm:text-lg leading-relaxed font-medium pt-1 text-center lg:text-left"
                    >
                      Tuoora doesn't just manage data; it connects your entire ecosystem. From the moment a student registers
                      to financial auditing, every module works in perfect harmony under a single unified core.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Premium Bento Cards replacing standard stats */}
            <motion.div 
              variants={rightItemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-100"
            >
              <div className="p-4 bg-slate-50/50 border border-slate-100 rounded-2xl space-y-1.5 hover:border-primary/20 hover:bg-white transition-all duration-300 text-left">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center text-xs">🧱</div>
                  <div className="text-sm font-black text-navy uppercase tracking-wider">100% Modular</div>
                </div>
                <p className="text-[12px] text-slate-400 font-semibold leading-relaxed">
                  Toggle and customize only the active modules your school needs.
                </p>
              </div>

              <div className="p-4 bg-slate-50/50 border border-slate-100 rounded-2xl space-y-1.5 hover:border-teal-500/20 hover:bg-white transition-all duration-300 text-left">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-teal-500/10 flex items-center justify-center text-xs">⚡</div>
                  <div className="text-sm font-black text-navy uppercase tracking-wider">Real-time Sync</div>
                </div>
                <p className="text-[12px] text-slate-400 font-semibold leading-relaxed">
                  Instant real-time database synchronization between Web and Android App.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={rightItemVariants}
              className="pt-2 text-center lg:text-left"
            >
              <Link href="/modules" className="inline-block">
                <button className="px-10 py-4 bg-primary text-white text-[11px] font-black uppercase tracking-widest rounded-xl shadow-2xl shadow-primary/20 hover:bg-navy transition-all active:scale-95">
                  Explore All Modules
                </button>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

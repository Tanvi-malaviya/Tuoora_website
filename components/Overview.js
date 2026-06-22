'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function Overview() {
  const modules = [
    { icon: "👥", title: "Students" },
    { icon: "📚", title: "Batches" },
    { icon: "💰", title: "Finance" },
    { icon: "✅", title: "Attendance" },
    { icon: "📝", title: "Homework" },
    { icon: "💬", title: "Feed" },
    { icon: "👔", title: "Staff" },
    { icon: "📉", title: "Expenses" },
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
    <section id="overview" className="py-12 bg-white overflow-hidden relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Circular Ecosystem Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square w-full max-w-[450px] mx-auto lg:mx-0"
          >
            
            {/* Connecting Lines (SVG) - Responsive Viewbox */}
            <svg viewBox="0 0 450 450" className="absolute inset-0 w-full h-full pointer-events-none opacity-25">
              {/* Infinitely crawling outer dashed ring */}
              <motion.circle 
                cx="225" 
                cy="225" 
                r="160" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeDasharray="6 6" 
                className="text-primary"
                animate={{ strokeDashoffset: [0, -24] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Radial connection lines */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <line
                  key={i}
                  x1="225" y1="225"
                  x2={225 + 160 * Math.cos((angle - 90) * (Math.PI / 180))}
                  y2={225 + 160 * Math.sin((angle - 90) * (Math.PI / 180))}
                  stroke="currentColor" 
                  strokeWidth="1" 
                  className="text-primary/20"
                />
              ))}
            </svg>

            {/* Center Hub with double pulsing waves */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-navy border-4 border-white shadow-2xl flex items-center justify-center z-20 group cursor-default">
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
              
              <div className="text-center z-10">
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg bg-primary mx-auto mb-1 flex items-center justify-center font-black text-white italic text-xs sm:text-sm shadow-md">T</div>
                <span className="text-[7px] sm:text-[8px] font-black text-white uppercase tracking-widest">CORE</span>
              </div>
            </div>

            {/* Orbiting Modules - Percentage Based Positioning with float animations */}
            {modules.map((mod, i) => {
              const angle = i * 45 - 90;
              // Center is 50%, Radius is ~35% (160/450)
              const x = 50 + 35 * Math.cos(angle * (Math.PI / 180));
              const y = 50 + 35 * Math.sin(angle * (Math.PI / 180));

              return (
                <motion.div
                  key={i}
                  className="absolute w-12 h-12 sm:w-16 sm:h-16 -ml-6 -mt-6 sm:-ml-8 sm:-mt-8 rounded-xl bg-white border border-slate-100 shadow-md flex flex-col items-center justify-center group z-10 cursor-pointer"
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
                    boxShadow: "0px 10px 25px rgba(0,0,0,0.08)",
                    borderColor: "rgba(255, 107, 38, 0.25)"
                  }}
                >
                  <div className="text-sm sm:text-xl mb-0.5 group-hover:scale-110 transition-transform">{mod.icon}</div>
                  <span className="text-[6px] sm:text-[7px] font-black text-navy uppercase tracking-widest">{mod.title}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* RIGHT: Content with Staggered Scroll-triggered Reveals */}
          <motion.div 
            variants={rightContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center lg:text-left space-y-8"
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
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tighter leading-[1.1] mb-6"
              >
                The Unified <span className="text-primary">Neural Network</span> <br className="hidden sm:block" />
                of Your Institute.
              </motion.h2>
              
              <motion.p 
                variants={rightItemVariants}
                className="text-sm sm:text-base text-gray-400 font-light leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                Tuoora doesn't just manage data; it connects your entire ecosystem. From the moment a student registers
                to financial auditing, every module works in perfect harmony under a single unified core.
              </motion.p>
            </div>

            <motion.div 
              variants={rightItemVariants}
              className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-50"
            >
              <div className="space-y-1">
                <div className="text-lg font-black text-navy tracking-tight">100% Modular</div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Enable only what you need</p>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-black text-navy tracking-tight">Real-time Sync</div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Instant Web to App data</p>
              </div>
            </motion.div>

            <motion.div 
              variants={rightItemVariants}
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

'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Smart Registry",
    desc: "High-density student database with real-time profile management and multi-branch sync.",
    image: "/studentreg.png"
  },
  {
    title: "Financial Ledger",
    desc: "Automated fee tracking with smart ledger entries and integrated WhatsApp reminders.",
    image: "/fee.png"
  },
  {
    title: "Attendance Intelligence",
    desc: "Batch-wise presence tracking with instant automated parent notifications and analytics.",
    image: "/attendence.png"
  }
];

export default function Modules() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Compute which index is active (either hovered, or if not hovering, the selected one)
  const activeIndex = hoveredIndex !== null ? hoveredIndex : selectedIndex;

  // Determine what image to render in the mockup
  const currentImage = activeIndex !== null ? features[activeIndex].image : "/image.png";
  const currentTitle = activeIndex !== null ? features[activeIndex].title : "Tuoora Dashboard Preview";

  return (
    <section id="modules" className="py-5 bg-transparent overflow-hidden">
      <div className="section-container">
        <div className="relative grid lg:grid-cols-2 gap-6 items-center">

          {/* LEFT: Feature Stack with Unique Text Animations */}
          <motion.div
            className="relative z-10 space-y-8 pr-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            {/* Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="inline-flex rounded-full bg-primary/5 px-3 py-1 text-[8px] font-black text-primary uppercase tracking-[0.3em] mb-4 border border-primary/10"
            >
              Next-Gen Infrastructure
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tighter leading-[1.1] mb-4"
            >
              Redefining <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500 font-bold">Institutional</span> Control.
            </motion.h2>

            {/* Timeline Area */}
            <div className="space-y-6 relative">
              {/* Growing neon line on scroll */}
              <div className="absolute left-[7px] top-3 bottom-3 w-[2px] bg-slate-100">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="w-full h-full bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top"
                />
              </div>

              {features.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                    onClick={() => {
                      // Click toggles selection state
                      setSelectedIndex(selectedIndex === index ? null : index);
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative pl-10 group cursor-pointer"
                  >
                    {/* Glowing timeline dot indicator */}
                    <div className={`absolute left-0 top-3.5 h-4 w-4 rounded-full bg-white border-2 flex items-center justify-center transition-all duration-300 ${
                      isActive ? 'border-primary shadow-sm shadow-primary/30 scale-110' : 'border-slate-200 group-hover:border-primary/50'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full transition-transform duration-300 ${
                        isActive ? 'bg-primary scale-125' : 'bg-slate-300 group-hover:bg-primary/50'
                      }`} />
                    </div>

                    {/* Text card content that shifts on hover */}
                    <motion.div
                      whileHover={{ x: 8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`rounded-xl p-3 transition-colors duration-300 ${
                        isActive ? 'bg-primary/[0.03]' : 'hover:bg-primary/[0.02]'
                      }`}
                    >
                      <h3 className={`text-base font-black transition-colors duration-300 tracking-tight ${
                        isActive ? 'text-primary' : 'text-navy group-hover:text-primary'
                      }`}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 font-light max-w-sm leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT: 3D Browser Mockup */}
          <div className="relative mt-6 lg:mt-0 lg:h-[400px] flex items-center lg:justify-end">
            {/* Glow Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md h-full bg-primary/10 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>

            {/* 3D Mockup Container */}
            <div className="relative w-full max-w-xl transform lg:perspective-[2000px] lg:rotate-y-[-20deg] lg:rotate-x-[5deg]">
              <div className="relative rounded-[1.5rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] border border-slate-100 bg-white p-1.5">
                <div className="h-5 w-full bg-[#f8fafc] flex items-center gap-1.5 px-4 border-b border-slate-100 select-none">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="relative bg-white aspect-[19/9] overflow-hidden flex items-center justify-center p-0.5">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImage}
                      src={currentImage}
                      alt={currentTitle}
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.98 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full object-contain"
                    />
                  </AnimatePresence>
                  
                  {/* Glass Glare Highlight Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none z-10" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 right-0 lg:-right-4 bg-navy text-white px-4 py-2.5 rounded-2xl shadow-2xl z-20 scale-90 lg:scale-100 origin-right select-none">
                <div className="text-[8px] font-black tracking-widest opacity-50 mb-1 uppercase text-primary">Live Dashboard</div>
                <div className="text-lg font-bold tracking-tight">Active Analytics</div>
              </div>

              <div className="absolute -bottom-6 left-0 lg:left-8 bg-white px-4 py-3 rounded-2xl shadow-2xl border border-gray-50 z-20 scale-90 lg:scale-100 origin-left hidden sm:flex items-center gap-3 select-none">
                <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">📊</div>
                <div className="text-left">
                  <div className="text-[7px] font-black text-gray-400 uppercase tracking-widest leading-none mb-0.5">Efficiency</div>
                  <div className="text-base font-bold text-navy tracking-tight leading-none">98.4%</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

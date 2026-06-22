'use client';

import { motion } from "framer-motion";

const features = [
  {
    title: "Smart Registry",
    desc: "High-density student database with real-time profile management and multi-branch sync."
  },
  {
    title: "Financial Ledger",
    desc: "Automated fee tracking with smart ledger entries and integrated WhatsApp reminders."
  },
  {
    title: "Attendance Intelligence",
    desc: "Batch-wise presence tracking with instant automated parent notifications and analytics."
  }
];

export default function Modules() {
  return (
    <section id="modules" className="py-20 bg-[#FDFDFD] overflow-hidden">
      <div className="section-container">
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">

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
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tighter leading-[1.1] mb-4"
            >
              Redefining <br />
              <span className="text-primary italic">Institutional</span> Control.
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

              {features.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  className="relative pl-10 group cursor-pointer"
                >
                  {/* Glowing timeline dot indicator */}
                  <div className="absolute left-0 top-3.5 h-4 w-4 rounded-full bg-white border-2 border-slate-200 group-hover:border-primary flex items-center justify-center transition-all duration-300">
                    <motion.div 
                      className="w-1.5 h-1.5 rounded-full bg-primary"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ scale: 1.3 }}
                    />
                  </div>

                  {/* Text card content that shifts on hover */}
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="rounded-xl p-3 hover:bg-primary/[0.02] transition-colors duration-300"
                  >
                    <h3 className="text-base font-black text-navy group-hover:text-primary transition-colors duration-300 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-light max-w-sm leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: 3D Browser Mockup */}
          <div className="relative mt-12 lg:mt-0 lg:h-[400px] flex items-center lg:justify-end">
            {/* Glow Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md h-full bg-primary/10 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>

            {/* 3D Mockup Container */}
            <div className="relative w-full max-w-xl transform lg:perspective-[2000px] lg:rotate-y-[-20deg] lg:rotate-x-[5deg] transition-all duration-700">
              <div className="relative rounded-[1.5rem] overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.25)] border border-white/60 bg-white p-1.5">
                <div className="h-5 w-full bg-gray-50 flex items-center gap-1.5 px-4 border-b border-gray-100">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-400"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                </div>
                <div className="relative bg-gray-50 aspect-[16/10] overflow-hidden">
                  <img
                    src="/image.png"
                    alt="Tuoora Dashboard Preview"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 right-0 lg:-right-4 bg-navy text-white px-4 py-2.5 rounded-2xl shadow-2xl z-20 scale-90 lg:scale-100 origin-right">
                <div className="text-[8px] font-black tracking-widest opacity-50 mb-1 uppercase text-primary">Live Dashboard</div>
                <div className="text-lg font-bold tracking-tight">Active Analytics</div>
              </div>

              <div className="absolute -bottom-6 left-0 lg:left-8 bg-white px-4 py-3 rounded-2xl shadow-2xl border border-gray-50 z-20 scale-90 lg:scale-100 origin-left hidden sm:flex items-center gap-3">
                <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">📊</div>
                <div>
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

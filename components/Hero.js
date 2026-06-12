'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero({ setIsModalOpen }) {
  const [currentActivity, setCurrentActivity] = useState(0);

  const activities = [
    { title: "Fee Collected", desc: "Invoice #1042 paid by parent", time: "Just now", type: "success" },
    { title: "Security Alert", desc: "Daily automatic backup completed", time: "2 min ago", type: "info" },
    { title: "Staff Sync", desc: "Payroll logs compiled successfully", time: "5 min ago", type: "warning" },
    { title: "SMS Broadcast", desc: "142 student alerts dispatched", time: "10 min ago", type: "success" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity(prev => (prev + 1) % activities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative pt-10 pb-12 lg:pt-14 lg:pb-12 overflow-hidden bg-white">
      {/* Premium Mesh Gradient Background */}
      <div className="absolute top-0 right-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -45, 0],
            x: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] bg-teal-500/5 rounded-full blur-[100px]"
        />
      </div>

      <div className="section-container grid gap-12 lg:grid-cols-2 lg:items-center relative z-10">
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-5 inline-flex items-center gap-2.5 rounded-full bg-navy/5 px-3.5 py-1.5 text-[9px] font-black text-navy uppercase tracking-[0.2em] border border-navy/5"
          >
            <span className="flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-1.5 w-1.5 rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
            </span>
            Next-Gen ERP for Institutions
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-[4.2rem] font-black text-navy leading-[0.98] mb-6 tracking-[-0.04em]"
          >
            Empower Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Institute's</span> <br />
            Digital Future.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 mb-8 max-w-lg text-base leading-relaxed font-medium"
          >
            The most sophisticated <strong>Tuoora</strong> ecosystem designed to automate operations, 
            secure data, and drive institutional excellence.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative px-10 py-4 bg-navy text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl overflow-hidden shadow-2xl shadow-navy/20 transition-all active:scale-95"
            >
              <span className="relative z-10">Get Started Now</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </button>
            <Link href="/features" className="px-10 py-4 border-2 border-gray-100 bg-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl text-navy hover:border-primary/30 transition-all active:scale-95 text-center">
               View All Modules
            </Link>
          </motion.div>
        </div>

        <div className="relative flex justify-center lg:justify-end lg:pl-10 w-full">
          <div className="relative flex justify-center items-center w-full aspect-square max-w-[500px] p-6 sm:p-10">
          {/* Subtle Grid Overlay Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:20px_20px] rounded-full [mask-image:radial-gradient(circle_at_center,black_60%,transparent_100%)] pointer-events-none -z-10"></div>

          {/* Glowing Ambient Orbs */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/[0.03] rounded-full blur-[80px] -z-10 pointer-events-none"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-teal-500/[0.03] rounded-full blur-[70px] -z-10 pointer-events-none"></div>

          {/* Orbiting dashed tech circles */}
          <div className="absolute inset-0 border border-dashed border-gray-100 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none -z-10"></div>
          <div className="absolute inset-12 border border-dashed border-primary/5 rounded-full animate-[spin_40s_linear_infinite_reverse] pointer-events-none -z-10"></div>

          {/* Connected Network Line */}
          <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none" viewBox="0 0 100 100">
            {/* Security to Hub */}
            <path d="M 28 22 L 45 38" stroke="rgba(249, 115, 22, 0.15)" strokeWidth="0.8" strokeDasharray="2 2" fill="none" />
            
            {/* Attendance to Hub */}
            <path d="M 72 22 L 55 38" stroke="rgba(249, 115, 22, 0.15)" strokeWidth="0.8" strokeDasharray="2 2" fill="none" />

            {/* Active Users to Hub */}
            <path d="M 25 48 L 40 48" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="0.8" strokeDasharray="2 2" fill="none" />

            {/* Hub to Live Operations */}
            <path d="M 58 58 L 75 75" stroke="rgba(249, 115, 22, 0.15)" strokeWidth="0.8" strokeDasharray="2 2" fill="none" />
          </svg>

          {/* Top Right: Mini Circular Attendance Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute top-10 right-0 w-32 bg-white/90 backdrop-blur-xl border border-gray-100 p-2.5 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.05)] z-20 flex items-center gap-2"
          >
            <div className="relative h-7 w-7 flex items-center justify-center flex-shrink-0">
               {/* SVG Progress Circle */}
               <svg className="absolute inset-0 transform -rotate-90 w-full h-full">
                  <circle cx="14" cy="14" r="11" stroke="#f1f5f9" strokeWidth="2" fill="transparent" />
                  <circle cx="14" cy="14" r="11" stroke="#f97316" strokeWidth="2" strokeDasharray="69" strokeDashoffset="18" fill="transparent" strokeLinecap="round" />
               </svg>
               <span className="text-[7px] font-black text-navy">96%</span>
            </div>
            <div>
               <div className="text-[8px] font-black text-navy leading-none">Attendance</div>
               <div className="text-[6px] font-bold text-gray-400 mt-0.5 uppercase tracking-wider">Target Met</div>
            </div>
          </motion.div>

          {/* Middle Left: Live Users Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute top-[48%] left-0 -translate-y-1/2 w-36 bg-white/90 backdrop-blur-xl border border-gray-100 p-2.5 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.05)] z-20 flex items-center gap-2.5"
          >
            <div className="h-6 w-6 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-600 flex-shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div>
               <div className="text-[8px] font-black text-navy leading-none">1,840 Active</div>
               <div className="text-[6px] font-bold text-gray-400 mt-0.5 uppercase tracking-wider">Live Sessions</div>
            </div>
          </motion.div>

          {/* Top Left: Security Shield (Dark Glass Theme) */}
          <motion.div 
            initial={{ opacity: 0, x: -30, y: -30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-2 left-2 w-44 bg-navy/95 backdrop-blur-xl border border-white/10 p-3.5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-20 overflow-hidden"
          >
            {/* Glowing Scan Line */}
            <motion.div 
               animate={{ top: ['0%', '100%', '0%'] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent pointer-events-none"
            />

            <div className="flex items-center gap-3">
               <div className="h-7 w-7 bg-primary/10 rounded-lg flex items-center justify-center text-primary relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  <span className="absolute -top-0.5 -right-0.5 flex h-1.5 w-1.5">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
               </div>
               <div>
                  <div className="text-[9px] font-black text-white leading-none">Security Shield</div>
                  <div className="text-[6.5px] font-bold text-gray-400 uppercase tracking-widest mt-1">Encrypted Logs</div>
               </div>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2">
               <span className="text-[6px] text-gray-400 font-bold uppercase">Status</span>
               <span className="text-[6px] text-emerald-400 font-black uppercase tracking-wider">Secured</span>
            </div>
          </motion.div>

          {/* Center Piece: Main Dashboard Mockup (Light Glass Theme) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-[82%] bg-white/70 backdrop-blur-xl border border-white/60 p-5 rounded-[2rem] shadow-[0_30px_70px_rgba(0,0,0,0.06)] relative z-10 overflow-hidden"
          >
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[8px] font-black text-navy uppercase tracking-widest">Ecosystem Live Hub</span>
               </div>
               <div className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[7px] font-black uppercase tracking-wider">
                  v2.5
               </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
               <div className="bg-gray-50/50 border border-gray-100 p-2.5 rounded-xl">
                  <span className="text-[7px] font-bold text-gray-400 uppercase tracking-widest">Growth Index</span>
                  <div className="text-sm font-black text-navy mt-1">+48.2%</div>
               </div>
               <div className="bg-gray-50/50 border border-gray-100 p-2.5 rounded-xl">
                  <span className="text-[7px] font-bold text-gray-400 uppercase tracking-widest">Daily Synced</span>
                  <div className="text-sm font-black text-navy mt-1">98.4%</div>
               </div>
            </div>

            {/* Real-time Line Chart */}
            <svg className="w-full h-24 mt-4 overflow-visible" viewBox="0 0 100 40">
               <defs>
                  <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#f97316" stopOpacity="0.25" />
                     <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                  </linearGradient>
               </defs>
               
               {/* Grid Lines */}
               <line x1="0" y1="10" x2="100" y2="10" stroke="#f1f5f9" strokeWidth="0.5" strokeDasharray="2 2" />
               <line x1="0" y1="20" x2="100" y2="20" stroke="#f1f5f9" strokeWidth="0.5" strokeDasharray="2 2" />
               <line x1="0" y1="30" x2="100" y2="30" stroke="#f1f5f9" strokeWidth="0.5" strokeDasharray="2 2" />

               {/* Filled Area */}
               <motion.path
                  d="M0 40 Q25 15, 50 25 T100 10 L100 40 Z"
                  fill="url(#chart-grad)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
               />

               {/* Glow Line */}
               <motion.path
                  d="M0 40 Q25 15, 50 25 T100 10"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
               />

               {/* Pulse indicator dot */}
               <motion.circle
                  cx="100"
                  cy="10"
                  r="3"
                  fill="#f97316"
                  animate={{ r: [3, 5, 3] }}
                  transition={{ duration: 2, repeat: Infinity }}
               />
            </svg>
          </motion.div>

          {/* Bottom Right: Real-time Live Activity Feed (White Glass Theme) */}
          <motion.div 
            initial={{ opacity: 0, x: 30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="absolute bottom-2 right-2 w-48 bg-white/95 backdrop-blur-xl border border-gray-100 p-3.5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] z-20"
          >
            <div className="mb-2.5 flex items-center justify-between border-b border-gray-50 pb-1.5">
               <span className="text-[7.5px] font-black text-navy uppercase tracking-widest">Live Operations</span>
               <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
               </span>
            </div>

            <div className="min-h-[38px] flex flex-col justify-center">
               <AnimatePresence mode="wait">
                  <motion.div
                     key={currentActivity}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -10 }}
                     transition={{ duration: 0.3 }}
                     className="flex items-start gap-2.5"
                  >
                     <div className={`h-6 w-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        activities[currentActivity].type === 'success' ? 'bg-emerald-500/10 text-emerald-500' :
                        activities[currentActivity].type === 'warning' ? 'bg-orange-500/10 text-orange-500' :
                        'bg-blue-500/10 text-blue-500'
                     }`}>
                        {activities[currentActivity].type === 'success' ? (
                           <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        ) : activities[currentActivity].type === 'warning' ? (
                           <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        ) : (
                           <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"/></svg>
                        )}
                     </div>
                     <div className="flex-1 min-w-0">
                        <h4 className="text-[8.5px] font-black text-navy truncate leading-snug">{activities[currentActivity].title}</h4>
                        <p className="text-[7.5px] font-medium text-gray-400 mt-0.5 truncate leading-snug">{activities[currentActivity].desc}</p>
                        <span className="text-[6px] text-gray-300 font-bold block mt-0.5">{activities[currentActivity].time}</span>
                     </div>
                  </motion.div>
               </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
}

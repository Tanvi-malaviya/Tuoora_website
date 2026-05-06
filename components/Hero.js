'use client';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({ setIsModalOpen }) {
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

        <div className="relative flex justify-center lg:justify-end lg:pl-10">
          {/* Floating Stat Cards (Unique Elements) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -top-6 -left-6 z-20 hidden sm:block"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-white/50 p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex items-center gap-3">
              <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <div className="text-lg font-black text-navy leading-none">1.2k+</div>
                <div className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mt-1">Institutes</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute -bottom-6 right-0 z-20 hidden sm:block"
          >
            <div className="bg-navy/90 backdrop-blur-xl border border-navy/5 p-4 rounded-2xl shadow-2xl flex items-center gap-3">
              <div className="h-8 w-8 bg-white/10 rounded-lg flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <div>
                <div className="text-lg font-black text-white leading-none">99.9%</div>
                <div className="text-[8px] font-bold text-white/40 uppercase tracking-widest mt-1">Secure</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative z-10 w-full max-w-[460px]"
          >
            {/* Main Floating Image */}
            <motion.div
               animate={{ 
                  y: [0, -20, 0],
               }}
               transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
               }}
               className="relative"
            >
               <Image 
                  src="/hero_3d.png" 
                  alt="Tuoora ERP Mockup" 
                  width={550} 
                  height={550} 
                  className="w-full h-auto"
                  priority
               />
            </motion.div>
          </motion.div>
          
          {/* Deep static background blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-primary/[0.04] rounded-full blur-[140px] -z-20 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}

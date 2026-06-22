'use client';

import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          {/* Outer rotating neon circle */}
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
              className="w-24 h-24 rounded-full border-2 border-dashed border-primary/20 border-t-primary"
            />
            
            {/* Inner pulsing Tuoora logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [0.9, 1.05, 0.9] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="w-10 h-10 flex items-center justify-center"
              >
                <img
                  src="/favicon.png"
                  alt="Tuoora Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
          </div>

          {/* Glowing Brand Name */}
          <div className="mt-8 text-center space-y-2">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-navy">
              TUOORA
            </h2>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] animate-pulse">
              Smart Institute Ecosystem
            </p>
          </div>

          {/* Minimalist Progress Bar */}
          <div className="mt-6 w-36 bg-slate-100 h-0.5 rounded-full overflow-hidden relative">
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="bg-gradient-to-r from-primary to-orange-500 h-full rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

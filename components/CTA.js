'use client';
import { motion } from "framer-motion";

export default function CTA({ setIsModalOpen }) {
  return (
    <section className="relative py-8 bg-white overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-4xl mx-auto rounded-[1.5rem] bg-navy overflow-hidden shadow-lg"
        >
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 px-6 py-10 md:px-12 md:py-12 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-5"
            >
              <span className="h-1.5 w-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-[9px] font-black text-white/60 uppercase tracking-[0.2em]">Scale Your Growth</span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
              Ready to <span className="text-primary">Transform</span> <br />
              Your Hub?
            </h2>

            <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto mb-8 font-medium">
              Join 10+ institutions already using Tuoora to automate their operations and scale faster.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-12 py-4 bg-primary text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-primary/20 hover:bg-white hover:text-navy transition-all active:scale-95"
              >
                Request Free Demo
              </button>
              
              <div className="flex items-center gap-3">
                {/* <div className="flex -space-x-2">
                  {[1,2].map(i => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-navy bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover grayscale" />
                    </div>
                  ))}
                </div>
                <div className="text-left leading-none">
                  <div className="text-white font-bold text-xs">1.2k+ Institutes</div>
                  <div className="text-white/30 text-[8px] uppercase font-black tracking-widest mt-1">Trust Tuoora</div>
                </div> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
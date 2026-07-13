"use client";

import { motion } from "framer-motion";

const benefitContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const benefitItem = {
  hidden: { opacity: 0, scale: 0.85, y: 25 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function OperationalIntegration() {
  const benefits = [
    "Student Management", "Staff & HR Management",
    "Branch & Batch Management", "Attendance Tracking",
    "Fees & Collections", "Exams & Assessments",
    "Announcements & Notifications", "Live Classes",
    "Website Manager", "Study Materials & E-Content"
  ];

  return (
    <section className="py-6 bg-transparent overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:items-center">

          {/* LEFT: Visual Mockup */}
          <div className="relative group order-2 lg:order-1 flex items-center justify-center p-4">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/10 rounded-full blur-[90px] pointer-events-none z-0"></div>
            <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] bg-teal-500/10 rounded-full blur-[80px] pointer-events-none z-0"></div>

            {/* Interactive 3D Composition Wrapper */}
            <div className="relative w-full max-w-lg transform lg:perspective-[2500px] lg:rotate-y-[15deg] lg:rotate-x-[5deg] select-none">
              
              {/* Main Desktop Dashboard Mockup */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.2)] border border-slate-200/50 bg-white/80 backdrop-blur-md p-1.5 z-10">
                {/* Custom Mac-Style Chrome Window Header */}
                <div className="h-6 w-full bg-slate-50/80 flex items-center gap-1.5 px-4 border-b border-slate-100/50 select-none shrink-0">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#27c93f]"></div>
                  <span className="text-[8px] text-slate-400 font-bold ml-3 tracking-wider">tuoora.com/dashboard</span>
                </div>
                
                {/* Screenshot viewport */}
                <div className="relative bg-white aspect-[19/9] overflow-hidden p-0.5">
                  <img src="/image.png" alt="Tuoora ERP Dashboard" className="w-full h-full object-contain" />
                  
                  {/* Laser Scanning Bar */}
                  <motion.div
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/80 to-transparent shadow-[0_0_12px_rgba(249,115,22,0.8)] z-20 pointer-events-none"
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Glass Glare */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08] pointer-events-none z-10" />
                </div>
              </div>

              {/* Floating Mobile Phone Mockup */}
              <motion.div 
                className="absolute -right-8 -bottom-10 w-[38%] z-20"
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Sleek Mobile Frame */}
                <div className="relative rounded-[1.8rem] border-[6px] border-slate-900 bg-slate-900 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] overflow-hidden aspect-[9/19]">
                  {/* Dynamic Island */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-2.5 bg-black rounded-full z-30"></div>
                  {/* Screenshot */}
                  <div className="w-full h-full bg-gray-900 overflow-hidden">
                    <img src="/mobile-dashboard.png" alt="Tuoora Mobile Dashboard" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 1 - Left Top */}
              {/* <motion.div 
                className="absolute -left-12 top-10 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100/50 z-20 flex items-center gap-2.5"
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="h-5 w-5 rounded-lg bg-emerald-500/10 flex items-center justify-center text-xs">🚀</div>
                <div className="text-left">
                  <div className="text-[7px] font-black text-slate-400 uppercase tracking-wider leading-none">Automated</div>
                  <div className="text-[10px] font-black text-navy leading-none mt-0.5">WhatsApp Alerts</div>
                </div>
              </motion.div> */}

              {/* Floating Badge 2 - Right Top */}
              {/* <motion.div 
                className="absolute -right-6 -top-6 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100/50 z-20 flex items-center gap-2.5"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="h-5 w-5 rounded-lg bg-primary/10 flex items-center justify-center text-xs">📈</div>
                <div className="text-left">
                  <div className="text-[7px] font-black text-slate-400 uppercase tracking-wider leading-none">Multi-Branch</div>
                  <div className="text-[10px] font-black text-navy leading-none mt-0.5">Real-time Sync</div>
                </div>
              </motion.div> */}

              {/* Floating Badge 3 - Left Bottom */}
              {/* <motion.div 
                className="absolute -left-8 -bottom-6 bg-white/90 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-slate-100/50 z-20 flex items-center gap-2.5"
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <div className="h-5 w-5 rounded-lg bg-teal-500/10 flex items-center justify-center text-xs">🔒</div>
                <div className="text-left">
                  <div className="text-[7px] font-black text-slate-400 uppercase tracking-wider leading-none">Security</div>
                  <div className="text-[10px] font-black text-navy leading-none mt-0.5">100% Encrypted</div>
                </div>
              </motion.div> */}
            </div>
          </div>

          {/* RIGHT: Content & Benefits */}
          <motion.div
            className="lg:pl-8 order-1 lg:order-2 text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* Heading Area */}
            <div className="mb-8">
              <motion.span
                variants={{
                  hidden: { opacity: 0, x: 40 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                }}
                className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-3 block"
              >
                Why Modern Institutes Need ERP
              </motion.span>

              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black text-navy leading-[1.1] tracking-tight mb-4 overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  One Software for Complete
                </motion.span>
                <br className="hidden sm:block"/>
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-primary italic"
                >
                  Institute Operations
                </motion.span>
              </h2>

              <motion.p
                variants={{
                  hidden: { opacity: 0, filter: "blur(8px)" },
                  visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.8, delay: 0.3 } }
                }}
                className="text-slate-500 text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto pt-1 lg:mx-0"
              >
                Stop struggling with multiple tools. Tuoora brings everything under one roof, helping you focus on education while we handle the rest.
              </motion.p>
            </div>

            {/* Benefits */}
            <motion.div
              variants={benefitContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={benefitItem}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100 group hover:bg-white hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Hover Light Sweep */}
                  <motion.div
                    initial={{ x: "-120%" }}
                    whileHover={{ x: "120%" }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent"
                  />

                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative z-10 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>

                  <span className="relative z-10 text-xs font-bold text-navy tracking-tight group-hover:text-primary transition-colors">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-float-delayed { animation: float 6s ease-in-out infinite 1s; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

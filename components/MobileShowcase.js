'use client';

import { motion } from "framer-motion";
import { Smartphone, ShieldCheck, BellRing } from 'lucide-react';

export default function MobileShowcase() {
  const cards = [
    {
      title: "Student Workspace",
      desc: "Empower students with instant access to their digital profiles, daily attendance logs, exam schedules, and downloadable study materials.",
      icon: Smartphone,
      gradient: "from-blue-500/10 to-indigo-500/5",
      iconColor: "text-blue-500",
      borderColor: "group-hover:border-blue-500/30"
    },
    {
      title: "Admin Dashboard",
      desc: "Monitor your institution on the go. View cash flow summaries, approve staff check-ins, track daily collections, and access live stats.",
      icon: ShieldCheck,
      gradient: "from-orange-500/10 to-amber-500/5",
      iconColor: "text-orange-500",
      borderColor: "group-hover:border-orange-500/30"
    },
    {
      title: "Automated Notifications",
      desc: "Leverage Firebase FCM push alerts and official WhatsApp Business Cloud API to send automated fee reminders and attendance absence alerts.",
      icon: BellRing,
      gradient: "from-emerald-500/10 to-teal-500/5",
      iconColor: "text-emerald-500",
      borderColor: "group-hover:border-emerald-500/30"
    }
  ];

  return (
    <section className="py-20 bg-[#FDFDFD] overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Content & Modern Stack */}
          <motion.div
            className="lg:col-span-7 order-2 lg:order-1 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 }
              }
            }}
          >
            <div>
              {/* Subtitle Badge */}
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="inline-block rounded-full bg-primary/5 px-3 py-1 text-[8px] font-black text-primary uppercase tracking-[0.3em] mb-4 border border-primary/10"
              >
                Mobile Ecosystem
              </motion.span>

              {/* Rising Mask Title Reveal */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tighter leading-[1.1] mb-4">
                <span className="block overflow-hidden py-1">
                  <motion.span
                    variants={{
                      hidden: { y: "100%", opacity: 0 },
                      visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    className="inline-block"
                  >
                    The Institutional
                  </motion.span>
                </span>
                <span className="block overflow-hidden py-1">
                  <motion.span
                    variants={{
                      hidden: { y: "100%", opacity: 0 },
                      visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    className="inline-block"
                  >
                    Powerhouse in Your <span className="text-primary italic">Pocket.</span>
                  </motion.span>
                </span>
              </h2>

              {/* Description */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="text-sm text-gray-400 font-light max-w-xl leading-relaxed"
              >
                Tuoora offers dedicated applications for administrative control and student interactions. Carry your workspace, ledger records, and academic schedules wherever you go.
              </motion.p>
            </div>

            {/* Feature Cards Staggered Slide Up */}
            <div className="space-y-4">
              {cards.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
                    }}
                    whileHover={{ y: -4 }}
                    className="group flex gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] transition-all duration-300 cursor-default"
                  >
                    <div className={`h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center ${item.iconColor} transition-transform duration-300 group-hover:scale-105`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy mb-1 tracking-tight group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-gray-400 font-medium leading-relaxed max-w-lg">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT: Stylized Visual Mockup */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative h-[500px] flex items-center justify-center">
            {/* Glow Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm h-full bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Phone Container Entrance on Scroll */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 40 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }
                }
              }}
              className="relative z-10 p-10 bg-white rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] border border-gray-50 overflow-visible"
            >
              {/* SVG Decorative Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 300 400">
                <path d="M150,200 L60,100" stroke="#FF6B00" strokeWidth="1.5" strokeDasharray="4,4" fill="none" className="opacity-20 animate-dash" />
                <path d="M150,200 L240,120" stroke="#FF6B00" strokeWidth="1.5" strokeDasharray="4,4" fill="none" className="opacity-20 animate-dash" />
                <path d="M150,200 L220,290" stroke="#FF6B00" strokeWidth="1.5" strokeDasharray="4,4" fill="none" className="opacity-20 animate-dash" />
              </svg>

              {/* Central Phone */}
              <div className="relative w-[180px] md:w-[200px] h-[360px] md:h-[400px] bg-slate-900 rounded-[2.2rem] md:rounded-[2.5rem] shadow-2xl border-[6px] md:border-[8px] border-slate-900 overflow-hidden">
                {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-30"></div>
                {/* Screenshot */}
                <img src="/mobileshowcase.png" alt="Tuoora Mobile App UI" className="w-full h-full object-cover" />
              </div>

              {/* Floating Badges */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
                className="absolute top-8 left-0 -translate-x-8 bg-white px-3.5 py-1.5 rounded-xl shadow-lg border border-gray-100 hidden sm:flex items-center gap-1.5 animate-float"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[8px] font-black text-navy uppercase tracking-wider">WhatsApp Cloud API</span>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
                className="absolute top-20 right-0 translate-x-10 bg-white px-3.5 py-1.5 rounded-xl shadow-lg border border-gray-100 hidden sm:flex items-center gap-1.5 animate-float-delayed"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                <span className="text-[8px] font-black text-navy uppercase tracking-wider">FCM Push Alerts</span>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
                className="absolute bottom-24 right-0 translate-x-12 bg-white px-3.5 py-1.5 rounded-xl shadow-lg border border-gray-100 hidden sm:flex items-center gap-1.5 animate-float"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                <span className="text-[8px] font-black text-navy uppercase tracking-wider">Real-Time Sync</span>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, type: "spring", stiffness: 120 }}
                className="absolute bottom-6 left-0 -translate-x-12 bg-navy text-white px-3.5 py-1.5 rounded-xl shadow-lg hidden sm:flex items-center gap-1.5 animate-float-delayed"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
                <span className="text-[8px] font-black uppercase tracking-wider">Sanctum Secured</span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float 4s ease-in-out infinite 1.5s; }
        .animate-dash { 
          stroke-dashoffset: 0;
          animation: dash 4s linear infinite; 
        }
      `}</style>
    </section>
  );
}

'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowRight, ShieldCheck, Zap, RefreshCw } from "lucide-react";

export default function FreeTrialPromo() {
  const perks = [
    {
      icon: Zap,
      title: "No Credit Card Required",
      desc: "Instant onboarding. No billing hurdles, no auto-charges, no lock-ins.",
      color: "bg-amber-500/10 text-amber-500"
    },
    {
      icon: RefreshCw,
      title: "Free Data Migration",
      desc: "Our engineers import your existing students & fees in 24 hours.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: ShieldCheck,
      title: "Full Feature Access",
      desc: "Test every single module including fee receipts, student notifications, and exam reports.",
      color: "bg-green-500/10 text-green-500"
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-slate-50/50 overflow-hidden relative border-t border-slate-100">
      {/* Background wireframe and glowing aura */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10" />
      <div className="absolute left-[10%] top-[20%] w-[40%] h-[40%] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-[10%] bottom-[10%] w-[35%] h-[35%] bg-navy/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Left Column: Heading, highlights & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-primary/10 rounded-full shadow-md shadow-primary/5"
            >
              <span className="h-1.5 w-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-[9px] font-black text-primary uppercase tracking-[0.35em]">Limited Offer</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-[1.1] mb-4">
              Try Tuoora ERP <br />
              <span className="text-primary italic relative">
                Free for 1 Month
                <span className="absolute bottom-1 left-0 w-full h-1 bg-primary/10 -z-10 origin-left" />
              </span>
            </h2>

            <p className="text-sm text-gray-400 font-medium leading-relaxed max-w-xl">
              Get full enterprise dashboard access for 30 days. Automate class schedules, parent alerts, 
              and collect fees with zero platform commission. Transition without interrupting your daily hub.
            </p>

            {/* List items */}
            <div className="space-y-3 pt-2">
              {[
                "100% Free for the first 30 days",
                "Includes Free SMS alerts & App login setup",
                "Zero platform commission on QR collections"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span className="text-xs text-navy font-bold">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link 
                href="https://institute.tuoora.com/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-4.5 bg-primary text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-xl shadow-xl shadow-primary/20 transition-all duration-300"
                >
                  Start Your Free Month
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Right Column: Perks layout (Bento design) */}
          <div className="lg:col-span-6 grid gap-4">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, type: "spring", stiffness: 80, damping: 15 }}
                  whileHover={{ 
                    y: -6, 
                    borderColor: "rgba(255, 107, 38, 0.15)",
                    boxShadow: "0 20px 40px rgba(15,23,42,0.04)" 
                  }}
                  className="flex items-start gap-4 p-6 bg-white border border-slate-100 rounded-3xl transition-all duration-300"
                >
                  <div className={`p-3.5 rounded-2xl ${perk.color} shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-navy uppercase tracking-wider mb-1">
                      {perk.title}
                    </h4>
                    <p className="text-xs text-gray-400 font-medium leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

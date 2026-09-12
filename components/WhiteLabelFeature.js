'use client';

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const features = [
  {
    emoji: "📱",
    title: "Your Own Mobile App",
    subTitle: "Android & iOS",
    desc: "Launch custom apps on Google Play Store & Apple App Store with your institute's name, icon, and branding. Parents & students download YOUR official app — not a generic platform.",
    color: "text-orange-400",
    glow: "bg-orange-500/10",
    hoverBorder: "hover:border-orange-500/40",
    topGradient: "from-orange-500/30 via-orange-400/10 to-transparent",
  },
  {
    emoji: "🌐",
    title: "Custom Domain & Portal",
    subTitle: "portal.youracademy.com",
    desc: "Run your admin panel and student portal on your own domain. Full custom brand colours, favicon, and login screen — no Tuoora URL ever visible to anyone.",
    color: "text-amber-400",
    glow: "bg-amber-500/10",
    hoverBorder: "hover:border-amber-500/40",
    topGradient: "from-amber-500/30 via-amber-400/10 to-transparent",
  },
  {
    emoji: "🧾",
    title: "Branded Reports & Receipts",
    subTitle: "100% Your Identity",
    desc: "Every fee receipt, exam scorecard, attendance report, and PDF certificate features your official institute header, logo, and signature — building parent trust from day one.",
    color: "text-emerald-400",
    glow: "bg-emerald-500/10",
    hoverBorder: "hover:border-emerald-500/40",
    topGradient: "from-emerald-500/30 via-emerald-400/10 to-transparent",
  },
  {
    emoji: "📲",
    title: "Personalized WhatsApp & SMS",
    subTitle: "Your Sender Identity",
    desc: "Fee reminders, homework alerts, and exam marks reach parents with your institute's sender name and identity — not a generic platform name. Elevate your brand reputation.",
    color: "text-sky-400",
    glow: "bg-sky-500/10",
    hoverBorder: "hover:border-sky-500/40",
    topGradient: "from-sky-500/30 via-sky-400/10 to-transparent",
  },
];

const checklist = [
  "Zero Tuoora branding — ever",
  "Your logo on every student-facing screen",
  "Custom Play Store & App Store listing",
  "Branded PDF receipts, report cards & ID cards",
  "WhatsApp / SMS with your institute sender name",
  "Custom domain with free SSL certificate",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhiteLabelFeature() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 z-0" />

      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-500/[0.07] rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/[0.05] rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-sky-500/[0.04] rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="section-container relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 mb-6"
          >
            <span className="text-sm">🏷️</span>
            <span className="text-[10px] font-black text-orange-400 uppercase tracking-[0.3em]">100% White-Label Solution</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1] mb-5">
            Your Brand.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400">
              Your App.
            </span>
            <br />
            Zero Tuoora Branding.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto">
            Stand out as an elite educational brand. Get custom Android &amp; iOS mobile apps and a web portal
            launched completely under your institute&apos;s name, logo, and domain —{" "}
            <span className="text-white font-semibold">parents and students see only your brand</span>.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`relative group bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 transition-all duration-300 overflow-hidden ${f.hoverBorder}`}
            >
              {/* Hover glow */}
              <div className={`absolute -right-8 -bottom-8 w-36 h-36 ${f.glow} rounded-full blur-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none`} />
              {/* Top shimmer line */}
              <div className={`absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r ${f.topGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Emoji icon */}
              <div className={`h-12 w-12 rounded-xl ${f.glow} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {f.emoji}
              </div>

              <p className={`text-[9px] font-black uppercase tracking-widest ${f.color} mb-1.5`}>{f.subTitle}</p>
              <h3 className="text-sm font-bold text-white mb-2 tracking-tight leading-snug">{f.title}</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar: checklist + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 bg-white/[0.03] border border-white/10 rounded-3xl px-8 py-8 backdrop-blur-sm"
        >
          {/* Checklist */}
          <div className="flex-1 w-full">
            <p className="text-[9px] font-black text-orange-400 uppercase tracking-[0.3em] mb-4">What Your White-Label Includes</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {checklist.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span className="text-xs font-medium text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block w-px h-24 bg-white/10 shrink-0" />

          {/* CTA */}
          <div className="text-center lg:text-right shrink-0">
            <p className="text-xs text-slate-400 font-medium mb-4 max-w-[240px] mx-auto lg:ml-auto">
              Launch your branded institute app &amp; portal in as little as{" "}
              <span className="text-white font-bold">7 days</span>.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-400 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-xl shadow-2xl shadow-orange-500/30 transition-shadow duration-300 hover:shadow-orange-500/50"
              >
                Get Your Branded App
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <p className="text-[9px] text-slate-500 mt-2 font-medium">No credit card required • Free onboarding</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

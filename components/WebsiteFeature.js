'use client';

import { motion } from "framer-motion";
import { Globe, Palette, LayoutTemplate, Smartphone, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const websitePerks = [
  {
    icon: LayoutTemplate,
    title: "Ready-Made Templates",
    desc: "Choose from professionally designed institute website templates — no coding needed.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Palette,
    title: "Branded Identity",
    desc: "Custom logo, institute name, colours, and contact info — all auto-populated from your dashboard.",
    color: "bg-violet-500/10 text-violet-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    desc: "Pixel-perfect on every screen — phone, tablet, and desktop — out of the box.",
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    icon: Globe,
    title: "Live Instantly",
    desc: "Your website goes live the moment you activate it. No hosting headaches, no DNS delays.",
    color: "bg-primary/10 text-primary",
  },
];

const highlights = [
  "Dedicated institute landing page",
  // "Batch schedule & fee structure display",
  // "Admission enquiry form (CRM integration)",
  "Auto-synced with your Tuoora data",
  "Zero hosting or setup cost",
  "Custom domain support",
];

export default function WebsiteFeature() {
  return (
    <section className="py-10 bg-transparent overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/3 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/3 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="section-container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 border border-primary/15 rounded-full mb-5"
          >
            <Globe className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Included Free</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tighter leading-[1.1] mb-5">
            Your Institute Gets Its{" "}
            <span className="text-primary italic relative">
              Own Website
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-1 left-0 w-full h-2 bg-primary/10 -z-10 origin-left"
              />
            </span>
            . Automatically.
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto pt-1">
            Every institute on Tuoora gets a fully branded, mobile-ready website — powered directly by your web panel data. No developers. No extra cost. Ever.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">

          {/* Left: Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Real Tuoora Website CMS Screenshot */}
            <div className="relative rounded-[1.75rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-slate-100 bg-white">
              {/* Browser chrome */}
              <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-1 flex items-center gap-2 max-w-xs mx-auto">
                  <Globe className="w-3 h-3 text-slate-400 shrink-0" />
                  <span className="text-[10px] text-slate-500 font-medium truncate">
                    institute.tuoora.com — Website CMS
                  </span>
                </div>
              </div>

              {/* Actual admin panel screenshot */}
              <img
                src="/website-cms.png"
                alt="Tuoora Website CMS — Manage Your Portal"
                className="w-full h-auto block"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
              className="absolute -top-4 -right-4 bg-white border border-slate-100 rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-2"
            >
              <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black text-navy uppercase tracking-wider">Live & Auto-Updated</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0, y: -20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
              className="absolute -bottom-4 -left-4 bg-navy text-white rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-2"
            >
              <Globe className="w-3.5 h-3.5 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-wider">Free with Every Plan</span>
            </motion.div>
          </motion.div>

          {/* Right: Feature highlights + checklist */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Perk cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {websitePerks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4, borderColor: "rgba(255,107,38,0.2)" }}
                    className="flex gap-3 p-4 rounded-2xl bg-slate-50/70 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-lg"
                  >
                    <div className={`p-2.5 rounded-xl ${perk.color} shrink-0 h-fit`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-navy uppercase tracking-wider mb-1">{perk.title}</h4>
                      <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{perk.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Checklist */}
            <div className="p-5 rounded-2xl bg-navy/[0.03] border border-navy/10">
              <p className="text-[10px] font-black text-navy uppercase tracking-widest mb-4">What Your Website Includes</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="text-xs font-medium text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link href="/features#website">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-xl shadow-xl shadow-primary/20 transition-all duration-300"
              >
                See Website Feature in Action
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

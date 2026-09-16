'use client';

import { useState } from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  HeartHandshake, 
  ArrowRight, 
  CheckCircle2, 
  Check, 
  Mail, 
  Palette, 
  FileText,
  Building2,
  Users2,
  Award
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TechBackground from "../../components/TechBackground";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const whiteLabelPillars = [
    {
      icon: "🏷️",
      lucideIcon: Award,
      title: "Your Institute Logo",
      badge: "App & Web Branding",
      desc: "Your official institute crest and logo take center stage. Displayed on the mobile app launcher icon, launch splash screen, login window, and administrative header.",
      points: [
        "Custom mobile app icon on student devices",
        "Official logo on login & splash screens",
        "Branded dashboard header & profile cards"
      ],
      color: "from-orange-500/20 to-amber-500/5",
      borderHover: "hover:border-orange-500/40",
      textColor: "text-orange-500",
    },
    {
      icon: "🎨",
      lucideIcon: Palette,
      title: "Brand Colour Theme",
      badge: "Visual Identity",
      desc: "Customize the entire digital experience with your institute's exact brand colors. From primary action buttons to navigation accents, the theme aligns 100% with your brand guidelines.",
      points: [
        "Primary & secondary palette matching",
        "Uniform visual styling across web & mobile",
        "Custom gradients for certificates and cards"
      ],
      color: "from-amber-500/20 to-yellow-500/5",
      borderHover: "hover:border-amber-500/40",
      textColor: "text-amber-500",
    },
    {
      icon: "✉️",
      lucideIcon: Mail,
      title: "Custom Email Settings",
      badge: "Official Communication",
      desc: "Configure your own official SMTP and sender domain (e.g. info@yourinstitute.com). Automated fee receipts, admission letters, and exam updates arrive directly from your institute.",
      points: [
        "Custom SMTP server integration",
        "Emails sent from your institute domain",
        "Higher parent trust and 99%+ deliverability"
      ],
      color: "from-emerald-500/20 to-teal-500/5",
      borderHover: "hover:border-emerald-500/40",
      textColor: "text-emerald-500",
    },
    {
      icon: "🧾",
      lucideIcon: FileText,
      title: "Branded PDF Receipts & Reports",
      badge: "Legal & Academic Documents",
      desc: "Every generated fee receipt, student ID card, and scorecard carries your registered header, GSTIN, authorized signatures, and verification QR code — with zero third-party watermarks.",
      points: [
        "GST-compliant fee receipts with your logo",
        "Official student ID cards with QR verification",
        "Custom grade reports with zero Tuoora watermark"
      ],
      color: "from-sky-500/20 to-blue-500/5",
      borderHover: "hover:border-sky-500/40",
      textColor: "text-sky-500",
    },
  ];

  const coreValues = [
    {
      icon: Building2,
      title: "Institutions First",
      desc: "We build for coaching owners, school principals, and administrators. Our product evolves around your daily operational realities."
    },
    {
      icon: ShieldCheck,
      title: "Data Privacy & Isolation",
      desc: "Your data belongs exclusively to you. Every institute runs on isolated instances with 256-bit SSL encryption and automated daily backups."
    },
    {
      icon: HeartHandshake,
      title: "Dedicated Human Support",
      desc: "No automated runarounds. Every institute gets a dedicated Relationship Manager for onboarding, free data migration, and technical assistance."
    },
    {
      icon: Zap,
      title: "Zero Operational Lag",
      desc: "Built with high-density database architecture and edge caching to load student records, attendance logs, and fee ledgers in milliseconds."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-navy selection:bg-primary/20 relative overflow-hidden">
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <TechBackground />

      <main className="relative z-10 pt-28 pb-16">
        
        {/* Hero Section */}
        <section className="section-container text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/15 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Tuoora ERP</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy leading-[1.15] mb-6">
              Empowering Institutes with <br />
              <span className="text-primary italic">Complete Brand Ownership.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto">
              We believe great institutions shouldn&apos;t have to promote someone else&apos;s software. 
              Tuoora provides the invisible, high-performance digital backbone that powers your institute 
              entirely under <span className="text-navy font-bold">your own name, logo, and identity</span>.
            </p>
          </motion.div>
        </section>

        {/* Highlight Section: 100% White-Label Capability */}
        <section className="section-container mb-24">
          <div className="bg-slate-950 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl text-white">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            <div className="relative z-10 max-w-4xl mx-auto text-center mb-14">
              <span className="inline-block px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                Signature Capability
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                100% White-Label Architecture
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Unlike generic platforms that plaster their own logo everywhere, Tuoora operates behind the scenes. 
                Your students, parents, and teachers interact exclusively with your brand.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {whiteLabelPillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group bg-slate-900/80 border border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 ${pillar.borderHover} flex flex-col justify-between`}
                >
                  <div>
                    <div className="text-3xl mb-3">{pillar.icon}</div>
                    <span className={`text-[9px] font-black uppercase tracking-widest ${pillar.textColor} block mb-1`}>
                      {pillar.badge}
                    </span>
                    <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{pillar.desc}</p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-slate-800/80">
                    {pillar.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-3 h-3 text-orange-400 shrink-0 mt-0.5" />
                        <span className="text-[10px] text-slate-300 leading-tight">{pt}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Proof Strip */}
            <div className="relative z-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-slate-300">
                  Zero third-party watermarks or platform redirects — ever.
                </span>
              </div>

              <Link href="/contact">
                <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 text-white text-xs font-black uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer">
                  <span>Explore White-Label Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Our Mission & Core Values */}
        <section className="section-container mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] block mb-2">
              Why We Exist
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Built on Principles of Trust &amp; Simplicity
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed mt-3">
              We set out to eliminate fragmented spreadsheets, chaotic WhatsApp groups, and clunky legacy software with one unified ecosystem.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <div 
                  key={i} 
                  className="p-7 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-navy mb-2">{v.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Call to Action Bar */}
        <section className="section-container">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy p-8 sm:p-12 text-center text-white shadow-2xl">
            <div className="absolute -top-24 -left-24 h-64 w-64 bg-primary/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -right-24 h-64 w-64 bg-primary/10 rounded-full blur-[80px]" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] mb-2 block">
                Partner with Tuoora
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight">
                Ready to transform your institute under your own brand?
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mb-8 leading-relaxed">
                Start your 30-day free trial today. Our team migrates all your student and fee data in 24 hours at zero cost.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all active:scale-95 cursor-pointer"
                >
                  Book A Live Demo
                </button>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 bg-white/10 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-white/20 transition-colors border border-white/15"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

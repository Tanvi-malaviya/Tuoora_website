'use client';

import { useState } from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, Wallet, Layers, Briefcase, MessageSquare, Target, Check } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PowerSection from "@/components/PowerSection";

const categoriesData = [
  {
    id: "student",
    title: "Student & Batch Management",
    desc: "Complete student lifecycle — from enrollment to ID card, attendance, and parent connectivity.",
    icon: GraduationCap,
    colorClass: "text-indigo-600 bg-indigo-50 border-indigo-100",
    glowClass: "bg-indigo-500/10",
    features: [
      { title: "Student Registry & Enrollment", desc: "Full academic database with name, photo, enrollment ID, batch info, and registration dates. Auto-generated 6-digit institute code used in student IDs." },
      { title: "Smart Batch & Course Allocation", desc: "Group students by batch with capacity limits, classroom assignment, schedule days, and multi-batch support per student." },
      { title: "QR-Based ID Card System", desc: "Generate printable student ID cards with QR codes. Public API endpoint allows instant ID verification by scanning." },
      { title: "Birthday Tracker", desc: "Admin dashboard highlights today's birthday students for personalized outreach and relationship building." },
      { title: "Daily Updates & Class Diary", desc: "Post class topics, notes, and updates to specific batches or all students. Parents and students see them instantly in the app." }
    ]
  },
  {
    id: "finance",
    title: "Fee Collection & Financial Suite",
    desc: "Automated billing cycles, UPI payments, GST invoicing, and granular expense ledgers.",
    icon: Wallet,
    colorClass: "text-emerald-600 bg-emerald-50 border-emerald-100",
    glowClass: "bg-emerald-500/10",
    features: [
      { title: "UPI & QR Code Payments", desc: "Institute uploads UPI ID and QR code once. Students pay directly via GPay/PhonePe deep link or QR scan from the mobile app." },
      { title: "Structured Fee Cycle Engine", desc: "Configure monthly, term-based, or yearly fee schedules. Set automated discount rules, sibling discounts, and scholarship deductions." },
      { title: "Partial Payment & Installments", desc: "Enable flexible split-payment schedules. Track partial payments, outstanding balances, and automated balance checks." },
      { title: "PDF Receipts", desc: "Auto-generate downloadable PDF receipts after every payment." },
      { title: "WhatsApp Fee Reminders", desc: "Automated WhatsApp, SMS, and push notification reminders sent before and on due dates via WhatsApp Business Cloud API." }
    ]
  },
  {
    id: "student",
    title: "Attendance & Homework",
    desc: "Batch-wise attendance tracking, homework submission, grading, and performance reports.",
    icon: Layers,
    colorClass: "text-blue-600 bg-blue-50 border-blue-100",
    glowClass: "bg-blue-500/10",
    features: [
      { title: "Batch Attendance Tracker", desc: "Mark student attendance per batch (Present, Absent, Leave) via web or mobile. Auto-calculates attendance percentage." },
      { title: "Homework with File Attachments", desc: "Create homework assignments with PDF/image attachments. Students submit solutions digitally from the mobile app." },
      { title: "Homework Grading & Scores", desc: "Record individual scores per student or bulk-grade an entire batch. Send instant WhatsApp reminders for pending submissions." },
      { title: "Attendance Reports & Export", desc: "Generate batch-wise attendance reports filterable by date range. Export to Excel for record-keeping." },
      { title: "Performance Reports", desc: "Homework and exam performance reports per student — exportable to Excel. View subject-wise and batch-wise analytics." }
    ]
  },
  {
    id: "hr",
    title: "Staff HR & Payroll",
    desc: "End-to-end management of institute employees, attendance logs, and payroll processing.",
    icon: Briefcase,
    colorClass: "text-amber-600 bg-amber-50 border-amber-100",
    glowClass: "bg-amber-500/10",
    features: [
      { title: "Staff Directory & Departments", desc: "Maintain centralized profiles for staff, receptionists, and admins. Assign department roles and access levels." },
      { title: "Staff Attendance Tracker", desc: "Monitor daily check-in/check-out logs. Calculate precise work hours for payroll computation." },
      { title: "Automated Salary Processing", desc: "Build monthly salary sheets, apply bonuses or deductions, and track payout statuses with one click." },
      { title: "PDF Salary Slip Export", desc: "Generate and download pay slips with full itemized breakdown for every staff member." },
      { title: "Expense Tracking & Categories", desc: "Category-wise expense management with monthly analysis charts, dashboard summary, and profitability stats." }
    ]
  },
  {
    id: "comms",
    title: "Notifications & Communication",
    desc: "3-channel communication via in-app alerts, Firebase FCM push, and WhatsApp Cloud API.",
    icon: MessageSquare,
    colorClass: "text-teal-600 bg-teal-50 border-teal-100",
    glowClass: "bg-teal-500/10",
    features: [
      { title: "WhatsApp Business Cloud API", desc: "Send fee reminders, homework alerts, OTP, and announcements via official Meta WhatsApp Cloud API. Per-institute API configuration." },
      { title: "Firebase FCM Push Notifications", desc: "Deliver background push notifications to Android and iOS devices even when the app is closed." },
      { title: "In-App Notification Center", desc: "Real-time alerts stored in database with read/unread tracking. Students and parents see them inside the mobile app." },
      { title: "Targeted Broadcast System", desc: "Send notifications to specific students, a batch, all parents, all students, or everyone at once. Includes attachment support." },
      { title: "Notification History & Stats", desc: "View full notification logs with recipient delivery stats and read-rate tracking per message." }
    ]
  },
  {
    id: "crm",
    title: "CRM, Leads & Subscription",
    desc: "Leads pipeline, enrollment conversion, Razorpay subscriptions, and multi-tenant access.",
    icon: Target,
    colorClass: "text-rose-600 bg-rose-50 border-rose-100",
    glowClass: "bg-rose-500/10",
    features: [
      { title: "Leads CRM Pipeline", desc: "Log walk-ins, inquiries, and online leads. Track pipeline stages (Cold → Warm → Hot → Enrolled) with notes and follow-up history." },
      { title: "Enrollment Conversion Engine", desc: "Convert confirmed leads into enrolled students with automatic batch allocation and account creation." },
      { title: "Razorpay Subscription Plans", desc: "Manage plan tiers (Monthly Flex, Half-Year Pro, Annual Elite, Free Trial). Integrate Razorpay for payment verification." },
      { title: "30-Day Free Trial Auto-Setup", desc: "Every new institute gets an automatic Free Plan on registration — no credit card required. Go live within 24 hours." },
      { title: "Multi-Tenant Sanctum Auth", desc: "Three separate auth guards for Institute Admin, Student, and Parent. Token-based access with 1-hour access tokens and 24-hour refresh tokens." }
    ]
  }
];

export default function FeaturesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120; // accounts for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-x-clip">
      {/* Global Tech Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none -z-20"></div>

      {/* Hero Glowing Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-primary/10 to-transparent blur-[120px] pointer-events-none -z-10"></div>

      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      {/* Mobile Sticky Swiper Navigation */}
      <div className="lg:hidden sticky top-[72px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 overflow-x-auto flex gap-2 px-4 scrollbar-none">
        {categoriesData.map((category, idx) => {
          const Icon = category.icon;
          const isActive = activeSection === idx;
          return (
            <button
              key={idx}
              onClick={() => scrollToSection(category.title)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 transition-all border ${
                isActive
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                  : "bg-slate-50 text-slate-600 border-slate-100"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {category.title.split(" ")[0]}
            </button>
          );
        })}
      </div>

      <main className="pt-24 pb-12">
        {/* Features Hero */}
        <section className="section-container text-center mb-16 relative px-4">
          <motion.span
            initial={{ letterSpacing: "0.15em", opacity: 0 }}
            animate={{ letterSpacing: "0.3em", opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block rounded-full bg-primary/5 px-4 py-1 text-xs font-bold text-primary uppercase tracking-[0.3em] border border-primary/10 mb-4"
          >
            Platform Capabilities
          </motion.span>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-navy tracking-tight mb-4 leading-tight">
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                Everything you need to
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-primary italic font-black"
              >
                Scale
              </motion.span>
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block ml-3"
              >
                your Institute.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed"
          >
            Explore the deep architectural features of Tuoora ERP.
            Designed for high-density management and seamless parent engagement.
          </motion.p>
        </section>

        {/* Split Screen Scroll Spy Bento Layout */}
        <section className="section-container px-4 mb-28">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* LEFT Sticky Sidebar Navigation */}
            <div className="hidden lg:block lg:col-span-4 sticky top-32 self-start pl-4">
              <div className="relative pl-8">
                {/* Laser Connector Path */}
                <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-slate-100">
                  <motion.div
                    className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary to-orange-500 rounded-full"
                    style={{
                      height: `${((activeSection + 1) / categoriesData.length) * 100}%`,
                      boxShadow: "0 0 10px rgba(255,107,38,0.5)"
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  />
                </div>

                {/* Nav list */}
                <div className="space-y-6">
                  {categoriesData.map((category, idx) => {
                    const Icon = category.icon;
                    const isActive = activeSection === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => scrollToSection(category.title)}
                        className="relative flex items-center gap-5 w-full text-left focus:outline-none group"
                      >
                        {/* Interactive Bullet Dot */}
                        <div className={`absolute left-[-42px] w-5 h-5 rounded-full border-2 flex items-center justify-center bg-white transition-all duration-300 ${
                          isActive
                            ? "border-primary scale-110 shadow-[0_0_8px_rgba(255,107,38,0.4)]"
                            : "border-slate-200 group-hover:border-slate-400"
                        }`}>
                          {isActive && <div className="w-2 h-2 rounded-full bg-primary" />}
                        </div>

                        {/* Card menu item */}
                        <div className={`p-4 rounded-2xl border w-full transition-all duration-300 flex items-center gap-4 bg-white ${
                          isActive
                            ? "border-primary/20 shadow-[0_15px_30px_rgba(255,107,38,0.04)]"
                            : "border-slate-100 group-hover:border-slate-200 group-hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.02)]"
                        }`}>
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${category.colorClass}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className={`text-xs font-black uppercase tracking-wider transition-colors ${
                              isActive ? "text-primary" : "text-navy group-hover:text-slate-800"
                            }`}>
                              {category.title}
                            </h4>
                            <p className="text-[10px] text-slate-400 font-light mt-0.5 line-clamp-1">
                              {category.desc}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT Scrollable Bento Showcase sections */}
            <div className="lg:col-span-8 space-y-24">
              {categoriesData.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    id={category.title}
                    onViewportEnter={() => setActiveSection(idx)}
                    viewport={{ amount: 0.25 }}
                    className="scroll-mt-36"
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border shadow-sm ${category.colorClass}`}>
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                      <div>
                        <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em]">Section 0{idx + 1}</span>
                        <h2 className="text-2xl font-black text-navy tracking-tight">{category.title}</h2>
                        <p className="text-xs text-slate-400 font-medium leading-relaxed mt-1">{category.desc}</p>
                      </div>
                    </div>

                    {/* Bento Grid Features Layout */}
                    <div className="grid gap-6 md:grid-cols-2 items-stretch" style={{ perspective: "1000px" }}>
                      {category.features.map((feature, featIdx) => {
                        const isFullWidth = featIdx === 0 || featIdx === 4;
                        return (
                          <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                            whileHover={{
                              y: -6,
                              rotateX: 2,
                              rotateY: -2,
                              borderColor: "rgba(255,107,38,0.2)",
                              boxShadow: "0 20px 40px rgba(255,107,38,0.03)"
                            }}
                            className={`relative p-6 rounded-3xl bg-[#FCFCFD]/60 border border-slate-200/50 backdrop-blur-sm transition-all duration-300 group flex flex-col justify-between overflow-hidden ${
                              isFullWidth ? "md:col-span-2" : "md:col-span-1"
                            }`}
                          >
                            {/* Inner ambient glow */}
                            <div className={`absolute -right-10 -bottom-10 h-28 w-28 rounded-full blur-3xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-40 ${category.glowClass}`}></div>
                            
                            <div>
                              <div className="flex items-start gap-4 mb-4">
                                <div className="h-6 w-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0 mt-0.5 group-hover:border-primary/30 group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300">
                                  <Check className="w-3 h-3 stroke-[3]" />
                                </div>
                                <div>
                                  <h4 className="text-xs font-black text-slate-800 uppercase tracking-wide group-hover:text-navy transition-colors">{feature.title}</h4>
                                  <p className="text-[11px] text-slate-400 font-normal leading-relaxed mt-1.5">{feature.desc}</p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        <PowerSection />

        {/* Unique Animated CTA */}
        <section className="section-container pb-2 pt-4 px-4">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy p-8 lg:p-12 text-center">
            {/* Animated Background Elements */}
            <div className="absolute -top-24 -left-24 h-64 w-64 bg-primary/20 rounded-full blur-[80px] animate-pulse"></div>
            <div className="absolute -bottom-24 -right-24 h-64 w-64 bg-primary/10 rounded-full blur-[80px] animate-pulse-delayed"></div>

            {/* Floating Particles (SVG) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg className="h-full w-full" viewBox="0 0 800 400">
                <circle cx="10%" cy="20%" r="2" fill="white" className="animate-float" />
                <circle cx="85%" cy="30%" r="1" fill="white" className="animate-float-delayed" />
                <circle cx="50%" cy="80%" r="3" fill="#FF6B00" className="animate-float" />
              </svg>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-2 block">Ready to start?</span>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                Experience the Future of <br />
                <span className="bg-gradient-to-r from-primary to-orange-300 bg-clip-text text-transparent italic font-black">Institutional Management</span>
              </h2>

              <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="group relative px-10 py-3.5 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-2xl shadow-primary/40 hover:scale-105 transition-all overflow-hidden"
                >
                  <span className="relative z-10">Request Free Demo</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-xl border-4 border-primary/50 animate-ping opacity-20"></div>
                </button>

                <Link 
                  href="/contact"
                  className="px-9 py-3.5 bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  Chat with Expert
                </Link>
              </div>

              <p className="mt-5 text-xs text-white/40 font-medium tracking-wide">
                Join 500+ Institutes Growing with Tuoora ERP. No Credit Card Required.
              </p>
            </div>

            <style jsx>{`
                 @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(-20px) translateX(10px); }
                 }
                 @keyframes float-delayed {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(20px) translateX(-15px); }
                 }
                 .animate-float { animation: float 8s ease-in-out infinite; }
                 .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
                 .animate-pulse-delayed { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 2s; }
              `}</style>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

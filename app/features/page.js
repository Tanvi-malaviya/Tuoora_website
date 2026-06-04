'use client'
import { useState } from 'react';
import Link from "next/link";
import { GraduationCap, Wallet, Layers, Briefcase, MessageSquare, Target, Check } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PowerSection from "@/components/PowerSection";

const categoriesData = [
  {
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
      { title: "Daily Updates & Class Diary", desc: "Post class topics, notes, and updates to specific batches or all students. Parents and students see them instantly in the app." },
    ]
  },
  {
    title: "Fee Collection & Financial Suite",
    desc: "Automated billing cycles, UPI payments, GST invoicing, and granular expense ledgers.",
    icon: Wallet,
    colorClass: "text-emerald-600 bg-emerald-50 border-emerald-100",
    glowClass: "bg-emerald-500/10",
    features: [
      { title: "UPI & QR Code Payments", desc: "Institute uploads UPI ID and QR code once. Students pay directly via GPay/PhonePe deep link or QR scan from the mobile app." },
      { title: "Structured Fee Cycle Engine", desc: "Configure monthly, term-based, or yearly fee schedules. Set automated discount rules, sibling discounts, and scholarship deductions." },
      { title: "Partial Payment & Installments", desc: "Enable flexible split-payment schedules. Track partial payments, outstanding balances, and automated balance checks." },
      { title: "GST Invoicing & PDF Receipts", desc: "Auto-generate GST-compliant invoices and downloadable PDF receipts after every payment. Supports Tally integration for accounting." },
      { title: "WhatsApp Fee Reminders", desc: "Automated WhatsApp, SMS, and push notification reminders sent before and on due dates via WhatsApp Business Cloud API." },
    ]
  },
  {
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
      { title: "Performance Reports", desc: "Homework and exam performance reports per student — exportable to Excel. View subject-wise and batch-wise analytics." },
    ]
  },
  {
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
      { title: "Expense Tracking & Categories", desc: "Category-wise expense management with monthly analysis charts, dashboard summary, and profitability stats." },
    ]
  },
  {
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
      { title: "Notification History & Stats", desc: "View full notification logs with recipient delivery stats and read-rate tracking per message." },
    ]
  },
  {
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
      { title: "Multi-Tenant Sanctum Auth", desc: "Three separate auth guards for Institute Admin, Student, and Parent. Token-based access with 1-hour access tokens and 24-hour refresh tokens." },
    ]
  }
];


export default function FeaturesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Global Tech Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none -z-20"></div>

      {/* Hero Glowing Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-primary/10 to-transparent blur-[120px] pointer-events-none -z-10"></div>

      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <main className="pt-24 pb-12">
        {/* Features Hero */}
        <section className="section-container text-center mb-4 relative">
          <div className="inline-block rounded-full bg-primary/5 px-4 py-1 text-xs font-bold text-primary uppercase tracking-[0.3em] border border-primary/10 ">
            Platform Capabilities
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-navy tracking-tight mb-2 leading-tight">
            Everything you need to <br />
            <span className="text-primary italic font-black">Scale</span> your Institute.
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Explore the deep architectural features of Tuoora ERP and FeeEasy App.
            Designed for high-density management and seamless parent engagement.
          </p>
        </section>

        {/* Categories Grid */}
        <section className="section-container px-4">
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {categoriesData.map((category, idx) => (
              <FeatureCategory
                key={idx}
                title={category.title}
                desc={category.desc}
                icon={category.icon}
                colorClass={category.colorClass}
                glowClass={category.glowClass}
                features={category.features}
              />
            ))}
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

function FeatureCategory({ title, desc, icon: Icon, colorClass, glowClass, features }) {
  return (
    <div className="relative p-8 rounded-3xl bg-white border border-slate-200/60   transition-all duration-300 group flex flex-col justify-between">
      {/* Glow Effect */}
      {/* <div className={`absolute -right-10 -bottom-10 h-32 w-32 rounded-full blur-3xl pointer-events-none transition-opacity duration-300 opacity-30 group-hover:opacity-80 ${glowClass}`}></div> */}
      
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border shadow-sm group-hover:scale-105 transition-transform duration-300 ${colorClass}`}>
            <Icon className="w-5 h-5 stroke-[2]" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-navy tracking-tight">{title}</h3>
            <p className="text-[11px] text-slate-400 font-medium leading-none mt-1">{desc}</p>
          </div>
        </div>

        <div className="h-px bg-slate-100 w-full mb-6" />

        <ul className="space-y-4 mb-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="h-5 w-5 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 shrink-0 mt-0.5 group-hover:border-primary/30 group-hover:text-primary transition-colors duration-300">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-800 leading-snug">{feature.title}</h4>
                <p className="text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5">{feature.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

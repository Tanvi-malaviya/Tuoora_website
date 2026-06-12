'use client';
import { useState } from 'react';
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function WhyTuoora() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modules = [
    { icon: "🎓", title: "Student Management", desc: "Complete student database with ID card generation, batch assignment, birthday tracking, and bulk enrollment." },
    { icon: "💰", title: "Fees & Payments", desc: "UPI, QR code, multi-gateway support. GST invoicing, PDF receipts, partial payments, and automated WhatsApp reminders." },
    { icon: "📋", title: "Attendance Tracking", desc: "Batch-wise daily attendance via app or web. Automated reports with percentage calculation." },
    { icon: "📚", title: "Homeworks ", desc: "Assign homework with file attachments, receive submissions, grade them, and send WhatsApp reminders to students." },
    { icon: "👥", title: "Staff Management", desc: "Staff CRUD with department roles, salary processing, attendance tracking, and printable salary slips." },
    { icon: "📣", title: "Notifications", desc: "In-app, FCM push, and WhatsApp Business API — send to students, parents, or everyone at once." },
    { icon: "📊", title: "Reports & Analytics", desc: "Fee reports, attendance reports, performance reports — all exportable to Excel. Dashboard summary cards." },
   //  { icon: "🏢", title: "Multi-Branch CRM", desc: "Manage leads, track follow-ups, add notes, and convert prospects to students. Full CRM pipeline." },
    { icon: "💸", title: "Expenses Tracker", desc: "Category-wise expense management with monthly analysis charts and dashboard summary." },
    { icon: "📝", title: "Daily Updates", desc: "Post class topics, notes, and homework to specific batches or all students — with attachment support." },
    { icon: "🔔", title: "Subscription System", desc: "Plan management with Razorpay integration, renewal requests, screenshot uploads, and trial plans." },
    { icon: "📱", title: "Mobile App (Tuoora)", desc: "Android & iOS apps for students, parents, and admins — fee payment, homework, attendance, notifications." },
  ];

  const userTypes = [
    {
      role: "Institute Admin",
      desc: "Full web dashboard access. Manage students, fees, staff, reports, and all settings.",
      features: ["Student & Batch CRUD", "Fee entry & receipts", "Staff payroll", "WhatsApp & push notifications", "Analytics & Excel exports"],
      color: "bg-navy text-white",
      badge: "bg-primary text-white",
    },
    {
      role: "Student",
      desc: "Mobile app access to fee records, attendance, homework, and institute updates.",
      features: ["View & download receipts", "Attendance % tracker", "Submit homework", "UPI fee payment", "Real-time notifications"],
      color: "bg-white text-navy border border-gray-100",
      badge: "bg-navy text-white",
    },
    {
      role: "Parent",
      desc: "Monitor children's fees, attendance, homework status, and receive instant alerts.",
      features: ["Children fee overview", "Record payment", "Attendance history", "Daily class updates", "Push notifications"],
      color: "bg-white text-navy border border-gray-100",
      badge: "bg-gray-800 text-white",
    },
  ];

  const techStack = [
    { label: "Backend", value: "Laravel 11 (PHP)" },
    { label: "Database", value: "MySQL" },
    { label: "Auth", value: "Laravel Sanctum" },
    { label: "Push", value: "Firebase FCM" },
    { label: "WhatsApp", value: "WhatsApp Cloud API" },
   //  { label: "Payments", value: "Razorpay + UPI" },
    { label: "Storage", value: "Local + Symlink" },
    { label: "Email", value: "Laravel Mail SMTP" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <main className="pt-24 pb-8">

        {/* Hero */}
        <section className="section-container text-center mb-10 relative pt-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[250px] bg-primary/5 blur-[100px] -z-10 rounded-full"></div>
          <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] block mb-3">Why Choose Tuoora</span>
          <h1 className="text-3xl lg:text-5xl font-bold text-navy tracking-tighter leading-tight mb-4">
            One Platform. Every Module. <br />
            <span className="text-primary italic">Built for Real Institutes.</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-xs font-light leading-relaxed">
            Tuoora is not a generic ERP. It's a purpose-built SaaS platform for coaching institutes and schools — 
            with fee automation, WhatsApp alerts, mobile apps, and 24-hour data migration support.
          </p>
        </section>

        {/* Core Modules Grid */}
        <section className="section-container mb-12">
          <div className="text-center mb-8">
            <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] block mb-2">What's Inside</span>
            <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight">12 Modules. One Dashboard.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {modules.map((mod, i) => (
              <div key={i} className="group p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute -bottom-2 -right-2 h-12 w-12 bg-primary/5 rounded-full group-hover:scale-[6] transition-transform duration-700"></div>
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">{mod.icon}</div>
                <h3 className="text-sm font-black text-navy mb-1 tracking-tight">{mod.title}</h3>
                <p className="text-[10px] text-gray-400 leading-relaxed font-medium">{mod.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3 User Types */}
        <section className="section-container mb-12">
          <div className="text-center mb-8">
            <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] block mb-2">Multi-Role Platform</span>
            <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight">Designed for 3 Types of Users</h2>
            <p className="text-gray-400 text-xs mt-2 max-w-xl mx-auto">Each role gets a dedicated login, separate API endpoints, and a tailored interface — with Sanctum token authentication.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {userTypes.map((u, i) => (
              <div key={i} className={`p-7 rounded-2xl shadow-sm ${u.color} relative overflow-hidden group`}>
                <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${u.badge} inline-block mb-4`}>{u.role}</span>
                <p className="text-[11px] leading-relaxed mb-5 opacity-70">{u.desc}</p>
                <ul className="space-y-2">
                  {u.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-[10px] font-bold opacity-80">
                      <span className="h-1 w-1 rounded-full bg-primary shrink-0"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* UPI Payment System */}
        <section className="bg-[#FDFDFD] border-y border-gray-100 py-12 mb-12">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] block mb-3">UPI Fee Collection</span>
                <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-4 leading-tight">
                  Students pay fees <br />
                  <span className="text-primary italic">directly from the app.</span>
                </h2>
                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  Institute admin uploads their UPI ID and QR code once. Students and parents see a live payment screen 
                  with one-tap GPay/PhonePe deep link, scannable QR, and UPI ID copy option.
                </p>
                <div className="space-y-3">
                  {[
                    "Admin sets UPI ID + QR from Profile → Payment Settings",
                    "Student app fetches live UPI details via API",
                    "One-tap opens GPay / PhonePe / any UPI app",
                    "Payment recorded + receipt auto-generated",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/10 text-primary text-[9px] font-black flex items-center justify-center shrink-0 mt-0.5">{i + 1}</div>
                      <span className="text-xs font-medium text-gray-600">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "UPI Deep Link", desc: "Opens GPay/PhonePe instantly with pre-filled amount", icon: "📲" },
                  { label: "QR Code Scan", desc: "Students scan institute QR from any app", icon: "📷" },
                  { label: "PDF Receipt", desc: "Auto-generated and downloadable after payment", icon: "🧾" },
                  { label: "WhatsApp Alert", desc: "Fee reminder sent via WhatsApp Business API", icon: "💬" },
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h4 className="text-xs font-black text-navy mb-1">{item.label}</h4>
                    <p className="text-[10px] text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Notification System */}
        <section className="section-container mb-12">
          <div className="text-center mb-8">
            <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] block mb-2">Communication</span>
            <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight">3-Channel Notification System</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: "📱", title: "In-App Notifications", desc: "Real-time alerts inside the student and parent mobile app. Stored in database with read/unread tracking.", tag: "Always Free" },
              { icon: "🔔", title: "FCM Push Notifications", desc: "Firebase Cloud Messaging delivers background push notifications even when the app is closed.", tag: "Background Alerts" },
              { icon: "💬", title: "WhatsApp Business API", desc: "Send fee reminders, homework alerts, and announcements via WhatsApp Cloud API. Per-institute configuration.", tag: "Highest Open Rate" },
            ].map((n, i) => (
              <div key={i} className="p-7 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group overflow-hidden relative">
                <div className="absolute -bottom-2 -right-2 h-12 w-12 bg-primary/5 rounded-full group-hover:scale-[6] transition-transform duration-700"></div>
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">{n.icon}</div>
                <span className="text-[7px] font-black uppercase tracking-widest bg-primary/10 text-primary px-2 py-0.5 rounded-full block w-fit mb-3">{n.tag}</span>
                <h3 className="text-sm font-black text-navy mb-2">{n.title}</h3>
                <p className="text-[10px] text-gray-400 leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ROI + Stats Banner */}
        <section className="bg-navy py-12 overflow-hidden relative mb-12">
          <div className="absolute -top-20 -right-20 h-64 w-64 bg-primary/20 rounded-full blur-[80px]"></div>
          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] block mb-3">Real Impact</span>
                <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6 tracking-tight leading-tight">
                  Turning manual work into <br />
                  <span className="text-primary italic">automated efficiency.</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { stat: "80%", label: "Time Saved", note: "WhatsApp + push automation replaces manual calling" },
                    { stat: "24hrs", label: "Data Migration", note: "Full student/fee records moved by our team for free" },
                    { stat: "3 Apps", label: "One Platform", note: "Admin web + Student mobile + Parent mobile" },
                    { stat: "AES-256", label: "Encryption", note: "Bank-grade security with daily automated backups" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="min-w-fit h-10 px-2 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary font-black text-xs whitespace-nowrap">{item.stat}</div>
                      <div>
                        <h4 className="text-white font-bold text-[10px] mb-1 uppercase tracking-wider">{item.label}</h4>
                        <p className="text-white/40 text-[9px] leading-relaxed">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-[1.5rem] bg-white/5 border border-white/10 backdrop-blur-xl">
                <div className="text-center mb-6">
                  <div className="text-3xl font-black text-white mb-1">500+</div>
                  <div className="text-[9px] font-black text-primary uppercase tracking-[0.2em]">Institutes Onboard</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { val: "100k+", label: "Active Students" },
                    { val: "24/7", label: "Live Support" },
                    { val: "30 Days", label: "Free Trial" },
                    { val: "12+", label: "Core Modules" },
                  ].map((s, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                      <div className="text-white font-bold text-base mb-1">{s.val}</div>
                      <div className="text-[7px] text-white/40 uppercase font-black tracking-widest">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="section-container mb-12">
          <div className="text-center mb-8">
            <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] block mb-2">Under the Hood</span>
            <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight">Enterprise-Grade Tech Stack</h2>
            <p className="text-gray-400 text-xs mt-2 max-w-xl mx-auto">Every layer is built for reliability, speed, and security. No shortcuts taken.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((t, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-primary/30 hover:shadow-lg transition-all text-center group">
                <p className="text-[8px] font-black text-primary uppercase tracking-widest mb-2 group-hover:tracking-[0.2em] transition-all">{t.label}</p>
                <p className="text-xs font-bold text-navy">{t.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3-Step Onboarding */}
        <section className="section-container mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] block mb-2">Getting Started</span>
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight">Go Live in 3 Steps</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-0 border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
              {[
                { num: "01", title: "Register & Trial", desc: "Sign up and get instant access to a 30-day Free Plan. No credit card required." },
                { num: "02", title: "Data Migration", desc: "Our team imports your student, fee, and batch records within 24 hours — completely free." },
                { num: "03", title: "Go Live", desc: "Activate student/parent app logins, set up WhatsApp alerts, and start collecting fees digitally." },
              ].map((step, i) => (
                <div key={i} className={`p-8 relative group ${i === 1 ? 'bg-gray-50' : 'bg-white'} ${i < 2 ? 'border-r border-gray-100' : ''}`}>
                  <div className="text-primary font-black text-4xl opacity-10 absolute top-4 right-4">{step.num}</div>
                  <h4 className="text-sm font-black text-navy uppercase mb-3">{step.title}</h4>
                  <p className="text-[10px] text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-container pb-6 pt-4">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy p-8 lg:p-10 text-center">
            <div className="absolute -top-24 -left-24 h-64 w-64 bg-primary/20 rounded-full blur-[80px] animate-pulse"></div>
            <div className="absolute -bottom-24 -right-24 h-64 w-64 bg-primary/10 rounded-full blur-[80px] animate-pulse"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] mb-1 block">Ready to Switch?</span>
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-3 tracking-tighter leading-tight">
                Start your 30-day Free Trial. <br />
                <span className="bg-gradient-to-r from-primary to-orange-300 bg-clip-text text-transparent italic">No credit card. No commitment.</span>
              </h2>
              <p className="text-white/40 text-xs mb-6 max-w-lg mx-auto">Our team handles your entire data migration within 24 hours — student records, fees, and batch history — for free.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative px-10 py-3.5 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-2xl shadow-primary/40 hover:scale-105 transition-all overflow-hidden"
                >
                  <span className="relative z-10">Request Free Demo</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
                <Link
                  href="/contact"
                  className="px-9 py-3.5 bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  Chat with Expert
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

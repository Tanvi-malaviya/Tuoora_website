'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function ModulesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allModules = [
    {
      id: "students",
      icon: <UsersIcon />,
      title: "Student Management",
      badge: "Core",
      desc: "Complete student lifecycle from enrollment to ID card generation.",
      features: [
        "Student registry with photo & enrollment ID",
        "Auto-generated 6-digit institute code",
        
        "Batch assignment & multi-batch support",
        "Birthday tracker on admin dashboard",
        "Student profile photo upload",
      
        "Excel export of student list",
      ]
    },
    {
      id: "fees",
      icon: <FinanceIcon />,
      title: "Fee Collection & Payments",
      badge: "Financial",
      desc: "UPI, QR code, and GST-compliant fee management for institutes.",
      features: [
        "UPI ID & QR code payment setup",
       
        "Monthly, term & yearly fee schedules",
        "Partial payments & installment tracking",
        "GST-compliant invoicing",
        "PDF receipt auto-generation (DOMPDF)",
        "Outstanding balance dashboard",
        "Tally-compatible financial exports",
      ]
    },
    {
      id: "attendance",
      icon: <AttendanceIcon />,
      title: "Attendance Tracking",
      badge: "Academic",
      desc: "Batch-wise daily attendance with automated percentage calculation.",
      features: [
        "Mark Present / Absent  per batch",
        "Mark from web dashboard or mobile app",
        "Auto attendance percentage calculation",
        "Date-range filter for records",
        "WhatsApp alert on absence",
        "Batch-wise attendance report",
        "Export attendance to Excel",
        
      ]
    },
    {
      id: "homework",
      icon: <NotebookIcon />,
      title: "Homework Managment",
      badge: "Academic",
      desc: "Assign, receive, grade, and remind — complete homework lifecycle.",
      features: [
        "Create homework with PDF/image attachment",
        "Students submit solutions via mobile app",
        "Individual score entry per student",
        "Bulk batch grading support",
        "WhatsApp reminder to pending students",
        "Homework submission history",
        "Performance report per student",
        "Export grades to Excel",
      ]
    },
    {
      id: "staff",
      icon: <StaffIcon />,
      title: "Staff HR & Payroll",
      badge: "HR",
      desc: "End-to-end HR management with payroll, attendance, and salary slips.",
      features: [
        "Staff directory with department roles",
        "Custom staff access levels",
        "Daily check-in / check-out logs",
        "Work hour calculation for payroll",
        "Monthly salary sheet generation",
        "Bonus & deduction management",
        "PDF salary slip export",
        "Staff Excel export",
      ]
    },
    {
      id: "notifications",
      icon: <WhatsappIcon />,
      title: "Notifications & Alerts",
      badge: "Communication",
      desc: "3-channel communication: In-App, FCM Push, and WhatsApp Cloud API.",
      features: [
        "WhatsApp Business Cloud API integration",
        "Firebase FCM push to Android & iOS",
        "In-app notification center with read tracking",
        "Send to specific student / batch / all",
        "Notification with file attachments",
        "Fee due & homework reminders",
        "Delivery & read-rate stats",
        "Per-institute WhatsApp API config",
      ]
    },
    {
      id: "reports",
      icon: <ReportsIcon />,
      title: "Reports & Analytics",
      badge: "Analytics",
      desc: "Fee, attendance, and performance reports with Excel export.",
      features: [
        "Fee collection summary dashboard",
        "Paid vs outstanding breakdown",
        "Batch-wise attendance report",
        "Student performance report",
        "Expense analysis charts",
        "Monthly revenue trends",
        "Export all reports to Excel",
        "Dashboard overview cards",
      ]
    },
    {
      id: "expenses",
      icon: <ExpenseIcon />,
      title: "Expense Management",
      badge: "Financial",
      desc: "Category-wise expense tracking with monthly analysis and summary.",
      features: [
        "Create custom expense categories",
        "Record and track all institute expenses",
        "Monthly expense analysis charts",
        "Dashboard expense summary card",
        "Vendor & utility bill categorization",
        "Profitability tracking",
        "Add/edit/delete expense entries",
        "Export expense data",
      ]
    },
    {
      id: "crm",
      icon: <FeedIcon />,
      title: "CRM & Leads Pipeline",
      badge: "CRM",
      desc: "Manage prospective student leads and convert them to enrollments.",
      features: [
        "Log walk-ins, calls & online inquiries",
        "Pipeline stages: Cold → Warm → Hot → Enrolled",
        "Add notes & follow-up history per lead",
        "Lead-to-student conversion",
        "Auto batch allocation on enrollment",
        "Account creation on conversion",
        "Shared team lead visibility",
        "Delete & update lead records",
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <main className="pt-24 pb-8">
        {/* Header */}
        <section className="section-container mb-6">
          <div className="max-w-2xl">
            <div className="inline-block rounded-full bg-primary/5 px-3 py-0.5 text-[8px] font-bold text-primary uppercase tracking-[0.3em] mb-2 border border-primary/10">
              All Modules
            </div>
            <h1 className="text-3xl font-bold text-navy tracking-tighter mb-2">
              Every Tool Your Institute <span className="text-primary italic">Needs.</span>
            </h1>
            <p className="text-xs text-gray-500 font-light leading-relaxed max-w-xl">
              9 production-ready modules covering students, fees, staff HR, attendance, homework, CRM, notifications, expenses, and analytics — all in one dashboard.
            </p>
          </div>
        </section>

        {/* Modules List */}
        <section className="section-container">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {allModules.map((mod) => (
              <div key={mod.id} className="p-5 rounded-[1.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-[2rem] group-hover:bg-primary/10 transition-colors"></div>

                <div className="flex items-start gap-3 mb-3 relative z-10">
                  <div className="h-9 w-9 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                    <div className="w-4 h-4">{mod.icon}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h2 className="text-sm font-black text-navy tracking-tight">{mod.title}</h2>
                      <span className="text-[7px] font-black uppercase tracking-widest bg-primary/10 text-primary px-1.5 py-0.5 rounded-full">{mod.badge}</span>
                    </div>
                    <p className="text-[9px] text-gray-400 font-medium leading-relaxed">{mod.desc}</p>
                  </div>
                </div>

                <div className="h-px bg-gray-50 mb-3" />

                <div className="grid grid-cols-1 gap-1.5">
                  {mod.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0"></div>
                      <span className="text-[10px] font-medium text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section-container mt-10">
          <div className="bg-navy rounded-[2.5rem] p-10 text-white relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] block mb-3">Get Started</span>
                <h2 className="text-2xl lg:text-3xl font-bold mb-3 tracking-tight">
                  Start your 30-day <span className="text-primary italic">free trial.</span>
                </h2>
                <p className="text-sm text-gray-400 font-light max-w-md leading-relaxed">
                  No credit card required. Our team migrates your existing student and fee records within 24 hours — completely free.
                </p>
              </div>
              <div className="flex lg:justify-end gap-4 flex-wrap">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-primary px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-all"
                >
                  Request Free Demo
                </button>
                <Link href="/contact">
                  <button className="bg-white/5 border border-white/10 px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                    Contact Sales
                  </button>
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 h-full w-1/3 bg-primary/5 -skew-x-12 translate-x-1/2"></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


// SVG Icons
const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const StaffIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const FinanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
);
const AttendanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);
const FeedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"/></svg>
);
const ReportsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
);
const ExpenseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
);
const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const NotebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
);

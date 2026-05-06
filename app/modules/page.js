import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ModulesPage() {
  const allModules = [
    {
      id: "students",
      icon: <UsersIcon />,
      title: "Student Management",
      desc: "Comprehensive registry with full academic and personal history tracking.",
      features: ["KYC Digital Admission", "Biometric ID Generation", "Progress Report Cards", "Disciplinary Logs", "Automatic Promotions", "Alumni Database", "Parent/Guardian Linking", "Transfer Certificate (TC) Gen"]
    },
    {
      id: "staff",
      icon: <StaffIcon />,
      title: "Staff & Teacher Hub",
      desc: "Faculty workload management and automated payroll processing system.",
      features: ["Workload Optimization", "Real-time Attendance", "Automated Payroll", "Document Management", "Performance Reviews", "Leave Management", "Staff Directory", "Experience Letters"]
    },
    {
      id: "finance",
      icon: <FinanceIcon />,
      title: "Financial Suite",
      desc: "End-to-end fee collection and institutional expense auditing tool.",
      features: ["Dynamic Fee Structure", "Integrated Payments", "GST Ready Invoicing", "Partial Payments", "Income/Expense Ledger", "Daily Cashbook", "Defaulter Tracking", "Financial Audits"]
    },
    {
      id: "attendance",
      icon: <AttendanceIcon />,
      title: "Smart Attendance",
      desc: "Automated presence tracking for students/staff with instant push alerts.",
      features: ["Batch-wise Marking", "WhatsApp Absence Alerts", "Monthly Percentage", "Staff In/Out Logs", "Late-coming Penalties", "Holiday Calendar", "Attendance Recovery", "Mobile Marking"]
    },
    {
      id: "community",
      icon: <FeedIcon />,
      title: "Community Feed",
      desc: "Modern social ecosystem for engagement and institutional updates.",
      features: ["Image/Video Gallery", "Interactive Polls", "Announcement Hub", "Engagement Metrics", "Privacy Controls", "Branded Mobile Feed", "Event RSVP", "Moderation Tools"]
    },
    {
      id: "reports",
      icon: <ReportsIcon />,
      title: "Reports & Analytics",
      desc: "Data-driven insights to monitor growth and operational health.",
      features: ["Revenue Trend Charts", "Attendance Heatmaps", "Expense Breakdown", "Student Growth Map", "Daily Ops Summary", "Custom Report Builder", "Performance Ranking", "Export to PDF/Excel"]
    },
    {
      id: "expenses",
      icon: <ExpenseIcon />,
      title: "Expense Management",
      desc: "Track every rupee spent with categorized auditing and receipt logs.",
      features: ["Category Spending", "Receipt Scanning", "Monthly Budgeting", "Vendor Management", "Profit/Loss Analysis", "Petty Cash Log", "Audit Trail", "Tax Deductions"]
    },
    {
      id: "whatsapp",
      icon: <WhatsappIcon />,
      title: "Updates & WhatsApp",
      desc: "Automated communication using official Meta Business API channels.",
      features: ["Fee Reminders", "Bulk Event SMS", "Direct Parent Chat", "Brand Verification", "Push Notifications", "Auto-Responses", "Attachment Support", "History Logs"]
    },
    {
      id: "homework",
      icon: <NotebookIcon />,
      title: "Learning Center",
      desc: "Bridge the gap between class and home with digital assignment tools.",
      features: ["Voice/Image Uploads", "Digital Submission Portal", "Online Quizzes & Exams", "Batch Resource Sharing", "Library Management", "Grade Tracking", "Resource History", "Teacher Notes"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar />
      
      <main className="pt-22 pb-8">
        {/* Header */}
        <section className="section-container mb-3">
          <div className="max-w-2xl">
             <div className="inline-block rounded-full bg-primary/5 px-3 py-0.5 text-[8px] font-bold text-primary uppercase tracking-[0.3em] mb-2 border border-primary/10">
              Operational Intelligence
            </div>
            <h1 className="text-3xl font-bold text-navy tracking-tighter mb-1">
              Comprehensive <span className="text-primary">Module</span> Catalog
            </h1>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Every tool you need to run a modern institute, integrated into a single high-performance dashboard.
            </p>
          </div>
        </section>

        {/* Modules List */}
        <section className="section-container">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {allModules.map((mod) => (
              <div key={mod.id} className="p-4 rounded-[1.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-[2rem] group-hover:bg-primary/10 transition-colors"></div>
                
                <div className="flex items-center gap-3 mb-3 relative z-10">
                  <div className="h-8 w-8 rounded-lg bg-surface flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <div className="w-5 h-5">{mod.icon}</div>
                  </div>
                  <h2 className="text-base font-bold text-navy tracking-tight">{mod.title}</h2>
                </div>
                
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4 leading-relaxed">
                  {mod.desc}
                </p>
                
                <div className="grid grid-cols-1 gap-2">
                  {mod.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-1 rounded-md hover:bg-gray-50 transition-colors">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary/40"></div>
                      <span className="text-[11px] font-bold text-navy/80 uppercase tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison CTA */}
        <section className="section-container mt-10">
          <div className="bg-navy rounded-[2.5rem] p-10 text-white relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 tracking-tight">Need a custom module?</h2>
                <p className="text-sm text-gray-400 font-light max-w-md">
                  Tuoora is built on a modular architecture. If your institute has a unique workflow, 
                  our engineering team can build custom solutions tailored for you.
                </p>
              </div>
              <div className="flex lg:justify-end gap-4">
                 <Link href="/contact">
                    <button className="bg-primary px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-primary/20">Contact Sales</button>
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

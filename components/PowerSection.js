'use client';
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const stats = [
  { val: "12+", label: "Core Modules", desc: "Students, Fees, Staff, HR, CRM, Notifications & more" },
  { val: "3", label: "User Roles", desc: "Institute Admin, Student & Parent — each with separate login" },
  { val: "24hrs", label: "Data Migration", desc: "Our team moves your records for free within 24 hours" },
  { val: "AES-256", label: "Encryption", desc: "Bank-grade security with daily automated cloud backups" },
  { val: "500+", label: "Institutes", desc: "Coaching centers, schools, and vocational institutes" },
  { val: "30 Days", label: "Free Trial", desc: "No credit card required. Full access from day one" },
];

const comparison = [
  { feature: "UPI & QR Fee Collection", tuoora: true, generic: false },
  { feature: "WhatsApp Business API Alerts", tuoora: true, generic: false },
  { feature: "Firebase FCM Push Notifications", tuoora: true, generic: false },
  { feature: "Student & Parent Mobile App", tuoora: true, generic: false },
  { feature: "GST Invoicing & PDF Receipts", tuoora: true, generic: true },
  { feature: "Staff Payroll & Salary Slips", tuoora: true, generic: true },
  { feature: "Homework Submission via App", tuoora: true, generic: false },
  { feature: "Free 24-hour Data Migration", tuoora: true, generic: false },
  { feature: "30-Day Free Trial (No Card)", tuoora: true, generic: false },
  { feature: "CRM Leads Pipeline", tuoora: true, generic: false },
];

export default function PowerSection() {
  return (
    <section className="relative py-12 bg-white">
      {/* Stats Grid */}
      <div className="section-container mb-14">
        <div className="text-center mb-8">
          <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] block mb-2">Platform Numbers</span>
          <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight">Built to Scale. Proven to Work.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="text-2xl lg:text-3xl font-black text-navy mb-1 group-hover:text-primary transition-colors">{s.val}</div>
              <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">{s.label}</div>
              <p className="text-[10px] text-gray-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="section-container">
        <div className="text-center mb-8">
          <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] block mb-2">Why Switch?</span>
          <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight">Tuoora vs. Generic ERP</h2>
          <p className="text-gray-400 text-xs mt-2 max-w-lg mx-auto">Most ERPs are built for generic businesses. Tuoora is purpose-built for Indian coaching institutes.</p>
        </div>

        <div className="max-w-3xl mx-auto rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100 px-6 py-4">
            <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Feature</div>
            <div className="text-xs font-black text-primary uppercase tracking-widest text-center">Tuoora</div>
            <div className="text-xs font-black text-gray-400 uppercase tracking-widest text-center">Generic ERP</div>
          </div>

          {/* Rows */}
          {comparison.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 px-6 py-4 items-center border-b border-gray-50 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
            >
              <span className="text-xs font-medium text-slate-700">{row.feature}</span>
              <div className="flex justify-center">
                {row.tuoora
                  ? <CheckCircle2 className="w-5 h-5 text-emerald-500 stroke-[2]" />
                  : <XCircle className="w-5 h-5 text-red-400 stroke-[2]" />
                }
              </div>
              <div className="flex justify-center">
                {row.generic
                  ? <CheckCircle2 className="w-5 h-5 text-emerald-500 stroke-[2]" />
                  : <XCircle className="w-5 h-5 text-red-300 stroke-[1.5]" />
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
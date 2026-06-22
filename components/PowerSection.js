'use client';

import { useEffect, useState, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

function CountUp({ to, from = 0, duration = 2, decimals = 0, suffix = "" }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate: (value) => setCount(value)
      });
      return () => controls.stop();
    }
  }, [isInView, to, from, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const stats = [
  { val: 12, suffix: "+", label: "Core Modules", desc: "Students, Fees, Staff, HR, CRM, Notifications & more" },
  { val: 3, suffix: "", label: "User Roles", desc: "Institute Admin, Student & Parent — each with separate login" },
  { val: 24, suffix: "hrs", label: "Data Migration", desc: "Our team moves your records for free within 24 hours" },
  { val: "AES-256", isStatic: true, label: "Encryption", desc: "Bank-grade security with daily automated cloud backups" },
  { val: 500, suffix: "+", label: "Institutes", desc: "Coaching centers, schools, and vocational institutes" },
  { val: 30, suffix: " Days", label: "Free Trial", desc: "No credit card required. Full access from day one" }
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
  { feature: "CRM Leads Pipeline", tuoora: true, generic: false }
];

export default function PowerSection() {
  return (
    <section className="relative py-20 bg-white">
      {/* Stats Grid */}
      <div className="section-container mb-24">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ letterSpacing: "0.1em", opacity: 0 }}
            whileInView={{ letterSpacing: "0.3em", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[9px] font-black text-primary uppercase tracking-[0.4em] block mb-2"
          >
            Platform Numbers
          </motion.span>
          <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight">
            Built to Scale. Proven to Work.
          </h2>
        </div>

        {/* Staggered grid cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          style={{ perspective: "1000px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30, rotateX: 10 },
                visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 80 } }
              }}
              whileHover={{
                y: -6,
                rotateX: 4,
                rotateY: -4,
                borderColor: "rgba(255,107,38,0.2)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.03)"
              }}
              className="group p-6 rounded-3xl bg-[#FCFCFD] border border-slate-100 transition-all duration-300 text-center flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl lg:text-3xl font-black text-navy mb-1 group-hover:text-primary transition-colors duration-300">
                  {s.isStatic ? (
                    s.val
                  ) : (
                    <CountUp to={s.val} suffix={s.suffix} />
                  )}
                </div>
                <div className="text-[9px] font-black text-primary uppercase tracking-widest mb-3">
                  {s.label}
                </div>
              </div>
              <p className="text-[10px] text-gray-400 font-light leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Comparison Matrix */}
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ letterSpacing: "0.1em", opacity: 0 }}
            whileInView={{ letterSpacing: "0.3em", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[9px] font-black text-primary uppercase tracking-[0.4em] block mb-2"
          >
            Why Switch?
          </motion.span>
          
          <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight">
            Tuoora vs. Generic ERP
          </h2>
          
          <p className="text-gray-400 text-xs mt-2 max-w-lg mx-auto font-light leading-relaxed">
            Most ERPs are built for generic businesses. Tuoora is purpose-built for Indian coaching institutes.
          </p>
        </div>

        {/* Matrix Container */}
        <div className="max-w-4xl mx-auto rounded-[2.5rem] border border-slate-200/60 shadow-xl shadow-slate-100/50 overflow-hidden bg-white">
          
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-slate-50/80 border-b border-slate-100 px-6 py-5 items-center">
            <div className="col-span-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Core Capabilities
            </div>
            <div className="col-span-3 text-[10px] font-black text-primary uppercase tracking-widest text-center">
              Tuoora ERP
            </div>
            <div className="col-span-3 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
              Generic System
            </div>
          </div>

          {/* Table Rows with staggered viewport animations */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05 }
              }
            }}
          >
            {comparison.map((row, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                }}
                whileHover={{ backgroundColor: "rgba(248,250,252,0.6)" }}
                className={`grid grid-cols-12 px-6 py-4.5 items-center border-b border-slate-100 last:border-0 transition-colors duration-200`}
              >
                {/* Feature Name */}
                <div className="col-span-6">
                  <span className="text-xs font-semibold text-slate-700 tracking-tight">
                    {row.feature}
                  </span>
                </div>

                {/* Tuoora Checkmark */}
                <div className="col-span-3 flex justify-center">
                  {row.tuoora ? (
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="h-8 w-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 shadow-sm"
                    >
                      <CheckCircle2 className="w-4.5 h-4.5 stroke-[2.5]" />
                    </motion.div>
                  ) : (
                    <XCircle className="w-5 h-5 text-slate-300 stroke-[1.5]" />
                  )}
                </div>

                {/* Generic Cross */}
                <div className="col-span-3 flex justify-center">
                  {row.generic ? (
                    <div className="h-8 w-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                      <CheckCircle2 className="w-4 h-4 stroke-[2]" />
                    </div>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="h-8 w-8 rounded-full bg-rose-50 border border-rose-100/50 flex items-center justify-center text-rose-400 shadow-sm"
                    >
                      <XCircle className="w-4.5 h-4.5 stroke-[2]" />
                    </motion.div>
                  )}
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
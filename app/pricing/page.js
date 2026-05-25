'use client';
import { useState } from 'react';
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { ShieldCheck, ArrowUpCircle, Headphones } from 'lucide-react';

const faqs = [
  {
    icon: ArrowUpCircle,
    title: "Can I upgrade later?",
    desc: "Yes, you can upgrade your plan at any time. The remaining balance will be adjusted pro-rata.",
  },
  {
    icon: ShieldCheck,
    title: "Is my data secure?",
    desc: "We use AES-256 encryption and provide daily automated backups for all plans.",
  },
  {
    icon: Headphones,
    title: "Support options?",
    desc: "All users get email support. Pro and Enterprise users get dedicated 24/7 call support.",
  },
];

const plans = ["Monthly Flex", "Half-Year Pro", "Annual Elite", "Free Plan"];

const features = [
  {
    category: "Student Management",
    items: [
      { title: "Student Database", values: [true, true, true, true] },
      { title: "Attendance (App/Web)", values: [true, true, true, true] },
      { title: "ID Card Generation", values: [true, true, true, true] },
      { title: "Batch Management", values: ["Unlimited", "Up to 5,000", "Unlimited", "Unlimited"] },
    ],
  },
  {
    category: "Financial Suite",
    items: [
      { title: "Fee Tracking", values: [true, true, true, true] },
      { title: "WhatsApp Reminders", values: [true, true, true, true] },
      { title: "Expense Manager", values: [true, true, true, true] },
      { title: "GST Invoicing", values: [true, true, true, true] },
      { title: "Tally Integration", values: [true, false, true, true] },
    ],
  },
];

export default function Pricing() {
   return (
      <div className="min-h-screen bg-white">
         <Navbar />

         <main className="pt-22 pb-8">
            {/* Simple Hero */}
            <section className="section-container text-center mb-4 px-4">
               <span className="text-[9px] font-black pt-2 text-primary uppercase tracking-[0.4em] mb-2 block">Transparent Pricing</span>
               <h1 className="text-3xl lg:text-5xl font-bold text-navy tracking-tighter mb-4">
                  Plans that scale with <br />
                  <span className="text-primary italic">Your Ambition.</span>
               </h1>
               <p className="text-gray-400 text-sm max-w-md mx-auto">
                  Scalable solutions for individual schools to large university networks.
               </p>
            </section>

            {/* Pricing Cards */}
            <section className="section-container px-4 py-5">
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                  <PricingCard
                     title="Monthly Flex"
                     price="2,500"
                     duration="30 DAYS"
                     desc="Flexible monthly billing for dynamic schools."
                     features={["Unlimited Students", "Complete Financial Suite", "WhatsApp Notifications", "Priority Email Support"]}
                     isPopular={false}
                  />
                  <PricingCard
                     title="Half-Year Pro"
                     price="11,000"
                     duration="180 DAYS"
                     desc="Most popular for growing institutes."
                     features={["Up to 5,000 Students", "Advanced Analytics", "Staff Payroll & Expenses", "Priority 24/7 Call Support"]}
                     isPopular={true}
                  />
                  <PricingCard
                     title="Annual Elite"
                     price="17,000"
                     duration="365 DAYS"
                     desc="Premium features for large university networks."
                     features={["Unlimited Students", "Dedicated Account Manager", "Custom Integrations", "SLA Guarantees & API Access"]}
                     isPopular={false}
                  />
                  <PricingCard
                     title="Free Plan"
                     price="0"
                     duration="30 DAYS"
                     desc="Try out Tuoora for 1 month free."
                     features={["Up to 100 Students", "Basic Fee Tracking", "Attendance (App/Web)", "Standard Email Support"]}
                     isPopular={false}
                  />
               </div>
            </section>

          
     

            {/* FAQ Preview - High Density */}
            <section className="section-container pt-2">

      {/* Heading */}
      <div className="text-center mb-5">
        <h3 className="text-2xl font-black text-navy tracking-tight">
          Quick Answers
        </h3>
        <p className="text-gray-400 text-sm mt-1">
          Everything you need to know before getting started
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">

        {faqs.map((faq, i) => {
          const Icon = faq.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition" />

              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <Icon size={20} />
              </div>

              {/* Title */}
              <h4 className="text-sm font-black text-navy uppercase mb-2">
                {faq.title}
              </h4>

              {/* Description */}
              <p className="text-xs text-gray-500 leading-relaxed">
                {faq.desc}
              </p>

              {/* Bottom hover line */}
              <div className="h-[2px] w-0 bg-primary mt-4 transition-all duration-300 group-hover:w-12" />
            </motion.div>
          );
        })}

      </div>
    </section>
            {/* Migration Support Section */}
            <section className="section-container pb-6 pt-4">
               <div className="relative overflow-hidden rounded-[2rem] bg-navy p-8 lg:p-10 text-center">
                  {/* Background Accents */}
                  <div className="absolute -top-24 -right-24 h-64 w-64 bg-primary/10 rounded-full blur-[80px] animate-pulse"></div>

                  <div className="relative z-10 max-w-3xl mx-auto">
                     <span className="text-[11px] font-black text-primary uppercase tracking-[0.4em] mb-1 block">Hassle-Free Transition</span>
                     <h2 className="text-2xl lg:text-4xl font-bold text-white mb-5 tracking-tighter leading-tight">
                        Switching from <span className="text-primary italic">another ERP?</span>
                     </h2>
                     <p className="text-xs text-white/50 mb-8 max-w-lg mx-auto font-light leading-relaxed">
                        Don't let data migration hold you back. Our experts will securely move your
                        entire student, fee, and staff records to Tuoora within 24 hours — for free.
                     </p>
                     <div className="flex justify-center">
                        <Link href="/contact" className="block w-full sm:w-auto">
                           <button className="w-full px-10 py-3.5 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-2xl shadow-primary/40 hover:scale-105 transition-all">
                              Get Free Migration Support
                           </button>
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

function PricingCard({ title, price, duration, desc, features, isPopular }) {
   return (
      <div className={`relative p-6 rounded-2xl transition-all duration-300 border flex flex-col justify-between bg-white ${
         isPopular 
            ? 'border-primary shadow-lg shadow-primary/5 ring-1 ring-primary/20 scale-[1.02] md:scale-105 z-10' 
            : 'border-slate-200/60 hover:border-slate-300 shadow-sm hover:shadow-md'
      }`}>
         {isPopular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
               Recommended
            </div>
         )}

         <div>
            <div className="mb-5">
               <span className={`text-[10px] font-bold uppercase tracking-widest ${isPopular ? 'text-primary' : 'text-slate-400'}`}>
                  {title}
               </span>
               <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{desc}</p>
            </div>

            <div className="mb-6 flex items-baseline gap-1">
               <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  ₹{price}
               </span>
               <span className="text-xs font-semibold text-slate-400">/{duration}</span>
            </div>

            <div className="h-px bg-slate-100 w-full mb-6" />

            <ul className="space-y-3.5 mb-2">
               {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                     <div className="h-4 w-4 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                     </div>
                     <span className="text-xs font-medium text-slate-600 leading-relaxed">{feature}</span>
                  </li>
               ))}
            </ul>
         </div>

         {/* Background Accent */}
         {isPopular && <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>}
      </div>
   );
}

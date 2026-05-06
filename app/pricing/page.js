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

const plans = ["Starter", "Professional", "Enterprise"];

const features = [
  {
    category: "Student Management",
    items: [
      { title: "Student Database", values: [true, true, true] },
      { title: "Attendance (App/Web)", values: [true, true, true] },
      { title: "ID Card Generation", values: [false, true, true] },
      { title: "Batch Management", values: ["Limited", "Unlimited", "Unlimited"] },
    ],
  },
  {
    category: "Financial Suite",
    items: [
      { title: "Fee Tracking", values: [true, true, true] },
      { title: "WhatsApp Reminders", values: [true, true, true] },
      { title: "Expense Manager", values: [false, true, true] },
      { title: "GST Invoicing", values: [false, true, true] },
      { title: "Tally Integration", values: [false, false, true] },
    ],
  },
];

export default function Pricing() {
   const [isYearly, setIsYearly] = useState(true);

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

               {/* Pricing Toggle */}
               <div className="flex items-center justify-center gap-4 mt-3">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${!isYearly ? 'text-navy' : 'text-gray-300'}`}>Monthly</span>
                  <button
                     onClick={() => setIsYearly(!isYearly)}
                     className="w-10 h-5 rounded-full bg-gray-100 p-1 relative transition-colors"
                  >
                     <div className={`absolute top-1 h-3 w-3 rounded-full bg-primary transition-all ${isYearly ? 'right-1' : 'left-1'}`}></div>
                  </button>
                  <div className="flex items-center gap-2">
                     <span className={`text-[10px] font-bold uppercase tracking-widest ${isYearly ? 'text-navy' : 'text-gray-300'}`}>Yearly</span>
                     <span className="bg-green-100 text-green-600 text-[8px] font-black px-2 py-0.5 rounded-full uppercase">Save 20%</span>
                  </div>
               </div>
            </section>

            {/* Pricing Cards */}
            <section className="section-container mb-6 px-4 py-5">
               <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
                  <PricingCard
                     title="Starter"
                     price={isYearly ? "799" : "999"}
                     desc="Perfect for small coaching centers."
                     features={["Up to 100 Students", "Basic Fee Tracking", "Attendance via App", "WhatsApp Alerts"]}
                     isPopular={false}
                  />
                  <PricingCard
                     title="Professional"
                     price={isYearly ? "1999" : "2499"}
                     desc="Most popular for growing institutes."
                     features={["Unlimited Students", "Advanced Financials", "Staff Payroll", "Inventory Logic", "Exam Management"]}
                     isPopular={true}
                  />
                  <PricingCard
                     title="Enterprise"
                     price="Custom"
                     desc="For multi-branch schools & universities."
                     features={["Multi-branch Sync", "White-label Mobile App", "Priority API Access", "Dedicated Server", "On-site Training"]}
                     isPopular={false}
                  />
               </div>
            </section>

            {/* Compare All Features Section */}
      <section className="section-container pt-16 pb-8">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight">
          Compare All Features
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          Pick the plan that fits your institute best
        </p>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-gray-100 shadow-xl">

        {/* Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />

        {/* Header */}
        <div className="grid grid-cols-4 bg-white sticky top-0 z-10">
          <div className="p-5 font-bold text-gray-500 text-xs uppercase tracking-widest">
            Features
          </div>

          {plans.map((plan, i) => (
            <div key={i} className="p-5 text-center relative group">
              
              <div className="text-sm font-bold text-navy">{plan}</div>

              {/* Hover underline animation */}
              <div className="h-[2px] w-0 bg-primary mx-auto mt-2 transition-all duration-300 group-hover:w-10" />
            </div>
          ))}
        </div>

        {/* Body */}
        {features.map((section, idx) => (
          <div key={idx}>

            {/* Category Title */}
            <div className="bg-gray-50/60 px-5 py-3 text-xs font-black uppercase text-gray-400 tracking-wider">
              {section.category}
            </div>

            {/* Rows */}
            {section.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-4 items-center border-t border-gray-100 hover:bg-primary/5 transition"
              >
                {/* Feature Name */}
                <div className="p-5 text-sm font-medium text-gray-700">
                  {item.title}
                </div>

                {/* Values */}
                {item.values.map((val, j) => (
                  <div key={j} className="p-5 text-center">

                    {typeof val === "boolean" ? (
                      val ? (
                        <Check className="mx-auto text-green-500 w-5 h-5" />
                      ) : (
                        <X className="mx-auto text-gray-300 w-5 h-5" />
                      )
                    ) : (
                      <span className="text-xs font-semibold text-gray-500">
                        {val}
                      </span>
                    )}

                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>

            {/* FAQ Preview - High Density */}
            <section className="section-container pt-8 pb-16 border-t border-gray-100">

      {/* Heading */}
      <div className="text-center mb-10">
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

function PricingCard({ title, price, desc, features, isPopular }) {
   return (
      <div className={`relative p-6 rounded-3xl transition-all duration-500 border mx-auto w-full max-w-sm md:max-w-none ${isPopular ? 'bg-navy border-navy  md:scale-105 z-10' : 'bg-white border-gray-100 hover:shadow-xl'}`}>
         {isPopular && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
               Recommended
            </div>
         )}

         <div className="mb-6">
            <h3 className={`text-base font-black uppercase tracking-widest mb-1 ${isPopular ? 'text-primary' : 'text-navy'}`}>{title}</h3>
            <p className={`text-xs font-medium ${isPopular ? 'text-white/40' : 'text-gray-400'}`}>{desc}</p>
         </div>

         <div className="mb-6 flex items-baseline gap-1">
            <span className={`text-4xl font-black ${isPopular ? 'text-white' : 'text-navy'}`}>
               {price === "Custom" ? "" : "₹"}{price}
            </span>
            {price !== "Custom" && <span className={`text-xs font-bold ${isPopular ? 'text-white/40' : 'text-gray-400'}`}>/month</span>}
         </div>

         <ul className="space-y-3 mb-4">
            {features.map((feature, i) => (
               <li key={i} className="flex items-center gap-3">
                  <div className={`h-1 w-1 rounded-full ${isPopular ? 'bg-primary' : 'bg-primary/40'}`}></div>
                  <span className={`text-xs font-medium ${isPopular ? 'text-white/70' : 'text-gray-500'}`}>{feature}</span>
               </li>
            ))}
         </ul>

         <Link href="/contact" className="block w-full">
            <button className={`w-full py-3 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${isPopular ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'bg-gray-50 text-navy hover:bg-primary hover:text-white'}`}>
               {price === "Custom" ? "Contact Us" : "Get Started"}
            </button>
         </Link>

         {/* Background Accent */}
         {isPopular && <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>}
      </div>
   );
}

'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { motion } from 'framer-motion';
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

const defaultPlans = [
   { id: 1, name: "Free Plan", price: "0.00", duration_days: 30 },
   { id: 2, name: "Monthly Flex", price: "2500.00", duration_days: 30 },
   { id: 3, name: "Half-Year Pro", price: "11000.00", duration_days: 180 },
   { id: 4, name: "Annual Elite", price: "17000.00", duration_days: 365 }
];

export default function Pricing() {
   const [plansData, setPlansData] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchPlans = async () => {
         try {
            let apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://tuoora.com';
            if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
               apiBaseUrl = 'http://127.0.0.1:8000';
            }
            const res = await fetch(`${apiBaseUrl}/api/public-plans`);
            if (res.ok) {
               const json = await res.json();
               if (json.status === 'success' && Array.isArray(json.data)) {
                  setPlansData(json.data);
               } else {
                  setPlansData(defaultPlans);
               }
            } else {
               setPlansData(defaultPlans);
            }
         } catch (error) {
            console.error("Failed to fetch plans from backend:", error);
            setPlansData(defaultPlans);
         } finally {
            setLoading(false);
         }
      };
      fetchPlans();
   }, []);

   const activePlansList = plansData.length > 0 ? plansData : defaultPlans;

   return (
      <div className="min-h-screen bg-white overflow-x-hidden">
         <Navbar />

         <main className="pt-32 pb-8">
            {/* Simple Sober Hero */}
            <section className="section-container text-center mb-8 px-4">
               <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-[9px] font-black pt-2 text-primary uppercase tracking-[0.4em] mb-2 block"
               >
                  Transparent Pricing
               </motion.span>

               <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl lg:text-5xl font-bold text-navy tracking-tighter mb-4"
               >
                  Plans that scale with <br />
                  <span className="text-primary italic">Your Ambition.</span>
               </motion.h1>

               <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-400 text-sm max-w-md mx-auto"
               >
                  Scalable solutions for individual schools to large university networks.
               </motion.p>
            </section>

            {/* Pricing Cards Grid with Sober Wave Animations */}
            <section className="section-container px-4 py-5">
               <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                  {loading ? (
                     Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="animate-pulse p-6 rounded-2xl border border-slate-100 bg-slate-50/50 flex flex-col h-40 justify-between">
                           <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                           <div className="h-8 bg-slate-200 rounded w-2/3"></div>
                           <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                        </div>
                     ))
                  ) : (
                     activePlansList.map((plan, i) => (
                        <PricingCard
                           key={plan.id}
                           title={plan.name}
                           price={Math.round(parseFloat(plan.price)).toLocaleString('en-IN')}
                           duration={`${plan.duration_days} DAYS`}
                           isPopular={
                              plan.name.toLowerCase().includes('premium') ||
                              plan.name.toLowerCase().includes('pro') ||
                              plan.name.toLowerCase().includes('elite') ||
                              (activePlansList.length >= 3 && i === 2)
                           }
                           delayIndex={i}
                        />
                     ))
                  )}
               </div>
            </section>

            {/* FAQ Preview - Sober High Density */}
            <section className="section-container pt-8">
               <div className="text-center mb-10">
                  <h3 className="text-2xl font-black text-navy tracking-tight">
                     Frequently Asked Questions
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
                           initial={{ opacity: 0, y: 15 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.08, duration: 0.5 }}
                           className="group relative p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                        >
                           <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                              <Icon size={20} />
                           </div>

                           <h4 className="text-sm font-black text-navy uppercase mb-2">
                              {faq.title}
                           </h4>

                           <p className="text-xs text-gray-500 leading-relaxed font-light">
                              {faq.desc}
                           </p>

                           <div className="h-[2px] w-0 bg-primary mt-4 transition-all duration-300 group-hover:w-12" />
                        </motion.div>
                     );
                  })}
               </div>
            </section>

            {/* Migration Support Section */}
            <section className="section-container pb-6 pt-16">
               <div className="relative overflow-hidden rounded-[2rem] bg-navy p-8 lg:p-10 text-center">
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
                           <button className="w-full px-10 py-3.5 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">
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

function PricingCard({ title, price, duration, isPopular, delayIndex }) {
   const parsedPrice = parseFloat(price.replace(/,/g, ''));
   const parsedDuration = parseInt(duration);
   const dailyCost = parsedPrice > 0 && parsedDuration > 0 ? (parsedPrice / parsedDuration) : 0;

   return (
      <motion.div
         initial={{ opacity: 0, y: 15 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: delayIndex * 0.08
         }}
         whileHover={{
            y: -5,
            scale: 1.015,
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.04), 0 8px 10px -6px rgb(0 0 0 / 0.04)"
         }}
         className={`relative p-6 pt-10 rounded-2xl border flex flex-col justify-between bg-white overflow-visible transition-colors ${isPopular
               ? 'border-primary shadow-md ring-1 ring-primary/20'
               : 'border-slate-200/60 shadow-sm hover:border-slate-300'
            }`}
      >
         <div>
            {isPopular && (
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md z-10">
                  Recommended
               </div>
            )}

            <div className="flex justify-between items-center mb-5">
               <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md block leading-none ${isPopular ? 'bg-primary/15 text-primary' : 'bg-slate-50 text-slate-500 border border-slate-100'}`}>
                  {title}
               </span>

               {dailyCost > 0 && (
                  <span className="text-[8px] font-bold text-slate-400 bg-slate-50 border border-slate-100 rounded-full px-2 py-0.5 uppercase tracking-wider">
                     ₹{dailyCost.toFixed(1)}/day
                  </span>
               )}
            </div>

            <div className="flex items-baseline gap-1">
               <span className="text-3xl font-extrabold text-slate-900 tracking-tight leading-none">
                  ₹{price}
               </span>
               <span className="text-xs font-semibold text-slate-400">/{duration.toLowerCase()}</span>
            </div>
         </div>

         {isPopular && (
            <div className="absolute -bottom-10 -right-10 h-24 w-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
         )}
      </motion.div>
   );
}

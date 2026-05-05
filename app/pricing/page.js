'use client';
import { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Pricing() {
   const [isYearly, setIsYearly] = useState(true);

   return (
      <div className="min-h-screen bg-white">
         <Navbar />

         <main className="pt-14 pb-8">
            {/* Simple Hero */}
            <section className="section-container text-center mb-4 px-4">
               <span className="text-[9px] font-black pt-2 text-primary uppercase tracking-[0.4em] mb-2 block">Transparent Pricing</span>
               <h1 className="text-3xl lg:text-5xl font-bold text-navy tracking-tighter mb-4">
                  Plans that scale with <br />
                  <span className="text-primary italic">Your Ambition.</span>
               </h1>

               {/* Pricing Toggle */}
               <div className="flex items-center justify-center gap-4 mt-6">
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
            <section className="section-container mb-6 px-4 py-6 overflow-hidden">
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
            <section className="section-container mb-16 overflow-hidden">
               <div className="text-center mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">Compare All Features</h2>
               </div>

               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr className="border-b border-gray-100">
                           <th className="py-4 text-xs font-black text-navy uppercase tracking-widest w-1/3">Core Capabilities</th>
                           <th className="py-4 text-xs font-black text-primary uppercase tracking-widest text-center">Starter</th>
                           <th className="py-4 text-xs font-black text-navy uppercase tracking-widest text-center bg-gray-50/50">Professional</th>
                           <th className="py-4 text-xs font-black text-navy uppercase tracking-widest text-center">Enterprise</th>
                        </tr>
                     </thead>
                     <tbody className="text-xs">
                        {/* Category: Management */}
                        <tr className="bg-gray-50/30"><td colSpan="4" className="py-2 px-2 font-black text-navy opacity-40 uppercase tracking-tighter">Student Management</td></tr>
                        <ComparisonRow title="Student Database" starter="✅" pro="✅" enterprise="✅" />
                        <ComparisonRow title="Attendance (App/Web)" starter="✅" pro="✅" enterprise="✅" />
                        <ComparisonRow title="ID Card Generation" starter="—" pro="✅" enterprise="✅" />
                        <ComparisonRow title="Batch Management" starter="Limited" pro="Unlimited" enterprise="Unlimited" />

                        {/* Category: Financials */}
                        <tr className="bg-gray-50/30"><td colSpan="4" className="py-2 px-2 font-black text-navy opacity-40 uppercase tracking-tighter">Financial Suite</td></tr>
                        <ComparisonRow title="Fee Tracking" starter="✅" pro="✅" enterprise="✅" />
                        <ComparisonRow title="WhatsApp Reminders" starter="✅" pro="✅" enterprise="✅" />
                        <ComparisonRow title="Expense Manager" starter="—" pro="✅" enterprise="✅" />
                        <ComparisonRow title="GST Invoicing" starter="—" pro="✅" enterprise="✅" />
                        <ComparisonRow title="Tally Integration" starter="—" pro="—" enterprise="✅" />

                        {/* Category: Mobile & App */}
                        <tr className="bg-gray-50/30"><td colSpan="4" className="py-2 px-2 font-black text-navy opacity-40 uppercase tracking-tighter">Mobile & Interaction</td></tr>
                        <ComparisonRow title="Parent FeeEasy App" starter="✅" pro="✅" enterprise="✅" />
                        <ComparisonRow title="Staff Attendance App" starter="—" pro="✅" enterprise="✅" />
                        <ComparisonRow title="White-Label App" starter="—" pro="—" enterprise="✅" />
                        <ComparisonRow title="Push Notifications" starter="✅" pro="✅" enterprise="✅" />

                        {/* Category: Support */}
                        <tr className="bg-gray-50/30"><td colSpan="4" className="py-2 px-2 font-black text-navy opacity-40 uppercase tracking-tighter">Support & Security</td></tr>
                        <ComparisonRow title="Daily Backups" starter="✅" pro="✅" enterprise="✅" />
                        <ComparisonRow title="Email Support" starter="✅" pro="✅" enterprise="✅" />
                        <ComparisonRow title="24/7 Call Support" starter="—" pro="✅" enterprise="✅" />
                        <ComparisonRow title="Custom API Access" starter="—" pro="—" enterprise="✅" />
                     </tbody>
                  </table>
               </div>
            </section>

            {/* FAQ Preview - High Density */}
            <section className="section-container py-8 border-t border-gray-50">
               <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                     <h4 className="text-sm font-black text-navy uppercase mb-2">Can I upgrade later?</h4>
                     <p className="text-xs text-gray-400 leading-relaxed">Yes, you can upgrade your plan at any time. The remaining balance will be adjusted pro-rata.</p>
                  </div>
                  <div>
                     <h4 className="text-sm font-black text-navy uppercase mb-2">Is my data secure?</h4>
                     <p className="text-xs text-gray-400 leading-relaxed">We use AES-256 encryption and provide daily automated backups for all plans.</p>
                  </div>
                  <div>
                     <h4 className="text-sm font-black text-navy uppercase mb-2">Support options?</h4>
                     <p className="text-xs text-gray-400 leading-relaxed">All users get email support. Pro and Enterprise users get dedicated 24/7 call support.</p>
                  </div>
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
                     <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-10 py-3.5 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-2xl shadow-primary/40 hover:scale-105 transition-all">
                           Get Free Migration Support
                        </button>
                        <button className="px-10 py-3.5 bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm">
                           Talk to an Expert
                        </button>
                     </div>
                  </div>
               </div>
            </section>
         </main>

         <Footer />
      </div>
   );
}

function ComparisonRow({ title, starter, pro, enterprise }) {
   return (
      <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
         <td className="py-3 px-2 text-navy font-bold">{title}</td>
         <td className="py-3 text-center text-gray-500 font-medium">{starter}</td>
         <td className="py-3 text-center text-navy font-black bg-gray-50/30">{pro}</td>
         <td className="py-3 text-center text-gray-500 font-medium">{enterprise}</td>
      </tr>
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

         <button className={`w-full py-3 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${isPopular ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'bg-gray-50 text-navy hover:bg-primary hover:text-white'}`}>
            {price === "Custom" ? "Contact Us" : "Get Started"}
         </button>

         {/* Background Accent */}
         {isPopular && <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>}
      </div>
   );
}

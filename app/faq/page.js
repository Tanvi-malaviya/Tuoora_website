'use client';
import { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function FAQ() {
   const [activeIndex, setActiveIndex] = useState(null);
   const [searchQuery, setSearchQuery] = useState("");
   const [selectedCategory, setSelectedCategory] = useState("All");

   const categories = [
      {
         name: "All",
         icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></svg>
         )
      },
      {
         name: "General",
         icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3" /><path d="M19 21V11" /><path d="M5 21V11" /><path d="M9 21v-4a3 3 0 0 1 6 0v4" /></svg>
         )
      },
      {
         name: "Payments & Fees",
         icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
         )
      },
      {
         name: "Academic & Exams",
         icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /><path d="M8 6h10" /><path d="M8 10h10" /><path d="M8 14h10" /></svg>
         )
      },
      {
         name: "Security & Data",
         icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
         )
      }
   ];

   const faqs = [
      {
         category: "General",
         questions: [
            { q: "What is Tuoora ERP?", a: "Tuoora is a modern, high-density institutional management software designed to automate administration, fee collection, and student tracking for schools and coaching centers." },
            { q: "Do I need technical knowledge to use it?", a: "No. Tuoora is built for simplicity. We provide a zero-training interface that anyone who uses a smartphone can easily navigate." },
            { q: "How long does it take to set up?", a: "Usually within 24 hours. Our migration experts handle your data sync, and your institute can go live almost instantly." },
            { q: "Can I manage multiple branches?", a: "Yes. Tuoora Enterprise supports multi-branch management with a unified dashboard to track performance across all locations." },
            { q: "Does Tuoora work on mobile browsers?", a: "Yes. Our interface is fully responsive, meaning you can access the full admin dashboard from any smartphone or tablet browser." }
         ]
      },
      {
         category: "Payments & Fees",
         questions: [
            { q: "Does it support GST invoicing?", a: "Yes. Tuoora automatically generates GST-compliant invoices and tax reports that can be integrated with Tally or other accounting software." },
            { q: "How do parents pay fees?", a: "Parents can pay via the FeeEasy app using UPI, Credit Cards, Debit Cards, or Net Banking. We support all major Indian payment gateways." },
            { q: "Are automated fee reminders sent?", a: "Absolutely. You can set up automated WhatsApp, SMS, and Push notifications to be sent before and on the due date." },
            { q: "Can I set up custom fee structures?", a: "Yes. You can create complex fee structures including sibling discounts, scholarships, and one-time registration fees." },
            { q: "Is there a penalty calculation for late fees?", a: "Yes. You can define grace periods and automated late fee calculations (fixed or percentage-based) per batch." }
         ]
      },
      {
         category: "Academic & Exams",
         questions: [
            { q: "Can I generate report cards?", a: "Yes. Tuoora supports customizable report card templates that pull data directly from exam results and attendance records." },
            { q: "Does it support automated exam scheduling?", a: "Yes. Our exam module helps you schedule tests, assign rooms, and notify students automatically via the app." },
            { q: "Can staff members upload study material?", a: "Staff members can upload PDFs, videos, and assignments to the student portal for instant access." }
         ]
      },
      {
         category: "Security & Data",
         questions: [
            { q: "Is my institutional data safe?", a: "Yes. We use AES-256 bank-grade encryption. Each institute's data is isolated in a multi-tenant architecture to ensure 100% privacy." },
            { q: "Do you take backups?", a: "We perform automated daily backups to secure cloud servers, ensuring you never lose your records." },
            { q: "Can I export my data at any time?", a: "Yes. You own your data. You can export student lists, financial reports, and academic records to Excel or PDF format whenever you need." }
         ]
      }
   ];

   const filteredFaqs = faqs.map(group => ({
      ...group,
      questions: group.questions.filter(faq => {
         const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.a.toLowerCase().includes(searchQuery.toLowerCase());
         const matchesCategory = selectedCategory === "All" || group.category === selectedCategory;
         return matchesSearch && matchesCategory;
      })
   })).filter(group => group.questions.length > 0);

   return (
      <div className="min-h-screen bg-white">
         <Navbar />

         <main className="pt-24 pb-8">
            {/* Search Hero */}
            <section className="section-container text-center mb-5">
               <span className="text-[10px] font-black pt-4 text-primary uppercase tracking-[0.4em] block">Help Center</span>
               <h1 className="text-3xl lg:text-5xl font-bold text-navy tracking-tighter mb-3">
                  Common <span className="text-primary italic">Questions.</span>
               </h1>
               <div className="max-w-xl mx-auto relative group">
                  <input
                     type="text"
                     placeholder="Search for questions (e.g. GST, Backups)"
                     className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm group-hover:shadow-lg placeholder:text-gray-300"
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                  </div>
               </div>
            </section>

            {/* Category Navigation */}
            <section className="section-container mb-12">
               <div className="flex flex-wrap justify-center gap-3">
                  {categories.map((cat) => (
                     <button
                        key={cat.name}
                        onClick={() => setSelectedCategory(cat.name)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${selectedCategory === cat.name
                              ? 'bg-navy text-white shadow-xl shadow-navy/20 scale-105'
                              : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                           }`}
                     >
                        <span className={`${selectedCategory === cat.name ? 'text-primary' : 'text-gray-300'}`}>{cat.icon}</span>
                        {cat.name}
                     </button>
                  ))}
               </div>
            </section>

            {/* FAQ List */}
            <section className="section-container mb-6">
               <div className="max-w-3xl mx-auto space-y-6">
                  {filteredFaqs.length > 0 ? (
                     filteredFaqs.map((group, groupIdx) => (
                        <div key={groupIdx}>
                           <div className="flex items-center gap-4 mb-3">
                              <h3 className="text-[15px] font-black text-navy uppercase tracking-[0.3em] whitespace-nowrap">{group.category}</h3>
                              <div className="h-px w-full bg-gray-100"></div>
                           </div>
                           <div className="space-y-3">
                              {group.questions.map((faq, idx) => {
                                 const itemIndex = `${groupIdx}-${idx}`;
                                 const isOpen = activeIndex === itemIndex;

                                 return (
                                    <div
                                       key={idx}
                                       className={`border rounded-2xl transition-all duration-300 ${isOpen
                                             ? 'bg-white border-primary shadow-2xl shadow-primary/10'
                                             : 'bg-white border-gray-100 hover:border-gray-200'
                                          }`}
                                    >
                                       <button
                                          onClick={() => setActiveIndex(isOpen ? null : itemIndex)}
                                          className="w-full px-6 py-5 flex items-center justify-between text-left"
                                       >
                                          <span className={`text-xs md:text-sm font-bold tracking-tight ${isOpen ? 'text-navy' : 'text-gray-700'}`}>{faq.q}</span>
                                          <div className={`p-1 rounded-full transition-all duration-300 ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-gray-50 text-gray-300'}`}>
                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                          </div>
                                       </button>
                                       {isOpen && (
                                          <div className="px-6 pb-6">
                                             <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                                {faq.a}
                                             </p>
                                          </div>
                                       )}
                                    </div>
                                 );
                              })}
                           </div>
                        </div>
                     ))
                  ) : (
                     <div className="text-center py-20">
                        <p className="text-sm font-bold text-gray-400">No questions found matching "{searchQuery}"</p>
                     </div>
                  )}
               </div>
            </section>

            {/* Support CTA - New Design */}
            <section className="section-container">
               <div className="relative group overflow-hidden rounded-[2.5rem] bg-navy border border-white/5 shadow-2xl transition-all duration-500 hover:shadow-primary/10">
                  {/* Dynamic Mesh Background */}
                  <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
                  <div className="absolute -top-32 -right-32 h-80 w-80 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
                  <div className="absolute -bottom-32 -left-32 h-80 w-80 bg-orange-500/10 rounded-full blur-[100px]"></div>
                  
                  <div className="relative z-10 grid lg:grid-cols-12 items-center gap-8 p-8 lg:p-16">
                     {/* Left Content */}
                     <div className="lg:col-span-7 text-left">
                        <div className="flex items-center gap-3 mb-6">
                           <div className="flex -space-x-2">
                              {[1, 2, 3].map(i => (
                                 <div key={i} className="h-8 w-8 rounded-full border-2 border-navy bg-gray-800 flex items-center justify-center overflow-hidden">
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} alt="Support" className="h-full w-full object-cover" />
                                 </div>
                              ))}
                           </div>
                           <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20">
                              <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping"></div>
                              <span className="text-[9px] font-black text-green-500 uppercase tracking-widest">Live Support</span>
                           </div>
                        </div>
                        
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 tracking-tighter leading-none">
                           Can't find what <br /> 
                           <span className="text-primary italic">you need?</span>
                        </h2>
                        <p className="text-xs text-white/40 max-w-md font-medium leading-relaxed">
                           Our institutional experts are standing by to help you with migration, 
                           setup, or any specific feature requests. Get a response in minutes.
                        </p>
                     </div>

                      {/* Right Actions */}
                      <div className="lg:col-span-5 flex flex-col gap-3">
                         <a href="https://wa.me/919104081291" target="_blank" className="group/btn relative w-full overflow-hidden px-8 py-5 bg-primary text-white rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95 text-center">
                            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500"></div>
                            <div className="flex items-center justify-center gap-3">
                               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                               <span className="text-[11px] font-black uppercase tracking-[0.2em]">Chat with Experts</span>
                            </div>
                         </a>
                         
                         <div className="grid grid-cols-2 gap-3">
                            <a href="tel:+919104081291" className="flex flex-col items-center gap-2 px-4 py-4 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 transition-all group/call">
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary group-hover/call:scale-110 transition-transform"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                               <span className="text-[9px] font-black uppercase tracking-widest text-white/60 group-hover/call:text-white transition-colors">Call Now</span>
                            </a>
                            <a href="mailto:info@tuoora.com" className="flex flex-col items-center gap-2 px-4 py-4 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 transition-all group/mail">
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary group-hover/mail:scale-110 transition-transform"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                               <span className="text-[9px] font-black uppercase tracking-widest text-white/60 group-hover/mail:text-white transition-colors">Email Us</span>
                            </a>
                         </div>
                      </div>
                  </div>
               </div>
            </section>
         </main>

         <Footer />
      </div>
   );
}

'use client';
import { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
   const [activeTab, setActiveTab] = useState('sales');

   const contextualContent = {
      sales: {
         title: "Scale your institute.",
         desc: "Our consultants will help you transition from manual records to a high-density automated ERP.",
         features: [
            { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", text: "Multi-tenant Data Security" },
            { icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", text: "Multi-branch Management" },
            { icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3", text: "Customized Fee Structures" }
         ],
         cta: "Schedule a Consultation"
      },
      support: {
         title: "Zero-Downtime Support.",
         desc: "Need help with migration or daily operations? Our technical team is standing by.",
         features: [
            { icon: "M12 2v4 M12 18v4 M4.93 4.93l2.83 2.83 M16.24 16.24l2.83 2.83 M2 12h4 M18 12h4 M4.93 19.07l2.83-2.83 M16.24 7.76l2.83-2.83", text: "24/7 Priority Support" },
            { icon: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M17 8l-5-5-5 5 M12 3v12", text: "Automated Data Migration" },
            { icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", text: "Rapid Bug Resolution" }
         ],
         cta: "Open a Ticket"
      },
      demo: {
         title: "See Tuoora in action.",
         desc: "Experience the fastest institutional management workflow in India. 15-minute quick tour.",
         features: [
            { icon: "M15 10l-4 4-2-2 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z", text: "Interactive Workflow Tour" },
            { icon: "M12 20v-6M9 20v-10M15 20v-2M18 20v-8M21 20V4", text: "Analytics & Reports Preview" },
            { icon: "M5 3L19 12L5 21V3Z", text: "Mobile App Demonstration" }
         ],
         cta: "Book My Free Demo"
      }
   };

   const current = contextualContent[activeTab];

   return (
      <div className="min-h-screen bg-white">
         <Navbar />

         <main className="pt-20 pb-8 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
               <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
            </div>

            <section className="section-container relative z-10">
               <div className="max-w-6xl mx-auto">
                  
                  {/* Compact Header */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-gray-100 pb-6">
                     <div className="max-w-xl">
                        <span className="inline-block px-3 py-0.5 bg-navy text-white text-[8px] font-black uppercase tracking-[0.4em] rounded-sm mb-3">
                           Connect
                        </span>
                        <h1 className="text-3xl lg:text-4xl font-black text-navy tracking-tighter leading-none mb-2">
                           Let's start your <br />
                           <span className="text-primary italic">transformation.</span>
                        </h1>
                     </div>
                     <div className="md:text-right">
                        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
                           Institutional Support <br /> Available 24/7
                        </p>
                     </div>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-5">
                     
                     {/* Left: Interactive Category Cards */}
                     <div className="lg:col-span-4 space-y-2">
                        {[
                           { id: 'sales', label: 'Consultation', sub: 'Pricing & Scaling', icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' },
                           { id: 'support', label: 'Support', sub: 'Technical Desk', icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z' },
                           { id: 'demo', label: 'Demo', sub: 'Product Tour', icon: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z M10 8l6 4-6 4z' }
                        ].map((opt) => (
                           <button
                              key={opt.id}
                              onClick={() => setActiveTab(opt.id)}
                              className={`w-full group relative flex items-center gap-3 p-4 rounded-xl transition-all duration-500 overflow-hidden ${
                                 activeTab === opt.id 
                                 ? 'bg-navy text-white shadow-xl shadow-navy/20' 
                                 : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                              }`}
                           >
                              {activeTab === opt.id && (
                                 <div className="absolute right-0 top-0 h-full w-1 bg-primary animate-pulse"></div>
                              )}
                              <div className={`h-8 w-8 flex items-center justify-center rounded-lg transition-colors ${activeTab === opt.id ? 'bg-primary text-white' : 'bg-white text-gray-300 group-hover:text-primary'}`}>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d={opt.icon} /></svg>
                              </div>
                              <div className="text-left">
                                 <h4 className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">{opt.label}</h4>
                                 <p className={`text-[8px] font-medium uppercase tracking-widest ${activeTab === opt.id ? 'text-white/40' : 'text-gray-400'}`}>{opt.sub}</p>
                              </div>
                           </button>
                        ))}

                        {/* Social Proof Panel (Compact) */}
                        <div className="mt-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 relative overflow-hidden group">
                           <div className="absolute -top-10 -right-10 h-24 w-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500"></div>
                           <h4 className="text-[9px] font-black text-primary uppercase tracking-[0.3em] mb-4">Why Tuoora?</h4>
                           <div className="space-y-3">
                              {current.features.map((feature, i) => (
                                 <div key={i} className="flex items-center gap-3 animate-fadeIn" style={{ animationDelay: `${i * 100}ms` }}>
                                    <div className="h-6 w-6 rounded-md bg-white border border-gray-100 flex items-center justify-center text-navy shrink-0 shadow-sm">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d={feature.icon} /></svg>
                                    </div>
                                    <span className="text-[9px] font-bold text-navy/70 uppercase tracking-widest">{feature.text}</span>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>

                     {/* Right: Modern Contextual Form */}
                     <div className="lg:col-span-8 bg-white border border-gray-100 rounded-[2rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] overflow-hidden">
                        
                        {/* Contextual Banner (Compact) */}
                        <div className="bg-navy p-6 lg:p-8 relative overflow-hidden">
                           <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-primary/20 to-transparent"></div>
                           <div className="relative z-10">
                              <h2 className="text-xl font-bold text-white mb-2 tracking-tighter leading-none">{current.title}</h2>
                              <p className="text-[9px] text-white/40 font-medium max-w-md leading-relaxed uppercase tracking-widest">
                                 {current.desc}
                              </p>
                           </div>
                        </div>

                        {/* The Form (Compact) */}
                        <div className="p-6 lg:p-8">
                           <form className="grid sm:grid-cols-2 gap-6">
                              <div className="space-y-1">
                                 <label className="text-[8px] font-black text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                                 <input 
                                    type="text" 
                                    placeholder="Enter your name"
                                    className="w-full py-3 bg-transparent border-b border-gray-100 text-[11px] font-bold text-navy focus:outline-none focus:border-primary transition-all placeholder:text-gray-200"
                                 />
                              </div>
                              <div className="space-y-1">
                                 <label className="text-[8px] font-black text-gray-500 uppercase tracking-widest ml-1">Work Email</label>
                                 <input 
                                    type="email" 
                                    placeholder="your@institute.com"
                                    className="w-full py-3 bg-transparent border-b border-gray-100 text-[11px] font-bold text-navy focus:outline-none focus:border-primary transition-all placeholder:text-gray-200"
                                 />
                              </div>
                              <div className="sm:col-span-2 space-y-1">
                                 <label className="text-[8px] font-black text-gray-500 uppercase tracking-widest ml-1">Details</label>
                                 <textarea 
                                    rows="2"
                                    placeholder={activeTab === 'sales' ? 'How many students do you manage?' : activeTab === 'support' ? 'Please describe the issue.' : 'What time works best for you?'}
                                    className="w-full py-3 bg-transparent border-b border-gray-100 text-[11px] font-bold text-navy focus:outline-none focus:border-primary transition-all placeholder:text-gray-200 resize-none"
                                 ></textarea>
                              </div>
                              
                              <div className="sm:col-span-2 pt-2 flex flex-col sm:flex-row items-center justify-between gap-6">
                                 <div className="flex items-center gap-3">
                                    <div className="flex -space-x-1.5">
                                       {[1, 2, 3].map(i => (
                                          <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+100}`} alt="Support" className="h-6 w-6 rounded-full border-2 border-white bg-gray-100" />
                                       ))}
                                    </div>
                                    <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Experts online</span>
                                 </div>
                                 <button className="w-full sm:w-auto group/btn relative overflow-hidden px-10 py-4 bg-primary text-white rounded-xl shadow-2xl shadow-primary/30 transition-all duration-300 hover:scale-[1.05] active:scale-95">
                                    <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500 pointer-events-none opacity-20"></div>
                                    <div className="flex items-center gap-2 relative z-10">
                                       <span className="text-[10px] font-black uppercase tracking-[0.3em]">{current.cta}</span>
                                       <svg xmlns="http://www.w3.org/2000/svg" className="group-hover/btn:translate-x-1 transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                    </div>
                                 </button>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>

                  {/* Minimal Contact Quick-Links (More Compact) */}
                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                     {[
                        { label: 'Hotline', value: '+91 90000 00000' },
                        { label: 'Email', value: 'hello@tuoora.com' },
                        { label: 'HQ', value: 'Surat, Gujarat' },
                        { label: 'WhatsApp', value: '+91 90000 00001' }
                     ].map((item, i) => (
                        <div key={i} className="p-4 rounded-xl bg-white border border-gray-100 group hover:border-primary/30 transition-all">
                           <span className="text-[7px] font-black text-gray-500 uppercase tracking-widest mb-1 block group-hover:text-primary transition-colors">{item.label}</span>
                           <p className="text-[10px] font-bold text-navy tracking-tight">{item.value}</p>
                        </div>
                     ))}
                  </div>

               </div>
            </section>
         </main>

         <style jsx>{`
            @keyframes fadeIn {
               from { opacity: 0; transform: translateY(5px); }
               to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn {
               animation: fadeIn 0.4s ease-out forwards;
            }
         `}</style>

         <Footer />
      </div>
   );
}

'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
   return (
      <div className="min-h-screen bg-white selection:bg-primary selection:text-white">
         <Navbar />

         <main className="relative pt-32 pb-20 overflow-hidden">
            {/* Unique Liquid Background Blobs */}
            <div className="absolute inset-0 pointer-events-none">
               <motion.div 
                  animate={{ 
                     x: [0, 100, 0], 
                     y: [0, 50, 0],
                     scale: [1, 1.2, 1] 
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"
               />
               <motion.div 
                  animate={{ 
                     x: [0, -80, 0], 
                     y: [0, 100, 0],
                     scale: [1, 1.1, 1] 
                  }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-navy/5 rounded-full blur-[100px]"
               />
            </div>

            <div className="section-container relative z-10">
               <div className="max-w-6xl mx-auto">
                  
                  {/* High-Impact Hero Header */}
                  <motion.div 
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8 }}
                     className="mb-10 text-center lg:text-left"
                  >
                     <span className="inline-flex items-center gap-2 px-3 py-1 bg-navy text-white text-[9px] font-black uppercase tracking-[0.4em] rounded-full mb-6">
                        <span className="h-1 w-1 bg-primary rounded-full animate-pulse"></span>
                        Connect With Us
                     </span>
                     <h1 className="text-5xl lg:text-7xl font-black text-navy tracking-tighter leading-[0.9] mb-6">
                        Let's start your <br />
                        <span className="text-primary italic relative">
                           transformation
                           <motion.span 
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ delay: 0.8, duration: 1 }}
                              className="absolute bottom-2 left-0 w-full h-2 bg-primary/10 -z-10 origin-left"
                           />
                        </span>
                     </h1>
                     <p className="text-gray-400 text-sm font-medium max-w-xl mx-auto lg:mx-0">
                        Experience the next generation of institutional intelligence. 
                        Choose your intent below to get started.
                     </p>
                  </motion.div>

                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                     
                     {/* Left: Tuoora Pulse Dashboard (Redesigned) */}
                     <div className="lg:col-span-5 space-y-6">
                        <motion.div 
                           initial={{ opacity: 0, scale: 0.9 }}
                           animate={{ opacity: 1, scale: 1 }}
                           className="p-8 rounded-[3rem] bg-navy text-white relative overflow-hidden shadow-2xl"
                        >
                           {/* Background Glow */}
                           <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                           
                           <div className="relative z-10">
                              <div className="flex items-center gap-3 mb-6">
                                 <div className="h-2 w-2 rounded-full bg-green-500 animate-ping"></div>
                                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">System Live Hub</span>
                              </div>

                              <h3 className="text-2xl font-bold tracking-tighter mb-6 leading-tight">
                                 We're ready to <br />
                                 <span className="text-primary italic">fuel your growth.</span>
                              </h3>

                              <div className="space-y-4">
                                 {[
                                    { label: 'Avg Response Time', value: '12 Mins', sub: 'Across all channels' },
                                    { label: 'Experts Online', value: '24/7', sub: 'Dedicated support desk' },
                                    { label: 'Data Migration', value: '24 Hours', sub: 'Guaranteed transition' }
                                 ].map((stat, i) => (
                                    <motion.div 
                                       key={i}
                                       initial={{ opacity: 0, x: -20 }}
                                       animate={{ opacity: 1, x: 0 }}
                                       transition={{ delay: 0.5 + (i * 0.1) }}
                                       className="flex justify-between items-end border-b border-white/5 pb-4"
                                    >
                                       <div>
                                          <p className="text-[8px] font-black text-primary uppercase tracking-widest mb-1">{stat.label}</p>
                                          <p className="text-xs text-white/40 font-medium uppercase tracking-tighter">{stat.sub}</p>
                                       </div>
                                       <p className="text-xl font-black text-white">{stat.value}</p>
                                    </motion.div>
                                 ))}
                              </div>

                              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
                                 <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                       <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+50}`} className="h-10 w-10 rounded-full border-4 border-navy bg-gray-800" />
                                    ))}
                                 </div>
                                 <p className="text-[9px] font-black uppercase tracking-widest text-white/30">
                                    Trusted by 500+ <br /> Institutes
                                 </p>
                              </div>
                           </div>
                        </motion.div>

                     </div>

                     {/* Right: Glassmorphism Contextual Form */}
                     <div className="lg:col-span-7">
                        <motion.div 
                           layout
                           className="bg-white border border-gray-100 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] overflow-hidden"
                        >
                           {/* Banner Area - Simplified */}
                           <div className="bg-white p-8 lg:p-10 relative overflow-hidden border-b border-gray-50">
                              <div className="relative z-10">
                                 <h2 className="text-3xl lg:text-4xl font-black text-navy mb-3 tracking-tighter leading-none">
                                    Send us a <br />
                                    <span className="text-primary italic">message.</span>
                                 </h2>
                                 <p className="text-sm text-gray-400 max-w-md leading-relaxed font-medium">
                                    Have questions about our high-density ERP? Our institutional experts 
                                    are standing by to help you scale your institute.
                                 </p>
                              </div>
                           </div>

                           {/* Interactive Form Fields */}
                           <div className="p-8 lg:p-10">
                              <form className="grid sm:grid-cols-2 gap-6">
                                 <div className="space-y-1.5 group">
                                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1 group-focus-within:text-primary transition-colors">Full Name</label>
                                    <input 
                                       type="text" 
                                       placeholder="Rahul Sharma"
                                       className="w-full py-3 bg-gray-50/50 border border-gray-100 rounded-2xl px-6 text-xs font-bold text-navy outline-none focus:border-primary focus:bg-white transition-all placeholder:text-gray-300"
                                    />
                                 </div>
                                 <div className="space-y-1.5 group">
                                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1 group-focus-within:text-primary transition-colors">Work Email</label>
                                    <input 
                                       type="email" 
                                       placeholder="rahul@institute.com"
                                       className="w-full py-3 bg-gray-50/50 border border-gray-100 rounded-2xl px-6 text-xs font-bold text-navy outline-none focus:border-primary focus:bg-white transition-all placeholder:text-gray-300"
                                    />
                                 </div>
                                 <div className="sm:col-span-2 space-y-1.5 group">
                                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1 group-focus-within:text-primary transition-colors">How can we help?</label>
                                    <textarea 
                                       rows="3"
                                       placeholder="Tell us about your institute's requirements..."
                                       className="w-full py-3 bg-gray-50/50 border border-gray-100 rounded-2xl px-6 text-xs font-bold text-navy outline-none focus:border-primary focus:bg-white transition-all placeholder:text-gray-300 resize-none"
                                    ></textarea>
                                 </div>
                                 
                                 <div className="sm:col-span-2 pt-4 flex flex-col sm:flex-row items-center justify-between gap-8 border-t border-gray-50 mt-4">
                                    <div className="flex items-center gap-4">
                                       <div className="flex -space-x-3">
                                          {[1, 2, 3].map(i => (
                                             <motion.img 
                                                whileHover={{ y: -5, zIndex: 10 }}
                                                key={i} 
                                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+100}`} 
                                                alt="Expert" 
                                                className="h-10 w-10 rounded-full border-4 border-white bg-gray-100 shadow-sm cursor-pointer" 
                                             />
                                          ))}
                                       </div>
                                       <div>
                                          <p className="text-[9px] font-black text-navy uppercase tracking-widest">Experts Online</p>
                                          <p className="text-[8px] font-medium text-gray-400 uppercase tracking-widest">Avg Response: 12 Mins</p>
                                       </div>
                                    </div>

                                    <motion.button 
                                       whileHover={{ scale: 1.05 }}
                                       whileTap={{ scale: 0.95 }}
                                       className="w-full sm:w-auto group/btn relative overflow-hidden px-12 py-5 bg-primary text-white rounded-2xl shadow-2xl shadow-primary/30 transition-all duration-300"
                                    >
                                       <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500 pointer-events-none"></div>
                                       <div className="flex items-center gap-3 relative z-10">
                                          <span className="text-xs font-black uppercase tracking-[0.2em]">Send Message</span>
                                          <svg xmlns="http://www.w3.org/2000/svg" className="group-hover/btn:translate-x-1 transition-transform" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                       </div>
                                    </motion.button>
                                 </div>
                              </form>
                           </div>
                        </motion.div>
                     </div>
                  </div>

                  {/* Floating Contact Nodes - Smaller & Compact */}
                  <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                     {[
                        { label: 'Hotline', value: '+91 90000 00000', icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' },
                        { label: 'Email', value: 'hello@tuoora.com', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6' },
                        { label: 'HQ', value: 'Surat, Gujarat', icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' },
                        { label: 'WhatsApp', value: '+91 90000 00001', icon: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L21 3z' }
                     ].map((item, i) => (
                        <motion.div 
                           key={i} 
                           whileHover={{ y: -5 }}
                           initial={{ opacity: 0, y: 15 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.6 + (i * 0.1) }}
                           className="p-4 rounded-3xl bg-white border border-gray-100 group hover:border-primary/30 transition-all cursor-pointer"
                        >
                           <div className="h-6 w-6 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 mb-3 group-hover:bg-primary group-hover:text-white transition-all">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d={item.icon} /></svg>
                           </div>
                           <span className="text-[7px] font-black text-gray-400 uppercase tracking-widest mb-0.5 block group-hover:text-primary transition-colors">{item.label}</span>
                           <p className="text-[10px] font-black text-navy tracking-tight">{item.value}</p>
                        </motion.div>
                     ))}
                  </div>

               </div>
            </div>
         </main>

         <Footer />
      </div>
   );
}

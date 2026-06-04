'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [formData, setFormData] = useState({
      full_name: '',
      phone: '',
      institute_name: '',
      email: '',
      designation: 'Contact Form Inquiry',
      message: ''
   });
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      try {
         const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://tuoora.com';
         const response = await fetch(`${apiBaseUrl}/api/book-demo`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
            },
            body: JSON.stringify(formData),
         });
         
         if (response.ok) {
            setSubmitStatus('success');
            setFormData({
               full_name: '',
               phone: '',
               institute_name: '',
               email: '',
               designation: 'Contact Form Inquiry',
               message: ''
            });
            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
         } else {
            setSubmitStatus('error');
         }
      } catch (error) {
         console.error("Submission error:", error);
         setSubmitStatus('error');
      } finally {
         setIsSubmitting(false);
      }
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
   };

   return (
      <div className="min-h-screen bg-white selection:bg-primary selection:text-white">
         <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

         <main className="relative pt-24 pb-12 overflow-hidden">
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
                     className="mb-6 text-center lg:text-left"
                  >
                     <span className="inline-flex items-center gap-2 px-3 py-1 bg-navy text-white text-[9px] font-black uppercase tracking-[0.4em] rounded-full mb-2">
                        <span className="h-1 w-1 bg-primary rounded-full animate-pulse"></span>
                        Connect With Us
                     </span>
                     <h1 className="text-4xl lg:text-5xl font-black text-navy tracking-tighter leading-tight mb-2">
                        Let's start your <span className="text-primary italic relative">
                           transformation
                           <motion.span 
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ delay: 0.8, duration: 1 }}
                              className="absolute bottom-1 left-0 w-full h-2 bg-primary/10 -z-10 origin-left"
                           />
                        </span>
                     </h1>
                     <p className="text-gray-400 text-sm font-medium max-w-xl mx-auto lg:mx-0 mb-6">
                        Experience the next generation of institutional intelligence. 
                        Choose your intent below to get started. 
                     </p>

                     {/* Relocated Floating Contact Nodes - Compact & Accessible */}
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                           { label: 'Hotline', value: '+91 91040 81291', icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' },
                           { label: 'Email', value: 'info@tuoora.com', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6' },
                           { label: 'HQ', value: 'Ahmedabad, Gujarat', icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' },
                           { label: 'WhatsApp', value: '+91 91040 81291', icon: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L21 3z' }
                        ].map((item, i) => (
                           <motion.div 
                              key={i} 
                              whileHover={{ y: -5 }}
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 + (i * 0.1) }}
                              className="p-3.5 rounded-2xl bg-white border border-gray-100 group hover:border-primary/30 transition-all cursor-pointer flex items-center gap-4"
                           >
                              <div className="h-8 w-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d={item.icon} /></svg>
                              </div>
                              <div className="min-w-0">
                                 <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block group-hover:text-primary transition-colors truncate">{item.label}</span>
                                 <p className="text-sm font-black text-navy tracking-tight truncate">{item.value}</p>
                              </div>
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>

                  <div className="grid lg:grid-cols-12 gap-4 items-start">
                     
                     {/* Left: Tuoora Pulse Dashboard (Redesigned) */}
                     <div className="lg:col-span-4 space-y-6">
                        <motion.div 
                           initial={{ opacity: 0, scale: 0.9 }}
                           animate={{ opacity: 1, scale: 1 }}
                           className="p-6 rounded-[2.5rem] bg-navy text-white relative overflow-hidden shadow-2xl"
                        >
                           {/* Background Glow */}
                           <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                           
                           <div className="relative z-10">
                              <div className="flex items-center gap-3 mb-4">
                                 <div className="h-2 w-2 rounded-full bg-green-500 animate-ping"></div>
                                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">System Live Hub</span>
                              </div>

                              <h3 className="text-2xl font-bold tracking-tighter mb-4 leading-tight">
                                 We're ready to <br />
                                 <span className="text-primary italic">fuel your growth.</span>
                              </h3>

                              <div className="space-y-3">
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
                                       className="flex justify-between items-end border-b border-white/5 pb-3"
                                    >
                                       <div>
                                          <p className="text-[8px] font-black text-primary uppercase tracking-widest mb-1">{stat.label}</p>
                                          <p className="text-xs text-white/40 font-medium uppercase tracking-tighter">{stat.sub}</p>
                                       </div>
                                       <p className="text-xl font-black text-white">{stat.value}</p>
                                    </motion.div>
                                 ))}
                              </div>

                              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-4">
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
                     <div className="lg:col-span-8">
                        <motion.div 
                           layout
                           className="bg-white border border-gray-100 rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] overflow-hidden relative"
                        >
                           <AnimatePresence>
                              {submitStatus === 'success' && (
                                 <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8"
                                 >
                                    <motion.div 
                                       initial={{ scale: 0.5, opacity: 0 }}
                                       animate={{ scale: 1, opacity: 1 }}
                                       className="h-20 w-20 bg-green-500 rounded-full flex items-center justify-center text-white mb-6 shadow-2xl shadow-green-200"
                                    >
                                       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                                    </motion.div>
                                    <h3 className="text-3xl font-black text-navy mb-2 tracking-tighter">Request Sent!</h3>
                                    <p className="text-gray-500 font-medium">We'll get back to you in approximately 12 minutes.</p>
                                    <button 
                                       onClick={() => setSubmitStatus(null)}
                                       className="mt-8 text-xs font-black text-primary uppercase tracking-widest hover:underline"
                                    >
                                       Send another request
                                    </button>
                                 </motion.div>
                              )}
                           </AnimatePresence>

                           {/* Banner Area - Simplified */}
                           <div className="bg-white p-6 lg:p-4 relative overflow-hidden border-b border-gray-50">
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
                           <div className="p-6 lg:p-4">
                              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                                 <div className="space-y-1.5 group">
                                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1 group-focus-within:text-primary transition-colors">Full Name</label>
                                    <input 
                                       type="text" 
                                       name="full_name"
                                       required
                                       value={formData.full_name}
                                       onChange={handleChange}
                                       placeholder="Rahul Sharma"
                                       className="w-full py-3 bg-gray-50/50 border border-gray-100 rounded-2xl px-6 text-xs font-bold text-navy outline-none focus:border-primary focus:bg-white transition-all placeholder:text-gray-300"
                                    />
                                 </div>
                                 <div className="space-y-1.5 group">
                                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1 group-focus-within:text-primary transition-colors">Phone Number</label>
                                    <input 
                                       type="tel" 
                                       name="phone"
                                       required
                                       value={formData.phone}
                                       onChange={handleChange}
                                       placeholder="+91 00000 00000"
                                       className="w-full py-3 bg-gray-50/50 border border-gray-100 rounded-2xl px-6 text-xs font-bold text-navy outline-none focus:border-primary focus:bg-white transition-all placeholder:text-gray-300"
                                    />
                                 </div>
                                 <div className="space-y-1.5 group">
                                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1 group-focus-within:text-primary transition-colors">Institute Name</label>
                                    <input 
                                       type="text" 
                                       name="institute_name"
                                       required
                                       value={formData.institute_name}
                                       onChange={handleChange}
                                       placeholder="Tuoora Academy"
                                       className="w-full py-3 bg-gray-50/50 border border-gray-100 rounded-2xl px-6 text-xs font-bold text-navy outline-none focus:border-primary focus:bg-white transition-all placeholder:text-gray-300"
                                    />
                                 </div>
                                 <div className="space-y-1.5 group">
                                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1 group-focus-within:text-primary transition-colors">Work Email</label>
                                    <input 
                                       type="email" 
                                       name="email"
                                       required
                                       value={formData.email}
                                       onChange={handleChange}
                                       placeholder="rahul@institute.com"
                                       className="w-full py-3 bg-gray-50/50 border border-gray-100 rounded-2xl px-6 text-xs font-bold text-navy outline-none focus:border-primary focus:bg-white transition-all placeholder:text-gray-300"
                                    />
                                 </div>
                                 <div className="sm:col-span-2 space-y-1.5 group">
                                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1 group-focus-within:text-primary transition-colors">Your Message (Optional)</label>
                                    <textarea 
                                       name="message"
                                       value={formData.message}
                                       onChange={handleChange}
                                       rows="2"
                                       placeholder="Any specific requirements?"
                                       className="w-full py-3 bg-gray-50/50 border border-gray-100 rounded-2xl px-6 text-xs font-bold text-navy outline-none focus:border-primary focus:bg-white transition-all placeholder:text-gray-300 resize-none"
                                    ></textarea>
                                 </div>
                                 
                                 <div className="sm:col-span-2 pt-3 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-gray-50 mt-2">
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
                                       disabled={isSubmitting}
                                       whileHover={{ scale: 1.05 }}
                                       whileTap={{ scale: 0.95 }}
                                       className={`w-full sm:w-auto group/btn relative overflow-hidden px-12 py-5 rounded-2xl shadow-2xl transition-all duration-300 ${
                                          isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 
                                          submitStatus === 'error' ? 'bg-red-500' : 'bg-primary shadow-primary/30'
                                       }`}
                                    >
                                       <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500 pointer-events-none"></div>
                                       <div className="flex items-center gap-3 relative z-10 text-white">
                                          <span className="text-xs font-black uppercase tracking-[0.2em]">
                                             {isSubmitting ? 'Processing...' : 
                                              submitStatus === 'error' ? 'Try Again' : 'Confirm Walkthrough'}
                                          </span>
                                          {!isSubmitting && (
                                             <svg xmlns="http://www.w3.org/2000/svg" className="group-hover/btn:translate-x-1 transition-transform" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                          )}
                                       </div>
                                    </motion.button>
                                 </div>
                              </form>
                           </div>
                        </motion.div>
                     </div>
                  </div>

               </div>
            </div>
         </main>

         <Footer />
      </div>
   );
}

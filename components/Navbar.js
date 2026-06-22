'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export default function Navbar({ isModalOpen: externalIsModalOpen, setIsModalOpen: externalSetIsModalOpen }) {
   const [localIsModalOpen, setLocalIsModalOpen] = useState(false);
   const isModalOpen = externalIsModalOpen !== undefined ? externalIsModalOpen : localIsModalOpen;
   const setIsModalOpen = externalSetIsModalOpen !== undefined ? externalSetIsModalOpen : setLocalIsModalOpen;
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const pathname = usePathname();

   // Handle scroll effect
   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const [formData, setFormData] = useState({
      full_name: '',
      phone: '',
      institute_name: '',
      email: '',
      designation: ''
   });
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
   };

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

         const data = await response.json();

         if (response.ok) {
            setSubmitStatus('success');
            setTimeout(() => {
               setIsModalOpen(false);
               setSubmitStatus(null);
               setFormData({
                  full_name: '',
                  phone: '',
                  institute_name: '',
                  email: '',
                  designation: ''
               });
               setIsDropdownOpen(false);
            }, 2500);
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

   const navLinks = [
      { name: "Home", href: "/" },
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
   ];

   return (
      <>
         {/* Floating Island Navbar */}
         <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-500">
            <motion.nav
               initial={{ y: -100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
               className={`
                  relative flex items-center justify-between px-6 transition-all duration-500 ease-in-out
                  ${scrolled
                     ? 'h-14 w-full max-w-4xl rounded-2xl bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.06)]'
                     : 'h-16 w-full max-w-6xl rounded-[2rem] bg-white border border-gray-100 shadow-sm'
                  }
               `}
            >
               {/* Logo Area */}
               <Link href="/" className="flex items-center gap-2 group">
                  <div className={`relative transition-all duration-500 ${scrolled ? 'h-6 w-20' : 'h-7 w-24'} group-hover:scale-105`}>
                     <Image
                        src="/logo3.png"
                        alt="Tuoora Logo"
                        fill
                        className="object-contain"
                        priority
                     />
                  </div>
               </Link>

               {/* Desktop Navigation Links */}
               <div className="hidden items-center gap-1 md:flex">
                  {navLinks.map((link) => {
                     const isActive = pathname === link.href;
                     return (
                        <Link
                           key={link.name}
                           href={link.href}
                           className={`
                              relative px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-full
                              ${isActive ? 'text-primary' : 'text-gray-500 hover:text-navy hover:bg-gray-50/50'}
                           `}
                        >
                           {link.name}
                           {isActive && (
                              <motion.span
                                 layoutId="activeTab"
                                 className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[3px] w-4 bg-primary rounded-full"
                                 transition={{ type: "spring", stiffness: 380, damping: 30 }}
                              />
                           )}
                        </Link>
                     );
                  })}

                  <div className="h-4 w-[1px] bg-gray-200 mx-3"></div>

                  <Link 
                     href="https://institute.tuoora.com/login"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="mr-2"
                  >
                     <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                           px-5 py-2.5 border border-navy/20 text-navy text-[10px] font-black uppercase tracking-widest rounded-xl 
                           hover:border-navy hover:bg-navy/5 transition-all duration-300
                        `}
                     >
                        Login
                     </motion.button>
                  </Link>
                  
                  <Link 
                     href="https://institute.tuoora.com/register"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="mr-2"
                  >
                  <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                   
                     className={`
                        px-6 py-2.5 bg-navy text-white text-[10px] font-black uppercase tracking-widest rounded-xl 
                        shadow-lg shadow-navy/10 hover:bg-primary transition-all duration-300
                     `}
                  >
                     Register
                  </motion.button>
                  </Link>
               </div>

               {/* Mobile Toggle Button */}
               <button
                  className={`
                     md:hidden flex flex-col gap-1.5 items-end justify-center w-8 h-8 transition-all
                     ${isMobileMenuOpen ? 'rotate-90' : ''}
                  `}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               >
                  <span className={`h-0.5 bg-navy transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
                  <span className={`h-0.5 bg-navy transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
                  <span className={`h-0.5 bg-navy transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
               </button>

               {/* Animated Mobile Menu */}
               <AnimatePresence>
                  {isMobileMenuOpen && (
                     <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-[calc(100%+12px)] left-0 right-0 p-2 bg-white rounded-2xl border border-gray-100 shadow-2xl md:hidden overflow-hidden z-[60]"
                     >
                        <div className="flex flex-col p-4 gap-1">
                           {navLinks.map((link, idx) => (
                              <motion.div
                                 key={link.name}
                                 initial={{ opacity: 0, x: -10 }}
                                 animate={{ opacity: 1, x: 0 }}
                                 transition={{ delay: idx * 0.05 }}
                              >
                                 <Link
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`
                                       flex items-center px-4 py-4 rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all
                                       ${pathname === link.href ? 'bg-primary/5 text-primary' : 'text-navy hover:bg-gray-50'}
                                    `}
                                 >
                                    {link.name}
                                 </Link>
                              </motion.div>
                           ))}
                           
                           <Link
                              href="https://institute.tuoora.com/login"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="w-full mt-4 py-4 border border-navy/20 text-navy text-[10px] font-black uppercase tracking-widest rounded-xl text-center hover:bg-navy/5 active:scale-95 transition-all block"
                           >
                              Login
                           </Link>

                           <button
                              onClick={() => {
                                 setIsMobileMenuOpen(false);
                                 setIsModalOpen(true);
                              }}
                              className="w-full mt-2.5 py-5 bg-navy text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-xl shadow-navy/20 active:scale-95 transition-all"
                           >
                              Request A Demo
                           </button>
                        </div>
                     </motion.div>
                  )}
               </AnimatePresence>
            </motion.nav>
         </div>

         {/* Advanced Split-Layout Book Demo Modal */}
         <AnimatePresence mode="wait">
            {isModalOpen && (
               <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                  {/* Backdrop with balanced transparency */}
                  <div
                     className="absolute inset-0 bg-navy/65 backdrop-blur-md"
                     onClick={() => setIsModalOpen(false)}
                  />

                  {/* Modal Container (No Animation) */}
                  <div
                     className="relative w-full max-w-3xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]"
                  >
                     {/* Left Panel: Brand Visuals (Desktop Only) */}
                     <div className="hidden md:flex md:w-[38%] bg-gradient-to-br from-[#0b0f19] via-[#111827] to-[#0f172a] relative overflow-hidden flex-col justify-between p-10">
                        {/* Abstract Background Shapes */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10">
                           <div className="mb-8" />

                           <div className="space-y-4">
                              <span className="inline-block px-3 py-1 bg-white/10 text-primary text-[8px] font-black uppercase tracking-[0.4em] rounded-full">Institutional Tour</span>
                              <h2 className="text-2xl font-bold text-white tracking-tight leading-tight">The Future of <br /><span className="text-primary">Institute</span> Growth.</h2>
                              <p className="text-white/50 text-[11px] leading-relaxed max-w-[220px]">Experience the most advanced ERP ecosystem for modern education.</p>
                           </div>
                        </div>

                        <div className="space-y-4 relative z-10">
                           {[
                              { title: "Smart Ecosystem", desc: "Automated workflows." },
                              { title: "Institutional Security", desc: "Grade protection." },
                              { title: "Real-time Growth", desc: "Analytics driven." }
                           ].map((item, i) => (
                              <div key={i} className="flex gap-3 items-start">
                                 <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></div>
                                 </div>
                                 <div>
                                    <h4 className="text-white text-[10px] font-bold">{item.title}</h4>
                                    <p className="text-white/40 text-[9px] mt-0.5">{item.desc}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Right Panel: The Form */}
                     <div className="w-full md:w-[62%] bg-white p-8 md:p-10 relative">
                        <button
                           onClick={() => setIsModalOpen(false)}
                           className="absolute top-6 right-6 text-gray-300 hover:text-navy transition-colors z-20"
                        >
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>

                        <div className="max-w-sm mx-auto">
                           <div className="mb-8">
                              <h3 className="text-xl font-bold text-navy tracking-tight">Request Walkthrough</h3>
                              <p className="text-gray-400 text-[10px] font-medium mt-1">Schedule a personalized session with our team.</p>
                           </div>

                           <form onSubmit={handleSubmit} className="space-y-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                 <div className="space-y-1">
                                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                       type="text"
                                       name="full_name"
                                       required
                                       value={formData.full_name}
                                       onChange={handleInputChange}
                                       placeholder="e.g. Rahul Sharma"
                                       className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl text-[10px] font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-300 shadow-sm"
                                    />
                                 </div>
                                 <div className="space-y-1">
                                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                                    <input
                                       type="tel"
                                       name="phone"
                                       required
                                       value={formData.phone}
                                       onChange={handleInputChange}
                                       placeholder="+91 00000 00000"
                                       className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl text-[10px] font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-300 shadow-sm"
                                    />
                                 </div>
                              </div>

                              <div className="space-y-1">
                                 <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Institute Name</label>
                                 <input
                                    type="text"
                                    name="institute_name"
                                    required
                                    value={formData.institute_name}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Tuoora Academy"
                                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl text-[10px] font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-300 shadow-sm"
                                 />
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                 <div className="space-y-1">
                                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Work Email</label>
                                    <input
                                       type="email"
                                       name="email"
                                       required
                                       value={formData.email}
                                       onChange={handleInputChange}
                                       placeholder="admin@institute.com"
                                       className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl text-[10px] font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-300 shadow-sm"
                                    />
                                 </div>
                                 <div className="space-y-1">
                                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Designation</label>
                                    <input
                                       type="text"
                                       name="designation"
                                       value={formData.designation}
                                       onChange={handleInputChange}
                                       placeholder="e.g. Principal, Director, Owner"
                                       className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl text-[10px] font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-300 shadow-sm"
                                    />
                                 </div>
                              </div>

                              <button
                                 type="submit"
                                 disabled={isSubmitting}
                                 className={`group relative w-full py-4 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-xl shadow-xl transition-all duration-300 mt-2 overflow-hidden ${submitStatus === 'success' ? 'bg-green-500 shadow-green-500/20' :
                                    submitStatus === 'error' ? 'bg-red-500 shadow-red-500/20' :
                                       'bg-navy shadow-navy/20 hover:bg-primary'
                                    }`}
                              >
                                 <span className="relative z-10">
                                    {isSubmitting ? 'Processing...' :
                                       submitStatus === 'success' ? 'Request Sent!' :
                                          submitStatus === 'error' ? 'Try Again' :
                                             'Confirm Walkthrough'}
                                 </span>
                                 <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                              </button>

                              <p
                                 className={`text-center text-[9px] font-bold uppercase tracking-widest ${submitStatus === 'error' ? 'text-red-500' : 'text-gray-400'
                                    }`}
                              >
                                 {submitStatus === 'error' ? 'Something went wrong. Please check your data.' : 'Priority response: Within 2 hours'}
                              </p>
                           </form>
                        </div>
                     </div>
                  </div>

               </div>
            )}
         </AnimatePresence>
      </>
   );
}

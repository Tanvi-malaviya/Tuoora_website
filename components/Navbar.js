'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const pathname = usePathname();

   const navLinks = [
      { name: "Home", href: "/" },
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
   ];

   return (
      <>
         <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="section-container flex h-14 items-center justify-between">
               <Link href="/" className="flex items-center gap-2 group">
                  <div className="relative h-8 w-24 transition-transform group-hover:scale-105">
                     <Image 
                        src="/logo2.png" 
                        alt="Tuoora Logo" 
                        fill 
                        className="object-contain"
                        priority
                     />
                  </div>
               </Link>

               {/* Desktop Links */}
               <div className="hidden items-center gap-6 md:flex">
                  {navLinks.map((link) => {
                     const isActive = pathname === link.href;
                     return (
                        <Link 
                           key={link.name}
                           href={link.href} 
                           className={`relative text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 group pb-1 ${
                              isActive ? 'text-primary' : 'text-gray-400 hover:text-navy'
                           }`}
                        >
                           {link.name}
                           {/* Active Indicator Line */}
                           <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${
                              isActive ? 'w-full' : 'w-0 group-hover:w-full'
                           }`}></span>
                        </Link>
                     );
                  })}
                  
                  <div className="h-4 w-[1px] bg-gray-100 mx-2"></div>
                  
                  <button 
                     onClick={() => setIsModalOpen(true)}
                     className="px-6 py-2 bg-navy text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-xl shadow-navy/20 hover:bg-primary transition-all active:scale-95"
                  >
                     Book Demo
                  </button>
               </div>

               {/* Mobile Toggle */}
               <button 
                  className="md:hidden p-2 text-navy"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               >
                  {isMobileMenuOpen ? (
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  ) : (
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                  )}
               </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 top-14 z-40 bg-white md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
               <div className="flex flex-col p-6 gap-6">
                  {navLinks.map((link) => {
                     const isActive = pathname === link.href;
                     return (
                        <Link 
                           key={link.name}
                           href={link.href} 
                           onClick={() => setIsMobileMenuOpen(false)}
                           className={`text-sm font-black uppercase tracking-[0.2em] transition-all ${
                              isActive ? 'text-primary translate-x-2' : 'text-navy hover:text-primary'
                           }`}
                        >
                           {link.name}
                        </Link>
                     );
                  })}
                  <button 
                     onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsModalOpen(true);
                     }}
                     className="w-full py-4 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-xl shadow-primary/20"
                  >
                     Book A Demo
                  </button>
               </div>
            </div>
         </nav>

         {/* Book Demo Modal */}
         {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
               <div className="absolute inset-0 bg-navy/40 backdrop-blur-sm animate-fadeIn" onClick={() => setIsModalOpen(false)}></div>
               <div className="relative w-full max-w-md bg-white rounded-[1rem] shadow-2xl overflow-hidden animate-slideUp">
                  <div className="bg-navy p-8 text-center relative overflow-hidden">
                     <div className="absolute -top-10 -right-10 h-32 w-32 bg-primary/20 rounded-full blur-2xl"></div>
                     <div className="absolute -bottom-10 -left-10 h-32 w-32 bg-primary/10 rounded-full blur-2xl"></div>
                     <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] mb-2 block relative z-10">Institutional Tour</span>
                     <h2 className="text-2xl font-bold text-white tracking-tighter relative z-10">Book your demo.</h2>
                     <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                     </button>
                  </div>
                  <form className="p-8 space-y-5">
                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                           <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Name</label>
                           <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                        </div>
                        <div className="space-y-1.5">
                           <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone</label>
                           <input type="tel" placeholder="+91 00000 00000" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                        </div>
                     </div>
                     <div className="space-y-1.5">
                        <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Institute Name</label>
                        <input type="text" placeholder="e.g. Tuoora Academy" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                           <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Work Email</label>
                           <input type="email" placeholder="your@institute.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                        </div>
                        <div className="space-y-1.5">
                           <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Your Role</label>
                           <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                              <option>Principal</option>
                              <option>Admin</option>
                              <option>Teacher</option>
                              <option>Owner</option>
                           </select>
                        </div>
                     </div>
                     <button className="w-full py-4 bg-primary text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all mt-4">
                        Request Walkthrough
                     </button>
                     <p className="text-center text-[9px] text-gray-400 font-medium uppercase tracking-widest">We'll contact you within 2 hours.</p>
                  </form>
               </div>
            </div>
         )}

         <style jsx>{`
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes slideUp { from { opacity: 0; transform: translateY(20px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
            .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
            .animate-slideUp { animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
         `}</style>
      </>
   );
}

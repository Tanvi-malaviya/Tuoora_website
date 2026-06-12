'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: "Modules", href: "/modules" },
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Why Tuoora", href: "/why-tuoora" },
    ],
    resources: [
      { name: "Help Center (FAQ)", href: "/faq" },
      { name: "Contact Support", href: "/contact" },
    
    ],
    legal: [
     { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-conditions" },
      { name: "Refund Policy", href: "#" },
    
    ]
  };

  return (
    <footer className="relative pt-12 pb-8 bg-white overflow-hidden border-t border-gray-100">
      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[100px] translate-y-1/2" />
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="section-container relative z-10 px-4">
        <div className="grid lg:grid-cols-12 gap-8 mb-10">
          
          {/* Brand & Newsletter Section */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6 group">
              <Image src="/logo3.png" alt="Tuoora Logo" width={100} height={32} className="transition-opacity group-hover:opacity-80" />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-sm font-medium">
              The world's most sophisticated institutional ERP infrastructure. Empowering the next generation of global education.
            </p>
            
            {/* <div className="space-y-3">
               <h4 className="text-[10px] font-black text-navy/40 uppercase tracking-[0.3em]">Join our ecosystem</h4>
               <div className="flex p-1 bg-gray-50 border border-gray-100 rounded-2xl focus-within:border-primary/50 focus-within:shadow-lg focus-within:shadow-primary/5 transition-all">
                  <input 
                    type="email" 
                    placeholder="Work email address" 
                    className="flex-1 bg-transparent px-4 py-2.5 text-xs text-navy outline-none placeholder:text-gray-400"
                  />
                  <button className="px-5 py-2.5 bg-navy text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-primary transition-all active:scale-95">
                    Join
                  </button>
               </div>
            </div> */}
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <h4 className="text-[10px] font-black text-navy uppercase tracking-[0.3em] mb-6">Platform</h4>
                <ul className="space-y-3">
                  {footerLinks.platform.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className={`text-sm font-bold transition-colors hover:text-primary ${pathname === link.href ? 'text-primary' : 'text-navy/60'}`}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] font-black text-navy uppercase tracking-[0.3em] mb-6">Resources</h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-navy/60 font-bold transition-colors hover:text-primary">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h4 className="text-[10px] font-black text-navy uppercase tracking-[0.3em] mb-6">Get in Touch</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="mailto:info@tuoora.com" className="group block">
                      <div className="text-[10px] font-black text-navy/30 uppercase tracking-widest mb-1">Email Support</div>
                      <div className="text-sm font-bold text-navy/90 group-hover:text-primary transition-colors">info@tuoora.com</div>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+919104081291" className="group block">
                      <div className="text-[10px] font-black text-navy/30 uppercase tracking-widest mb-1">Direct Call</div>
                      <div className="text-sm font-bold text-navy/90 group-hover:text-primary transition-colors">+91 91040 81291</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8 order-2 md:order-1">
            <p className="text-[10px] font-black text-navy/50 uppercase tracking-[0.3em]">
              © {currentYear} Tuoora Technologies
            </p>
            <div className="hidden sm:flex gap-6">
              {footerLinks.legal.map(link => (
                <Link key={link.name} href={link.href} className="text-[10px] font-black text-navy/50 uppercase tracking-[0.2em] hover:text-primary transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex gap-4 order-1 md:order-2">
            {[
              { name: 'Twitter', href: 'https://x.com/tuoora', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg> },
              { name: 'LinkedIn', href: 'https://linkedin.com/company/tuoora', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> },
              { name: 'Instagram', href: 'https://instagram.com/tuoora', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> }
            ].map(social => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-primary hover:bg-primary/5 hover:border-primary/20 transition-all">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
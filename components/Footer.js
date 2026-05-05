'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="relative bg-white pt-10 pb-6 overflow-hidden border-t border-gray-100">

      {/* Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="section-container relative z-10 mx-auto px-4">

        {/* Top Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="relative h-8 w-28 mb-6 block group">
              <Image
                src="/logo2.png"
                alt="Tuoora Logo"
                fill
                className="object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            <p className="text-xs text-gray-400 leading-relaxed max-w-md mb-4 font-light">
              A powerful digital infrastructure for modern institutes. Manage students, teachers, fees, and operations in one unified platform.
            </p>

            {/* Newsletter */}
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl p-1.5 max-w-xs">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 bg-transparent text-[11px] outline-none px-2"
              />
              <button className="px-4 py-1.5 bg-primary text-white text-[10px] font-bold rounded-lg hover:bg-navy transition">
                Join
              </button>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="footer-title">Platform</h4>
            <ul className="footer-links">
              <li><Link href="/modules" className={pathname === '/modules' ? 'active-footer-link' : ''}>Modules</Link></li>
              <li><Link href="/features" className={pathname === '/features' ? 'active-footer-link' : ''}>Features</Link></li>
              <li><Link href="/pricing" className={pathname === '/pricing' ? 'active-footer-link' : ''}>Pricing</Link></li>
              <li><Link href="/why-tuoora" className={pathname === '/why-tuoora' ? 'active-footer-link' : ''}>Why Tuoora</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              <li><Link href="/faq" className={pathname === '/faq' ? 'active-footer-link' : ''}>Help Center (FAQ)</Link></li>
              <li><Link href="/contact" className={pathname === '/contact' ? 'active-footer-link' : ''}>Contact Support</Link></li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
              <li><a href="mailto:support@tuoora.com">support@tuoora.com</a></li>
              <li><a href="tel:+919876543210">+91 98765 43210</a></li>
              <li><span className="text-gray-400">Gujarat, India</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-50 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
            © {new Date().getFullYear()} Tuoora Technologies
          </p>

          <div className="flex gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <a href="#" className="footer-bottom-link">Privacy</a>
            <a href="#" className="footer-bottom-link">Terms</a>
            <a href="#" className="footer-bottom-link">Refund</a>
          </div>

        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .footer-title {
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #0f172a;
          margin-bottom: 20px;
          opacity: 0.8;
        }

        .footer-links li {
          margin-bottom: 8px;
        }

        .footer-links li a,
        .footer-links li span {
          display: inline-block;
          font-size: 11px;
          color: #64748b;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .footer-links li a:hover,
        .active-footer-link {
          color: #FF6B00 !important;
          transform: translateX(6px);
        }

        .footer-bottom-link:hover {
          color: #FF6B00;
        }
      `}</style>

    </footer>
  );
}
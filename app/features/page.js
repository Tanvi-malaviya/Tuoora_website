'use client'
import { useState } from 'react';
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PowerSection from "@/components/PowerSection";

export default function FeaturesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <main className="pt-22 pb-12">
        {/* Features Hero */}
        <section className="section-container text-center mb-5">
          <div className=" inline-block rounded-full bg-primary/5 px-4 py-1 text-xs font-bold text-primary uppercase tracking-[0.3em] border border-primary/10">
            Platform Capabilities
          </div>
          <h1 className="text-5xl font-bold text-navy tracking-tighter mb-4 sm:text-7xl">
            Everything you need to <br />
            <span className="text-primary">Scale</span> your Institute.
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm font-light leading-relaxed">
            Explore the deep architectural features of Tuoora ERP and FeeEasy App.
            Designed for high-density management and seamless parent engagement.
          </p>
        </section>

        {/* Categories Grid */}
        <section className="section-container mb-16">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCategory
              icon="👥"
              title="Student Management"
              features={[
                "Student Homework & Daily Diary",
                "Biometric-ready Attendance",
                "Detailed Academic Profiles",
                "Performance Analytics",
                "Automated ID Card Generation"
              ]}
            />
            <FeatureCategory
              icon="💰"
              title="Financial Suite"
              features={[
                "WhatsApp Fee Reminders",
                "GST-Compliant Invoicing",
                "Partial Payment Tracking",
                "Expense Categorization",
                "Daily Revenue Snapshots"
              ]}
            />
            <FeatureCategory
              icon="📱"
              title="Mobile Ecosystem"
              features={[
                "Exam Results & Digital Report Cards",
                "Real-time Attendance Push Notifications",
                "Online Fee Payment (UPI/Card/NetBanking)",
                "Digital Leave Requests for Parents",
                "Institute Gallery & Event Highlights"
              ]}
            />
          </div>
        </section>

        <PowerSection />

        {/* Unique Animated CTA */}
        <section className="section-container pb-2 pt-4">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy p-8 lg:p-10 text-center">
            {/* Animated Background Elements */}
            <div className="absolute -top-24 -left-24 h-64 w-64 bg-primary/20 rounded-full blur-[80px] animate-pulse"></div>
            <div className="absolute -bottom-24 -right-24 h-64 w-64 bg-primary/10 rounded-full blur-[80px] animate-pulse-delayed"></div>

            {/* Floating Particles (SVG) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg className="h-full w-full" viewBox="0 0 800 400">
                <circle cx="10%" cy="20%" r="2" fill="white" className="animate-float" />
                <circle cx="85%" cy="30%" r="1" fill="white" className="animate-float-delayed" />
                <circle cx="50%" cy="80%" r="3" fill="#FF6B00" className="animate-float" />
              </svg>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-1 block">Ready to start?</span>
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-5 tracking-tighter leading-tight">
                Experience the Future of <br />
                <span className="bg-gradient-to-r from-primary to-orange-300 bg-clip-text text-transparent italic">Institutional Management</span>
              </h2>

              <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="group relative px-10 py-3.5 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-2xl shadow-primary/40 hover:scale-105 transition-all overflow-hidden"
                >
                  <span className="relative z-10">Request Free Demo</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-xl border-4 border-primary/50 animate-ping opacity-20"></div>
                </button>

                <Link 
                  href="/contact"
                  className="px-9 py-3.5 bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  Chat with Expert
                </Link>
              </div>

              <p className="mt-4 text-xs text-white/40 font-medium tracking-wide">
                Join 500+ Institutes Growing with Tuoora ERP. No Credit Card Required.
              </p>
            </div>

            <style jsx>{`
                 @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(-20px) translateX(10px); }
                 }
                 @keyframes float-delayed {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(20px) translateX(-15px); }
                 }
                 .animate-float { animation: float 8s ease-in-out infinite; }
                 .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
                 .animate-pulse-delayed { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 2s; }
              `}</style>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FeatureCategory({ icon, title, features }) {
  return (
    <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{icon}</div>
      <h3 className="text-lg font-bold text-navy mb-4 tracking-tight">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className="h-1.5 w-1.5 rounded-full bg-primary/30"></div>
            <span className="text-sm text-gray-500 font-medium">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

'use client';
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-6 pb-12 lg:pt-16 lg:pb-20 border-b border-gray-50 overflow-hidden">
      <div className="section-container grid gap-12 lg:grid-cols-2 lg:items-center relative z-10">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1.5 text-[10px] font-black text-primary uppercase tracking-widest border border-primary/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Smart Institute Management
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-navy leading-[1.05] mb-4 tracking-tighter">
            The Ultimate <br />
            <span className="text-primary">Ecosystem</span> for <br />
            Education Growth.
          </h1>
          <p className="text-gray-500 mb-8 max-w-lg text-sm sm:text-base leading-relaxed font-light">
            A unified <strong>Tuoora</strong> Web Portal for administrators and <strong>FeeEasy</strong> Mobile App 
            for parents. Manage everything from admissions to finances in a single high-density interface.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-10 py-4 bg-primary text-white text-[11px] shadow-2xl shadow-primary/30 font-black uppercase tracking-widest rounded-xl hover:bg-navy transition-all active:scale-95 text-center">
               Get Started
            </button>
            <Link href="/features" className="px-10 py-4 border border-gray-100 bg-white text-[11px] hover:border-primary/20 font-black uppercase tracking-widest rounded-xl text-navy text-center transition-all">
               View Features
            </Link>
          </div>
        </div>

        <div className="relative hidden lg:block">
          {/* Main Card with high-density mockup elements */}
          <div className="aspect-[4/3] sm:aspect-square max-w-md mx-auto rounded-[2.5rem] bg-gradient-to-br from-primary to-orange-400 p-1 shadow-2xl shadow-primary/20 rotate-3 animate-float">
            <div className="h-full w-full rounded-[2rem] bg-white p-6 flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <div className="h-5 w-32 bg-gray-50 rounded-full border border-gray-100"></div>
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">T</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 rounded-3xl bg-gray-50 p-4 border border-gray-100">
                  <div className="h-2 w-12 bg-primary/20 rounded mb-2"></div>
                  <div className="h-5 w-20 bg-primary/40 rounded"></div>
                </div>
                <div className="h-24 rounded-3xl bg-gray-50 p-4 border border-gray-100">
                  <div className="h-2 w-12 bg-green-200 rounded mb-2"></div>
                  <div className="h-5 w-20 bg-green-400 rounded"></div>
                </div>
              </div>
              <div className="flex-1 rounded-3xl bg-navy/[0.03] border border-dashed border-navy/10 flex flex-col items-center justify-center p-6">
                <div className="h-2 w-1/2 bg-navy/10 rounded-full mb-3"></div>
                <div className="h-2 w-1/3 bg-navy/10 rounded-full mb-6"></div>
                <div className="grid grid-cols-3 gap-3 w-full">
                  <div className="h-10 bg-white rounded-xl shadow-sm border border-gray-50"></div>
                  <div className="h-10 bg-white rounded-xl shadow-sm border border-gray-100"></div>
                  <div className="h-10 bg-white rounded-xl shadow-sm border border-gray-50"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtle accent blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        </div>
      </div>
      
      {/* Dynamic Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.02] -skew-x-12 translate-x-1/2 -z-10 pointer-events-none"></div>

      <style jsx>{`
         @keyframes float {
            0%, 100% { transform: rotate(3deg) translateY(0); }
            50% { transform: rotate(3deg) translateY(-20px); }
         }
         .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

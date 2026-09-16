export default function Security() {
  return (
    <section className="py-12 bg-slate-950 relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 z-0" />

      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.06] rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-sky-500/[0.03] rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-3 gap-4">
          
          {/* Security Card */}
          <div className="group relative p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -mr-8 -mt-8 blur-2xl group-hover:bg-primary/20 transition-colors"></div>
            <div className="relative z-10">
              <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4 border border-primary/20 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-2">Enterprise Security</h3>
              <p className="text-[10px] text-gray-400 font-light leading-relaxed">
                256-bit SSL encryption with automated redundant backups on Tier-4 data centers. Your data is isolated and protected.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-700"></div>
          </div>

          {/* Speed Card */}
          <div className="group relative p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -mr-8 -mt-8 blur-2xl group-hover:bg-primary/20 transition-colors"></div>
            <div className="relative z-10">
              <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4 border border-primary/20 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-2">Edge Performance</h3>
              <p className="text-[10px] text-gray-400 font-light leading-relaxed">
                Optimized for sub-second page loads even with high-density student records. Instant sync across Web and Mobile App.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-700"></div>
          </div>

          {/* Support Card */}
          <div className="group relative p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -mr-8 -mt-8 blur-2xl group-hover:bg-primary/20 transition-colors"></div>
            <div className="relative z-10">
              <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4 border border-primary/20 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-2">Institutional Support</h3>
              <p className="text-[10px] text-gray-400 font-light leading-relaxed">
                Dedicated Relationship Managers for every institute. Get technical assistance and onboarding help in real-time.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-700"></div>
          </div>

        </div>

        {/* Bottom Trust Badges */}
        <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
           {/* <div className="flex items-center gap-2 text-white">
              <div className="h-1 w-1 rounded-full bg-primary"></div>
              <span className="text-[8px] font-bold uppercase tracking-widest">ISO 27001 Certified</span>
           </div> */}
           <div className="flex items-center gap-2 text-white">
              <div className="h-1 w-1 rounded-full bg-primary"></div>
              <span className="text-[8px] font-bold uppercase tracking-widest">SSL Encrypted</span>
           </div>
           <div className="flex items-center gap-2 text-white">
              <div className="h-1 w-1 rounded-full bg-primary"></div>
              <span className="text-[8px] font-bold uppercase tracking-widest">GDPR Compliant</span>
           </div>
           <div className="flex items-center gap-2 text-white">
              <div className="h-1 w-1 rounded-full bg-primary"></div>
              <span className="text-[8px] font-bold uppercase tracking-widest">Weekly Backups</span>
           </div>
        </div>
      </div>
    </section>
  );
}

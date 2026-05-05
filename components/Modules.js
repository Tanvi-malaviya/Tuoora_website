'use client';

export default function Modules() {
  return (
    <section id="modules" className="py-12 bg-[#FDFDFD] overflow-hidden">
      <div className="section-container">

        <div className="relative grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Feature Stack */}
          <div className="relative z-10 space-y-8 pr-4">
            <div>
              <div className="inline-block rounded-full bg-primary/5 px-3 py-1 text-[8px] font-black text-primary uppercase tracking-[0.3em] mb-4 border border-primary/10">
                Next-Gen Infrastructure
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tighter leading-[1.1] mb-4">
                Redefining <br className="hidden sm:block" />
                <span className="text-primary">Institutional</span> Control.
              </h2>
            </div>

            <div className="space-y-4 relative">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-primary/10 to-transparent"></div>

              <div className="pl-10 relative group cursor-default">
                <div className="absolute left-1.5 top-2 h-3 w-3 rounded-full bg-white border-2 border-primary z-10 group-hover:scale-125 transition-transform"></div>
                <h3 className="text-base font-bold text-navy mb-1 tracking-tight">Smart Registry</h3>
                <p className="text-sm text-gray-400 font-light max-w-sm leading-relaxed">
                  High-density student database with real-time profile management and multi-branch sync.
                </p>
              </div>

              <div className="pl-10 relative group cursor-default">
                <div className="absolute left-1.5 top-2 h-3 w-3 rounded-full bg-white border-2 border-primary z-10 group-hover:scale-125 transition-transform"></div>
                <h3 className="text-base font-bold text-navy mb-1 tracking-tight">Financial Ledger</h3>
                <p className="text-sm text-gray-400 font-light max-w-sm leading-relaxed">
                  Automated fee tracking with smart ledger entries and integrated WhatsApp reminders.
                </p>
              </div>

              <div className="pl-10 relative group cursor-default">
                <div className="absolute left-1.5 top-2 h-3 w-3 rounded-full bg-white border-2 border-primary z-10 group-hover:scale-125 transition-transform"></div>
                <h3 className="text-base font-bold text-navy mb-1 tracking-tight">Attendance Intelligence</h3>
                <p className="text-sm text-gray-400 font-light max-w-sm leading-relaxed">
                  Batch-wise presence tracking with instant automated parent notifications and analytics.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: 3D Browser Mockup */}
          <div className="relative mt-12 lg:mt-0 lg:h-[400px] flex items-center lg:justify-end">
             {/* Glow Backdrop */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md h-full bg-primary/10 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>
             
             {/* 3D Mockup Container */}
             <div className="relative w-full max-w-xl transform lg:perspective-[2000px] lg:rotate-y-[-20deg] lg:rotate-x-[5deg] transition-all duration-700">
                <div className="relative rounded-[1.5rem] overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.25)] border border-white/60 bg-white p-1.5">
                   <div className="h-5 w-full bg-gray-50 flex items-center gap-1.5 px-4 border-b border-gray-100">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-400"></div>
                      <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
                      <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                   </div>
                   <div className="relative bg-gray-50 aspect-[16/10] overflow-hidden">
                      <img 
                        src="/image.png" 
                        alt="Tuoora Dashboard Preview" 
                        className="w-full h-full object-contain"
                      />
                   </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 right-0 lg:-right-4 bg-navy text-white px-4 py-2.5 rounded-2xl shadow-2xl z-20 scale-90 lg:scale-100 origin-right">
                   <div className="text-[8px] font-black tracking-widest opacity-50 mb-1 uppercase text-primary">Live Dashboard</div>
                   <div className="text-lg font-bold tracking-tight">Active Analytics</div>
                </div>

                <div className="absolute -bottom-6 left-0 lg:left-8 bg-white px-4 py-3 rounded-2xl shadow-2xl border border-gray-50 z-20 scale-90 lg:scale-100 origin-left hidden sm:flex items-center gap-3">
                   <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">📊</div>
                   <div>
                      <div className="text-[7px] font-black text-gray-400 uppercase tracking-widest leading-none mb-0.5">Efficiency</div>
                      <div className="text-base font-bold text-navy tracking-tight leading-none">98.4%</div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

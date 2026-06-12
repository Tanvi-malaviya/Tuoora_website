'use client';
import { Smartphone, ShieldCheck, BellRing } from 'lucide-react';

export default function MobileShowcase() {
  const cards = [
    {
      title: "Student Workspace",
      desc: "Empower students with instant access to their digital profiles, daily attendance logs, exam schedules, and downloadable study materials.",
      icon: Smartphone,
      gradient: "from-blue-500/10 to-indigo-500/5",
      iconColor: "text-blue-500",
      borderColor: "group-hover:border-blue-500/30"
    },
    {
      title: "Admin Dashboard",
      desc: "Monitor your institution on the go. View cash flow summaries, approve staff check-ins, track daily collections, and access live stats.",
      icon: ShieldCheck,
      gradient: "from-orange-500/10 to-amber-500/5",
      iconColor: "text-orange-500",
      borderColor: "group-hover:border-orange-500/30"
    },
    {
      title: "Automated Notifications",
      desc: "Leverage Firebase FCM push alerts and official WhatsApp Business Cloud API to send automated fee reminders and attendance absence alerts.",
      icon: BellRing,
      gradient: "from-emerald-500/10 to-teal-500/5",
      iconColor: "text-emerald-500",
      borderColor: "group-hover:border-emerald-500/30"
    }
  ];

  return (
    <section className="py-20 bg-[#FDFDFD] overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Content & Modern Stack */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-8">
             <div>
                <span className="inline-block rounded-full bg-primary/5 px-3 py-1 text-[8px] font-black text-primary uppercase tracking-[0.3em] mb-4 border border-primary/10">
                  Mobile Ecosystem
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tighter leading-[1.1] mb-4">
                  The Institutional <br />
                  Powerhouse in Your <span className="text-primary italic">Pocket.</span>
                </h2>
                <p className="text-sm text-gray-400 font-light max-w-xl leading-relaxed">
                  Tuoora offers dedicated applications for administrative control and student interactions. Carry your workspace, ledger records, and academic schedules wherever you go.
                </p>
             </div>

             <div className="space-y-4">
                {cards.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={idx} 
                      className="group flex gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                    >
                      <div className={`h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center ${item.iconColor} transition-transform duration-300 group-hover:scale-105`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-navy mb-1 tracking-tight group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-gray-400 font-medium leading-relaxed max-w-lg">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
             </div>
          </div>

          {/* RIGHT: Stylized Visual Mockup */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative h-[500px] flex items-center justify-center">
             {/* Glow Backdrop */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm h-full bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

             {/* Phone Container */}
             <div className="relative z-10 p-10 bg-white rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] border border-gray-50 overflow-visible">
                
                {/* SVG Decorative Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 300 400">
                   <path d="M150,200 L60,100" stroke="#FF6B00" strokeWidth="1.5" strokeDasharray="4,4" fill="none" className="opacity-20 animate-dash" />
                   <path d="M150,200 L240,120" stroke="#FF6B00" strokeWidth="1.5" strokeDasharray="4,4" fill="none" className="opacity-20 animate-dash" />
                   <path d="M150,200 L220,290" stroke="#FF6B00" strokeWidth="1.5" strokeDasharray="4,4" fill="none" className="opacity-20 animate-dash" />
                </svg>

                {/* Central Phone */}
                <div className="relative w-[180px] md:w-[200px] h-[360px] md:h-[400px] bg-slate-900 rounded-[2.2rem] md:rounded-[2.5rem] shadow-2xl border-[6px] md:border-[8px] border-slate-900 overflow-hidden">
                    {/* Dynamic Island */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-30"></div>
                    {/* Screenshot */}
                    <img src="/mobileshowcase.png" alt="Tuoora Mobile App UI" className="w-full h-full object-cover" />
                </div>

                {/* Floating Badges */}
                <div className="absolute top-8 left-0 -translate-x-8 bg-white px-3.5 py-1.5 rounded-xl shadow-lg border border-gray-100 hidden sm:flex items-center gap-1.5 animate-float">
                   <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                   <span className="text-[8px] font-black text-navy uppercase tracking-wider">WhatsApp Cloud API</span>
                </div>
                <div className="absolute top-20 right-0 translate-x-10 bg-white px-3.5 py-1.5 rounded-xl shadow-lg border border-gray-100 hidden sm:flex items-center gap-1.5 animate-float-delayed">
                   <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                   <span className="text-[8px] font-black text-navy uppercase tracking-wider">FCM Push Alerts</span>
                </div>
                <div className="absolute bottom-24 right-0 translate-x-12 bg-white px-3.5 py-1.5 rounded-xl shadow-lg border border-gray-100 hidden sm:flex items-center gap-1.5 animate-float">
                   <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                   <span className="text-[8px] font-black text-navy uppercase tracking-wider">Real-Time Sync</span>
                </div>
                <div className="absolute bottom-6 left-0 -translate-x-12 bg-navy text-white px-3.5 py-1.5 rounded-xl shadow-lg hidden sm:flex items-center gap-1.5 animate-float-delayed">
                   <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
                   <span className="text-[8px] font-black uppercase tracking-wider">Sanctum Secured</span>
                </div>

             </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float 4s ease-in-out infinite 1.5s; }
        .animate-dash { 
          stroke-dashoffset: 0;
          animation: dash 4s linear infinite; 
        }
      `}</style>
    </section>
  );
}

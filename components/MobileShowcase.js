'use client';

export default function MobileShowcase() {

  return (
    <section className="py-5 bg-white overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT: Content */}
          <div className="order-2 lg:order-1">
             <div className="mb-8">
                <h2 className="text-3xl lg:text-5xl font-bold text-navy leading-tight tracking-tight mb-4">
                  Manage Your Institution <br />
                  <span className="text-primary italic">Anytime, Anywhere</span> with.. <br />
                  Mobile Application
                </h2>
                <p className="text-sm text-gray-400 font-light max-w-xl leading-relaxed">
                  Tuoora ERP provides powerful Android and iOS mobile apps for students, teachers, parents, and administrators. Stay connected to your institute on the go.
                </p>
             </div>

             <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                {[
                  { 
                    title: "Students Login", 
                    features: ["View attendance", "Check exam results", "Access study materials", "Receive announcements"] 
                  },
                  { 
                    title: "Teacher Login", 
                    features: ["Mark attendance", "Upload assignments", "Manage classes", "Communicate with students"] 
                  },
                  { 
                    title: "Admin / Management Login", 
                    features: ["Monitor operations", "Track fees", "Access analytics", "Manage staff"] 
                  },
                  { 
                    title: "Institute Login", 
                    features: ["Android & iOS apps", "Academic Monitoring", "Staff Management", "Branch Operations"] 
                  }
                ].map((type, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center gap-2 mb-3">
                       <div className="h-5 w-5 rounded-full border border-primary flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                       </div>
                       <h4 className="text-sm font-bold text-navy tracking-tight uppercase group-hover:text-primary transition-colors">{type.title}</h4>
                    </div>
                    <ul className="space-y-1.5 pl-7">
                       {type.features.map((feat, j) => (
                         <li key={j} className="text-sm text-gray-400 font-medium flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                            {feat}
                         </li>
                       ))}
                    </ul>
                  </div>
                ))}
             </div>
          </div>

          {/* RIGHT: Stylized Visual */}
          <div className="order-1 lg:order-2 relative h-[480px] flex items-center justify-center">
             {/* Background Decorative Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

             {/* The Phone Container */}
             <div className="relative z-10 p-12 bg-white rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-gray-50 overflow-visible">
                
                {/* Connecting Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 300 400">
                   <path d="M150,200 L80,80" stroke="#FF6B00" strokeWidth="1" strokeDasharray="5,5" fill="none" className="opacity-20 animate-dash" />
                   <path d="M150,200 L220,100" stroke="#FF6B00" strokeWidth="1" strokeDasharray="5,5" fill="none" className="opacity-20 animate-dash" />
                   <path d="M150,200 L240,280" stroke="#FF6B00" strokeWidth="1" strokeDasharray="5,5" fill="none" className="opacity-20 animate-dash" />
                   <path d="M150,200 L60,320" stroke="#FF6B00" strokeWidth="1" strokeDasharray="5,5" fill="none" className="opacity-20 animate-dash" />
                </svg>

                {/* Central Phone */}
                <div className="relative w-[180px] h-[380px] bg-white rounded-[2rem] shadow-2xl border-[6px] border-navy overflow-hidden transform transition-transform duration-700">
                   <img src="/mobile-ui.png" alt="Mobile App UI" className="w-full h-full object-cover" />
                </div>

                {/* Floating Labels - Hidden on mobile to prevent overflow */}
                <div className="absolute top-4 left-0 -translate-x-10 bg-white px-4 py-2 rounded-xl shadow-xl border border-gray-50 hidden xl:flex items-center gap-2 animate-float">
                   <span className="text-[10px] font-black text-navy uppercase tracking-widest">Analytics</span>
                </div>
                <div className="absolute top-16 right-0 translate-x-12 bg-white px-4 py-2 rounded-xl shadow-xl border border-gray-100 hidden xl:flex items-center gap-2 animate-float-delayed">
                   <span className="text-[10px] font-black text-navy uppercase tracking-widest">Cloud Sync</span>
                </div>
                <div className="absolute bottom-24 right-0 translate-x-16 bg-white px-4 py-2 rounded-xl shadow-xl border border-gray-50 hidden xl:flex items-center gap-2 animate-float">
                   <span className="text-[10px] font-black text-navy uppercase tracking-widest">Collaborate</span>
                </div>
                <div className="absolute bottom-4 left-0 -translate-x-16 bg-navy text-white px-4 py-2 rounded-xl shadow-xl hidden xl:flex items-center gap-2 animate-float-delayed">
                   <span className="text-[10px] font-black uppercase tracking-widest">Secure Data</span>
                </div>
                <div className="absolute bottom-1/2 right-0 translate-x-20 translate-y-12 bg-white px-4 py-2 rounded-xl shadow-xl border border-gray-100 hidden xl:flex items-center gap-2 animate-float">
                   <span className="text-[10px] font-black text-navy uppercase tracking-widest">Real-time</span>
                </div>

             </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-float-delayed { animation: float 5s ease-in-out infinite 2s; }
        .animate-dash { 
          stroke-dashoffset: 0;
          animation: dash 3s linear infinite; 
        }
      `}</style>
    </section>
  );
}

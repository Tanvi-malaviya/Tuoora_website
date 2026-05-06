export default function WhyChooseUs() {
  const stats = [
    { label: "Institutes", value: "500+", desc: "Trusting Tuoora ERP daily." },
    { label: "Students", value: "100k+", desc: "Data managed securely." },
    { label: "Support", value: "24/7", desc: "Dedicated relationship managers." },
    { label: "Uptime", value: "99.9%", desc: "Reliable cloud infrastructure." }
  ];

  return (
    <section className="py-4 bg-white overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-6">
          <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em] mb-2 block">The Tuoora Edge</span>
          <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight leading-tight mb-2">
            Built for Institutional <br />
            <span className="text-primary italic">Excellence</span>
          </h2>
          <p className="text-xs text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            We don't just provide software; we provide a foundation for your growth. Join the digital revolution in education management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="relative p-5 rounded-[2rem] bg-white border border-gray-100 hover:border-primary/20 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.04)] transition-all duration-700 group flex flex-col items-center text-center overflow-hidden">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-gray-100 rounded-b-full group-hover:bg-primary group-hover:w-20 transition-all duration-500"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-3xl lg:text-4xl font-black text-navy mb-1 tracking-tighter group-hover:text-primary group-hover:scale-105 transition-all duration-500">
                  {stat.value}
                </div>
                
                <div className="inline-flex px-3 py-0.5 bg-gray-50 rounded-full border border-gray-100 mb-2 transition-colors group-hover:bg-primary/5 group-hover:border-primary/10">
                  <span className="text-[8px] font-black text-primary uppercase tracking-[0.2em]">{stat.label}</span>
                </div>
                
                <p className="text-[10px] text-gray-400 font-medium leading-relaxed max-w-[150px]">
                  {stat.desc}
                </p>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-primary/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        {/* Feature Grid - Trust Pillars */}
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
           <div className="flex gap-3 p-4 rounded-2xl border border-gray-100 bg-[#FDFDFD]">
              <div className="h-8 w-8 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-black">01</div>
              <div>
                 <h4 className="text-xs font-black text-navy uppercase tracking-wider mb-1">Institution First</h4>
                 <p className="text-[10px] text-gray-400 font-light leading-relaxed">Every feature is designed by understanding the real pain points of coaching owners and school principals.</p>
              </div>
           </div>
           <div className="flex gap-3 p-4 rounded-2xl border border-gray-100 bg-[#FDFDFD]">
              <div className="h-8 w-8 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-black">02</div>
              <div>
                 <h4 className="text-xs font-black text-navy uppercase tracking-wider mb-1">Zero Learning Curve</h4>
                 <p className="text-[10px] text-gray-400 font-light leading-relaxed">Our interface is so intuitive that your staff can start using it from day one without any heavy training.</p>
              </div>
           </div>
           <div className="flex gap-3 p-4 rounded-2xl border border-gray-100 bg-[#FDFDFD]">
              <div className="h-8 w-8 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-black">03</div>
              <div>
                 <h4 className="text-xs font-black text-navy uppercase tracking-wider mb-1">Future Ready</h4>
                 <p className="text-[10px] text-gray-400 font-light leading-relaxed">We constantly update our platform with the latest educational trends and regulatory compliance requirements.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="relative p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 group overflow-hidden text-center">
              {/* Background Number Decal */}
              <div className="absolute -bottom-4 -right-4 text-6xl font-black text-navy opacity-[0.03] group-hover:opacity-[0.06] transition-opacity uppercase tracking-tighter">
                {stat.label}
              </div>

              <div className="relative z-10">
                <div className="text-3xl font-black text-primary mb-1 tracking-tighter group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <h4 className="text-[9px] font-black text-navy uppercase tracking-[0.15em] mb-2">{stat.label}</h4>
                <p className="text-[10px] text-gray-400 font-light leading-relaxed">{stat.desc}</p>
              </div>
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

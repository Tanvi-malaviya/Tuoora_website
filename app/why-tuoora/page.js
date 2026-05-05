'use client';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function WhyTuoora() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-14 pb-8">
        {/* Hero Section */}
        <section className="section-container text-center mb-5 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-primary/5 blur-[80px] -z-10 rounded-full"></div>
          <span className="text-[9px] font-black pt-3 text-primary uppercase tracking-[0.3em] block">The Tuoora Philosophy</span>
          <h1 className="text-3xl lg:text-5xl font-bold text-navy tracking-tighter leading-tight">
            More than just Software. <br />
            <span className="text-primary italic">A Growth Partner.</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-xs font-light leading-relaxed">
            In a world of generic ERPs, Tuoora stands out by focusing on institutional excellence. 
            We don't just manage data; we empower decision-makers with high-density insights.
          </p>
        </section>

        {/* The 3 Pillars of Trust */}
        <section className="section-container mb-12">
          <div className="grid lg:grid-cols-3 gap-6">
            <TrustCard 
              icon="🛡️" 
              title="Ironclad Security" 
              desc="Bank-grade encryption, multi-tenant architecture, and daily automated cloud backups to keep your data secure."
            />
            <TrustCard 
              icon="⚡" 
              title="Lightning Speed" 
              desc="Zero-lag interface built for high-density data management. Handle 10k+ records in milliseconds without refresh."
            />
            <TrustCard 
              icon="🤝" 
              title="Dedicated Support" 
              desc="Personalized onboarding and a dedicated success manager for every institute. We grow when you grow."
            />
          </div>
        </section>

        {/* WHO IS IT FOR? - NEW CONTENT */}
        <section className="section-container mb-2 py-4 bg-[#FDFDFD] rounded-[2rem] border border-gray-50">
           <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight">Institutional Fit</h2>
              <p className="text-[11px] text-gray-400 mt-2">Tailored solutions for every scale of education.</p>
           </div>
           <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 border-l-2 border-primary bg-white shadow-sm">
                 <h4 className="text-xs font-black text-navy uppercase mb-2">Schools & Colleges</h4>
                 <p className="text-[10px] text-gray-400 leading-relaxed font-medium">Full ERP with fee management, exams, and teacher-parent connectivity.</p>
              </div>
              <div className="p-5 border-l-2 border-navy bg-white shadow-sm">
                 <h4 className="text-xs font-black text-navy uppercase mb-2">Coaching Institutes</h4>
                 <p className="text-[10px] text-gray-400 leading-relaxed font-medium">Batch management, student performance tracking, and bulk-reminder systems.</p>
              </div>
              <div className="p-5 border-l-2 border-primary bg-white shadow-sm">
                 <h4 className="text-xs font-black text-navy uppercase mb-2">Vocational Training</h4>
                 <p className="text-[10px] text-gray-400 leading-relaxed font-medium">Course scheduling, attendance tracking, and multi-branch synchronization.</p>
              </div>
           </div>
        </section>

        {/* ROI Breakdown */}
        <section className="bg-navy py-12 overflow-hidden relative">
          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl lg:text-4xl font-bold text-white mb-5 tracking-tight leading-tight">
                   Turning Costs into <br />
                   <span className="text-primary italic">Investments.</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                   <div className="flex gap-4 items-start">
                      <div className="h-8 w-8 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary font-bold text-base">80%</div>
                      <div>
                         <h4 className="text-white font-bold text-[10px] mb-1 uppercase tracking-wider">Time Saved</h4>
                         <p className="text-white/40 text-[9px] leading-relaxed">Automation of fee alerts saves 20+ hrs/week.</p>
                      </div>
                   </div>
                   <div className="flex gap-4 items-start">
                      <div className="h-8 w-8 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary font-bold text-base">35%</div>
                      <div>
                         <h4 className="text-white font-bold text-[10px] mb-1 uppercase tracking-wider">Revenue Up</h4>
                         <p className="text-white/40 text-[9px] leading-relaxed">Faster collections with multiple gateways.</p>
                      </div>
                   </div>
                   <div className="flex gap-4 items-start">
                      <div className="h-8 w-8 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary font-bold text-base">99%</div>
                      <div>
                         <h4 className="text-white font-bold text-[10px] mb-1 uppercase tracking-wider">Accuracy</h4>
                         <p className="text-white/40 text-[9px] leading-relaxed">Zero-error ledger and automated receipts.</p>
                      </div>
                   </div>
                   <div className="flex gap-4 items-start">
                      <div className="h-8 w-8 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary font-bold text-base">2X</div>
                      <div>
                         <h4 className="text-white font-bold text-[10px] mb-1 uppercase tracking-wider">Engagement</h4>
                         <p className="text-white/40 text-[9px] leading-relaxed">Parents stay informed via instant mobile alerts.</p>
                      </div>
                   </div>
                </div>
              </div>

              <div className="relative">
                 <div className="p-6 rounded-[1.5rem] bg-white/5 border border-white/10 backdrop-blur-xl">
                    <div className="text-center mb-6">
                       <div className="text-3xl font-black text-white mb-1">500+</div>
                       <div className="text-[9px] font-black text-primary uppercase tracking-[0.2em]">Institutes Onboard</div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                       <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                          <div className="text-white font-bold text-base mb-1">100k+</div>
                          <div className="text-[7px] text-white/40 uppercase font-black tracking-widest">Active Students</div>
                       </div>
                       <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                          <div className="text-white font-bold text-base mb-1">24/7</div>
                          <div className="text-[7px] text-white/40 uppercase font-black tracking-widest">Live Support</div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Roadmap - NEW CONTENT */}
        <section className="section-container py-12">
           <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                 <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight">The 3-Step Transformation</h2>
              </div>
              <div className="grid lg:grid-cols-3 gap-0 border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                 <div className="p-8 bg-white border-r border-gray-100 relative group">
                    <div className="text-primary font-black text-4xl opacity-10 absolute top-4 right-4">01</div>
                    <h4 className="text-sm font-black text-navy uppercase mb-3">Sync</h4>
                    <p className="text-[10px] text-gray-400 leading-relaxed">Import your existing student data in minutes with our smart bulk-upload tools.</p>
                 </div>
                 <div className="p-8 bg-surface border-r border-gray-100 relative group">
                    <div className="text-primary font-black text-4xl opacity-10 absolute top-4 right-4">02</div>
                    <h4 className="text-sm font-black text-navy uppercase mb-3">Launch</h4>
                    <p className="text-[10px] text-gray-400 leading-relaxed">Activate automated fee alerts and parent logins to bring your institute online.</p>
                 </div>
                 <div className="p-8 bg-white relative group">
                    <div className="text-primary font-black text-4xl opacity-10 absolute top-4 right-4">03</div>
                    <h4 className="text-sm font-black text-navy uppercase mb-3">Scale</h4>
                    <p className="text-[10px] text-gray-400 leading-relaxed">Use deep analytics to identify growth opportunities and optimize operations.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Future Proof Section */}
        <section className="section-container pb-12">
           <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl lg:text-4xl font-bold text-navy mb-6 tracking-tighter leading-tight">
                 We build for the <span className="text-primary">Next Decade</span> of Education.
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                 <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all group">
                    <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                    <h3 className="text-base font-bold text-navy mb-2">Modern Tech Stack</h3>
                    <p className="text-[10px] text-gray-500 leading-relaxed font-light">Using the same technologies that power giants like Google to ensure zero downtime and maximum security.</p>
                 </div>
                 <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all group">
                    <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">🎨</div>
                    <h3 className="text-base font-bold text-navy mb-2">User-Centric Design</h3>
                    <p className="text-[10px] text-gray-500 leading-relaxed font-light">Software that is as intuitive as your favorite social app. Zero training required for your staff.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Unique Animated CTA */}
        <section className="section-container pb-6 pt-4">
           <div className="relative overflow-hidden rounded-[2rem] bg-navy p-8 lg:p-10 text-center">
              <div className="absolute -top-24 -left-24 h-64 w-64 bg-primary/20 rounded-full blur-[80px] animate-pulse"></div>
              <div className="absolute -bottom-24 -right-24 h-64 w-64 bg-primary/10 rounded-full blur-[80px] animate-pulse"></div>
              <div className="relative z-10 max-w-3xl mx-auto">
                 <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] mb-1 block">Ready to start?</span>
                 <h2 className="text-2xl lg:text-4xl font-bold text-white mb-5 tracking-tighter leading-tight">
                    Experience the Future of <br />
                    <span className="bg-gradient-to-r from-primary to-orange-300 bg-clip-text text-transparent italic">Institutional Management</span>
                 </h2>
                 <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
                    <button className="group relative px-10 py-3.5 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-2xl shadow-primary/40 hover:scale-105 transition-all overflow-hidden">
                       <span className="relative z-10">Request Free Demo</span>
                       <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                       <div className="absolute inset-0 rounded-xl border-4 border-primary/50 animate-ping opacity-20"></div>
                    </button>
                    <button className="px-9 py-3.5 bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm">
                       Chat with Expert
                    </button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function TrustCard({ icon, title, desc }) {
  return (
    <div className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all group overflow-hidden relative">
      <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500 inline-block">{icon}</div>
      <h3 className="text-xl font-bold text-navy mb-4 tracking-tight">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed font-light">{desc}</p>
      {/* Decorative Accent */}
      <div className="absolute -bottom-2 -right-2 h-12 w-12 bg-primary/5 rounded-full group-hover:scale-[5] transition-transform duration-700"></div>
    </div>
  );
}

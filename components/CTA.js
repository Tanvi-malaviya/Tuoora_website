'use client';

export default function CTA() {
  return (
    <section className="relative py-10 bg-white overflow-hidden">
      
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-80px] right-[-40px] w-[300px] h-[300px] bg-navy/5 blur-[80px] rounded-full"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Glass Card */}
          <div className="relative rounded-3xl border border-gray-100 bg-white/70 backdrop-blur-xl  shadow-primary/10 px-8 py-10 md:px-12 text-center overflow-hidden">
            
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:30px_30px]"></div>

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white shadow-sm mb-4 animate-fade-in">
              <span className="h-1.5 w-1.5 bg-primary rounded-full animate-ping"></span>
              <span className="text-[9px] font-semibold text-gray-500 uppercase tracking-widest">
                Start Your Journey
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight tracking-tight mb-3">
              Upgrade Your Institute <br />
              <span className="relative inline-block">
                To Smart Management
                <span className="absolute left-0 -bottom-1 h-1 w-full bg-primary/30 rounded-full animate-width-grow"></span>
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed mb-6">
              Manage students, teachers, fees, and operations seamlessly with our modern system built for growing institutes.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              
              {/* Primary Button */}
              <button className="relative group px-10 py-3.5 bg-primary text-white rounded-xl text-xs font-bold tracking-widest overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 active:scale-95">
                <span className="relative z-10">Book Free Demo</span>
                <div className="absolute inset-0 bg-navy opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </button>

              {/* Secondary Button */}
              <button className="px-10 py-3.5 border border-gray-200 text-navy rounded-xl text-xs font-bold tracking-widest bg-white hover:bg-gray-50 transition-all duration-300 active:scale-95">
                Contact Sales
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes width-grow {
          from { width: 0; opacity: 0; }
          to { width: 100%; opacity: 1; }
        }

        .animate-fade-in {
          animation: fade-in 1s ease forwards;
        }

        .animate-width-grow {
          animation: width-grow 1.2s ease 0.4s forwards;
        }
      `}</style>
    </section>
  );
}
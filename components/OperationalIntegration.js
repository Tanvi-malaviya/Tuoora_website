"use client";

import { motion } from "framer-motion";

const benefitContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const benefitItem = {
  hidden: { opacity: 0, scale: 0.85, y: 25 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function OperationalIntegration() {
  const benefits = [
    "Student Management", "Staff & HR Management",
    "Branch & Batch Management", "Attendance Tracking",
    "Fees & Collections", "Exams & Assessments",
    "Announcements & Notifications", "Live Classes",
    "Website Manager", "Study Materials & E-Content"
  ];

  return (
    <section className="py-12 bg-[#FDFDFD] overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:items-center">

          {/* LEFT: Visual Mockup */}
          <div className="relative group order-2 lg:order-1">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] p-4 md:p-8 overflow-hidden">
              {/* Decorative Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-navy/5 opacity-50"></div>

              {/* Laptop & Mobile Illustration Area */}
              <div className="relative z-10 flex flex-col items-center w-full">
                <div className="relative w-full max-w-md my-6 aspect-[4/3]">
                  {/* Desktop Mockup */}
                  <div className="absolute top-0 left-0 w-[82%] rounded-xl bg-white border border-gray-200/80 shadow-2xl overflow-hidden transition-all duration-500 transform group-hover:-translate-y-1">
                    {/* Browser Header */}
                    <div className="bg-gray-50 border-b border-gray-100 px-3 py-1.5 flex flex-row items-center gap-1.5 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                      <div className="h-2.5 w-20 bg-gray-200/50 rounded-sm ml-2 hidden sm:block"></div>
                    </div>
                    {/* Screenshot */}
                    <div className="relative bg-gray-50 overflow-hidden">
                      <img src="/image.png" alt="Tuoora ERP Dashboard" className="w-full h-auto block" />
                    </div>
                  </div>

                  {/* Mobile Mockup */}
                  <div className="absolute right-0 bottom-4 w-[35%] z-20 transition-all duration-700 transform group-hover:scale-105 group-hover:-translate-y-2 animate-float">
                    {/* Phone frame */}
                    <div className="relative rounded-[1.5rem] md:rounded-[2.2rem] border-[5px] md:border-[7px] border-slate-900 bg-slate-900 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] overflow-hidden aspect-[9/19]">
                      {/* Dynamic Island */}
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 md:w-12 h-2 md:h-3 bg-black rounded-full z-30"></div>
                      {/* Screenshot */}
                      <div className="w-full h-full bg-gray-900 overflow-hidden">
                        <img src="/mobile-dashboard.png" alt="Tuoora Mobile Dashboard" className="w-full h-full object-cover object-top" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Labels */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-primary/20 hidden xl:flex items-center gap-2 animate-bounce-slow z-30">
                  <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-[10px] font-black text-navy uppercase tracking-widest">Automate</span>
                </div>

                <div className="absolute top-1/3 -right-4 bg-navy/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/10 hidden xl:flex items-center gap-2 animate-float z-30">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Collaborate</span>
                </div>

                <div className="absolute bottom-12 left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-gray-100 hidden xl:flex items-center gap-2 animate-float-delayed z-30">
                  <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></div>
                  <span className="text-[10px] font-black text-navy uppercase tracking-widest">Audit</span>
                </div>

                <div className="mt-4 text-center">
                  <h4 className="text-lg font-black text-navy tracking-[0.2em] uppercase leading-tight">
                    Complete <br />
                    <span className="text-primary">Operational</span> Integration
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Content & Benefits */}
          <motion.div
            className="lg:pl-8 order-1 lg:order-2 text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* Heading Area */}
            <div className="mb-8">
              <motion.span
                variants={{
                  hidden: { opacity: 0, x: 40 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                }}
                className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-3 block"
              >
                Why Modern Institutes Need ERP
              </motion.span>

              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black text-navy leading-[1.1] tracking-tight mb-4 overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  One Software for Complete
                </motion.span>
                <br className="hidden sm:block"/>
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-primary italic"
                >
                  Institute Operations
                </motion.span>
              </h2>

              <motion.p
                variants={{
                  hidden: { opacity: 0, filter: "blur(8px)" },
                  visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.8, delay: 0.3 } }
                }}
                className="text-sm sm:text-base text-gray-400 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                Stop struggling with multiple tools. Tuoora brings everything under one roof, helping you focus on education while we handle the rest.
              </motion.p>
            </div>

            {/* Benefits */}
            <motion.div
              variants={benefitContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={benefitItem}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100 group hover:bg-white hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Hover Light Sweep */}
                  <motion.div
                    initial={{ x: "-120%" }}
                    whileHover={{ x: "120%" }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent"
                  />

                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative z-10 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>

                  <span className="relative z-10 text-xs font-bold text-navy tracking-tight group-hover:text-primary transition-colors">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-float-delayed { animation: float 6s ease-in-out infinite 1s; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

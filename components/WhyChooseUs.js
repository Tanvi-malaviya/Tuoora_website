'use client';

import { useEffect, useState, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

function CountUp({ to, from = 0, duration = 2, decimals = 0, suffix = "" }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate: (value) => setCount(value)
      });
      return () => controls.stop();
    }
  }, [isInView, to, from, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const stats = [
    { label: "Institutes", value: 10, suffix: "+", desc: "Trusting Tuoora ERP daily." },
    { label: "Students", value: 10000, suffix: "+", desc: "Data managed securely." },
    { label: "Support", value: 24, suffix: "/7", desc: "Dedicated relationship managers." },
    { label: "Uptime", value: 100, from: 90, suffix: "%", desc: "Reliable cloud infrastructure." }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <div className="section-container">
        
        {/* Premium Section Header */}
        <motion.div
          className="relative text-center mb-14 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Background Aura */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-[90px]"
          />

          {/* Floating Accent Dots */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute left-[25%] top-8 w-2 h-2 rounded-full bg-primary/40"
          />

          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute right-[25%] bottom-8 w-3 h-3 rounded-full bg-orange-400/40"
          />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 shadow-lg shadow-primary/10 mb-5 relative"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-[9px] font-black text-primary uppercase tracking-[0.35em]">
              The Tuoora Edge
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="relative text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-[1.15] mb-5"
          >
            {/* Line 1 */}
            <span className="block overflow-hidden pb-2">
              <motion.span
                variants={{
                  hidden: { y: 80, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
                className="inline-block"
              >
                Built for Institutional
              </motion.span>
            </span>

            {/* Line 2 */}
            <span className="block overflow-hidden pb-2">
              <motion.span
                variants={{
                  hidden: { y: 80, opacity: 0, rotateX: 45 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
                style={{ transformPerspective: 800 }}
                className="inline-block relative text-primary italic"
              >
                Excellence

                {/* Shine */}
                <motion.span
                  initial={{ x: "-120%" }}
                  whileInView={{ x: "120%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-12"
                />
              </motion.span>
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-sm text-gray-400 font-light max-w-2xl mx-auto leading-relaxed"
          >
            We don't just provide software; we provide a foundation for your growth.
            Join the digital revolution in education management.
          </motion.p>

          {/* Bottom Glass Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "140px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-[2px] mx-auto mt-8 bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </motion.div>

        {/* Stats Grid with 3D card tilt & staggered entrance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          style={{ perspective: "1000px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 45, rotateX: 15 },
                visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
              }}
              whileHover={{
                y: -10,
                rotateX: 6,
                rotateY: -6,
                boxShadow: "0 30px 60px rgba(15,23,42,0.08)",
                borderColor: "rgba(255,107,38,0.2)"
              }}
              className="relative p-6 rounded-[2rem] bg-white border border-gray-100 transition-all duration-300 group flex flex-col items-center text-center overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-gray-100 rounded-b-full group-hover:bg-primary group-hover:w-20 transition-all duration-300"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                {/* Dynamic count up */}
                <div className="text-3xl lg:text-4xl font-black text-navy mb-1 tracking-tighter group-hover:text-primary transition-colors duration-300">
                  <CountUp
                    to={stat.value}
                    from={stat.from || 0}
                    decimals={stat.decimals || 0}
                    suffix={stat.suffix}
                  />
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
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Grid - Trust Pillars with staggered hover shift */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 }
            }
          }}
          className="mt-12 grid lg:grid-cols-3 gap-6"
        >
          {[
            {
              num: "01",
              title: "Institution First",
              desc: "Every feature is designed by understanding the real pain points of coaching owners and school principals."
            },
            {
              num: "02",
              title: "Zero Learning Curve",
              desc: "Our interface is so intuitive that your staff can start using it from day one without any heavy training."
            },
            {
              num: "03",
              title: "Future Ready",
              desc: "We constantly update our platform with the latest educational trends and regulatory compliance requirements."
            }
          ].map((pillar, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              whileHover={{ y: -6, borderColor: "rgba(255,107,38,0.15)", boxShadow: "0 15px 30px rgba(0,0,0,0.03)" }}
              className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-[#FDFDFD] transition-all duration-300"
            >
              <div className="h-9 w-9 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-black">
                {pillar.num}
              </div>
              <div>
                <h4 className="text-xs font-black text-navy uppercase tracking-wider mb-1">
                  {pillar.title}
                </h4>
                <p className="text-[10px] text-gray-400 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

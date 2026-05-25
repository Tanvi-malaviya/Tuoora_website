'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Briefcase, BookOpen, LineChart, Cpu, Database } from "lucide-react";

const modules = [
  {
    title: "Student Registry",
    desc: "Bio-Attendance & Growth",
    stat: "2.5k+ active",
    icon: User,
    badge: "Bio-ready",
    accentColor: "#6366f1",
    panelContent: {
      title: "Real-time Student Registry",
      details: [
        { label: "Active Nodes", val: "14 Connected" },
        { label: "Biometric Latency", val: "0.2s Latency" },
        { label: "Daily Logs Status", val: "99.9% Success" }
      ]
    }
  },
  {
    title: "Staff Logic",
    desc: "Payroll & Leaves",
    stat: "100% automated",
    icon: Briefcase,
    badge: "Automation",
    accentColor: "#0ea5e9",
    panelContent: {
      title: "Staff Allocation Hub",
      details: [
        { label: "Payroll Run", val: "Auto-processed" },
        { label: "Leave Requests", val: "Self-approving" },
        { label: "Attendance Log", val: "18 Active Staff" }
      ]
    }
  },
  {
    title: "Academic Engine",
    desc: "Batch & Resource Control",
    stat: "Real-time sync",
    icon: BookOpen,
    badge: "Sync Control",
    accentColor: "#FF6B00",
    panelContent: {
      title: "Academic Schedule Manager",
      details: [
        { label: "Timetable Status", val: "Conflict-free" },
        { label: "Batch Load", val: "48 Batches Active" },
        { label: "Resource Sync", val: "Auto-allocated" }
      ]
    }
  },
  {
    title: "Deep Analytics",
    desc: "Retention & Growth",
    stat: "AI Insights",
    icon: LineChart,
    badge: "Predictive",
    accentColor: "#10b981",
    panelContent: {
      title: "Retention Analytics Suite",
      details: [
        { label: "AI Forecast", val: "+14.8% growth" },
        { label: "Alert Triggers", val: "0 active issues" },
        { label: "Fee Collection", val: "89% efficiency" }
      ]
    }
  }
];

export default function PowerSection() {
  const [activeModule, setActiveModule] = useState(null);

  const activeData = activeModule !== null ? modules[activeModule] : null;

  return (
    <section className="section-container py-16 relative overflow-hidden px-4">
      {/* Background Tech Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-navy/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT: Redesigned for Uniqueness */}
        <div className="relative z-10">
          <span className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-2.5 block">Administrative Powerhouse</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-4 leading-tight">
            The Engine of <br />
            <span className="text-primary italic font-black">Institutional Control.</span>
          </h2>
          <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-lg mb-8">
            Tuoora's administrative core is engineered for extreme performance. Handle thousands of students, multiple branches, and complex financial logic with sub-second precision.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {modules.map((mod, index) => (
              <ModuleCard
                key={index}
                title={mod.title}
                desc={mod.desc}
                stat={mod.stat}
                icon={mod.icon}
                accentColor={mod.accentColor}
                isActive={activeModule === index}
                onMouseEnter={() => setActiveModule(index)}
                onMouseLeave={() => setActiveModule(null)}
              />
            ))}
          </div>
        </div>

        {/* RIGHT VISUAL: The Cybernetic Telemetry HUD */}
        <div className="relative z-10">
          <div className="bg-slate-900 border border-slate-800 text-white rounded-[2rem] p-6 h-[400px] flex flex-col justify-between relative overflow-hidden shadow-2xl">
            {/* Blinking Top Status Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Tuoora Telemetry Stream</span>
              </div>
              <span className="text-[9px] font-black font-mono text-slate-500">SYS_V2.0.4</span>
            </div>

            {/* SVG Network Hub Grid */}
            <div className="relative w-full max-w-[400px] h-[200px] mx-auto my-auto flex items-center justify-center">
              <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 400 200" fill="none">
                {/* Connection lines from center (200, 100) to endpoints */}
                <path 
                  d="M 200 100 L 60 50" 
                  stroke={activeModule === 0 ? "#6366f1" : "#334155"} 
                  strokeWidth={activeModule === 0 ? "3" : "1.5"}
                  strokeDasharray={activeModule === 0 ? "8 4" : "none"}
                  className={`transition-all duration-300 ${activeModule === 0 ? "animate-dash" : "opacity-40"}`}
                />
                <path 
                  d="M 200 100 L 340 50" 
                  stroke={activeModule === 1 ? "#0ea5e9" : "#334155"} 
                  strokeWidth={activeModule === 1 ? "3" : "1.5"}
                  strokeDasharray={activeModule === 1 ? "8 4" : "none"}
                  className={`transition-all duration-300 ${activeModule === 1 ? "animate-dash" : "opacity-40"}`}
                />
                <path 
                  d="M 200 100 L 60 150" 
                  stroke={activeModule === 2 ? "#FF6B00" : "#334155"} 
                  strokeWidth={activeModule === 2 ? "3" : "1.5"}
                  strokeDasharray={activeModule === 2 ? "8 4" : "none"}
                  className={`transition-all duration-300 ${activeModule === 2 ? "animate-dash" : "opacity-40"}`}
                />
                <path 
                  d="M 200 100 L 340 150" 
                  stroke={activeModule === 3 ? "#10b981" : "#334155"} 
                  strokeWidth={activeModule === 3 ? "3" : "1.5"}
                  strokeDasharray={activeModule === 3 ? "8 4" : "none"}
                  className={`transition-all duration-300 ${activeModule === 3 ? "animate-dash" : "opacity-40"}`}
                />
              </svg>

              {/* Central Database Nucleus */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-ping"></div>
                  <div className="h-14 w-14 rounded-full bg-slate-950 border-2 border-primary flex items-center justify-center text-primary shadow-lg relative z-10">
                    <Database className="w-6 h-6 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Node 0: Student Registry */}
              <div 
                className="absolute left-10 top-[30px] rounded-xl p-2 border transition-all duration-300 w-10 h-10 flex items-center justify-center"
                style={{
                  borderColor: activeModule === 0 ? '#6366f1' : '#334155',
                  background: activeModule === 0 ? '#6366f115' : '#0f172a',
                  boxShadow: activeModule === 0 ? '0 0 15px #6366f130' : ''
                }}
              >
                <User className="w-5 h-5 transition-colors" style={{ color: activeModule === 0 ? '#6366f1' : '#64748b' }} />
              </div>

              {/* Node 1: Staff Logic */}
              <div 
                className="absolute right-10 top-[30px] rounded-xl p-2 border transition-all duration-300 w-10 h-10 flex items-center justify-center"
                style={{
                  borderColor: activeModule === 1 ? '#0ea5e9' : '#334155',
                  background: activeModule === 1 ? '#0ea5e915' : '#0f172a',
                  boxShadow: activeModule === 1 ? '0 0 15px #0ea5e930' : ''
                }}
              >
                <Briefcase className="w-5 h-5 transition-colors" style={{ color: activeModule === 1 ? '#0ea5e9' : '#64748b' }} />
              </div>

              {/* Node 2: Academic Engine */}
              <div 
                className="absolute left-10 bottom-[30px] rounded-xl p-2 border transition-all duration-300 w-10 h-10 flex items-center justify-center"
                style={{
                  borderColor: activeModule === 2 ? '#FF6B00' : '#334155',
                  background: activeModule === 2 ? '#FF6B0015' : '#0f172a',
                  boxShadow: activeModule === 2 ? '0 0 15px #FF6B0030' : ''
                }}
              >
                <BookOpen className="w-5 h-5 transition-colors" style={{ color: activeModule === 2 ? '#FF6B00' : '#64748b' }} />
              </div>

              {/* Node 3: Deep Analytics */}
              <div 
                className="absolute right-10 bottom-[30px] rounded-xl p-2 border transition-all duration-300 w-10 h-10 flex items-center justify-center"
                style={{
                  borderColor: activeModule === 3 ? '#10b981' : '#334155',
                  background: activeModule === 3 ? '#10b98115' : '#0f172a',
                  boxShadow: activeModule === 3 ? '0 0 15px #10b98130' : ''
                }}
              >
                <LineChart className="w-5 h-5 transition-colors" style={{ color: activeModule === 3 ? '#10b981' : '#64748b' }} />
              </div>
            </div>

            {/* Bottom Swappable Panel */}
            <div className="h-28 flex flex-col justify-end">
              <AnimatePresence mode="wait">
                {activeData ? (
                  <motion.div
                    key={activeData.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 bg-slate-950/70 border border-slate-800 rounded-2xl relative"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: activeData.accentColor }}>
                        {activeData.panelContent.title}
                      </h4>
                      <span className="text-[9px] font-black uppercase bg-white/10 px-2 py-0.5 rounded text-slate-300 tracking-wider">
                        {activeData.badge}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {activeData.panelContent.details.map((detail, idx) => (
                        <div key={idx} className="p-2 bg-slate-900/50 border border-slate-800/40 rounded-xl">
                          <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">{detail.label}</p>
                          <p className="text-xs font-semibold text-slate-200 mt-1">{detail.val}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 bg-slate-950/70 border border-slate-800 rounded-2xl"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
                        SYSTEM STATUS: ACTIVE
                      </h4>
                      <span className="flex items-center gap-1 text-[9px] font-black text-emerald-400 uppercase tracking-widest">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                        OPERATIONAL
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2 bg-slate-900/50 border border-slate-800/40 rounded-xl">
                        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Global Latency</p>
                        <p className="text-xs font-semibold text-slate-200 mt-1">12ms</p>
                      </div>
                      <div className="p-2 bg-slate-900/50 border border-slate-800/40 rounded-xl">
                        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">API Requests</p>
                        <p className="text-xs font-semibold text-slate-200 mt-1">99.98% OK</p>
                      </div>
                      <div className="p-2 bg-slate-900/50 border border-slate-800/40 rounded-xl">
                        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Cloud Modules</p>
                        <p className="text-xs font-semibold text-slate-200 mt-1">4 Connected</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Global CSS Styles for Dash Animation */}
      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .animate-dash {
          animation: dash 1s linear infinite;
        }
      `}</style>
    </section>
  );
}

function ModuleCard({ title, desc, stat, icon: Icon, accentColor, isActive, onMouseEnter, onMouseLeave }) {
  return (
    <div 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`p-4 rounded-2xl bg-white border transition-all duration-300 cursor-pointer group relative overflow-hidden flex flex-col justify-between ${
        isActive 
          ? 'shadow-lg scale-[1.03]' 
          : 'border-slate-100 shadow-sm hover:border-slate-200'
      }`}
      style={{
        borderColor: isActive ? accentColor : '',
        boxShadow: isActive ? `0 10px 15px -3px ${accentColor}10, 0 4px 6px -4px ${accentColor}10` : ''
      }}
    >
      {/* Background Accent Glow */}
      <div 
        className="absolute top-0 right-0 w-10 h-10 rounded-full blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-10"
        style={{ backgroundColor: accentColor }}
      ></div>

      <div className="flex items-center gap-2.5 mb-2.5">
        <div 
          className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
          style={{ 
            backgroundColor: isActive ? `${accentColor}15` : '#f8fafc',
            color: isActive ? accentColor : '#64748b',
            border: isActive ? `1px solid ${accentColor}30` : '1px solid #f1f5f9'
          }}
        >
          <Icon className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-[10px] font-bold text-navy uppercase tracking-wider leading-none">{title}</h4>
          <div 
            className="h-0.5 w-3 rounded-full mt-1.5 transition-all duration-300"
            style={{ 
              backgroundColor: isActive ? accentColor : '#cbd5e1',
              width: isActive ? '16px' : '12px'
            }}
          ></div>
        </div>
      </div>

      <p className="text-xs font-bold text-slate-500 leading-normal mb-2">
        {desc}
      </p>

      <div className="flex items-center gap-1.5">
        <div 
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ backgroundColor: isActive ? accentColor : '#94a3b8' }}
        ></div>
        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{stat}</span>
      </div>
    </div>
  );
}
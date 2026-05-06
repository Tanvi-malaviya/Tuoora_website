'use client'
import { motion } from "framer-motion";

export default function PowerSection() {
    return (
        <section className="section-container py-10 relative overflow-hidden">
            {/* Background Tech Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-navy/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="grid lg:grid-cols-2 gap-6 items-center">
                {/* LEFT CONTENT: Redesigned for Uniqueness */}
                <div className="relative z-10">
                    <span className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-2 block">Administrative Powerhouse</span>
                    <h2 className="text-4xl lg:text-5xl font-black text-navy tracking-tight mb-2 leading-tight">
                        The Engine of <br />
                        <span className="text-primary italic">Institutional Control.</span>
                    </h2>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-lg mb-4">
                        Tuoora's administrative core is engineered for extreme performance. Handle thousands of students, multiple branches, and complex financial logic with sub-second precision.
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                        <ModuleCard
                            icon="👤"
                            title="Student Registry"
                            desc="Bio-Attendance & Growth"
                            accent="primary"
                            stat="2.5k+ active"
                        />
                        <ModuleCard
                            icon="👔"
                            title="Staff Logic"
                            desc="Payroll & Leaves"
                            accent="navy"
                            stat="100% automated"
                        />
                        <ModuleCard
                            icon="📚"
                            title="Academic Engine"
                            desc="Batch & Resource Control"
                            accent="primary"
                            stat="Real-time sync"
                        />
                        <ModuleCard
                            icon="📈"
                            title="Deep Analytics"
                            desc="Retention & Growth"
                            accent="navy"
                            stat="AI Insights"
                        />
                    </div>
                </div>

                {/* RIGHT VISUAL: The 3D Layered Stack */}
                <div className="relative h-[380px] flex items-center justify-center">
                    <div className="relative w-full max-w-[400px] aspect-square">

                        {/* Layer 3: Analytics (Bottom) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, rotateX: 45, rotateZ: -10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 45, rotateZ: -10 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="absolute top-32 left-8 w-[80%] h-[160px] bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-5 z-10"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="h-1.5 w-12 bg-gray-100 rounded"></div>
                                <div className="h-3 w-3 bg-primary/20 rounded-full"></div>
                            </div>
                            <div className="grid grid-cols-4 items-end gap-1.5 h-14">
                                {[40, 70, 45, 90, 60, 85, 50, 95].map((h, i) => (
                                    <div key={i} style={{ height: `${h}%` }} className="bg-primary/20 rounded-t-md"></div>
                                ))}
                            </div>
                            <p className="mt-3 text-[9px] font-black text-navy uppercase tracking-widest opacity-30">Growth Metrics</p>
                        </motion.div>

                        {/* Layer 2: Revenue (Middle) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, rotateX: 45, rotateZ: -10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 45, rotateZ: -10 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="absolute top-16 left-16 w-[80%] h-[160px] bg-navy rounded-[2rem] shadow-2xl p-5 z-20 border border-white/10"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center text-white text-xs">💰</div>
                                <div>
                                    <h4 className="text-white text-xs font-bold">Revenue</h4>
                                    <p className="text-primary text-[9px] font-black tracking-widest">+24.5%</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-2/3"></div>
                                </div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-white/20 w-1/2"></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Layer 1: Admin Interface (Top) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, rotateX: 45, rotateZ: -10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 45, rotateZ: -10 }}
                            transition={{ duration: 0.8 }}
                            className="absolute top-0 left-24 w-[80%] h-[160px] bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-5 z-30 flex flex-col justify-between"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-base shadow-inner">👤</div>
                                <div>
                                    <h4 className="text-navy text-xs font-black uppercase tracking-tight">Super Admin</h4>
                                    <div className="flex gap-1 mt-0.5">
                                        <div className="h-1 w-3 bg-primary rounded-full"></div>
                                        <div className="h-1 w-6 bg-gray-100 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 bg-primary/5 rounded-xl flex items-center justify-between">
                                <span className="text-[10px] font-bold text-navy uppercase tracking-widest">Syncing...</span>
                                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ModuleCard({ icon, title, desc, accent, stat }) {
    const isPrimary = accent === 'primary';

    return (
        <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-primary/30 hover:shadow-xl transition-all group overflow-hidden relative">
            {/* Background Accent Glow */}
            <div className={`absolute top-0 right-0 w-10 h-10 rounded-full blur-xl opacity-5 transition-opacity group-hover:opacity-20 ${isPrimary ? 'bg-primary' : 'bg-navy'}`}></div>

            <div className="flex items-center gap-2.5 mb-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-base shadow-sm border border-gray-50 group-hover:scale-105 transition-transform ${isPrimary ? 'bg-primary/5' : 'bg-navy/5'}`}>
                    {icon}
                </div>
                <div>
                    <h4 className="text-[10px] font-black text-navy uppercase tracking-widest leading-none">{title}</h4>
                    <div className={`h-0.5 w-3 rounded-full mt-1 ${isPrimary ? 'bg-primary' : 'bg-navy'}`}></div>
                </div>
            </div>

            <p className="text-sm font-bold text-gray-500 uppercase tracking-tight leading-normal mb-2">
                {desc}
            </p>

            <div className="flex items-center gap-1.5">
                <div className={`w-1 h-1 rounded-full ${isPrimary ? 'bg-primary' : 'bg-navy'} animate-pulse`}></div>
                <span className="text-[9px] font-black text-navy/30 uppercase tracking-widest">{stat}</span>
            </div>
        </div>
    );
}
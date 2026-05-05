    'use client';

    import FeatureItem from "./Shared/FeatureItem";
    import ModuleBox from "./Shared/ModuleBox";

    export default function PowerSection() {
    return (
        <section className="relative bg-surface py-10 overflow-hidden border-y border-gray-100">

        {/* Background Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="section-container relative z-10 space-y-12">

            {/* ================= ADMIN SECTION ================= */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">

            {/* LEFT CONTENT */}
            <div>
                <h2 className="text-3xl font-bold text-navy mb-2 tracking-tight">
                Administrative <span className="text-primary">Powerhouse</span>
                </h2>

                <p className="text-sm text-gray-500 leading-relaxed mb-4 max-w-lg">
                The Tuoora Web Portal is built for performance. Handle thousands of students,
                manage batches, and control operations with precision — all in one place.
                </p>

                {/* Feature Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                <ModuleBox icon="👔" title="Staff Management" desc="Payroll & Bio-attendance" />
                <ModuleBox icon="📚" title="Batch Logic" desc="Dynamic schedules & resources" />
                <ModuleBox icon="📉" title="Analytics" desc="Growth & churn reports" />
                <ModuleBox icon="⚙️" title="Permissions" desc="Role-based control" />
                </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative flex justify-center">

                {/* Main Card */}
                <div className="relative w-[280px] rounded-2xl bg-white shadow-2xl border border-gray-100 p-5 z-10">

                <div className="space-y-3">
                    <div className="h-2 w-20 bg-primary/30 rounded"></div>
                    <div className="h-3 w-full bg-gray-100 rounded-lg"></div>

                    <div className="grid grid-cols-2 gap-3">
                    <div className="h-16 bg-surface rounded-xl"></div>
                    <div className="h-16 bg-surface rounded-xl"></div>
                    </div>
                </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 w-24 h-16 bg-white border border-gray-100 rounded-xl shadow-lg rotate-[-8deg]"></div>
                <div className="absolute bottom-0 -right-6 w-28 h-20 bg-primary/10 rounded-xl blur-sm rotate-6"></div>

            </div>
            </div>

            {/* ================= PARENT SECTION ================= */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">

            {/* LEFT VISUAL */}
            <div className="relative flex justify-center order-2 lg:order-1">

                {/* Phone UI */}
                <div className="h-[380px] w-[200px] bg-navy rounded-[35px] shadow-2xl p-4 flex flex-col justify-between rotate-[-4deg]">

                <div>
                    <div className="h-8 w-8 bg-primary rounded-full mb-2"></div>
                    <div className="h-1.5 w-16 bg-primary/40 rounded mb-5"></div>

                    <div className="space-y-2">
                    <div className="h-1.5 bg-white/10 rounded"></div>
                    <div className="h-1.5 bg-white/10 rounded"></div>
                    <div className="h-1.5 bg-white/10 rounded"></div>
                    </div>
                </div>

                <div className="h-20 bg-white/10 rounded-xl"></div>
                </div>

                {/* Floating Card */}
                <div className="absolute top-8 right-[-20px] w-36 h-28 bg-white border border-gray-100 rounded-2xl shadow-xl rotate-4 p-3">
                <div className="h-2 w-full bg-gray-100 rounded mb-2"></div>
                <div className="h-16 bg-surface rounded-xl"></div>
                </div>

            </div>

            {/* RIGHT CONTENT */}
            <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-navy mb-2 tracking-tight">
                Parent Engagement <span className="text-primary">Hub</span>
                </h2>

                <p className="text-sm text-gray-500 leading-relaxed mb-4 max-w-lg">
                FeeEasy connects your institute with parents through real-time updates,
                homework tracking, and transparent communication.
                </p>

                <div className="space-y-4">
                <FeatureItem title="Smart Homework" desc="Upload tasks from web, parents view instantly." />
                <FeatureItem title="Financial Transparency" desc="Track payments and dues clearly." />
                <FeatureItem title="Broadcast Alerts" desc="Send instant alerts across institute." />
                </div>
            </div>

            </div>

        </div>
        </section>
    );
    }
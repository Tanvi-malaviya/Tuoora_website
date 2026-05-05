export default function ModuleBox({ icon, title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-[11px] font-bold text-navy uppercase tracking-widest mb-1">{title}</h3>
      <p className="text-[9px] text-gray-400 font-bold uppercase leading-tight">{desc}</p>
    </div>
  );
}

export default function FeatureItem({ title, desc }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface border border-gray-50">
      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px] shrink-0 mt-0.5">✔</div>
      <div>
        <h4 className="text-sm font-bold text-navy mb-1">{title}</h4>
        <p className="text-[11px] text-gray-500 font-light leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

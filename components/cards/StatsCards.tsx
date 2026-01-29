export default function StatsCards() {
  const stats = [
    { label: "Projects", value: "3" },
    { label: "Tokens", value: "5.200" },
    { label: "Executions", value: "158" },
    { label: "Agents", value: "ONLINE" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl p-4
                     hover:border-cyan-400/40 transition
                     shadow-[inset_0_0_20px_rgba(0,255,255,0.05)]"
        >
          <div className="text-xs uppercase tracking-widest text-white/50">
            {stat.label}
          </div>
          <div className="mt-2 text-2xl font-semibold text-cyan-400">
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
}

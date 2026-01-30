export default function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        relative rounded-2xl
        bg-white/5 backdrop-blur-xl
        border border-cyan-400/20
        shadow-[0_0_40px_rgba(0,255,255,0.08)]
        p-6
        ${className}
      `}
    >
      {children}
    </div>
  );
}

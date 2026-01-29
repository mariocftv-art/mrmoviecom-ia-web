'use client';

export default function PlatformNav() {
  return (
    <header className="sticky top-0 z-40 h-16 flex items-center justify-between px-10
      bg-black/80 backdrop-blur border-b border-white/10">

      <span className="text-sm text-white/70">
        Dashboard
      </span>

      <div className="flex items-center gap-3">
        <span className="text-xs text-green-400">● AI ONLINE</span>
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      </div>
    </header>
  );
}

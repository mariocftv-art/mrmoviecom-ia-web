'use client';

export default function PlatformNav() {
  return (
    <header className="
      h-14 px-8 flex items-center justify-between
      border-b border-white/10
      bg-black/70 backdrop-blur
    ">
      <span className="text-sm text-white/70">
        MRMoviecom IA • Platform
      </span>

      <div className="flex items-center gap-3">
        <span className="text-xs text-green-400">
          ● AI ONLINE
        </span>
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      </div>
    </header>
  );
}

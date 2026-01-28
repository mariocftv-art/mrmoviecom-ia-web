"use client";

import React from "react";

export default function PlatformNav() {
  return (
    <header className="sticky top-0 z-30 h-16 w-full flex items-center justify-between px-6 border-b border-white/10 bg-black/80 backdrop-blur">
      {/* LEFT */}
      <div>
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <p className="text-xs text-zinc-400">
          MRMoviecom IA Platform
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-2 text-xs text-green-400 font-semibold">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          AI ONLINE
        </span>
      </div>
    </header>
  );
}

// components/LAYOUT/PlatformNav.tsx
"use client";

import React from "react";
import HeaderCredits from "@/components/HeaderCredits";

export default function PlatformNav() {
  return (
    <header className="h-16 w-full flex items-center justify-between px-8 border-b border-white/10 bg-black/70 backdrop-blur">
      <div>
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <p className="text-xs text-zinc-400">MRMoviecom IA Platform</p>
      </div>

      <div className="flex items-center gap-6">
        <span className="text-green-400 text-xs font-semibold">
          ● AI ONLINE
        </span>

        <HeaderCredits />
      </div>
    </header>
  );
}

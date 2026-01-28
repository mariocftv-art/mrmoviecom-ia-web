"use client";

import React from "react";
import PlatformNav from "@/components/sidebar/PlatformNav";

interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <main className="flex-1 min-h-screen bg-gradient-to-b from-zinc-900 via-black to-black text-white">
      {/* TOP NAV */}
      <PlatformNav />

      {/* PAGE CONTENT */}
      <div className="max-w-7xl mx-auto px-10 py-10 space-y-10">
        {children}
      </div>
    </main>
  );
}

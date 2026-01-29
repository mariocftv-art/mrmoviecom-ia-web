"use client";

import HeaderWelcome from "@/components/header/HeaderWelcome";
import CreateProjectCTA from "@/components/CTA/CreateProjectCTA";
import StatsCards from "@/components/cards/StatsCards";
import RecentActivity from "@/components/activity/RecentActivity";

export default function PlatformPage() {
  return (
    <div className="space-y-10">
      {/* HEADER */}
      <HeaderWelcome />

      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-12 gap-6">
        {/* LEFT / STATS */}
        <div className="col-span-12 xl:col-span-8 space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(0,255,255,0.05)]">
            <StatsCards />
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <RecentActivity />
          </div>
        </div>

        {/* RIGHT / CTA */}
        <div className="col-span-12 xl:col-span-4">
          <div className="sticky top-8 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-transparent backdrop-blur-xl p-6 shadow-[0_0_60px_rgba(0,255,255,0.15)]">
            <CreateProjectCTA />
          </div>
        </div>
      </div>
    </div>
  );
}

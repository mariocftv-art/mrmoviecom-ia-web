// app/platform/page.tsx
"use client";

import React from "react";

import HeaderWelcome from "@/components/header/HeaderWelcome";
import CreateProjectCTA from "@/components/CTA/CreateProjectCTA";
import StatsCards from "@/components/cards/StatsCards";
import RecentActivity from "@/components/activity/RecentActivity";

export default function PlatformPage() {
  return (
    <div className="space-y-10">
      {/* HEADER */}
      <HeaderWelcome />

      {/* CTA */}
      <CreateProjectCTA />

      {/* GRID DE CARDS */}
      <StatsCards />

      {/* RECENT ACTIVITY */}
      <RecentActivity />
    </div>
  );
}

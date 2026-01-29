"use client";

import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import MainContent from "@/components/LAYOUT/MainContent";

interface PlatformLayoutProps {
  children: React.ReactNode;
}

export default function PlatformLayout({ children }: PlatformLayoutProps) {
  return (
    <div className="flex min-h-screen w-full bg-black text-white">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <MainContent>
        {children}
      </MainContent>
    </div>
  );
}

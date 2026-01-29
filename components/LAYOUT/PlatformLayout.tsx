"use client";

import type { ReactNode } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import MainContent from "@/components/LAYOUT/MainContent";

interface PlatformLayoutProps {
  children: ReactNode;
}

export default function PlatformLayout({
  children,
}: PlatformLayoutProps) {
  return (
    <div className="flex min-h-screen w-full bg-black text-white">
      <Sidebar />

      <MainContent>
        {children}
      </MainContent>
    </div>
  );
}

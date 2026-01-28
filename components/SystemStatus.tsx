"use client";

import React from "react";

export default function SystemStatus() {
  return (
    <div className="glass p-6 rounded-2xl flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold">System Status</h3>
        <p className="text-zinc-400 text-sm">
          Monitoramento em tempo real
        </p>
      </div>

      <span className="px-4 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold">
        ONLINE
      </span>
    </div>
  );
}

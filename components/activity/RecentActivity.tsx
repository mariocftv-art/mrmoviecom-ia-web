"use client";

import React from "react";

export default function RecentActivity() {
  return (
    <section className="glass p-6 rounded-2xl">
      <h3 className="text-xl font-semibold mb-4">
        Recent Activity
      </h3>

      <ul className="space-y-3 text-sm text-zinc-300">
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          Project <strong>Evolved SaaS Dashboard</strong> created
        </li>

        <li className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          AI Agent executed workflow
        </li>

        <li className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-400" />
          Tokens updated
        </li>
      </ul>
    </section>
  );
}

"use client";

import React from "react";

export default function StatsCards() {
  const stats = [
    { label: "Projects", value: "3" },
    { label: "Tokens", value: "5,200" },
    { label: "Executions", value: "158" },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="glass p-6 rounded-2xl text-center"
        >
          <p className="text-zinc-400">{stat.label}</p>
          <p className="text-3xl font-bold mt-2">{stat.value}</p>
        </div>
      ))}
    </section>
  );
}

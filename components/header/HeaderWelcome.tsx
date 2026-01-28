"use client";

import React from "react";

export default function HeaderWelcome() {
  return (
    <section className="glass p-8 rounded-2xl">
      <h1 className="text-4xl font-bold mb-2">
        Welcome back!
      </h1>

      <p className="text-zinc-300 mb-4">
        Manage projects and monitor agents in real-time
      </p>

      <span className="text-green-400 text-sm font-semibold">
        AI Status: ONLINE
      </span>
    </section>
  );
}

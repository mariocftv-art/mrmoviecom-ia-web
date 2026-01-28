"use client";

import React from "react";

export default function HeaderCredits() {
  return (
    <div className="flex items-center gap-4 text-sm">
      <div className="px-3 py-1 rounded-lg bg-zinc-800">
        Tokens: <strong>5.200</strong>
      </div>

      <div className="px-3 py-1 rounded-lg bg-zinc-800">
        Execuções: <strong>158</strong>
      </div>
    </div>
  );
}

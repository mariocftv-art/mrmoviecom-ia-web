"use client";

import React from "react";

export default function ActivityFeed() {
  const activities = [
    { id: 1, text: "Projeto criado com IA", time: "2 min atrás" },
    { id: 2, text: "Agente conectado", time: "10 min atrás" },
    { id: 3, text: "Execução finalizada", time: "1 hora atrás" },
  ];

  return (
    <div className="glass p-6 rounded-2xl">
      <h3 className="text-lg font-semibold mb-4">Activity Feed</h3>

      <ul className="space-y-3 text-sm text-zinc-300">
        {activities.map((item) => (
          <li key={item.id} className="flex justify-between">
            <span>{item.text}</span>
            <span className="text-zinc-500">{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

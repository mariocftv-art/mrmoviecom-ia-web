"use client";

import { useEffect, useState } from "react";

export default function HistoryPage() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/history")
      .then(res => res.json())
      .then(setItems);
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Histórico IA</h1>
      {items.map(i => (
        <pre key={i.id} style={{ background: "#111", color: "#0f0", padding: 12 }}>
{JSON.stringify(i, null, 2)}
        </pre>
      ))}
    </div>
  );
}

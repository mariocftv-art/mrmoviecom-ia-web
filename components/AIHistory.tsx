"use client";

import { useEffect, useState } from "react";

type HistoryItem = {
  prompt: string;
  output: string;
  createdAt: string;
};

export default function AIHistory() {
  const [items, setItems] = useState<HistoryItem[]>([]);

  useEffect(() => {
    fetch("/api/admin/history/ai")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setItems(data.data);
      });
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Histórico da IA</h2>

      {items.length === 0 && (
        <p className="text-white/50">Nenhuma execução ainda.</p>
      )}

      {items.map((item, index) => (
        <div
          key={index}
          className="border border-white/10 rounded-md p-3 bg-black"
        >
          <div className="text-xs text-white/40 mb-2">
            {new Date(item.createdAt).toLocaleString()}
          </div>

          <div className="text-sm text-white/80 mb-2">
            <strong>Prompt:</strong> {item.prompt}
          </div>

          <pre className="text-green-400 text-xs whitespace-pre-wrap">
            {item.output}
          </pre>
        </div>
      ))}
    </div>
  );
}

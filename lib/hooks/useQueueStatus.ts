"use client";

import { useEffect, useState } from "react";

export type QueueSnapshot = {
  total: number;
  pending: number;
  processing: number;
  done: number;
  lastTasks: {
    id: string;
    type: string;
    status: "pending" | "processing" | "done";
  }[];
};

export function useQueueStatus() {
  const [queue, setQueue] = useState<QueueSnapshot | null>(null);

  useEffect(() => {
    let alive = true;

    const fetchQueue = async () => {
      try {
        const res = await fetch("/api/ai/queue");
        if (!res.ok) return;

        const data = await res.json();
        if (alive) setQueue(data);
      } catch {
        // silencioso de propósito
      }
    };

    fetchQueue();
    const interval = setInterval(fetchQueue, 1500);

    return () => {
      alive = false;
      clearInterval(interval);
    };
  }, []);

  return queue;
}

"use client";

import { useEffect, useState } from "react";

export function useAIStream() {
  const [thoughts, setThoughts] = useState<string[]>([]);

  useEffect(() => {
    const evt = new EventSource("/api/ai/stream");

    evt.onmessage = (e) => {
      setThoughts((prev) => [...prev, e.data]);
    };

    return () => evt.close();
  }, []);

  return thoughts;
}

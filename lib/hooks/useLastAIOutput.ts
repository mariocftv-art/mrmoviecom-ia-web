"use client";

import { useEffect, useState } from "react";

export function useLastAIOutput(interval = 2000) {
  const [output, setOutput] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const res = await fetch("/api/ai/last-output");
        const json = await res.json();
        if (active && json.ok) {
          setOutput(json.output);
        }
      } catch {
        // ignora
      }
    };

    load();
    const id = setInterval(load, interval);
    return () => {
      active = false;
      clearInterval(id);
    };
  }, [interval]);

  return output;
}

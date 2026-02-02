"use client";

import { useEffect } from "react";

type LayoutSnapshot = {
  url: string;
  viewport: {
    width: number;
    height: number;
  };
  body: {
    overflow: string;
    pointerEvents: string;
  };
};

export function useLayoutObserver(enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined") return;

    const snapshot: LayoutSnapshot = {
      url: window.location.pathname,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      body: {
        overflow: getComputedStyle(document.body).overflow,
        pointerEvents: getComputedStyle(document.body).pointerEvents,
      },
    };

    fetch("/api/ai/layout-snapshot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(snapshot),
    }).catch(() => {
      // silencioso – nunca quebra o front
    });
  }, [enabled]);
}

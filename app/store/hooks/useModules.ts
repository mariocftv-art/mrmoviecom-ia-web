"use client";

import { useEffect, useState } from "react";
import { modules as defaultModules } from "../data/modules";
import { plans, Plan } from "../data/plans";

export type Module = {
  id: string;
  name: string;
  description: string;
  price: number;
  status: string;
  active?: boolean;
  locked?: boolean;
};

export function useModules(plan: Plan) {
  const [modules, setModules] = useState<Module[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("mr_modules");
    const allowed = plans[plan].modules;

    const base = saved
      ? JSON.parse(saved)
      : defaultModules.map((m) => ({
          ...m,
          active: m.price === 0,
        }));

    const withLock = base.map((m: Module) => ({
      ...m,
      locked: !allowed.includes(m.id),
      active: allowed.includes(m.id) ? m.active : false,
    }));

    setModules(withLock);
    localStorage.setItem("mr_modules", JSON.stringify(withLock));
  }, [plan]);

  const toggleModule = (id: string) => {
    setModules((prev) => {
      const updated = prev.map((m) =>
        m.id === id && !m.locked
          ? { ...m, active: !m.active }
          : m
      );
      localStorage.setItem("mr_modules", JSON.stringify(updated));
      return updated;
    });
  };

  return { modules, toggleModule };
}

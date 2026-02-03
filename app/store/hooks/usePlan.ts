"use client";

import { useEffect, useState } from "react";
import type { Plan } from "../data/plans";

export function usePlan() {
  const [plan, setPlan] = useState<Plan>("starter");

  useEffect(() => {
    const saved = localStorage.getItem("mr_plan") as Plan | null;
    if (saved) setPlan(saved);
    else localStorage.setItem("mr_plan", "starter");
  }, []);

  const changePlan = (newPlan: Plan) => {
    setPlan(newPlan);
    localStorage.setItem("mr_plan", newPlan);
  };

  return { plan, changePlan };
}

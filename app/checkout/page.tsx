"use client";

import { usePlan } from "../store/hooks/usePlan";
import { plans } from "../store/data/plans";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { plan, changePlan } = usePlan();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">
        Checkout — Upgrade de Plano
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(plans).map(([key, p]) => (
          <div
            key={key}
            className={`p-6 rounded-2xl border ${
              plan === key
                ? "border-green-500 bg-black/60"
                : "border-cyan-500/30 bg-black/40"
            }`}
          >
            <h2 className="text-xl mb-2">{p.name}</h2>
            <p className="text-sm opacity-70 mb-4">
              Módulos: {p.modules.join(", ")}
            </p>

            {plan === key ? (
              <span className="text-green-400 text-sm">
                Plano atual
              </span>
            ) : (
              <button
                onClick={() => {
                  changePlan(key as any);
                  router.push("/store");
                }}
                className="mt-4 w-full bg-cyan-600 hover:bg-cyan-700 py-2 rounded-lg"
              >
                Confirmar Upgrade
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

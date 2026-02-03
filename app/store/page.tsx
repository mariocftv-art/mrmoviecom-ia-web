"use client";

import { usePlan } from "./hooks/usePlan";
import { useModules } from "./hooks/useModules";
import ModuleCard from "./components/ModuleCard";

export default function StorePage() {
  const { plan, changePlan } = usePlan();
  const { modules, toggleModule } = useModules(plan);

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-cyan-400">
        Loja IA — Plano: {plan.toUpperCase()}
      </h1>

      {/* DEV SWITCH DE PLANO */}
      <div className="flex gap-2">
        {["starter", "pro", "ultra"].map((p) => (
          <button
            key={p}
            onClick={() => changePlan(p as any)}
            className={`px-3 py-1 rounded text-sm ${
              plan === p
                ? "bg-cyan-600"
                : "bg-zinc-700 hover:bg-zinc-600"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      <section>
        <h2 className="text-xl mb-4">Módulos IA</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {modules.map((m) => (
            <ModuleCard
              key={m.id}
              module={m}
              onToggle={() => toggleModule(m.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

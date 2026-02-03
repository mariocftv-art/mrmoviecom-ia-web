"use client";

import ActivateButton from "./ActivateButton";
import { Module } from "../hooks/useModules";

type Props = {
  module: Module;
  onToggle: () => void;
};

export default function ModuleCard({ module, onToggle }: Props) {
  return (
    <div
      className={`p-4 rounded-xl border transition
        ${
          module.locked
            ? "border-red-500/30 bg-black/30 opacity-60"
            : module.active
            ? "border-green-500/40 bg-black/60"
            : "border-cyan-500/20 bg-black/40"
        }`}
    >
      <h3 className="text-lg">{module.name}</h3>
      <p className="text-sm opacity-70">{module.description}</p>

      <p className="mt-2 text-cyan-400">
        {module.price === 0 ? "Grátis" : `R$ ${module.price}`}
      </p>

      <ActivateButton
        active={module.active}
        locked={module.locked}
        onClick={onToggle}
      />
    </div>
  );
}

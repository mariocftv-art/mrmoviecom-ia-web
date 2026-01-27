import fs from "fs";
import path from "path";
import { OrchestratorContext } from "./context.types";

const CONTEXT_PATH = path.resolve(
  process.cwd(),
  "lib/orchestrator/context/context.json"
);

function getDefaultContext(): OrchestratorContext {
  return {
    faseAtual: "B15",
    fasesConcluidas: [],
    atualizadoEm: new Date().toISOString(),
  };
}

export function loadContext(): OrchestratorContext {
  if (!fs.existsSync(CONTEXT_PATH)) {
    const initial = getDefaultContext();
    fs.writeFileSync(CONTEXT_PATH, JSON.stringify(initial, null, 2));
    return initial;
  }

  const raw = fs.readFileSync(CONTEXT_PATH, "utf-8");
  return JSON.parse(raw);
}

export function saveContext(ctx: OrchestratorContext) {
  ctx.atualizadoEm = new Date().toISOString();
  fs.writeFileSync(CONTEXT_PATH, JSON.stringify(ctx, null, 2));
}

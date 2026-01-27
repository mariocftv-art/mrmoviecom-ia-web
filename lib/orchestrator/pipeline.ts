export type FasePipeline = {
  id: string;
  titulo: string;
  status: "ativa" | "finalizada" | "pendente";
};

export const PIPELINE_FASES: FasePipeline[] = [
  { id: "B15", titulo: "Validar painel admin", status: "finalizada" },
  { id: "B16", titulo: "Ativar Orquestrador Central", status: "finalizada" },
  { id: "B17", titulo: "Registrar pipeline de fases", status: "finalizada" },
  { id: "B18", titulo: "Execução automática por pipeline", status: "ativa" },
];

export function getFaseAtiva() {
  return PIPELINE_FASES.find((f) => f.status === "ativa");
}

export function finalizarFase(id: string) {
  const fase = PIPELINE_FASES.find((f) => f.id === id);
  if (fase) fase.status = "finalizada";
}

export function ativarProximaFase() {
  const idx = PIPELINE_FASES.findIndex((f) => f.status === "ativa");
  if (idx >= 0 && PIPELINE_FASES[idx + 1]) {
    PIPELINE_FASES[idx + 1].status = "ativa";
  }
}

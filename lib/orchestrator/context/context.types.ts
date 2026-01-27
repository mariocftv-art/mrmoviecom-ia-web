export type OrchestratorContext = {
  faseAtual: string;
  fasesConcluidas: string[];
  ultimoComando?: string;
  proximoPasso?: string;
  atualizadoEm: string;
};

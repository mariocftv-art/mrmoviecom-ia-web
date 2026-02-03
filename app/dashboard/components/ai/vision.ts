export type VisionResult = {
  goal: string
  problems: string[]
  actions: string[]
}

export function Vision(): VisionResult {
  console.log("👁️ VISION — ANALISANDO SNAPSHOT DO FRONT")

  return {
    goal: "Analisar layout real a partir de snapshot",
    problems: [
      "Possível desalinhamento de cards",
      "Componentes repetidos",
      "Layout pesado"
    ],
    actions: [
      "Normalizar grid do dashboard",
      "Remover duplicações",
      "Propor otimização de layout"
    ]
  }
}

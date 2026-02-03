export type VisionResult = {
  goal: string
  problems: string[]
  actions: string[]
}

export function Vision(context?: any): VisionResult {
  console.log("👁️ VISION FASE 3 — ANALISANDO LAYOUT")

  return {
    goal: "Analisar layout real do dashboard",
    problems: [
      "Cards desalinhados",
      "Componentes duplicados",
      "Layout pesado"
    ],
    actions: [
      "Normalizar grid dos cards",
      "Remover duplicações",
      "Otimizar layout"
    ]
  }
}

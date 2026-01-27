// app/platform/page.tsx

import { Orchestrator } from "@/lib/core/orchestrator/orchestrator";

export default async function PlatformPage() {
  const orchestrator = new Orchestrator(
    "analisar e executar tarefa de teste"
  );

  await orchestrator.start();
  const context = orchestrator.getContext();

  return (
    <main style={{ padding: 20 }}>
      <h1>MRMoviecom IA Platform</h1>

      <p><b>Status:</b> {context.state}</p>
      <p><b>Objetivo:</b> {context.goal}</p>
      <p><b>Confiança:</b> {context.confidence}</p>

      <h2>Passos</h2>
      <ul>
        {context.steps.map((step, i) => (
          <li key={i}>
            {step.id} - {step.description} ({step.risk})
          </li>
        ))}
      </ul>
    </main>
  );
}

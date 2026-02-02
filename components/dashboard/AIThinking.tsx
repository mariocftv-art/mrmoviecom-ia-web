"use client";

type AIThinkingProps = {
  processing: boolean;
};

export default function AIThinking({ processing }: AIThinkingProps) {
  if (!processing) return null;

  return (
    <div
      style={{
        marginTop: 32,
        padding: 16,
        borderRadius: 12,
        background:
          "linear-gradient(135deg, rgba(0,255,156,0.12), rgba(0,255,255,0.06))",
        border: "1px solid rgba(0,255,156,0.25)",
        color: "#9fffe0",
        fontSize: 14,
      }}
    >
      🤖 <strong>IA em processamento…</strong>
      <div style={{ opacity: 0.75, marginTop: 6 }}>
        Analisando tarefas · Organizando fila · Otimizando execução
      </div>
    </div>
  );
}

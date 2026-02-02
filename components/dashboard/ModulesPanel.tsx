"use client";

export default function ModulesPanel() {
  return (
    <aside
      style={{
        width: 260,
        padding: 16,
        borderRight: "1px solid rgba(255,255,255,0.08)",
        pointerEvents: "auto",
      }}
    >
      <button
        onClick={() => alert("Dashboard clicável")}
        style={{
          width: "100%",
          padding: 12,
          cursor: "pointer",
        }}
      >
        Teste Clique
      </button>
    </aside>
  );
}

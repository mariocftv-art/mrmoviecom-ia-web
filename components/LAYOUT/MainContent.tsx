import type { ReactNode } from "react";
import AIConsole from "@/components/AIConsole";

export default function MainContent({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-1 overflow-hidden">
      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>

      {/* PAINEL IA */}
      <aside className="w-[360px] border-l border-white/10 bg-black/80 backdrop-blur">
        <AIConsole />
      </aside>
    </div>
  );
}

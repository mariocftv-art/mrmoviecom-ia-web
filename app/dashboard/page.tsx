"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [data, setData] = useState<{
    credits: number;
    executions: number;
    projects: number;
    status: string;
  } | null>(null);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao carregar dashboard");
        }
        return res.json();
      })
      .then((json) => setData(json))
      .catch(() => {
        setData({
          credits: 0,
          executions: 0,
          projects: 0,
          status: "Offline",
        });
      });
  }, []);

  if (!data) {
    return (
      <div className="text-gray-500">
        Carregando dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* TÍTULO */}
      <div>
        <h2 className="text-2xl font-semibold text-white">
          Dashboard
        </h2>
        <p className="text-gray-400">
          Visão geral da plataforma MRMoviecom IA
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card title="Créditos" value={String(data.credits)} />
        <Card title="Execuções IA" value={String(data.executions)} />
        <Card title="Projetos" value={String(data.projects)} />
        <Card title="Status IA" value={data.status} />
      </div>

      {/* PAINÉIS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Panel title="Últimas Execuções IA">
          <p className="text-gray-500 text-sm">
            Histórico detalhado será exibido aqui.
          </p>
        </Panel>

        <Panel title="Atividade do Sistema">
          <p className="text-gray-500 text-sm">
            Sistema operando normalmente.
          </p>
        </Panel>
      </div>
    </div>
  );
}

/* ===== COMPONENTES ===== */

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-6 card-hover">
      <p className="text-sm text-gray-400">{title}</p>
      <p className="text-3xl font-bold gradient-text mt-2">
        {value}
      </p>
    </div>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="text-white font-semibold mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}

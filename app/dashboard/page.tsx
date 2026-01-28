"use client";

import { useEffect, useState } from "react";

type DashboardData = {
  credits: number;
  executions: number;
  projects: number;
  status: string;
};

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
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
    <div className="space-y-10">
      {/* HEADER */}
      <div>
        <h2 className="text-3xl font-bold text-white">
          Visão Geral
        </h2>
        <p className="text-gray-400 mt-1">
          Acompanhe a atividade da plataforma MRMoviecom IA
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Créditos"
          value={data.credits}
          gradient="from-indigo-500 to-cyan-400"
        />
        <StatCard
          title="Execuções IA"
          value={data.executions}
          gradient="from-purple-500 to-pink-400"
        />
        <StatCard
          title="Projetos"
          value={data.projects}
          gradient="from-emerald-500 to-lime-400"
        />
        <StatCard
          title="Status IA"
          value={data.status}
          gradient="from-sky-500 to-indigo-400"
        />
      </div>

      {/* PAINÉIS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Panel title="Últimas Execuções">
          <p className="text-gray-500 text-sm">
            Histórico detalhado aparecerá aqui.
          </p>
        </Panel>

        <Panel title="Sistema">
          <p className="text-gray-500 text-sm">
            Todos os serviços operando normalmente.
          </p>
        </Panel>
      </div>
    </div>
  );
}

/* ================= COMPONENTES ================= */

function StatCard({
  title,
  value,
  gradient,
}: {
  title: string;
  value: number | string;
  gradient: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6">
      <div
        className={`absolute inset-0 opacity-20 bg-gradient-to-br ${gradient}`}
      />
      <div className="relative">
        <p className="text-sm text-gray-400">
          {title}
        </p>
        <p className="text-3xl font-bold text-white mt-2">
          {value}
        </p>
      </div>
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
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <h3 className="text-white font-semibold mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}

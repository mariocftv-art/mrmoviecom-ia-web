'use client';

import { useEffect, useState } from 'react';

export type DashboardData = {
  credits: number;
  activeProjects: number;
  executions: number;
  activities: string[];
};

export function useDashboardData() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({
        credits: 1240,
        activeProjects: 6,
        executions: 128,
        activities: [
          'Projeto criado',
          'IA executada',
          'Créditos atualizados',
        ],
      });
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return { loading, data };
}

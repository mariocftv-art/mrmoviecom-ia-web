"use client";

import styles from "./dashboard.module.css";

import { useQueueStatus } from "@/lib/hooks/useQueueStatus";
import { useLayoutObserver } from "@/lib/hooks/useLayoutObserver";

import ActivityFeed from "@/components/dashboard/ActivityFeed";
import AIThinking from "@/components/dashboard/AIThinking";

export default function DashboardPage() {
  const queue = useQueueStatus();

  // 👁️ IA observando o layout (PASSO 11)
  useLayoutObserver(true);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>
        Dashboard — MRMoviecom IA Platform
      </h1>

      <div className={styles.grid}>
        {/* STATUS IA */}
        <div className={styles.card}>
          <div className={styles.cardTitle}>Status da IA</div>

          <div
            className={`${styles.cardValue} ${
              queue?.processing ? styles.aiProcessing : styles.aiOnline
            }`}
          >
            {queue?.processing ? "PROCESSANDO" : "ONLINE"}
          </div>

          <div className={styles.cardMeta}>
            Fila: {queue?.total ?? 0} task(s)
            <br />
            Engine: {queue?.processing ? "Processando" : "Aguardando"}
          </div>
        </div>

        {/* CRÉDITOS */}
        <div className={styles.card}>
          <div className={styles.cardTitle}>Créditos</div>
          <div className={styles.cardValue}>120</div>
        </div>
      </div>

      {/* IA PENSANDO (PASSO 10) */}
      <AIThinking processing={!!queue?.processing} />

      {/* ACTIVITY STREAM (PASSO 3) */}
      <div style={{ marginTop: 32 }}>
        <ActivityFeed tasks={queue?.lastTasks ?? []} />
      </div>
    </div>
  );
}

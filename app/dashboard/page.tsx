// app/dashboard/page.tsx
import styles from "./dashboard.module.css";
import { getIAStatus } from "../../lib/ai/aiStatus";
import { startEngine } from "../../lib/ai/engine";
import { enqueueTestTask } from "../../lib/ai/engine";
export default function DashboardPage() {
  // inicia a engine (mock)
  startEngine();

  const aiStatus = getIAStatus();

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>
        Dashboard – MRMoviecom IA Platform
      </h1>

      <div className={styles.grid}>
        {/* STATUS IA */}
        <div className={styles.card}>
          <div className={styles.cardTitle}>Status da IA</div>

          <div
            className={`${styles.cardValue} ${
              aiStatus.state === "online"
                ? styles.statusOnline
                : aiStatus.state === "busy"
                ? styles.statusBusy
                : styles.statusOffline
            }`}
          >
            {aiStatus.state.toUpperCase()}
          </div>
        </div>

        {/* CRÉDITOS */}
        <div className={styles.card}>
          <div className={styles.cardTitle}>Créditos</div>
          <div className={styles.cardValue}>120</div>
        </div>
      </div>
    </div>
  );
}

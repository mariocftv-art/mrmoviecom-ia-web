import styles from "./dashboard.module.css";

export default function DashboardPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>
        Dashboard — MRMoviecom IA Platform
      </h1>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Status da IA</div>
          <div className={styles.cardValue}>Online</div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTitle}>Créditos</div>
          <div className={styles.cardValue}>120</div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTitle}>Projetos</div>
          <div className={styles.cardValue}>3 ativos</div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTitle}>Plano</div>
          <div className={styles.cardValue}>Pro</div>
        </div>
      </div>
    </div>
  );
}

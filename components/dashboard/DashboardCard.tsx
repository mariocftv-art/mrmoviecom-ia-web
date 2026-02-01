import styles from './dashboardCards.module.css';

export default function DashboardCard() {
  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <span className={styles.label}>Créditos</span>
        <span className={styles.value}>1240</span>
      </div>

      <div className={styles.card}>
        <span className={styles.label}>Projetos Ativos</span>
        <span className={styles.value}>6</span>
      </div>

      <div className={styles.card}>
        <span className={styles.label}>Execuções IA</span>
        <span className={styles.value}>128</span>
      </div>
    </div>
  );
}

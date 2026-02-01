import styles from "./dashboardCards.module.css";

export default function DashboardCards() {
  return (
    <section className={styles.cardsGrid}>
      <div className={styles.card}>
        <span className={styles.label}>Status da IA</span>
        <strong className={styles.value}>Online</strong>
      </div>

      <div className={styles.card}>
        <span className={styles.label}>Créditos</span>
        <strong className={styles.value}>120</strong>
      </div>

      <div className={styles.card}>
        <span className={styles.label}>Projetos</span>
        <strong className={styles.value}>3 ativos</strong>
      </div>

      <div className={styles.card}>
        <span className={styles.label}>Plano</span>
        <strong className={styles.value}>Pro</strong>
      </div>
    </section>
  );
}

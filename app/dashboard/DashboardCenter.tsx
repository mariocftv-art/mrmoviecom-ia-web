import styles from "./central.module.css";

export default function DashboardCenter() {
  return (
    <section className={styles.centerBlock}>
      <h2 className={styles.sectionTitle}>Análises & Fluxo IA</h2>

      <p className={styles.text}>Visual demonstrativo</p>

      <p className={styles.text}>📈 Gráfico de crescimento (mock)</p>

      <div className={styles.flow}>
        <div className={styles.flowItem}>Entrada</div>
        <div className={styles.flowArrow}>↓</div>
        <div className={styles.flowItem}>Processamento IA</div>
        <div className={styles.flowArrow}>↓</div>
        <div className={styles.flowItem}>Saída</div>
      </div>

      <input
        className={styles.input}
        type="text"
        placeholder="Digite o prompt da IA..."
        disabled
      />
    </section>
  );
}

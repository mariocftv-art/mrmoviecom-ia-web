import styles from "./central.module.css";

export default function CentralPanel() {
  return (
    <section className={styles.panel}>
      <div className={styles.header}>
        <h2>Análises & Fluxo IA</h2>
        <span>Visual demonstrativo</span>
      </div>

      <div className={styles.content}>
        <div className={styles.chart}>
          <p>📈 Gráfico de crescimento (mock)</p>
        </div>

        <div className={styles.flow}>
          <div className={styles.node}>Entrada</div>
          <div className={styles.node}>Processamento IA</div>
          <div className={styles.node}>Saída</div>
        </div>
      </div>

      <div className={styles.prompt}>
        <input
          type="text"
          placeholder="Digite o prompt da IA..."
          disabled
        />
      </div>
    </section>
  );
}

import styles from "./dashboard.module.css";

export default function DashboardRight() {
  return (
    <aside className={styles.rightPanel}>
      <h2 className={styles.panelTitle}>Notas Recentes</h2>

      <div className={styles.note}>
        <strong>Sistema</strong>
        <span>IA operando normalmente</span>
      </div>

      <div className={styles.note}>
        <strong>Projeto</strong>
        <span>Vídeo IA renderizado</span>
      </div>

      <div className={styles.note}>
        <strong>Créditos</strong>
        <span>Consumo dentro do limite</span>
      </div>

      <button className={styles.executeBtn}>
        ▶ Executar IA
      </button>
    </aside>
  );
}

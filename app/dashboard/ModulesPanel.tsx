"use client";

import styles from "./modules.module.css";

export default function ModulesPanel() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Módulos da Plataforma</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <span className={styles.cardTitle}>Vídeos IA</span>
          <span className={styles.badge}>Em breve</span>
        </div>

        <div className={styles.card}>
          <span className={styles.cardTitle}>Música IA</span>
          <span className={styles.badge}>Em breve</span>
        </div>

        <div className={styles.card}>
          <span className={styles.cardTitle}>Imagens IA</span>
          <span className={styles.badge}>Em breve</span>
        </div>

        <div className={styles.card}>
          <span className={styles.cardTitle}>Automação</span>
          <span className={styles.badge}>Em breve</span>
        </div>

        <div className={styles.card}>
          <span className={styles.cardTitle}>Analytics Avançado</span>
          <span className={styles.badge}>Em breve</span>
        </div>

        <div className={styles.card}>
          <span className={styles.cardTitle}>Loja IA</span>
          <span className={styles.badge}>Em breve</span>
        </div>
      </div>
    </section>
  );
}

"use client";

import styles from "./FuturisticChart.module.css";

export default function FuturisticChart() {
  return (
    <div className={styles.chartBox}>
      <h3>Análises</h3>

      <div className={styles.chart}>
        <span style={{ height: "30%" }} />
        <span style={{ height: "45%" }} />
        <span style={{ height: "55%" }} />
        <span style={{ height: "65%" }} />
        <span style={{ height: "75%" }} />
        <span style={{ height: "90%" }} />
      </div>

      <p className={styles.caption}>Crescimento mensal (mock)</p>
    </div>
  );
}

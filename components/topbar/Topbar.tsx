import styles from "./Topbar.module.css";

export default function Topbar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          Dashboard <span>— MRMoviecom IA Platform</span>
        </h1>
      </div>

      <div className={styles.right}>
        <div className={styles.user}>
          <div className={styles.avatar}>MR</div>
          <span className={styles.name}>Admin</span>
        </div>
      </div>
    </header>
  );
}

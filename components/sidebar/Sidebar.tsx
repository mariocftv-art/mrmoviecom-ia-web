import styles from "./Sidebar.module.css";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <span className={styles.brand}>MRMoviecom</span>
        <span className={styles.sub}>IA Platform</span>
      </div>

      <nav className={styles.nav}>
        <Link href="/dashboard" className={styles.active}>📊 Dashboard</Link>
        <Link href="#">🎬 Vídeos IA</Link>
        <Link href="#">🎵 Música IA</Link>
        <Link href="#">📈 Analytics</Link>
        <Link href="#">⚙️ Configurações</Link>
      </nav>

      <div className={styles.footer}>
        <button className={styles.upgrade}>⚡ Upgrade Pro</button>
      </div>
    </aside>
  );
}

"use client";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside style={sidebar}>
      <h2 style={{ marginBottom: 24 }}>MRMoviecom</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Link href="/dashboard-lite">Dashboard</Link>
        <Link href="/platform">Plataforma</Link>
        <Link href="/admin">Admin</Link>
      </nav>
    </aside>
  );
}

const sidebar = {
  width: 220,
  minHeight: "100vh",
  background: "#0f172a",
  color: "#fff",
  padding: 20,
};

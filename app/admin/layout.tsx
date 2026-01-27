import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ background: "#fff", minHeight: "100vh" }}>
      {children}
    </section>
  );
}

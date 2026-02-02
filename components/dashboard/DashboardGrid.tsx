"use client";

export default function DashboardGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 24,
        marginTop: 24,
        pointerEvents: "auto",
      }}
    >
      {children}
    </section>
  );
}

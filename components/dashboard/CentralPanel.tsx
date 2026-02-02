"use client";

export default function CentralPanel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      style={{
        flex: 1,
        padding: 24,
        pointerEvents: "auto",
      }}
    >
      {children}
    </main>
  );
}

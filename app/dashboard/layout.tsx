import Sidebar from "@/components/dashboard/Sidebar";
import ContentContainer from "@/components/dashboard/ContentContainer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "var(--bg-main)",
        color: "var(--text-main)",
      }}
    >
      <Sidebar />

      <main style={{ flex: 1 }}>
        <ContentContainer>{children}</ContentContainer>
      </main>
    </div>
  );
}

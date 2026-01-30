import Header from "@/components/dashboard/Header";
import StatCard from "@/components/dashboard/StatCard";
import ActionLog from "@/components/dashboard/ActionLog";

export default function DashboardPage() {
  return (
    <>
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Modo da IA" value="LOCAL" highlight />
        <StatCard title="Engine" value="Ativa" />
        <StatCard title="Status" value="Offline" />
      </div>

      <ActionLog />
    </>
  );
}

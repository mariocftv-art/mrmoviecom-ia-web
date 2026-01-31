import Sidebar from "@/components/sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* Sidebar fixa */}
      <aside className="w-64 border-r border-white/10">
        <Sidebar />
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}

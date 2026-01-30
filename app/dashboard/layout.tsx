import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-black text-white flex">
      <Sidebar />
      <main className="flex-1 p-8">{children}</main>
    </section>
  );
}

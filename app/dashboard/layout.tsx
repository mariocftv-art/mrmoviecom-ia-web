import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>

      {/* SIDEBAR */}
      <Sidebar />

      {/* ÁREA PRINCIPAL */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* TOPBAR */}
        <Topbar />

        {/* MAIN */}
        <main style={{ flex: 1, padding: 16 }}>
          {children}
        </main>

      </div>
    </div>
  );
}
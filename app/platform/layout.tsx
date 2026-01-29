import Sidebar from '@/components/sidebar/Sidebar';
import PlatformNav from '@/components/sidebar/PlatformNav';
import MainContent from '@/components/LAYOUT/MainContent';

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">
        <PlatformNav />
        <MainContent>
          {children}
        </MainContent>
      </div>
    </div>
  );
}

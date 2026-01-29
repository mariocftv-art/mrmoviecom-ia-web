import Sidebar from '@/components/sidebar/Sidebar';
import MainContent from '@/components/LAYOUT/MainContent';

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-black text-white">
      <Sidebar />
      <MainContent>{children}</MainContent>
    </div>
  );
}

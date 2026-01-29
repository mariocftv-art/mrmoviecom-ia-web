import type { ReactNode } from "react";
import PlatformLayout from "@/components/LAYOUT/PlatformLayout";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <PlatformLayout>
      {children}
    </PlatformLayout>
  );
}

import "@/styles/global.css";

import GlassPane from "@/components/GlassPane";
import { ReactElement } from "react";

type DashboardRootLayout = {
  children: ReactElement;
};

export default function DashboardRootLayout({ children }: DashboardRootLayout) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}

import "@/styles/global.css";

import GlassPane from "@/components/GlassPane";
import { ReactElement } from "react";

type AuthRootLayout = {
  children: ReactElement;
};

// const inter = Inter({
//     variable: "--font-inter",
//   });

export default function AuthRootLayout({ children }: AuthRootLayout) {
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

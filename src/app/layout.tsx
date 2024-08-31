import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/ui/sidebar";
import { BottomNav } from "@/components/ui/bottom-nav";
import { ThemeProvider } from "@/providers/theme-provider";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jody Yuantoro",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex justify-center p-8 md:p-24`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            <div className="flex md:gap-6 max-w-6xl">
              <aside>
                <Sidebar />
              </aside>
              {children}
            </div>
            <BottomNav />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

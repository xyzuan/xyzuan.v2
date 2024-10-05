import "./globals.css";

import { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ProfileProvider } from "@/providers/profile-provider";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { METADATA } from "@/commons/constants/metadata";
import { Toaster } from "@/components/ui/sonner";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jody Yuantoro - Software Engineer",
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.DOMAIN ?? ""
  ),
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  openGraph: {
    title: "Jody Yuantoro - Software Engineer",
    images: METADATA.profile,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={`${manrope.className} flex justify-center`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ProfileProvider authSession={cookies().get("auth_session")?.value}>
            <Analytics />
            <SpeedInsights />
            <Toaster position="top-right" richColors />
            <TooltipProvider>{children}</TooltipProvider>
          </ProfileProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

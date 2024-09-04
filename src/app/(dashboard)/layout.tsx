import { METADATA } from "@/commons/constants/metadata";
import BaseLayout from "@/components/ui/base-layout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Jody Yuantoro - Software Engineer",
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.DOMAIN || ""
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

const DashboardRootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <BaseLayout>{children}</BaseLayout>;
};

export default DashboardRootLayout;

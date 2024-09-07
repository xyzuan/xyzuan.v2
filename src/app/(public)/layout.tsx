import BaseLayout from "@/components/ui/base-layout";
import React from "react";

const DashboardRootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <BaseLayout>{children}</BaseLayout>;
};

export default DashboardRootLayout;

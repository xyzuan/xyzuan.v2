import BaseLayout from "@/components/ui/base-layout";
import React from "react";

const ImmersiveRootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <BaseLayout forceDisableSidebar>{children}</BaseLayout>;
};

export default ImmersiveRootLayout;

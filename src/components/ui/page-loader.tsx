"use client";

import { useTheme } from "next-themes";
import NextTopLoader from "nextjs-toploader";

const PageLoader = () => {
  const { theme } = useTheme();
  return (
    <NextTopLoader
      color={theme === "dark" ? "#FFFFFF" : "#000000"}
      initialPosition={0.08}
      crawlSpeed={200}
      height={4}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"
    />
  );
};

export default PageLoader;

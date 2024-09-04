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
      // shadow=""
      shadow={
        theme === "dark"
          ? "0 0 30px #FFFFFF,0 0 90px #FFFFFF"
          : "0 0 30px #000000,0 0 90px #000000"
      }
    />
  );
};

export default PageLoader;

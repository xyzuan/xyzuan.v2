import NextTopLoader from "nextjs-toploader";

const PageLoader = () => {
  return (
    <NextTopLoader
      color="#808080"
      initialPosition={0.08}
      crawlSpeed={200}
      height={4}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow="0 0 10px #808080, 0 0 20px #808080;"
    />
  );
};

export default PageLoader;

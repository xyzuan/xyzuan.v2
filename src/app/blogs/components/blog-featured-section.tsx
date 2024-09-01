import { getBlogData } from "@/services/devto";
import BlogFeaturedHero from "./blog-featured-hero";
import { BlogItem } from "@/commons/types/blog";

const BlogFeaturedSection = async () => {
  const blogs = await getBlogData({
    page: 1,
    per_page: 4,
  });

  // const { data, isLoading } = useSWR(
  //   `/api/blog?page=1&per_page=4&categories=11`,
  //   fetcher,
  //   {
  //     revalidateOnFocus: false,
  //     refreshInterval: 0,
  //   },
  // );

  const featuredData: BlogItem[] =
    blogs?.status && blogs?.data?.posts && Array.isArray(blogs?.data?.posts)
      ? blogs.data.posts
      : [];

  return (
    <>
      {/* {!isLoading ? ( */}
      <BlogFeaturedHero blogs={featuredData} />
      {/* ) : ( */}
      {/* <BlogFeaturedHeroSkeleton /> */}
      {/* )} */}
    </>
  );
};

export default BlogFeaturedSection;

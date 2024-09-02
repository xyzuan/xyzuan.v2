import BlurFade from "@/components/magicui/blur-fade";
import BlogFeaturedSection from "./components/blog-item-section";
import { getBlogData } from "@/services/devto";
import { BlogItem } from "@/commons/types/blog";
import BlogCard from "./components/blog-card";
import BlogFeaturedHero from "./components/blog-featured-hero";
import BlogItemSection from "./components/blog-item-section";

const BlogsPage = async () => {
  const blogs = await getBlogData();

  return (
    <BlurFade delay={0.25 * 0.05} inView>
      <BlogFeaturedHero blogs={blogs} />
      <BlogItemSection blogs={blogs} />
    </BlurFade>
  );
};

export default BlogsPage;

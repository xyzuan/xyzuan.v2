import BlurFade from "@/components/magicui/blur-fade";
import { getBlogData } from "@/services/devto";
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

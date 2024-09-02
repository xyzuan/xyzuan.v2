import { getBlogData } from "@/services/devto";
import BlogFeaturedHero from "./blog-featured-hero";
import { revalidatePath } from "next/cache";

const BlogFeaturedSection = async () => {
  revalidatePath("/blogs");
  const blogs = await getBlogData();

  return <BlogFeaturedHero blogs={blogs} />;
};

export default BlogFeaturedSection;

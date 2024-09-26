import { getBlogData } from "@/services/blogs";
import BlogFeaturedHero from "./components/blog-featured-hero";
import BlogItemSection from "./components/blog-item-section";
import { Metadata } from "next";
import { METADATA } from "@/commons/constants/metadata";
import BlurFade from "@/components/magicui/blur-fade";

export const metadata: Metadata = {
  title: `Blog ${METADATA.exTitle}`,
  description: "My blogs content about programming and software development",
  keywords: "blog code xyzuan, xyzuan, blog, jody yuantoro blog",
  alternates: {
    canonical: `${process.env.DOMAIN}/blogs`,
  },
};

const BlogsPage = async () => {
  const blogs = await getBlogData();

  return (
    <BlurFade>
      <BlogFeaturedHero blogs={blogs} />
      <BlogItemSection blogs={blogs} />
    </BlurFade>
  );
};

export default BlogsPage;

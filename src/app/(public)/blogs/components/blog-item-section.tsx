"use client";

import { motion } from "framer-motion";
import BlogCard from "./blog-card";
import { BlogItem, BlogProps } from "@/commons/types/blogs.types";
import Typography from "@/components/ui/typography";

const BlogItemSection = ({ blogs }: BlogProps) => {
  return (
    <>
      <Typography.h3>Recent blogs</Typography.h3>
      <div className="grid grid-cols-1 mt-6 gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {blogs.map((item: BlogItem, index: number) => (
          <BlogCard key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default BlogItemSection;

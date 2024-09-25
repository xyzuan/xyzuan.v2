import { BlogItem } from "@/commons/types/blogs.types";
import { getBlogData } from "@/services/blogs";
import BlogCard from "../blogs/components/blog-card";
import Typography from "@/components/ui/typography";

const RecentBlog = async () => {
  const blogs = await getBlogData();

  return (
    <>
      <Typography.h3>Recent blogs</Typography.h3>
      <div className="flex h-fit w-full gap-4 overflow-x-scroll mt-6 rounded-xl scrollbar-hide">
        {blogs.map((item: BlogItem, index: number) => (
          <BlogCard key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default RecentBlog;

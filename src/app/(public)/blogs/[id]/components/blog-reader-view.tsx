import { BlogItem } from "@/commons/types/blogs.types";
import BlogReaderHeader from "./blog-reader-header";
import Image from "@/components/ui/image";
import MDXComponent from "@/components/ui/mdx-components";
import BlogCommentList from "./blog-comment-list";
import Typography from "@/components/ui/typography";

interface BlogReaderViewProps {
  blogData: BlogItem;
}

const BlogReaderView = ({ blogData }: BlogReaderViewProps) => {
  const { img, title, content, viewCount, comments, commentsCount, createdAt } =
    blogData;

  return (
    <>
      <BlogReaderHeader
        title={title}
        comments_count={commentsCount}
        reading_time_minutes={10}
        published_at={createdAt}
        page_views_count={viewCount}
      />
      <div className="space-y-6 leading-[1.8] dark:text-neutral-300 ">
        <div className="overflow-hidden rounded-xl">
          <Image
            src={img}
            width={800}
            height={500}
            alt={title}
            className="transition-all w-full duration-700 hover:scale-105"
          />
        </div>
        {content && <MDXComponent>{content}</MDXComponent>}
      </div>
      <Typography.h3 className="mb-3">Comments</Typography.h3>
      <BlogCommentList comments={comments} />
    </>
  );
};

export default BlogReaderView;

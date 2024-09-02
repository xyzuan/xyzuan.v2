import { BlogDetailProps, CommentItemProps } from "@/commons/types/blog";
import BlogReaderHeader from "./blog-reader-header";
import Image from "@/components/ui/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import MDXComponent from "@/components/ui/mdx-components";
import BlogCommentList from "./blog-comment-list";
import Typography from "@/components/ui/typography";

interface BlogReaderViewProps {
  content: BlogDetailProps;
  comments: CommentItemProps[];
  pageViewCount: number;
}

const BlogReaderView = ({
  content,
  comments,
  pageViewCount,
}: BlogReaderViewProps) => {
  const {
    cover_image,
    title,
    body_markdown,
    comments_count,
    published_at,
    tags,
    reading_time_minutes,
    id,
    url,
  } = content;
  return (
    <>
      <BlogReaderHeader
        title={title}
        comments_count={comments_count}
        reading_time_minutes={reading_time_minutes}
        published_at={published_at}
        page_views_count={pageViewCount}
      />
      <div className="space-y-6 leading-[1.8] dark:text-neutral-300 ">
        <div className="overflow-hidden rounded-xl">
          <Image
            src={cover_image}
            width={800}
            height={500}
            alt={title}
            className="transition-all w-full duration-700 hover:scale-105"
          />
        </div>
        {body_markdown && <MDXComponent>{body_markdown}</MDXComponent>}
      </div>
      {tags?.length >= 1 && (
        <div className="my-10 space-y-2">
          <Typography.h3 className="text-lg font-medium">Tags:</Typography.h3>
          <div className="flex flex-wrap gap-2 pt-2">
            {tags?.map((stack: string, index: number) => (
              <span
                key={index}
                className="rounded-full bg-neutral-200 px-4 py-1 text-[14px] font-medium text-neutral-600 dark:bg-neutral-700 dark:text-neutral-200"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      )}
      <Separator className="my-6" />
      <div className="mb-4 flex flex-col space-y-2">
        <Typography.h3 className="text-lg font-medium">
          Comment on DEV Community:
        </Typography.h3>
        <Link href={url} target="_blank" className="text-blue-600">
          {url}
        </Link>
      </div>
      <BlogCommentList
        id={id}
        totalComments={comments_count}
        comments={comments}
      />
    </>
  );
};

export default BlogReaderView;

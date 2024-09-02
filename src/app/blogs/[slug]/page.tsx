import { BlogDetailProps, CommentItemProps } from "@/commons/types/blog";
import BlurFade from "@/components/magicui/blur-fade";
import BackButton from "@/components/ui/back-button";
import Typography from "@/components/ui/typography";
import { getBlogDetail, getBlogViews, getComments } from "@/services/devto";
import { BlogPosting, WithContext } from "schema-dts";
import BlogReaderView from "./components/blog-reader-view";

type BlogsDetailPageProps = {
  params: { content: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

function generateStructuredData(
  blog: BlogDetailProps,
  comments: CommentItemProps[]
): WithContext<BlogPosting> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    name: blog.title,
    description: blog.description,
    datePublished: blog.published_at,
    dateCreated: blog.created_at,
    url: blog.url,
    author: {
      "@type": "Person",
      name: blog.user.name,
      image: {
        "@type": "ImageObject",
        url: blog.user.profile_image,
      },
      url: blog.user.website_url,
    },
    image: {
      "@type": "ImageObject",
      url: blog.cover_image,
    },
    commentCount: comments.length,
    keywords: blog.tag_list,
  };
}

const BlogsDetailPage = async ({
  params,
  searchParams,
}: BlogsDetailPageProps) => {
  const blog = await getBlogDetail({ params, searchParams });
  const pageViewCount = await getBlogViews(searchParams.id as string);
  const comments = await getComments(searchParams.id as string);

  return (
    <BlurFade delay={0.25 * 0.05} inView>
      <div className="mb-6">
        <BackButton />
      </div>
      <BlogReaderView
        content={blog}
        pageViewCount={pageViewCount}
        comments={comments}
      />
    </BlurFade>
  );
};

export default BlogsDetailPage;

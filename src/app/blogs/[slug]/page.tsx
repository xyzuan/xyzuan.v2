import BlurFade from "@/components/magicui/blur-fade";
import BackButton from "@/components/ui/back-button";
import { getBlogDetail, getBlogViews, getComments } from "@/services/devto";
import BlogReaderView from "./components/blog-reader-view";

type BlogsDetailPageProps = {
  params: { content: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

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

import BlurFade from "@/components/magicui/blur-fade";
import BackButton from "@/components/ui/back-button";
import { getBlogDetail, getBlogViews, getComments } from "@/services/devto";
import BlogReaderView from "./components/blog-reader-view";
import { Metadata } from "next";
import { METADATA } from "@/commons/constants/metadata";

type BlogsDetailPageProps = {
  params: { content: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
  searchParams,
}: BlogsDetailPageProps): Promise<Metadata> {
  const blog = await getBlogDetail({ params, searchParams });
  return {
    title: `${blog.title} ${METADATA.exTitle}`,
    description: blog.description,
    openGraph: {
      images: blog.cover_image,
      url: `${process.env.DOMAIN}/${blog.slug}`,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: "article",
      authors: blog.user.name,
    },
    keywords: blog.title,
    alternates: {
      canonical: `${process.env.DOMAIN}/${blog.slug}`,
    },
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

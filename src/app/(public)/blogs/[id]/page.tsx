import BlurFade from "@/components/magicui/blur-fade";
import BackButton from "@/components/ui/back-button";
import { getBlogDetail, incrementBlogView } from "@/services/blogs";
import BlogReaderView from "./components/blog-reader-view";
import { Metadata } from "next";
import { METADATA } from "@/commons/constants/metadata";

type BlogsDetailPageProps = {
  params: { id: number };
};

export async function generateMetadata({
  params,
}: BlogsDetailPageProps): Promise<Metadata> {
  const blog = await getBlogDetail(params.id);
  return {
    title: `${blog.title} ${METADATA.exTitle}`,
    // description: blog.description,
    openGraph: {
      images: blog.img,
      url: `${process.env.DOMAIN}/blogs/${blog.id}`,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: "article",
      authors: "Jody Yuantoro",
    },
    keywords: blog.title,
    alternates: {
      canonical: `${process.env.DOMAIN}/blogs/${blog.id}`,
    },
  };
}

const BlogsDetailPage = async ({ params }: BlogsDetailPageProps) => {
  await incrementBlogView(params.id);
  const blog = await getBlogDetail(params.id);

  return (
    <BlurFade delay={0.25 * 0.05} inView>
      <div className="mb-6">
        <BackButton />
      </div>
      <BlogReaderView blogData={blog} />
    </BlurFade>
  );
};

export default BlogsDetailPage;

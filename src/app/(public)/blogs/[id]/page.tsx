import { Metadata } from "next";
import BlurFade from "@/components/magicui/blur-fade";
import BackButton from "@/components/ui/back-button";
import { getBlogDetail } from "@/services/blogs";
import BlogReaderView from "./components/blog-reader-view";
import { METADATA } from "@/commons/constants/metadata";
import revalidate, { incrementBlogView } from "@/app/actions";
import BlogCommentInput from "./components/blog-comment-input";

type BlogsDetailPageProps = {
  params: { id: number };
};

export async function generateMetadata({
  params,
}: BlogsDetailPageProps): Promise<Metadata> {
  const blog = await getBlogDetail(params.id);
  return {
    title: `${blog.title} ${METADATA.exTitle}`,
    description: blog.description,
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
  revalidate("/");
  await incrementBlogView(params.id);
  const blog = await getBlogDetail(params.id);

  return (
    <>
      <BlurFade>
        <div className="mb-6">
          <BackButton />
        </div>
        <BlogReaderView blogData={blog} />
      </BlurFade>

      <footer className="sticky bottom-0 w-full z-20 pb-[86px] md:pb-5">
        <div className="relative z-50 ">
          <BlogCommentInput reactions={blog.reactions} id={params.id} />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-52 md:h-36 bg-gradient-to-t from-white dark:from-background pointer-events-none z-10"></div>
      </footer>
    </>
  );
};

export default BlogsDetailPage;

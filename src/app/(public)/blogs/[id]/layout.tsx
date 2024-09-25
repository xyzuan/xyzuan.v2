import BlogCommentInput from "./components/blog-comment-input";

const BlogDetailLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
      <footer className="sticky bottom-0 w-full z-20">
        <div className="relative z-50 mb-[86px] md:mb-5">
          <BlogCommentInput />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-52 md:h-36 bg-gradient-to-t from-white dark:from-background pointer-events-none z-10"></div>
      </footer>
    </div>
  );
};

export default BlogDetailLayout;

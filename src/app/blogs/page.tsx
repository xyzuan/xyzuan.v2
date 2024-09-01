import Typography from "@/components/ui/typography";

import BackButton from "@/components/ui/back-button";
import BlurFade from "@/components/magicui/blur-fade";

const BlogsPage = () => {
  return (
    <BlurFade delay={0.25 * 0.05} inView>
      <div className="mb-6">
        <BackButton />
        <Typography.h3>Blogs</Typography.h3>
        <Typography.p>Currently Work in Proggress</Typography.p>
      </div>
    </BlurFade>
  );
};

export default BlogsPage;

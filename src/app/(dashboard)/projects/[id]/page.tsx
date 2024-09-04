import Typography from "@/components/ui/typography";

import BackButton from "@/components/ui/back-button";
import BlurFade from "@/components/magicui/blur-fade";

const DetailProjectPage = () => {
  return (
    <BlurFade delay={0.25 * 0.05} inView>
      <div className="mb-6">
        <BackButton />
        <Typography.h3>Currently Work in Proggress</Typography.h3>
      </div>
    </BlurFade>
  );
};

export default DetailProjectPage;

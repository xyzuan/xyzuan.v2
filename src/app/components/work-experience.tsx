import Typography from "@/components/ui/typography";
import WorkCard from "@/app/components/work-card";
import { getAllWorks } from "@/services/works";
import BlurFade from "@/components/magicui/blur-fade";

const WorkExperience = async () => {
  const works = await getAllWorks();

  return (
    <div className="flex flex-col h-fit gap-6">
      <Typography.h3>Work & Experience</Typography.h3>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {works?.data?.work.map((value, idx) => {
          return (
            <BlurFade key={value.id} delay={0.25 + idx * 0.05} inView>
              <WorkCard
                logo={value.logo}
                title={value.jobTitle}
                instance={value.instance}
                location={value.address}
                date={value.date}
              />
            </BlurFade>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperience;

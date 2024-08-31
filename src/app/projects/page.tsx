import Typography from "@/components/ui/typography";
import ProjectCard from "./components/project-card";
import BackButton from "@/components/ui/back-button";
import BlurFade from "@/components/magicui/blur-fade";

const Projects = () => {
  return (
    <BlurFade delay={0.25 * 0.05} inView>
      <div className="mb-6">
        <BackButton />
        <Typography.h3>Projects</Typography.h3>
        <Typography.p>
          Several projects that I have worked on, both private and open source.
        </Typography.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx) => {
          return (
            <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
              <ProjectCard />
            </BlurFade>
          );
        })}
      </div>
    </BlurFade>
  );
};

export default Projects;

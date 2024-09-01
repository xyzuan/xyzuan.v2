import Typography from "@/components/ui/typography";
import ProjectCard from "./components/project-card";
import BackButton from "@/components/ui/back-button";
import BlurFade from "@/components/magicui/blur-fade";
import { getAllProjects } from "@/services/project";

const Projects = async () => {
  const projects = await getAllProjects();

  return (
    <BlurFade delay={0.25 * 0.05} inView>
      <div className="mb-6">
        <BackButton />
        <Typography.h3>Projects</Typography.h3>
        <Typography.p>
          Several projects that I have worked on, both private and open source.
        </Typography.p>
      </div>
      <div className="grid gap-5 px-1 pt-2 sm:grid-cols-2">
        {projects?.data?.projects.map((value, idx) => {
          return (
            <BlurFade key={value.id} delay={0.25 + idx * 0.05} inView>
              <ProjectCard
                title={value.title}
                img={value.img}
                desc={value.content}
              />
            </BlurFade>
          );
        })}
      </div>
    </BlurFade>
  );
};

export default Projects;

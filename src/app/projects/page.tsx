import Typography from "@/components/ui/typography";
import ProjectCard from "./components/project-card";
import BackButton from "@/components/ui/back-button";

const Projects = () => {
  return (
    <main>
      <div className="mb-6">
        <BackButton />
        <Typography.h3>Projects</Typography.h3>
        <Typography.p>
          Several projects that I have worked on, both private and open source.
        </Typography.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </main>
  );
};

export default Projects;

import { Metadata } from "next";
import { METADATA } from "@/commons/constants/metadata";

import Typography from "@/components/ui/typography";
import ProjectCard from "./components/project-card";
import BlurFade from "@/components/magicui/blur-fade";
import { getAllProjects } from "@/services/project";

export const metadata: Metadata = {
  title: `Projects ${METADATA.exTitle}`,
  description: "Software Engineer portfolio ideas",
  keywords: "portfolio frontend developer",
  alternates: {
    canonical: `${process.env.DOMAIN}/projects`,
  },
};
const ProjectsPage = async () => {
  const projects = await getAllProjects();

  return (
    <BlurFade>
      <div className="mb-6">
        <Typography.H3>Projects</Typography.H3>
        <Typography.P>
          Several projects that I have worked on, both private and open source.
        </Typography.P>
      </div>
      <div className="grid gap-5 px-1 pt-2 sm:grid-cols-2">
        {projects?.data?.map((value, idx) => {
          return (
            <ProjectCard
              key={idx}
              id={value.id}
              title={value.title}
              img={value.img}
              description={value.description}
              stacks={value.stacks}
              isFeatured={value.isFeatured}
            />
          );
        })}
      </div>
    </BlurFade>
  );
};

export default ProjectsPage;

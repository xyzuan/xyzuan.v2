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
    <>
      <div className="mb-6">
        <Typography.h3>Projects</Typography.h3>
        <Typography.p>
          Several projects that I have worked on, both private and open source.
        </Typography.p>
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
    </>
  );
};

export default ProjectsPage;

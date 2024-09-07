import { Project } from "@/commons/types/project.types";
import BlurFade from "@/components/magicui/blur-fade";
import AdminProjectCard from "./admin-projects-card";

interface AdminProjectsViewProps {
  projects: Project[];
}

export const AdminProjectsView: React.FC<AdminProjectsViewProps> = ({
  projects,
}) => {
  return (
    <div className="grid gap-5 px-1 pt-2 md:grid-cols-3 xl:grid-cols-4">
      {projects?.map((value, idx) => (
        <BlurFade key={value.id} delay={0.25 + idx * 0.05} inView>
          <AdminProjectCard
            id={value.id}
            title={value.title}
            img={value.img}
            description={value.description}
            stacks={value.stacks}
            isFeatured={value.isFeatured}
          />
        </BlurFade>
      ))}
    </div>
  );
};

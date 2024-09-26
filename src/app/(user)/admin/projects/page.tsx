import BlurFade from "@/components/magicui/blur-fade";
import Typography from "@/components/ui/typography";
import { getAllProjects } from "@/services/project";
import { AdminProjectsView } from "./components/admin-projects-view";

const AdminProjectsPage = async () => {
  const projects = await getAllProjects();

  return (
    <BlurFade delay={0.25 * 0.05} inView>
      <div className="mb-6">
        <Typography.H3>Projects</Typography.H3>
        <Typography.P>
          Several projects that I have worked on, both private and open source.
        </Typography.P>
      </div>
      <AdminProjectsView projects={projects.data} />
    </BlurFade>
  );
};

export default AdminProjectsPage;

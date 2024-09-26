import BackButton from "@/components/ui/back-button";
import BlurFade from "@/components/magicui/blur-fade";
import { getProjectById } from "@/services/project";
import ProjectReaderView from "./components/project-reader-view";
import ProjectReaderHeader from "./components/project-reader-header";

type DetailProjectPageProps = {
  params: { id: number };
  searchParams: { [key: string]: string | string[] | undefined };
};

const DetailProjectPage = async ({
  params,
  searchParams,
}: DetailProjectPageProps) => {
  const projects = await getProjectById(params.id);

  return (
    <BlurFade>
      <div className="mb-6">
        <div className="mb-6">
          <BackButton />
        </div>
        <ProjectReaderHeader
          title={projects.data.title}
          description={projects.data.description}
          stacks={projects.data.stacks}
          href={projects.data.href}
          projectLink={projects.data.projectLink}
        />
        <ProjectReaderView data={projects.data} />
      </div>
    </BlurFade>
  );
};

export default DetailProjectPage;

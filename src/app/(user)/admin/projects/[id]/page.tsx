import BackButton from "@/components/ui/back-button";
import BlurFade from "@/components/magicui/blur-fade";
import { getProjectById } from "@/services/project";
import Typography from "@/components/ui/typography";
import { STACKS } from "@/commons/constants/stacks";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import EditProjectForm from "./components/edit-project-form";

type EditProjectPageProps = {
  params: { id: number };
  searchParams: { [key: string]: string | string[] | undefined };
};
const EditProjectPage = async ({
  params,
  searchParams,
}: EditProjectPageProps) => {
  const project = await getProjectById(params.id);
  return (
    <BlurFade delay={0.25 * 0.05} inView>
      <div className="mb-6">
        <div className="mb-6">
          <BackButton />
        </div>
      </div>
      <EditProjectForm project={project.data} />
    </BlurFade>
  );
};

export default EditProjectPage;

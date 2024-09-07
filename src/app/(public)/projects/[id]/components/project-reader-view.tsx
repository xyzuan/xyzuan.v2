import Image from "@/components/ui/image";
import MDXComponent from "@/components/ui/mdx-components";
import { Project } from "@/commons/types/project.types";

interface ProjectReaderViewProps {
  data: Project;
}

const ProjectReaderView = ({ data }: ProjectReaderViewProps) => {
  const { id, img, title, stacks, content, description, href, isFeatured } =
    data;
  return (
    <>
      <div className="space-y-6 leading-[1.8] dark:text-neutral-300 ">
        <div className="overflow-hidden rounded-xl">
          <Image
            src={img}
            width={800}
            height={500}
            alt={title}
            className="transition-all w-full duration-700 hover:scale-105"
          />
        </div>
        {content && <MDXComponent>{content}</MDXComponent>}
      </div>
    </>
  );
};

export default ProjectReaderView;

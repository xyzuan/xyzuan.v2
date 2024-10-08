import { STACKS } from "@/commons/constants/stacks";
import { ProjectStack } from "@/commons/types/project.types";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

interface BlogReaderHeaderProps {
  title: string;
  description: string;
  href: string;
  projectLink: string;
  stacks: ProjectStack[];
}

const ProjectReaderHeader = ({
  title,
  description,
  stacks,
  href,
  projectLink,
}: BlogReaderHeaderProps) => {
  return (
    <>
      <Typography.H1>{title}</Typography.H1>
      <Typography.P className="mt-3">{description}</Typography.P>
      <div className="mb-6 flex flex-col justify-between gap-6 pt-5 sm:flex-row">
        <div className="flex flex-wrap items-center gap-3 pt-2 ">
          <Typography.P>Tech Stack : </Typography.P>
          {stacks?.map((item) => {
            return <div key={item.id}>{STACKS[item.description]}</div>;
          })}
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          {href && (
            <Link href={href}>
              <Button>
                <span className="mr-2">
                  <ArrowUpRight />
                </span>
                Live Demo
              </Button>
            </Link>
          )}
          {projectLink && (
            <Link href={projectLink}>
              <Button variant="secondary">
                <span className="mr-3">
                  <SiGithub size={16} />
                </span>
                Source Code
              </Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectReaderHeader;

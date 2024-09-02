import { STACKS } from "@/commons/constants/stacks";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "@/components/ui/image";
import { ChevronRight, PinIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const stacksArray = [
  "JavaScript",
  "TypeScript",
  "TailwindCSS",
  "Next.js",
  "Node.js",
];

type ProjectCardProps = {
  id: number;
  img: string;
  title: string;
  desc: string;
};

const ProjectCard = ({ id, img, title, desc }: ProjectCardProps) => {
  return (
    <Link href={`/projects/${id}`}>
      <Card className="group relative cursor-pointer border border-neutral-200 dark:border-neutral-900 lg:hover:scale-[102%]">
        {/* {is_featured && ( */}
        <div className="absolute right-3 top-3 z-[2] flex items-center gap-1 rounded-full bg-black px-2 py-1 text-[13px] font-medium text-white dark:bg-white dark:text-black">
          <PinIcon size={15} />
          <span>Featured</span>
        </div>
        {/* )} */}
        <div className="relative">
          <Image
            src={img}
            width={400}
            height={200}
            alt={title}
            className="h-48 w-full rounded-t-xl object-cover"
          />
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center gap-1 rounded-t-xl bg-black text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-80">
            <span>View Project</span>
            <ChevronRight size={20} />
          </div>
        </div>
        <CardHeader className="space-y-2 p-5">
          <CardTitle className="cursor-pointer text-lg text-neutral-700 transition-all duration-300 dark:text-neutral-300 dark:group-hover:text-white lg:group-hover:text-black">
            {title}
          </CardTitle>
          <CardDescription className="text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-400 line-clamp-2">
            {desc}
          </CardDescription>
          <div className="flex flex-wrap items-center gap-3 pt-2 ">
            {stacksArray?.map((stack: string, index: number) => (
              <div key={index}>{STACKS[stack]}</div>
            ))}
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default ProjectCard;

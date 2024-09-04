export type Project = {
  id: number;
  img: string;
  title: string;
  stacks: ProjectStack[];
  content: string;
  href: string;
};

export type ProjectCardProps = {
  id: number;
  img: string;
  title: string;
  desc: string;
  stacks: ProjectStack[];
};

export type ProjectStack = {
  id: number;
  description: string;
  projectId: number;
};

export type ProjectsResponse = {
  status: number;
  data: Project[];
};

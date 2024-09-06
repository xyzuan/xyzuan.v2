export type Project = {
  id: number;
  img: string;
  title: string;
  stacks: ProjectStack[];
  content: string;
  description: string;
  href: string;
  projectLink: string;
  isFeatured: boolean;
  createdAt: string;
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

export type ProjectResponse = {
  status: number;
  data: Project;
};

import { PROJECT_ENDPOINT } from "@/commons/constants/project";

type Project = {
  id: number;
  img: string;
  title: string;
  content: string;
  href: string;
};

type ProjectsResponse = {
  status: number;
  data: Project[];
};

export const getAllProjects = async (): Promise<ProjectsResponse> => {
  const response = await fetch(PROJECT_ENDPOINT, {
    method: "GET",
    next: {
      revalidate: 60,
    },
  });
  const status = response.status;

  if (status >= 400) {
    return { status, data: [] };
  }

  return await response.json();
};

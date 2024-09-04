import { PROJECT_ENDPOINT } from "@/commons/constants/project";
import { ProjectsResponse } from "@/commons/types/project.types";

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

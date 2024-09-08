import { PROJECT_ENDPOINT } from "@/commons/constants/api";
import {
  ProjectResponse,
  ProjectsResponse,
} from "@/commons/types/project.types";

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

export const getProjectById = async (id: number): Promise<ProjectResponse> => {
  const response = await fetch(`${PROJECT_ENDPOINT}/${id}`, {
    method: "GET",
    next: {
      revalidate: 60,
    },
  });
  return await response.json();
};

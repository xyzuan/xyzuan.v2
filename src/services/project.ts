import axios from "axios";

const PROJECT_ENDPOINT = "https://api.xyzuan.my.id/v2/portfolio";

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
  const response = await axios.get(PROJECT_ENDPOINT, {});
  const status = response.status;

  if (status >= 400) {
    return { status, data: [] };
  }

  return {
    status,
    data: response.data.data as Project[],
  };
};

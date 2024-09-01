import axios from "axios";

const PROJECT_ENDPOINT = "https://xyzuan.my.id/api/portfolios";

type Project = {
  id: number;
  img: string;
  title: string;
  content: string;
  href: string;
};

type ProjectsResponse = {
  status: number;
  data: {
    projects: Project[];
  };
};

export const getAllProjects = async (): Promise<ProjectsResponse> => {
  const response = await axios.get(PROJECT_ENDPOINT, {});

  const status = response.status;

  if (status >= 400) {
    return { status, data: { projects: [] } };
  }

  const getData = response.data;

  const data = {
    projects: getData.portfolios as Project[],
  };

  return {
    status,
    data,
  };
};

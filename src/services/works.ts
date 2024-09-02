import { WORKS_ENDPOINT } from "@/commons/constants/work";

type Work = {
  id: number;
  logo: string;
  instance: string;
  instanceLink: string;
  jobTitle: string;
  address: string;
  date: string;
};

type WorksResponse = {
  status: number;
  data: {
    work: Work[];
  };
};

export const getAllWorks = async (): Promise<WorksResponse> => {
  const response = await fetch(WORKS_ENDPOINT, {
    method: "GET",
    next: {
      revalidate: 60,
    },
  });

  const status = response.status;

  if (status >= 400) {
    return { status, data: { work: [] } };
  }

  const getData = await response.json();

  const data = {
    work: getData.works as Work[],
  };

  return {
    status,
    data,
  };
};

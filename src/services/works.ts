import axios from "axios";

const WORKS_ENDPOINT = "https://xyzuan.my.id/api/works";

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
  const response = await axios.get(WORKS_ENDPOINT, {});

  const status = response.status;

  if (status >= 400) {
    return { status, data: { work: [] } };
  }

  const getData = response.data;

  const data = {
    work: getData.works as Work[],
  };

  return {
    status,
    data,
  };
};

export type Work = {
  id: number;
  logo: string;
  instance: string;
  responsibilities: WorkResponsibilites[];
  instanceLink: string;
  jobTitle: string;
  address: string;
  date: string;
};

export type WorkResponsibilites = {
  id: number;
  description: string;
  workId: number;
};

export type WorksResponse = {
  status: number;
  data: Work[];
};

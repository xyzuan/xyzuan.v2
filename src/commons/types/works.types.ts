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

export type WorkCardProps = {
  logo: string;
  title: string;
  instance: string;
  date: string;
  location: string;
  responsibilities: WorkResponsibilites[];
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

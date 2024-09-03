import { WORKS_ENDPOINT } from "@/commons/constants/work";
import { WorksResponse } from "@/types/works.types";

export const getAllWorks = async (): Promise<WorksResponse> => {
  const response = await fetch(WORKS_ENDPOINT, {
    method: "GET",
    next: {
      revalidate: 60,
    },
  });
  const status = response.status;

  if (response.status >= 400) {
    return { status, data: [] };
  }

  return await response.json();
};

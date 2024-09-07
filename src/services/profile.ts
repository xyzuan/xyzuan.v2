import { PROFILE_ME_ENDPOINT } from "@/commons/constants/profile";

export const getMyProfile = async () => {
  const response = await fetch(PROFILE_ME_ENDPOINT, {
    method: "GET",
    credentials: "include",
  });

  return response;
};

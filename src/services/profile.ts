import { PROFILE_ME_ENDPOINT } from "@/commons/constants/profile";

export const getMyProfile = async (token?: string) => {
  const headers: HeadersInit = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};

  const response = await fetch(PROFILE_ME_ENDPOINT, {
    method: "GET",
    headers: headers,
    credentials: "include",
  });

  return response;
};

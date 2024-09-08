import { CHAT_ENDPOINT } from "@/commons/constants/api";

export const getChats = async () => {
  const response = await fetch(CHAT_ENDPOINT, {
    method: "GET",
    credentials: "include",
  });
  const status = response.status;

  if (status >= 400) {
    return { status, data: [] };
  }

  return await response.json();
};

export const postChat = async (message: string) => {
  const response = await fetch(CHAT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      message,
    }),
  });
  return response;
};

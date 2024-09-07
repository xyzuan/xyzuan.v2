import { AUTH_LOGIN_ENDPOINT } from "@/commons/constants/auth";

export const authLogin = async (email: string, password: string) => {
  const response = await fetch(AUTH_LOGIN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

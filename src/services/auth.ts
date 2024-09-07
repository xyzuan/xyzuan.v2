import {
  AUTH_GOOGLE_ENDPOINT,
  AUTH_LOGIN_ENDPOINT,
  AUTH_LOGOUT_ENDPOINT,
  AUTH_SIGNUP_ENDPOINT,
} from "@/commons/constants/auth";

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
  return response;
};

export const authGoogle = async (callback: string) => {
  const queryParams = new URLSearchParams({
    next: callback,
  }).toString();

  window.location.href = `${AUTH_GOOGLE_ENDPOINT}?${queryParams}`;
};

export const authSignUp = async (
  name: string,
  email: string,
  password: string
) => {
  const response = await fetch(AUTH_SIGNUP_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });
  return response;
};

export const authSignOut = async () => {
  const response = await fetch(AUTH_LOGOUT_ENDPOINT, {
    method: "POST",
    credentials: "include",
  });
  return response;
};

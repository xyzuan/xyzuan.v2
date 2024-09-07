const AUTH_BASE_PATH =
  process.env.NEXT_PUBLIC_AUTH_BASE_PATH || "https://api.xyzuan.my.id/v2";

export const AUTH_LOGIN_ENDPOINT = `${AUTH_BASE_PATH}/auth/login`;
export const AUTH_SIGNUP_ENDPOINT = `${AUTH_BASE_PATH}/auth/signup`;
export const AUTH_LOGOUT_ENDPOINT = `${AUTH_BASE_PATH}/auth/logout`;
export const AUTH_GOOGLE_ENDPOINT = `${AUTH_BASE_PATH}/auth/google`;

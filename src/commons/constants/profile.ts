const PROFILE_BASE_PATH =
  process.env.NEXT_PUBLIC_AUTH_BASE_PATH || "https://api.xyzuan.my.id/v2";

export const PROFILE_ME_ENDPOINT = `${PROFILE_BASE_PATH}/me`;

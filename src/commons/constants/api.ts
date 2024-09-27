const API_BASE_PATH = process.env.API_BASE_PATH;
const PUBLIC_API_BASE_PATH = process.env.NEXT_PUBLIC_API_BASE_PATH;

// Chat
export const CHAT_ENDPOINT = `${PUBLIC_API_BASE_PATH}/message`;

// Blog
export const BLOG_ENDPOINT = `${PUBLIC_API_BASE_PATH}/blog`;
export const BLOG_VIEW_ENDPOINT = `${API_BASE_PATH}/blog/view`;

// Auth Eden
export const AUTH_LOGIN_ENDPOINT = `${PUBLIC_API_BASE_PATH}/auth/login`;
export const AUTH_SIGNUP_ENDPOINT = `${PUBLIC_API_BASE_PATH}/auth/signup`;
export const AUTH_LOGOUT_ENDPOINT = `${PUBLIC_API_BASE_PATH}/auth/logout`;
export const AUTH_GOOGLE_ENDPOINT = `${PUBLIC_API_BASE_PATH}/auth/google`;
export const AUTH_GITHUB_ENDPOINT = `${PUBLIC_API_BASE_PATH}/auth/github`;
export const AUTH_LINKEDIN_ENDPOINT = `${PUBLIC_API_BASE_PATH}/auth/linkedin`;

// Profile
export const PROFILE_ME_ENDPOINT = `${PUBLIC_API_BASE_PATH}/me`;

// Project
export const PROJECT_ENDPOINT = `${API_BASE_PATH}/portfolio`;

// Work
export const WORKS_ENDPOINT = `${API_BASE_PATH}/work`;

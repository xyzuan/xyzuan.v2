import revalidate from "@/app/actions";
import { BLOG_ENDPOINT, BLOG_VIEW_ENDPOINT } from "@/commons/constants/api";
import { BlogItem } from "@/commons/types/blogs.types";

export const getBlogData = async (): Promise<BlogItem[]> => {
  const response = await fetch(BLOG_ENDPOINT, {
    method: "GET",
    // TO-DO Implement callback function to revalidate data
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
  return response.data;
};

export const getBlogDetail = async (id: number): Promise<BlogItem> => {
  const response = await fetch(`${BLOG_ENDPOINT}/${id}`, {
    method: "GET",
    // TO-DO Implement callback function to revalidate data
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
  return response.data;
};

export const incrementBlogView = async (id: number) => {
  const URL = `${BLOG_VIEW_ENDPOINT}/${id}`;
  await fetch(URL, {
    method: "POST",
    cache: "no-cache",
  });
  revalidate(`/`);
};

export const postBlogComment = async (id: string, content: string) => {
  const response = await fetch(`${BLOG_ENDPOINT}/comment/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      content,
    }),
  });

  revalidate(`/blogs/${id}`);
  return response;
};

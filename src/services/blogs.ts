import revalidate from "@/app/actions";
import { BLOG_ENDPOINT } from "@/commons/constants/api";
import { BlogItem } from "@/commons/types/blogs.types";

export const getBlogData = async (): Promise<BlogItem[]> => {
  const response = await fetch(BLOG_ENDPOINT, {
    method: "GET",
    next: {
      revalidate: 0,
    },
  }).then((res) => res.json());
  return response.data;
};

export const getBlogDetail = async (id: number): Promise<BlogItem> => {
  const response = await fetch(`${BLOG_ENDPOINT}/${id}`, {
    method: "GET",
    // TO-DO Implement callback function to revalidate data
    next: {
      revalidate: 0,
    },
  }).then((res) => res.json());
  return response.data;
};

export const postBlogComment = async (id: number, content: string) => {
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

export const postBlogReaction = async (id: number, reaction: string) => {
  const response = await fetch(`${BLOG_ENDPOINT}/reaction/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      type: reaction,
    }),
  });

  revalidate(`/blogs/${id}`);
  return response;
};

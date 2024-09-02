import { DEVTO_BLOG_API } from "@/commons/constants/blog";
import {
  BlogDetailProps,
  BlogItem,
  CommentItemProps,
} from "@/commons/types/blog";
import axios from "axios";

type BlogParamsProps = {
  params: { content: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function getBlogData(): Promise<BlogItem[]> {
  const response = await axios.get(DEVTO_BLOG_API);
  if (response?.status !== 200) return {} as BlogItem[];
  return response.data;
}

export async function getBlogDetail({
  searchParams,
}: BlogParamsProps): Promise<BlogDetailProps> {
  const URL = `https://dev.to/api/articles/${searchParams.id}`;
  const response = await axios.get(URL, {
    headers: {
      "api-key": process.env.DEVTO_KEY,
    },
  });
  if (response.status !== 200) return {} as BlogDetailProps;
  return response.data;
}

export async function getComments(postId: string): Promise<CommentItemProps[]> {
  const DEV_TO_URL = `https://dev.to/api/comments/?a_id=${postId}`;
  const response = await axios.get(DEV_TO_URL, {
    headers: {
      "api-key": process.env.DEVTO_KEY,
    },
  });
  if (response?.status !== 200) return [];
  return response.data;
}

export async function getBlogViews(searchParams: string) {
  const URL = `https://dev.to/api/articles/me/all`;
  const response = await axios.get(URL, {
    headers: {
      "api-key": process.env.DEVTO_KEY,
    },
  });
  if (response.status !== 200) return 0;
  const data = response.data;

  const findArticle = data?.find(
    (blog: BlogItem) => blog.id === parseInt(searchParams)
  );
  const page_views_count: number = findArticle?.page_views_count;
  return page_views_count;
}

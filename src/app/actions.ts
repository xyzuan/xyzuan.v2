"use server";

import { BLOG_VIEW_ENDPOINT } from "@/commons/constants/api";
import { revalidatePath } from "next/cache";

export default async function revalidate(path: string) {
  revalidatePath(path);
}

export const incrementBlogView = async (id: number) => {
  const URL = `${BLOG_VIEW_ENDPOINT}/${id}`;
  await fetch(URL, {
    method: "POST",
    cache: "no-cache",
  });
};

import { Profile } from "./profile.types";

export type BlogItem = {
  id: number;
  img: string;
  title: string;
  description: string;
  content: string;
  comments: CommentItem[];
  reactions: number;
  viewCount: number;
  commentsCount: number;
  reactionsCount: number;
  createdAt: string;
};

export type BlogProps = {
  blogs: BlogItem[];
};

export type CommentItem = {
  id: number;
  content: string;
  createdAt: string;
  user: Profile;
};

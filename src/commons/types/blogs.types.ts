import { Profile } from "./profile.types";

export type BlogItem = {
  id: number;
  img: string;
  title: string;
  description: string;
  content: string;
  tags: string;
  comments: CommentItem[];
  reactions: ReactionItem[];
  viewCount: number;
  commentsCount: number;
  reactionsCount: number;
  createdAt: string;
};

export type BlogProps = {
  blogs: BlogItem[];
};

export type ReactionItem = {
  id: number;
  type: string;
  user: Profile;
};

export type CommentItem = {
  id: number;
  content: string;
  createdAt: string;
  user: Profile;
};

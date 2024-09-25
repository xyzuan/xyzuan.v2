import { CommentItem } from "@/commons/types/blogs.types";
import BlogCommentItem from "./blog-comment-item";
import EmptyState from "@/components/ui/emppty-state";
import { comment } from "postcss";

interface BlogCommentListProps {
  comments: CommentItem[];
}

export default function BlogCommentList({ comments }: BlogCommentListProps) {
  return (
    <section id="comments" className="space-y-5 pb-6 pt-4">
      {comment.length >= 1 ? (
        <>
          {comments?.map((comment) => (
            <BlogCommentItem key={comment?.id} {...comment} />
          ))}
        </>
      ) : (
        <EmptyState message="No Comment." />
      )}
    </section>
  );
}

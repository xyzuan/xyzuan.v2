"use client";

import { formatDate } from "@/commons/helpers";
import { CommentItem } from "@/commons/types/blogs.types";
import { Card, CardHeader } from "@/components/ui/card";
import Image from "@/components/ui/image";
import Typography from "@/components/ui/typography";

export default function BlogCommentItem({
  user,
  content,
  createdAt,
}: CommentItem) {
  return (
    <div
      data-testid="comment-item"
      className="flex gap-5 break-all dark:text-neutral-400"
    >
      <div className="flex-shrink-0">
        <Image
          data-testid="user-comment-image"
          src={user?.iconUrl}
          alt={user?.name}
          width={40}
          height={40}
          rounded="rounded-full"
          className="border border-neutral-200 dark:border-neutral-800"
        />
      </div>
      <Card className="flex w-full flex-col gap-2">
        <CardHeader>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="font-medium dark:text-neutral-300">
              {user?.name}
            </div>
            <div className="hidden dark:text-neutral-700 sm:block">•</div>
            <div className="text-xs dark:text-neutral-500">
              {formatDate(createdAt, "MMM dd, yyyy, HH:mm")}
            </div>
          </div>
          <Typography.p className="max-w-[600px] leading-[1.8]">
            {content}
          </Typography.p>
        </CardHeader>
      </Card>
    </div>
  );
}

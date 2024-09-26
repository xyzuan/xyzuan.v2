"use client";

import { formatDate } from "@/commons/helpers";
import { CommentItem } from "@/commons/types/blogs.types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader } from "@/components/ui/card";
import { MdVerified as VerifiedIcon } from "react-icons/md";
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
        <Avatar className="h-12 w-12" data-testid="user-comment-image">
          <AvatarImage alt={user?.name} src={user?.iconUrl} />
          <AvatarFallback>{user?.name.slice(0, 1)}</AvatarFallback>
        </Avatar>
      </div>
      <Card className="flex w-full flex-col gap-2">
        <CardHeader>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <Typography.p className="flex items-center font-medium text-neutral-700 dark:text-neutral-300">
              {user?.name}
              {user?.isAdmin && (
                <span>
                  <VerifiedIcon size={13} className="text-blue-400 ml-1" />
                </span>
              )}
            </Typography.p>
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

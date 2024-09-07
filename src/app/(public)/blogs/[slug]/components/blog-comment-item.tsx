"use client";

import { formatDate } from "@/commons/helpers";
import { CommentItemProps } from "@/commons/types/blogs.types";
import { Card, CardHeader } from "@/components/ui/card";
import Image from "@/components/ui/image";
import { useEffect, useRef } from "react";

export default function BlogCommentItem({
  body_html,
  created_at,
  user,
}: CommentItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const codeElements = contentRef.current.getElementsByTagName("code");
      for (let i = 0; i < codeElements.length; i++) {
        const codeElement = codeElements[i];
        codeElement.classList.add("break-words");
        codeElement.classList.add("text-xs");
        codeElement.classList.add("whitespace-pre-wrap");
      }
    }
  }, [body_html]);
  return (
    <div
      data-testid="comment-item"
      className="flex gap-5 break-all dark:text-neutral-400"
    >
      <div className="flex-shrink-0">
        <Image
          data-testid="user-comment-image"
          src={user?.profile_image_90}
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
              {formatDate(created_at, "MMM dd, yyyy, HH:mm")}
            </div>
          </div>
          <div
            data-testid="comment-body"
            ref={contentRef}
            className="max-w-[600px] leading-[1.8]"
            dangerouslySetInnerHTML={{ __html: body_html }}
          />
        </CardHeader>
      </Card>
    </div>
  );
}

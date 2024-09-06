import { formatDate } from "@/commons/helpers";
import { FaRegEye as ViewIcon } from "react-icons/fa";
import { HiOutlineClock as ClockIcon } from "react-icons/hi";
import { TbMessage2 as CommentIcon } from "react-icons/tb";
import Typography from "@/components/ui/typography";

interface BlogReaderHeaderProps {
  title: string;
  comments_count?: number;
  reading_time_minutes?: number;
  page_views_count?: number | null;
  published_at?: string;
}

const BlogReaderHeader = ({
  title,
  comments_count = 0,
  page_views_count,
  published_at,
  reading_time_minutes,
}: BlogReaderHeaderProps) => {
  return (
    <>
      <Typography.h1>{title}</Typography.h1>
      <div className="mb-6 flex flex-col justify-between gap-2 pb-6 pt-5 text-[14px] text-neutral-600 dark:text-neutral-400 sm:flex-row">
        <Typography.p>
          Published on
          <span className="px-1 font-medium">
            {published_at ? formatDate(published_at) : ""}
          </span>
        </Typography.p>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1 font-medium">
            <ViewIcon size={18} />
            <Typography.p className="ml-0.5 flex gap-1">
              <span>{page_views_count || "-"}</span>
              <span>Views</span>
            </Typography.p>
          </div>
          <div className="flex items-center gap-1 font-medium">
            <ClockIcon size={18} />
            <Typography.p className="ml-0.5 flex gap-1">
              <span>{reading_time_minutes}</span>
              <span>min read</span>
            </Typography.p>
          </div>
          <div
            className="hidden cursor-pointer items-center gap-1 font-medium hover:dark:text-neutral-300 xl:flex"
          >
            <CommentIcon size={20} />
            <Typography.p className="ml-0.5 flex gap-1">
              <span>{comments_count}</span>
              <span>Comment{comments_count > 1 && "s"}</span>
            </Typography.p>
          </div>
        </div>

        <div
          className="flex cursor-pointer items-center gap-1 font-medium hover:dark:text-neutral-300 xl:hidden"
        >
          <CommentIcon size={20} />
          <div className="ml-0.5 flex gap-1">
            <span>{comments_count}</span>
            <span>Comment{comments_count > 1 && "s"}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogReaderHeader;

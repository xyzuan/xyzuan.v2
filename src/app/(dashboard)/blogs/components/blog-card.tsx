"use client";

import { formatBlogSlug, formatDate, formatExcerpt } from "@/commons/helpers";
import { BlogItem } from "@/commons/types/blogs.types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "@/components/ui/image";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Typography from "@/components/ui/typography";
import clsx from "clsx";
import { motion } from "framer-motion";
import { EyeIcon, FlameIcon, ViewIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BiComment } from "react-icons/bi";
import { BsArrowRight as MoreIcon } from "react-icons/bs";
import { TbCalendarBolt as DateIcon } from "react-icons/tb";

const BlogCard = ({
  id,
  user,
  title,
  cover_image,
  published_at,
  description,
  slug,
  comments_count,
  public_reactions_count,
  page_views_count,
  tag_list,
}: BlogItem) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const newSlug = formatBlogSlug(slug);
  const trimmedTitle = title.slice(0, 70) + (title.length > 70 ? "..." : "");
  const trimmedContent =
    description.slice(0, 100) + (description.length > 80 ? "..." : "");

  const defaultImage = "/images/placeholder.png";

  const slideDownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Link href={`/blogs/${newSlug}?id=${id}`}>
      <Card
        className="group relative flex h-[400px] w-full flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-full rounded-xl duration-500 overflow-hidden">
          <Image
            src={cover_image || defaultImage}
            alt={title}
            fill={true}
            className="h-full w-full transform object-cover object-left transition-transform duration-300 group-hover:scale-105 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black opacity-80 transition-opacity duration-300"></div>
        </div>

        <div className="absolute flex h-full flex-col justify-between space-y-4 p-5">
          <div className="flex flex-wrap gap-2">
            {tag_list?.map((tag, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="rounded-full px-2.5 py-1 font-mono text-white border-white/20 text-xs backdrop-blur-2xl"
              >
                <span className="mr-1 font-semibold">#</span>
                {tag?.charAt(0).toUpperCase() + tag?.slice(1)}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col justify-end">
            <div className="flex flex-col space-y-3">
              <Typography.h3 className=" text-lg font-medium text-neutral-100 group-hover:underline group-hover:underline-offset-4 ">
                {trimmedTitle}
              </Typography.h3>
              <div className="flex items-center gap-1 text-neutral-400">
                <DateIcon size={14} />
                <span className="ml-0.5 text-xs">
                  {formatDate(published_at)}
                </span>
              </div>
              {trimmedContent && (
                <Typography.p className="text-sm leading-relaxed text-neutral-400">
                  {formatExcerpt(trimmedContent)}
                </Typography.p>
              )}
            </div>
            <Separator className="my-3 opacity-55" />
            <div className="flex justify-between gap-4 px-0.5 text-neutral-400">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Image
                    src={user.profile_image_90}
                    alt={user.name}
                    width={25}
                    height={25}
                    rounded="rounded-full"
                    className="rotate-3 border border-neutral-500"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <Typography.p>{user.name}</Typography.p>
                </TooltipContent>
              </Tooltip>

              <motion.div
                variants={slideDownVariants}
                initial="visible"
                animate={isHovered ? "hidden" : "visible"}
                className={clsx(
                  "flex justify-between gap-4 ",
                  isHovered && "hidden"
                )}
              >
                <div className="flex items-center gap-1">
                  <EyeIcon size={14} />
                  <span className="ml-0.5 text-xs font-medium">
                    {page_views_count.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <BiComment size={14} />
                  <span className="ml-0.5 text-xs font-medium">
                    {comments_count.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <FlameIcon size={14} />
                  <span className="ml-0.5 text-xs font-medium">
                    {public_reactions_count.toLocaleString()}
                  </span>
                </div>
              </motion.div>
              <motion.div
                variants={slideDownVariants}
                initial="hidden"
                animate={isHovered ? "visible" : "hidden"}
                className={clsx(
                  "flex items-center gap-1",
                  !isHovered && "hidden"
                )}
              >
                <span className="mr-0.5 text-xs font-medium">READ MORE</span>
                <MoreIcon size={16} />
              </motion.div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;

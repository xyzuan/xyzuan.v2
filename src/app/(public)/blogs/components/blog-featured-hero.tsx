"use client";

import { formatDate } from "@/commons/helpers";
import { BlogProps } from "@/commons/types/blogs.types";
import Image from "@/components/ui/image";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BiChevronLeft as PrevIcon,
  BiChevronRight as NextIcon,
  BiStar as StarIcon,
} from "react-icons/bi";
import { TbCalendarBolt as DateIcon } from "react-icons/tb";

const BlogFeaturedHero = ({ blogs }: BlogProps) => {
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState<number>(0);
  const currentFeatured = blogs[currentFeaturedIndex];
  const featuredData = blogs.slice(0, 4);
  const defaultImage = "/images/placeholder.png";

  const nextFeatured = () => {
    setCurrentFeaturedIndex((prevIndex) =>
      prevIndex === featuredData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevFeatured = () => {
    setCurrentFeaturedIndex((prevIndex) =>
      prevIndex === 0 ? featuredData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFeaturedIndex((prevIndex) =>
        prevIndex === featuredData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [featuredData]);

  if (!blogs || blogs.length === 0) {
    return null;
  }

  return (
    <div className="relative overflow-hidden rounded-xl border shadow-lg dark:border-neutral-700">
      <div
        className="group relative duration-500"
        style={{
          height: "400px",
          overflow: "hidden",
        }}
      >
        <Image
          src={currentFeatured?.img || defaultImage}
          alt={currentFeatured?.title}
          fill={true}
          sizes="100vw, 100vh"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 transition-opacity duration-300"></div>
      </div>

      <div className="absolute inset-0 z-10 flex w-full justify-between">
        <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
          <div className="flex w-fit items-center gap-x-1 rounded-full bg-lime-200 px-2.5 py-1.5  text-xs text-black">
            <StarIcon size={16} />
            <span>Featured</span>
          </div>
          <div className="flex flex-col justify-end gap-6">
            <div className="flex flex-col space-y-2 text-white">
              <Link href={`/blogs/${currentFeatured?.id}`}>
                <h3 className="group relative flex w-fit cursor-pointer  text-2xl font-bold leading-normal">
                  {currentFeatured?.title}
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-white transition-transform group-hover:scale-x-100"></span>
                </h3>
              </Link>
              <div className="flex gap-x-5 pt-1 text-neutral-400">
                <div className="flex items-center gap-1 ">
                  <DateIcon size={16} />
                  <span className="ml-0.5 text-xs">
                    {formatDate(currentFeatured?.createdAt)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevFeatured}
                className="h-6 w-6 rounded-md bg-white text-black transition-all duration-300 hover:scale-105 hover:text-neutral-900"
                aria-label="Previous"
              >
                <PrevIcon size={24} />
              </button>
              <button
                onClick={nextFeatured}
                className="h-6 w-6 rounded-md bg-white text-black transition-all duration-300 hover:scale-105 hover:text-neutral-900"
                aria-label="Next"
              >
                <NextIcon size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="hidden flex-col items-center justify-center space-y-5 border-l border-solid border-[#ffffff1a] px-8 sm:flex">
          {featuredData?.map((item, index: number) => (
            <button
              key={item.id}
              onClick={() => setCurrentFeaturedIndex(index)}
              className={clsx(
                "relative mb-2 h-16 w-16 cursor-pointer overflow-hidden border-2 bg-black transition-all duration-300 hover:scale-105",
                index === currentFeaturedIndex && "scale-105 border-white"
              )}
              style={{ borderRadius: "50%" }}
            >
              <Image
                src={item?.img || defaultImage}
                alt={item?.title}
                fill={true}
                sizes="100vw, 100vh"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogFeaturedHero;

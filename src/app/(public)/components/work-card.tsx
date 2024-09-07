"use client";

import Image from "@/components/ui/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WorkResponsibilites } from "@/commons/types/works.types";

type WorkCardProps = {
  logo: string;
  title: string;
  instance: string;
  date: string;
  location: string;
  responsibilities: WorkResponsibilites[];
};

const WorkCard = ({
  logo,
  title,
  instance,
  date,
  location,
  responsibilities,
}: WorkCardProps) => {
  const [isShowResponsibility, setIsShowResponsibility] =
    useState<boolean>(false);

  return (
    <Card
      className="group relative cursor-pointer hover:border-white/45 transition-colors"
      onClick={() => setIsShowResponsibility(!isShowResponsibility)}
    >
      <CardHeader className="flex flex-row gap-6 items-center pb-0">
        <Image
          alt="title"
          width={72}
          height={72}
          rounded="rounded-md"
          className="dark:border-neutral-600 lg:hover:scale-105"
          src={logo}
        />
        <div className="flex flex-col gap-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {instance} • {location}
          </CardDescription>
          <CardDescription>{date}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <AnimatePresence>
          {isShowResponsibility && (
            <motion.ul
              className="ml-5 mt-3 list-disc space-y-1 pb-2 text-sm leading-normal text-neutral-600 dark:text-neutral-400"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {responsibilities.map((item) => (
                <motion.li key={item.id} layout>
                  {item.description}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default WorkCard;

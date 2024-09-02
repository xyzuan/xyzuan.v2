"use client";

import Image from "@/components/ui/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/commons/libs/utils";
import { AnimatePresence, motion } from "framer-motion";

const WORK_DESC = [
  "Create a StingEO Micro Frontend in Combat Management System with real-time camera stream with",
  "RTSP to WebRTC with Module Federation & Webpack",
  "Integrating Cesium OpenLayer for 3D map",
  "Integrating Len UAV simulation models with Cesium",
  "Create a Publish & Subscribe data stream with rustDDS for a Tauri App to communicate with other client",
  "Create a drawing measure feature layer features (Point, Line String, Polygon, and Circle) in OpenLayer & OLCesium",
  "Implement Military Symbols MIL-STD2525D and handle symbols filter from LayerSource",
];

const WorkCard = ({ logo, title, instance, date, location }: any) => {
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
              {WORK_DESC.map((item) => (
                <motion.li key={item} layout>
                  {item}
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

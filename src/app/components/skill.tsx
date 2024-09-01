"use client";

import { ReactNode, useEffect, useState } from "react";

import Marquee from "@/components/magicui/marquee";
import Typography from "@/components/ui/typography";
import { STACKS } from "@/commons/constants/stacks";

const Tag = ({ icon, title }: { icon: ReactNode; title: string }) => (
  <div className="flex w-max items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-5 py-2 text-[15px] shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50">
    {icon}
    <span>{title}</span>
  </div>
);

const Skill = () => {
  const [shuffledSkills, setShuffledSkills] = useState<
    Array<[string, ReactNode]>
  >([]);

  useEffect(() => {
    const skillsArray = Object.entries(STACKS);
    const shuffledArray = [...skillsArray].sort(() => Math.random() - 0.5);
    setShuffledSkills(shuffledArray);
  }, []);

  const sliders = Array.from({ length: 3 }, (_, index) => {
    const sliderSkills = [...shuffledSkills].sort(() => Math.random() - 0.5);
    return (
      <>
        {sliderSkills.map(([title, icon], index) => (
          <Tag key={index} icon={icon} title={title} />
        ))}
      </>
    );
  });

  return (
    <div className="flex flex-col h-fit gap-6">
      <Typography.h3>Tools that I have used</Typography.h3>
      <div className="relative flex w-full max-w-4xl flex-col items-center justify-center overflow-hidden rounded-lg">
        <Marquee className="[--duration:240s]">{sliders}</Marquee>
        <Marquee reverse className="[--duration:240s]">
          {sliders}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
};

export default Skill;

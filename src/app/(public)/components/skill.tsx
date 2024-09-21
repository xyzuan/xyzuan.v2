"use client";

import { ReactNode, useEffect, useState } from "react";

import Marquee from "@/components/magicui/marquee";
import Typography from "@/components/ui/typography";
import { STACKS } from "@/commons/constants/stacks";
import { Skeleton } from "@/components/ui/skeleton";
import BlurFade from "@/components/magicui/blur-fade";
import { getRandomWidth } from "@/commons/helpers";

const Tag = ({ icon, title }: { icon: ReactNode; title: string }) => (
  <BlurFade delay={0.25 * Math.random() * (4 - 1.25)} inView>
    <div className="flex w-max items-center gap-2 rounded-full bg-background border px-5 py-2 text-[15px] ">
      {icon}
      <span>{title}</span>
    </div>
  </BlurFade>
);

const Skill = () => {
  const [shuffledSkills, setShuffledSkills] = useState<
    Array<[string, ReactNode]>
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const shuffleSkills = () => {
      const skillsArray = Object.entries(STACKS);
      const shuffledArray = [...skillsArray].sort(() => Math.random() - 0.5);
      setShuffledSkills(shuffledArray);
      setIsLoading(false);
    };
    shuffleSkills();

    return () => {
      setShuffledSkills([]);
      setIsLoading(true);
    };
  }, []);

  const skeletons = Array.from({ length: 3 }).map((_, rowIndex) => (
    <Marquee
      key={rowIndex}
      reverse={rowIndex === 1}
      className="[--duration:60s]"
    >
      {Array.from({ length: 10 }).map((_, idx) => (
        <Skeleton
          key={idx}
          className={`h-10 rounded-full bg-background border`}
          style={{ width: getRandomWidth(80, 120) }}
        />
      ))}
    </Marquee>
  ));

  const sliders = Array.from({ length: 3 }, (_, index) => {
    const sliderSkills = [...shuffledSkills].sort(() => Math.random() - 0.5);
    return (
      <Marquee key={index} reverse={index === 1} className="[--duration:140s]">
        {sliderSkills.map(([title, icon], index) => (
          <Tag key={index} icon={icon} title={title} />
        ))}
      </Marquee>
    );
  });

  return (
    <div className="flex flex-col h-fit gap-6">
      <Typography.h3>Tech stacks that i have used</Typography.h3>
      <div className="relative flex w-full max-w-4xl flex-col items-center justify-center overflow-hidden rounded-lg">
        {isLoading ? skeletons : sliders}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
};

export default Skill;

"use client";

import { MagicCard } from "@/components/magicui/magic-card";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { useTheme } from "next-themes";
import Link from "next/link";
import { BiRocket as RocketIcon } from "react-icons/bi";

const Services = () => {
  const { theme } = useTheme();
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <Typography.H3>What I&apos;ve been working on</Typography.H3>
        <Typography.P className="leading-[1.8] text-neutral-800 dark:text-neutral-300 lg:leading-loose">
          I assist brands, companies, institutions, and startups in creating
          exceptional digital experiences for their businesses through strategic
          development services.
        </Typography.P>
      </div>
      <MagicCard gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
        <CardHeader>
          <div className="flex items-center gap-2">
            <RocketIcon size={24} />
            <h3 className="text-xl font-medium">Lets work together!</h3>
          </div>
        </CardHeader>
        <CardContent>
          <Typography.P className="leading-[1.8] text-neutral-800 dark:text-neutral-300 lg:leading-loose">
            I&apos;m open for freelance projects, feel free to email me to see
            how can we collaborate.
          </Typography.P>
        </CardContent>
        <CardFooter>
          <Link href="/contacts">
            <Button data-umami-event="Click Contact Button">Contact me</Button>
          </Link>
        </CardFooter>
      </MagicCard>
    </div>
  );
};

export default Services;

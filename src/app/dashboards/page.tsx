"use client";

import Typography from "@/components/ui/typography";

import BackButton from "@/components/ui/back-button";
import BlurFade from "@/components/magicui/blur-fade";
import { fetchGithubData } from "@/services/github";
import { GITHUB_ACCOUNTS } from "@/constants/github";
import { useEffect, useState } from "react";
import GithubOverview from "./components/github-overview";
import GithubCalendar from "./components/github-calendar";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Dashboards = () => {
  const [contributionsCalendar, setContributionsCalendar] = useState();

  useEffect(() => {
    fetchGithubData(GITHUB_ACCOUNTS[0].username, GITHUB_ACCOUNTS[0].token).then(
      (data) => {
        console.log(data);
        setContributionsCalendar(
          data?.data?.contributionsCollection?.contributionCalendar
        );
      }
    );
  }, []);

  return (
    <BlurFade delay={0.25 * 0.05} inView>
      <div className="mb-6">
        <BackButton />
        <Typography.h3>Dashboard</Typography.h3>
        <Typography.p>
          This is my personal dashboard, built with Next.js API routes deployed
          as serverless functions.
        </Typography.p>
      </div>
      <div className="space-y-3">
        <Typography.h4 className="flex gap-3 items-center font-normal">
          <GitHubLogoIcon height={24} width={24} />
          Contributions
        </Typography.h4>
        <div className="flex justify-between">
          <Typography.p>
            My contributions from last year on github.
          </Typography.p>
          <Link href={`https://github.com/${GITHUB_ACCOUNTS[0].username}`}>
            <Typography.p>{`@${GITHUB_ACCOUNTS[0].username}`}</Typography.p>
          </Link>
        </div>
        <GithubOverview data={contributionsCalendar} />
        <GithubCalendar data={contributionsCalendar} />
      </div>
    </BlurFade>
  );
};

export default Dashboards;

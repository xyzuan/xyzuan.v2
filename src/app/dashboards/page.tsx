"use server";

import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import Typography from "@/components/ui/typography";
import BackButton from "@/components/ui/back-button";
import BlurFade from "@/components/magicui/blur-fade";
import { fetchGithubData } from "@/services/github";
import { GITHUB_ACCOUNTS } from "@/commons/constants/github";
import { getALLTimeSinceToday, getReadStats } from "@/services/wakatime";
import GithubCalendar from "./components/github-calendar";
import GithubOverview from "./components/github-overview";
import WakatimeOverview from "./components/wakatime-overview";
import { ClockIcon } from "lucide-react";
import WakatimeActive from "./components/wakatime-active";

const DashboardsPage = async () => {
  const readStatsResponse = await getReadStats();
  const allTimeSinceTodayResponse = await getALLTimeSinceToday();

  const wakatime = {
    ...readStatsResponse.data,
    all_time_since_today: allTimeSinceTodayResponse.data,
  };

  const github = await fetchGithubData(
    GITHUB_ACCOUNTS[0].username,
    GITHUB_ACCOUNTS[0].token
  );

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
          <ClockIcon height={24} width={24} />
          Weekly Statistic
        </Typography.h4>
        <Typography.p>My WakaTime last 7 days stats.</Typography.p>
        <WakatimeOverview data={wakatime} />
        <WakatimeActive data={wakatime} />
      </div>
      <div className="space-y-3 mt-6">
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
        <GithubOverview
          data={github?.data?.contributionsCollection?.contributionCalendar}
        />
        <GithubCalendar
          data={github?.data?.contributionsCollection?.contributionCalendar}
        />
      </div>
    </BlurFade>
  );
};

export default DashboardsPage;

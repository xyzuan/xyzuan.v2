"use server";

import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import Typography from "@/components/ui/typography";
import BackButton from "@/components/ui/back-button";
import BlurFade from "@/components/magicui/blur-fade";
import GithubCalendar from "./components/github-calendar";
import GithubOverview from "./components/github-overview";
import { fetchGithubData } from "@/services/github";
import { GITHUB_ACCOUNTS } from "@/constants/github";

const Dashboards = async () => {
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

export default Dashboards;

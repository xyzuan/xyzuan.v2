import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import Typography from "@/components/ui/typography";
import { fetchGithubData } from "@/services/github";
import { GITHUB_ACCOUNTS } from "@/commons/constants/github";
import { getALLTimeSinceToday, getReadStats } from "@/services/wakatime";
import GithubCalendar from "./github-calendar";
import GithubOverview from "./github-overview";
import WakatimeOverview from "./wakatime-overview";
import { ClockIcon } from "lucide-react";
import WakatimeActive from "./wakatime-active";
import BlurFade from "@/components/magicui/blur-fade";

const Activity = async () => {
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
    <BlurFade>
      <div className="space-y-3 mt-11">
        <Typography.H4 className="flex gap-3 items-center font-normal">
          <ClockIcon height={24} width={24} />
          Weekly Statistic
        </Typography.H4>
        <Typography.P>My WakaTime last 7 days stats.</Typography.P>
        <WakatimeOverview data={wakatime} />
        <WakatimeActive data={wakatime} />
      </div>
      <div className="space-y-3 mt-6">
        <Typography.H4 className="flex gap-3 items-center font-normal">
          <GitHubLogoIcon height={24} width={24} />
          Contributions
        </Typography.H4>
        <div className="flex justify-between">
          <Typography.P>
            My contributions from last year on github.
          </Typography.P>
          <Link href={`https://github.com/${GITHUB_ACCOUNTS[0].username}`}>
            <Typography.P>{`@${GITHUB_ACCOUNTS[0].username}`}</Typography.P>
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

export default Activity;

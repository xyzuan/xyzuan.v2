import BlurFade from "@/components/magicui/blur-fade";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "@/components/ui/image";
import Typography from "@/components/ui/typography";

export type RecommendationCardProps = {
  profile_pic: string;
  name: string;
  position: string;
  value: string;
};

const RecommendationCard = ({
  profile_pic,
  name,
  position,
  value,
}: RecommendationCardProps) => {
  return (
    <BlurFade delay={0.25 * Math.random() * (4 - 1.25)} inView>
      <Card className="min-w-72">
        <CardHeader className="text-sm">{value}</CardHeader>
        <CardFooter className="flex flex-col justify-start items-start xl:flex-row">
          <Avatar className="w-12 h-12 transition-transform duration-300 mb-3 xl:mb-0">
            <Image height={48} width={48} alt={name} src={profile_pic} />
          </Avatar>
          <div className="xl:mx-5">
            <Typography.p className="leading-6 text-sm text-medium mb-1">
              {name}
            </Typography.p>
            <Typography.p className="text-xs text-neutral-600 dark:text-neutral-400">
              {position}
            </Typography.p>
          </div>
        </CardFooter>
      </Card>
    </BlurFade>
  );
};

export default RecommendationCard;

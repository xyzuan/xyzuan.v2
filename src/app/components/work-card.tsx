import Image from "@/components/ui/image";
import { Avatar, AvatarImage } from "../../components/ui/avatar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

const WorkCard = ({ title, instance, date, location }: any) => {
  return (
    <Card>
      <CardHeader className="flex flex-row gap-6 items-center">
        <Image
          alt="title"
          width={72}
          height={72}
          rounded="rounded-md"
          className="dark:border-neutral-600 lg:hover:scale-105"
          src="https://avatars.githubusercontent.com/u/57469823?v=4"
        />
        <div className="flex flex-col gap-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {instance} • {location}
          </CardDescription>
          <CardDescription>{date}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default WorkCard;

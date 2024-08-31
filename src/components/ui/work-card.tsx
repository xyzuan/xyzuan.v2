import { Avatar, AvatarImage } from "./avatar";
import { Card, CardDescription, CardHeader, CardTitle } from "./card";

const WorkCard = ({ title, instance, date, location }: any) => {
  return (
    <Card>
      <CardHeader className="flex flex-row gap-6 items-center">
        <Avatar className="h-20 w-20">
          <AvatarImage src="https://avatars.githubusercontent.com/u/57469823?v=4" />
        </Avatar>
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

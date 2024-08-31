import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "@/components/ui/image";
import React from "react";

const ProjectCard = () => {
  return (
    <Card>
      <AspectRatio ratio={16 / 9}>
        <Image
          src="https://res.cloudinary.com/myxyzuan/image/upload/v1724932280/x1ynfs2vi0nfixagh9lc.png"
          alt="Image"
          width={800}
          height={400}
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
      <CardHeader>
        <CardTitle>FoodCare Mobile Apps</CardTitle>
        <CardDescription>
          is an application to help donors who wish to voluntarily donate their
          excess food to people who need sufficient food as a source of protein
          and their daily nutrition.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex gap-1">
          <Badge>Flutter</Badge>
          <Badge>ExpressJS</Badge>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

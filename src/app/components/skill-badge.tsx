import React from "react";
import { Badge } from "../../components/ui/badge";
import Typography from "../../components/ui/typography";

const SkillBadge = ({ children }: React.PropsWithChildren) => {
  return (
    <Badge className="w-fit rounded-full mr-2 mb-2">
      <Typography.p>{children}</Typography.p>
    </Badge>
  );
};

export default SkillBadge;

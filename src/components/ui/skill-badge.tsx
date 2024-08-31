import React from "react";
import { Badge } from "./badge";
import Typography from "./typography";

const SkillBadge = ({ children }: React.PropsWithChildren) => {
  return (
    <Badge className="w-fit rounded-full mr-2 mb-2">
      <Typography.p>{children}</Typography.p>
    </Badge>
  );
};

export default SkillBadge;

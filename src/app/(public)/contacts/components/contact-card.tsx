import { cn } from "@/commons/libs/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ContactCardProps = {
  className: string;
  title: string;
  description: string;
  href: string;
  icon: any;
  cta: string;
};

const ContactCard = ({
  className,
  title,
  description,
  href,
  icon,
  cta,
}: ContactCardProps) => {
  return (
    <Card className={cn("flex items-end", className)}>
      <CardContent>
        {icon}
        <Typography.H3 className="mb-3">{title}</Typography.H3>
        <Typography.P>{description}</Typography.P>
        <Link href={href}>
          <Button className="mt-6">
            {cta}
            <span>
              <ArrowUpRight />
            </span>
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ContactCard;

import { cn } from "@/commons/libs/utils";
import Typography from "./typography";
import { HTMLAttributes, ReactNode } from "react";

type DropdownItemProps = HTMLAttributes<HTMLDivElement> & {
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

const DropdownItem = ({
  icon,
  children,
  className,
  ...props
}: DropdownItemProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center whitespace-nowrap rounded-md cursor-pointer text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 px-4 py-2 w-full justify-start h-10 mb-1",
        className
      )}
      {...props}
    >
      <span className={cn("mr-4")}>{icon}</span>
      <Typography.p
        className={cn(
          "text-sm leading-7 flex flex-grow max-w-[200px] truncate translate-x-0 opacity-100"
        )}
      >
        {children}
      </Typography.p>
    </div>
  );
};

export default DropdownItem;

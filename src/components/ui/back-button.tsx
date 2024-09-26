"use client";
import { useRouter } from "next/navigation";
import Typography from "./typography";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/commons/libs/utils";

const BackButton = ({
  className,
  children,
}: React.PropsWithChildren<{
  className?: string;
}>) => {
  const router = useRouter();
  return (
    <Typography.P
      className={cn(
        "cursor-pointer flex items-center ml-[-8px] font-medium",
        className
      )}
      onClick={() => router.back()}
    >
      <ChevronLeft />
      Back
    </Typography.P>
  );
};

export default BackButton;

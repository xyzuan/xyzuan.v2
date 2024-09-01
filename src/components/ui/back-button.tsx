"use client";
import { useRouter } from "next/navigation";
import Typography from "./typography";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import { cn } from "@/commons/libs/utils";

const BackButton = ({
  className,
  children,
}: React.PropsWithChildren<{
  className?: string;
}>) => {
  const router = useRouter();
  return (
    <Typography.p
      className={cn("cursor-pointer flex items-center ml-[-8px]", className)}
      onClick={() => router.back()}
    >
      <ChevronLeft />
      Back
    </Typography.p>
  );
};

export default BackButton;

import { ArrowUpRight } from "lucide-react";
import Typography from "./typography";
import { useRouter } from "next/navigation";
import { cn } from "@/commons/libs/utils";
import { useTheme } from "next-themes";

const AuthCard = ({ className }: any) => {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <div
      onClick={() => router.push("/auth")}
      className={cn(
        `flex p-3 gap-3 items-center cursor-pointer transition-all ${
          theme === "dark" ? "hover:bg-[#262626]" : "hover:bg-[#D9D9D955]"
        }`,
        className
      )}
    >
      <div className="flex flex-col gap-1">
        <Typography.P className="text-sm font-medium">Sign in</Typography.P>
        <Typography.P className="text-xs opacity-75">
          Login your account in eden realms
        </Typography.P>
      </div>
      <ArrowUpRight className=" opacity-65" />
    </div>
  );
};

export default AuthCard;

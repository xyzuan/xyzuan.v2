import { cn } from "@/commons/libs/utils";
import { useTheme } from "next-themes";
import Typography from "./typography";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { authSignOut } from "@/services/auth";
import { toast } from "sonner";
import { useProfile } from "@/providers/profile-provider";
import { useRouter } from "next/navigation";
import { Skeleton } from "./skeleton";
import AuthCard from "./auth-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import DropdownItem from "./dropdown-item";
import { LogOutIcon } from "lucide-react";

const ProfileSideCard = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const { profile, setProfile, loading } = useProfile();

  const handleLogout = () => {
    toast.promise(authSignOut(), {
      loading: "Turning back to home from Eden...",
      success: () => {
        setProfile(null);
        return "Successfull logged out";
      },
      error: (err) => err,
      finally: () => router.refresh(),
    });
  };

  if (loading)
    return (
      <div className="flex p-3 w-full gap-3 items-center cursor-pointer border rounded-xl transition-all">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="flex flex-col gap-1">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-2/5" />
        </div>
      </div>
    );

  if (!profile) return <AuthCard className="border rounded-xl" />;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div
          // onClick={() => router.push("/auth")}
          className={cn(
            `flex p-3 w-full gap-3 items-center cursor-pointer border rounded-xl transition-all ${
              theme === "dark" ? "hover:bg-[#262626]" : "hover:bg-[#D9D9D955]"
            }`
          )}
        >
          <Avatar className="h-10 w-10">
            <AvatarImage>{profile.iconUrl}</AvatarImage>
            <AvatarFallback>{profile.name.slice(0, 1)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <Typography.p className="text-sm text-start font-medium">
              {profile.name}
            </Typography.p>
            <Typography.p className="text-xs text-start opacity-75">
              {profile.email}
            </Typography.p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownItem
          onClick={() => handleLogout()}
          icon={<LogOutIcon className="h-[1.2rem] w-[1.2rem]" />}
        >
          Sign Out
        </DropdownItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileSideCard;

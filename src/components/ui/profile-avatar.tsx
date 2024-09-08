import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { authSignOut } from "@/services/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "./button";
import {
  ArrowUpRight,
  LogOutIcon,
  LucidePersonStanding,
  User2Icon,
  UserIcon,
} from "lucide-react";
import Typography from "./typography";
import SidebarTheming from "./sidebar-theming";
import DropdownItem from "./dropdown-item";
import { useProfile } from "@/providers/profile-provider";

const ProfileAvatar = () => {
  const { profile, setProfile, loading } = useProfile();
  const router = useRouter();

  const handleLogout = () => {
    toast.promise(authSignOut(), {
      loading: "Turning back to home from Eden...",
      success: () => {
        setProfile(null);
        return "Successfull logged out";
      },
      error: async (err) => {
        const error = await err.json();
        return error.message;
      },
      finally: () => router.refresh(),
    });
  };

  if (loading) return;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {profile ? (
          <Avatar className="mr-1">
            <AvatarImage src={profile.iconUrl} />
            <AvatarFallback>{profile.name.slice(0, 1)}</AvatarFallback>
          </Avatar>
        ) : (
          <Button variant="ghost" className="rounded-full border mr-2">
            <UserIcon className="size-4" />
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {profile ? (
          <DropdownMenuLabel>
            {profile.name}
            <br />
            <span className="text-xs opacity-65">{profile.email}</span>
          </DropdownMenuLabel>
        ) : (
          <div
            onClick={() => router.push("/auth")}
            className="flex p-3 gap-3 items-center cursor-pointer"
          >
            <div className="flex flex-col gap-1">
              <Typography.p className="text-sm">Sign in</Typography.p>
              <Typography.p className="text-xs opacity-65">
                Login your account in eden realms
              </Typography.p>
            </div>
            <ArrowUpRight className=" opacity-65" />
          </div>
        )}
        <DropdownMenuSeparator />
        {profile && (
          <>
            <Typography.p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate pt-3">
              Account
            </Typography.p>
            <DropdownItem icon={<UserIcon className="h-[1.2rem] w-[1.2rem]" />}>
              Profile
            </DropdownItem>
            <DropdownItem
              onClick={() => handleLogout()}
              icon={<LogOutIcon className="h-[1.2rem] w-[1.2rem]" />}
            >
              Sign Out
            </DropdownItem>
          </>
        )}
        <SidebarTheming />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileAvatar;

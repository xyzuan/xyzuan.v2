import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { authSignOut } from "@/services/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "./button";
import { LogOutIcon, UserIcon } from "lucide-react";
import Typography from "./typography";
import SidebarTheming from "./sidebar-theming";
import DropdownItem from "./dropdown-item";
import { useProfile } from "@/providers/profile-provider";
import AuthCard from "./auth-card";
import { FaSpinner } from "react-icons/fa";

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
      error: (err) => err,
      finally: () => router.refresh(),
    });
  };

  if (loading)
    return (
      <Button variant="ghost" className="rounded-full border mr-2">
        <FaSpinner className="size-4 animate-spin" />
      </Button>
    );

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
          <AuthCard />
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

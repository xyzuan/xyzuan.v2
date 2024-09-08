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
import { useProfile } from "@/hooks/useProfile.hook";

const ProfileAvatar = () => {
  const { profile, setProfile } = useProfile();
  const router = useRouter();

  const handleLogout = () => {
    const logOutToast = toast.loading("Returning back home from Eden...");
    authSignOut()
      .then((res) => {
        if (res.ok) {
          toast.success("Successfull logged out", {
            id: logOutToast,
          });
          setProfile(null);
        }
      })
      .catch((err) =>
        toast.error(err, {
          id: logOutToast,
        })
      )
      .finally(() => {
        router.refresh();
      });
  };

  if (!profile) {
    return (
      <Button
        onClick={() => router.push("/auth")}
        variant="ghost"
        className="rounded-full border mr-2"
      >
        Sign In
      </Button>
    );
  } else {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={profile.iconUrl} />
            <AvatarFallback>{profile.name.slice(0, 1)}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            {profile.name}
            <br />
            {profile.email}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLogout()}>
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
};

export default ProfileAvatar;

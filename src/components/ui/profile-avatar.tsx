import { getMyProfile } from "@/services/profile";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "./avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Profile } from "@/commons/types/profile.types";
import { authSignOut } from "@/services/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "./button";

const ProfileAvatar = () => {
  const [profile, setProfile] = useState<Profile | undefined>(undefined);
  const router = useRouter();

  const handleLogout = () => {
    const logOutToast = toast.loading("Returning back home from Eden...");
    authSignOut()
      .then((res) => {
        if (res.ok) {
          toast.success("Successfull logged out", {
            id: logOutToast,
          });
          setProfile(undefined);
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

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getMyProfile();
        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }
        const data = await response.json();
        setProfile(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProfile();
  }, []);

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

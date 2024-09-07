import { getMyProfile } from "@/services/profile";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "./avatar";

const ProfileAvatar = () => {
  const [profileAvatar, setProfileAvatar] = useState(String);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getMyProfile();
        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }
        const data = await response.json();
        setProfileAvatar(data.iconUrl);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProfile();
  }, []);

  if (!profileAvatar) return;
  return (
    <Avatar>
      <AvatarImage src={profileAvatar} />
    </Avatar>
  );
};

export default ProfileAvatar;

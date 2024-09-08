import { cn } from "@/commons/libs/utils";
import { Profile } from "@/commons/types/profile.types";

const ChatUserInfo = ({ name, email }: Profile) => {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-2 px-4 pb-3 text-sm md:flex-row md:items-center"
      )}
    >
      <div className="flex flex-wrap gap-1 text-neutral-500">
        <p>Signed in as</p>
        <p className="font-medium">{name}</p>
        <p>({email})</p>
      </div>
    </div>
  );
};

export default ChatUserInfo;

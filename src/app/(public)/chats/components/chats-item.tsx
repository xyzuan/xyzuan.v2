"use client";

import { MessageProps } from "@/commons/types/chats.types";
import ChatTime from "./chats-time";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TrashIcon } from "lucide-react";
import { MdVerified as VerifiedIcon } from "react-icons/md";
import { deleteChat } from "@/services/chats";
import { useProfile } from "@/providers/profile-provider";
import { toast } from "sonner";
import { cn } from "@/commons/libs/utils";
import Typography from "@/components/ui/typography";

const ChatItem = ({ id, user, message, createdAt, isShow }: MessageProps) => {
  const { profile: loggedUser } = useProfile();

  const pattern = /@([^:]+):/g;
  const modifiedMessage = message?.split(pattern).map((part, index) => {
    if (index % 2 === 1) {
      return (
        <span key={index} className="text-yellow-600 dark:text-yellow-400">
          @{part}
        </span>
      );
    }
    return part;
  });

  const handleDeleteMessage = (id: string) => {
    toast.promise(deleteChat(id), {
      loading: "Deleting message from realms...",
      success: () => {
        return `Eden was successfully delete the message`;
      },
      error: (err) => err,
    });
  };

  return (
    <div
      className={`flex ${user.isAdmin && "flex-row-reverse"} items-start gap-3`}
    >
      <Avatar>
        <AvatarImage src={user.iconUrl} />
        <AvatarFallback>{user.name.slice(0, 1)}</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <div
          className={`flex ${
            user.isAdmin && "flex-row-reverse"
          } items-center gap-2`}
        >
          <Typography.p className="text-sm flex items-center font-medium text-neutral-700 dark:text-neutral-300">
            {user.name}
            {user.isAdmin && (
              <span>
                <VerifiedIcon size={13} className="text-blue-400 ml-1" />
              </span>
            )}
          </Typography.p>
        </div>
        <div
          className={`group flex items-center ${
            user.isAdmin && "flex-row-reverse"
          }`}
        >
          <p
            className={cn(
              "w-fit group-hover:dark:bg-neutral-700 bg-neutral-200 px-3 py-2 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200",
              user.isAdmin
                ? "rounded-xl rounded-tr-none"
                : "rounded-xl rounded-tl-none"
            )}
          >
            {modifiedMessage}
          </p>
          {(loggedUser?.email === user.email || loggedUser?.isAdmin) && (
            <div className="flex items-center mx-3">
              <TrashIcon
                size={17}
                className="hidden cursor-pointer text-red-500 group-hover:flex"
                onClick={() => handleDeleteMessage(id)}
              />
            </div>
          )}
        </div>
        <div className={`flex ${user.isAdmin && "justify-end"}`}>
          <ChatTime datetime={createdAt} />
        </div>
      </div>
    </div>
  );
};

export default ChatItem;

"use client";

import { MessageProps } from "@/commons/types/chats.types";
import ChatTime from "./chats-time";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TrashIcon } from "lucide-react";
import { MdVerified as VerifiedIcon } from "react-icons/md";
import { deleteChat } from "@/services/chats";
import { useProfile } from "@/providers/profile-provider";
import { toast } from "sonner";
import { cn } from "@/commons/libs/utils";
import Typography from "@/components/ui/typography";
import Image from "@/components/ui/image";
import { useChats } from "@/providers/chats-provider";

const ChatItem = ({
  id,
  user,
  message,
  createdAt,
  mentionedTo,
}: MessageProps) => {
  const { profile: loggedUser } = useProfile();
  const { setIsReplying } = useChats();

  const handleDeleteMessage = (id: string) => {
    toast.promise(deleteChat(id), {
      loading: "Deleting message from realms...",
      success: () => {
        return `Eden was successfully delete the message`;
      },
      error: (err) => err,
    });
  };
  const scrollToMessage = (messageId: string) => {
    const element = document.getElementById(messageId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      element.classList.add("border", "scale-110", "border-primary/30");
      setTimeout(() => {
        element.classList.remove("border", "scale-110", "border-primary/30");
      }, 3000);
    }
  };

  return (
    <div
      onDoubleClick={() => setIsReplying({ id, user })}
      className={`flex ${
        user?.isAdmin && "flex-row-reverse"
      } items-start gap-3 cursor-pointer`}
    >
      <Avatar className="h-12 w-12">
        {user?.iconUrl !== null ? (
          <Image height={52} width={52} alt={user?.name} src={user?.iconUrl} />
        ) : (
          <AvatarFallback>{user?.name.slice(0, 1)}</AvatarFallback>
        )}
      </Avatar>
      <div className="space-y-1">
        <div
          className={`flex ${
            user?.isAdmin && "flex-row-reverse"
          } items-center gap-2`}
        >
          <Typography.P className="text-sm flex items-center font-medium text-neutral-700 dark:text-neutral-300">
            {user?.name}
            {user?.isAdmin && (
              <span>
                <VerifiedIcon size={13} className="text-blue-400 ml-1" />
              </span>
            )}
          </Typography.P>
        </div>
        <div
          className={`group flex items-center ${
            user?.isAdmin && "flex-row-reverse"
          }`}
        >
          <p
            id={id}
            className={cn(
              "w-fit group-hover:dark:bg-neutral-700 bg-neutral-200 px-3 py-2 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 transition-all duration-200",
              user?.isAdmin
                ? "rounded-xl rounded-tr-none"
                : "rounded-xl rounded-tl-none"
            )}
          >
            {mentionedTo && (
              <div
                className="flex flex-col bg-background/45 px-3 py-2 rounded-xl rounded-tl-sm rounded-bl-sm my-1 border-l border-primary"
                onClick={() => scrollToMessage(mentionedTo?.id)}
              >
                <Typography.P className="text-sm font-medium">
                  {mentionedTo?.user.name}
                </Typography.P>
                <Typography.P className="text-sm opacity-75">
                  {mentionedTo?.message}
                </Typography.P>
              </div>
            )}
            {message}
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
        <div className={`flex ${user?.isAdmin && "justify-end"}`}>
          <ChatTime datetime={createdAt} />
        </div>
      </div>
    </div>
  );
};

export default ChatItem;

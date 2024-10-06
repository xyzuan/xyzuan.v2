"use client";
import Typography from "@/components/ui/typography";
import { useChats } from "@/providers/chats-provider";

const ChatsHeader = () => {
  const { isWsReady } = useChats();
  return (
    <div className="flex justify-between items-center bg-neutral-100 dark:bg-neutral-800 backdrop-blur-xl w-full p-3 px-6 rounded-t-xl">
      <Typography.P className="flex items-center text-sm gap-3 overflow-hidden">
        <span className="bg-background p-1 px-3 rounded-full text-xs inline-flex items-center">
          <div
            className={`rounded-full w-2 h-2 mr-2 animate-pulse ${
              isWsReady ? "bg-green-400" : "bg-red-400"
            }`}
          />
          {isWsReady ? "Online" : "Offline"}
        </span>
        <span className="whitespace-nowrap text-ellipsis">
          wscat -c wss://api.xyzuan.my.id/v2/messages
        </span>
      </Typography.P>
    </div>
  );
};

export default ChatsHeader;

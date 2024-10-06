"use client";
import Typography from "@/components/ui/typography";
import { useChats } from "@/providers/chats-provider";

const ChatsHeader = () => {
  const { isWsReady } = useChats();
  return (
    <div className="flex justify-between items-center bg-neutral-200 dark:bg-neutral-800 backdrop-blur-xl w-full p-3 px-6 rounded-t-xl">
      <Typography.P className="flex text-sm gap-2">
        <span className="bg-background p-1 px-3 rounded-full text-xs inline-flex items-center">
          <div
            className={`rounded-full w-2 h-2 mr-2 animate-pulse ${
              isWsReady ? "bg-green-400" : "bg-red-400"
            }`}
          />
          {isWsReady ? "Online" : "Offline"}
        </span>
        wscat -c ws://api.xyzuan.my.id/v2/messages
      </Typography.P>
      <div className="flex gap-3">
        <div className="w-4 h-4 bg-red-300 rounded-full" />
        <div className="w-4 h-4 bg-yellow-300 rounded-full" />
        <div className="w-4 h-4 bg-green-300 rounded-full" />
      </div>
    </div>
  );
};

export default ChatsHeader;

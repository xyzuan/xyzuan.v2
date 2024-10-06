"use client";

import revalidate from "@/app/actions";
import { MessageProps } from "@/commons/types/chats.types";
import { MessageCircle, MessageSquareIcon } from "lucide-react";
import { useWebSocket } from "next-ws/client";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { toast } from "sonner";

type ChatsContextType = {
  ws: any;
  isWsReady: boolean;
  isReplying: Partial<MessageProps> | undefined;
  setIsReplying: React.Dispatch<
    React.SetStateAction<Partial<MessageProps> | undefined>
  >;
  isSending: boolean;
  setIsSending: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatsContext = createContext<ChatsContextType | undefined>(undefined);

export const ChatsProvider = ({ children }: { children: ReactNode }) => {
  const ws = useWebSocket();

  const [isWsReady, setIsWsReady] = useState<boolean>(false);
  const [isReplying, setIsReplying] = useState<
    Partial<MessageProps> | undefined
  >(undefined);
  const [isSending, setIsSending] = useState(false);
  const router = useRouter();

  const value = React.useMemo(
    () => ({
      ws,
      isWsReady,
      isReplying,
      setIsReplying,
      isSending,
      setIsSending,
    }),
    [ws, isWsReady, isReplying, setIsReplying, isSending, setIsSending]
  );

  const showNotification = (title: string, options: NotificationOptions) => {
    if (Notification.permission === "granted") {
      new Notification(title, options);
    } else {
      console.log("Notification permission not granted.");
    }
  };

  useEffect(() => {
    if (Notification.permission === "default") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
        }
      });
    }
  }, []);

  useEffect(() => {
    const handleOpen = () => {
      setIsWsReady(true);
    };

    const handleClose = () => {
      setIsWsReady(false);
    };

    const handleError = (error: Event) => {
      console.error("WebSocket error:", error);
      setIsWsReady(false);
    };

    async function onMessage(event: MessageEvent) {
      const messageData = JSON.parse(event.data);
      revalidate("/chats");
      showNotification(`New message from ${messageData.user.name}`, {
        body: messageData.message,
      });
      toast(`New Chat from ${messageData.user.name}`, {
        description: messageData.message,
        icon: <MessageSquareIcon size={19} />,
        action: {
          label: "Reply chat",
          onClick: () => router.push("/chats"),
        },
      });
    }

    ws?.addEventListener("open", handleOpen);
    ws?.addEventListener("close", handleClose);
    ws?.addEventListener("error", handleError);
    ws?.addEventListener("message", onMessage);
    return () => {
      ws?.removeEventListener("open", handleOpen);
      ws?.removeEventListener("close", handleClose);
      ws?.removeEventListener("error", handleError);
      ws?.removeEventListener("message", onMessage);
    };
  }, [ws]);

  return (
    <ChatsContext.Provider value={value}>{children}</ChatsContext.Provider>
  );
};

export const useChats = () => {
  const context = useContext(ChatsContext);
  if (!context) {
    throw new Error("useChats must be used within a ProfileProvider");
  }
  return context;
};

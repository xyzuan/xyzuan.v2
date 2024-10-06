"use client";

import { CHAT_WS_ENDPOINT } from "@/commons/constants/api";
import { WebSocketProvider } from "next-ws/client";
import { ChatsProvider } from "./chats-provider";

const ChatsWebSocketProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <WebSocketProvider url={CHAT_WS_ENDPOINT}>
      <ChatsProvider>{children}</ChatsProvider>
    </WebSocketProvider>
  );
};

export default ChatsWebSocketProvider;

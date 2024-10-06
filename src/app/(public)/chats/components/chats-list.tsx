"use client";

import { useEffect, useRef, useState } from "react";
import ChatItem from "./chats-item";
import { ChatListProps } from "@/commons/types/chats.types";

const ChatList = ({ messages }: ChatListProps) => {
  const [chatListHeight, setChatListHeight] = useState("580px");
  const [hasScrolledUp, setHasScrolledUp] = useState(false);
  const chatListRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (chatListRef.current) {
        const isScrolledToBottom =
          chatListRef.current.scrollHeight - chatListRef.current.clientHeight <=
          chatListRef.current.scrollTop + 5;

        if (isScrolledToBottom) {
          setHasScrolledUp(false);
        } else {
          setHasScrolledUp(true);
        }
      }
    };

    chatListRef.current?.addEventListener("scroll", handleScroll);

    const currentChatListRef = chatListRef.current;

    return () => {
      currentChatListRef?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (chatListRef.current && !hasScrolledUp) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [messages, hasScrolledUp]);

  useEffect(() => {
    const handleResize = () => {
      const newHeight = `${window.innerHeight - 260}px`;
      setChatListHeight(newHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="bg-background/60 rounded-lg rounded-t-none border-t-0 border border-neutral-100 dark:border-neutral-800 px-6">
      <div
        ref={chatListRef}
        className="space-y-5 overflow-y-auto py-4 scrollbar-hide"
        style={{ height: chatListHeight }}
      >
        {messages?.map((chat) => (
          <ChatItem key={chat.id} {...chat} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;

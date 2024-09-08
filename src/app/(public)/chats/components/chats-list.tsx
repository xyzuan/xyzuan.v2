"use client";

import { useEffect, useRef, useState } from "react";
import ChatItem from "./chats-item";
import { ChatListProps } from "@/commons/types/chats.types";

const ChatList = ({ messages }: ChatListProps) => {
  const [chatListHeight, setChatListHeight] = useState("500px");
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
      const newHeight = `${window.innerHeight - 360}px`;
      setChatListHeight(newHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="rounded-lg px-1">
      <div
        ref={chatListRef}
        className="space-y-5 overflow-y-auto py-4"
        style={{ height: chatListHeight }}
      >
        {messages?.map((chat, index) => (
          <ChatItem key={index} {...chat} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;

"use client";

import { useEffect, useRef, useState } from "react";
import { getChats } from "@/services/chats";
import ChatItem from "./chats-item";
import { ChatListProps } from "@/commons/types/chats.types";

const ChatList = () => {
  const [chats, setChats] = useState<ChatListProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChat = async () => {
      try {
        const response = await getChats();
        setChats({ messages: response.data });
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchChat();
  }, []);

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
  }, [chats, hasScrolledUp]);

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
        {chats?.messages?.map((chat, index) => (
          <ChatItem key={index} {...chat} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;

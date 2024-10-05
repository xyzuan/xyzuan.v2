"use client";

import { MessageProps } from "@/commons/types/chats.types";
import React, { createContext, useContext, ReactNode, useState } from "react";

type ChatsContextType = {
  isReplying: Partial<MessageProps> | undefined;
  setIsReplying: React.Dispatch<
    React.SetStateAction<Partial<MessageProps> | undefined>
  >;
  isSending: boolean;
  setIsSending: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatsContext = createContext<ChatsContextType | undefined>(undefined);

export const ChatsProvider = ({ children }: { children: ReactNode }) => {
  const [isReplying, setIsReplying] = useState<
    Partial<MessageProps> | undefined
  >(undefined);
  const [isSending, setIsSending] = useState(false);

  const value = React.useMemo(
    () => ({ isReplying, setIsReplying, isSending, setIsSending }),
    [isReplying, setIsReplying, isSending, setIsSending]
  );

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

import BlurFade from "@/components/magicui/blur-fade";
import ChatList from "./components/chats-list";
import { Metadata } from "next";
import { METADATA } from "@/commons/constants/metadata";
import { getChats } from "@/services/chats";
import ChatInput from "./components/chats-input";
import ChatsHeader from "./components/chats-header";

export const metadata: Metadata = {
  title: `Chats ${METADATA.exTitle}`,
  description: "Chat Jody Yuantoro directly",
  keywords:
    "fronend developer, software engineer, react js, javascript, typescript, contact",
  alternates: {
    canonical: `${process.env.DOMAIN}/chats`,
  },
};

const ChatsPage = async () => {
  const chats = await getChats();

  return (
    <BlurFade>
      <ChatsHeader />
      <ChatList messages={chats?.data} />
      <ChatInput />
    </BlurFade>
  );
};

export default ChatsPage;

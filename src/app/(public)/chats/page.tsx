import BlurFade from "@/components/magicui/blur-fade";
import Typography from "@/components/ui/typography";
import ChatList from "./components/chats-list";
import { Metadata } from "next";
import { METADATA } from "@/commons/constants/metadata";
import { getChats } from "@/services/chats";
import ChatInput from "./components/chats-input";
import { ChatsProvider } from "@/providers/chats-provider";

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
      <div className="mb-6">
        <Typography.H3>Chats</Typography.H3>
        <Typography.P>
          Leave whatever you like to say, suggestions, questions or anything!
        </Typography.P>
      </div>
      <ChatsProvider>
        <ChatList messages={chats?.data} />
        <ChatInput />
      </ChatsProvider>
    </BlurFade>
  );
};

export default ChatsPage;

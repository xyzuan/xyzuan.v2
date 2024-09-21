import BlurFade from "@/components/magicui/blur-fade";
import Typography from "@/components/ui/typography";
import ChatList from "./components/chats-list";
import { Metadata } from "next";
import { METADATA } from "@/commons/constants/metadata";
import { getChats } from "@/services/chats";
import ChatInput from "./components/chats-input";

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
    <BlurFade delay={0.25 * 0.05} inView>
      <div className="mb-6">
        <Typography.h3>Chats</Typography.h3>
        <Typography.p>
          Leave whatever you like to say, suggestions, questions or anything!
        </Typography.p>
      </div>
      <ChatList messages={chats?.data} />
      <ChatInput />
    </BlurFade>
  );
};

export default ChatsPage;

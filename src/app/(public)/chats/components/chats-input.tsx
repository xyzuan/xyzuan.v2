"use client";

import ChatAuth from "./chats-auth";
import ChatUserInfo from "./chats-user-info";
import { useProfile } from "@/hooks/useProfile.hook";
import { SendIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { postChat } from "@/services/chats";
import { useRouter } from "next/navigation";

const chatSchema = z.object({
  message: z.string().min(1, "Message cannot be empty"),
});

const ChatInput = () => {
  const { profile } = useProfile();
  const router = useRouter();

  const form = useForm<z.infer<typeof chatSchema>>({
    resolver: zodResolver(chatSchema),
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof chatSchema>) => {
    toast.loading("Sending your message...");
    postChat(values.message).then(async (res) => {
      if (res.ok) {
        toast.success("Sended Successfuly.");
        router.refresh();
      } else {
        const errorData = await res.json();
        toast("Chat send failed", { description: errorData.message });
      }
    });
  };

  return profile ? (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex gap-x-1 border-t border-neutral-300 p-4 pb-3 dark:border-neutral-800"
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            <SendIcon size={18} />
          </Button>
        </form>
      </Form>
      <ChatUserInfo
        name={profile.name}
        email={profile.email}
        iconUrl={profile.iconUrl}
      />
    </>
  ) : (
    <ChatAuth />
  );
};

export default ChatInput;

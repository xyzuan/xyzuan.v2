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
import { useState } from "react";

const chatSchema = z.object({
  message: z.string().min(1, "Message cannot be empty"),
});

const ChatInput = () => {
  const { profile } = useProfile();
  const [isSending, setIsSending] = useState(false);

  const form = useForm<z.infer<typeof chatSchema>>({
    resolver: zodResolver(chatSchema),
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof chatSchema>) => {
    setIsSending(true);
    const sendToast = toast.loading("Sending message to Eden...");
    postChat(values.message)
      .then(async (res) => {
        if (res.ok) {
          toast.success("Sended Successfuly.", {
            id: sendToast,
          });
          form.reset();
        } else {
          const errorData = await res.json();
          toast.error("Chat send failed", {
            description: errorData.message,
            id: sendToast,
          });
        }
      })
      .finally(() => setIsSending(false));
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
            disabled={isSending}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSending}>
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

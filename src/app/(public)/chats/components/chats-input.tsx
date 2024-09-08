"use client";

import ChatAuth from "./chats-auth";
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
import { FaSpinner } from "react-icons/fa";
import { useProfile } from "@/providers/profile-provider";

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
          className="flex gap-x-3 pt-3"
        >
          <div className="fixed bottom-10 inset-x-0 h-14 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
          <FormField
            control={form.control}
            name="message"
            disabled={isSending}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Input your message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSending}>
            {isSending ? (
              <FaSpinner size={18} className="animate-spin" />
            ) : (
              <SendIcon size={18} />
            )}
          </Button>
        </form>
      </Form>
    </>
  ) : (
    <ChatAuth />
  );
};

export default ChatInput;

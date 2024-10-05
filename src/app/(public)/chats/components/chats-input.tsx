"use client";

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
import { FaSpinner } from "react-icons/fa";
import { useProfile } from "@/providers/profile-provider";
import AuthDialog from "@/components/ui/auth-dialog";
import { useChats } from "@/providers/chats-provider";
import { Badge } from "@/components/ui/badge";

const chatSchema = z.object({
  message: z.string().trim().min(1, "Message cannot be empty"),
});

const ChatInput = () => {
  const { profile } = useProfile();
  const { isReplying, setIsReplying, isSending, setIsSending } = useChats();

  const form = useForm<z.infer<typeof chatSchema>>({
    resolver: zodResolver(chatSchema),
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof chatSchema>) => {
    setIsSending(true);
    toast.promise(postChat(values.message, isReplying?.id), {
      loading: "Sending message to Eden...",
      success: () => {
        form.reset();
        return `Sended Successfuly.`;
      },
      error: (err) => err,
      finally: () => {
        setIsSending(false);
        setIsReplying(undefined);
      },
    });
  };

  return profile ? (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-x-3 pt-3 items-end"
      >
        <FormField
          control={form.control}
          name="message"
          disabled={isSending}
          render={({ field }) => (
            <FormItem className="w-full">
              {isReplying && (
                <Badge onClick={() => setIsReplying(undefined)}>
                  Replying : {isReplying.user?.name}{" "}
                </Badge>
              )}
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
  ) : (
    <AuthDialog />
  );
};

export default ChatInput;

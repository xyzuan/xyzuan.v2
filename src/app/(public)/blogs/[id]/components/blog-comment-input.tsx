"use client";

import { useParams } from "next/navigation";
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
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useProfile } from "@/providers/profile-provider";
import { postBlogComment } from "@/services/blogs";
import AuthDialog from "@/components/ui/auth-dialog";
import BlogReactionPicker from "./blog-reaction-picker";
import { ReactionItem } from "@/commons/types/blogs.types";

const commentSchema = z.object({
  content: z.string().min(1, "Message cannot be empty"),
});

const BlogCommentInput = ({
  id,
  reactions,
}: {
  id: number;
  reactions: ReactionItem[];
}) => {
  const { profile, loading } = useProfile();
  const [isSending, setIsSending] = useState(false);

  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = (values: z.infer<typeof commentSchema>) => {
    setIsSending(true);
    toast.promise(postBlogComment(id, values.content), {
      loading: "Sending comment to Eden...",
      success: () => {
        form.reset();
        return `Sended Successfuly.`;
      },
      error: (err) => err,
      finally: () => setIsSending(false),
    });
  };

  if (loading) return null;

  return profile ? (
    <div className="flex items-center justify-center w-full gap-3">
      <BlogReactionPicker profile={profile} reactions={reactions} id={id} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex gap-x-3 w-full"
        >
          <FormField
            control={form.control}
            name="content"
            disabled={isSending}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="bg-background/65 backdrop-blur-xl"
                    placeholder="Input your comment"
                    {...field}
                  />
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
    </div>
  ) : (
    <AuthDialog msg="comment blog" />
  );
};

export default BlogCommentInput;

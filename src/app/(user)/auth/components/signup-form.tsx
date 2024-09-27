"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authSignUp } from "@/services/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import BlurFade from "@/components/magicui/blur-fade";

const loginSchema = z.object({
  email: z
    .string()
    .email({
      message: "Email must be valid email.",
    })
    .trim()
    .min(1, "Email cannot be empty"),
  name: z.string().trim().min(1, "Name cannot be empty"),
  password: z.string().trim().min(1, "Password cannot be empty"),
});

const SignUpForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    toast.promise(authSignUp(values.name, values.email, values.password), {
      loading: "Registering your account to Eden realms...",
      success: () => {
        return "Register Successfuly.";
      },
      error: (err) => err,
      finally: () => router.refresh(),
    });
  };
  return (
    <BlurFade>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="example@xyzuan.my.id" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Create your account</Button>
        </form>
      </Form>
    </BlurFade>
  );
};

export default SignUpForm;

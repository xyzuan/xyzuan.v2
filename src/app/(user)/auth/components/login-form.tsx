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
import { authGoogle, authLogin } from "@/services/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { SiGoogle } from "react-icons/si";

const loginSchema = z.object({
  email: z.string().email({
    message: "Email must be valid email.",
  }),
  password: z.string(),
});

const LoginForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
    },
  });
  const onLogin = (values: z.infer<typeof loginSchema>) => {
    toast.promise(authLogin(values.email, values.password), {
      loading: "Authenticating to Eden...",
      success: () => "Login Successfuly.",
      error: async (err) => {
        const error = await err.json();
        return error.message;
      },
      finally: () => router.refresh(),
    });
  };

  const onGoogle = () => {
    toast.loading("Authenticating to Eden...");
    authGoogle(process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000");
  };

  return (
    <Form {...form}>
      <form className="space-y-3">
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
      </form>
      <div className="flex flex-col gap-3 mt-6">
        <Button onClick={() => onLogin(form.getValues())}>Login</Button>
        <Button variant="outline" onClick={() => onGoogle()}>
          <span className="mr-3">
            <SiGoogle />
          </span>
          Auth with Google
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;

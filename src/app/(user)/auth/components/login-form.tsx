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
import {
  authGithub,
  authGoogle,
  authLinkedin,
  authLogin,
} from "@/services/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { SiGithub, SiGoogle, SiLinkedin } from "react-icons/si";
import { useProfile } from "@/providers/profile-provider";
import { getMyProfile } from "@/services/profile";
import BlurFade from "@/components/magicui/blur-fade";
import Typography from "@/components/ui/typography";

const loginSchema = z.object({
  email: z
    .string()
    .email({
      message: "Email must be valid email.",
    })
    .trim()
    .min(1, "Email cannot be empty"),
  password: z.string().trim().min(1, "Password cannot be empty"),
});

const LoginForm = () => {
  const { setProfile } = useProfile();
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
    },
  });
  const onLogin = (values: z.infer<typeof loginSchema>) => {
    toast.promise(
      authLogin(values.email, values.password).then(async (res) => {
        if (res.ok) {
          const response = await getMyProfile();
          if (response.ok) {
            const profileData = await response.json();
            setProfile(profileData);
          }
        }
      }),
      {
        loading: "Authenticating to Eden...",
        success: () => "Login Successfuly.",
        error: (err) => err,
        finally: () => router.refresh(),
      }
    );
  };

  const onGoogle = () => {
    toast.loading("Redirecting to Google Account...");
    authGoogle(process.env.NEXT_PUBLIC_DOMAIN ?? "http://localhost:3000");
  };

  const onGithub = () => {
    toast.loading("Redirecting to Github...");
    authGithub(process.env.NEXT_PUBLIC_DOMAIN ?? "http://localhost:3000");
  };

  const onLinkedin = () => {
    toast.loading("Redirecting to Linkedin...");
    authLinkedin(process.env.NEXT_PUBLIC_DOMAIN ?? "http://localhost:3000");
  };

  return (
    <BlurFade>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onLogin)} className="space-y-3">
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
          <Button className="w-full mt-3" type="submit">
            Login
          </Button>
        </form>
        <div className="flex flex-col gap-3 mt-6">
          <Typography.P className="text-center text-sm opacity-65 mb-2">
            Or login with
          </Typography.P>
          <Button variant="outline" onClick={() => onGoogle()}>
            <span className="mr-3">
              <SiGoogle />
            </span>
            Authenticate with Google
          </Button>
          <Button variant="outline" onClick={() => onGithub()}>
            <span className="mr-3">
              <SiGithub />
            </span>
            Authenticate with Github
          </Button>
          <Button variant="outline" onClick={() => onLinkedin()}>
            <span className="mr-3">
              <SiLinkedin />
            </span>
            Authenticate with Linkedin
          </Button>
        </div>
      </Form>
    </BlurFade>
  );
};

export default LoginForm;

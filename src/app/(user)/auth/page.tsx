import Link from "next/link";
import LoginForm from "./components/login-form";
import Typography from "@/components/ui/typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignUpForm from "./components/signup-form";

export default function LoginPage() {
  return (
    <div className="h-screen w-screen">
      <div className="flex h-full w-full flex-col justify-center p-8 sm:w-[350px]">
        <div className="flex flex-col space-y-2">
          <Typography.h1>
            Nauzyx`
            <br />
            Scape
          </Typography.h1>
          <Typography.p className="text-sm text-muted-foreground">
            Enter your account credentials to enter eden area.
          </Typography.p>
        </div>
        <Tabs defaultValue="login" className="my-6">
          <TabsList className="mb-3">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Create Account</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="signup">
            <SignUpForm />
          </TabsContent>
        </Tabs>
        <Typography.p className="text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            className="underline underline-offset-4 hover:text-primary"
            href="#"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            className="underline underline-offset-4 hover:text-primary"
            href="#"
          >
            Privacy Policy
          </Link>
          .
        </Typography.p>
      </div>
    </div>
  );
}

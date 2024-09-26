import Link from "next/link";
import LoginForm from "./components/login-form";
import Typography from "@/components/ui/typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignUpForm from "./components/signup-form";
import Image from "@/components/ui/image";

export default function LoginPage() {
  return (
    <div className="h-screen w-screen max-w-4xl">
      <div className="flex h-full w-full flex-col justify-center p-8 z-50">
        <div className="flex flex-col space-y-2">
          <Typography.H1>
            Nauzyx`
            <br />
            Scape
          </Typography.H1>
          <Typography.P className="text-sm text-muted-foreground">
            Enter your account credentials to enter eden area.
          </Typography.P>
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
        <Typography.P className="text-sm text-muted-foreground">
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
        </Typography.P>

        <Image
          alt="anya"
          width={200}
          height={1000}
          className="absolute bottom-0 right-0 z-[-100]"
          src="https://res.cloudinary.com/myxyzuan/image/upload/v1725733052/yaxsvzas8mfpwxunkdvq.png"
        />
      </div>
    </div>
  );
}

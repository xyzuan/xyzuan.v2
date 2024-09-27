import Link from "next/link";
import LoginForm from "./components/login-form";
import Typography from "@/components/ui/typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignUpForm from "./components/signup-form";
import BlurFade from "@/components/magicui/blur-fade";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { HyperText } from "@/components/magicui/hyper-text";

export default function LoginPage() {
  return (
    <BlurFade className="h-screen w-screen flex items-center justify-center lg:overflow-hidden">
      <div className="flex w-full h-full flex-col lg:flex-row items-center justify-between z-50">
        <div className="w-full lg:w-3/4 flex flex-col space-y-2 p-6 pt-12 lg:p-0 lg:ml-16">
          <HyperText
            className="text-4xl font-extrabold hidden lg:block"
            text="Nauzyx Hub ゲートウェイ"
          />
          <Typography.H1 className="text-3xl font-extrabold lg:hidden">
            Nauzyx Hub ゲートウェイ/
          </Typography.H1>
          <Typography.P className="text-sm text-muted-foreground">
            Enter your account credentials to enter eden area.
          </Typography.P>
        </div>
        <div className="bg-background flex flex-col justify-center h-full px-6 pb-12 lg:pb-0 lg:px-24 z-50">
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
        </div>
      </div>
      <FlickeringGrid
        className="z-0 absolute inset-0 h-full w-full"
        squareSize={8}
        gridGap={24}
        color="#6B7280"
        maxOpacity={0.3}
        flickerChance={0.6}
      />
    </BlurFade>
  );
}

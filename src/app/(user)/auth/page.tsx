import Link from "next/link";
import LoginForm from "./components/login-form";
import Typography from "@/components/ui/typography";

export default function LoginPage() {
  return (
    <div className="relative h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex h-full w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Typography.h1 className="text-2xl font-semibold tracking-tight">
            Login to admin account
          </Typography.h1>
          <Typography.p className="text-sm text-muted-foreground">
            Enter your email to continue
          </Typography.p>
        </div>
        <LoginForm />
        <Typography.p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our
          <Link
            className="underline underline-offset-4 hover:text-primary"
            href="#"
          >
            Terms of Service
          </Link>
          and
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

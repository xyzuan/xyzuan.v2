import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const AuthDialog = ({
  isWidget = false,
  msg = "continue",
}: {
  isWidget?: boolean;
  msg?: string;
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <div className="mb-1 space-y-5 py-6 text-center text-neutral-700 dark:text-neutral-400">
        <div
          className={clsx(
            "flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-5",
            isWidget && "!flex-col !gap-4"
          )}
        >
          <Button
            onClick={() => router.push("/auth")}
            className={`flex w-full items-center justify-center border py-2.5 shadow-sm transition duration-300 hover:scale-[101%] lg:w-fit`}
          >
            Sign in to {msg}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthDialog;

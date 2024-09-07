import GridPattern from "../magicui/animated-grid-pattern";
import { cn } from "@/commons/libs/utils";
import { BottomNav } from "./bottom-nav";
import Sidebar from "./sidebar";
import PageLoader from "./page-loader";

type BaseLayoutProps = {
  children: React.ReactNode;
  forceDisableSidebar?: boolean;
};

const BaseLayout = ({
  children,
  forceDisableSidebar = false,
}: BaseLayoutProps) => {
  return (
    <>
      <PageLoader />
      <div className="fixed z-0 top-[-680px] h-screen w-screen items-center justify-center overflow-hidden">
        <GridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={18}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 "
          )}
        />
      </div>
      <div className="flex xl:gap-6 max-w-7xl z-20">
        {!forceDisableSidebar && (
          <aside>
            <Sidebar />
          </aside>
        )}
        <main className="mb-16 mt-8 xl:mt-16 w-screen p-8 xl:p-0">
          {children}
        </main>
      </div>
      <BottomNav forceDisableSidebar={forceDisableSidebar} />
    </>
  );
};

export default BaseLayout;

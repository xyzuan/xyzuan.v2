import Image from "@/components/ui/image";
import Typography from "@/components/ui/typography";

const Header = () => {
  return (
    <div className="flex flex-col md:hidden mt-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col h-full">
          <Typography.h3 className="mt-0">Jody Yuantoro</Typography.h3>
          <Typography.p>@xyzuan</Typography.p>
        </div>
        <Image
          alt="xyzuan"
          width={62}
          height={62}
          rounded="rounded-full"
          className="rotate-3 dark:border-neutral-600 lg:hover:scale-105"
          src="https://avatars.githubusercontent.com/u/57469823?v=4"
        />
      </div>
    </div>
  );
};

export default Header;

import Image from "@/components/ui/image";
import { MdVerified as VerifiedIcon } from "react-icons/md";
import Typography from "@/components/ui/typography";

const Header = () => {
  return (
    <div className="flex flex-col md:hidden mt-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col h-full">
          <Typography.h3 className="mt-0 flex items-center">
            Jody Yuantoro
            <span>
              <VerifiedIcon size={18} className="text-blue-400 ml-2" />
            </span>
          </Typography.h3>
          <Typography.p className="text-primary/55">@xyzuan</Typography.p>
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

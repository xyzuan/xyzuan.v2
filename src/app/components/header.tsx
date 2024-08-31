import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Typography from "@/components/ui/typography";

const Header = () => {
  return (
    <div className="flex flex-col md:hidden mt-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col h-full">
          <Typography.h3 className="mt-0">Jody Yuantoro</Typography.h3>
          <Typography.p>@xyzuan</Typography.p>
        </div>
        <Avatar className="w-16 h-16">
          <AvatarImage src="https://avatars.githubusercontent.com/u/57469823?v=4" />
        </Avatar>
      </div>
    </div>
  );
};

export default Header;

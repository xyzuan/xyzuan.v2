import { getEmoteLabel } from "@/commons/helpers";
import { ReactionItem } from "@/commons/types/blogs.types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Typography from "@/components/ui/typography";

const BlogReaderFooter = ({
  reactions,
  commentCount,
}: {
  reactions: ReactionItem[];
  commentCount: number;
}) => {
  return (
    <div className="mt-6">
      <Separator />
      <div className="flex flex-col w-full my-3 mt-3">
        <Typography.h4 className="mb-3">Reactions</Typography.h4>
        <div className="flex gap-4">
          {reactions.length > 0 ? (
            <>
              {reactions.map((value, idx) => (
                <div key={idx} className="relative inline-block">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src={value.user?.iconUrl}
                      alt={value.user?.name}
                    />
                    <AvatarFallback>
                      {value.user?.name?.slice(0, 1)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex justify-center items-center p-2 h-6 w-6 absolute bottom-0 right-0 text-base bg-foreground/55 backdrop-blur-3xl rounded-full">
                    {getEmoteLabel(value.type.toUpperCase())}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <Typography.p className="opacity-70">No reactions yet</Typography.p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogReaderFooter;

import { getEmoteLabel } from "@/commons/helpers";
import { ReactionItem } from "@/commons/types/blogs.types";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "@/components/ui/image";
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
        <Typography.H4 className="mb-3">Reactions</Typography.H4>
        <div className="flex gap-4 overflow-y-auto scrollbar-hide">
          {reactions.length > 0 ? (
            <>
              {reactions.map((value, idx) => (
                <div key={idx} className="relative inline-block">
                  <Avatar className="h-12 w-12">
                    {value?.user?.iconUrl !== null ? (
                      <Image
                        height={52}
                        width={52}
                        alt={value?.user?.name}
                        src={value?.user?.iconUrl}
                      />
                    ) : (
                      <AvatarFallback>
                        {value?.user?.name.slice(0, 1)}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div className="flex justify-center items-center p-2 h-5 w-5 absolute bottom-0 right-0 text-xs bg-foreground/55 backdrop-blur-3xl rounded-full">
                    {getEmoteLabel(value.type.toUpperCase())}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <Typography.P className="opacity-70">No reactions yet</Typography.P>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogReaderFooter;

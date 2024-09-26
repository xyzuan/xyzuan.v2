"use client";

import { emotes } from "@/commons/constants/emotes";
import { getEmoteLabel } from "@/commons/helpers";
import { ReactionItem } from "@/commons/types/blogs.types";
import { Profile } from "@/commons/types/profile.types";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { postBlogReaction } from "@/services/blogs";
import { ReactionBarSelector } from "@charkour/react-reactions";
import { Smile } from "lucide-react";

const BlogReactionPicker = ({
  id,
  profile,
  reactions,
}: {
  id: number;
  profile: Profile;
  reactions: ReactionItem[];
}) => {
  const userReaction = reactions.find(
    (reaction) => reaction.user.id === profile.id
  );
  const postReaction = async (reaction: string) => {
    postBlogReaction(id, reaction.toUpperCase()).then(async (res) => {});
  };

  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="backdrop-blur-xl p-1 rounded-full shadow-sm border">
          <div className="text-xl">
            {userReaction?.type ? (
              getEmoteLabel(userReaction?.type)
            ) : (
              <Smile className="opacity-50" />
            )}
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="p-0 w-fit rounded-full">
        <ReactionBarSelector
          onSelect={(reaction) => postReaction(reaction)}
          reactions={emotes}
          style={{
            paddingRight: "0.5rem",
            backgroundColor: "transparent",
          }}
          iconSize={24}
        />
      </HoverCardContent>
    </HoverCard>
  );
};

export default BlogReactionPicker;

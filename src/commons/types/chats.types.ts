import { Profile } from "./profile.types";

export interface MessageProps {
  id: string;
  user: Profile;
  profile: Profile;
  message: string;
  mentionedToId: string;
  mentionedTo: MessageProps;
  mentionedBy: MessageProps[];
  createdAt: string;
  isShow?: boolean;
}

export interface ChatListProps {
  messages: MessageProps[];
}

export interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

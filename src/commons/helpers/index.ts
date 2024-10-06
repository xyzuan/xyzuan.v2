import { format, parseISO } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { emotes } from "../constants/emotes";

interface ParsedUrlProps {
  parentSlug: string;
  contentSlug: string;
}

export const formatBlogSlug = (slug: string) => slug?.slice(0, -5);

export const formatDate = (date: string, type = "MMMM dd, yyyy") => {
  if (!date) {
    return "";
  }

  const formattedDate = format(
    utcToZonedTime(parseISO(date), "Asia/Jakarta"),
    type
  );
  return formattedDate;
};

export const parseUrl = (url: string): ParsedUrlProps => {
  const parts = url.split("/");
  return {
    parentSlug: parts[2],
    contentSlug: parts[3],
  };
};

export const removeHtmlTags = (html: string) => {
  if (typeof DOMParser !== "undefined") {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  } else {
    return html;
  }
};

export const formatExcerpt = (content: string, maxLength = 100) => {
  const cleanedContent = removeHtmlTags(content);

  if (cleanedContent.length <= maxLength) {
    return cleanedContent;
  }

  const trimmed = cleanedContent.substring(0, maxLength).replace(/\s+\S*$/, "");

  return trimmed + (cleanedContent.length > maxLength ? "..." : "");
};

export const calculateReadingTime = (content: string, wordsPerMinute = 5) => {
  const cleanedContent = formatExcerpt(content);
  const readingTimeMinutes = Math.ceil(
    cleanedContent.split(/\s+/).length / wordsPerMinute
  );
  return readingTimeMinutes;
};

export const getRandomWidth = (min: number, max: number) => {
  return `${Math.floor(Math.random() * (max - min + 1) + min)}px`;
};

export const getRandomHeight = (min: number, max: number) => {
  return `${Math.floor(Math.random() * (max - min + 1) + min)}px`;
};

export const getTags = (tagsString: string) => {
  return tagsString
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag);
};

export const getEmoteLabel = (emojiNode: string) => {
  const emote = emotes.find((e) => e.key === emojiNode);
  return emote ? emote.node : "Unknown";
};

export const scrollToMessage = (messageId: string) => {
  const element = document.getElementById(messageId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    element.classList.add("border", "scale-110", "border-primary/30");
    setTimeout(() => {
      element.classList.remove("border", "scale-110", "border-primary/30");
    }, 3000);
  }
};

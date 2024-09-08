import {
  Coffee,
  Home,
  LayoutDashboard,
  LucideIcon,
  MessageCircle,
  RocketIcon,
  Rss,
} from "lucide-react";

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/",
          label: "Home",
          active: pathname.endsWith("/"),
          icon: Home,
        },
        {
          href: "/dashboards",
          label: "Dashboards",
          active: pathname.includes("/dashboards"),
          icon: LayoutDashboard,
        },
        {
          href: "/projects",
          label: "Projects",
          active: pathname.includes("/projects"),
          icon: Coffee,
        },
        {
          href: "/blogs",
          label: "Blogs",
          active: pathname.includes("/blogs"),
          icon: Rss,
        },
        {
          href: "/contacts",
          label: "Contacts",
          active: pathname.includes("/contacts"),
          icon: RocketIcon,
        },
        {
          href: "/chats",
          label: "Chats",
          active: pathname.includes("/chats"),
          icon: MessageCircle,
        },
      ],
    },
  ];
}

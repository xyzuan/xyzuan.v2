import {
  Book,
  Code,
  Coffee,
  Home,
  LayoutDashboard,
  LayoutGrid,
  LucideIcon,
  Rss,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
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
          active: pathname.includes("/"),
          icon: Home,
          submenus: [],
        },
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: LayoutDashboard,
          submenus: [],
        },
        {
          href: "/project",
          label: "Project",
          active: pathname.includes("/project"),
          icon: Coffee,
          submenus: [],
        },
        {
          href: "/blog",
          label: "Blog",
          active: pathname.includes("/blog"),
          icon: Rss,
          submenus: [],
        },
        {
          href: "/learn",
          label: "Learn",
          active: pathname.includes("/learn"),
          icon: Book,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Apps",
      menus: [
        {
          href: "/jsplay",
          label: "JS Playground",
          active: pathname.includes("/jsplay"),
          icon: Code,
          submenus: [],
        },
      ],
    },
  ];
}

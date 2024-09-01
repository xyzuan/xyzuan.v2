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
          active: pathname.endsWith("/"),
          icon: Home,
          submenus: [],
        },
        {
          href: "/dashboards",
          label: "Dashboards",
          active: pathname.includes("/dashboards"),
          icon: LayoutDashboard,
          submenus: [],
        },
        {
          href: "/projects",
          label: "Projects",
          active: pathname.includes("/projects"),
          icon: Coffee,
          submenus: [],
        },
        {
          href: "/blogs",
          label: "Blogs",
          active: pathname.includes("/blogs"),
          icon: Rss,
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

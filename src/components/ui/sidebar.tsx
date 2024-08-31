"use client";

import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getMenuList } from "@/constants/menu-list";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import {
  ArrowRight,
  ArrowRightIcon,
  ChevronRightCircle,
  Ellipsis,
} from "lucide-react";
import Typography from "./typography";
import { Avatar, AvatarImage } from "./avatar";

const Sidebar = () => {
  return (
    <div className="hidden flex-col px-3 overflow-y-auto min-w-56 top-24 sticky md:flex">
      <div className="mb-3">
        <Avatar className="w-24 h-24 mb-3">
          <AvatarImage src="https://avatars.githubusercontent.com/u/57469823?v=4" />
        </Avatar>
        <Typography.h4>Jody Yuantoro</Typography.h4>
        <Typography.p>@xyzuan</Typography.p>
      </div>
      <SidebarMenu />
    </div>
  );
};

const SidebarMenu = ({ isOpen }: any) => {
  const pathname = usePathname();
  const menuList = getMenuList(pathname);
  return (
    <nav>
      <ul className="flex flex-col items-start space-y-1">
        {menuList.map(({ groupLabel, menus }, index) => (
          <li className={cn("w-full", groupLabel ? "pt-5" : "")} key={index}>
            {(isOpen && groupLabel) || isOpen === undefined ? (
              <Typography.p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
                {groupLabel}
              </Typography.p>
            ) : !isOpen && isOpen !== undefined && groupLabel ? (
              <TooltipProvider>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger className="w-full">
                    <div className="w-full flex justify-center items-center">
                      <Ellipsis className="h-5 w-5" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <Typography.p>{groupLabel}</Typography.p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <p className="pb-2"></p>
            )}
            {menus.map(
              ({ href, label, icon: Icon, active, submenus }, index) => {
                return (
                  <div className="w-full" key={index}>
                    <TooltipProvider disableHoverableContent>
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger asChild>
                          <Button
                            variant={active ? "secondary" : "ghost"}
                            className="w-full justify-start h-10 mb-1"
                            asChild
                          >
                            <Link href={href}>
                              <span
                                className={cn(isOpen === false ? "" : "mr-4")}
                              >
                                <Icon size={18} />
                              </span>
                              <Typography.p
                                className={cn(
                                  "flex flex-grow max-w-[200px] truncate",
                                  isOpen === false
                                    ? "-translate-x-96 opacity-0"
                                    : "translate-x-0 opacity-100"
                                )}
                              >
                                {label}
                              </Typography.p>
                              <ArrowRightIcon
                                className={
                                  active ? "block opacity-60" : "hidden"
                                }
                                height={14}
                                width={14}
                              />
                            </Link>
                          </Button>
                        </TooltipTrigger>
                        {isOpen === false && (
                          <TooltipContent side="right">{label}</TooltipContent>
                        )}
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                );
              }
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;

"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { getMenuList } from "@/constants/menu-list";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./button";
import { ModeToggle } from "./mode-toggle";

export function BottomNav({ isOpen }: any) {
  const pathname = usePathname();
  const menuList = getMenuList(pathname);
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-12 z-30 mx-auto flex md:hidden origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock
        className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
        direction="middle"
      >
        {menuList[0].menus.map(
          ({ href, label, icon: Icon, active, submenus }, index) => {
            return (
              <DockIcon key={label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={href}
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                          size: "icon",
                        }),
                        "size-12 rounded-full"
                      )}
                    >
                      <Icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            );
          }
        )}
        <ModeToggle />
      </Dock>
    </div>
  );
}

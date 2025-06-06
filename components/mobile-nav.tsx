"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  className?: string;
}

export function MobileNav({ className }: MobileNavProps) {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b md:hidden",
        className
      )}
    >
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-3">
          <SidebarTrigger aria-label="Toggle navigation menu" />
          <Logo className="h-6 w-auto" />
        </div>
        <div />
      </div>
    </header>
  );
}
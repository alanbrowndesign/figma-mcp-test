"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function MobileOverlay() {
  const { isMobile, openMobile, setOpenMobile } = useSidebar();

  if (!isMobile || !openMobile) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden",
        "animate-in fade-in-0 duration-200"
      )}
      onClick={() => setOpenMobile(false)}
      aria-hidden="true"
    />
  );
}
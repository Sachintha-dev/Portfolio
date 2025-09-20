"use client";
import { NavigationIcons } from "@/components/ui/navigation-icons";

export function RightSidebar() {
  return (
    <aside className="fixed right-2 sm:right-0 top-1/2 -translate-y-1/2 sm:top-0 sm:translate-y-0 h-auto sm:h-full w-16 sm:w-20 z-50 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-2 sm:space-y-6">
        <NavigationIcons />
      </div>
    </aside>
  );
}

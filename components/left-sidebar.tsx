"use client";
import { NavigationIcons } from "./navigation-icons";

export function LeftSidebar() {
  return (
    <aside className="fixed right-0 top-0 h-full w-20  z-50 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-6">
        <NavigationIcons />
      </div>
    </aside>
  );
}

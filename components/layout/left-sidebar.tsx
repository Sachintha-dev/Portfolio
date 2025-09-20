"use client";
import { NavigationIcons } from "@/components/ui/navigation-icons";

export function RightSidebar() {
  return (
    <>
      {/* Mobile Bottom Navigation */}
      <aside className="fixed bottom-0 left-0 right-0 sm:hidden z-50 bg-black/20 backdrop-blur-md border-t border-white/20 w-full max-w-full shadow-2xl">
        <div className="flex items-center w-full max-w-full overflow-hidden py-1 px-2">
          <NavigationIcons />
        </div>
      </aside>

      {/* Desktop Right Sidebar */}
      <aside className="hidden sm:flex fixed right-0 top-0 h-full w-20 z-50 flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-6">
          <NavigationIcons />
        </div>
      </aside>
    </>
  );
}

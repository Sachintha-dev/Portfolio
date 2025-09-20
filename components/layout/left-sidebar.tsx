"use client";
import { NavigationIcons } from "@/components/ui/navigation-icons";
import { useEffect, useState } from "react";

export function RightSidebar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Show navigation when scrolled more than 100px
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Bottom Navigation - Only show when scrolled */}
      <aside
        className={`fixed bottom-0 left-0 right-0 sm:hidden z-50 bg-black/20 backdrop-blur-md border-t border-white/20 w-full max-w-full shadow-2xl transition-transform duration-300 ease-in-out ${
          isScrolled ? "translate-y-0" : "translate-y-full"
        }`}
      >
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

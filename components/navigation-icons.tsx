"use client";

import { Book, Home, Star, Target, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationIconsProps {
  isDark?: boolean;
}

export function NavigationIcons({ isDark = false }: NavigationIconsProps) {
  // Smooth scroll handler for anchor links
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const pathname = usePathname();

  const navItems = [
    { icon: Home, href: "#home", label: "Home" },
    { icon: User, href: "#about", label: "About" },
    { icon: Star, href: "#experiences", label: "Experiences" },
    { icon: Book, href: "#education", label: "Education" },
    { icon: Target, href: "#projects", label: "Projects" },
    // You can add more page routes for other sections if needed
  ];

  return (
    <div className="flex flex-col items-center gap-1 bg-black/65 backdrop-blur-sm rounded-full px-2 py-4">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.href} className="relative group">
            {item.href.startsWith("#") ? (
              <a
                href={item.href}
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 text-white/70 hover:text-white hover:bg-white/10`}
                aria-label={item.label}
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                <Icon size={20} />
              </a>
            ) : (
              <Link
                href={item.href}
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
                  pathname === item.href
                    ? "bg-blue-400/20 text-blue-400"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
                aria-label={item.label}
              >
                <Icon size={20} />
              </Link>
            )}
            {/* Hover Label - Right Side */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 ease-out transform -translate-x-2 group-hover:translate-x-0">
              <div className="bg-black/65 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap border border-white/10">
                {item.label}
                {/* Arrow pointing to icon */}
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-black/90"></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

"use client";

import {
  Home,
  Monitor,
  Newspaper,
  Phone,
  School,
  Star,
  Target,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationIconsProps {
  isDark?: boolean;
}

export function NavigationIcons({ isDark = false }: NavigationIconsProps) {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, href: "/", label: "Home" },
    { icon: User, href: "/about", label: "About" },
    { icon: Monitor, href: "/work", label: "Work" },
    { icon: School, href: "/education", label: "Education" },
    { icon: Target, href: "/projects", label: "Projects" },
    { icon: Star, href: "/skills", label: "Skills" },
    { icon: Newspaper, href: "/blog", label: "Blogs" },
    { icon: Phone, href: "/contact", label: "Getting Touch" },
  ];

  return (
    <div className="flex flex-col items-center gap-1 bg-black/65 backdrop-blur-sm rounded-full px-2 py-4">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <div key={item.href} className="relative group">
            <Link
              href={item.href}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
                isActive
                  ? "bg-blue-400/20 text-blue-400"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
              aria-label={item.label}
            >
              <Icon size={20} />
            </Link>

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

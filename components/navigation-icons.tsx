"use client";

import {
  FileText,
  Github,
  Home,
  Monitor,
  Settings,
  Skull,
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
    { icon: Monitor, href: "/work", label: "Work" },
    { icon: Settings, href: "/settings", label: "Settings" },
    { icon: Skull, href: "/skills", label: "Skills" },
    { icon: FileText, href: "/projects", label: "Projects" },
    { icon: User, href: "/about", label: "About" },
    { icon: Github, href: "/github", label: "GitHub" },
  ];

  return (
    <div className="flex flex-col items-center gap-1 bg-black/90 backdrop-blur-sm rounded-full px-2 py-4">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
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
        );
      })}
    </div>
  );
}

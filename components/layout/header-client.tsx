"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function HeaderClient() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-100/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-sm text-gray-600">© Code by Ashwin</div>

        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm transition-colors hover:text-blue-600 ${
              pathname === "/" ? "text-blue-600 font-medium" : "text-gray-600"
            }`}
          >
            Home
          </Link>
          <Link
            href="/skills"
            className={`text-sm transition-colors hover:text-blue-600 ${
              pathname === "/skills" ? "text-blue-600 font-medium" : "text-gray-600"
            }`}
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className={`text-sm transition-colors hover:text-blue-600 ${
              pathname === "/projects" ? "text-blue-600 font-medium" : "text-gray-600"
            }`}
          >
            Projects
          </Link>
        </nav>

        <div className="text-sm text-gray-600 text-right max-w-md">
          Passionate Creative Designer and Developer, dedicated to crafting innovative solutions and exceptional digital
          experiences through modern technologies.
        </div>
      </div>
    </header>
  )
}

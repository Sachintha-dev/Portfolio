export function SocialLinks() {
  const socialLinks = [
    { icon: "📧", href: "#", label: "Email" },
    { icon: "💼", href: "#", label: "LinkedIn" },
    { icon: "🐙", href: "#", label: "GitHub" },
    { icon: "🐦", href: "#", label: "Twitter" },
    { icon: "📱", href: "#", label: "Instagram" },
    { icon: "🎵", href: "#", label: "Spotify" },
    { icon: "📺", href: "#", label: "YouTube" },
  ]

  return (
    <div className="flex items-center gap-4 bg-black/80 backdrop-blur-sm rounded-full px-6 py-3">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="w-8 h-8 flex items-center justify-center text-white hover:text-blue-400 transition-colors"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}

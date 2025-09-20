interface HeaderProps {
  isDark?: boolean;
}

export function Header({ isDark = false }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-sm text-white">© Code by Sachiya</div>

        <div className="text-sm text-white text-right max-w-md">
          Passionate Creative Designer and Developer, dedicated to crafting
          innovative solutions and exceptional digital experiences through
          modern technologies.
        </div>
      </div>
    </header>
  );
}

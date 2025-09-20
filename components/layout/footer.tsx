export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-20 px-4 md:px-6 w-full max-w-full">
      <div className="w-full max-w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0">
          <div className="flex-1">
            <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base">
              your friendly chaos creator
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none break-words">
              Ashhhhhhhh
            </h2>
          </div>
          <div className="flex-shrink-0 self-end md:self-auto">
            <button className="w-12 h-12 md:w-16 md:h-16 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-100 active:bg-gray-200 transition-colors text-lg md:text-xl">
              ↗
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

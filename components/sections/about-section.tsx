"use client";

export function AboutSection() {
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

  return (
    <section id="about" className="py-12 sm:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-20 items-start">
          {/* Left Content */}
          <div className="text-left">
            <h2 className="text-3xl sm:text-5xl md:text-3xl font-bold text-black leading-tight">
              Driven by curiosity and a love for design, I create simple,
              functional, and visually striking digital experiences. As a
              student, I'm always learning and exploring new ideas.
            </h2>
          </div>
          {/* Right Content */}
          <div className="text-left md:text-right space-y-6 sm:space-y-8 pt-4 sm:pt-8">
            <p className="text-sm sm:text-md text-gray-500 leading-relaxed max-w-full md:max-w-sm ml-0 md:ml-auto">
              The fusion of my passion for design, development, and seamless
              user experiences places me at the intersection of creativity and
              technology in the digital world.
            </p>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "#about")}
              className="inline-flex items-center gap-2 font-medium ml-0 md:ml-auto px-4 py-2 text-sm text-black transition-colors duration-200 hover:text-blue-500"
              aria-label="More about me"
            >
              More about me
              <span className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center text-xs bg-gray-100">
                ?
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-0">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Left Content */}
          <div className="text-left">
            <h2 className="text-6xl md:text-3xl font-bold text-black leading-tight">
              Driven by curiosity and a love for design, I create simple,
              functional, and visually striking digital experiences. As a
              student, I'm always learning and exploring new ideas.
            </h2>
          </div>
          {/* Right Content */}
          <div className="text-right space-y-8 pt-8">
            <p className="text-md text-gray-500 leading-relaxed max-w-sm ml-auto">
              The fusion of my passion for design, development, and seamless
              user experiences places me at the intersection of creativity and
              technology in the digital world.
            </p>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "#about")}
              className="inline-flex items-center gap-2 font-medium ml-auto px-4 py-2 text-sm text-black transition-colors duration-200 hover:text-blue-500"
              aria-label="More about me"
            >
              More about me
              <span className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center text-xs bg-gray-50">
                ?
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroAbout() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Start the animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Small delay to ensure smooth start

    return () => clearTimeout(timer);
  }, []);

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
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="h-[60vh] sm:h-[68vh] w-full flex flex-col justify-between relative"
        style={{ backgroundColor: "#a2a5a6" }}
      >
        <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
          <div className="container mx-auto px-4 sm:px-0 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
            <div className="text-xs sm:text-sm text-white">
              © Code by Sachiya
            </div>
            <div className="text-xs sm:text-sm text-white text-left sm:text-right max-w-xs sm:max-w-md">
              Passionate Creative Designer and Developer, dedicated to crafting
              innovative solutions and exceptional digital experiences through
              modern technologies.
            </div>
          </div>
        </header>

        <div className="absolute bottom-20 sm:bottom-32 left-0 right-0 z-40 pointer-events-none mb-8 sm:mb-12">
          <div className="overflow-hidden whitespace-nowrap w-full">
            <h1
              className={`text-3xl sm:text-6xl md:text-8xl font-bold leading-none inline-block text-white transition-all duration-1000 ${
                isLoaded
                  ? "animate-marquee"
                  : "transform translate-x-full opacity-0"
              }`}
            >
              Creative Developer & Designer • Passionate Student • Digital
              Artist • Creative Developer & Designer • Passionate Student •
              Digital Artist • Creative Developer & Designer •
            </h1>
          </div>
        </div>

        <div className="relative mt-auto flex flex-col items-center h-full justify-end">
          {/* Portrait image at the very bottom */}
          <div className="relative z-10">
            <div className="w-80 h-80 sm:w-120 sm:h-120 relative opacity-95">
              <Image
                src="/profile.png"
                alt="Developer portrait"
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
              opacity: 1;
            }
            100% {
              transform: translateX(-100%);
              opacity: 1;
            }
          }

          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
        `}</style>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="h-[40vh] sm:h-auto py-12 sm:py-20 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-20 items-start">
            {/* Left Content */}
            <div className="text-left">
              <h2 className="text-3xl sm:text-4xl md:text-3xl font-bold text-black leading-tight">
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
    </div>
  );
}

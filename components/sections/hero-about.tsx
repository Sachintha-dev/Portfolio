"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

// Next.js will prefix with basePath automatically in production
const basePath = "";
console.log(basePath);

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
      {/* Hero Section - Fixed 60vh for all screen sizes */}
      <section
        className="h-[60vh] w-full flex flex-col justify-between relative"
        style={{ backgroundColor: "#a2a5a6" }}
      >
        <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
          <div className="container  mx-auto px-4 sm:px-0 py-4 flex flex-col  sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
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

        <div className="absolute bottom-16 sm:bottom-32 left-0 right-0 z-40 pointer-events-none">
          <div className="overflow-hidden whitespace-nowrap w-full">
            <h1
              className={`text-2xl sm:text-6xl md:text-8xl font-bold leading-none inline-block text-white transition-all duration-1000 ${
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

        <div className="relative mt-auto flex flex-col items-center justify-end pb-0">
          {/* Portrait image at the very bottom */}
          <div className="relative z-10">
            <div className="w-48 h-48 sm:w-80 sm:h-80 md:w-120 md:h-120 relative opacity-95">
              <Image
                src={`${basePath}/images/profile.png`}
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

      {/* About teaser section (distinct id to avoid clashing with main #about) */}
      <section id="about-hero" className="h-[40vh] bg-gray-100">
        <div className="container mx-auto px-4 sm:px-0 h-full">
          <div className="h-full flex items-center pt-0 -mt-9 sm:pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-20 items-center w-full">
              {/* Left Content */}
              <div className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black leading-tight">
                  Driven by curiosity and a love for design, I create simple,
                  functional, and visually striking digital experiences. As a
                  student, I'm always learning and exploring new ideas.
                </h2>
              </div>
              {/* Right Content */}
              <div className="text-left md:text-right space-y-4 sm:space-y-6">
                <p className="text-xs sm:text-sm md:text-md text-gray-500 leading-relaxed max-w-full md:max-w-sm ml-0 md:ml-auto">
                  The fusion of my passion for design, development, and seamless
                  user experiences places me at the intersection of creativity
                  and technology in the digital world.
                </p>
                <div className="flex justify-start md:justify-end">
                  <a
                    href="#about"
                    onClick={(e) => handleSmoothScroll(e, "#about")}
                    className="inline-flex items-center gap-2 font-medium -mt-3 text-xs sm:text-sm text-black transition-colors duration-200 hover:text-blue-500"
                    aria-label="More about me"
                  >
                    More about me
                    <span className="w-5 h-5 sm:w-6 sm:h-6 border border-gray-400 rounded-full flex items-center justify-center text-xs bg-gray-100">
                      ?
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

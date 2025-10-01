"use client";
import Image from "next/image";
import { withBasePath } from "@/lib/path";
import { useEffect, useState } from "react";
import { getBlurDataURL } from "@/lib/imagePlaceholders";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Start the animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Small delay to ensure smooth start

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="h-[100vh] sm:h-[68vh] w-full flex flex-col justify-between relative"
      style={{ backgroundColor: "#a2a5a6" }}
    >
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-4 sm:px-0 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
          <div className="text-xs sm:text-sm text-white">© Code by Sachiya</div>
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
            Creative Developer & Designer • Passionate Student • Digital Artist
            • Creative Developer & Designer • Passionate Student • Digital
            Artist • Creative Developer & Designer •
          </h1>
        </div>
      </div>

      <div className="relative mt-auto flex flex-col items-center h-full justify-end">
        {/* Portrait image at the very bottom */}
        <div className="relative z-10">
          <div className="w-80 h-80 sm:w-120 sm:h-120 relative opacity-95">
            <Image
              src={withBasePath("/images/profile.png")}
              alt="Developer portrait"
              fill
              sizes="(max-width: 640px) 20rem, (max-width: 768px) 30rem, 30rem"
              priority
              placeholder="blur"
              blurDataURL={getBlurDataURL(320, 320)}
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
  );
}

"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

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
      className="h-[68vh] w-full flex flex-col justify-between relative"
      style={{ backgroundColor: "#a2a5a6" }}
    >
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-0 py-4 flex justify-between items-center">
          <div className="text-sm text-white">© Code by Sachiya</div>
          <div className="text-sm text-white text-right max-w-md">
            Passionate Creative Designer and Developer, dedicated to crafting
            innovative solutions and exceptional digital experiences through
            modern technologies.
          </div>
        </div>
      </header>

      <div className="absolute bottom-32 left-0 right-0 z-40 pointer-events-none mb-12">
        <div className="overflow-hidden whitespace-nowrap w-full">
          <h1
            className={`text-6xl md:text-8xl font-bold leading-none inline-block text-white transition-all duration-1000 ${
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
          <div className="w-120 h-120 relative opacity-95">
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
  );
}

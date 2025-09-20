import { AboutSection } from "@/components/sections/about-section";
import { Hero } from "@/components/sections/hero";

export default function HeroPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="flex flex-col min-h-screen">
        <div className="flex-1 min-h-[60vh] sm:h-auto">
          <Hero />
        </div>
        <div className="flex-1 min-h-[40vh] sm:h-auto">
          <AboutSection />
        </div>
      </main>
    </div>
  );
}

import { AboutSection } from "@/components/sections/about-section";
import { Hero } from "@/components/sections/hero";

export default function HeroPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="flex flex-col h-screen">
        <Hero />
        <AboutSection />
      </main>
    </div>
  );
}

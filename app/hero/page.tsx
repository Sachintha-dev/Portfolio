import { AboutSection } from "@/components/sections/about-section";
import { Hero } from "@/components/sections/hero";

// hero/page.tsx
export default function HeroPage() {
  return (
    <div className="bg-gray-100">
      <main>
        <Hero />
        <AboutSection />
      </main>
    </div>
  );
}

import { Footer } from "@/components/layout/footer";
import { Contact } from "@/components/sections/contact";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import { HeroAbout } from "@/components/sections/hero-about";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { SkillsGrid } from "@/components/sections/skills-grid";
import AboutPage from "./about/page";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main className="min-h-screen bg-gray-100 pb-16 sm:pb-0">
        <section id="home" className="mb-8 sm:mb-16">
          <HeroAbout />
        </section>
        <section id="about" className="py-8 sm:py-16">
          <AboutPage />
        </section>
        <section id="experiences" className="py-8 sm:py-16">
          <Experience />
        </section>
        <section id="education" className="py-8 sm:py-16">
          <Education />
        </section>
        <section id="projects" className="py-8 sm:py-16">
          <ProjectsShowcase />
        </section>
        <section id="skills" className="py-8 sm:py-16">
          <SkillsGrid />
        </section>
        <section id="contact" className="py-8 sm:py-16">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}

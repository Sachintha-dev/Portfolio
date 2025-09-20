import { Footer } from "@/components/layout/footer";
import { AboutSection } from "@/components/sections/about-section";
import { Contact } from "@/components/sections/contact";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { SkillsGrid } from "@/components/sections/skills-grid";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main className="min-h-screen bg-gray-100">
        <section id="home">
          <Hero />
          <AboutSection />
        </section>
        <section id="experiences">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <ProjectsShowcase />
        </section>
        <section id="skills">
          <SkillsGrid />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}

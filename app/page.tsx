import { Footer } from "@/components/layout/footer";
import { Contact } from "@/components/sections/contact";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { SkillsGrid } from "@/components/sections/skills-grid";
import AboutPage from "./about/page";
import HeroPage from "./hero/page";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main className="min-h-screen bg-gray-100">
        <section id="home">
          <HeroPage />
        </section>
        <section id="about">
          <AboutPage />
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

import { Header } from "@/components/header"
import { SkillsGrid } from "@/components/skills-grid"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Skills() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header isDark={true} />

      <div className="pt-20">
        <SkillsGrid />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

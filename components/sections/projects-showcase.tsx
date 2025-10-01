import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

export function ProjectsShowcase() {
  const projects = [
    {
      title: "Learnlogicify Landing Page",
      description: "Accelerate the Tech Career and build your Future Faster",
      image: "/tech-learning-platform-landing-page-with-gradient-.jpg",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      title: "Winzee Web Chat application",
      description: "Real-time chat application with modern UI",
      image: "/chat-application-interface-with-rainbow-background.jpg",
      gradient: "from-blue-400 to-purple-400",
    },
    {
      title: "ChatGPT clone",
      description: "AI-powered chat interface",
      image: "/ai-chat-interface-dark-theme-with-spiral-logo.jpg",
      gradient: "from-gray-900 to-black",
    },
    {
      title: "Gemini Clone",
      description: "Google Gemini AI interface recreation",
      image: "/gemini-ai-interface-with-flowing-lines-and-dark-ba.jpg",
      gradient: "from-blue-900 to-black",
    },
  ];

  return (
    <section className="px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="py-8 sm:py-12">
          <SectionHeader
            title="Projects"
            subtitle="A curated selection of my recent work"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-3 sm:mb-4">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70`}
                  />
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${
                      project.image || "/placeholder.svg"
                    }`}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border border-gray-300 rounded-full flex items-center justify-center mt-1 flex-shrink-0 bg-gray-100">
                    <span className="text-xs text-gray-700 font-medium">+</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-medium text-black">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image"

export function Projects() {
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
  ]

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">Impressive Works</h2>
          <div className="text-right max-w-md ml-auto">
            <p className="text-sm text-gray-600 mb-4">
              HERE'S A SELECTION OF PROJECTS THAT SHOWCASE MY PASSION FOR DESIGN AND DEVELOPMENT, REFLECTING CREATIVITY
              AND INNOVATION.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-xs text-gray-700 font-medium">+</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-gray-900 hover:text-blue-600 transition-colors">• Explore more</button>
        </div>
      </div>
    </section>
  )
}

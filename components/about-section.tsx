export function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="text-left">
            <h2 className="text-6xl md:text-3xl font-bold text-black leading-tight">
              Driven by curiosity and a love for design, I create simple, functional, and visually striking digital experiences. As a student, I'm always learning and exploring new ideas.
            </h2>
          </div>

          <div className="text-right space-y-8 pt-8">
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm ml-auto">
              The fusion of my passion for design, development, and seamless user experiences places me at the intersection of creativity and technology in the digital world.
            </p>
            <button className="text-sm text-black hover:text-gray-600 transition-colors flex items-center gap-2 font-medium ml-auto">
              More about me
              <span className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center text-xs">
                ?
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

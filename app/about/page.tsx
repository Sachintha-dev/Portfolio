import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              passionate creative designer and developer dedicated to crafting
              innovative solutions and exceptional digital experiences through
              modern technologies.
            </p>
          </section>

          {/* Story Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-black">My Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  A Driven by curiosity and a love for design, I create simple,
                  functional, and visually striking digital experiences. As a
                  student, I'm always learning and exploring new ideas that push
                  the boundaries of what's possible in the digital realm.
                </p>
                <p>
                  The fusion of my passion for design, development, and seamless
                  user experiences places me at the intersection of creativity
                  and technology in the digital world. I believe in the power of
                  thoughtful design to solve complex problems and create
                  meaningful connections.
                </p>
                <p>
                  When I'm not coding or designing, you'll find me exploring new
                  technologies, reading about design trends, or working on
                  personal projects that challenge my skills and creativity.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <Image
                  src="/about-me.jpg"
                  alt="Profile picture"
                  width={300}
                  height={300}
                  className="field-sizing-fixed mx-auto mb-4 object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

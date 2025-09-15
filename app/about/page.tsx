import { NavigationIcons } from "@/components/navigation-icons";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <div className="text-2xl font-bold text-black">Ashwin</div>
        <div className="w-12 h-12 bg-black rounded-full"></div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A passionate creative designer and developer dedicated to crafting
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
                  Driven by curiosity and a love for design, I create simple,
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
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <p>Creative Process</p>
              </div>
            </div>
          </section>

          {/* Career Path */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-black text-center">
              Career Path
            </h2>
            <div className="space-y-6">
              {/* Timeline */}
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

                {/* Career milestones */}
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mt-2 relative z-10"></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-black">
                          Student & Self-Learner
                        </h3>
                        <span className="text-sm text-gray-500">Present</span>
                      </div>
                      <p className="text-gray-600">
                        Currently pursuing knowledge in design and development,
                        focusing on modern web technologies and user experience
                        principles. Building projects and expanding skillset
                        daily.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-4 h-4 bg-green-500 rounded-full mt-2 relative z-10"></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-black">
                          Creative Explorer
                        </h3>
                        <span className="text-sm text-gray-500">2023</span>
                      </div>
                      <p className="text-gray-600">
                        Discovered passion for digital design and development.
                        Started experimenting with UI/UX design principles and
                        learning fundamental programming concepts.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-4 h-4 bg-purple-500 rounded-full mt-2 relative z-10"></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-black">
                          Future Aspirations
                        </h3>
                        <span className="text-sm text-gray-500">Upcoming</span>
                      </div>
                      <p className="text-gray-600">
                        Aiming to become a full-stack developer and UX designer,
                        creating innovative digital solutions that bridge the
                        gap between beautiful design and functional technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-16">
          <NavigationIcons />
        </div>
      </main>
    </div>
  );
}

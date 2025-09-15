export function SkillsGrid() {
  const skillCategories = [
    {
      title: "Front-End Development",
      description:
        "Building responsive and user-friendly web interfaces using modern frameworks and technologies with emphasis on performance.",
      icons: ["HTML", "JS", "TS"],
      color: "bg-gray-800",
    },
    {
      title: "Styling & Design",
      description:
        "Crafting visually appealing and responsive designs with advanced CSS and design frameworks.",
      icons: ["CSS", "Tailwind", "Bootstrap"],
      color: "bg-gray-800",
    },
    {
      title: "Programming Languages",
      description:
        "Proficient in problem-solving and applying programming languages to implement clean data structures and algorithms.",
      icons: ["Python", "C++", "C#", "Java"],
      color: "bg-gray-800",
    },
    {
      title: "Back-End Development",
      description:
        "Developing robust server-side logic and APIs to power dynamic and scalable web applications.",
      icons: ["Node.js", "Django", "Flask"],
      color: "bg-gray-800",
    },
    {
      title: "Web Animations",
      description:
        "Creating seamless animations and transitions to enhance user engagement and interactivity.",
      icons: ["Framer", "GSAP"],
      color: "bg-gray-800",
    },
    {
      title: "Database Management",
      description:
        "Designing and managing databases to ensure backup and efficient data storage and retrieval.",
      icons: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
      color: "bg-gray-800",
    },
    {
      title: "Core Computer Science Concepts",
      description:
        "Demonstrating a strong foundation in core computer science principles, including problem-solving, system design, and algorithmic thinking.",
      topics: [
        "Operating Systems",
        "Computer Networks",
        "Object-Oriented Programming",
        "DSA",
        "System Design",
      ],
      color: "bg-gray-800",
    },
    {
      title: "Cloud & Deployment",
      description:
        "Experienced in deploying and managing applications on modern cloud platforms and tools.",
      icons: ["Docker", "AWS", "Vercel"],
      color: "bg-gray-800",
    },
    {
      title: "Mobile App Development",
      description:
        "Building Cross-platform mobile applications with modern designs and robust functionality.",
      icons: ["React Native", "Flutter"],
      color: "bg-gray-800",
    },
    {
      title: "Version Control & Collaboration",
      description:
        "Effectively managing code repositories and collaborating on projects using modern teamwork tools.",
      icons: ["Git", "GitHub"],
      color: "bg-gray-800",
    },
    {
      title: "Personal Development",
      description:
        "Committed to continuous learning and personal growth to excel in both professional and collaborative environments.",
      topics: [
        "Time Management",
        "Problem Solving",
        "Communication",
        "Leadership",
      ],
      color: "bg-gray-800",
    },
    {
      title: "Testing & Debugging",
      description:
        "Ensuring code quality and reliability through rigorous testing and debugging processes.",
      icons: ["Jest", "Cypress", "Postman"],
      color: "bg-gray-800",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing user interfaces and experiences that are intuitive, visually appealing, and easy to navigate.",
      icons: ["Figma", "Wireframing", "Prototyping"],
      color: "bg-gray-800",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className={`${category.color} p-6 rounded-2xl`}>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {category.title}
              </h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {category.description}
              </p>

              {category.icons && (
                <div className="flex flex-wrap gap-2">
                  {category.icons.map((icon, iconIndex) => (
                    <span
                      key={iconIndex}
                      className="px-3 py-1 bg-gray-700 text-white text-xs rounded-full"
                    >
                      {icon}
                    </span>
                  ))}
                </div>
              )}

              {category.topics && (
                <div className="space-y-2">
                  {category.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="text-gray-300 text-sm">
                      • {topic}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

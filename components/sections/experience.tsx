const experiences = [
  {
    company: "Tech Solutions Inc.",
    role: "Frontend Developer",
    period: "Jan 2022 - Present",
    description:
      "Developed and maintained web applications using React and TypeScript. Collaborated with designers and backend developers to deliver seamless user experiences.",
  },
  {
    company: "Creative Agency",
    role: "UI/UX Designer",
    period: "Jun 2020 - Dec 2021",
    description:
      "Designed user interfaces and improved user flows for multiple client projects. Conducted user research and usability testing.",
  },
  {
    company: "Startup Hub",
    role: "Intern",
    period: "Jan 2020 - May 2020",
    description:
      "Assisted in building MVPs for startups, focusing on rapid prototyping and feedback-driven development.",
  },
];

const Experience = () => (
  <main className="experience-page px-4 sm:px-8 bg-gray-50">
    <div className="max-w-4xl mx-auto">
      <div className="py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8 sm:mb-12">
          Experience
        </h1>
        <div className="relative pl-4 sm:pl-8">
          {/* Vertical timeline line */}
          <div className="absolute left-2 sm:left-4 top-4 bottom-0 w-0.5 bg-gray-300" />

          <ul className="space-y-6 sm:space-y-8">
            {experiences.map((exp, idx) => (
              <li key={idx} className="relative pb-4 sm:pb-6">
                {/* Timeline dot */}
                <div className="absolute -left-3 sm:-left-4 top-1 w-3 h-3 sm:w-4 sm:h-4 bg-gray-500 rounded-full border-2 border-white shadow-sm" />

                <h2 className="text-lg sm:text-xl font-semibold text-black mb-1">
                  {exp.role}{" "}
                  <span className="text-gray-500 font-normal text-base sm:text-lg">
                    @ {exp.company}
                  </span>
                </h2>
                <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {exp.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </main>
);

export default Experience;

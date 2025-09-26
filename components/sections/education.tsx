const educationData = [
  {
    institution: "University of Example",
    degree: "Bachelor of Science in Computer Science",
    year: "2018 - 2022",
    description:
      "Focused on software engineering, algorithms, and web development.",
  },
  {
    institution: "Example High School",
    degree: "High School Diploma",
    year: "2014 - 2018",
    description: "Graduated with honors.",
  },
];

import { SectionHeader } from "./SectionHeader";

const Education = () => (
  <main className="education-page px-4 sm:px-8 bg-white">
    <div className="max-w-4xl mx-auto">
      <div className="py-8 sm:py-12">
        <SectionHeader title="Education" />
        <div className="relative pl-4 sm:pl-8">
          {/* Vertical timeline line */}
          <div className="absolute  left-2 sm:left-4 top-4 bottom-0 w-0.5 bg-gray-300" />

          <ul className="space-y-6 sm:space-y-8">
            {educationData.map((edu, idx) => (
              <li
                key={idx}
                className="relative pb-4 sm:pb-6 border-b border-gray-100"
              >
                {/* Timeline dot */}
                <div className="absolute -left-3.25 sm:-left-4 top-1 w-3 h-3 sm:w-4 sm:h-4 bg-gray-500 rounded-full border-2 border-white shadow-sm" />

                <h2 className="text-lg sm:text-xl font-semibold text-black mb-2">
                  {edu.institution}
                </h2>
                <p className="text-sm sm:text-base font-medium text-gray-700 mb-1">
                  {edu.degree}
                </p>
                <p className="text-sm text-gray-500 mb-2">{edu.year}</p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {edu.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </main>
);

export default Education;

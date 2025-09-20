"use client";
import { useState } from "react";

interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  abstract: string;
  keywords: string[];
  pdfUrl?: string;
  featured?: boolean;
  type: "Journal" | "Conference" | "Book Chapter" | "Preprint";
}

const publications: Publication[] = [
  {
    id: "1",
    title:
      "Optimizing React Applications for Performance: A Comprehensive Study",
    authors: ["Sudesh Sachintha", "Dr. Jane Smith"],
    journal: "Journal of Web Technologies",
    year: 2024,
    doi: "10.1000/example.doi",
    abstract:
      "This paper presents a comprehensive analysis of performance optimization techniques in React applications, focusing on bundle size reduction, code splitting, and rendering optimization. We conducted extensive experiments on various React applications and developed a framework for performance assessment.",
    keywords: [
      "React",
      "Performance",
      "Optimization",
      "Web Development",
      "JavaScript",
    ],
    pdfUrl: "/publications/react-performance-study.pdf",
    featured: true,
    type: "Journal",
  },
  {
    id: "2",
    title: "Machine Learning Integration in Modern Web Applications",
    authors: ["Sudesh Sachintha"],
    journal: "International Conference on Web Engineering",
    year: 2023,
    doi: "10.1000/example.doi.2",
    abstract:
      "An exploration of how machine learning models can be seamlessly integrated into web applications to enhance user experience and functionality. This work presents novel approaches to client-side ML inference and real-time model updates.",
    keywords: [
      "Machine Learning",
      "Web Applications",
      "AI Integration",
      "User Experience",
      "Real-time Systems",
    ],
    pdfUrl: "/publications/ml-web-apps.pdf",
    featured: true,
    type: "Conference",
  },
  {
    id: "3",
    title: "Design Patterns for Scalable Frontend Architecture",
    authors: ["Sudesh Sachintha", "Prof. Michael Johnson"],
    journal: "Software Engineering Journal",
    year: 2023,
    doi: "10.1000/example.doi.3",
    abstract:
      "This paper introduces a set of design patterns specifically tailored for building scalable frontend architectures. We present case studies from large-scale applications and provide guidelines for implementing these patterns effectively.",
    keywords: [
      "Design Patterns",
      "Frontend Architecture",
      "Scalability",
      "Software Engineering",
    ],
    pdfUrl: "/publications/frontend-patterns.pdf",
    featured: false,
    type: "Journal",
  },
  {
    id: "4",
    title: "Accessibility in Modern Web Development: A Developer's Guide",
    authors: ["Sudesh Sachintha"],
    journal: "Web Accessibility Conference",
    year: 2023,
    doi: "10.1000/example.doi.4",
    abstract:
      "A comprehensive guide for developers on implementing accessibility features in modern web applications. This work covers WCAG guidelines, automated testing tools, and practical implementation strategies.",
    keywords: [
      "Accessibility",
      "WCAG",
      "Web Development",
      "Inclusive Design",
      "Testing",
    ],
    pdfUrl: "/publications/web-accessibility.pdf",
    featured: false,
    type: "Conference",
  },
  {
    id: "5",
    title: "Progressive Web Applications: Performance and User Experience",
    authors: ["Sudesh Sachintha", "Dr. Sarah Wilson"],
    journal: "Mobile Web Technologies",
    year: 2022,
    doi: "10.1000/example.doi.5",
    abstract:
      "An in-depth study of Progressive Web Applications (PWAs) focusing on performance metrics and user experience improvements. We analyze various PWA implementations and provide recommendations for optimal performance.",
    keywords: [
      "PWA",
      "Progressive Web Apps",
      "Performance",
      "Mobile",
      "User Experience",
    ],
    pdfUrl: "/publications/pwa-performance.pdf",
    featured: false,
    type: "Journal",
  },
  {
    id: "6",
    title: "Micro-frontends: Architecture and Implementation Strategies",
    authors: ["Sudesh Sachintha"],
    journal: "Frontend Architecture Symposium",
    year: 2022,
    doi: "10.1000/example.doi.6",
    abstract:
      "This paper explores micro-frontend architecture patterns and their implementation in large-scale web applications. We present a framework for evaluating different micro-frontend approaches and their trade-offs.",
    keywords: [
      "Micro-frontends",
      "Architecture",
      "Scalability",
      "Web Development",
      "Modularity",
    ],
    pdfUrl: "/publications/micro-frontends.pdf",
    featured: false,
    type: "Conference",
  },
];

const types = ["All", "Journal", "Conference", "Book Chapter", "Preprint"];
const years = ["All", "2024", "2023", "2022", "2021"];

export default function PublicationsPage() {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPublications = publications.filter((pub) => {
    const matchesType = selectedType === "All" || pub.type === selectedType;
    const matchesYear =
      selectedYear === "All" || pub.year.toString() === selectedYear;
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      pub.authors.some((author) =>
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesType && matchesYear && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 sm:py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              Publications
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Research papers, conference proceedings, and academic publications
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search publications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <svg
                    className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Filters */}
              <div className="flex gap-2 flex-wrap">
                {/* Type Filter */}
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>

                {/* Year Filter */}
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Featured Publications */}
          {selectedType === "All" &&
            selectedYear === "All" &&
            searchTerm === "" && (
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">
                  Featured Publications
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {publications
                    .filter((pub) => pub.featured)
                    .map((publication) => (
                      <article
                        key={publication.id}
                        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center text-sm text-gray-500">
                              <span>{publication.year}</span>
                              <span className="mx-2">•</span>
                              <span>{publication.journal}</span>
                            </div>
                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                              Featured
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">
                            {publication.title}
                          </h3>
                          <div className="text-sm text-gray-600 mb-3">
                            <span className="font-medium">Authors:</span>{" "}
                            {publication.authors.join(", ")}
                          </div>
                          <p className="text-gray-600 mb-4">
                            {publication.abstract}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {publication.keywords.map((keyword) => (
                              <span
                                key={keyword}
                                className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-3">
                            {publication.pdfUrl && (
                              <a
                                href={publication.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                              >
                                <svg
                                  className="w-4 h-4 mr-1"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  />
                                </svg>
                                Download PDF
                              </a>
                            )}
                            {publication.doi && (
                              <a
                                href={`https://doi.org/${publication.doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-gray-600 hover:text-gray-700 font-medium"
                              >
                                DOI
                              </a>
                            )}
                          </div>
                        </div>
                      </article>
                    ))}
                </div>
              </div>
            )}

          {/* All Publications */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-black">
                {selectedType === "All" ? "All Publications" : selectedType}
              </h2>
              <span className="text-gray-500">
                {filteredPublications.length}{" "}
                {filteredPublications.length === 1
                  ? "publication"
                  : "publications"}
              </span>
            </div>

            {filteredPublications.length === 0 ? (
              <div className="text-center py-12">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No publications found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredPublications.map((publication) => (
                  <article
                    key={publication.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span>{publication.year}</span>
                          <span className="mx-2">•</span>
                          <span>{publication.journal}</span>
                          <span className="mx-2">•</span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {publication.type}
                          </span>
                          {publication.doi && (
                            <>
                              <span className="mx-2">•</span>
                              <span>DOI: {publication.doi}</span>
                            </>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-black mb-2">
                          {publication.title}
                        </h3>
                        <div className="text-sm text-gray-600 mb-3">
                          <span className="font-medium">Authors:</span>{" "}
                          {publication.authors.join(", ")}
                        </div>
                        <p className="text-gray-600 mb-4">
                          {publication.abstract}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {publication.keywords.map((keyword) => (
                            <span
                              key={keyword}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="ml-4 flex flex-col gap-2">
                        {publication.pdfUrl && (
                          <a
                            href={publication.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            title="Download PDF"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </a>
                        )}
                        {publication.doi && (
                          <a
                            href={`https://doi.org/${publication.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                            title="View DOI"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

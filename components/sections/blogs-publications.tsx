"use client";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "./SectionHeader";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

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
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Modern Web Applications with Next.js 14",
    excerpt:
      "Explore the latest features in Next.js 14 and how they revolutionize modern web development.",
    content: "Full blog content here...",
    author: "Sudesh Sachintha",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["Next.js", "React", "Web Development", "JavaScript"],
    image: "/images/tech-learning-platform-landing-page-with-gradient-.jpg",
    featured: true,
  },
  {
    id: "2",
    title: "The Future of AI in Web Development",
    excerpt:
      "How artificial intelligence is transforming the way we build and maintain web applications.",
    content: "Full blog content here...",
    author: "Sudesh Sachintha",
    publishedAt: "2024-01-10",
    readTime: "6 min read",
    category: "AI & Technology",
    tags: ["AI", "Machine Learning", "Web Development", "Future Tech"],
    image: "/images/ai-chat-interface-dark-theme-with-spiral-logo.jpg",
    featured: true,
  },
  {
    id: "3",
    title: "Design Systems: Creating Consistent User Experiences",
    excerpt:
      "Learn how to build scalable design systems that ensure consistency across your applications.",
    content: "Full blog content here...",
    author: "Sudesh Sachintha",
    publishedAt: "2024-01-05",
    readTime: "10 min read",
    category: "Design",
    tags: ["Design Systems", "UI/UX", "Figma", "Design"],
    image: "/images/chat-application-interface-with-rainbow-background.jpg",
    featured: false,
  },
];

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
      "This paper presents a comprehensive analysis of performance optimization techniques in React applications, focusing on bundle size reduction, code splitting, and rendering optimization.",
    keywords: ["React", "Performance", "Optimization", "Web Development"],
    pdfUrl: "/publications/react-performance-study.pdf",
    featured: true,
  },
  {
    id: "2",
    title: "Machine Learning Integration in Modern Web Applications",
    authors: ["Sudesh Sachintha"],
    journal: "International Conference on Web Engineering",
    year: 2023,
    doi: "10.1000/example.doi.2",
    abstract:
      "An exploration of how machine learning models can be seamlessly integrated into web applications to enhance user experience and functionality.",
    keywords: [
      "Machine Learning",
      "Web Applications",
      "AI Integration",
      "User Experience",
    ],
    pdfUrl: "/publications/ml-web-apps.pdf",
    featured: true,
  },
];

export function BlogsAndPublications() {
  return (
    <section className="px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="py-8 sm:py-12">
          <SectionHeader
            title="Blogs & Publications"
            subtitle="Explore my thoughts on technology, development insights, and research publications"
            align="center"
          />

          {/* Featured Content */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-8">
              Featured
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Featured Blog */}
              {blogPosts
                .filter((post) => post.featured)
                .slice(0, 1)
                .map((post) => (
                  <article
                    key={post.id}
                    className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-48 sm:h-64">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Blog
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>{post.publishedAt}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                        <span className="mx-2">•</span>
                        <span>{post.category}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/blogs/${post.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}

              {/* Featured Publication */}
              {publications
                .filter((pub) => pub.featured)
                .slice(0, 1)
                .map((publication) => (
                  <article
                    key={publication.id}
                    className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>{publication.year}</span>
                        <span className="mx-2">•</span>
                        <span>{publication.journal}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 line-clamp-2">
                        {publication.title}
                      </h3>
                      <div className="text-sm text-gray-600 mb-3">
                        <span className="font-medium">Authors:</span>{" "}
                        {publication.authors.join(", ")}
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {publication.abstract}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {publication.keywords.slice(0, 3).map((keyword) => (
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

          {/* All Blogs */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black">
                All Blogs
              </h2>
              <Link
                href="/blogs"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-40 sm:h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                        Blog
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <span>{post.publishedAt}</span>
                      <span className="mx-1">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {post.category}
                      </span>
                      <Link
                        href={`/blogs/${post.id}`}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        Read →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* All Publications */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black">
                Publications
              </h2>
              <Link
                href="/publications"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View All
              </Link>
            </div>
            <div className="space-y-6">
              {publications.map((publication) => (
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
                      <p className="text-gray-600 mb-4 line-clamp-2">
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
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
    image: "/tech-learning-platform-landing-page-with-gradient-.jpg",
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
    image: "/ai-chat-interface-dark-theme-with-spiral-logo.jpg",
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
    image: "/chat-application-interface-with-rainbow-background.jpg",
    featured: false,
  },
  {
    id: "4",
    title: "Mastering TypeScript: Advanced Patterns and Best Practices",
    excerpt:
      "Deep dive into advanced TypeScript patterns that will make your code more robust and maintainable.",
    content: "Full blog content here...",
    author: "Sudesh Sachintha",
    publishedAt: "2024-01-01",
    readTime: "12 min read",
    category: "Web Development",
    tags: ["TypeScript", "JavaScript", "Programming", "Best Practices"],
    image: "/gemini-ai-interface-with-flowing-lines-and-dark-ba.jpg",
    featured: false,
  },
  {
    id: "5",
    title: "The Art of Code Review: Building Better Software Together",
    excerpt:
      "Learn effective code review techniques that improve code quality and team collaboration.",
    content: "Full blog content here...",
    author: "Sudesh Sachintha",
    publishedAt: "2023-12-28",
    readTime: "7 min read",
    category: "Software Engineering",
    tags: ["Code Review", "Teamwork", "Software Engineering", "Best Practices"],
    image: "/placeholder.jpg",
    featured: false,
  },
  {
    id: "6",
    title: "Responsive Design in 2024: Beyond Mobile-First",
    excerpt:
      "Exploring modern responsive design techniques and the evolution of mobile-first thinking.",
    content: "Full blog content here...",
    author: "Sudesh Sachintha",
    publishedAt: "2023-12-25",
    readTime: "9 min read",
    category: "Design",
    tags: ["Responsive Design", "CSS", "Mobile", "Web Design"],
    image: "/placeholder.jpg",
    featured: false,
  },
];

const categories = [
  "All",
  "Web Development",
  "AI & Technology",
  "Design",
  "Software Engineering",
];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 sm:py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              Blog Posts
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on technology, development, and
              design
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
                    placeholder="Search blog posts..."
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

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Posts */}
          {selectedCategory === "All" && searchTerm === "" && (
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">
                Featured Posts
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {blogPosts
                  .filter((post) => post.featured)
                  .map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                            Featured
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
                        <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
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
              </div>
            </div>
          )}

          {/* All Posts */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-black">
                {selectedCategory === "All" ? "All Posts" : selectedCategory}
              </h2>
              <span className="text-gray-500">
                {filteredPosts.length}{" "}
                {filteredPosts.length === 1 ? "post" : "posts"}
              </span>
            </div>

            {filteredPosts.length === 0 ? (
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
                  No posts found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
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
                          {post.category}
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
                      <div className="flex flex-wrap gap-1 mb-3">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-gray-500 text-xs">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>
                      <Link
                        href={`/blogs/${post.id}`}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        Read More →
                      </Link>
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

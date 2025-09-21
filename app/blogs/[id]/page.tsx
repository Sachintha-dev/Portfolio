import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    content: `
      <h2>Introduction</h2>
      <p>Next.js 14 has brought significant improvements to the React ecosystem, introducing new features that make web development more efficient and enjoyable. In this comprehensive guide, we'll explore the key features and how they can transform your development workflow.</p>
      
      <h2>Key Features of Next.js 14</h2>
      <h3>1. App Router Improvements</h3>
      <p>The App Router has been significantly enhanced with better performance and developer experience. The new routing system provides more intuitive file-based routing with improved layouts and loading states.</p>
      
      <h3>2. Server Components</h3>
      <p>Server Components allow you to render components on the server, reducing the JavaScript bundle size and improving initial page load performance. This is particularly beneficial for content-heavy applications.</p>
      
      <h3>3. Improved Performance</h3>
      <p>Next.js 14 includes several performance optimizations, including better code splitting, improved caching strategies, and enhanced build times.</p>
      
      <h2>Best Practices</h2>
      <p>When building applications with Next.js 14, consider the following best practices:</p>
      <ul>
        <li>Use Server Components for static content</li>
        <li>Implement proper error boundaries</li>
        <li>Optimize images with the built-in Image component</li>
        <li>Leverage the new caching mechanisms</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Next.js 14 represents a significant step forward in React development. The new features and improvements make it easier to build performant, scalable web applications. By following best practices and leveraging the new capabilities, developers can create better user experiences.</p>
    `,
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
    content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence is rapidly transforming the web development landscape. From automated code generation to intelligent user interfaces, AI is changing how we approach web development.</p>
      
      <h2>AI-Powered Development Tools</h2>
      <h3>1. Code Generation</h3>
      <p>AI-powered tools like GitHub Copilot and ChatGPT are revolutionizing code generation, helping developers write code faster and more efficiently.</p>
      
      <h3>2. Automated Testing</h3>
      <p>AI can automatically generate test cases and identify potential bugs, improving code quality and reducing manual testing efforts.</p>
      
      <h3>3. Performance Optimization</h3>
      <p>Machine learning algorithms can analyze application performance and suggest optimizations automatically.</p>
      
      <h2>Challenges and Considerations</h2>
      <p>While AI brings many benefits, there are also challenges to consider:</p>
      <ul>
        <li>Code quality and reliability</li>
        <li>Security implications</li>
        <li>Learning curve for developers</li>
        <li>Dependency on AI tools</li>
      </ul>
      
      <h2>Future Outlook</h2>
      <p>The future of AI in web development looks promising. As AI tools become more sophisticated, we can expect to see even more automation and intelligence in the development process.</p>
    `,
    author: "Sudesh Sachintha",
    publishedAt: "2024-01-10",
    readTime: "6 min read",
    category: "AI & Technology",
    tags: ["AI", "Machine Learning", "Web Development", "Future Tech"],
    image: "/ai-chat-interface-dark-theme-with-spiral-logo.jpg",
    featured: true,
  },
];

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="py-8 sm:py-12">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/blogs"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blogs
            </Link>
          </div>

          {/* Article Header */}
          <article className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="relative h-64 sm:h-80">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center text-sm text-white mb-3">
                  <span>{post.publishedAt}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                  {post.title}
                </h1>
                <div className="flex items-center text-white">
                  <span className="text-sm">By {post.author}</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Author Bio */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">
                      {post.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">
                      {post.author}
                    </h3>
                    <p className="text-gray-600">
                      Passionate developer and designer dedicated to creating
                      innovative solutions and exceptional digital experiences
                      through modern technologies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold text-black mb-4">
                  Share this article
                </h3>
                <div className="flex space-x-4">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      post.title
                    )}&url=${encodeURIComponent(
                      `https://sachintha-dev.github.io/Sachintha-dev-portfolio/blogs/${post.id}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    Twitter
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      `https://sachintha-dev.github.io/Sachintha-dev-portfolio/blogs/${post.id}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Related Posts */}
          <div className="mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blogs/${relatedPost.id}`}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative h-40">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <span>{relatedPost.publishedAt}</span>
                        <span className="mx-1">•</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-black mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

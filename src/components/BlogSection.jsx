import React from "react";
import { CalendarDays, PenTool, BookOpenText, User } from "lucide-react";
// import { Link } from "react-router-dom"; // Uncomment if using React Router

const BlogSection = () => {
  const blogPosts = [
    {
      icon: <BookOpenText className="w-8 h-8 text-white" />,
      title: "Getting Started with Zerionix",
      description: "Learn the basics of Zerionix and how it can streamline your workflow.",
      action: "Read More",
      link: "/blog/getting-started",
    },
    {
      icon: <PenTool className="w-8 h-8 text-white" />,
      title: "Design Tips for Developers",
      description: "Bridge the gap between design and code with these essential tips.",
      action: "Read More",
      link: "/blog/design-tips",
    },
    {
      icon: <CalendarDays className="w-8 h-8 text-white" />,
      title: "August 2025 Product Update",
      description: "See what’s new in the latest release — performance, features & fixes.",
      action: "Read More",
      link: "/blog/august-2025-update",
    },
    {
      icon: <User className="w-8 h-8 text-white" />,
      title: "Meet the Team Behind Zerionix",
      description: "Get to know the passionate people building your favorite tools.",
      action: "Read More",
      link: "/blog/meet-the-team",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6 flex justify-center items-center" id="blog">
      {/* Decorative Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply blur-3xl animate-pulse -top-10 -left-10" />
        <div className="absolute w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply blur-3xl animate-pulse bottom-10 -right-10" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Latest from Our Blog
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Stay updated with insights, tutorials, and behind-the-scenes stories from our team.
        </p>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-lg
                         hover:-translate-y-1 transition-transform duration-300
                         h-full flex flex-col text-center"
            >
              <div className="flex justify-center mb-6">
                <span className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
                  {post.icon}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {post.title}
              </h3>

              <p className="text-gray-300 mb-6">{post.description}</p>

              <a
                href={post.link}
                className="mt-auto w-full inline-block px-5 py-3 rounded-xl
                           bg-gradient-to-r from-purple-600 to-pink-600
                           text-white font-semibold shadow-lg
                           hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-purple-400/30"
              >
                {post.action}
              </a>
              {/* Replace <a> with <Link> if using React Router */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

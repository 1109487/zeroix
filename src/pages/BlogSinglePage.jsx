import React from "react";
import { useParams } from "react-router-dom";
import {
  CalendarDays,
  User,
  Folder,
} from "lucide-react";

const blogContent = {
  "getting-started": {
    title: "Getting Started with Zerionix",
    date: "August 1, 2025",
    author: "Jane Doe",
    category: "Getting Started",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    content: `
      Welcome to Zerionix! In this guide, we'll walk you through how to get up and running in minutes. 
      From setting up your account to exploring powerful tools — it's all covered here.

      Zerionix is built with simplicity and flexibility in mind. Whether you're a startup founder or enterprise developer, you'll find value in our platform.
    `,
  },
  "design-tips": {
    title: "Design Tips for Developers",
    date: "August 5, 2025",
    author: "John Smith",
    category: "UI/UX",
    image: "https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg",
    content: `
      Great design isn't just for designers. Developers can enhance their interfaces dramatically 
      with a few fundamental design principles — contrast, whitespace, and hierarchy being the top three.

      Let's dive into how you can implement these in your next project.
    `,
  },
  "august-2025-update": {
    title: "August 2025 Product Update",
    date: "August 15, 2025",
    author: "Product Team",
    category: "Product Updates",
    image: "https://images.pexels.com/photos/3471423/pexels-photo-3471423.jpeg",
    content: `
      This month’s update brings major speed improvements, enhanced analytics, and new integrations with popular tools like Slack and Zapier.

      We’ve also squashed several bugs to make your experience smoother.
    `,
  },
  "meet-the-team": {
    title: "Meet the Team Behind Zerionix",
    date: "August 20, 2025",
    author: "Marketing",
    category: "Culture",
    image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg",
    content: `
      Behind every feature and update is a dedicated team of thinkers, builders, and creators.

      In this post, we introduce you to the faces behind the code and the vision that drives Zerionix forward.
    `,
  },
};

const BlogSinglePage = () => {
  const { slug } = useParams();
  const post = blogContent[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <h1 className="text-2xl font-semibold">404 - Blog not found.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      {/* Hero Section */}
      <div
        className="relative h-96 md:h-[500px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center tracking-tight drop-shadow-lg leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Metadata */}
        <div className="flex flex-wrap gap-8 items-center text-gray-400 text-sm font-medium border-b border-gray-700 pb-8 mb-12">
          <div className="flex items-center gap-2">
            <User size={18} className="text-blue-400" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays size={18} className="text-blue-400" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Folder size={18} className="text-blue-400" />
            <span>{post.category}</span>
          </div>
        </div>

        {/* Main Text */}
        <div className="prose prose-lg prose-invert text-gray-300 leading-relaxed max-w-none">
          {post.content
            .trim()
            .split("\n")
            .map((para, i) => {
              const trimmedPara = para.trim();
              return trimmedPara.length > 0 ? <p key={i}>{trimmedPara}</p> : null;
            })}
        </div>
      </div>
    </div>
  );
};

export default BlogSinglePage;
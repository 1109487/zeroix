import React from "react";
import { MessageCircle, HelpCircle, BookOpen, Phone } from "lucide-react";
// If you’re using React Router, uncomment:
// import { Link } from "react-router-dom";

const SupportSection = () => {
  const supportOptions = [
    {
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      title: "Live Chat",
      description: "Chat with our support team in real-time for quick help.",
      action: "Start Chat",
      link: "/support/chat", // route or external URL
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-white" />,
      title: "FAQs",
      description: "Find answers to common questions in our knowledge base.",
      action: "View FAQs",
      link: "/support/faqs",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: "Documentation",
      description: "Explore detailed guides and tutorials to get started.",
      action: "Read Docs",
      link: "/support/docs",
    },
    {
      icon: <Phone className="w-8 h-8 text-white" />,
      title: "Contact Us",
      description: "Reach out to us via email or phone for personalized help.",
      action: "Get in Touch",
      link: "/support/contact",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6 flex justify-center items-center">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply blur-3xl animate-pulse -top-10 -left-10" />
        <div className="absolute w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply blur-3xl animate-pulse bottom-10 -right-10" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          We’re Here to Help
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Whether you’re looking for quick answers, technical guidance, or
          personalized support — we’ve got you covered.
        </p>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {supportOptions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-lg
                         hover:-translate-y-1 transition-transform duration-300
                         h-full flex flex-col text-center"
            >
              <div className="flex justify-center mb-6">
                <span className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
                  {item.icon}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-gray-300 mb-6">{item.description}</p>

              {/* Clickable action */}
              <a
                href={item.link}
                // If using React Router replace with:
                // <Link to={item.link}>
                className="mt-auto w-full inline-block px-5 py-3 rounded-xl
                           bg-gradient-to-r from-purple-600 to-pink-600
                           text-white font-semibold shadow-lg
                           hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-purple-400/30"
              >
                {item.action}
              </a>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;

import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // npm install lucide-react

const faqs = [
  {
    question: "What is Zerionix?",
    answer:
      "Zerionix is a platform offering automated trading solutions for Forex and cryptocurrency markets, built with AI-driven technology and advanced market analytics.",
  },
  {
    question: "Is Zerionix safe to use?",
    answer:
      "Yes, we prioritize security and transparency. All trading strategies and user data are handled using industry-standard encryption and compliance policies.",
  },
  {
    question: "Do I need experience in trading?",
    answer:
      "No prior trading experience is required. Our automated solutions are designed to help both beginners and experienced traders.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply create an account, choose your trading strategy, and connect to your preferred broker. Our system handles the rest for you.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>

        <div className="space-y-6 w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border-3 shadow-sm transition-all duration-300 ${
                  isOpen ? "border-blue-500 shadow-md" : "border-gray-200"
                }`}
              >
                {/* Question Button */}
                <button
                  className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`transform transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-500" : "rotate-0 text-gray-600"
                    }`}
                  />
                </button>

                {/* Slide Down Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-5 pb-5 text-gray-600 text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;

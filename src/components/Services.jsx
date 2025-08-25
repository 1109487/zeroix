import React, { useEffect } from "react";
import {
  TrendingUp,
  Cpu,
  Bitcoin,
  Headphones,
  ShieldCheck,
  BarChart3,
  LineChart,
  UserCheck,
} from "lucide-react";

const services = [
  {
    title: "Automated Forex Trading",
    description:
      "Leverage AI-driven algorithms to maximize your forex trades with precision and real-time analytics.",
    icon: <TrendingUp size={40} className="text-blue-600 transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    title: "Crypto Trading Bots",
    description:
      "Advanced cryptocurrency trading bots designed for efficiency and profitable market moves.",
    icon: <Bitcoin size={40} className="text-yellow-500 transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    title: "AI-Powered Strategies",
    description:
      "Machine learning strategies adapt to market changes ensuring optimal entry and exit points.",
    icon: <Cpu size={40} className="text-green-500 transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    title: "24/7 Expert Support",
    description:
      "Our dedicated team provides round-the-clock assistance to ensure seamless trading operations.",
    icon: <Headphones size={40} className="text-purple-500 transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    title: "Risk Management",
    description:
      "Comprehensive risk assessment and mitigation strategies to protect your investments.",
    icon: <ShieldCheck size={40} className="text-red-500 transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    title: "Algorithmic Trading",
    description:
      "High-frequency and algorithmic trading systems for faster, data-driven decisions.",
    icon: <LineChart size={40} className="text-indigo-500 transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    title: "Market Analytics",
    description:
      "Deep market analysis to identify trends, patterns, and profitable opportunities.",
    icon: <BarChart3 size={40} className="text-orange-500 transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    title: "Personalized Consulting",
    description:
      "One-on-one trading consultations tailored to your goals and investment style.",
    icon: <UserCheck size={40} className="text-teal-500 transition-transform duration-300 group-hover:scale-110" />,
  },
];

const Services = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("fade-up");
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-white text-gray-800" id="services">
 

      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Our <span className="text-blue-600">Services</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Experience next-generation automated trading with advanced AI solutions
          designed for maximum efficiency and growth.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card opacity-0 group bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

    
    </section>
  );
};

export default Services;

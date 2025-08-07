import React from "react";
import Lottie from "lottie-react";
import whyAnimation from "../assets/choose.json"; // <-- your lottie JSON file
import { ShieldCheck, TrendingUp, Clock, Users } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Secure & Reliable",
    desc: "Advanced encryption and compliance ensure safe and reliable trading solutions.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    title: "High Performance",
    desc: "AI-powered algorithms deliver fast, accurate, and optimized trading execution.",
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "24/7 Automation",
    desc: "Automated trading strategies work around the clock, so you never miss opportunities.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Expert Support",
    desc: "A team of financial experts always available to help you succeed in trading.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-blue-50 py-20 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-300/40 rounded-full blur-2xl animate-pulse"></div>

      {/* Background Curve */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#bfdbfe"
          fillOpacity="0.3"
          d="M0,256L40,240C80,224,160,192,240,160C320,128,400,96,480,122.7C560,149,640,235,720,250.7C800,267,880,213,960,170.7C1040,128,1120,96,1200,106.7C1280,117,1360,171,1400,197.3L1440,224L0,320Z"
        ></path>
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left content */}
        <div className="space-y-6 z-10 flex flex-col items-center lg:items-start">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 leading-snug text-center lg:text-left">
              Why <span className="text-blue-600">Choose Us</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-md text-center lg:text-left mt-4">
              Discover why thousands of traders trust us for reliable, automated, and
              high-performance trading solutions built to scale your success.
            </p>
          </div>
          {/* Lottie animation below heading */}
          <Lottie animationData={whyAnimation} loop={true} className="w-72 md:w-96" />
        </div>

        {/* Right vertical timeline */}
        <div className="relative pl-10 z-10">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
          <div className="space-y-10">
            {features.map((feature, i) => (
              <div
                key={i}
                className="relative group bg-white/40 backdrop-blur-md rounded-xl shadow-lg p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Node icon */}
                <div className="absolute -left-8 top-6 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

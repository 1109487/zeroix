import React from "react";
import Lottie from "lottie-react";
import heroAnimation from "../assets/hero1.json";
import "../index.css";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-sky-300 to-blue-600 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row items-center w-full">
        {/* Left Side - Text with animation */}
        <div className="flex-1 text-center mt-[100px] md:text-left animate-fade-slide-up space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Welcome to Our Platform
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 max-w-lg mx-auto md:mx-0">
            Build, scale, and grow your business with our next-gen solutions.
            Experience seamless integration and blazing-fast performance.
          </p>
          <div className="flex justify-center md:justify-start gap-4 sm:gap-6">
            <button className="px-5 sm:px-6 md:px-8 py-3 sm:py-4 bg-white text-blue-700 font-semibold text-base sm:text-lg rounded-lg shadow hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="px-5 sm:px-6 md:px-8 py-3 sm:py-4 border border-white text-base sm:text-lg font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side - Lottie Animation */}
<div className="flex-1 mt-10 md:mt-0">
  <Lottie
    animationData={heroAnimation}
    loop={true}
    className="w-80 sm:w-96 md:w-full max-w-lg sm:max-w-xl md:max-w-3xl mx-auto"
  />
</div>

      </div>
    </section>
  );
};

export default Hero;

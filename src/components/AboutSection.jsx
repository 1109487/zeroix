import React from "react";
import Lottie from "lottie-react";
import aboutAnimation from "../assets/hero.json"; // Replace with your Lottie JSON

const AboutSection = () => {
  return (
    <section className="relative bg-white py-20 text-gray-800" id="about">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Row 1: Lottie + Who We Are (both glass) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Lottie animation with glass overlay */}
          <div className="relative">
            <Lottie animationData={aboutAnimation} loop={true} className="rounded-2xl " />
            {/* Glass Overlay */}
           
          </div>

          {/* Right - Who We Are with glass */}
          <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-gray-300/40 to-gray-100/20">
            <div className="backdrop-blur-xl bg-white/40 rounded-2xl p-8 shadow-lg 
                            transition-transform duration-300 ease-out 
                            transform hover:-translate-y-1 hover:shadow-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Who <span className="text-gray-600">We Are</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                ZERIONIX is a financial firm specializing in Forex and Crypto
                trading solutions. Our team of seasoned financial professionals
                uses advanced algorithms and comprehensive market insights to
                deliver superior strategies for both individuals and
                institutions. We believe in transparency, data-driven decisions,
                and innovative tools that empower you to navigate global markets
                with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: Mission + Vision (Glass Cards Gray Tone) */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-gray-300/40 to-gray-100/20">
            <div className="backdrop-blur-xl bg-white/40 rounded-2xl p-8 shadow-lg 
                            transition-transform duration-300 ease-out 
                            transform hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                At ZERIONIX, our mission is to bridge global financial markets
                with integrity, trust, and technological excellence. We are
                committed to delivering reliable services, premium products, and
                real results that drive our clients' growth and success.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-gray-300/40 to-gray-100/20">
            <div className="backdrop-blur-xl bg-white/40 rounded-2xl p-8 shadow-lg 
                            transition-transform duration-300 ease-out 
                            transform hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We aspire to become a globally respected trading institution,
                known for innovation, ethical practices, and service excellence.
                Our vision is to shape the future of international trade by
                creating sustainable, cross-industry value through strategic
                connections and market intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

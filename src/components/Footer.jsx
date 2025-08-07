import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 relative z-10">
      {/* Top Border Gradient */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row justify-between gap-12">
        {/* Left - Company info (3/4 width on desktop) */}
        <div className="lg:w-3/4 space-y-4">
          <h2 className="text-3xl font-bold text-white">Zerionix</h2>
          <p className="max-w-2xl text-gray-400 text-lg leading-relaxed">
            Zerionix is your trusted partner for automated Forex and crypto trading
            solutions. Harness the power of AI-driven algorithms to maximize profits
            while minimizing risk — all with ease and security.
          </p>
        </div>

        {/* Right - Links and Socials (1/4 width on desktop) */}
        <div className="lg:w-1/4 flex flex-col justify-between space-y-8 lg:space-y-0">
          {/* Links */}
          <div className="flex flex-col space-y-3">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5 mt-4 lg:mt-0">
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-800 text-gray-500 text-center py-4 text-sm">
        © {new Date().getFullYear()} Zerionix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

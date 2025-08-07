import React, { useState } from "react";
import { 
  FaFacebookF, FaInstagram, FaLinkedinIn, 
  FaPhoneAlt, FaEnvelope, FaBars, FaTimes 
} from "react-icons/fa";
import logo from "../assets/logo.svg";
import AuthModal from "./AuthModal"; // Import modal component

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authType, setAuthType] = useState(null); // 'login' or 'signup'

  const openModal = (type) => setAuthType(type);
  const closeModal = () => setAuthType(null);

  return (
    <header className="fixed w-full z-50 top-0">
      {/* Top Bar */}
      <div className="bg-blue-500 text-gray-200 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center sm:gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-white">
              <FaPhoneAlt /> +1 234 567 890
            </a>
            <a href="mailto:info@example.com" className="flex items-center gap-1 hover:text-white">
              <FaEnvelope /> info@example.com
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-blue-400"><FaFacebookF size={23} /></a>
            <a href="#" className="hover:text-blue-400"><FaLinkedinIn size={23} /></a>
            <a href="#" className="hover:text-blue-400"><FaInstagram size={23} /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 text-lg text-gray-700 font-medium">
              <li><a href="/" className="hover:text-blue-600">Home</a></li>
              <li><a href="#" className="hover:text-blue-600">About</a></li>
              <li><a href="#" className="hover:text-blue-600">Services</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact</a></li>
            </ul>

            {/* Auth Buttons (Desktop) */}
            <div className="hidden md:flex gap-4">
              <button
                className="px-4 py-2 border rounded hover:bg-gray-100"
                onClick={() => openModal("login")}
              >
                Login
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => openModal("signup")}
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="flex flex-col gap-4 py-4 text-gray-700 font-medium">
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
              <li><a href="#" className="hover:text-blue-600">About</a></li>
              <li><a href="#" className="hover:text-blue-600">Services</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact</a></li>
              <li>
                <button
                  className="w-full text-left px-4 py-2 border rounded hover:bg-gray-100"
                  onClick={() => openModal("login")}
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => openModal("signup")}
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal */}
      <AuthModal isOpen={!!authType} onClose={closeModal} type={authType} />
    </header>
  );
};

export default Header;

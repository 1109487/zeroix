import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const AuthModal = ({ isOpen, onClose, type }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Start animation after a short delay
      const timer = setTimeout(() => setAnimate(true), 10);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div
        className={`bg-white rounded-lg shadow-lg w-96 transform transition-all duration-500 ease-out 
        ${animate ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="px-6 pb-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            {type === "login" ? "Login to Your Account" : "Create an Account"}
          </h2>

          {/* Form */}
          <form className="flex flex-col gap-4">
            {type === "signup" && (
              <input
                type="text"
                placeholder="Full Name"
                className="border p-3 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-3 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition"
            >
              {type === "login" ? "Login" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

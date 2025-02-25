import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom"; // For navigation

const Navbar = ({ mainRef, modelsRef, testimonialsRef, articleRef }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [showScrollButton, setShowScrollButton] = useState(false); // Scroll button state
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Login modal state
  const mobileMenuRef = useRef(null); // Mobile menu reference
  const loginModalRef = useRef(null); // Login modal reference

  // Track scrolling to show/hide the scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Scroll to a specific section
  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false); // Close mobile menu after clicking
  };

  // Toggle Login Modal
  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  // Close modal if clicking outside
  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      if (loginModalRef.current && !loginModalRef.current.contains(event.target)) {
        setIsLoginModalOpen(false);
      }
    };

    if (isLoginModalOpen) {
      document.addEventListener("mousedown", handleClickOutsideModal);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideModal);
    }

    return () => document.removeEventListener("mousedown", handleClickOutsideModal);
  }, [isLoginModalOpen]);

  // Navigate to Signup Page
  const goToSignup = () => {
    navigate("/signup");
  };

  // Navigate to Home Page
  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      {/* Navbar */}
      <div className="relative bg-[#1a1a1a] bg-opacity-90 backdrop-blur-lg shadow-lg rounded-2xl flex justify-between items-center p-3 w-[90%] max-w-[1000px] mx-auto mt-3 z-50">
        {/* Left: Logo */}
        <div className="flex items-center cursor-pointer" onClick={goToHome}>
          <h1 className="font-serif text-5xl bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-600 text-transparent bg-clip-text font-bold tracking-widest drop-shadow-2xl">
            HL
          </h1>
          <h5 className="text-gray-400 text-xl tracking-[0.2em] ml-2">MODELS</h5>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex">
          <ul className="flex items-center space-x-8">
            <li className="text-gray-300 text-lg hover:text-white cursor-pointer transition" onClick={goToHome}>Home</li>
            <li className="text-gray-300 text-lg hover:text-white cursor-pointer transition" onClick={() => scrollToSection(modelsRef)}>Models</li>
            <li className="text-gray-300 text-lg hover:text-white cursor-pointer transition" onClick={() => scrollToSection(articleRef)}>Articles</li>
            <li className="text-gray-300 text-lg hover:text-white cursor-pointer transition" onClick={() => scrollToSection(testimonialsRef)}>Testimonials</li>
          </ul>
        </div>

        {/* Right: Buttons */}
        <div className="hidden md:flex items-center space-x-5">
          <button
            onClick={toggleLoginModal}
            className="bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-700 text-white px-5 py-2 rounded-lg hover:scale-105 transition duration-300"
          >
            Login
          </button>
          <button
            onClick={goToSignup}
            className="bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-700 text-white px-5 py-2 rounded-lg hover:scale-105 transition duration-300"
          >
            Sign Up
          </button>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX className="text-3xl text-gray-400" /> : <FiMenu className="text-3xl text-gray-400" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div ref={mobileMenuRef} className="bg-[#1a1a1a] bg-opacity-95 backdrop-blur-md rounded-xl md:hidden shadow-lg p-5 w-[90%] mx-auto text-center absolute top-20 left-1/2 transform -translate-x-1/2 z-40">
          <ul className="space-y-4 text-lg text-gray-300">
            <li className="hover:text-white cursor-pointer transition" onClick={goToHome}>Home</li>
            <li className="hover:text-white cursor-pointer transition" onClick={() => scrollToSection(modelsRef)}>Models</li>
            <li className="hover:text-white cursor-pointer transition" onClick={() => scrollToSection(articleRef)}>Articles</li>
            <li className="hover:text-white cursor-pointer transition" onClick={() => scrollToSection(testimonialsRef)}>Testimonials</li>
          </ul>
          <div className="mt-4 flex flex-col items-center space-y-2">
            <button
              onClick={toggleLoginModal}
              className="mb-1 bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-700 text-white px-16 py-2 rounded-lg hover:scale-105 transition duration-300"
            >
              Login
            </button>
            <button
              onClick={goToSignup}
              className="bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-700 text-white px-16 py-2 rounded-lg hover:scale-105 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}

      {/* Scroll-to-Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 z-[100] right-6 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div ref={loginModalRef} className="bg-[#2a2a2a] p-8 rounded-lg w-[90%] max-w-md relative">
            <button
              onClick={toggleLoginModal}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              <FiX />
            </button>

            <h2 className="text-3xl font-bold text-white mb-6 text-center">Login</h2>

            {/* Google Login Button */}
            <button
              onClick={() => console.log("Logging in with Google")}
              className="w-full flex items-center justify-center space-x-2 bg-white text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition duration-300 mb-4"
            >
              <FcGoogle className="text-2xl" />
              <span>Login with Google</span>
            </button>

            <div className="text-center text-gray-400 mb-4">OR</div>

            {/* Email Login Form */}
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-[#3a3a3a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 bg-[#3a3a3a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-700 text-white py-2 rounded-lg hover:scale-105 transition duration-300"
              >
                Login with Email
              </button>
            </form>

            <div className="mt-6 text-center text-gray-400">
              Don't have an account?{" "}
              <span className="text-purple-500 cursor-pointer hover:underline">
                Sign Up
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

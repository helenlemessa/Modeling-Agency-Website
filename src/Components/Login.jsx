import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = (e) => {
    e.preventDefault();
    // Add your email/password login logic here
    console.log("Logging in with email:", email, "and password:", password);
    // Redirect to the home page or dashboard after successful login
    navigate("/");
  };

  const handleGoogleLogin = () => {
    // Add your Google login logic here
    console.log("Logging in with Google");
    // Redirect to the home page or dashboard after successful login
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a] bg-opacity-90 backdrop-blur-lg">
      <div className="bg-[#2a2a2a] bg-opacity-90 backdrop-blur-lg shadow-lg rounded-2xl p-8 w-[90%] max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Login</h2>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center space-x-2 bg-white text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition duration-300 mb-4"
        >
          <FcGoogle className="text-2xl" />
          <span>Login with Google</span>
        </button>

        <div className="text-center text-gray-400 mb-4">OR</div>

        {/* Email Login Form */}
        <form onSubmit={handleEmailLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-[#3a3a3a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

        {/* Sign Up Link */}
        <div className="mt-6 text-center text-gray-400">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-purple-500 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
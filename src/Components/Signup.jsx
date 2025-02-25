import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("model"); // "model" or "client"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    phone: "",
    address: "",
    experience: "",
    portfolio: "",
    availability: "",
    projectType: "",
    budget: "",
    timeline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.dob ||
      !formData.gender ||
      !formData.phone ||
      !formData.address
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    if (userType === "model" && (!formData.experience || !formData.portfolio || !formData.availability)) {
      alert("Please fill out all model-specific fields.");
      return;
    }

    if (userType === "client" && (!formData.projectType || !formData.budget || !formData.timeline)) {
      alert("Please fill out all client-specific fields.");
      return;
    }

    // Submit form data (you can replace this with an API call)
    console.log("Form Data:", formData);
    alert("Signup successful!");
    navigate("/"); // Redirect to home after signup
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-5">
      <div className="bg-[#1a1a1a] bg-opacity-90 backdrop-blur-lg rounded-2xl p-8 w-full max-w-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* User Type Selection */}
          <div className="flex justify-center space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="userType"
                value="model"
                checked={userType === "model"}
                onChange={() => setUserType("model")}
                className="form-radio text-purple-500"
              />
              <span className="text-gray-300">I am a Model</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="userType"
                value="client"
                checked={userType === "client"}
                onChange={() => setUserType("client")}
                className="form-radio text-purple-500"
              />
              <span className="text-gray-300">I need a Model</span>
            </label>
          </div>

          {/* Personal Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white mb-4">Personal Details</h2>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-3 w-full bg-[#2a2a2a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-3 w-full bg-[#2a2a2a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-3 w-full bg-[#2a2a2a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-300">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="mt-1 p-3 w-full bg-[#2a2a2a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-300">
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 p-3 w-full bg-[#2a2a2a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-3 w-full bg-[#2a2a2a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-300">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 p-3 w-full bg-[#2a2a2a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          </div>

          {/* Model-Specific Fields */}
          {userType === "model" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white mb-4">Model Details</h2>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-300">
                  Experience Level <span className="text-red-500">*</span>
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full bg-[#2a2a2a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select Experience Level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="professional">Professional</option>
                </select>
              </div>
              <div>
                <label htmlFor="portfolio" className="block text-sm font-medium text-gray-300">
                  Portfolio Link <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  id="portfolio"
                  name="portfolio"
                  placeholder="Enter your portfolio link"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full bg-[#2a2a2a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-300">
                  Availability <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="availability"
                  name="availability"
                  placeholder="Enter your availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full bg-[#2a2a2a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>
          )}

          {/* Client-Specific Fields */}
          {userType === "client" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white mb-4">Project Details</h2>
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-300">
                  Type of Project <span className="text-red-500">*</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full bg-[#2a2a2a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select Project Type</option>
                  <option value="fashion">Fashion</option>
                  <option value="commercial">Commercial</option>
                  <option value="editorial">Editorial</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300">
                  Budget <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  placeholder="Enter your budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full bg-[#2a2a2a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-300">
                  Timeline <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="timeline"
                  name="timeline"
                  placeholder="Enter your timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full bg-[#2a2a2a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-700 text-white py-3 rounded-lg hover:scale-105 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
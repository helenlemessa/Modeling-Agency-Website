import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Importing useNavigate
import p1 from "../assets/p1.jpg";
import forclip from "../assets/forclip.jpg";
import modelforproduct from "../assets/modelforproduct.jpg";
import forclothing from "../assets/forclothing.jpg";

// Animation Variants
const textVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
};

const paragraphVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.4 } },
};

const buttonVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, delay: 0.6 } },
};

const imageVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.4 } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.2 } },
};

const Main1 = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to navigate to the signup page
  const goToSignup = () => {
    navigate("/signup"); // Redirect to the signup page
  };

  return (
    <div className="w-full overflow-hidden bg-black">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-start justify-between px-6 sm:px-10 pt-8 text-white max-w-7xl mx-auto">
        {/* Left Side - Text Content */}
        <motion.div
          className="grid gap-5 mt-[80px] sm:mt-[120px] max-w-[660px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="lg:leading-[67px] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-bold mb-4 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 bg-clip-text text-transparent"
            variants={textVariant}
          >
            MODELS FOR EVERY PROJECT
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-400 opacity-80"
            variants={paragraphVariant}
          >
            Browse through a diverse selection of exceptionally high-quality models, carefully curated and selected to meet the needs of every project.
          </motion.p>

          <motion.div
            className="mt-6 flex justify-center lg:justify-start"
            variants={buttonVariant}
          >
            <button
              onClick={goToSignup} // On click, navigate to signup page
              className="bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-700 text-white px-8 py-3 rounded-lg transition duration-300 hover:scale-105 active:scale-95 focus:scale-100"
            >
              Sign Up
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side - Image with Animation */}
        <motion.div
          className="relative w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariant}
        >
          <img
            src={p1}
            alt="Model"
            className="w-full max-w-lg object-cover rounded-lg shadow-2xl"
          />
        </motion.div>
      </section>

      {/* Overlay Section */}
      <motion.section
        className="relative z-20 text-center text-white bg-black/50 rounded-lg w-full mt-[80px] max-w-7xl mx-auto px-6 sm:px-10 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="mb-5 text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 bg-clip-text text-transparent">
          VERSATILE MODELS FOR EVERY PROJECT WITH UNMATCHED QUALITY
        </h2>

        <p className="uppercase text-sm sm:text-base lg:text-lg mt-2 opacity-80 text-gray-400">
          Browse our collection of premium models for your creative needs, with fast and easy access to top-tier visuals.
        </p>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 place-items-center">
          {[forclip, forclothing, modelforproduct].map((src, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center py-8 rounded-2xl bg-gray-800/50 px-4 w-full max-w-[300px] transform transition-all duration-500 hover:shadow-2xl hover:bg-gray-700/50 hover:-translate-y-3 hover:rotate-[2deg] hover:border hover:border-purple-500/70"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: index * 0.3 } }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={src}
                alt="Model"
                className="w-[200px] h-[250px] rounded-2xl shadow-lg object-cover transition-all duration-500"
              />
              <p className="uppercase pt-2 text-sm text-gray-400 mt-2">
                For Your {index === 0 ? "Clip" : index === 1 ? "Clothing" : "Product"}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Main1;

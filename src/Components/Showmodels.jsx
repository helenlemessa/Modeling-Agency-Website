// Showmodels.js
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const imageSets = {
  unique: [
    { src: "/assets/unique/m1.jpg", name: "Model A", city: "New York" },
    { src: "/assets/unique/m3.jpg", name: "Model B", city: "Los Angeles" },
    { src: "/assets/unique/m2.jpg", name: "Model C", city: "Chicago" },
    { src: "/assets/unique/m4.jpg", name: "Model D", city: "Miami" },
    { src: "/assets/unique/m5.jpg", name: "Model E", city: "San Francisco" },
    { src: "/assets/unique/m6.jpg", name: "Model F", city: "Seattle" },
    { src: "/assets/unique/m7.jpg", name: "Model G", city: "Boston" },
    { src: "/assets/unique/m8.jpg", name: "Model H", city: "Austin" },
  ],
  commercial: [
    { src: "/assets/com/m17.jpg", name: "Model I", city: "Paris" },
    { src: "/assets/com/m18.jpg", name: "Model J", city: "London" },
    { src: "/assets/com/m19.jpg", name: "Model K", city: "Berlin" },
    { src: "/assets/com/m20.jpg", name: "Model L", city: "Tokyo" },
    { src: "/assets/com/m22.jpg", name: "Model M", city: "Sydney" },
    { src: "/assets/com/m23.jpg", name: "Model N", city: "Dubai" },
    { src: "/assets/com/m24.jpg", name: "Model O", city: "Moscow" },
    { src: "/assets/com/m25.jpg", name: "Model P", city: "Rome" },
  ],
  fashion: [
    { src: "/assets/fashion/m9.jpg", name: "Model Q", city: "Milan" },
    { src: "/assets/fashion/m10.jpg", name: "Model R", city: "Madrid" },
    { src: "/assets/fashion/m11.jpg", name: "Model S", city: "Barcelona" },
    { src: "/assets/fashion/m112.jpg", name: "Model T", city: "Amsterdam" },
    { src: "/assets/fashion/m13.jpg", name: "Model U", city: "Vienna" },
    { src: "/assets/fashion/m16.jpg", name: "Model V", city: "Prague" },
    { src: "/assets/fashion/m15.jpg", name: "Model W", city: "Brussels" },
    { src: "/assets/fashion/m14.jpg", name: "Model X", city: "Lisbon" },
  ],
  plusSize: [
    { src: "/assets/plussize/m26.jpg", name: "Model Y", city: "Toronto" },
    { src: "/assets/plussize/m27.jpg", name: "Model Z", city: "Vancouver" },
    { src: "/assets/plussize/m28.jpg", name: "Model AA", city: "Montreal" },
    { src: "/assets/plussize/m34.jpg", name: "Model AB", city: "Calgary" },
    { src: "/assets/plussize/m30.jpg", name: "Model AC", city: "Ottawa" },
    { src: "/assets/plussize/m31.jpg", name: "Model AD", city: "Quebec City" },
    { src: "/assets/plussize/m32.jpg", name: "Model AE", city: "Edmonton" },
    { src: "/assets/plussize/m33.jpg", name: "Model AF", city: "Winnipeg" },
  ],
};

// Animation Component
const ScrollAnimation = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  if (inView) {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

// Fade-in Animation Variant
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
};

export default function Showmodels() {
  const [selectedSet, setSelectedSet] = useState("unique"); // Default to the first set
  const navigate = useNavigate();

  const handleFindModelsClick = () => {
    navigate("/models");
  };

  return (
    <div className="p-5 pb-0 bg-black min-h-screen">
      <h1 className="text-xl font-bold text-center mb-4 text-white">Popular Models</h1>

      {/* Buttons */}
      <div className="flex gap-4 mb-8 justify-center">
        {Object.keys(imageSets).map((setKey) => (
          <button
            key={setKey}
            className={`px-4 py-2 ${
              selectedSet === setKey ? "bg-purple-700" : "bg-transparent"
            } text-white rounded hover:bg-purple-800 transition-all duration-300 border rounded-full border-purple-700`}
            onClick={() => setSelectedSet(setKey)}
          >
            {setKey.charAt(0).toUpperCase() + setKey.slice(1)}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {imageSets[selectedSet].map((model, index) => (
          <ScrollAnimation key={index}>
            <div className="relative group cursor-pointer transition-all duration-700 hover:scale-105">
              {/* Image */}
              <img
                src={model.src}
                alt={`Model ${index + 1}`}
                className="w-full h-[400px] object-cover object-top rounded-[20px] shadow-md"
              />

              {/* Overlay with Model Name and City */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 opacity-100 group-hover:bg-opacity-50 transition-all duration-500 rounded-[20px]">
                <p className="text-white font-bold text-lg">{model.name}</p>
                <p className="text-white text-sm">{model.city}</p>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      {/* Find Models Button */}
      <motion.section
        className="flex justify-center my-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <button
          className="bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition duration-300 hover:scale-105 active:scale-95 focus:scale-100"
          onClick={handleFindModelsClick}
        >
          Find Models
        </button>
      </motion.section>
    </div>
  );
}
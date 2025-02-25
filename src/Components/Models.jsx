import React, { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaKey, FaPlus, FaHeart } from "react-icons/fa"; // Import icons
const SignUp = ({ onClose }) => {
  const [userType, setUserType] = useState("model"); // 'model' or 'seekingModel'
  const modalRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", userType);
    onClose(); // Close the sign-up page after submission
  };

  // Close the modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto" // Added max-h and overflow-y-auto for scroll
      >
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Radio Buttons Side by Side */}
          <div className="mb-4 justify-center flex gap-7">
            <label className="flex items-center">
              <input
                type="radio"
                value="model"
                checked={userType === "model"}
                onChange={() => setUserType("model")}
                className="mr-2"
              />
              Find Modeling job
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="seekingModel"
                checked={userType === "seekingModel"}
                onChange={() => setUserType("seekingModel")}
                className="mr-2"
              />
              Find Models
            </label>
          </div>

          {/* Common Fields for All Users */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2">Full Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Confirm Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Date of Birth</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>

          {/* Conditional Fields based on User Type */}
          {userType === "model" ? (
            <>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2">Portfolio Link</label>
                  <input
                    type="url"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2">Experience (Years)</label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2">Height (cm)</label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2">Weight (kg)</label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2">Eye Color</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2">Hair Color</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Upload Photos</label>
                <input
                  type="file"
                  className="w-full p-2 border border-gray-300 rounded"
                  multiple // Allow multiple files
                  accept="image/*" // Accept only image files
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Social Media Links</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Instagram, LinkedIn, etc."
                />
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2">Company Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2">Job Title</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2">Company Website</label>
                  <input
                    type="url"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="https://example.com"
                  />
                </div>
                <div>
                  <label className="block mb-2">Industry</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2">Company Size</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  >
                    <option value="">Select</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501+">501+ employees</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Project Description</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="3"
                  required
                />
              </div>
            </>
          )}

          {/* Submit and Close Buttons */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-purple-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
const Models = () => {
  const [likedImages, setLikedImages] = useState(new Set());
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const categoriesScrollRef = useRef(null);
  const filtersScrollRef = useRef(null);

const scroll = (ref, direction) => {
  if (ref.current) {
    const scrollAmount = 200; // Adjust this value for more/less scroll
    if (direction === "left") {
      ref.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }
};


  const toggleLike = (id) => {
    setLikedImages((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleAddClick = () => {
    setIsSignUpVisible(true);
  };

  const handleCloseSignUp = () => {
    setIsSignUpVisible(false);
  };

  const categories = [
    "Fashion",
    "Content Creator",
    "Curve",
    "Tattoo",
    "Dancer",
    "Sport",
    "Actor",
    "Senior",
    "Artistic Nude",
    "Unique",
  ];

  const filters = [
    "Gender",
    "Country",
    "City",
    "Age",
    "Ethnicity",
    "Height",
    "Eye Color",
    "Hair Color",
    "Shoes",
    "Languages",
  ];
  // Articles data
  const articles = [
    {
      id: 1,
      image: "/assets/Article/a1.jpg",
      imageHeight: "h-[350px]",
    },
    {
      id: 2,
      image: "/assets/Article/a2.jpg",
      imageHeight: "h-[500px]",
    },
    {
      id: 3,
      image: "/assets/Article/a3.jpg",
      imageHeight: "h-[500px]",
    },
    {
      id: 4,
      image: "/assets/Article/a5.jpg",
      imageHeight: "h-[300px]",
    },
    {
      id: 5,
      image: "/assets/Article/a6.jpg",
      imageHeight: "h-[450px]",
    },
    {
      id: 6,
      image: "/assets/Article/a7.jpg",
      imageHeight: "h-[350px]",
    },
    {
      id: 7,
      image: "/assets/Article/a8.jpg",
      imageHeight: "h-[450px]",
    },
    {
      id: 8,
      image: "/assets/Article/a9.jpg",
      imageHeight: "h-[350px]",
    },
    {
      id: 9,
      image: "/assets/Article/a10.jpg",
      imageHeight: "h-[350px]",
    },
    {
      id: 10,
      image: "/assets/Article/a15.jpg",
      imageHeight: "h-[450px]",
    },
    {
      id: 11,
      image: "/assets/Article/a12.jpg",
      imageHeight: "h-[350px]",
    },
    {
      id: 12,
      image: "/assets/unique/m1.jpg",
      imageHeight: "h-[450px]",
    },
    {
      id: 13,
      image: "/assets/unique/m2.jpg",
      imageHeight: "h-[450px]",
    },
    {
      id: 14,
      image: "/assets/unique/m3.jpg",
      imageHeight: "h-[450px]",
    },
    {
      id: 15,
      image: "/assets/unique/m4.jpg",
      imageHeight: "h-[350px]",
    },
    {
      id: 16,
      image: "/assets/unique/m5.jpg",
      imageHeight: "h-[350px]",
    },
    {
      id: 17,
      image: "/assets/unique/m6.jpg",
      imageHeight: "h-[400px]",
    },
    {
      id: 18,
      image: "/assets/unique/m7.jpg",
      imageHeight: "h-[400px]",
    },
    {
      id: 19,
      image: "/assets/unique/m8.jpg",
      imageHeight: "h-[500px]",
    },
    {
      id: 20,
      image: "/assets/plussize/m26.jpg",
      imageHeight: "h-[500px]",
    },
    {
      id: 21,
      image: "/assets/com/m17.jpg",
      imageHeight: "h-[500px]",
    },
    {
      id: 22,
      image: "/assets/com/m18.jpg",
      imageHeight: "h-[450px]",
    },
    {
      id: 23,
      image: "/assets/com/m19.jpg",
      imageHeight: "h-[550px]",
    },
    {
      id: 24,
      image: "/assets/com/m20.jpg",
      imageHeight: "h-[450px]",
    },
    {
      id: 25,
      image: "/assets/com/m22.jpg",
      imageHeight: "h-[500px]",
    },
    {
      id: 26,
      image: "/assets/com/m23.jpg",
      imageHeight: "h-[350px]",
    },
    {
      id: 27,
      image: "/assets/com/m24.jpg",
      imageHeight: "h-[330px]",
    },
    {
      id: 28,
      image: "/assets/com/m25.jpg",
      imageHeight: "h-[350px]",
    },
    {
      id: 29,
      image: "/assets/fashion/m9.jpg",
      imageHeight: "h-[500px]",
    },
    {
      id: 30,
      image: "/assets/fashion/m10.jpg",
      imageHeight: "h-[400px]",
    },
    {
      id: 31,
      image: "/assets/fashion/m11.jpg",
      imageHeight: "h-[300px]",
    },
    {
      id: 32,
      image: "/assets/fashion/m112.jpg",
      imageHeight: "h-[500px]",
    },
    {
      id: 33,
      image: "/assets/fashion/m13.jpg",
      imageHeight: "h-[350px]",
    },
    {
      id: 34,
      image: "/assets/fashion/m16.jpg",
      imageHeight: "h-[350px]",
    },
    {
      id: 35,
      image: "/assets/fashion/m15.jpg",
      imageHeight: "h-[450px]",
    },
    {
      id: 36,
      image: "/assets/fashion/m14.jpg",
      imageHeight: "h-[400px]",
    },
  ];

  const calculateRowSpan = (heightClass) => {
    const height = parseInt(heightClass.match(/\d+/)[0]);
    return Math.ceil(height / 10);
  };

  const ArticleItem = ({ article, onAddClick }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        ref={ref}
        className={`masonry-item bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-opacity duration-1000 ease-in-out ${
          inView ? "opacity-100" : "opacity-0"
        }`}
        style={{ gridRowEnd: `span ${calculateRowSpan(article.imageHeight)}` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="  relative">
          <img
            src={article.image}
            alt={`Article ${article.id}`}
            className={`w-full ${article.imageHeight} object-cover`}
          />
          <button
            onClick={onAddClick}
            className={`absolute top-2 left-2 bg-white bg-opacity-80 text-black px-2 py-1 rounded-full flex items-center gap-1 hover:bg-opacity-100 transition-all duration-300 ease-in-out ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <FaPlus className="text-sm" />
            <span className="text-sm">Add</span>
          </button>
          <button
            onClick={() => toggleLike(article.id)}
            className={`absolute bottom-2 right-2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all duration-300 ease-in-out ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <FaHeart
              className={`text-lg ${
                likedImages.has(article.id) ? "text-red-500" : "text-gray-700"
              }`}
            />
          </button>
        </div>
        {article.date && (
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
            {article.date}
          </div>
        )}
      </div>
    );
  };

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: categoriesRef, inView: categoriesInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const { ref: filtersRef, inView: filtersInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div className="p-6">
      <p
        ref={titleRef}
        className={`text-center  text-white text-lg transition-all duration-1000 ease-in-out transform ${
          titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="font-semibold  text-white text-3xl mr-3 hover:cursor-pointer">Models</span>
        Explore our collection of models.
      </p>

      <div
  ref={categoriesRef}
  className={`mb-8 transition-all duration-1000 ease-in-out transform ${
    categoriesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  <h2 className="text-xl text-white font-bold mb-4">Categories</h2>
  <div className="flex items-center">
    <button
      onClick={() => scroll(categoriesRef, "left")}
      className="text-2xl text-white p-2 hover:bg-purple-400 rounded-full"
    >
      &lt;
    </button>
    <div
      ref={categoriesRef}
      className="flex text-white overflow-x-auto gap-4 flex-1 mx-2 hide-scrollbar"
    >
      {categories.map((category, index) => (
        <button
          key={index}
          className="flex text-white items-center gap-2 px-4 py-2 bg-purple-500 rounded-full hover:bg-purple-400 transition-all whitespace-nowrap"
        >
          <FaKey className="text-red-500" /> {category}
        </button>
      ))}
    </div>
    <button
      onClick={() => scroll(categoriesRef, "right")}
      className="text-2xl text-white p-2 hover:bg-purple-400 rounded-full"
    >
      &gt;
    </button>
  </div>
</div>

<div
  ref={filtersRef}
  className={`mb-8 transition-all duration-1000 ease-in-out transform ${
    filtersInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  <h2 className="text-xl text-white font-bold mb-4">Filters</h2>
  <div className="flex items-center">
    <button
      onClick={() => scroll(filtersRef, "left")}
      className="text-2xl text-white p-2 hover:bg-purple-400 rounded-full"
    >
      &lt;
    </button>
    <div
      ref={filtersRef}
      className="flex text-white overflow-x-auto gap-4 flex-1 mx-2 hide-scrollbar"
    >
      {filters.map((filter, index) => (
        <button
          key={index}
          className="flex text-white items-center gap-2 px-4 py-2 bg-purple-500 rounded-full hover:bg-purple-400 transition-all whitespace-nowrap"
        >
          <FaKey className="text-red-500" /> {filter}
        </button>
      ))}
    </div>
    <button
      onClick={() => scroll(filtersRef, "right")}
      className="text-2xl text-white p-2 hover:bg-purple-400 rounded-full"
    >
      &gt;
    </button>
  </div>
</div>
      <div className="masonry-grid mt-8">
        {articles.map((article) => (
          <ArticleItem
            key={article.id}
            article={article}
            onAddClick={handleAddClick}
          />
        ))}
      </div>

      <div
        ref={buttonRef}
        className={`flex justify-center mt-6 transition-all duration-1000 ease-in-out transform ${
          buttonInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Add a "Load More" button here if needed */}
      </div>

      {isSignUpVisible && <SignUp onClose={handleCloseSignUp} />}
    </div>
  );
};

export default Models;
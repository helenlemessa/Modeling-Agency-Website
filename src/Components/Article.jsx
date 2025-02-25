import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa"; // Import icons
const articles = [
    {
      id: 1,
      image: "/assets/Article/a1.jpg",
      title: "From Paris to New York: The Forgotten Roles of Fashion's Greatest Designers",
      description: "In the fashion capitals of Paris and New York, designers such as Alber Elbaz at Lanvin, Karl Lagerfeld at Chanel, and Phoebe Philo at Céline have become synonymous w ...MORE",
      imageHeight: "h-[400px]",
      date: "January 14, 2025",
    },
    {
      id: 2,
      image: "/assets/Article/a2.jpg",
      title: "The Evolution of Model Agencies in Switzerland: A Glimpse Into Fashion’s Alpine JewelArticl",
      description: "Switzerland, a nation celebrated for its breathtaking landscapes and precision craftsmanship, has also established itself as a notable player in the global fashion a ...MORE",
      imageHeight: "h-[500px]",
      date: "January 16, 2025",
    },
    {
      id: 3,
      image: "/assets/Article/a3.jpg",
      title: "Celebrating Cristóbal Balenciaga: A Legacy of Style That Continues to Inspire Models and Fashion Lovers in Paris and Moscow",
      description: "On this day 126 years ago, Cristóbal Balenciaga, one of the most influential designers in fashion history, was born. His revolutionary designs and dedication to indi ...MORE",
      imageHeight: "h-[500px]",
      date: "January 18, 2025",
    },
    {
      id: 4,
      image: "/assets/Article/a4.jpg",
      title: "Cecil Beaton - the man behind fashion photography",
      description: "Where does fashion photography come from? If this is a question you've always wondered about, it's time to meet Cecil Beaton, the preeminent photographer of the twen ...MORE",
      imageHeight: "h-[500px]",
      date: "January 20, 2025",
    },
    {
      id: 5,
      image: "/assets/Article/a5.jpg",
      title: "How did the Chanel logo come about? The history of the iconic symbol of the fashion house",
      description: "The fashion house of Chanel is now one of the most recognizable brands in the world, thanks in large part to its iconic logo of two intertwined 'c'. It's hard to i ...MORE",
      imageHeight: "h-64",
      date: "January 22, 2025",
    },
    {
      id: 6,
      image: "/assets/Article/a6.jpg",
      title: "Porn chic and classic beauty: 5 iconic Tom Ford collections",
      description: "American designer Tom Ford is probably the only one who can boast a solid track record of achievements not only in the fashion industry but also in movies. Ford's ke ...MORE",
      imageHeight: "h-[400px]",
      date: "January 24, 2025",
    },
    {
      id: 7,
      image: "/assets/Article/a7.jpg",
      title: "Ella Kandyba Ukrainian Woman in Vogue: Еlla Kandyba",
      description: "Vogue UA magazine, with the support of Symbol, has published a book Ukrainian Women in Vogue. It is dedicated to Ukrainian heroines who have appeared on the pages of ...MORE",
      imageHeight: "h-84",
      date: "January 26, 2025",
    },
    {
      id: 8,
      image: "/assets/Article/a8.jpg",
      title: "How Models and Modeling Agencies in Paris and London Can Leverage Online Shopping Trends",
      description: "In today's realities, online shopping is more relevant than ever, presenting unique opportunities for models, the best modeling agencies, and fashion professionals i ...MORE",
      imageHeight: "h-[400px]",
      date: "January 28, 2025",
    },
    {
      id: 9,
      image: "/assets/Article/a9.jpg",
      title: "A Comparative Look at the Best Modeling Agencies in Moscow",
      description: "Moscow, a city of grandeur and rich cultural heritage, has emerged as a vital hub for the global fashion and modeling industry. Known for its distinctive fashion eve ...MORE.",
      imageHeight: "h-[350px]",
      date: "January 30, 2025",
    },
    {
      id: 10,
      image: "/assets/Article/a10.jpg",
      title: "Jean-Paul Gaultier: A Visionary Who Redefined Fashion and Inspired the Best Modeling Agencies",
      description: "Jean-Paul Gaultier’s bold creativity and multifaceted approach have made him a defining figure in both haute couture and street fashion. For models, modeling agencie ...MORE",
      imageHeight: "h-[450px]",
      date: "February 1, 2025",
    },
    {
      id: 11,
      image: "/assets/Article/a11.jpg",
      title: "A Comparative Look at the Best Modeling Agencies in New York",
      description: "New York, one of the most iconic fashion capitals in the world, is a dream destination for aspiring models. Renowned for its prestigious fashion events and collabora ...MORE",
      imageHeight: "h-[500px]",
      date: "February 3, 2025",
    },
    {
      id: 12,
      image: "/assets/Article/a12.jpg",
      title: "The Evolution of Model Agencies in Germany: A Glimpse Into Fashion’s Heart",
      description: "Germany, a nation renowned for its precision and innovation, has also carved a distinct niche in the world of fashion. Over the decades, Germany has become a breedin ...MORE",
      imageHeight: "h-[350px]",
      date: "February 5, 2025",
    },
    {
      id: 13,
      image: "/assets/Article/a13.jpg",
      title: "The Evolution of Model Agencies in London: A Look Back at a Glamorous Industry",
      description: "London, one of the world’s most vibrant fashion capitals, has long been synonymous with the allure and sophistication of the modeling industry. For decades, models i ...MORE",
      imageHeight: "h-[450px]",
      date: "February 7, 2025",
    },
    {
      id: 14,
      image: "/assets/Article/a14.jpg",
      title: "Joaquin Morodo: From Model to Musician, A Journey Across Art, Fashion, and Culture",
      description: "Joaquin Morodo’s life reads like a multi-layered novel, weaving through modeling, art, music, and entrepreneurship. Born in Madrid in 1983, Joaquin’s journey from co ...MORE",
      imageHeight: "h-[400px]",
      date: "February 9, 2025",
    },
    {
      id: 15,
      image: "/assets/Article/a15.jpg",
      title: "Iconic Status Bags That Models, Modeling Agencies, and Fashion Enthusiasts in Milan and Germany Should Know",
      description: "In the world of fashion, certain bags have transcended trends to become timeless status symbols. For models and the best modeling agencies operating in fashion hubs ...MORE",
      imageHeight: "h-[500px]",
      date: "February 11, 2025",
    },
  ];
  const ArticleItem = ({ article }) => {
    const { ref, inView } = useInView({
      triggerOnce: true, // Trigger animation only once
      threshold: 0.1, // Trigger when 10% of the item is visible
    });
  
    const [isHovered, setIsHovered] = useState(false); // State to track hover
  
    return (
      <div
        ref={ref}
        className={`masonry-item bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-opacity duration-1000 ease-in-out ${
          inView ? "opacity-100" : "opacity-0"
        }`}
        onMouseEnter={() => setIsHovered(true)} // Set hover state to true
        onMouseLeave={() => setIsHovered(false)} // Set hover state to false
      >
        <div className="relative">
          {/* Image */}
          <img
            src={article.image}
            alt={article.title}
            className={`w-full ${article.imageHeight} object-cover`}
          />
  
          {/* Share Text or Icons */}
          <div className="absolute top-2 right-2 flex items-center space-x-2 transition-all duration-1900 ease-in-out">
            {!isHovered ? (
              <span className="text-white uppercase tracking-[5px] bg-opacity-50 px-2 py-1 rounded text-sm transition-all duration-1000 ease-in-out opacity-100">
                Share
              </span>
            ) : (
              <div className="flex  transition-all duration-700 ease-in-out opacity-100">
                <a
                  href="#" // Replace with your Facebook share link
                  className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-all duration-700 ease-in-out"
                >
                  <FaFacebook size={18} />
                </a>
                <a
                  href="#" // Replace with your Instagram share link
                  className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-all duration-700 ease-in-out"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="#" // Replace with your Pinterest share link
                  className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-all duration-700 ease-in-out"
                >
                  <FaPinterest size={18} />
                </a>
              </div>
            )}
          </div>
        </div>
  
        {/* Article Content */}
        <div className="p-4 pt-y">
          <p className="text-gray-700 mb-1">{article.date}</p>
          <h2 className="text-gray-950 font-serif text-xl font-bold mb-2">{article.title}</h2>
          <p className="text-gray-600">{article.description}</p>
        </div>
      </div>
    );
  };
  
  const Article = () => {
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.2, // Trigger when 20% is visible
      });
      const { ref: buttonRef, inView: buttonInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });
    return (

        <>
         <p
        ref={titleRef}
        className={`items-center  text-white text-center text-lg transition-all duration-1000 ease-in-out transform ${
          titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="font-semibold text-3xl mr-3 hover:cursor-pointer">culture</span>
        Our news articles about the modeling industry.
      </p>
      <div className="masonry-grid p-6">
        {articles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </div>
       <div
        ref={buttonRef}
        className={`flex justify-center mt-6 transition-all duration-1000 ease-in-out transform ${
          buttonInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <button className="bg-purple-600 text-white px-6 py-3 mb-6 rounded-lg hover:bg-purple-700 active:bg-purple-800 focus:ring-4 focus:ring-purple-300 transition-all duration-500 shadow-md">
          Load More posts
        </button>
      </div>


      </>
    );
  };

export default Article;
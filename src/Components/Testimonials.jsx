import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Testimonial data (can be fetched from an API or stored locally)
const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    role: 'Signed Model',
    quote: 'Joining this agency was the best decision I ever made for my career. The team is incredibly supportive and professional!',
    image: '/assets/test/t1.jpg', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Michael Carter',
    role: 'Fashion Photographer',
    quote: 'The level of talent and professionalism at this agency is unmatched. Highly recommend working with them!',
    image: '/assets/test/t2.jpg', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'Sophia Lee',
    role: 'Parent of Child Model',
    quote: 'The team has been amazing with my daughter. They prioritize her well-being and have given her incredible opportunities.',
    image: '/assets/test/t3.jpg', // Replace with actual image URL
  },
  {
    id: 4,
    name: 'David Smith',
    role: 'Experienced Model',
    quote: 'This agency truly understands my strengths and has helped me secure consistent, high-quality work.',
    image: '/assets/test/t4.jpg', // Replace with actual image URL
  },
  {
    id: 5,
    name: 'Laura Brown',
    role: 'New Face Division',
    quote: 'The training and guidance I received were invaluable. I’m so grateful for their dedication and expertise!',
    image: '/assets/test/t5.jpg', // Replace with actual image URL
  },
];

const Testimonials = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to scroll left
  const scrollLeft = () => {
    const container = document.getElementById('testimonial-container');
    container.scrollBy({ left: -300, behavior: 'smooth' }); // Adjust scroll distance as needed
    setScrollPosition(container.scrollLeft - 300);
  };

  // Function to scroll right
  const scrollRight = () => {
    const container = document.getElementById('testimonial-container');
    container.scrollBy({ left: 300, behavior: 'smooth' }); // Adjust scroll distance as needed
    setScrollPosition(container.scrollLeft + 300);
  };

  // Animation variants for Framer Motion
  const cardVariants = {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-12 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What People Are Saying</h2>

        {/* Testimonials Container */}
        <div className="relative">
          <div
            id="testimonial-container"
            className="flex overflow-x-hidden scroll-snap-x-mandatory space-x-6 pb-6"
            style={{ scrollBehavior: 'smooth' }}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="min-w-[200px] md:min-w-[300px] bg-white p-8 rounded-xl shadow-lg text-center flex-shrink-0 scroll-snap-align-start transform transition-transform duration-300 hover:scale-105"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-40 object-cover h-40 rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                <p className="text-gray-600 mb-4">{testimonial.role}</p>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>

          {/* Gradient Overlays to Hide Overflow */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          &#8592; {/* Left Arrow */}
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          &#8594; {/* Right Arrow */}
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
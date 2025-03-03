import React, { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "They did a great job. I would recommend them to anyone.",
    name: "Julius Von Uberstien",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    text: "Elexis Corp. has grown immensely with the help of Minimal.",
    name: "Rachel Stamos",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    text: "The team was professional, prompt, and exceeded our expectations.",
    name: "Michael Davis",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    text: "We are thrilled with the results. Highly recommended!",
    name: "Sarah Lee",
    image: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: 5,
    text: "Fantastic service and support! Highly impressed.",
    name: "John Doe",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    id: 6,
    text: "They exceeded my expectations at every turn!",
    name: "Emily Clark",
    image: "https://i.pravatar.cc/100?img=6",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 3) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent(
      (prev) => (prev - 3 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Automatically move to the next set of cards
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 bg-[#d3d7e9]">
      {/* Top Quote Icon */}
      <div className="text-5xl text-black mb-6">
        <span>&#10078;</span>
      </div>

      {/* Testimonial Cards Section */}
      <div className="flex items-center space-x-6 max-w-6xl mx-auto">
        {/* Previous Arrow */}
        <button
          onClick={handlePrev}
          className="text-gray-500 hover:bg-gray-300 px-2 rounded-full hover:text-black transition duration-200 text-xl"
        >
          &#10094;
        </button>

        {/* Testimonial Cards */}
        <div className="grid font-robotoSerif grid-cols-1 sm:grid-cols-3 gap-6">
          {testimonials.slice(current, current + 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center bg-[#c1c8eb] shadow-md p-6 rounded-md text-center max-w-xs w-full mx-auto"
            >
              <p className="text-gray-800 italic mb-4">"{testimonial.text}"</p>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-2"
              />
              <h3 className="text-gray-900 font-semibold">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={handleNext}
          className="text-gray-500 hover:bg-gray-300 px-2 rounded-full hover:text-black transition duration-200 text-xl"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;

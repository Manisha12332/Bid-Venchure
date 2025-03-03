import React from "react";
import Slider from "react-slick";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    "https://bidvenchure.com/static/media/BidVentureSliderImage%20(1).f9546fe176f7b530b2ec.png",
    "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlJTIwaW4lMjByZXN0YXVyYW50fGVufDB8fDB8fHww",
    "https://bidvenchure.com/static/media/BidVentureSliderImage%20(2).04f657ff5f2f5c6e46a0.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div className="mt-4">
        <ul className="flex justify-center space-x-2">
          {dots.map((dot, index) => (
            <li key={index} className="inline-block">
              {dot}
            </li>
          ))}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full cursor-pointer bg-gray-300 hover:bg-gray-500 slick-active:bg-blue-600 slick-active:w-4 slick-active:h-4 transition-all duration-300"></div>
    ),
  };

  return (
    <div className="sliderContainer mt-24 w-full p-1 sm:pt-1 sm:pb-1 md:p-4 lg:px-6 relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="rounded-xl w-full object-cover bg-center border shadow-md max-sm:h-[150px] max-md:h-[200px] lg:h-[600px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-gray-200 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition-colors duration-300 hidden sm:inline"
    onClick={onClick}
  >
    <GoChevronRight />
  </button>
);

// Custom Prev Arrow Component
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 p-2 bg-gray-200 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition-colors duration-300 hidden sm:inline"
    onClick={onClick}
  >
    <GoChevronLeft />
  </button>
);

export default Carousel;

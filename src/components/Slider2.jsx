import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const API_URL = "http://46.202.164.93:7002/api/common/get-banner";
const IMAGE_BASE_URL = "http://46.202.164.93:7002/api/uploads/"; // Corrected image base URL

const Carousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data.banners && data.banners.length > 0 && data.banners[0].images) {
          setImages(
            data.banners[0].images.map((img) => `${IMAGE_BASE_URL}${img}`)
          );
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

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

const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-gray-200 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition-colors duration-300 hidden sm:inline"
    onClick={onClick}
  >
    <GoChevronRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 p-2 bg-gray-200 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition-colors duration-300 hidden sm:inline"
    onClick={onClick}
  >
    <GoChevronLeft />
  </button>
);

export default Carousel;

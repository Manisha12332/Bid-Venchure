import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ResturantSlide = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");
  const images = [
    "https://www.barbequenation.com/_next/image?url=%2Fimages%2Fservice1.jpg&w=1200&q=75",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR64yfcqMSA6tTeLpRCEPl-WWLU7ppXStnLBA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSRomhrEfCaMM8RCZ4lUB-78ze3reBj9p6NQ&s",
    "https://i.ytimg.com/vi/nCA7UjPvqS4/maxresdefault.jpg",
    "https://images.jdmagicbox.com/v2/comp/delhi/s1/011pxx11.xx11.130513180419.d6s1/catalogue/chili-s-restaurant-saket-delhi-multicuisine-restaurants-0ve3q0aaqv.jpg",
    "https://static.wixstatic.com/media/bbc2f7_95e7d6788a2642b6adc1a6b200b647d6~mv2.jpg/v1/fill/w_640,h_440,al_b,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bbc2f7_95e7d6788a2642b6adc1a6b200b647d6~mv2.jpg",
    "https://www.indiablooms.com/storage/assets/n/2022/1038afb937a41ebec6634b2ca78ca164.JPG",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0sffm7Anz6dcqnOtLl903Mo7cmyyVouDBQg&s",
    "https://c.ndtvimg.com/2020-08/ulbbe1ng_farzi-cafe-_625x300_25_August_20.jpg",
    "https://b.zmtcdn.com/data/pictures/7/19008947/85a6505018e5fe276db5ed5d11692fce.jpg",
  ];

  const captions = [
    "Barbeque Nation",
    "Gulati",
    "The Big Chill",
    "Pizzeria Da Susy",
    "Chili's Grill & Bar",
    "Indian Accent",
    "Warehouse Café",
    "Olive Bar & Kitchen",
    "Farzi Café",
    "Daryaganj",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleClick = (event) => {
    setSelectedEvent(event);
    setShowForm(true);
  };

  return (
    <div className=" sliderContainer mt-1 w-full lg:p-4 sm:pt-1 sm:pb-1 md:p-6 lg:pt-0 lg:pl-10 lg:pr-10 relative">
      <h1 className="text-5xl font-robotoSerif text-center font-bold mb-5 mt-[-30px]">
        Our Associates
      </h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="text-center"
            onClick={() => handleClick(captions[index])}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-[150px] h-[150px] rounded-full object-cover bg-center border shadow-md mx-auto"
            />
            <p className="text-lg font-robotoSerif font-medium mt-2 text-black">
              {captions[index]}
            </p>
          </div>
        ))}
      </Slider>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl text-center text-orange-500 font-bold mb-2">
              Book Restaurant
            </h2>
            <h2 className="text-lg font-semibold  mb-2">
              Resturant: {selectedEvent}
            </h2>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="number"
              placeholder="Enter your Mobile number"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              placeholder="Enter your Address"
              className="w-full p-2 border rounded mb-2"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setShowForm(false)}
            >
              Submit
            </button>
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded ml-2"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResturantSlide;

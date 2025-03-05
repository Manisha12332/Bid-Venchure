import React, { useState } from "react";
import "./Banner.css";
import image from "../images/image.jpg.jpg";
import image2 from "../images/image2.jpg";

const Banner = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isJoinPopupOpen, setIsJoinPopupOpen] = useState(false);

  const toggleEventPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleJoinPopup = () => {
    setIsJoinPopupOpen(!isJoinPopupOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[40px] min-h-screen">
      <div className="flex flex-col sm:flex-row w-full h-full gap-6 px-2 md:px-8">
        {/* Post Your Event Section */}
        <div className="flex-1 p-4 bg-[#7e9eac] shadow-lg rounded-lg flex flex-col items-center justify-center border-r border-gray-200">
          <img
            src={image}
            alt="Post Event"
            className="w-full sm:w-5/6 h-64 sm:h-80 rounded-lg object-cover mb-4"
          />
          <div className="text-center px-6">
            <p className="text-black font-robotoSerif text-lg sm:text-xl md:text-2xl font-semibold mb-1">
              Let restaurants compete for your event.
            </p>
            <p className="text-black font-robotoSerif text-sm sm:text-lg font-medium mb-3">
              Save time, money, and stress by posting your event now.
            </p>
            <button
              className="text-white font-robotoSerif font-bold bg-black px-6 py-3 sm:py-4 rounded-md shadow-lg transition-all duration-300 hover:shadow-[0_0_10px_4px_#ffcc00]"
              onClick={toggleEventPopup}
            >
              Post Your Event Now
            </button>
          </div>
        </div>

        {/* Join as Restaurant Section */}
        <div className="flex-1 bg-[#7e9eac] p-4 shadow-lg rounded-lg flex flex-col items-center justify-center">
          <img
            src={image2}
            alt="Join as Restaurant"
            className="w-full sm:w-5/6 h-64 sm:h-80 rounded-lg object-cover mb-4"
          />
          <div className="text-center px-6">
            <p className="text-black font-robotoSerif text-lg sm:text-xl md:text-2xl font-semibold mb-1">
              Showcase your services to customers.
            </p>
            <p className="text-black font-robotoSerif text-sm sm:text-lg font-medium mb-3">
              Sign up and start bidding on local events today.
            </p>
            <button
              className="text-white font-robotoSerif font-bold bg-black px-6 py-3 sm:py-4 rounded-md shadow-lg transition-all duration-300 hover:shadow-[0_0_10px_4px_#ffcc00]"
              onClick={toggleJoinPopup}
            >
              Join as a Restaurant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

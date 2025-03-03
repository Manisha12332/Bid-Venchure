import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { ImMail3 } from "react-icons/im";
import man1 from "../images/man1.png";

const OurTeamSection = () => {
  return (
    <div id="team" className="bg-whitesmoke py-10">
      {/* Section Title */}
      <h1 className="text-center font-robotoSerif mb-10 text-2xl font-bold relative pb-4">
        OUR TEAM
        <span className="block w-[80px] h-0.5 bg-gray-200 absolute left-1/2 bottom-0 -translate-x-1/2" />
      </h1>

      {/* Team Grid */}
      <div className="grid font-robotoSerif grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {/* Team Card */}
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className=" bg-[#d3d7e9] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 max-w-sm mx-auto"
          >
            <div className="mb-4">
              <img
                src={man1}
                alt="Team Member"
                className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] object-cover rounded-full mx-auto"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg text-gray-700">Ron Swanson</p>
              <p className="text-gray-500 mb-4">Founder</p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-500 transition-colors"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-700 transition-colors"
                >
                  <FaLinkedinIn size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-red-500 transition-colors"
                >
                  <ImMail3 size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeamSection;

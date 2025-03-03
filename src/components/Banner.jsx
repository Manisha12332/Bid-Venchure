import React, { useState } from "react";
import "./Banner.css";

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
    <div className="flex flex-col items-center justify-center mt-1 min-h-screen">
      <div className="flex flex-wrap mt-[-140px] w-full h-full gap-6 px-2 md:px-8">
        {/* Post Your Event Section */}
        <div className="flex-1 p-4 bg-[#ecb07f] shadow-lg rounded-lg flex flex-col items-center justify-center border-r border-gray-200">
          <img
            src="https://bidvenchure.com/static/media/postyourevent.cea00db952af44c42a66.png"
            alt="Post Event"
            className="w-full h-64 mt-[-30px] md:w-5/6 md:h-80 rounded-lg object-cover mb-4"
          />
          <div className="text-center px-6">
            <p className="text-black font-robotoSerif  text-xl md:text-2xl font-semibold mb-1">
              Let restaurants compete for your event.
            </p>
            <p className="text-black font-robotoSerif md:text-lg font-medium mb-3">
              Save time, money, and stress by posting your event now.
            </p>

            <button
              className="text-white font-robotoSerif font-bold bg-black px-6 py-4 rounded-md shadow-lg transition-all duration-300 hover:shadow-[0_0_10px_4px_#ffcc00]"
              onClick={toggleEventPopup}
            >
              Post Your Event Now
            </button>
          </div>
        </div>

        {/* Join as Restaurant Section */}
        <div className="flex-1 bg-[#ecb07f] p-4 shadow-lg rounded-lg flex flex-col items-center justify-center">
          <img
            src="https://bidvenchure.com/static/media/joinasrestaurent.1ad6b02f5da393755712.png"
            alt="Join as Restaurant"
            className="w-full h-64 md:w-5/6 md:h-80 rounded-lg object-cover mb-4"
          />
          <div className="text-center px-6">
            <p className="text-black font-robotoSerif  text-xl md:text-2xl font-semibold mb-1">
              Showcase your services to customers.
            </p>
            <p className="text-black font-robotoSerif md:text-lg font-medium mb-3">
              Sign up and start bidding on local events today.
            </p>
            <button
              className="text-white font-robotoSerif font-bold bg-black px-6 py-4 rounded-md shadow-lg transition-all duration-300 hover:shadow-[0_0_10px_4px_#ffcc00]"
              onClick={toggleJoinPopup}
            >
              Join as a Restaurant
            </button>
          </div>
        </div>
      </div>

      {/* Event Popup */}
      {isPopupOpen && (
        <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
          <div className="bg-white p-8 mt-[440px] rounded-lg shadow-lg max-w-4xl w-full relative">
            <button
              className="absolute top-3 right-5 text-black"
              onClick={toggleEventPopup}
            >
              X
            </button>
            <h1 className="text-3xl font-bold text-center text-[#4A90E2] mb-4">
              Plan Your Perfect Event in Minutes
            </h1>
            <p className="text-center text-lg text-gray-600 mb-8">
              Tell us what you need, and let nearby restaurants offer their best
              deals.
            </p>
            <form>
              <div className="mb-6">
                <label
                  htmlFor="event-type"
                  className="block text-lg font-medium text-gray-700"
                >
                  Event Type
                </label>
                <select
                  id="event-type"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                >
                  <option value="birthday">Birthday</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="event-date"
                  className="block text-lg font-medium text-gray-700"
                >
                  Event Date and Time
                </label>
                <input
                  id="event-date"
                  type="datetime-local"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="guests"
                  className="block text-lg font-medium text-gray-700"
                >
                  Number of Guests
                </label>
                <input
                  id="guests"
                  type="number"
                  placeholder="e.g., 50 people"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              {/* Budget Per Guest */}
              <div className="mb-6">
                <label
                  htmlFor="budget"
                  className="block text-lg font-medium text-gray-700"
                >
                  Budget Per Guest
                </label>
                <input
                  id="budget"
                  type="text"
                  placeholder="e.g., $25-$50 per guest"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                />
              </div>

              {/* Location */}
              <div className="mb-6">
                <label
                  htmlFor="location"
                  className="block text-lg font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="City or specific area"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                />
              </div>

              {/* Additional Preferences */}
              <div className="mb-6">
                <label
                  htmlFor="preferences"
                  className="block text-lg font-medium text-gray-700"
                >
                  Additional Preferences
                </label>
                <textarea
                  id="preferences"
                  rows="4"
                  placeholder="e.g., Vegan options, outdoor seating, etc."
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#4A90E2] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#357ABD] transition duration-300"
                >
                  Post Your Event Now and Start Receiving Offers!
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Join as Restaurant Popup */}
      {isJoinPopupOpen && (
        <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
          <div className="bg-white p-8 mt-[200px] rounded-lg shadow-lg max-w-4xl w-full relative">
            <button
              className="absolute top-3 right-5 text-black"
              onClick={toggleJoinPopup}
            >
              X
            </button>
            <h2 className="text-3xl font-bold text-center text-[#4A90E2] mb-4">
              Join as a Restaurant
            </h2>
            <form>
              <div className="mb-6">
                <label
                  htmlFor="restaurant-name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Owner Name
                </label>
                <input
                  id="restaurant-name"
                  type="text"
                  placeholder="Enter Owner Name"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="restaurant-name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Restaurant Name
                </label>
                <input
                  id="restaurant-name"
                  type="text"
                  placeholder="Enter Restaurant Name"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="city"
                  className="block text-lg font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Enter City"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="restaurant-name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter Email Address"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="restaurant-name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  type="number"
                  placeholder="Enter Mobile Number"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#4A90E2] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#357ABD] transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;

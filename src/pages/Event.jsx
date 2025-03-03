import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Event = () => {
  return (
    <div>
      <Header />

      <section className="bg-[#f5f5f5] py-16 px-6 font-robotoSerif mt-20">
        <div className="container mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-orange-500 mb-4">
            Plan Your Perfect Event in Minutes
          </h1>
          <p className="text-center text-lg text-gray-600 mb-8">
            Tell us what you need, and let nearby restaurants offer their best
            deals.
          </p>

          <form>
            {/* Event Type */}
            <div className="mb-6 overflow-y-auto">
              <label
                htmlFor="event-type"
                className="block text-lg font-medium text-orange-500"
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

            {/* Event Date and Time */}
            <div className="mb-6">
              <label
                htmlFor="event-date"
                className="block text-lg font-medium text-orange-500"
              >
                Event Date and Time
              </label>
              <input
                id="event-date"
                type="datetime-local"
                className="mt-2 w-full p-3 border border-gray-300 rounded-md"
              />
            </div>

            {/* Number of Guests */}
            <div className="mb-6">
              <label
                htmlFor="guests"
                className="block text-lg font-medium text-orange-500"
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
                className="block text-lg font-medium text-orange-500"
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
                className="block text-lg font-medium text-orange-500"
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
                className="block text-lg font-medium text-orange-500"
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

            {/* CTA Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-[#357ABD] transition duration-300"
              >
                Post Your Event Now and Start Receiving Offers!
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Event;

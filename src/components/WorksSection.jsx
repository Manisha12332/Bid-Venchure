import React from 'react';

const WorksSection = () => {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* For Customers */}
          <div>
            <h3 className="text-xl font-semibold mb-4">For Customers:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                Post your event details—date, type, budget, and preferences.
              </li>
              <li>
                Receive bids from nearby restaurants eager to host your event.
              </li>
              <li>
                Compare offers, chat with restaurants, and lock in your booking.
              </li>
            </ol>
          </div>
          {/* For Restaurants */}
          <div>
            <h3 className="text-xl font-semibold mb-4">For Restaurants:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                Sign up and create your profile to showcase your offerings.
              </li>
              <li>Get notified of nearby event opportunities.</li>
              <li>
                Submit competitive bids and win bookings based on value.
              </li>
            </ol>
          </div>
        </div>
        {/* Call-to-Action */}
        <div className="mt-10">
          <p className="text-lg font-medium text-gray-800 mb-4">
            Ready to get started? Post your event or sign up as a restaurant today!
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorksSection;

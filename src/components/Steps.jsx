import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Steps = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-50 py-16">
        {/* Heading */}
        <motion.div
          className="container mx-auto px-6 lg:px-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold font-robotoSerif text-black mb-6">
            How It Works
          </h1>
          <p className="text-lg font-robotoSerif text-gray-600 mb-12">
            See how our platform connects customers and restaurants seamlessly.
          </p>
        </motion.div>

        {/* Steps Section */}
        <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* For Customers */}
          <div>
            <h2 className="text-4xl font-robotoSerif font-bold text-red-600 mb-6">
              For Customers
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 text-white  mt-2  p-5 rounded-full">
                  <i className="fas fa-user-plus text-xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-robotoSerif mb-2 font-semibold">
                    Sign up and fill out a simple event form
                  </h3>
                  <p className="text-gray-600 font-robotoSerif text-lg">
                    Create an account and share the details of your upcoming
                    event.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 text-white mt-2 p-5 rounded-full">
                  <i className="fas fa-envelope-open-text text-xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-robotoSerif font-semibold">
                    Get personalized bids from nearby restaurants
                  </h3>
                  <p className="text-gray-600 font-robotoSerif text-lg">
                    Restaurants in your area will send you custom offers based
                    on your needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 text-white  mt-2  p-5 rounded-full">
                  <i className="fas fa-user-plus text-xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-robotoSerif mb-2 font-semibold">
                    Chat, compare, and confirm your booking
                  </h3>
                  <p className="text-gray-600 font-robotoSerif text-lg">
                    Communicate with restaurants, compare offers, and finalize
                    your booking.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* For Restaurants */}
          <div>
            <h2 className="text-4xl font-bold text-blue-600 mb-6">
              For Restaurants
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white mt-2  p-5 rounded-full">
                  <i className="fas fa-utensils text-xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-robotoSerif font-semibold">
                    Create a profile to highlight your services
                  </h3>
                  <p className="text-gray-600 font-robotoSerif text-lg">
                    Sign up and build your restaurant profile to showcase your
                    offerings.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white mt-2  p-5 rounded-full">
                  <i className="fas fa-search text-xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-robotoSerif font-semibold">
                    Browse active event opportunities in your area
                  </h3>
                  <p className="text-gray-600 font-robotoSerif text-lg">
                    Look for events in your area and start bidding on those that
                    match your expertise.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white mt-2  p-5 rounded-full">
                  <i className="fas fa-search text-xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-robotoSerif font-semibold">
                    Submit bids and secure bookings effortlessly
                  </h3>
                  <p className="text-gray-600 font-robotoSerif text-lg">
                    Submit your offers and secure bookings with just a few
                    clicks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Steps;

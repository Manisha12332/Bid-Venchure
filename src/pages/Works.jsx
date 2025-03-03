import Header from "../components/Header";
import Footer from "../components/Footer";

const Works = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-50 py-8 mt-20">
        <div className="w-full max-w-[1600px] mx-auto px-12 lg:px-24 text-center">
          {/* Heading */}
          <h1 className="text-4xl font-bold font-robotoSerif  text-gray-800 mb-2">
            Plan Smarter. Book Faster.
          </h1>

          {/* Subheading */}
          <p className="text-lg font-robotoSerif text-gray-600 mb-12">
            See how our platform connects customers and restaurants seamlessly.
          </p>
          <div className="flex">
            <div className="ml-6 mb-10">
              <img
                src="https://bidvenchure.com/static/media/postyourevent.cea00db952af44c42a66.png"
                alt="Post Event"
                className="w-[1400px] h-[300px] md:w-[1400px] md:h-[400px] rounded-lg object-cover shadow-lg"
              />
            </div>
            <div className="ml-6">
              <img
                src="https://bidvenchure.com/static/media/joinasrestaurent.1ad6b02f5da393755712.png"
                alt="Join as Restaurant"
                className="w-[1400px] h-[300px] md:w-[1400px] md:h-[400px] rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Step-by-Step Guide */}
          <div className="grid grid-cols-1 ml-7 md:grid-cols-2 gap-6 mb-16">
            {/* For Customers */}
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold font-robotoSerif text-black mb-6">
                For Customers
              </h2>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#d2273f] text-white p-3 -mt-16 rounded-full">
                    <i className="fas fa-sign-in-alt text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-robotoSerif font-semibold text-justify text-gray-800">
                      Step 1: Sign up and fill out a simple event form.
                    </h3>
                    <p className="text-gray-600 text-justify text-md font-robotoSerif">
                      Create an account and share the details of your upcoming
                      event.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#d2273f] text-white p-3 -mt-16 rounded-full">
                    <i class="fas fa-comment-dollar"></i>
                  </div>
                  <div>
                    <h3 className="text-xl text-justify font-robotoSerif font-semibold text-gray-800">
                      Step 2: Get personalized bids from nearby restaurants.
                    </h3>
                    <p className="text-gray-600 text-justify font-robotoSerif">
                      Restaurants in your area will send you custom offers based
                      on your needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#d2273f] text-white p-3 -mt-16 rounded-full">
                    <i className="fas fa-comments text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl  font-robotoSerif text-justify font-semibold text-gray-800">
                      Step 3: Chat, compare, and confirm your booking.
                    </h3>
                    <p className="text-gray-600 text-justify font-robotoSerif">
                      {" "}
                      Communicate with restaurants, compare offers, and finalize
                      your booking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Restaurants */}
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold font-robotoSerif text-black mb-6">
                For Restaurants
              </h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#d2273f] text-white p-3 -mt-16 rounded-full">
                    <i className="fas fa-user-plus text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-robotoSerif font-semibold text-justify text-gray-800">
                      Step 1: Create a profile to highlight your services.
                    </h3>
                    <p className="text-gray-600 text-justify text-md font-robotoSerif">
                      Sign up and build your restaurant profile to showcase your
                      offerings.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#d2273f] text-white p-3  -mt-16 rounded-full">
                    <i className="fas fa-search text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-robotoSerif font-semibold text-justify text-gray-800">
                      Step 2: Browse active event opportunities in your area.
                    </h3>
                    <p className="text-gray-600 text-justify text-md font-robotoSerif">
                      Look for events in your area and start bidding on those
                      that match your expertise.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#d2273f] text-white p-3  -mt-16 rounded-full">
                    <i className="fas fa-handshake text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-robotoSerif font-semibold text-justify text-gray-800">
                      Step 3: Submit bids and secure bookings effortlessly.
                    </h3>
                    <p className="text-gray-600 text-justify text-md font-robotoSerif">
                      Submit your offers and secure bookings with just a few
                      clicks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-[url('https://img.freepik.com/free-vector/watercolor-emerald-background_23-2150270303.jpg')] bg-cover bg-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-[250px] mt-8 w-full ml-5 max-w-[1280px] mx-auto backdrop-blur-md flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold font-robotoSerif text-white mb-6 text-center">
              Join us today and make event planning a breeze!
            </h2>

            {/* Radio Buttons */}
            <div className="flex items-center space-x-6 text-white mb-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="cta-option"
                  className="form-radio text-blue-500 w-5 h-5"
                />

                <span className="font-robotoSerif text-lg">
                  Post your event
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="cta-option"
                  className="form-radio text-blue-500 w-5 h-5"
                  checked
                />
                <span className="font-robotoSerif text-lg">
                  Join as a restaurant
                </span>
              </label>
            </div>

            {/* Button */}
            <button className="bg-white text-lg text-[#2b3560] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Works;

const WhyChoose = () => {
  return (
    <section className="container mt-[-230px] ml-[18px] mx-auto px-4 py-16">
      {/* Heading Section */}
      <div className="text-center md:text-left">
        <h1 className="text-6xl font-robotoSerif font-bold text-black ">
          Why Choose Us
        </h1>
        <h3 className="text-2xl font-robotoSerif font-bold text-orange-600 mt-2">
          Discover the Benefits
        </h3>
        <p className="text-black font-robotoSerif mt-3 max-w-2xl text-lg ">
          We offer tailored solutions that save time, reduce costs, and deliver
          value for both customers and restaurants.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="mt-10  flex flex-col md:flex-row items-start gap-6">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          {/* Card 1 */}
          <div className="flex items-start bg-gray-50 rounded-lg p-5 shadow-lg">
            <div className=" hover:bg-orange-500 w-16 h-20 flex items-center justify-center bg-purple-500 text-white rounded-full">
              🔄
            </div>
            <div className="ml-4">
              <h4 className="text-2xl font-robotoSerif font-semibold">
                Save Time
              </h4>
              <p className="text-gray-600 font-robotoSerif ">
                Receive tailored offers from multiple restaurants without
                lifting a finger.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start bg-gray-50 rounded-lg p-5 shadow-lg">
            <div className=" hover:bg-orange-500 w-16 h-20 flex items-center justify-center bg-yellow-500 text-white rounded-full">
              💰
            </div>
            <div className="ml-4">
              <h4 className="text-2xl font-robotoSerif  font-robotoSerif  font-semibold">
                Transparent Pricing
              </h4>
              <p className="text-gray-600 font-robotoSerif font-robotoSerif ">
                Compare competitive bids and choose the best fit for your
                budget.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex items-start bg-gray-50 rounded-lg p-5 shadow-lg">
            <div className=" hover:bg-orange-500 w-16 h-20 flex items-center justify-center bg-green-500 text-white rounded-full">
              💰
            </div>
            <div className="ml-4">
              <h4 className="text-2xl font-robotoSerif  font-semibold">
                Endless Options
              </h4>
              <p className="text-gray-600 font-robotoSerif ">
                Access a variety of restaurants and event services for every
                occasion.
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="flex items-start bg-gray-50 rounded-lg p-5 shadow-lg">
            <div className=" hover:bg-orange-500 w-16 h-20 flex items-center justify-center bg-red-500 text-white rounded-full">
              💰
            </div>
            <div className="ml-4">
              <h4 className="text-2xl font-robotoSerif  font-semibold">
                Win-Win Model
              </h4>
              <p className=" font-robotoSerif text-gray-600 text-md">
                Customers get great deals; restaurants fill bookings and boost
                revenue.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block flex-1">
          <img
            src="https://bidvenchure.com/static/media/event.e35139a90f8066beeee7.jpg" // Update the path to your actual image location
            alt="Celebration"
            className="w-[615px] h-[488px] ml-16"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

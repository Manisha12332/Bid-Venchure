import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Service from "./Service.css";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const testimonials = [
    {
      text: "This platform has transformed our business! We've doubled our event bookings in just three months.",
      author: "Chef Anthony, Italian Bistro",
    },
    {
      text: "We've seen remarkable growth in revenue since joining. Highly recommended!",
      author: "Sarah Thompson, Event Planner",
    },
    {
      text: "An amazing tool to connect with clients. It’s simple and effective!",
      author: "Michael Davis, Catering Manager",
    },
  ];

  const images = [
    "/path/to/image1.jpg", // Replace with actual image paths
    "/path/to/image2.jpg",
    "/path/to/image3.jpg",
    "/path/to/image4.jpg",
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-50 py-16 mt-20">
        <div className="max-w-screen-3xl mx-auto px-6 lg:px-24 text-center">
          {/* Heading */}
          <h1 className="text-5xl font-robotoSerif font-bold text-gray-800 mb-6">
            Turn Opportunities into Bookings
          </h1>

          {/* Subtext */}
          <p className="w-full  font-robotoSerif  text-xl text-gray-600 mb-12">
            Fill empty tables, boost your visibility, and grow your revenue. Our
            platform helps you connect with event organizers looking for your
            services.
          </p>

          <ServiceCard />

          {/* Slider Section */}
          <div className="overflow-hidden ">
            <h2 className="text-3xl  font-robotoSerif  font-bold text-gray-800 m-8">
              Success Stories
            </h2>
            <div className="flex gap-4 font-robotoSerif animate-scroll whitespace-nowrap  ">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className=" text-gray-800  font-robotoSerif  p-4  h-[100px] py-8 rounded-lg shadow-lg min-w-[300px]  bg-[#d3d7e9]"
                >
                  <p className="italic font-robotoSerif">{item.text}</p>
                  <p className="text-sm font-robotoSerif font-semibold mt-2">
                    {item.author}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-[url('https://img.freepik.com/free-vector/watercolor-emerald-background_23-2150270303.jpg')] bg-cover bg-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-[278px]  mt-10">
            <h2 className="text-3xl font-robotoSerif font-semibold mt-20 mb-4 text-white">
              Sign up today and start winning more business!
            </h2>
            <button className="bg-white text-xl font-robotoSerif  text-[#2b3560] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;

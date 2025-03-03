import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

const ContactUs = () => {
  return (
    <>
    <Header />
    <div className="bg-[#d3d7e9] py-16 px-6 text-white mt-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        {/* Left Column: Join Our Newsletter Section as Big Card */}
        <div className="   lg:w-1/2 space-y-6">
          <div className="bg-white text-gray-700 rounded-lg shadow-2xl p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Join Our Bid Venchure</h1>
            <p className="text-lg mb-6">
              Nam ultricies ultricies nec tortor pulvinar esteras loremips est orem.
            </p>
            <div className="space-y-4">
              <p>
                <strong>Address:</strong> 3045 10 Sunrize Avenue, 123-456-7890
              </p>
              <p>
                <strong>Working Hours:</strong> Mon - Fri: 9:00 am - 8:00 pm, Sat - Sun: 9:00 am - 10:00 pm
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:contacts@esbnyc.com" className="text-blue-400 hover:underline">
                  contacts@esbnyc.com
                </a>
              </p>
              <div className="flex space-x-4 text-lg mt-6">
                <a href="#" className="hover:text-blue-400">Facebook</a>
                <a href="#" className="hover:text-blue-400">Twitter</a>
                <a href="#" className="hover:text-blue-400">LinkedIn</a>
                <a href="#" className="hover:text-blue-400">Pinterest</a>
              </div>
              <p className="text-xs mt-4">©2022 Privacy Policy</p>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:w-1/2 bg-white text-gray-700 p-8 rounded-lg shadow-xl ml-5">
          <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">Contact Us</h2>
          <form>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium">Enter your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your Name"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium">Enter a valid email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-medium">Enter your message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="4"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg hover:bg-purple-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>

<Footer/>

    </>
  );
};

export default ContactUs;

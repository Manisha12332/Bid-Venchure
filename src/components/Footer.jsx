import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#3F2354] text-white py-10 px-6">
      <div className="max-w-[1280px] mx-auto flex flex-wrap justify-between">
        {/* Left Section - Brand and Social Links */}
        <div className="w-full font-robotoSerif md:w-1/3">
          <h2 className="text-3xl font-robotoSerif font-bold text-red-500">
            Bid <span className="text-white font-robotoSerif">Venchure</span>
          </h2>
          <p className="mt-4 text-lg font-robotoSerif">
            Effortlessly plan your event by letting restaurants bid for your
            business. Save time, money, and stress.
          </p>
          {/* Social Icons */}
          <div className="flex mt-8  space-x-4">
            <FaFacebookF className="w-6 h-6 cursor-pointer" />
            <FaTwitter className="w-6 h-6 cursor-pointer" />
            <FaInstagram className="w-6 h-6 cursor-pointer" />
            <FaLinkedinIn className="w-6 h-6 cursor-pointer" />
          </div>
        </div>

        {/* Middle Section - Pages Links */}
        <div className="w-full md:w-1/6 ml-[-154px] mt-[24px]">
          <h3 className="font-semibold ml-40 font-robotoSerif text-lg mb-4 ">
            Pages
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-gray-300 font-robotoSerif ml-40 "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/works"
                className="hover:text-gray-300 font-robotoSerif ml-40 "
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-gray-300 font-robotoSerif ml-40"
              >
                Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Middle Section - More Pages Links */}
        <div className="w-full md:w-1/6 md:mt-5  md:ml-[-30px] mt-[-133px] ml-[38px]">
          <h3 className="font-semibold font-robotoSerif  ml-[103px] text-lg mb-4">
            More Pages
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/event"
                className="hover:text-gray-300 font-robotoSerif ml-[103px]"
              >
                Event
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className="hover:text-gray-300 font-robotoSerif ml-[103px]"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="hover:text-gray-300 font-robotoSerif ml-[103px]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section - App Download */}
        <div className="w-full md:w-1/3 text-left">
          <h3 className="font-semibold font-robotoSerif text-lg mb-4 mt-5 md:ml-32">
            Download the app
          </h3>
          <div className="flex flex-col space-y-2 items-start">
            <div className="flex font-robotoSerif items-center space-x-2 md:ml-32">
              <FaGooglePlay className="w-6 h-6" />
              <span>Get it on Google Play</span>
            </div>
            <div className="flex  font-robotoSerif items-center space-x-2 md:ml-32">
              <FaApple className="w-6 h-6" />
              <span>Download on the App Store</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center font-robotoSerif text-sm border-t border-white/10 pt-4">
        © Copyright 2024, All Rights Reserved by Bid venchure. Pvt. ltd
      </div>
    </footer>
  );
};

export default Footer;

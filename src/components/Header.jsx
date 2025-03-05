import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import bidVentureLogo from "../images/logo.png";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Mobile Menu Icon */}
      <div className="fixed top-4 left-4 z-20 md:hidden">
        <MdOutlineMenu
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-3xl cursor-pointer"
        />
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } z-10 md:hidden w-3/4 sm:w-2/3 p-4`}
      >
        <nav className="flex flex-col items-center space-y-4 mt-4">
          {[
            { to: "/", label: "Home" },
            { to: "/works", label: "How It Works" },
            { to: "/services", label: "For Restaurant" },
            { to: "/event", label: "Post an Event" },
            { to: "/aboutus", label: "About Us" },
            { to: "/contactus", label: "Contact Us" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-lg sm:text-xl font-bold font-robotoSerif hover:text-indigo-600"
              onClick={() => setIsSidebarOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        {/* Social Media Icons for Mobile */}
        <div className="flex justify-center mt-4 space-x-4">
          <FaFacebook className="text-xl cursor-pointer hover:text-indigo-600" />
          <FaInstagram className="text-xl cursor-pointer hover:text-indigo-600" />
          <FaTwitter className="text-xl cursor-pointer hover:text-indigo-600" />
        </div>
      </aside>

      {/* Header for Desktop and Medium Screens */}
      <header className="flex flex-wrap justify-between items-center px-4 py-4 fixed top-0 z-10 shadow-md w-full min-h-16 bg-white md:flex-row flex-col space-y-2 md:space-y-0 lg:px-8 xl:px-16 2xl:px-20">
        {/* Logo */}
        <img
          src={bidVentureLogo}
          alt="Logo"
          className="w-32 sm:w-40 md:w-48 lg:w-56"
        />

        {/* Navigation Links and Social Media for Larger Screens */}
        <nav className="hidden md:flex flex-wrap items-center space-x-4 sm:space-x-6 lg:space-x-8 xl:space-x-6 2xl:space-x-16 text-lg md:ml-[56px] xl:ml-[80px] ">
          {[
            { to: "/", label: "Home" },
            { to: "/works", label: "How It Works" },
            { to: "/services", label: "For Restaurant" },
            { to: "/event", label: "Post an Event" },
            { to: "/aboutus", label: "About Us" },
            { to: "/contactus", label: "Contact Us" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-lg lg:text-xl font-bold font-robotoSerif hover:text-orange-500 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
          {/* Social Media Links for Larger Screens */}
          <div className="hidden md:flex space-x-4 lg:space-x-6  lg:ml-[775px]">
            <FaFacebook className="text-xl lg:text-2xl cursor-pointer hover:text-indigo-600" />
            <FaInstagram className="text-xl lg:text-2xl cursor-pointer hover:text-indigo-600" />
            <FaTwitter className="text-xl lg:text-2xl cursor-pointer hover:text-indigo-600" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

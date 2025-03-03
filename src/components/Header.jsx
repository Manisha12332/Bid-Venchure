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

      {/* Mobile Header Logo */}
      <div className="fixed top-4 right-4 z-20 md:hidden">
        <img src={bidVentureLogo} alt="Logo" className="w-24 sm:w-28" />
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
              className="text-xl font-bold font-robotoSerif hover:text-indigo-600"
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
      <header className="flex flex-wrap justify-between items-center px-4 py-4 fixed top-0 z-10 shadow-md w-full min-h-16 bg-white md:flex-row flex-col md:space-y-0 space-y-2">
        {/* Logo */}
        <img src={bidVentureLogo} alt="Logo" className="w-40 sm:w-52" />

        {/* Navigation Links and Social Media for Medium and Large Screens */}
        <nav className="hidden md:flex flex-wrap items-center space-x-4 sm:space-x-8">
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
              className="text-xl font-bold font-robotoSerif hover:text-orange-500 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
          {/* Social Media Links for Medium and Large Screens */}
          <div className="hidden md:flex space-x-4">
            <FaFacebook className="text-xl cursor-pointer hover:text-indigo-600" />
            <FaInstagram className="text-xl cursor-pointer hover:text-indigo-600" />
            <FaTwitter className="text-xl cursor-pointer hover:text-indigo-600" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

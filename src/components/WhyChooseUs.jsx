import React from "react";
import "@fortawesome/fontawesome-free/css/all.css"; // Import FontAwesome

const WhyChooseUs = () => {
  const processData = [
    {
      id: 1,
      title: "Save Time",
      description:
        "Receive tailored offers from multiple restaurants without lifting a finger.",
      icon: "far fa-clock", // FontAwesome icon
    },
    {
      id: 2,
      title: "Transparent Pricing",
      description:
        "Compare competitive bids and choose the best fit for your budget.",
      icon: "fas fa-dollar-sign", // FontAwesome icon
    },
    {
      id: 3,
      title: "Endless Options",
      description:
        "Access a variety of restaurants and event services for every occasion.",
      icon: "fas fa-utensils", // FontAwesome icon
    },
    {
      id: 4,
      title: "Win-Win Model",
      description:
        "Customers get great deals; restaurants fill bookings and boost revenue.",
      icon: "fas fa-handshake", // FontAwesome icon
    },
  ];

  return (
    <div id="process" className="bg-gray-100 p-10 mt-20">
      {/* Title */}
      {/* <h1 className="text-center font-semibold mb-10 text-2xl relative after:content-[''] after:block after:w-[80px] after:h-0.5 after:bg-gray-300 after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 pb-4">
        Why Choose Us?
      </h1> */}
      <h1 className="text-5xl text-center font-extrabold text-gray-800 mb-14 tracking-tight ">
      Why Choose Us?
          </h1>
      

      {/* Cards */}
      <div className="flex justify-center gap-6 flex-wrap">
        {processData.map((process) => (
          <div
            key={process.id}
            className="group w-[320px] shadow-md rounded-lg overflow-hidden bg-white transition transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-blue-100 hover:to-gray-100"
          >
            {/* Icon */}
            <div className="flex items-center justify-center  bg-[#d3d7e9] py-10">
              <i
                className={`${process.icon} text-5xl text-blue-500 group-hover:text-blue-700 transition duration-300`}
              ></i>
            </div>

            {/* Content */}
            <div className="p-6   bg-[#afb8df]">
              <h2 className="text-lg   font-extrabold  mb-2 text-gray-800 group-hover:text-blue-600 transition duration-300">
                {process.title}
              </h2>
              <p className="text-gray-600 text-sm"
              style={{fontWeight:'bold',fontSize:"14px"}}>{process.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

import React from "react";
import "./ServiceCard.css";
import fairplay from "../images/fairplay.png";
import growth from "../images/growth.png";
import target from "../images/target.png";

const PrivateFunding = () => {
  return (
    <div>
      <div className="service4 shadow-lg" data-aos="fade-up">
        <div className="service-content ">
          <div className="services4">
            <h2 className="service-title font-robotoSerif">
              Targeted Opportunities
            </h2>
            <p className="font-robotoSerif text-justify">
              Receive event leads tailored to your offerings. Our platform
              matches you with the right clients.{" "}
            </p>
          </div>
          <button className="get-started-btn2 font-robotoSerif">
            Check Now
          </button>
        </div>
        <div className="service-image   mr-5">
          <img src={target} alt="Finance Advice" />
        </div>
      </div>

      <div
        className="service4  font-robotoSerif shadow-lg text-justify mt-10 mb-10"
        data-aos="fade-up"
      >
        <div className="service-image">
          <img src={fairplay} alt="Finance Advice" />
        </div>

        <div className="service-content">
          <div className="services4">
            <h2 className="service-title">Fair Competition</h2>
            <p>
              Compete based on your unique value, not just price. Showcase your
              strengths to attract more clients.{" "}
            </p>
          </div>
          <button className="get-started-btn2">Check Now</button>
        </div>
      </div>

      <div
        className="service4 font-robotoSerif text-justify shadow-lg"
        data-aos="fade-up"
      >
        <div className="service-content">
          <div className="services4">
            <h2 className="service-title"> Revenue Growth</h2>
            <p>
              Fill bookings during slow periods and reach new audiences. Grow
              your revenue by tapping into new opportunities.{" "}
            </p>
          </div>
          <button className="get-started-btn2">Check Now</button>
        </div>
        <div className="service-image">
          <img src={growth} alt="Finance Advice" />
        </div>
      </div>
    </div>
  );
};

export default PrivateFunding;

import React from "react";
import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Slider from "./Slider.jsx";
import Steps from "./Steps.jsx";
import WhyChoose from "./WhyChoose.jsx";
import Slider2 from "./Slider2.jsx";
import BannerIcon from "./BannerIcon.jsx";
import ResturantSlide from "./ResturantSlide.jsx";
import BookEventButton from "../BookEventButton.jsx";

const Main = () => {
  return (
    <>
      <div>
        <Header />

        <Slider2 />

        <BannerIcon />
        {/* <Slider/> */}
        <Banner />
        <WhyChoose />
        <ResturantSlide />
        <Steps />

        <div className="fixed z-50 right-5 bottom-5">
          <BookEventButton />
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Main;

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerIcon = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNEfcnebSYlBQc4dnHs1U0OTClkFkOTlFWvA&s",
    "https://i1.wp.com/wittyvows.com/wp-content/uploads/2020/10/5hTF15450d_Wedding-Reception-118-1.jpg?fit=994%2C663&ssl=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHtoXiyYH3RG8A8BCh5b6wPoyKUjca_PHk_j0Qn4hc_OzOJlJ0_UKFPjA-4NHjiWGnm3s&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRw-KqelcPPNmybKZb4wAMT8vz0xmBfLCQuQ&s",
    "https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15779.jpg?semt=ais_hybrid",
    "https://www.snapfish.com/blog/wp-content/uploads/2020/04/1-blog-grad-party-decor-980x640-US-20200330.jpg",
    "https://media.istockphoto.com/id/1330908319/photo/shot-of-a-group-of-women-holding-a-sign-at-a-friends-baby-shower.jpg?s=612x612&w=0&k=20&c=mjvwMX1begGnYtJ2artlqukHXU8fsU5KSBmKICapq64=",
    "https://images.stockcake.com/public/b/e/e/bee319a0-5ce9-43ae-ac44-6282514a7e0e_large/festive-cultural-event-stockcake.jpg",
    "https://media.istockphoto.com/id/1181250359/photo/business-people.jpg?s=612x612&w=0&k=20&c=1DFEPJdcvlhFdQYp-hzj2CYXXRn-b6qYoPgyOptZsck=",
    "https://media.istockphoto.com/id/1191790576/photo/celebrating-birthday-with-confetti.jpg?s=612x612&w=0&k=20&c=GYSblelRrwUperwkwjbwfPlNWdc7TcMXAniWjD7mZk4=",
  ];

  const captions = [
    "Birthday Party",
    "Wedding",
    "Ceremony",
    "Divorce Party",
    "Office Meeting",
    "Graduation Party",
    "Baby Shower",
    "Festival Event",
    "Corporate Gathering",
    "Anniversary Celebration",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleClick = (event) => {
    setSelectedEvent(event);
    setShowForm(true);
  };

  return (
    <div className="sliderContainer mt-10 w-full lg:p-4 sm:pt-1 sm:pb-1 md:p-6 lg:pt-0 lg:pl-10 lg:pr-10 relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="text-center"
            onClick={() => handleClick(captions[index])}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-[150px] h-[150px] rounded-full object-cover bg-center border shadow-md mx-auto"
            />
            <p className="text-lg font-medium mt-2 font-robotoSerif text-black">
              {captions[index]}
            </p>
          </div>
        ))}
      </Slider>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Book {selectedEvent}</h2>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded mb-2"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setShowForm(false)}
            >
              Submit
            </button>
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded ml-2"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerIcon;

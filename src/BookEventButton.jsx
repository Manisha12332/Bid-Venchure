import React, { useState, useEffect } from "react";
import axios from "axios";

// Login Component
const Login = ({ onSuccess, onClose }) => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  // Send OTP API Call
  const handleSendOtp = async () => {
    if (!phone.trim()) {
      alert("Please enter a valid mobile number.");
      return;
    }

    try {
      const response = await axios.post(
        "http://46.202.164.93:7002/api/user/login",
        { mobile: phone }, // Check if API expects 'mobile' instead of 'phone'
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("OTP Sent Response:", response.data);
      setIsOtpSent(true);
      alert("OTP sent successfully!");
    } catch (error) {
      console.error(
        "Error sending OTP:",
        error.response?.data || error.message
      );
      alert(
        error.response?.data?.message || "Failed to send OTP. Please try again."
      );
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp.trim()) {
      alert("Please enter the OTP.");
      return;
    }

    try {
      const response = await axios.post(
        "http://46.202.164.93:7002/api/user/login/verifyOTP",
        {
          mobile: phone, // Ensure 'phone' contains the correct mobile number
          otp: Number(otp), // Convert OTP to a number explicitly
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json", // Sometimes needed
          },
        }
      );

      console.log(
        "OTP Verification Response:",
        response.data.userProfile.token
      );
      localStorage.setItem("bidvenchureToken", response.data.userProfile.token);
      localStorage.setItem("id", response.data.userProfile._id);
      alert("Login successful!");
      onSuccess(phone);
    } catch (error) {
      console.error(
        "Error verifying OTP:",
        error.response?.data || error.message
      );
      alert(error.response?.data?.message || "Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-[400px] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 text-lg hover:text-gray-800 transition"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Login
        </h2>
        <label className="block font-medium text-gray-700">Mobile Number</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          maxLength={10}
          minLength={8}
          className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter Mobile number"
        />

        {isOtpSent && (
          <>
            <label className="block font-medium text-gray-700">Enter OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter OTP"
            />
          </>
        )}

        <button
          onClick={isOtpSent ? handleVerifyOtp : handleSendOtp}
          className={`w-full py-2 rounded-lg text-white font-semibold transition ${
            isOtpSent
              ? "bg-green-600 hover:bg-green-700"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isOtpSent ? "Verify OTP" : "Send OTP"}
        </button>
      </div>
    </div>
  );
};

// Main Component
const BookEventButton = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isEventFormOpen, setIsEventFormOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("bidvenchureToken"));

  const handleLoginSuccess = () => {
    // Fetch token from localStorage after successful login
    const newToken = localStorage.getItem("bidvenchureToken");
    setToken(newToken);
    setIsLoginOpen(false); // Close login popup
    setIsEventFormOpen(true); // Open event form
  };

  const handleBookEvent = () => {
    if (token) {
      setIsEventFormOpen(true); // Open event form if token exists
    } else {
      setIsLoginOpen(true); // Otherwise, open login popup
    }
  };

  return (
    <div>
      <button
        onClick={handleBookEvent}
        className="text-white font-bold bg-black px-6 py-4 rounded-md shadow-lg hover:shadow-[0_0_10px_4px_#ffcc00]"
      >
        Book your event
      </button>

      {isLoginOpen && (
        <Login
          onSuccess={handleLoginSuccess}
          onClose={() => setIsLoginOpen(false)}
        />
      )}
      {isEventFormOpen && (
        <FormPopup onClose={() => setIsEventFormOpen(false)} />
      )}
    </div>
  );
};

// Event Booking Form Component
const FormPopup = ({ onClose }) => {
  const [eventType, setEventType] = useState("Birthday");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [numberAdults, setNumberAdults] = useState("");
  const [numberKids, setNumberKids] = useState("");
  const [budget, setBudget] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [foodType, setFoodType] = useState("Veg");
  const [eventDescription, setEventDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      eventType,
      eventDate,
      eventTime,
      numberAdults,
      numberKids,
      budget,
      pincode,
      city,
      state,
      fullAddress,
      foodType: foodType.toLowerCase(),
      eventDescription,
    };
    try {
      const token = localStorage.getItem("bidvenchureToken");
      const id = localStorage.getItem("id");

      const response = await axios.post(
        `http://46.202.164.93:7002/api/user/bidForm/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data && response.data._id) {
        localStorage.setItem("bidFormId", response.data._id);
        console.log("Saved ID:", response.data._id);
      }

      alert("Event booked successfully!");
      onClose();
    } catch (error) {
      console.error(
        "Error booking event:",
        error.response?.data || error.message
      );
      alert("Error booking event. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[800px] max-h-[90vh] overflow-y-auto relative">
        <button
          className="absolute top-3 right-3 text-gray-500 text-lg"
          onClick={onClose}
        >
          X
        </button>

        <h2 className="text-2xl font-bold text-blue-600 mb-2 text-center">
          Plan Your Perfect Event in Minutes
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          Tell us what you need, and let nearby restaurants offer their best
          deals.
        </p>

        <form onSubmit={handleSubmit}>
          <label className="block font-medium">Event Type</label>
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="w-full p-2 border rounded mb-2"
          >
            <option>Birthday</option>
            <option>Wedding</option>
            <option>Corporate Event</option>
          </select>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-medium">Event Date</label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full p-2 border rounded mb-2"
              />
            </div>
            <div className="w-1/2">
              <label className="block font-medium">Event Time</label>
              <input
                type="time"
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
                className="w-full p-2 border rounded mb-2"
              />
            </div>
          </div>

          <label className="block font-medium">Number of Adults</label>
          <input
            type="number"
            value={numberAdults}
            onChange={(e) => setNumberAdults(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            placeholder="e.g., 30"
          />
          <label className="block font-medium">Number of Kids</label>
          <input
            type="number"
            value={numberKids}
            onChange={(e) => setNumberKids(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            placeholder="e.g., 10"
          />
          <label className="block font-medium">Budget Per Person</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            placeholder="e.g., 200"
          />
          <label className="block font-medium">Pincode</label>
          <input
            type="number"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            placeholder="Enter pincode"
          />
          <label className="block font-medium">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            placeholder="Enter city"
          />
          <label className="block font-medium">State</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            placeholder="Enter State"
          />
          <label className="block font-medium">
            Complete Address (Optional)
          </label>
          <textarea
            value={fullAddress}
            onChange={(e) => setFullAddress(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            placeholder="Enter full address"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded mt-3"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookEventButton;

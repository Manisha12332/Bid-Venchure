import React, { useState } from "react";
import axios from "axios";

const BookEventButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="text-white font-robotoSerif font-bold bg-black px-6 py-4 rounded-md shadow-lg transition-all duration-300 hover:shadow-[0_0_10px_4px_#ffcc00]"
      >
        Book your event
      </button>

      {isOpen && <FormPopup onClose={() => setIsOpen(false)} />}
    </div>
  );
};

const FormPopup = ({ onClose }) => {
  const [eventType, setEventType] = useState("Birthday");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [adults, setAdults] = useState("");
  const [kids, setKids] = useState("");
  const [budget, setBudget] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [foodpreference, setFoodPreference] = useState("veg");
  const [additionalDetails, setAdditionalDetails] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      eventType,
      eventDate,
      eventTime,
      adults,
      kids,
      budget,
      pincode,
      city,
      state,
      address,
      foodpreference,
      additionalDetails,
    };
    try {
      const response = await axios.post(
        "http://192.168.1.23:4000/api/user/bidform",
        formData
      );
      alert("Event booked successfully!");
      onClose();
    } catch (error) {
      alert("Error booking event. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[800px] max-h-[90vh] overflow-y-auto relative mt-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 text-lg"
        >
          X
        </button>
        {/* Header */}
        <h2 className="text-2xl font-bold text-blue-600 mb-2 text-center">
          Plan Your Perfect Event in Minutes
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          Tell us what you need, and let nearby restaurants offer their best
          deals.
        </p>

        {/* Form */}
        <form>
          {/* Event Type */}
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

          {/* Event Date and Time */}
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

          {/* Number of Adults & Kids */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-medium">Number of Adults</label>
              <input
                type="number"
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full p-2 border rounded mb-2"
                placeholder="e.g., 30"
              />
            </div>
            <div className="w-1/2">
              <label className="block font-medium">Number of Kids</label>
              <input
                type="number"
                value={kids}
                onChange={(e) => setKids(e.target.value)}
                className="w-full p-2 border rounded mb-2"
                placeholder="e.g., 10"
              />
            </div>
          </div>

          {/* Budget Per Person */}
          <label className="block font-medium">Budget Per Person</label>
          <input
            type="text"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="e.g., ₹500"
            className="w-full p-2 border rounded mb-2"
          />

          {/* Pincode, City, State */}
          <div className="flex gap-4">
            <div className="w-1/3">
              <label className="block font-medium">Pincode</label>
              <input
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="w-full p-2 border rounded mb-2"
                placeholder="e.g., 110001"
              />
            </div>
            <div className="w-1/3">
              <label className="block font-medium">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-2 border rounded mb-2"
                placeholder="e.g., Delhi"
              />
            </div>
            <div className="w-1/3">
              <label className="block font-medium">State</label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full p-2 border rounded mb-2"
                placeholder="e.g., Delhi"
              />
            </div>
          </div>

          {/* Complete Address */}
          <label className="block font-medium">
            Complete Address (Optional)
          </label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            placeholder="Enter full address"
          ></textarea>

          {/* Veg, Non-Veg, Both Radio Buttons */}
          <label className="block font-medium mb-1">Food Preference</label>
          <div className="flex gap-4 mb-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="food"
                value="Veg"
                checked={foodpreference === "Veg"}
                onChange={(e) => setFoodPreference(e.target.value)}
                className="mr-2"
              />{" "}
              Veg
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="food"
                value="Non-Veg"
                checked={foodpreference === "Non-Veg"}
                onChange={(e) => setFoodPreference(e.target.value)}
                className="mr-2"
              />{" "}
              Non-Veg
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="food"
                value="Both"
                checked={foodpreference === "Both"}
                onChange={(e) => setFoodPreference(e.target.value)}
                className="mr-2"
              />{" "}
              Both
            </label>
          </div>

          {/* Additional Details */}
          <label className="block font-medium">
            Additional Details (Optional)
          </label>
          <textarea
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            placeholder="Any specific requests?"
          ></textarea>

          {/* Submit Button */}
          <button className="w-full bg-blue-600 text-white py-2 rounded mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookEventButton;

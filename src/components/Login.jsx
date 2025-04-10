import React, { useState } from "react";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setOtpSent(false);
  };

  const handleSendOtp = () => {
    setOtpSent(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        onClick={openModal}
        className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition"
      >
        Open Login
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-[400px] p-8 rounded-xl shadow-2xl relative">
            <button
              className="absolute top-3 right-4 text-xl font-bold text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              &times;
            </button>

            <h1 className="text-2xl text-orange-500 font-bold text-center mb-6">
              Login
            </h1>

            {/* Phone Number Input */}
            <label htmlFor="phone" className="block text-left font-medium mb-1">
              Phone Number:
            </label>
            <input
              type="number"
              id="phone"
              className="w-full h-12 rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your phone number"
            />

            {/* OTP Input (Visible only after clicking Send OTP) */}
            {otpSent && (
              <>
                <label
                  htmlFor="otp"
                  className="block text-left font-medium mt-4 mb-1"
                >
                  Enter OTP:
                </label>
                <input
                  type="number"
                  id="otp"
                  className="w-full h-12 rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter OTP"
                />
              </>
            )}

            {/* Button */}
            <button
              className="bg-orange-500 text-white mt-6 w-full h-12 rounded-lg shadow-md hover:bg-orange-600 transition"
              onClick={otpSent ? closeModal : handleSendOtp}
            >
              {otpSent ? "Verify OTP" : "Send OTP"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

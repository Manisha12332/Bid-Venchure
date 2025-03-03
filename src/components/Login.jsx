import React from "react";

const Login = () => {
  return (
    <div className="text-center mt-10 w-96 bg-gray-400 h-96">
      <h1 className="text-xl text-orange-500 font-bold font-robotoSerif ">
        Login
      </h1>
      <h1 className="text-left">Phone Number:</h1>
      <input
        type="number"
        className="w-[335px] ml-1 h-10 rounded-lg"
        placeholder="Enter your Phone Number"
      />
      <button className="bg-orange-500 mt-4 w-32 h-10 rounded-lg shadow-sm">
        Send OTP
      </button>
    </div>
  );
};

export default Login;

import React from "react";

const App = () => {
  const submitHandler = () => {
    console.log("Form Submitted");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white  rounded-xl p-6 w-96 ">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-sm mx-auto bg-white p-6 rounded-xl shadow"
        >
          {/* Title */}
          <h2 className="text-center text-2xl font-bold text-black mb-6">
            Create your account
          </h2>

          {/* Username */}
          <label className="text-gray-700 text-sm mb-1"></label>
          <input
            type="text"
            placeholder="Enter username"
            className="w-full px-3 py-2 border rounded-md mb-4 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          />

          {/* Email */}
          <label className="text-gray-700 text-sm mb-1"></label>
          <div className="relative mb-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full  px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
          </div>

          {/* Password */}
          <label className="text-gray-700 text-sm mb-1"></label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-3 py-2 border rounded-md mb-4 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          />

          {/* Confirm Password */}
          <label className="text-gray-700 text-sm mb-1"></label>
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full px-3 py-2 border rounded-md mb-4 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          />

          {/* Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition">
            Submit
          </button>

          <hr className="my-4" />

          {/* Note */}
          <p className="text-center text-xs text-gray-600">
            By creating an account, you agree to our Terms & Service and Privacy
            Policy.
          </p>
        </form>
      </div>
    </div>
  );
};

export default App;

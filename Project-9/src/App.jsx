import React from "react";

const App = () => {
  return (
    <div className="flex justify-center items-center pt-60">
      <div className=" h-500 flex flex-col gap-2 inset-shadow-gray-500">
        <h1>BMI Calculator</h1>
        <div className="flex flex-col ">
          <label htmlFor="weight">Weight(lbs)</label>
          <input
            className="border-2 border-gray-400 rounded-sm"
            type="number"
            placeholder="Enter weight value"
            id="weight"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="height">Height(in)</label>
          <input
            className="border-2 border-gray-400 rounded-sm"
            type="number"
            placeholder="Enter height value"
            id="height"
          />
        </div>
        <button className="bg-blue-700 rounded-sm py-1 text-white">
          Submit
        </button>
        <button className="bg-gray-200 py-1 rounded-sm font-semibold">
          Reload
        </button>
        <div>
          <h2 className="text-center text-xs font-semibold py-2">
            Your BMI is:{" "}
          </h2>
          <p className="text-xs text-center font-semibold ">
            You are underweight
          </p>
          <p className="text-xs text-center font-semibold">
            You are overweight
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;

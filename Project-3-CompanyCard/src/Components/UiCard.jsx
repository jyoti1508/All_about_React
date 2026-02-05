import React from "react";

const UiCard = (employe) => {
  return (
    <div className="h-[450px] w-[350px] rounded-xl bg-blue-50  py-5 m-5 flex flex-col ">
      <div className="flex justify-between px-5">
        <button className="bg-green-600 px-2 rounded-xl text-white">
          {employe.isavailable}
        </button>
        <span className="font-bold font-semibold">{employe.rent}</span>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={employe.dp}
          alt="profile pic"
          className="h-[120px] w-[120px] rounded-full items-center bg-amber-200 m-2"
        />
        <h1 className="font-semibold text-xl mt-2">{employe.name}</h1>
        <p className="py-1 text-gray-500">{employe.profession}</p>
        <div
          className="flex
          gap-0.5 text-blue-500"
        >
          {employe.workingas}
        </div>
        <div className="flex gap-2 text-sm mt-2 mb-3">
          <div className="border-gray-500  border-1 rounded-2xl px-2 py-1">
            {employe.skills[0]}
          </div>
          <div className="border-gray-500 border-1 rounded-2xl px-2 py-1">
            {employe.skills[1]}
          </div>
          <div className="border-gray-500 border-1 rounded-2xl px-2 py-1">
            {employe.skills[2]}
          </div>
          <button className="bg-blue-600 text-white border-1 rounded-2xl px-2 py-1">
            {employe.skills[3]}
          </button>
        </div>
        <p className="text-sm text-gray-700 flex  text-center">
          {employe.about}
        </p>
      </div>
      <div className="flex justify-center w-full pt-5 ">
        <p className="flex border-t-1 py-5 hover:bg-blue-600 hover:w-full hover:border-none hover:justify-center">
          VIEW PROFILE
        </p>
      </div>
    </div>
  );
};

export default UiCard;

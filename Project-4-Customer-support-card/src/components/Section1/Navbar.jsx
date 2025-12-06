import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6 px-16 ">
      <h4 className="bg-black text-white py-2 px-6 rounded-full uppercase">
        Target audience
      </h4>
      <button className="bg-gray-300 rounded-full py-2 px-6 uppercase tracking-widest text-sm">
        digital banking platform
      </button>
    </div>
  );
};

export default Navbar;

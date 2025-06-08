import React from "react";

const Navbar = () => {
  return (
    <div className="text-white flex items-center justify-between px-5 py-4">
      {/* for logo with text or else */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="logo" className="w-[33px] cursor-pointer" />
        <h2 className="kaushan cursor-pointer">Heartify</h2>
      </div>

      {/* this is for navigation bar */}
      <div className="navigation">
        <ul className="flex items-center gap-5 cursor-pointer">
          <li className="hover:text-[#FADA7A]">Home</li>
          <li className="hover:text-[#FADA7A]">Features</li>
          <li className="hover:text-[#FADA7A]">Stories</li>
          <li className="hover:text-[#FADA7A]">Profile </li>
          <li className="hover:text-[#FADA7A]">Contact</li>
        </ul>
      </div>

      {/* this is for login and join buttons */}
      <div className="flex items-center gap-3 cursor-pointer">
        <button className="rounded-full cursor-pointer text-gray-900 hover:text-white border-2 border-gray-200 hover:bg-white focus:ring-2 focus:outline-none focus:ring-gray-300 px-4 py-1.5 dark:border-gray-600 dark:text-gray-400 dark:hover:text-black dark:hover:bg-gray-300 dark:focus:ring-gray-600">
          Join Free
        </button>
        <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lime-500/50 dark:shadow-lime-800/80 rounded-full px-4 py-1.5 cursor-pointer">
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Navbar;

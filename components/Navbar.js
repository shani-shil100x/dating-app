import React from "react";

const Navbar = () => {
  return (
    <div className="text-white flex items-center justify-between px-5 py-3">
      {/* for logo with text or else */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="logo" className="w-[33px] cursor-pointer" />
        <h2 className="kaushan cursor-pointer"> MatchCo</h2>
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
        <button className="rounded-full border border-white px-4 py-1">
          Join Free
        </button>
        <button className="rounded-full border border-white px-4 py-1 bg-white text-black">
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Navbar;

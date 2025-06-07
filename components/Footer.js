import React from "react";
import { FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1C150A] text-yellow-100 py-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 px-6">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 text-lg">
          <a href="#" className="hover:text-[#621593]">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-[#621593]">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-[#621593]">
            <FaGlobe />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-center md:text-right">
          © 2024 Elite Hearts. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

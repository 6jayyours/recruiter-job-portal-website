import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-400 p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row md:items-start w-full md:w-auto">
          <div className="flex flex-col items-start mb-6 md:mb-0">
            <img src="../../assets/logo.png" alt="Recruiter Logo" className="w-32 mb-4" />
            <h1 className="text-xl font-bold">Recruiter</h1>
          </div>
          <ul className="flex flex-col md:flex-row items-center md:ml-8 space-y-2 md:space-y-0 md:space-x-6">
            <li className="hover:text-blue-600"><a href="#home">Home</a></li>
            <li className="hover:text-blue-600"><a href="#how-it-works">How Recruiter works</a></li>
            <li className="hover:text-blue-600"><a href="#features">Features</a></li>
            <li className="hover:text-blue-600"><a href="#about-us">About us</a></li>
            <li className="hover:text-blue-600"><a href="#contact-us">Contact us</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-6">
        <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-auto">
          <p className="text-center md:text-left mb-4 md:mb-0">©2024 Recruiter. Design &amp; Develop by Arjun</p>
        </div>
        <div className="flex space-x-4">
          <a href="#google" className="text-gray-600 hover:text-red-500"><FaGoogle size={20} /></a>
          <a href="#facebook" className="text-gray-600 hover:text-blue-600"><FaFacebook size={20} /></a>
          <a href="#twitter" className="text-gray-600 hover:text-blue-400"><FaTwitter size={20} /></a>
          <a href="#instagram" className="text-gray-600 hover:text-pink-500"><FaInstagram size={20} /></a>
          <a href="#linkedin" className="text-gray-600 hover:text-blue-700"><FaLinkedin size={20} /></a>
          <a href="#whatsapp" className="text-gray-600 hover:text-green-500"><FaWhatsapp size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

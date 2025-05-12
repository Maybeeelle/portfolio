import React from 'react';
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="relative bg-[#D2B48C] shadow-md px-6 py-8 flex justify-between items-center border-b-8 border-[#5D4037] h-[100px]">
      {/* Bubbly font */}
      <div className="text-3xl font-bold text-gray-800 font-[Comic Neue] hover:text-purple-600 transition-colors">
        MyWebsite
      </div>
      
      {/* Social Links */}
      <div className="flex gap-6">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
          <FaFacebookF size={24} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition-colors">
          <FaInstagram size={24} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
          <FaGithub size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

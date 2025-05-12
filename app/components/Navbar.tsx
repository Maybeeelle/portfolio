import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-[#FFFDD0] shadow-md px-6 py-4 flex justify-between items-center">
      {/* Bubbly font (example: "Comic Neue" or "Fredoka") */}
      <div className="text-2xl font-bold text-gray-800 font-[Comic Neue] hover:text-purple-600 transition-colors">
        MyWebsite
      </div>
      <div className="flex gap-4">
        <a 
          href="https://www.facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          <FaFacebookF size={20} />
        </a>
        <a 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-pink-500 hover:text-pink-700 transition-colors"
        >
          <FaInstagram size={20} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
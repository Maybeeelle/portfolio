/* eslint-disable */

import React from 'react';
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import { Comic_Neue } from 'next/font/google'

const comicNeue = Comic_Neue({ subsets: ['latin'], weight: ['400', '700'] })

const Navbar = () => {
  return (
    <nav className="relative bg-[#D2B48C] shadow-md px-6 py-8 flex justify-between items-center border-b-8 border-[#5D4037] h-[100px]">
      {/* Bubbly font */}
      <div className={`text-4xl font-extrabold text-gray-800 font-[Comic Neue] ${comicNeue.className} hover:text-purple-600 transition-colors`}>
        Maybelle
      </div>
      
      {/* Social Links */}
      <div className="flex gap-6">
        <a href="https://www.facebook.com/maybelle.quidespatetico" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
          <FaFacebookF size={24} />
        </a>
        <a href="https://www.instagram.com/maiblynnn/?next=%2F" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition-colors">
          <FaInstagram size={24} />
        </a>
        <a href="https://github.com/Maybeeelle" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
          <FaGithub size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

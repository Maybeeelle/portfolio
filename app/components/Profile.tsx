import React from 'react';
import { Coffee, Terminal } from 'lucide-react';
import Image from 'next/image';
import maybelleImg from '../pictures/maybelle.jpg'; // adjust path if needed
export default function GameCharacterCard() {
  return (
    <div className="flex-[2] justify-center items-center w-full">
      <div className="bg-gradient-to-br from-amber-100 to-amber-300 rounded-xl border-4 border-amber-600 shadow-xl overflow-hidden w-full max-w-md flex flex-col">
        
        {/* Header with level and XP */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white p-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-amber-300 text-amber-900 rounded-full h-8 w-8 flex items-center justify-center font-bold">21</div>
            <span className="font-semibold">LEVEL</span>
          </div>
          <div className="text-xs">
            <span className="font-bold">XP: 12,450</span> / 15,000
          </div>
          <div className="flex items-center gap-1">
            <Coffee size={16} />
            <span className="font-semibold">31</span>
          </div>
        </div>

        {/* Character portrait */}
        <div className="flex-grow flex items-center justify-center p-4">
          <div className="relative w-full max-w-xs aspect-square rounded-lg bg-gradient-to-br from-yellow-200 to-yellow-400 border-4 border-amber-500 overflow-hidden">
            {/* Corners */}
            <div className="absolute top-0 left-0 w-6 h-6 border-r-4 border-b-4 border-amber-700 opacity-60"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-l-4 border-b-4 border-amber-700 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-r-4 border-t-4 border-amber-700 opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-l-4 border-t-4 border-amber-700 opacity-60"></div>

            {/* Image */}
            <div className="absolute inset-2 rounded-md bg-amber-50 flex items-center justify-center">
              <Image src={maybelleImg} alt="Character avatar" className="w-full h-full object-cover rounded-md" />
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="bg-amber-50 p-4 border-t-2 border-amber-300">
          <div className="bg-yellow-200 px-6 py-2 rounded-full border-2 border-yellow-500 shadow-md mb-2 inline-block">
            <h2 className="text-xl font-bold text-yellow-800">Maybelle Q. Patetico</h2>
          </div>

          <div className="bg-yellow-100 px-4 py-1 rounded-full border-2 border-yellow-400 shadow-md mb-4 inline-block">
            <div className="flex items-center gap-2">
              <Terminal size={16} className="text-yellow-700" />
              <span className="font-medium text-yellow-800">Computer Science Student</span>
            </div>
          </div>
          <div className="hidden sm:block mt-3 bg-amber-100 p-3 rounded-lg border-2 border-amber-300 shadow-md">
  <h3 className="font-bold text-amber-800">CURRENT QUEST:</h3>
  <p className="text-amber-700 mb-2">Applying For Internship Position</p>
  <div className="w-full bg-amber-300 rounded-full h-2 mt-1">
    <div className="bg-amber-600 h-2 rounded-full" style={{ width: '65%' }}></div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

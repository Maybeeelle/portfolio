import React, { useState } from 'react';
import { Trophy, Star, Heart, Sparkles } from 'lucide-react';

const FlipWords = ({ words }) => {
  const [index, setIndex] = useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [words]);
  
  return (
    <div className="font-bold text-2xl text-yellow-600 my-4 flex items-center justify-center">
      <span className="text-blue-600 underline decoration-wavy">Hi there!</span>I am a <span className="relative ml-2">
        <span className="inline-block min-w-32 text-center bg-yellow-200 px-3 py-1 rounded-lg border-2 border-yellow-500 shadow-md">
          {words[index]}
        </span>
        <Sparkles className="absolute -top-4 -right-4 text-yellow-500" size={20} />
      </span>
    </div>
  );
};
export default FlipWords;
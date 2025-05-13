import React, { useState, useEffect } from 'react';

interface FlipWordsProps {
  words: string[];
}

const FlipWords: React.FC<FlipWordsProps> = ({ words }) => {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [words]);
  
  return (
    <span className="inline-block min-w-32 text-center px-3 py-1 rounded-lg border-2 text-amber-400 border-yellow-500 shadow-md">
      {words[index]}
    </span>
  );
};

export default FlipWords;

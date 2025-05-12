import React, { useEffect, useState } from 'react';
import GameCharacterCard from './Profile'; // adjust path

export default function IntroOverlay() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setShowIntro(false), 1000); // match transition duration
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showIntro) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}
    >
      <div className="transition-transform duration-700 ease-out animate-flip">
        <GameCharacterCard />
      </div>
    </div>
  );
}

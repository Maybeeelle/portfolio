/* eslint-disable */

import React from 'react'
import { Sparkles } from 'lucide-react'
import FlipWords from '../ui/Flipwords'
import { Playfair_Display, Comic_Neue} from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700', '900'] })
const comicNeue = Comic_Neue({ subsets: ['latin'], weight: ['400', '700'] })


const AboutMe = () => {
  const words = ["Developer", "Innovator", "Learner", "Problem Solver"]

  return (
    
    <div className={`min-h-[60vh] w-full p-4 md:p-6 flex flex-col relative overflow-hidden ${playfair.className}`}>
      {/* Header */}
      <div className={`flex justify-center md:justify-between items-center mb-4 ${comicNeue.className}`}>
        <div className="flex items-center bg-blue-100 px-4 py-2 rounded-2xl border-4 border-blue-400">
          <span className="text-2xl md:text-3xl mr-2">🌼</span>
          <h1 className="text-2xl md:text-3xl font-black text-blue-600 tracking-wide">About Me</h1>
        </div>
      </div>

      <div className="relative w-full max-w-5xl mx-auto">
        {/* Floating Bubbles */}
        <div className="absolute -top-1 -left-3 w-6 h-6 md:w-8 md:h-8 bg-blue-300 rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-1/4 right-4 w-4 h-4 md:w-6 md:h-6 bg-blue-200 rounded-full opacity-60 animate-float-delay"></div>
        <div className="absolute bottom-4 left-4 w-4 h-4 md:w-5 md:h-5 bg-blue-300 rounded-full opacity-60 animate-float-delay-2"></div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-blue-200 rounded-full opacity-60 animate-float"></div>

        {/* Animated Intro */}
        <div className={`scale-100 md:scale-110 mb-6 mt-6 ${comicNeue.className}`}>
          <div className="font-bold text-3xl md:text-4xl text-blue-700 mb-4 flex items-center justify-center">
            <span className="text-blue-600 underline decoration-wavy">Hi there!</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-2">
        <div className="font-bold text-2xl md:text-4xl lg:text-5xl text-blue-700 mb-2">
          I am Maybelle and I am a
        </div>
        <div className="relative flex items-center justify-center">
          <span className="text-3xl md:text-5xl font-extrabold text-blue-800">
            <FlipWords words={words} />
          </span>
          <Sparkles className="absolute -top-3 -right-4 text-yellow-500" size={24} />
        </div>
      </div>

        </div>

        {/* Description Bubble */}
        <div className="bg-blue-100 p-6 md:p-8 rounded-3xl border-4 border-blue-400 shadow-lg mx-2 md:mx-10 mt-6 relative">
        <p className={`text-lg md:text-2xl font-semibold md:font-bold text-blue-800 leading-relaxed z-10 ${comicNeue.className}`}>
            A Computer Science student who loves turning 
            ideas into code. Whether it&apos;s <span className="text-blue-600 underline decoration-wavy">web apps</span>, 
            <span className="bg-green-200 px-2 mx-1 rounded-lg">smart tech</span>, 
            or solving <span className="bg-yellow-200 px-2 mx-1 rounded-lg">tricky bugs</span>&mdash;I&apos;m all in! 
            Take a <span className="text-pink-600 font-extrabold">look around!</span>
          </p>

        </div>
      </div>
    </div>
  )
}

export default AboutMe

"use client"
import React,{useState} from 'react'
import Navbar from './components/Navbar'
import FlipWords from './ui/Flipwords'
import { Crown, Star } from 'lucide-react';
import { Coffee, Terminal } from 'lucide-react';
import GameCharacterCard from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';




const Home = () => {
  const words = ["Developer", "Programmer", "Learner", "Gamer"];
  const [seeAboutMe, setSeeAboutMe] = useState(true);
  const [seeSkills, setSeeSkills] = useState(false);
  const [seeProjects, setSeeProjects] = useState(false);
  const [seeContacts, setSeeContacts] = useState(false);
  
  const handleAboutMeClick =() => {
    setSeeAboutMe(true);
    setSeeContacts(false);
    setSeeProjects(false);
    setSeeSkills(false);
  }

  const handleSkillsClick =() => {
    setSeeAboutMe(false);
    setSeeContacts(false);
    setSeeProjects(false);
    setSeeSkills(true);
  }

  const handleProjectsClick =() => {
    setSeeAboutMe(false);
    setSeeContacts(false);
    setSeeProjects(true);
    setSeeSkills(false);
  }

  const handleSeeContactClick =() => {
    setSeeAboutMe(false);
    setSeeContacts(true);
    setSeeProjects(false);
    setSeeSkills(false);
  }

  const options = [
    {
      title: "About Me",
      color: "pink",
      active: seeAboutMe,
      onClick: handleAboutMeClick
    },
    {
      title: "Know my skills",
      color: "purple",
      active: seeSkills,
      onClick: handleSkillsClick
    },
    {
      title: "See Projects",
      color: "blue",
      active: seeProjects,
      onClick: handleProjectsClick
    },
    {
      title: "Contact Me",
      color: "green",
      active: seeContacts,
      onClick: handleSeeContactClick
    },
  ];

  

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex-[3] bg-[#FFFDD0] p-2 font-[Comic Neue] flex flex-col overflow-hidden justify-center">
        {/* Top Content */}
        {seeAboutMe && (
        <div className="flex flex-row pt-0 mt-0">
          {/* LEFT SIDE */}
          <div className="flex-1 bg-white border-6 border-[#A0522D] rounded-xl shadow-md text-center flex flex-col justify-center relative m-4 p-4">
            
            {/* Inner Dashed Border */}
            <div className="absolute inset-2 border-6 border-dashed border-[#e7a789] rounded-xl z-0"></div>

            {/* Bubbles */}
            <div className="absolute -top-1 -left-3 w-8 h-8 bg-blue-300 rounded-full opacity-60"></div>
            <div className="absolute top-1/4 right-6 w-6 h-6 bg-blue-200 rounded-full opacity-60"></div>
            <div className="absolute bottom-4 left-8 w-5 h-5 bg-blue-300 rounded-full opacity-60"></div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-200 rounded-full opacity-60"></div>

            {/* Main Content */}
            <div className="relative z-10 max-w-2xl mx-auto">
              {/* About Me Badge */}
              <div className="flex justify-center mt-1">
                <div className="bg-gradient-to-r from-green-300 to-green-500 px-8 py-3 rounded-full border-4 border-green-600 shadow-xl transform hover:scale-110 transition-transform relative overflow-hidden">
                  {/* Decorative Stars */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-300 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-yellow-300 rounded-full opacity-20"></div>
                  <div className="absolute top-1 left-1 text-yellow-300 text-xs">★</div>
                  <div className="absolute top-1 right-1 text-yellow-300 text-xs">★</div>
                  <div className="absolute bottom-1 left-8 text-yellow-300 text-xs">★</div>
                  <div className="absolute bottom-1 right-8 text-yellow-300 text-xs">★</div>

                  <p className="text-2xl text-white font-black tracking-wider">About Me</p>
                </div>
              </div>

              {/* FlipWords */}
              <div className="transform scale-125 mb-6 mt-4">
                <FlipWords words={words} />
              </div>

              {/* Description Bubble */}
              <div className="bg-blue-100 p-6 rounded-3xl border-4 border-blue-400 shadow-lg mt-6 animate-pulse relative">
                <p className="text-2xl font-bold font-[Comic Neue] text-blue-800 leading-relaxed p-2 relative z-10">
                  Welcome to my <span className="text-blue-600 underline decoration-wavy">game-inspired</span> portfolio!
                  I'm a <span className="text-pink-600 font-extrabold">passionate developer</span> who loves creating
                  <span className="bg-yellow-200 px-2 mx-1 rounded-lg">interactive</span>,
                  <span className="bg-green-200 px-2 mx-1 rounded-lg">engaging</span> and
                  <span className="bg-green-200 px-2 mx-1 rounded-lg">fun</span> user experiences!
                </p>
              </div>
            </div>
          </div>

          

          {/* RIGHT SIDE */}
          <div className="flex justify-center items-center m-4">
          <GameCharacterCard />
          </div>
        </div>
      )}

{seeSkills && 
  <div className="flex flex-row pt-0 mt-0">
          {/* LEFT SIDE */}
          <div className="flex-1 bg-white border-6 border-[#A0522D] rounded-xl shadow-md text-center flex flex-col justify-center relative m-4 p-4">
            
            {/* Inner Dashed Border */}
            <div className="absolute inset-2 border-6 border-dashed border-[#e7a789] rounded-xl z-0"></div>
          {/* LEFT SIDE */}
          <Skills/>
          

        </div>
                  {/* RIGHT SIDE */}
                  <div className="flex justify-center items-center m-4">
          <GameCharacterCard />
          </div>
        </div>
        }

{seeProjects && 
  <div className="flex flex-row pt-0 mt-0">
          {/* LEFT SIDE */}
          <div className="flex-1 bg-white border-6 border-[#A0522D] rounded-xl shadow-md text-center flex flex-col justify-center relative m-4 p-4">
            
            {/* Inner Dashed Border */}
            <div className="absolute inset-2 border-6 border-dashed border-[#e7a789] rounded-xl z-0"></div>
          {/* LEFT SIDE */}
          <Projects/>
          

        </div>
                  {/* RIGHT SIDE */}
                  <div className="flex justify-center items-center m-4">
          <GameCharacterCard />
          </div>
        </div>
        }
{seeContacts && (
        <div className="flex flex-row pt-0 mt-0">
          {/* LEFT SIDE */}
          <div className="flex-1 bg-white border-6 border-[#A0522D] rounded-xl shadow-md text-center flex flex-col justify-center relative m-4 p-4">
            
            {/* Inner Dashed Border */}
            <div className="absolute inset-2 border-6 border-dashed border-[#e7a789] rounded-xl z-0"></div>

            {/* Bubbles */}
            <div className="absolute -top-1 -left-3 w-8 h-8 bg-blue-300 rounded-full opacity-60"></div>
            <div className="absolute top-1/4 right-6 w-6 h-6 bg-blue-200 rounded-full opacity-60"></div>
            <div className="absolute bottom-4 left-8 w-5 h-5 bg-blue-300 rounded-full opacity-60"></div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-200 rounded-full opacity-60"></div>

            {/* Main Content */}
            <div className="relative z-10 max-w-2xl mx-auto">
              {/* About Me Badge */}
              <div className="flex justify-center mt-1">
                <div className="bg-gradient-to-r from-green-300 to-green-500 px-8 py-3 rounded-full border-4 border-green-600 shadow-xl transform hover:scale-110 transition-transform relative overflow-hidden">
                  {/* Decorative Stars */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-300 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-yellow-300 rounded-full opacity-20"></div>
                  <div className="absolute top-1 left-1 text-yellow-300 text-xs">★</div>
                  <div className="absolute top-1 right-1 text-yellow-300 text-xs">★</div>
                  <div className="absolute bottom-1 left-8 text-yellow-300 text-xs">★</div>
                  <div className="absolute bottom-1 right-8 text-yellow-300 text-xs">★</div>

                  <p className="text-2xl text-white font-black tracking-wider">About Me</p>
                </div>
              </div>

              {/* FlipWords */}
              <div className="transform scale-125 mb-6 mt-4">
                <FlipWords words={words} />
              </div>

              {/* Description Bubble */}
              <div className="bg-blue-100 p-6 rounded-3xl border-4 border-blue-400 shadow-lg mt-6 animate-pulse relative">
                <p className="text-2xl font-bold font-[Comic Neue] text-blue-800 leading-relaxed p-2 relative z-10">
                  Welcome to my <span className="text-blue-600 underline decoration-wavy">game-inspired</span> portfolio!
                  I'm a <span className="text-pink-600 font-extrabold">passionate developer</span> who loves creating
                  <span className="bg-yellow-200 px-2 mx-1 rounded-lg">interactive</span>,
                  <span className="bg-green-200 px-2 mx-1 rounded-lg">engaging</span> and
                  <span className="bg-green-200 px-2 mx-1 rounded-lg">fun</span> user experiences!
                </p>
              </div>
            </div>
          </div>

          

          {/* RIGHT SIDE */}
          <div className="flex justify-center items-center m-4">
          <GameCharacterCard />
          </div>
        </div>
      )}

        {/* Bottom Section - Fixed Height */}
      {/* Game-Style Bottom Section - Fixed Height */}
      <div className="flex flex-col md:flex-row gap-4 pb-4">
          {options.map((item, index) => {
            // Color mapping for game-style UI
            const colors = {
              pink: {
                bg: item.active ? "bg-gradient-to-br from-pink-300 to-pink-500" : "bg-pink-200",
                border: item.active ? "border-yellow-400" : "border-pink-400",
                text: item.active ? "text-white" : "text-pink-700"
              },
              purple: {
                bg: item.active ? "bg-gradient-to-br from-purple-300 to-purple-500" : "bg-purple-200",
                border: item.active ? "border-yellow-400" : "border-purple-400",
                text: item.active ? "text-white" : "text-purple-700"
              },
              blue: {
                bg: item.active ? "bg-gradient-to-br from-blue-300 to-blue-500" : "bg-blue-200",
                border: item.active ? "border-yellow-400" : "border-blue-400",
                text: item.active ? "text-white" : "text-blue-700"
              },
              green: {
                bg: item.active ? "bg-gradient-to-br from-green-300 to-green-500" : "bg-green-200",
                border: item.active ? "border-yellow-400" : "border-green-400",
                text: item.active ? "text-white" : "text-green-700"
              }
            };
            
            return (
              <div 
                key={index}
                onClick={item.onClick}
                className={`cursor-pointer ${colors[item.color].bg} rounded-xl shadow-md p-4 flex-1 text-center 
                  border-4 ${colors[item.color].border}
                  ${item.active ? 'scale-105 shadow-lg' : 'hover:scale-105'}
                  transition-all relative overflow-hidden`}
              >
                {/* Game-style decorative elements */}
                {item.active && (
                  <>
                    <div className="absolute top-0 left-0 w-12 h-12 bg-yellow-300 rounded-br-full opacity-50"></div>
                    <div className="absolute top-0 right-0">
                      <Crown size={20} className="text-yellow-300" fill="currentColor" />
                    </div>
                    <div className="absolute -bottom-1 -left-1">
                      <Star size={16} className="text-yellow-300" fill="currentColor" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 bg-yellow-300 rounded-tl-full opacity-50"></div>
                  </>
                )}
                
                {/* Icon and Title */}
                <div className="flex flex-col items-center relative z-10">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h2 className={`text-xl font-bold ${colors[item.color].text} mb-1`}>
                    {item.title}
                  </h2>

                </div>
              </div>
            );
          })}
        </div>


      </div>

    </div>
  )
}

export default Home
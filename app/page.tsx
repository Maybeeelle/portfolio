'use client'

import React, { useState, MouseEventHandler, ReactElement } from 'react'
import Navbar from './components/Navbar'
import { Crown, Star } from 'lucide-react'
import GameCharacterCard from './components/Profile'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactMe from './components/Contact'
import AboutMe from './components/AboutMe'
import Bubbles from './components/Bubbles'
import IntroOverlay from './components/Intro'
import { Comic_Neue } from 'next/font/google'

const comicNeue = Comic_Neue({ subsets: ['latin'], weight: ['400', '700'] })

// Define type for color keys
type Color = 'pink' | 'purple' | 'blue' | 'green'

interface Option {
  title: string
  color: Color
  active: boolean
  onClick: MouseEventHandler<HTMLDivElement>
}

const Home = () => {
  const [seeAboutMe, setSeeAboutMe] = useState<boolean>(true)
  const [seeSkills, setSeeSkills] = useState<boolean>(false)
  const [seeProjects, setSeeProjects] = useState<boolean>(false)
  const [seeContacts, setSeeContacts] = useState<boolean>(false)

  type OptionClickHandler = (optionFunction: () => void, element: HTMLElement | null, color: string) => void

  const handleOptionClick: OptionClickHandler = (optionFunction, element, color) => {
    optionFunction()
    if (element && window.createBubblesAtPosition) {
      const rect = element.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2
      window.createBubblesAtPosition(x, y, color)
    }
  }

  const handleAboutMeClick: MouseEventHandler<HTMLDivElement> = (e) => {
    handleOptionClick(() => {
      setSeeAboutMe(true)
      setSeeContacts(false)
      setSeeProjects(false)
      setSeeSkills(false)
    }, e.currentTarget, 'hsla(350, 100%, 75%)')
  }

  const handleSkillsClick: MouseEventHandler<HTMLDivElement> = (e) => {
    handleOptionClick(() => {
      setSeeAboutMe(false)
      setSeeContacts(false)
      setSeeProjects(false)
      setSeeSkills(true)
    }, e.currentTarget, 'hsla(280, 100%, 75%)')
  }

  const handleProjectsClick: MouseEventHandler<HTMLDivElement> = (e) => {
    handleOptionClick(() => {
      setSeeAboutMe(false)
      setSeeContacts(false)
      setSeeProjects(true)
      setSeeSkills(false)
    }, e.currentTarget, 'hsla(210, 100%, 75%)')
  }

  const handleSeeContactClick: MouseEventHandler<HTMLDivElement> = (e) => {
    handleOptionClick(() => {
      setSeeAboutMe(false)
      setSeeContacts(true)
      setSeeProjects(false)
      setSeeSkills(false)
    }, e.currentTarget, 'hsla(120, 100%, 75%)')
  }

  const options: Option[] = [
    { title: 'About Me', color: 'pink', active: seeAboutMe, onClick: handleAboutMeClick },
    { title: 'Know my skills', color: 'purple', active: seeSkills, onClick: handleSkillsClick },
    { title: 'See Projects', color: 'blue', active: seeProjects, onClick: handleProjectsClick },
    { title: 'Contact Me', color: 'green', active: seeContacts, onClick: handleSeeContactClick },
  ]

  const renderSection = (): ReactElement | null => {
    const Component =
      seeAboutMe ? <AboutMe /> :
      seeSkills ? <Skills /> :
      seeProjects ? <Projects /> :
      seeContacts ? <ContactMe /> : null

    return (
      <div className="flex flex-col-reverse md:flex-row pt-0 mt-0">
        <div className="flex-1 bg-white border-6 border-[#A0522D] rounded-xl shadow-md text-center flex flex-col justify-center relative m-4 p-4 md:order-1">
          <div className="absolute inset-2 border-6 border-dashed border-[#e7a789] rounded-xl z-0"></div>
          {Component}
        </div>
        <div className="flex justify-center items-center m-4 md:order-2">
          <GameCharacterCard />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col overflow-y-auto">
      <IntroOverlay />
      <Bubbles />
      <Navbar />
      <div className="flex-[3] bg-[#FFFDD0] p-2 flex flex-col overflow-hidden justify-center">
        {renderSection()}
        <div className={`flex flex-col md:flex-row gap-4 pb-4 ${comicNeue.className}`}>
          {options.map((item, index) => {
            const colors: Record<Color, { bg: string; border: string; text: string }> = {
              pink: {
                bg: item.active ? 'bg-gradient-to-br from-pink-300 to-pink-500' : 'bg-pink-200',
                border: item.active ? 'border-yellow-400' : 'border-pink-400',
                text: item.active ? 'text-white' : 'text-pink-700',
              },
              purple: {
                bg: item.active ? 'bg-gradient-to-br from-purple-300 to-purple-500' : 'bg-purple-200',
                border: item.active ? 'border-yellow-400' : 'border-purple-400',
                text: item.active ? 'text-white' : 'text-purple-700',
              },
              blue: {
                bg: item.active ? 'bg-gradient-to-br from-blue-300 to-blue-500' : 'bg-blue-200',
                border: item.active ? 'border-yellow-400' : 'border-blue-400',
                text: item.active ? 'text-white' : 'text-blue-700',
              },
              green: {
                bg: item.active ? 'bg-gradient-to-br from-green-300 to-green-500' : 'bg-green-200',
                border: item.active ? 'border-yellow-400' : 'border-green-400',
                text: item.active ? 'text-white' : 'text-green-700',
              },
            }

            return (
              <div
                key={index}
                onClick={item.onClick}
                className={`cursor-pointer ${colors[item.color].bg} rounded-xl shadow-md p-8 flex-1 text-center m-3
                  border-4 ${colors[item.color].border}
                  ${item.active ? 'scale-105 shadow-lg' : 'hover:scale-105'}
                  transition-all relative overflow-hidden`}
              >
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
                <div className="flex flex-col items-center relative z-10">
                  <h2 className={`text-xl font-bold ${colors[item.color].text} mb-1`}>
                    {item.title}
                  </h2>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home

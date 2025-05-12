/* eslint-disable */

import React, { useState } from 'react';

interface Skill {
  id: string;
  name: string;
  level: number;
  maxLevel: number;
  description: string;
  color: string;
  icon: string;
}

const CozyBrownSkills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const technicalSkills: Skill[] = [
    { id: 'python', name: 'Python', level: 7, maxLevel: 10, description: 'Python is the first language that I learned, I used to make school projects using it', color: 'chocolate', icon: '🍪' },
    { id: 'react', name: 'React', level: 8, maxLevel: 10, description: 'Making a good components and useful for frontend development', color: 'chocolate', icon: '🍪' },
    { id: 'clang', name: 'C Programming Language', level: 6.5, maxLevel: 10, description: 'Low-Level Programming Langauge good for manipulating the system of a computer', color: 'chocolate', icon: '🍪' },
    { id: 'javascript', name: 'JavaScript and TypeScript', level: 7, maxLevel: 10, description: 'Brewing powerful experiences', color: 'caramel', icon: '☕' },
    { id: 'css', name: 'CSS/Tailwind', level: 8, maxLevel: 10, description: 'Styling beautiful interfaces', color: 'mocha', icon: '🍩' },
    { id: 'gdscript', name: 'GDScript', level: 6, maxLevel: 10, description: 'Scripting for game development with Godot engine', color: 'mocha', icon: '🎮' },
    { id: 'figma', name: 'Figma', level: 7, maxLevel: 10, description: 'Designing user interfaces and prototypes', color: 'caramel', icon: '🎨' },
  ];

  const softSkills: Skill[] = [
    { id: 'communication', name: 'Communication', level: 7, maxLevel: 10, description: 'Clear, thoughtful expression', color: 'caramel', icon: '💬' },
    { id: 'teamwork', name: 'Teamwork', level: 9, maxLevel: 10, description: 'Collaborating effectively', color: 'mocha', icon: '🤝' },
    { id: 'adaptability', name: 'Adaptability', level: 8, maxLevel: 10, description: 'Thrives in change', color: 'chocolate', icon: '🌱' },
    { id: 'hardworking', name: 'Hard-Working', level: 9, maxLevel: 10, description: 'Persistent, dedicated, and always giving 100%', color: 'honey', icon: '💪' },
    { id: 'creativity', name: 'Creativity', level: 8, maxLevel: 10, description: 'Brings fresh ideas and innovative solutions', color: 'vanilla', icon: '🎨' },
    { id: 'time-management', name: 'Time Management', level: 8, maxLevel: 10, description: 'Effectively prioritizes tasks and meets deadlines', color: 'latte', icon: '⏰' },
    { id: 'problem-solving', name: 'Problem Solving', level: 9, maxLevel: 10, description: 'Analyzes challenges and finds effective solutions', color: 'espresso', icon: '🧠' },
  ];

  const handleSkillClick = (skill: Skill) => {
    setActiveSkill(skill.id === activeSkill ? null : skill.id);
  };


  const getColorClass = (color: string): string =>
    ({
      chocolate: 'bg-amber-700 border-amber-800',
      caramel: 'bg-amber-500 border-amber-600',
      mocha: 'bg-amber-900 border-amber-950',
      honey: 'bg-yellow-500 border-yellow-600',
      vanilla: 'bg-yellow-200 border-yellow-300',
      latte: 'bg-yellow-300 border-yellow-400',
      espresso: 'bg-yellow-800 border-yellow-900',
    }[color] || 'bg-amber-600 border-amber-700');

  const getBgColorClass = (color: string): string =>
    ({
      chocolate: 'bg-amber-100',
      caramel: 'bg-amber-50',
      mocha: 'bg-amber-100',
    }[color] || 'bg-amber-50');

  const getColorTextClass = (color: string): string =>
    ({
      chocolate: 'text-amber-700',
      caramel: 'text-amber-500',
      mocha: 'text-amber-900',
    }[color] || 'text-amber-600');

  const CookieCrumb: React.FC<{ filled: boolean; color: string }> = ({ filled, color }) => {
    const crumbColor = filled ? getColorTextClass(color) : 'text-amber-200';
    return <span className={`text-lg ${crumbColor}`}>●</span>;
  };

  const renderSkillCard = (skill: Skill) => (
    <div key={skill.id} className="relative mb-4">
      <div
        className={`bg-amber-50 rounded-2xl border-3 ${
          activeSkill === skill.id ? 'border-amber-500 shadow-md' : 'border-amber-300'
        } overflow-hidden cursor-pointer transition-all duration-300 hover:bg-amber-100`}
        onClick={() => handleSkillClick(skill)}
      >
        <div className="flex items-center p-4">
          <div className={`flex items-center justify-center w-12 h-12 rounded-full text-2xl ${getColorClass(skill.color)}`}>
            {skill.icon}
          </div>
          <div className="ml-4 flex-grow">
            <div className="flex justify-between items-center">
              <h3 className={`text-xl font-bold ${getColorTextClass(skill.color)}`}>{skill.name}</h3>
              <div className="bg-amber-100 px-3 py-1 rounded-full font-medium text-amber-700 text-sm border border-amber-200">
                Lvl {skill.level}
              </div>
            </div>
            <div className="w-full bg-amber-100 rounded-full h-3 mt-2 overflow-hidden border border-amber-200">
              <div
                className={`${getColorClass(skill.color)} h-3 rounded-full transition-all duration-300`}
                style={{ width: `${(skill.level / skill.maxLevel) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {activeSkill === skill.id && (
          <div className={`p-4 ${getBgColorClass(skill.color)} border-t border-amber-200 animate-fadeIn`}>
            <p className="text-amber-800 mb-4 italic">{skill.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-1">
                {[...Array(skill.maxLevel)].map((_, i) => (
                  <CookieCrumb key={i} filled={i < skill.level} color={skill.color} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="h-[600px] w-full p-6 rounded-3xl flex flex-col">
      {/* Header */}
      <div className="hidden md:flex justify-between items-center mb-4">
        <div className="flex items-center bg-amber-100 px-4 py-2 rounded-2xl border-2 border-amber-300">
          <span className="text-3xl mr-2">🧁</span>
          <h1 className="text-3xl font-bold text-amber-800 tracking-wide">Technical Skills</h1>
        </div>
        <div className="flex items-center bg-amber-100 px-4 py-2 rounded-2xl border-2 border-amber-300">
          <span className="text-3xl mr-2">💡</span>
          <h1 className="text-3xl font-bold text-amber-800 tracking-wide">Soft Skills</h1>
        </div>
      </div>

      {/* Scrollable Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow overflow-hidden">
        <div className="h-full overflow-y-auto pr-2">
          <h2 className="text-xl font-bold text-amber-700 mb-2">🔧 Technical Skills</h2>
          {technicalSkills.map(renderSkillCard)}
        </div>
        <div className="h-full overflow-y-auto pr-2">
          <h2 className="text-xl font-bold text-amber-700 mb-2">💬 Soft Skills</h2>
          {softSkills.map(renderSkillCard)}
        </div>
      </div>
    </div>
  );
};

export default CozyBrownSkills;

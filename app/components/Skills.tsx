import React, { useState } from 'react';

const CozyBrownSkills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [skillPoints, setSkillPoints] = useState(5);

  // Separate skill data
  const technicalSkills = [
    { id: 'python', name: 'Python', level: 7, maxLevel: 10, description: 'Python is the first langugae that I learned, I used to make school projects using it', color: 'chocolate', icon: '🍪' },
    { id: 'react', name: 'React', level: 8, maxLevel: 10, description: 'Crafting delightful components', color: 'chocolate', icon: '🍪' },
    { id: 'clang', name: 'C Programming Language', level: 6.5, maxLevel: 10, description: 'Crafting delightful components', color: 'chocolate', icon: '🍪' },

    { id: 'javascript', name: 'JavaScript and TypeScript', level: 7, maxLevel: 10, description: 'Brewing powerful experiences', color: 'caramel', icon: '☕' },
    { id: 'css', name: 'CSS/Tailwind', level: 8, maxLevel: 10, description: 'Styling beautiful interfaces', color: 'mocha', icon: '🍩' },
    // Add more technical skills as needed
  ];

  const softSkills = [
    { id: 'communication', name: 'Communication', level: 7, maxLevel: 10, description: 'Clear, thoughtful expression', color: 'caramel', icon: '💬' },
    { id: 'teamwork', name: 'Teamwork', level: 9, maxLevel: 10, description: 'Collaborating effectively', color: 'mocha', icon: '🤝' },
    { id: 'adaptability', name: 'Adaptability', level: 8, maxLevel: 10, description: 'Thrives in change', color: 'chocolate', icon: '🌱' },
    // Add more soft skills as needed
  ];

    const handleSkillClick = (skill) => {
        setActiveSkill(skill.id === activeSkill ? null : skill.id);
    };

    const upgradeSkill = (skillId) => {
        const allSkills = [...technicalSkills, ...softSkills];
        const skillToUpgrade = allSkills.find(s => s.id === skillId);
        if (skillPoints > 0 && skillToUpgrade.level < skillToUpgrade.maxLevel) {
        skillToUpgrade.level += 1;
        setSkillPoints(skillPoints - 1);
        }
    };

    const getColorClass = (color) => ({
        chocolate: 'bg-amber-700 border-amber-800',
        caramel: 'bg-amber-500 border-amber-600',
        mocha: 'bg-amber-900 border-amber-950',
    }[color] || 'bg-amber-600 border-amber-700');

    const getBgColorClass = (color) => ({
        chocolate: 'bg-amber-100',
        caramel: 'bg-amber-50',
        mocha: 'bg-amber-100',
    }[color] || 'bg-amber-50');

    const getColorTextClass = (color) => ({
        chocolate: 'text-amber-700',
        caramel: 'text-amber-500',
        mocha: 'text-amber-900',
    }[color] || 'text-amber-600');

  const CookieCrumb = ({ filled, color }) => {
    const crumbColor = filled
      ? getColorTextClass(color)
      : 'text-amber-200';
    return <span className={`text-lg ${crumbColor}`}>●</span>;
  };

  const renderSkillCard = (skill) => (
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
      <div className="flex justify-between items-center mb-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center bg-amber-100 px-4 py-2 rounded-2xl border-2 border-amber-300">

        <div className="flex items-center">
          <span className="text-3xl mr-2">🧁</span>
          <h1 className="text-3xl font-bold text-amber-800 tracking-wide">Technical Skills</h1>
        </div>
        </div>
      </div>



      <div className="flex items-center  px-4 py-2 rounded-2xl">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center bg-amber-100 px-4 py-2 rounded-2xl border-2 border-amber-300">

          <div className="flex items-center">
            <span className="text-3xl mr-2">🧁</span>
            <h1 className="text-3xl font-bold text-amber-800 tracking-wide">Soft Skills</h1>
          </div>
          </div>
        </div>
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

import React, { useState,useEffect } from 'react';
import { Heart, Star, Code, Link, Grid, Box, Gamepad } from 'lucide-react';

// Define the Project interface
interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  icon?: React.ReactNode;
  color: string;
}

// Sample project data
const projects: Project[] = [
  { 
    id: 1,
    name: 'Tidal Tidying',
    description: 'A platformer game made by using Godot Engine. Submitted to Alliance Française de Manille Game Jam 2023 and won 1st place. This game aims to promote marine life reservation by collecting trashes and tidying the marine environment.',
    technologies: ['Godot Script', 'Godot'],
    liveLink: 'https://isenpachi.itch.io/tidal-tidying',
    difficulty: 'Medium',
    icon: <Grid className="w-12 h-12" />,
    color: 'purple'
  },
  {
    id: 2,
    name: 'World Hell',
    description: 'A game created using Java and JavaFXGL. The world has come to an end. A zombie apocalypse corrupts it.The main goal is to kill zombie, fight back and stay alive until the rescuer come to get you after 9 minutes. You can get loots and power ups by killing the zombie that can increase the chances of your survival.',
    technologies: ['Java', 'JavaFXG'],
    githubLink: 'https://github.com/Maybeeelle/world-hell',
    difficulty: 'Hard',
    icon: <Box className="w-12 h-12" />,
    color: 'green'
  },
  {
    id: 3,
    name: 'SDG 17 Website',
    description: 'A playful calculator with cute sound effects and colorful design',
    technologies: ['JavaScript', 'CSS Animations', 'CSS', 'HTML'],
    githubLink: 'https://github.com/Maybeeelle/SDG-17',
    difficulty: 'Easy',
    icon: <Star className="w-12 h-12" />,
    color: 'yellow'
  },
  {
    id: 4,
    name: 'Student Management System',
    description: 'It was made using JavaScript, React and MongoDB. This system will facilitate the efficient management of student information, and subject grades, and provide essential functionalities such as adding, editing, and removing students, subjects, and grades. Additionally, the system will support grade summaries, remarks, rolebased access, and historical data tracking.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    difficulty: 'Medium',
    icon: <Heart className="w-12 h-12" />,
    color: 'pink'
  },
  {
    id: 5,
    name: 'Rizal’s 3D Realm: Capture History',
    description: 'Developed an educational game centered on Rizal’s life with the team M3RJ Conflict for the Game Game Plus Philippines 2024. Handled 2D Assets from itch.io and developed the gameplay mechanics using GDScript in Godot 4.',
    technologies: ['Godot', 'Godot Script'],
    liveLink: 'https://isenpachi.itch.io/rizals-3d-realm-capture-history',
    difficulty: 'Hard',
    icon: <Gamepad className="w-12 h-12" />,
    color: 'blue'
  },
  {
    id: 6,
    name: 'Farm-On-table',
    description:'Designed and developed the backend infrastructure and Database Model for Farm-on-Table using JavaScript,MongoDB,Express.js and Node.js, a web platform facilitating direct transactions between farmers and consumers, independently using MERN Stack',
    technologies: ['MongoDB', 'Atlas','Tailwind', 'TypeScript', 'Node.js'],
    difficulty: 'Hard',
    icon: <Gamepad className="w-12 h-12" />,
    color: 'blue'
  }
];

const Projects: React.FC = () => {
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProjectColors = (color: string) => {
    switch (color) {
      case 'purple': return {
        bg: 'bg-purple-50 hover:bg-purple-100',
        border: 'border-purple-200 hover:border-purple-300',
        text: 'text-purple-600',
        iconBg: 'bg-purple-100'
      };
      case 'green': return {
        bg: 'bg-green-50 hover:bg-green-100',
        border: 'border-green-200 hover:border-green-300',
        text: 'text-green-600',
        iconBg: 'bg-green-100'
      };
      case 'yellow': return {
        bg: 'bg-yellow-50 hover:bg-yellow-100',
        border: 'border-yellow-200 hover:border-yellow-300',
        text: 'text-yellow-600',
        iconBg: 'bg-yellow-100'
      };
      case 'pink': return {
        bg: 'bg-pink-50 hover:bg-pink-100',
        border: 'border-pink-200 hover:border-pink-300',
        text: 'text-pink-600',
        iconBg: 'bg-pink-100'
      };
      case 'blue': return {
        bg: 'bg-blue-50 hover:bg-blue-100',
        border: 'border-blue-200 hover:border-blue-300',
        text: 'text-blue-600',
        iconBg: 'bg-blue-100'
      };
      default: return {
        bg: 'bg-gray-50 hover:bg-gray-100',
        border: 'border-gray-200 hover:border-gray-300',
        text: 'text-gray-600',
        iconBg: 'bg-gray-100'
      };
    }
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  

  return (
    <div className="h-[600px] w-full p-6 rounded-3xl flex flex-col">
      <div className="container mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-purple-600 mb-8 sm:mb-12 
          drop-shadow-lg flex items-center justify-center space-x-2 sm:space-x-4">
          <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" fill="currentColor" />
          <span>Project Adventures</span>
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400" fill="currentColor" />
        </h1>

        <div className="max-h-[480px] overflow-y-auto pr-2">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">


        {projects.map((project) => {
            const colors = getProjectColors(project.color);
            return (
              <div 
                key={project.id}
                className={`${colors.bg} ${colors.border} rounded-2xl shadow-md hover:shadow-xl 
                            p-4 sm:p-6 transform transition-all hover:scale-90 
                            cursor-pointer border-4 flex flex-col items-center text-center 
                            relative overflow-hidden`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Icon */}
                <div className={`mb-3 sm:mb-4 ${colors.iconBg} rounded-full p-3 sm:p-4`}>
                  {React.cloneElement(project.icon as React.ReactElement<{ className?: string }>, {
                    className: `w-8 h-8 sm:w-12 sm:h-12 ${colors.text}`
                  })}

                </div>

                {/* Project Name */}
                <h2 className={`text-base sm:text-xl font-semibold ${colors.text} mb-2`}>
                  {project.name}
                </h2>

                {/* Difficulty Tag */}
                <span className={`absolute top-2 right-2 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-bold ${getDifficultyColor(project.difficulty)}`}>
                  {project.difficulty}
                </span>

                {/* Technologies */}
                <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className={`${colors.iconBg} ${colors.text} px-1.5 py-0.5 rounded-full text-xs`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="absolute inset-0 z-50 backdrop-blur-sm bg-white/30 pointer-events-none flex items-center justify-center ">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full relative pointer-events-auto shadow-2xl">
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-purple-600"
              >
                ✕
              </button>

              {/* Project Icon */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className={`${getProjectColors(selectedProject.color).iconBg} rounded-full p-4 sm:p-6`}>                  
                {React.cloneElement(selectedProject.icon as React.ReactElement<{ className?: string }>, {
                  className: `w-8 h-8 sm:w-12 sm:h-12 ${(selectedProject.colors).text}`
                })}
                </div>
              </div>
            
              {/* Project Details */}
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-4" style={{color: getProjectColors(selectedProject.color).text}}>
                {selectedProject.name}
              </h2>
              <p className="text-gray-700 mb-4 text-center text-sm sm:text-base">
                {selectedProject.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {selectedProject.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className={`${getProjectColors(selectedProject.color).iconBg} ${getProjectColors(selectedProject.color).text} px-2 py-1 rounded-full text-xs`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Difficulty */}
              <div className="flex justify-center mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyColor(selectedProject.difficulty)}`}>
                  Difficulty: {selectedProject.difficulty}
                </span>
              </div>

              {/* Project Links */}
              <div className="flex justify-center space-x-4 mt-6">
                {selectedProject.githubLink && (
                  <a 
                    href={selectedProject.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-purple-500 text-white px-4 py-2 rounded-full 
                               hover:bg-purple-600 flex items-center text-sm sm:text-base"
                  >
                    <Code className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> GitHub
                  </a>
                )}
                {selectedProject.liveLink && (
                  <a 
                    href={selectedProject.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-pink-500 text-white px-4 py-2 rounded-full 
                               hover:bg-pink-600 flex items-center text-sm sm:text-base"
                  >
                    <Link className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Projects;
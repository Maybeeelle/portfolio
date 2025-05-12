import React, { useState } from 'react';
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
const initialProjects: Project[] = [
  {
    id: 1,
    name: 'Magical Todo App',
    description: 'A whimsical task management app with cute animations and sparkly completions!',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    githubLink: 'https://github.com/yourusername/magical-todo',
    difficulty: 'Medium',
    icon: <Grid className="w-12 h-12" />,
    color: 'purple'
  },
  {
    id: 2,
    name: 'Pixel Pet Tracker',
    description: 'Adorable virtual pet that grows based on your coding progress!',
    technologies: ['Next.js', 'Firebase', 'Framer Motion'],
    githubLink: 'https://github.com/yourusername/pixel-pet',
    difficulty: 'Hard',
    icon: <Box className="w-12 h-12" />,
    color: 'green'
  },
  {
    id: 3,
    name: 'Rainbow Calculator',
    description: 'A playful calculator with cute sound effects and colorful design',
    technologies: ['Vue.js', 'TypeScript', 'CSS Animations'],
    liveLink: 'https://rainbow-calculator.netlify.app',
    difficulty: 'Easy',
    icon: <Star className="w-12 h-12" />,
    color: 'yellow'
  },
  {
    id: 4,
    name: 'Cosmic Messenger',
    description: 'A delightful chat app with space-themed interactions and cute animations',
    technologies: ['React', 'Socket.io', 'Tailwind'],
    githubLink: 'https://github.com/yourusername/cosmic-messenger',
    difficulty: 'Medium',
    icon: <Heart className="w-12 h-12" />,
    color: 'pink'
  },
  {
    id: 5,
    name: 'Game Level Builder',
    description: 'An interactive tool for designing 2D game levels with real-time preview',
    technologies: ['Electron', 'Canvas', 'TypeScript'],
    githubLink: 'https://github.com/yourusername/game-level-builder',
    difficulty: 'Hard',
    icon: <Gamepad className="w-12 h-12" />,
    color: 'blue'
  },
  {
    id: 6,
    name: 'Game Level Builder',
    description: 'An interactive tool for designing 2D game levels with real-time preview',
    technologies: ['Electron', 'Canvas', 'TypeScript'],
    githubLink: 'https://github.com/yourusername/game-level-builder',
    difficulty: 'Hard',
    icon: <Gamepad className="w-12 h-12" />,
    color: 'blue'
  },
  {
    id: 7,
    name: 'Game Level Builder',
    description: 'An interactive tool for designing 2D game levels with real-time preview',
    technologies: ['Electron', 'Canvas', 'TypeScript'],
    githubLink: 'https://github.com/yourusername/game-level-builder',
    difficulty: 'Hard',
    icon: <Gamepad className="w-12 h-12" />,
    color: 'blue'
  },
  {
    id: 8,
    name: 'Game Level Builder',
    description: 'An interactive tool for designing 2D game levels with real-time preview',
    technologies: ['Electron', 'Canvas', 'TypeScript'],
    githubLink: 'https://github.com/yourusername/game-level-builder',
    difficulty: 'Hard',
    icon: <Gamepad className="w-12 h-12" />,
    color: 'blue'
  },
  {
    id: 9,
    name: 'Game Level Builder',
    description: 'An interactive tool for designing 2D game levels with real-time preview',
    technologies: ['Electron', 'Canvas', 'TypeScript'],
    githubLink: 'https://github.com/yourusername/game-level-builder',
    difficulty: 'Hard',
    icon: <Gamepad className="w-12 h-12" />,
    color: 'blue'
  },
  {
    id: 10,
    name: 'Game Level Builder',
    description: 'An interactive tool for designing 2D game levels with real-time preview',
    technologies: ['Electron', 'Canvas', 'TypeScript'],
    githubLink: 'https://github.com/yourusername/game-level-builder',
    difficulty: 'Hard',
    icon: <Gamepad className="w-12 h-12" />,
    color: 'blue'
  }
];

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
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

  return (
    <div className="h-[600px] w-full p-6 rounded-3xl flex flex-col">
      <div className="container mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-purple-600 mb-8 sm:mb-12 
          drop-shadow-lg flex items-center justify-center space-x-2 sm:space-x-4">
          <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" fill="currentColor" />
          <span>My Project Playground</span>
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
                  {React.cloneElement(project.icon as React.ReactElement, {
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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full relative">
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
                  {React.cloneElement(selectedProject.icon as React.ReactElement, {
                    className: `w-12 h-12 sm:w-16 sm:h-16 ${getProjectColors(selectedProject.color).text}`
                  })}
                </div>
              </div>

              {/* Project Details */}
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4" style={{color: getProjectColors(selectedProject.color).text}}>
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
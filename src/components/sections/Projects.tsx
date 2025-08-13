'use client';
import { projects } from '../../data/projects';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="py-16 md:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-12 md:mb-16 tracking-tight">
          Projects
        </h2>
        
        {/* Slider principal */}
        <div className="relative bg-gray-800 rounded-xl p-4 md:p-6 lg:p-8 min-h-[300px] md:min-h-[400px]">
          {/* Navegación */}
          <div className="absolute top-3 md:top-4 right-3 md:right-4 flex gap-2">
            <button onClick={prevProject} className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button onClick={nextProject} className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          {/* Contenido del proyecto */}
          <div className="max-w-4xl">
            <div className="mb-3 md:mb-4">
              <span className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-light ${
                currentProject.category === 'fullstack' ? 'bg-green-600' :
                currentProject.category === 'backend' ? 'bg-blue-600' :
                currentProject.category === 'frontend' ? 'bg-purple-600' : 'bg-orange-600'
              }`}>
                {currentProject.category}
              </span>
            </div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-3 md:mb-4 tracking-tight">
              {currentProject.title}
            </h3>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed">
              {currentProject.description}
            </p>
            
            {/* Tecnologías */}
            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
              {currentProject.technologies.map((tech) => (
                <span key={tech} className="px-2 md:px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs md:text-sm font-light">
                  {tech}
                </span>
              ))}
            </div>

            {/* Enlaces */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              {currentProject.repository && (
                <a href={currentProject.repository} className="flex items-center justify-center sm:justify-start gap-2 px-3 md:px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                  <Github className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="font-light text-sm md:text-base">Código</span>
                </a>
              )}
              {currentProject.demo && (
                <a href={currentProject.demo} className="flex items-center justify-center sm:justify-start gap-2 px-3 md:px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors">
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="font-light text-sm md:text-base">Ver Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 md:mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid de proyectos pequeños */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setCurrentIndex(index)}
              className={`p-3 md:p-4 rounded-lg cursor-pointer transition-all ${
                index === currentIndex 
                  ? 'bg-blue-600 scale-105' 
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              <h4 className="font-light mb-2 text-sm md:text-base">{project.title}</h4>
              <p className="text-xs md:text-sm text-gray-400 truncate font-light">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
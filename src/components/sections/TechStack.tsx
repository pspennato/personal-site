'use client';
import { techStack } from '../../data/skills';
import { Cpu, Server, Globe, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const iconMap: { [key: string]: LucideIcon } = {
  'Cpu': Cpu,
  'Server': Server,
  'Globe': Globe,
  'Zap': Zap
};

function TechStack() {
  const { t } = useTranslation();

  return (
    <section id="tech-stack" className="py-16 md:py-20 px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-12 md:mb-16 tracking-tight">
          {t('techStack.title')}
        </h2>
        
        {/* Línea lateral - solo desktop */}
        <div className="hidden md:block absolute left-8 lg:left-24 top-32 bottom-32 w-1 bg-gradient-to-b from-red-500 via-blue-500 via-green-500 to-cyan-500 opacity-30"></div>
        
        <div className="space-y-8 md:space-y-12 relative">
          {techStack.map((layer) => {
            const IconComponent = iconMap[layer.icon];
            return (
              <div key={layer.layer} className="relative">
                
                {/* Conexión horizontal - solo desktop */}
                <div className="hidden md:block absolute left-8 lg:left-24 top-6 md:top-8 w-6 md:w-8 h-1 bg-white opacity-20"></div>
                
                {/* Contenido de la capa */}
                <div className="md:ml-20 lg:ml-36 border-b border-gray-800 pb-6 md:pb-8 last:border-b-0">
                  
                  {/* Header de la capa */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-4">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className={`p-2 md:p-3 rounded-lg bg-gradient-to-r ${layer.color} text-white flex-shrink-0`}>
                        {IconComponent && <IconComponent className="w-5 h-5 md:w-6 md:h-6" />}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white tracking-tight">
                          {layer.layer}
                        </h3>
                        <p className="text-gray-500 text-xs sm:text-sm font-light">
                          {layer.experience} • {layer.projects} {t('techStack.layers.' + layer.layer.toLowerCase().replace(/ & /g, '').replace(/ /g, '') + '.projects')}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {layer.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-gray-400 text-xs sm:text-sm border border-gray-800 px-2 md:px-3 py-1 rounded-full hover:border-gray-700 hover:text-gray-300 transition-colors font-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                </div>
                
              </div>
            );
          })}
        </div>
        
        {/* Resumen */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-800">
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
            {t('techStack.summary')}
          </p>
        </div>
        
      </div>
    </section>
  );
}

export default TechStack;
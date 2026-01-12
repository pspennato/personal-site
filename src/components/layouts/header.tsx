'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();
  const [currentSection, setCurrentSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (scrollPosition < window.innerHeight * 0.5) {
        setCurrentSection('hero');
        return;
      }
      
      const sections = ['services', 'about', 'tech-stack', 'projects', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - 200 && scrollPosition < offsetTop + offsetHeight - 200) {
            setCurrentSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-between items-center w-full px-4 md:px-8 lg:px-16 py-3 md:py-4">
        
        {/* Logo circular con nombre dinámico */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => scrollToSection('about')}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs md:text-sm font-semibold hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 hover:scale-110"
          >
            PS
          </button>
          
          {/* Nombre - oculto en móvil cuando hay menu */}
          {currentSection !== 'hero' && !isMenuOpen && (
            <motion.span 
              className="hidden sm:block text-white text-sm md:text-base font-light"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
            >
              Pablo Spennato
            </motion.span>
          )}
        </div>
        
        {/* Navegación Desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <nav className="flex gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base font-light"
            >
              {t('navigation.services')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base font-light"
            >
              {t('navigation.about')}
            </button>
            <button
              onClick={() => scrollToSection('tech-stack')}
              className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base font-light"
            >
              {t('navigation.techStack')}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base font-light"
            >
              {t('navigation.projects')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base font-light"
            >
              {t('navigation.contact')}
            </button>
          </nav>
          
          {/* Language Switcher - Desktop */}
          <div className="ml-4 pl-4 border-l border-gray-700">
            <LanguageSwitcher />
          </div>
        </div>
        
        {/* Right side mobile: Language + Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
      </div>
      
      {/* Menu móvil */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-gray-900 border-t border-gray-800"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col py-4">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-400 hover:text-white transition-colors py-3 px-4 text-left font-light"
            >
              {t('navigation.services')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-white transition-colors py-3 px-4 text-left font-light"
            >
              {t('navigation.about')}
            </button>
            <button
              onClick={() => scrollToSection('tech-stack')}
              className="text-gray-400 hover:text-white transition-colors py-3 px-4 text-left font-light"
            >
              {t('navigation.techStack')}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-400 hover:text-white transition-colors py-3 px-4 text-left font-light"
            >
              {t('navigation.projects')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-400 hover:text-white transition-colors py-3 px-4 text-left font-light"
            >
              {t('navigation.contact')}
            </button>
          </nav>
        </motion.div>
      )}
      
    </motion.header>
  );
}

export default Header;
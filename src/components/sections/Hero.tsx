'use client';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

function Hero() {
  const { t } = useTranslation();
  const [yearsCount, setYearsCount] = useState(0);

  // Counter animation for years
  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const end = 25;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 50);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setYearsCount(end);
          clearInterval(counter);
        } else {
          setYearsCount(Math.floor(start));
        }
      }, 50);

      return () => clearInterval(counter);
    }, 1000); // Start after 1 second

    return () => clearTimeout(timer);
  }, []);

  const services = [
    { key: 'migration', delay: 0.8 },
    { key: 'firmware', delay: 0.9 },
    { key: 'leadership', delay: 1.0 }
  ];

  return (
    <motion.section 
      id="hero" 
      className="h-screen flex flex-col justify-between p-4 md:p-8 lg:p-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      
      {/* Espaciador superior */}
      <div className="h-16 md:h-20"></div>
      
      {/* Contenido principal centrado */}
      <div className="flex-1 flex flex-col justify-center max-w-5xl">
        
        {/* Nombre */}
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 md:mb-6 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('hero.name')}
        </motion.h1>
        
        {/* Título principal */}
        <motion.h2 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light mb-8 md:mb-12 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('hero.title')}
        </motion.h2>
        
        {/* Servicios */}
        <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
          {services.map((service) => (
            <motion.div
              key={service.key}
              className="flex items-center gap-3 md:gap-4 group cursor-default"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              whileHover={{ x: 10 }}
            >
              <motion.div 
                className="w-2 h-2 bg-blue-400 rounded-full group-hover:bg-blue-300 transition-colors"
                whileHover={{ scale: 1.2 }}
              />
              <span className="text-lg md:text-xl lg:text-2xl text-gray-400 font-light group-hover:text-gray-300 transition-colors">
                {t(`hero.services.${service.key}`)}
              </span>
            </motion.div>
          ))}
        </div>
        
        {/* Experiencia con counter */}
        <motion.div 
          className="text-base sm:text-lg md:text-xl text-gray-500 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <span className="text-2xl md:text-3xl lg:text-4xl text-white font-light">
            {yearsCount}+
          </span>{' '}
          {t('hero.experience')}
        </motion.div>
        
      </div>
      
      {/* Footer inferior */}
      <motion.div 
        className="text-xs sm:text-sm text-gray-500 text-center sm:text-left font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        {t('hero.location')}
      </motion.div>
      
    </motion.section>
  );
}

export default Hero;
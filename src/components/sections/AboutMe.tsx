'use client';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

function AboutMe() {
  const { t } = useTranslation();

  return (
    <motion.section 
      id="about"
      className="min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 py-16 md:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto w-full">
        
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-8 md:mb-16 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('about.title')}
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Texto */}
          <div className="space-y-6 md:space-y-8 text-gray-300 order-2 lg:order-1">
            
            <motion.p
              className="text-base sm:text-lg md:text-xl font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {t('about.paragraphs.intro')}
            </motion.p>

            <motion.p
              className="text-base sm:text-lg md:text-xl font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('about.paragraphs.legacy')}
            </motion.p>

            <motion.p
              className="text-base sm:text-lg md:text-xl font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {t('about.paragraphs.approach')}
            </motion.p>
            
            <motion.p
              className="text-base sm:text-lg md:text-xl font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t('about.paragraphs.leadership')}
            </motion.p>

            <motion.p
              className="text-base sm:text-lg md:text-xl font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {t('about.paragraphs.expertise')}
            </motion.p>

            <motion.div
              className="pt-4 md:pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed">
                {t('about.paragraphs.conclusion')}
                <br className="hidden sm:block" />
                <span className="text-blue-400">{t('about.paragraphs.value')}</span>
              </p>
            </motion.div>
            
          </div>
          
          {/* Imagen */}
          <motion.div 
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-64 sm:w-72 md:w-80 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
              <picture>
                <source srcSet="/profile.webp" type="image/webp" />
                <Image
                  src="/profile.png"
                  alt="Pablo Spennato"
                  width={934}
                  height={1244}
                  className="w-full h-auto object-contain"
                  priority
                />
              </picture>
            </div>
          </motion.div>
          
        </div>
        
      </div>
    </motion.section>
  );
}

export default AboutMe;
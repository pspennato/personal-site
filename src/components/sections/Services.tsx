'use client';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  ArrowRightLeft, 
  Cloud, 
  Users, 
  Settings 
} from 'lucide-react';

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: ArrowRightLeft,
      key: 'migration',
      color: 'text-blue-400'
    },
    {
      icon: Cloud,
      key: 'cloud',
      color: 'text-green-400'
    },
    {
      icon: Users,
      key: 'leadership',
      color: 'text-purple-400'
    },
    {
      icon: Settings,
      key: 'integration',
      color: 'text-orange-400'
    }
  ];

  return (
    <motion.section 
      id="services"
      className="min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 py-16 md:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto w-full">
        
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-8 md:mb-16 tracking-tight text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('services.title')}
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-300 text-center mb-12 md:mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {t('services.subtitle')}
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.key}
                className="group p-6 md:p-8 border border-gray-800 rounded-lg hover:border-gray-600 transition-all duration-300 hover:bg-gray-900/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors ${service.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-light text-white mb-3 group-hover:text-gray-100">
                      {t(`services.items.${service.key}.title`)}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {t(`services.items.${service.key}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </motion.section>
  );
}

export default Services;
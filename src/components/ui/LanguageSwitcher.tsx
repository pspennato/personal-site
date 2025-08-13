'use client';
import { useTranslation } from 'react-i18next';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const currentLanguage = i18n.language;

  const switchLanguage = (newLanguage: string) => {
    if (newLanguage === currentLanguage) return;
    
    // Change i18n language
    i18n.changeLanguage(newLanguage);
    
    // Update URL
    const segments = pathname.split('/');
    segments[1] = newLanguage;
    const newPath = segments.join('/');
    
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2 text-sm font-light">
      <motion.button
        onClick={() => switchLanguage('es')}
        className={`px-3 py-1 rounded transition-all duration-300 ${
          currentLanguage === 'es'
            ? 'text-white bg-gray-800'
            : 'text-gray-400 hover:text-gray-300'
        }`}
        whileHover={{ scale: currentLanguage !== 'es' ? 1.05 : 1 }}
      >
        ES
      </motion.button>
      
      <span className="text-gray-600">•</span>
      
      <motion.button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 rounded transition-all duration-300 ${
          currentLanguage === 'en'
            ? 'text-white bg-gray-800'
            : 'text-gray-400 hover:text-gray-300'
        }`}
        whileHover={{ scale: currentLanguage !== 'en' ? 1.05 : 1 }}
      >
        EN
      </motion.button>
    </div>
  );
}
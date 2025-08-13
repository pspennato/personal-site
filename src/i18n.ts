import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import es from './messages/es.json';
import en from './messages/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      es: {
        translation: es
      }
    },
    lng: 'es', // default language
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // react already does escaping
    },
  });

export default i18n;
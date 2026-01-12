'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    website: '' // Honeypot field
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setStatus('');

    // Honeypot protection - if website field is filled, it's a bot
    if (formData.website) {
      console.log('Bot detected via honeypot');
      setIsLoading(false);
      // Fake success to fool bots
      setStatus('success');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    // Rate limiting - check last submission time
    const lastSubmitTime = localStorage.getItem('lastContactSubmit');
    const now = Date.now();
    const cooldownPeriod = 60000; // 60 seconds

    if (lastSubmitTime && now - parseInt(lastSubmitTime) < cooldownPeriod) {
      const remainingTime = Math.ceil((cooldownPeriod - (now - parseInt(lastSubmitTime))) / 1000);
      setStatus('ratelimit');
      setIsLoading(false);
      console.log(`Rate limited. Try again in ${remainingTime} seconds`);
      return;
    }

    // Validacion basica
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setIsLoading(false);
      return;
    }

    try {
      // Configuracion de EmailJS usando variables de entorno
      console.log('Enviando mail...', formData);

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
          to_email: 'pdspennato@gmail.com',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log('Resultado:', result);
      if (result.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '', website: '' });
        // Store submission time for rate limiting
        localStorage.setItem('lastContactSubmit', now.toString());
      }
    } catch (error) {
      console.error('Error enviando mail:', error);
      console.error('Error completo:', JSON.stringify(error, null, 2));
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 py-16 md:py-20">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Titulo */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-12 md:mb-16 tracking-tight">
          {t('contact.title')}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          
          {/* Informacion de contacto */}
          <motion.div 
            className="space-y-6 md:space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-gray-300">
                {t('contact.description')}
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              
              <div className="flex items-center gap-3 md:gap-4">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-xs md:text-sm font-light">{t('contact.info.email')}</p>
                  <a
                    href="mailto:pdspennato@gmail.com"
                    className="text-gray-300 font-light hover:text-white transition-colors text-sm md:text-base break-all"
                  >
                    pdspennato@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-xs md:text-sm font-light">{t('contact.info.location')}</p>
                  <p className="text-gray-300 font-light text-sm md:text-base">Mar del Plata, Buenos Aires, Argentina</p>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-xs md:text-sm font-light">{t('contact.info.linkedin')}</p>
                  <a
                    href="https://www.linkedin.com/in/pdspennato"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 font-light hover:text-white transition-colors text-sm md:text-base"
                  >
                    linkedin.com/in/pdspennato
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <Github className="w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-xs md:text-sm font-light">{t('contact.info.github')}</p>
                  <a
                    href="https://github.com/pspennato"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 font-light hover:text-white transition-colors text-sm md:text-base"
                  >
                    github.com/pspennato
                  </a>
                </div>
              </div>
              
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div 
            className="space-y-4 md:space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-6 md:mb-8 tracking-tight">
              {t('contact.subtitle')}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Honeypot field - hidden from users, visible to bots */}
              <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.name')}
                  className="w-full p-3 md:p-4 bg-transparent border border-gray-800 rounded-lg text-white font-light placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors text-sm md:text-base"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.email')}
                  className="w-full p-3 md:p-4 bg-transparent border border-gray-800 rounded-lg text-white font-light placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors text-sm md:text-base"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t('contact.form.company')}
                  className="w-full p-3 md:p-4 bg-transparent border border-gray-800 rounded-lg text-white font-light placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors text-sm md:text-base"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.message')}
                  rows={4}
                  className="w-full p-3 md:p-4 bg-transparent border border-gray-800 rounded-lg text-white font-light placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors resize-none text-sm md:text-base"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full p-3 md:p-4 bg-transparent border border-gray-600 rounded-lg text-white font-light transition-colors text-sm md:text-base ${
                  isLoading
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-gray-800'
                }`}
              >
                {isLoading ? t('contact.form.sending') : t('contact.form.submit')}
              </button>
            </form>

            {/* Mensajes de estado */}
            {status === 'success' && (
              <p className="text-green-400 text-sm font-light">
                {t('contact.messages.success')}
              </p>
            )}

            {status === 'error' && (
              <p className="text-red-400 text-sm font-light">
                {t('contact.messages.error')}
              </p>
            )}

            {status === 'ratelimit' && (
              <p className="text-yellow-400 text-sm font-light">
                {t('contact.messages.ratelimit')}
              </p>
            )}

            <p className="text-gray-500 text-xs font-light mt-4">
              {t('contact.guarantee')}
            </p>
          </motion.div>
          
        </div>
        
        {/* Footer */}
        <motion.div 
          className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-xs sm:text-sm font-light">
            {t('contact.footer')}
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}

export default Contact;
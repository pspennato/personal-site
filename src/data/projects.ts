import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'Chlab-iot',
    title: 'CreaLab - Sistema Industrial IoT',
    description: 'Aplicación móvil multiplataforma para monitoreo en tiempo real de equipos industriales. Conectividad Bluetooth LE, arquitectura multi-tenant, protocolo de comunicación personalizado con comandos hexadecimales y sincronización automática.',
    category: 'fullstack',
    technologies: ['Flutter', 'Dart', 'Bluetooth LE', 'SQLite', 'REST APIs', 'IoT', 'Material Design'],
    repository: 'https://github.com/pspennato/crealab-iot',
  },
  {
    id: 'glance-demo-firmware',
    title: 'Glance-Demo - Firmware IoT E-Paper',
    description: 'Firmware embebido completo para nRF52832 con pantalla e-paper táctil. Sistema de widgets dinámicos configurable via JSON, comunicación BLE bidireccional, manejo dual I2C/SPI y procesamiento de imágenes en tiempo real.',
    category: 'firmware',
    technologies: ['C', 'nRF52832', 'ARM Cortex-M4', 'Bluetooth LE', 'I2C', 'SPI', 'E-Paper Display', 'Nordic SDK'],
    repository: 'https://github.com/pspennato/glance-demo',
  },
  {
    id: 'haras-management',
    title: 'Sistema de Gestión de Haras',
    description: 'Plataforma completa para administración de haras de caballos. Gestión de genealogía, reproducción, entrenamiento y finanzas con arquitectura escalable.',
    category: 'fullstack',
    technologies: ['NextJS', 'NestJS', 'PostgreSQL', 'Docker', 'TypeScript'],
    repository: 'https://github.com/pspennato/haras-management',
  },
  {
    id: 'estacionamiento-medido',
    title: 'Sistema de Estacionamiento Medido Mar del Plata',
    description: 'Sistema completo de gestión de estacionamiento medido para la ciudad de Mar del Plata. Proyecto de extensión universitaria con arquitectura web completa.',
    category: 'fullstack',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    id: 'genomics-software',
    title: 'Software Análisis Genómico (BioMath Solutions)',
    description: 'Sistema para análisis de datos genómicos mediante micro-arrays. Proyecto internacional en Texas, Estados Unidos, con procesamiento avanzado de datos biológicos.',
    category: 'backend',
    technologies: ['C++', 'Data Analysis', 'Bioinformatics', 'Statistical Processing'],
  },
];
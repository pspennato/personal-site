
export * from '../data/experience';
export * from '../data/projects';
export * from '../data/skills';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'firmware' | 'backend' | 'frontend' | 'fullstack';
  technologies: string[];
  repository?: string;
  demo?: string;
  image?: string;
}

export interface TechLayer {
  layer: string;
  icon: string;
  technologies: string[];
  experience: string;
  projects: number;
  color: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}
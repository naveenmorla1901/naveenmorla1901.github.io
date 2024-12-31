import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  details: string[];
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface SkillCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
  highlights: string[];
  technical_details: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export interface TimelineItem {
  type: 'work' | 'education';
  period: string;
  title: string;
  organization: string;
  location: string;
  icon: LucideIcon;
  description: string;
  achievements: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  technologies: string[];
}
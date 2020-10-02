export enum LANGUAGE {
  RU = 'ru',
  EN = 'en',
}

export type ElementColorType = 'positive' | 'negative';

export enum SkillCategory {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DEVELOPMENT = 'development',
  OTHERS = 'others',
}

export interface Experience {
  company: string;
  companyIcon: string;
  url?: string;
  industry: string;
  jobTitle: string;
  description: string;
  location: string;
  technologies: number[];
}

export interface Project {
  name: string;
  projectIcon?: string;
  description: string;
  url: string;
  technologies: number[];
}

export interface Skill {
  name: string;
  skillCategory: SkillCategory;
}

export interface Label {
  contactsLabels: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
  sectionLabels: {
    contacts: string;
    experience: string;
    projects: string;
    skills: string;
  };
  experienceLabels: {
    company: string;
    companySite: string;
    location: string;
    industry: string;
    description: string;
    techStack: string;
  };
}

export interface PersonData {
  person: {
    firstName: string;
    lastName: string;
    jobTitle: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
  experience: Experience[];
  projects: Project[];
}

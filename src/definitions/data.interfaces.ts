export enum SkillCategory {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DEVELOPMENT = 'development',
  OTHERS = 'others',
}

export interface Experience {
  company: string;
  companyIcon: string;
  industry: string;
  jobTitle: string;
  description: string;
  location: string;
  technologies: Skill[];
}

export interface Project {
  name: string;
  projectIcon: string;
  description: string;
  url: string;
}

export interface Skill {
  name: string;
  skillCategory: SkillCategory;
}

export interface PersonData {
  person: {
    firstName: string;
    lastName: string;
    jobTitle: string;
  };
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
}

import { PersonData, Skill, SkillCategory } from '../../definitions/data.interfaces';

export const SKILLS_SET: Skill[] = [
  {
    name: 'JavaScript',
    skillCategory: SkillCategory.FRONTEND,
  },
  {
    name: 'TypeScript',
    skillCategory: SkillCategory.FRONTEND,
  },

  {
    name: 'Angular/React/Vue/Ember',
    skillCategory: SkillCategory.FRONTEND,
  },

  {
    name: 'JAVA',
    skillCategory: SkillCategory.BACKEND,
  },

  {
    name: 'PHP',
    skillCategory: SkillCategory.BACKEND,
  },
  {
    name: 'Yii2/Laravel',
    skillCategory: SkillCategory.BACKEND,
  },
];

export const PERSONAL_DATA: PersonData = {
  person: {
    firstName: 'Maksim',
    lastName: 'Tsvetkov',
    jobTitle: 'Senor Frontend Engineer',
  },
  experience: [
    {
      company: 'Avtotor',
      companyIcon: 'avtotor-logo.png',
      url: 'http://www.avtotor.ru/',
      industry: 'Automotive industry',
      jobTitle: 'Lead software engineer / Chief of department',
      description: '',
      location: 'Russia, Kaliningrad',
      technologies: [SKILLS_SET[0], SKILLS_SET[3]],
    },
    {
      company: 'GS Group',
      companyIcon: 'gsgroup-logo.png',
      url: 'https://en.gs-group.com/',
      industry: 'Automotive industry',
      jobTitle: 'Frontend developer',
      description: '',
      location: 'Russia, Gusev',
      technologies: [SKILLS_SET[0], SKILLS_SET[1], SKILLS_SET[2]],
    },
    {
      company: 'Kuehne-Nagel',
      companyIcon: 'kuehne-nagel-logo.png',
      url: 'https://ee.kuehne-nagel.com/en_gb/',
      industry: 'Automotive industry',
      jobTitle: 'Fullstack developer / Senior Frontend engineer',
      description: '',
      location: 'Estonia, Tallinn',
      technologies: [SKILLS_SET[0], SKILLS_SET[3]],
    },
    {
      company: 'Veriff',
      companyIcon: 'veriff-logo.png',
      url: 'https://www.veriff.com/',
      industry: 'Automotive industry',
      jobTitle: 'Senior Frontend engineer',
      description: '',
      location: 'Estonia, Tallinn',
      technologies: [SKILLS_SET[0], SKILLS_SET[1], SKILLS_SET[2]],
    },
  ],
  projects: [],
  skills: SKILLS_SET,
};

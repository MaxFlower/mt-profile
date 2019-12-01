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
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      location: 'Russia, Kaliningrad',
      technologies: [SKILLS_SET[0], SKILLS_SET[3]],
    },
    {
      company: 'GS Group',
      companyIcon: 'gsgroup-logo.png',
      url: 'https://en.gs-group.com/',
      industry: 'Automotive industry',
      jobTitle: 'Frontend developer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      location: 'Russia, Gusev',
      technologies: [SKILLS_SET[0], SKILLS_SET[1], SKILLS_SET[2]],
    },
    {
      company: 'Kuehne-Nagel',
      companyIcon: 'kuehne-nagel-logo.png',
      url: 'https://ee.kuehne-nagel.com/en_gb/',
      industry: 'Automotive industry',
      jobTitle: 'Fullstack developer / Senior Frontend engineer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      location: 'Estonia, Tallinn',
      technologies: [SKILLS_SET[0], SKILLS_SET[3]],
    },
    {
      company: 'Veriff',
      companyIcon: 'veriff-logo.png',
      url: 'https://www.veriff.com/',
      industry: 'Automotive industry',
      jobTitle: 'Senior Frontend engineer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      location: 'Estonia, Tallinn',
      technologies: [SKILLS_SET[0], SKILLS_SET[1], SKILLS_SET[2]],
    },
  ],
  projects: [
    {
      name: 'Guru',
      description:
        'Company Guru offers professional software that allows automation of any kind of institution. Including cinemas, theatres, concert halls, stadiums, museums, touristic sightseeings and other cultural events/institutions.',
      url: 'https://guru.ge/',
      technologies: [SKILLS_SET[0], SKILLS_SET[2]],
    },
    {
      name: 'Extra ETF',
      description:
        'Seit über einem Jahrzehnt stehen wir für schnelle und zuverlässige Informationen im Bereich Exchange Traded Funds (ETF).',
      url: 'https://de.extraetf.com/',
      technologies: [SKILLS_SET[0], SKILLS_SET[2]],
    },
    {
      name: 'Dozor',
      description:
        'TEC electronics has become a leader at the local market and won the trust of many European countries.',
      url: 'https://dozor.tecel.ru/',
      technologies: [SKILLS_SET[0], SKILLS_SET[2]],
    },
  ],
  skills: SKILLS_SET,
};

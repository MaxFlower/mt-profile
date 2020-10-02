import React from 'react';
import { Label, LANGUAGE, PersonData, Project, Skill } from '../definitions/data.interfaces';
import { STATIC_DATA, STATIC_DATA_RU } from '../assets/data';

export interface AppContext {
  personalData: { [language: string]: PersonData | undefined };
  currentLanguage: LANGUAGE;
  skills: Skill[];
  labels: { [language: string]: Label };
}

export const DEFAULT_APP_CONTEXT: AppContext = {
  personalData: {},
  currentLanguage: LANGUAGE.EN,
  skills: [],
  labels: {
    'ru': STATIC_DATA_RU,
    'en': STATIC_DATA,
  }
};

export const AppContext = React.createContext(DEFAULT_APP_CONTEXT);

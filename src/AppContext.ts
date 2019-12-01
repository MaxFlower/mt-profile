import React from 'react';
import { PERSONAL_DATA } from './assets/data/profile';
import { LANGUAGE, PersonData } from './definitions/data.interfaces';

export interface AppContext {
  personalData: PersonData;
  lang: LANGUAGE;
}

export const DEFAULT_APP_CONTEXT: AppContext = {
  personalData: PERSONAL_DATA,
  lang: LANGUAGE.EN,
};

export const AppContext = React.createContext(DEFAULT_APP_CONTEXT);

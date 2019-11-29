import React from 'react';
import { PERSONAL_DATA } from './assets/data/profile';
import { PersonData } from './definitions/data.interfaces';

export interface AppContext {
  personalData: PersonData;
  lang: string;
}

export const DEFAULT_APP_CONTEXT: AppContext = {
  personalData: PERSONAL_DATA,
  lang: 'en',
};

export const AppContext = React.createContext(DEFAULT_APP_CONTEXT);

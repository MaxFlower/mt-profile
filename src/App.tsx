import React, { useState } from 'react';
import styles from './App.module.scss';
import { Contacts, Experience, Header, Projects, Skills } from './components';
import { AppContext, DEFAULT_APP_CONTEXT } from './AppContext';
import { LANGUAGE } from './definitions/data.interfaces';
import { PERSONAL_DATA, PERSONAL_DATA_RU } from './assets/data';

const App: React.FC = () => {
  const [lang, setLang] = useState(DEFAULT_APP_CONTEXT.lang);

  return (
    <AppContext.Provider
      value={{
        lang,
        personalData: lang === LANGUAGE.EN ? PERSONAL_DATA : PERSONAL_DATA_RU,
      }}
    >
      <div className={styles.App}>
        <Header changeLang={(lang) => setLang(lang)} />
        <Contacts />
        <hr />
        <Experience />
        <hr />
        <Projects />
        <hr />
        <Skills />
      </div>
    </AppContext.Provider>
  );
};

export default App;

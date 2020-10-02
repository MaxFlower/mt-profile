import React, { useState, useEffect, useCallback } from 'react';
import { AppContext, DEFAULT_APP_CONTEXT } from './context/AppContext';
import { LANGUAGE, PersonData, Skill } from './definitions/data.interfaces';
import { fetchPersonData, fetchSkillLabels } from './api/internalAPI';
import { Contacts } from './containers/Contacts/Contacts';
import { Skills } from './containers/Skills/Skills';
import { Experience } from './containers/Experience/Experience';
import { Header } from './containers/Header/Header';
import { Projects } from './containers/Projects/Projects';
import styles from './App.module.scss';

const App: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<LANGUAGE>(DEFAULT_APP_CONTEXT.currentLanguage);
  const [personalData, setPersonalData] = useState<{ [language: string]: PersonData | undefined }>(DEFAULT_APP_CONTEXT.personalData!);
  const [skills, setSkills] = useState<Skill[]>(DEFAULT_APP_CONTEXT.skills);

  const handleChange = (selectedLanguage: LANGUAGE) => {
    if (selectedLanguage === currentLanguage) {
      return;
    }
    setCurrentLanguage(selectedLanguage);
  };

  const updatePersonData = useCallback(async  () => {
    const personData  = await fetchPersonData(currentLanguage as string);
    setPersonalData({ ...personalData, [currentLanguage]: personData });
  }, [currentLanguage, personalData]);

  useEffect(() => {
    async function init() {
      await updatePersonData();
      const skills = await fetchSkillLabels();
      setSkills(skills);
    }
    init();
  },[]);

  useEffect(() => {
    if (!personalData[currentLanguage]) {
      updatePersonData();
    }
  }, [personalData, currentLanguage, updatePersonData]);

  return (
    <AppContext.Provider value={{
      currentLanguage,
      personalData,
      skills,
      labels: DEFAULT_APP_CONTEXT.labels
    }}>
      <div className={styles.App}>
        <Header onLanguageChange={handleChange} />
        <Contacts />
        <Experience />
        <Projects />
        <Skills />
      </div>
    </AppContext.Provider>
  );
};

export default App;

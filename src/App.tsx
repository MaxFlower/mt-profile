import React from 'react';
import styles from './App.module.scss';
import { Experience, Header, Projects, Skills } from './components';
import { AppContext, DEFAULT_APP_CONTEXT } from './AppContext';

const App: React.FC = () => {
  return (
    <AppContext.Provider value={DEFAULT_APP_CONTEXT}>
      <div className={styles.App}>
        <Header />
        <Experience />
        <Projects />
        <Skills />
      </div>
    </AppContext.Provider>
  );
};

export default App;

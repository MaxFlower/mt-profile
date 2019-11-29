import React from 'react';
import styles from './App.module.scss';
import { Experience, Header, Projects, Skills } from './components';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
};

export default App;

import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { LANGUAGE } from '../../definitions/data.interfaces';
import styles from './Header.module.scss';

export interface HeaderProps {
  onLanguageChange: (lang: LANGUAGE) => void;
}

export const Header: React.FC<HeaderProps> = ({ onLanguageChange }: HeaderProps) => {
  const { personalData, currentLanguage } = useContext(AppContext);
  const currentData = personalData[currentLanguage];
  const languages = Object.values<string>(LANGUAGE) || [];

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onLanguageChange((e.currentTarget.getAttribute('data-lang') || '') as LANGUAGE);
  };

  const SwitchButton = React.memo<{
    currLanguage: string;
    language: string;
    handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  }>(function SwitchButton({ currLanguage, language, handleClick }) {
    return (
      <button className={language === currLanguage ? styles.active : ''} data-lang={language} onClick={handleClick}>
        {language}
      </button>
    );
  });

  if (!currentData) {
    return <>Loading...</>;
  }

  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerTitle}>
          <h1>{`${currentData.person.firstName} ${currentData.person.lastName} `}</h1>
          <small>{currentData.person.jobTitle}</small>
        </div>
        <div className={styles.langSwitcher}>
          <img src={`/img/${currentLanguage}.png`} alt={currentLanguage} title={currentLanguage} />
          {languages.map((language, index) => (
            <SwitchButton currLanguage={language} language={language} handleClick={handleClick} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

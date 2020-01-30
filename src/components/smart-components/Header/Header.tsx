import React from 'react';
import { AppContext } from '../../../AppContext';
import { LANGUAGE } from '../../../definitions/data.interfaces';
import styles from './Header.module.scss';

export interface HeaderProps {
  changeLang: (lang: LANGUAGE) => void;
}

export const Header: React.FC<HeaderProps> = ({ changeLang }: HeaderProps) => {
  const languages = Object.values<string>(LANGUAGE) || [];

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    changeLang((e.currentTarget.getAttribute('data-lang') || '') as LANGUAGE);
  };

  const SwitchButton = React.memo<{
    currLanguage: string;
    language: string;
    handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  }>(function SwitchButton({ currLanguage, language, handleClick }) {
    return (
      <button
        className={language === currLanguage ? styles.active : ''}
        data-lang={language}
        onClick={handleClick}
      >
        {language}
      </button>
    );
  });

  return (
    <AppContext.Consumer>
      {({ personalData, lang }) => (
        <div className={styles.header}>
          <div className={styles.headerWrapper}>
            <div className={styles.headerTitle}>
              <h1>{`${personalData.person.firstName} ${personalData.person.lastName} `}</h1>
              <small>{personalData.person.jobTitle}</small>
            </div>
            <div className={styles.langSwitcher}>
              <img src={`/img/${lang}.png`} alt={lang} title={lang} />
              {languages.map((language, index) => (
                <SwitchButton currLanguage={lang} language={language} handleClick={handleClick} key={index} />
              ))}
            </div>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

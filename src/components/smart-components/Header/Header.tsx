import React, { useCallback } from 'react';
import { AppContext } from '../../../AppContext';
import { LANGUAGE } from '../../../definitions/data.interfaces';
import styles from './Header.module.scss';

export interface HeaderProps {
  changeLang: (lang: LANGUAGE) => void;
}

export const Header: React.FC<HeaderProps> = ({ changeLang }: HeaderProps) => {
  const languages = Object.values<string>(LANGUAGE) || [];
  const changeLanguage = useCallback(
    (lang: LANGUAGE) => {
      changeLang && changeLang(lang);
    },
    [changeLang]
  );

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
              {languages.map((it) => (
                <button
                  className={it === lang ? styles.active : ''}
                  key={it}
                  onClick={() => changeLanguage(it as LANGUAGE)}
                >
                  {it}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

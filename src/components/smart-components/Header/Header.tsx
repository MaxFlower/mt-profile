import React from 'react';
import { AppContext } from '../../../AppContext';
import styles from './Header.module.scss';
import { IMG_URL } from '../../../constants';
import { LANGUAGE } from '../../../definitions/data.interfaces';

export interface HeaderProps {
  changeLang: (lang: LANGUAGE) => void;
}

export const Header: React.FC<HeaderProps> = ({ changeLang }: HeaderProps) => {
  const changeLanguage = (lang: LANGUAGE) => {
    changeLang(lang);
  };

  return (
    <AppContext.Consumer>
      {({ personalData, lang }) => (
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <h1>{`${personalData.person.firstName} ${personalData.person.lastName} `}</h1>
            <small>{personalData.person.jobTitle}</small>
          </div>
          <div className={styles.langSwitcher}>
            <img src={`${IMG_URL}${lang}.png`} alt={lang} title={lang} />
            <button className={lang === LANGUAGE.EN ? styles.active : ''} onClick={() => changeLanguage(LANGUAGE.EN)}>
              EN
            </button>
            <button className={lang === LANGUAGE.RU ? styles.active : ''} onClick={() => changeLanguage(LANGUAGE.RU)}>
              RU
            </button>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

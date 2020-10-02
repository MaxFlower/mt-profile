import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import ContentRow from '../../components/ContentRow/ContentRow';
import styles from './Contacts.module.scss';

export const Contacts: React.FC = () => {
  const { personalData, labels, currentLanguage } = useContext(AppContext);
  const currentData = personalData[currentLanguage];
  const currentLabels = labels[currentLanguage];

  return (
    <div className={styles.contactsSection}>
      <h3>{currentLabels.sectionLabels.contacts}</h3>
      {currentData && (
        <section>
          <ContentRow
            rowTitle={currentLabels.contactsLabels.email}
            rowContent={<a href={`mailto:${currentData.person.email}`}>{currentData.person.email}</a>}
          />
          <ContentRow rowTitle={currentLabels.contactsLabels.phone} rowContent={currentData.person.phone} />
          <ContentRow
            rowTitle={currentLabels.contactsLabels.github}
            rowContent={<a href={currentData.person.github}>{currentData.person.github}</a>}
          />
          <ContentRow
            rowTitle={currentLabels.contactsLabels.linkedin}
            rowContent={<a href={currentData.person.linkedin}>{currentData.person.linkedin}</a>}
          />
        </section>
      )}
    </div>
  );
};

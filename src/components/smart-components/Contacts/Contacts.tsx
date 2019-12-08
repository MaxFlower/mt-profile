import React from 'react';
import { AppContext } from '../../../AppContext';
import { ContentRow } from '../../dumb-components/ContentRow/ContentRow';
import styles from './Contacts.module.scss';

export const Contacts: React.FC = () => {
  return (
    <AppContext.Consumer>
      {({ personalData }) => (
        <div className={styles.contactsSection}>
          <h3>{personalData.labels.sectionLabels.contacts}</h3>
          <section>
            <ContentRow rowTitle={personalData.labels.contactsLabels.email} rowContent={<a href={`mailto:${personalData.person.email}`}>{personalData.person.email}</a>} />
            <ContentRow rowTitle={personalData.labels.contactsLabels.phone} rowContent={personalData.person.phone} />
            <ContentRow rowTitle={personalData.labels.contactsLabels.github} rowContent={<a href={personalData.person.github}>{personalData.person.github}</a>} />
            <ContentRow rowTitle={personalData.labels.contactsLabels.linkedin} rowContent={<a href={personalData.person.linkedin}>{personalData.person.linkedin}</a>} />
          </section>
        </div>
      )}
    </AppContext.Consumer>
  );
};

import React, { useState } from 'react';
import { AppContext } from '../../../AppContext';
import { Experience as ExperienceItem } from '../../../definitions/data.interfaces';
import { MediaCard } from '../../dumb-components/MediaCard/MediaCard';
import { IMG_URL } from '../../../constants';
import styles from './Experience.module.scss';
import { ContentRow } from '../../dumb-components/ContentRow/ContentRow';
import { Badge } from '../../dumb-components/Badge/Badge';

export const Experience: React.FC = () => {
  const [selectedId, setSelectedId] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setSelectedId(Number(e.currentTarget.getAttribute('data-index')));
  };

  return (
    <AppContext.Consumer>
      {({ personalData }) => (
        <div className={styles.experienceSection}>
          <h3>Experience</h3>
          <div className={styles.verticalStepper}>
            {personalData.experience.map((item: ExperienceItem, index) => (
              <button className={styles.card} onClick={handleClick} key={item.company} data-index={index}>
                <MediaCard bgUrl={`${IMG_URL}${item.companyIcon}`} />
              </button>
            ))}
          </div>
          <section>
            <h3>{personalData.experience[selectedId].jobTitle}</h3>
            <div className={styles.sectionContainer}>
              <div className={styles.sectionColumn}>
                <ContentRow rowTitle={'Company'} rowContent={personalData.experience[selectedId].company} />
                <ContentRow
                  rowTitle={'Company site'}
                  rowContent={
                    <a href={personalData.experience[selectedId].url}>{personalData.experience[selectedId].url}</a>
                  }
                />
                <ContentRow rowTitle={'Location'} rowContent={personalData.experience[selectedId].location} />
                <ContentRow rowTitle={'Industry'} rowContent={personalData.experience[selectedId].industry} />
              </div>
              <div className={styles.sectionColumn}>
                <ContentRow
                  rowTitle={'Description'}
                  rowContent={<p>{personalData.experience[selectedId].description}</p>}
                />
                <ContentRow
                  rowTitle={'Company site'}
                  rowContent={personalData.experience[selectedId].technologies.map((item) => (
                    <Badge key={item.name}>{item.name}</Badge>
                  ))}
                />
              </div>
            </div>
          </section>
        </div>
      )}
    </AppContext.Consumer>
  );
};

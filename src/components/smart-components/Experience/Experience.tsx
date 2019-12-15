import React, { useState } from 'react';
import { AppContext } from '../../../AppContext';
import { Experience as ExperienceItem } from '../../../definitions/data.interfaces';
import { MediaCard } from '../../dumb-components/MediaCard/MediaCard';
import { IMG_URL } from '../../../constants';
import { ContentRow } from '../../dumb-components/ContentRow/ContentRow';
import { Badge } from '../../dumb-components/Badge/Badge';
import styles from './Experience.module.scss';

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
          <h3>{personalData.labels.sectionLabels.experience}</h3>
          <div className={styles.verticalStepper}>
            {personalData.experience.map((item: ExperienceItem, index) => (
              <button
                className={`${styles.card} ${selectedId === index ? styles.active : ''}`}
                onClick={handleClick}
                key={item.company}
                data-index={index}
              >
                <MediaCard bgUrl={`${IMG_URL}${item.companyIcon}`} />
              </button>
            ))}
          </div>
          <section>
            <h3>{personalData.experience[selectedId].jobTitle}</h3>
            <div>
              <ContentRow
                rowTitle={personalData.labels.experienceLabels.company}
                rowContent={personalData.experience[selectedId].company}
              />
              <ContentRow
                rowTitle={personalData.labels.experienceLabels.companySite}
                rowContent={
                  <a href={personalData.experience[selectedId].url}>{personalData.experience[selectedId].url}</a>
                }
              />
              <ContentRow
                rowTitle={personalData.labels.experienceLabels.location}
                rowContent={personalData.experience[selectedId].location}
              />
              <ContentRow
                rowTitle={personalData.labels.experienceLabels.industry}
                rowContent={personalData.experience[selectedId].industry}
              />
              <ContentRow
                rowTitle={personalData.labels.experienceLabels.description}
                rowContent={<p>{personalData.experience[selectedId].description}</p>}
              />
              <ContentRow
                rowTitle={personalData.labels.experienceLabels.techStack}
                rowContent={personalData.experience[selectedId].technologies.map((item) => (
                  <Badge key={item.name}>{item.name}</Badge>
                ))}
              />
            </div>
          </section>
        </div>
      )}
    </AppContext.Consumer>
  );
};

import React, { useState } from 'react';
import { AppContext } from '../../../AppContext';
import { Experience as ExperienceItem } from '../../../definitions/data.interfaces';
import { MediaCard } from '../../dumb-components/MediaCard/MediaCard';
import { ContentRow } from '../../dumb-components/ContentRow/ContentRow';
import { Badge } from '../../dumb-components/Badge/Badge';
import styles from './Experience.module.scss';

export const Experience: React.FC = () => {
  const [selectedId, setSelectedId] = useState(0);

  const SwitchButton = React.memo<{
    index: number;
    handleClick: (e: React.MouseEvent<HTMLElement>) => void;
    item: ExperienceItem;
  }>(function SwitchButton({ index, handleClick, item }) {
    return (
      <button
        className={`${styles.card} ${selectedId === index ? styles.active : ''}`}
        onClick={handleClick}
        data-index={index}
      >
        <MediaCard bgUrl={`/img/${item.companyIcon}`} />
      </button>
    );
  });

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
              <SwitchButton index={index} handleClick={handleClick} item={item} key={item.company} />
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

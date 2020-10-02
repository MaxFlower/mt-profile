import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Experience as ExperienceItem } from '../../definitions/data.interfaces';
import MediaCard from '../../components/MediaCard/MediaCard';
import ContentRow from '../../components/ContentRow/ContentRow';
import Badge from '../../components/Badge/Badge';
import styles from './Experience.module.scss';

export const Experience: React.FC = () => {
  const [selectedId, setSelectedId] = useState(0);
  const { personalData, labels, currentLanguage, skills } = useContext(AppContext);
  const currentData = personalData[currentLanguage];
  const currentLabels = labels[currentLanguage];

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
    <div className={styles.experienceSection}>
      <h3>{currentLabels.sectionLabels.experience}</h3>
      {currentData && (
        <>
          <div className={styles.verticalStepper}>
            {currentData.experience.map((item: ExperienceItem, index) => (
              <SwitchButton index={index} handleClick={handleClick} item={item} key={item.company} />
            ))}
          </div>
          <section>
            <h3>{currentData.experience[selectedId].jobTitle}</h3>
            <div>
              <ContentRow
                rowTitle={currentLabels.experienceLabels.company}
                rowContent={currentData.experience[selectedId].company}
              />
              <ContentRow
                rowTitle={currentLabels.experienceLabels.companySite}
                rowContent={
                  <a href={currentData.experience[selectedId].url}>{currentData.experience[selectedId].url}</a>
                }
              />
              <ContentRow
                rowTitle={currentLabels.experienceLabels.location}
                rowContent={currentData.experience[selectedId].location}
              />
              <ContentRow
                rowTitle={currentLabels.experienceLabels.industry}
                rowContent={currentData.experience[selectedId].industry}
              />
              <ContentRow
                rowTitle={currentLabels.experienceLabels.description}
                rowContent={<p>{currentData.experience[selectedId].description}</p>}
              />
              {skills && (<ContentRow
                rowTitle={currentLabels.experienceLabels.techStack}
                rowContent={currentData.experience[selectedId].technologies.map((item, idx) => (
                  <Badge key={idx}>{skills[item - 1] && skills[item - 1].name}</Badge>
                ))}
              />)}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

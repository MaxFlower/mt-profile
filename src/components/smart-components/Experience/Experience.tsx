import React, { useState, useEffect } from 'react';
import { AppContext } from '../../../AppContext';
import { Experience as ExperienceItem } from '../../../definitions/data.interfaces';
import styles from './Experience.module.scss';
import { MediaCard } from '../../dumb-components/Media-card/MediaCard';
import { IMG_URL } from '../../../constants';

export const Experience: React.FC = () => {
  const [selected, setSelected] = useState(null);

  const selectCard = (e: MouseEvent) => {
    e.preventDefault();
  };

  useEffect(() => {});

  return (
    <AppContext.Consumer>
      {({ personalData }) => (
        <div className={styles.experienceSection}>
          <h3>Experience</h3>
          <div className={styles.verticalStepper}>
            {personalData.experience.map((item: ExperienceItem) => (
              <a className={styles.card} key={item.company}>
                <MediaCard bgUrl={`${IMG_URL}${item.companyIcon}`} />
              </a>
            ))}
          </div>
          <section>
            <h4>Company: <small>Avtotor</small></h4>
          </section>
        </div>
      )}
    </AppContext.Consumer>
  );
};

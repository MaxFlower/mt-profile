import React, { useState, useEffect } from 'react';
import { AppContext } from '../../../AppContext';
import { Experience as ExperienceItem } from '../../../definitions/data.interfaces';
import styles from './Experience.module.scss';

interface IState {
  selected: ExperienceItem;
}

export const Experience: React.FC = () => {
  const [selected, setSelected] = useState(null);

  const selectCard = (e: MouseEvent) => {
    e.preventDefault();
  };

  useEffect(() => {});

  return (
    <AppContext.Consumer>
      {({ personalData }) => (
        <div>
          <h3>Experience</h3>
          <div>
            <div className={styles['vertical-stepper']}>
              {personalData.experience.map((item, index) => (
                <button className={styles['card']} value={index} key={item.company}>
                  {item.company}
                </button>),
              )}
            </div>
            {selected && (<section>
              <h4>title</h4>
            </section>)}
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

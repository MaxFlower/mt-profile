import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export const Projects: React.FC = () => {
  const { labels, currentLanguage } = useContext(AppContext);

  return (
    <div>
      <h3>{labels[currentLanguage].sectionLabels.projects}</h3>
      <div></div>
    </div>
  );
};

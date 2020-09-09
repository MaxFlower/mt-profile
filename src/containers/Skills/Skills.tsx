import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Badge from '../../components/Badge/Badge';

export const Skills: React.FC = () => {
  const { labels, skills, currentLanguage } = useContext(AppContext);

  return (
    <div>
      <h3>{labels[currentLanguage].sectionLabels.skills}</h3>
      <div>
        {skills.map((item) => (
          <Badge key={item.name}>{item.name}</Badge>
        ))}
      </div>
    </div>
  );
};

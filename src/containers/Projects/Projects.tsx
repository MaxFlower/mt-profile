import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Badge from '../../components/Badge/Badge';
import ContentRow from '../../components/ContentRow/ContentRow';

export const Projects: React.FC = () => {
  const { labels, currentLanguage, personalData, skills } = useContext(AppContext);
  const currentData = personalData[currentLanguage];

  console.log(currentData)

  return (
    <div>
      <h3>{labels[currentLanguage].sectionLabels.projects}</h3>
      {currentData &&
        currentData.projects.map(({ name, description, url, technologies }) => (
          <>
            <div>
              <ContentRow rowTitle={'Name'} rowContent={name} />
              <ContentRow rowTitle={'Description'} rowContent={description} />
              <ContentRow rowTitle={'Link'} rowContent={url} />
              {skills && (
                <ContentRow
                  rowTitle={labels[currentLanguage].experienceLabels.techStack}
                  rowContent={technologies.map((item, idx) => (
                    <Badge key={idx}>{skills[item - 1] && skills[item - 1].name}</Badge>
                  ))}
                />
              )}
            </div>
          </>
        ))}
    </div>
  );
};

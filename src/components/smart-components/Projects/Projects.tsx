import React from 'react';
import { AppContext } from '../../../AppContext';

export const Projects: React.FC = () => {
  return (
    <AppContext.Consumer>
      {({ personalData }) => (
        <div>
          <h3>Projects</h3>
          <div>
            {personalData.skills.map((item) => (
              <div key={item.name}>{item.name}</div>
            ))}
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

import React from 'react';
import { AppContext } from '../../../AppContext';
import { Badge } from '../../dumb-components/Badge/Badge';

export const Skills: React.FC = () => {
  return (
    <AppContext.Consumer>
      {({ personalData }) => (
        <div>
          <h3>Skills</h3>
          <div>
            {personalData.skills.map((item) => (
              <Badge key={item.name}>
                {item.name}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

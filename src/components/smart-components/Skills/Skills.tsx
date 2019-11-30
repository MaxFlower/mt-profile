import React from 'react';
import { AppContext } from '../../../AppContext';
import { Badge } from '../../dumb-components/Badge/Badge';
import { SkillCategory } from '../../../definitions/data.interfaces';

export const Skills: React.FC = () => {
  return (
    <AppContext.Consumer>
      {({ personalData }) => (
        <div>
          <h3>Skills</h3>
          <div>
            {personalData.skills.map((item) => (
              <Badge type={item.skillCategory === SkillCategory.FRONTEND ? 'primary' : 'error'} key={item.name}>
                {item.name}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

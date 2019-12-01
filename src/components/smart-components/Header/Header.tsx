import React from 'react';
import { AppContext } from '../../../AppContext';

export const Header: React.FC = () => {
  return (
    <AppContext.Consumer>
      {({ personalData }) => (
        <h1>
          {`${personalData.person.firstName} ${personalData.person.lastName} `}
          <small>{personalData.person.jobTitle}</small>
        </h1>
      )}
    </AppContext.Consumer>
  );
};

import React from 'react';
import { AppContext } from '../../AppContext';

export const Header: React.FC = () => {
  return (
    <AppContext.Consumer>
      {({ personalData }) => (
        <div>
          <h1>{`${personalData.person.firstName} ${personalData.person.lastName}`}</h1>
        </div>
      )}
    </AppContext.Consumer>
  );
};

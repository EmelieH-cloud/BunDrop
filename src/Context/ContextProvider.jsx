import React from 'react';
import { BurgerProvider } from './BurgerContext';
import { DrinksProvider } from './DrinksContext';
import { UserProvider } from './UserContext';

const ContextProvider = ({ children }) => {
  return (
    <BurgerProvider>
      <DrinksProvider>
        <UserProvider>
          {children}
        </UserProvider>
      </DrinksProvider>
    </BurgerProvider>
  );
};

export default ContextProvider;

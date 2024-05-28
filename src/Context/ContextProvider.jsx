import React from 'react';
import { BurgerProvider } from './BurgerContext';
import { DrinksProvider } from './DrinksContext';
import { UserProvider } from './UserContext';
import { DessertProvider } from './DessertsContext';


const ContextProvider = ({ children }) => {
  return (
    <BurgerProvider>
      <DrinksProvider>
        <DessertProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </DessertProvider>
      </DrinksProvider>
    </BurgerProvider>
  );
};

export default ContextProvider;

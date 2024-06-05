import React from 'react';
import { BurgerProvider } from './BurgerContext';
import { DrinksProvider } from './DrinksContext';
import { UserProvider } from './UserContext';
import { DessertProvider } from './DessertsContext';
import { SideProvider } from './SideContext';


const ContextProvider = ({ children }) => {
  return (
    <BurgerProvider>
      <DrinksProvider>
        <DessertProvider>
          <SideProvider>
          <UserProvider>
            {children}
          </UserProvider>
          </SideProvider>
        </DessertProvider>
      </DrinksProvider>
    </BurgerProvider>
  );
};

export default ContextProvider;

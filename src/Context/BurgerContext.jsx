import React, { createContext } from 'react';
import useFetch from '../CustomHooks/useFetch';


export const BurgerContext = createContext();

export const BurgerProvider = ({ children }) => {
  const { data: burgers, loading, error } = useFetch('http://localhost:3000/burgers');

  return (
    <BurgerContext.Provider value={{ burgers, loading, error }}>
      {children}
    </BurgerContext.Provider>
  );
};

export default BurgerContext;
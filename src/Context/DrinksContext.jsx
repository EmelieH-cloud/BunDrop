import React, { createContext } from 'react';
import useFetch from '../CustomHooks/useFetch';


export const DrinksContext = createContext();
export const DrinksProvider = ({ children }) => {
  const { data: drinks, loadingDrinks, errorDrinks} = useFetch('http://localhost:3000/drinks');


  return (
    <DrinksContext.Provider value={{ drinks, loadingDrinks, errorDrinks}}>
      {children}
    </DrinksContext.Provider>
  );
};

export default DrinksContext;
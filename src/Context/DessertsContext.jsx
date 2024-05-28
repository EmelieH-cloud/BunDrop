import React, { createContext } from 'react';
import useFetch from '../CustomHooks/useFetch';


export const DessertsContext = createContext();
export const DessertProvider = ({ children }) => {
  const { data: desserts, loadingDesserts, errorDesserts } = useFetch('http://localhost:3000/desserts');


  return (
    <DessertsContext.Provider value={{ desserts, loadingDesserts, errorDesserts}}>
      {children}
    </DessertsContext.Provider>
  );
};

export default DessertsContext;
import React, { createContext } from 'react';
import useFetch from '../CustomHooks/useFetch';


export const SideContext = createContext();
export const SideProvider = ({ children }) => {
  const { data: sides, loadingSides, errorSides } = useFetch('http://localhost:3000/sides');


  return (
    <SideContext.Provider value={{ sides, loadingSides, errorSides}}>
      {children}
    </SideContext.Provider>
  );
};

export default SideContext;
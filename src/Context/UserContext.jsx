import React, { createContext } from 'react';
import useFetch from '../CustomHooks/useFetch';


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { data: users, loading, error } = useFetch('http://localhost:3000/users');

  return (
    <UserContext.Provider value={{ users, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
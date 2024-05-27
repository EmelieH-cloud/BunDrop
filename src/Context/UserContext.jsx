import React, { createContext, useState } from 'react';
import useFetch from '../CustomHooks/useFetch';

// Variabler--------------------------
export const UserContext = createContext();
const [loggedInUser, setLoggedInUser] = useState(null);
 const {users, loading, error } = useFetch('http://localhost:3000/users');
//------------------------------------

// Provider-komponent 
export function UserProvider({ children }) 
{
   function login(userId) 
  {
    const user = users?.find(u => u.id === userId);
    // om usern med detta id hittades, sätt den som inloggad user. 
    setLoggedInUser(user);
  }

  function logout() 
  {
    // sätt inloggad user till null. 
    setLoggedInUser(null);
  }

  return (
    <UserContext.Provider value={{ users, loading, error, loggedInUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
import React, { createContext, useState, useEffect } from 'react';
import useFetch from '../CustomHooks/useFetch';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const { data: users, loading, error } = useFetch('http://localhost:3000/users');

  useEffect(() => {
    // Uppdatera inloggad användare när användardata har hämtats
    if (!loading && !error && !loggedInUser) {
      setLoggedInUser(users[0]); // Exempel: Sätt den första användaren som inloggad när användardata hämtas
    }
  }, [users, loading, error, loggedInUser]);

  function login(userId) {
    const user = users?.find(u => u.id === userId);
    // om usern med detta id hittades, sätt den som inloggad user. 
    setLoggedInUser(user);
  }

  function logout() {
    // sätt inloggad user till null. 
    setLoggedInUser(null);
  }

  return (
    <UserContext.Provider value={{ users, loading, error, loggedInUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;

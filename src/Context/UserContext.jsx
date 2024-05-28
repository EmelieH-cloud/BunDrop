import React, { createContext, useState, useEffect} from 'react';
import useFetch from '../CustomHooks/useFetch';

export const UserContext = createContext();

export function UserProvider({ children }) 
{
  const [loggedInUser, setLoggedInUser] = useState(null);
  // Hämta alla users
  const { data: users, loading, error } = useFetch('http://localhost:3000/users');
  const [orders, setOrders] = useState([]);

 useEffect(() => {
    if (loggedInUser) // om det finns en inloggad user, hämta dess ordrar 
     {
      fetchOrders(loggedInUser.id);
    }
  }, [loggedInUser]);

  const fetchOrders = async (userId) =>
   {
    try {
      // Hämta alla ordrar med detta userId 
      const response = await fetch(`http://localhost:3000/orders?userId=${userId}`);
      const data = await response.json();
      setOrders(data); // sätt dessa orders till state 
    } catch (error) 
    {
      console.error('Failed to fetch orders:', error);
    }
  };

  function login(userId) 
  {
    const user = users?.find(u => u.id === userId);
    // om usern med detta id hittades, sätt den som inloggad user. 
    setLoggedInUser(user);
  }

  function logout() 
  {
    // sätt inloggad user och orders till null. 
    setLoggedInUser(null);
    setOrders([]);
  }

  return (
      <UserContext.Provider value={{ users, loading, error, loggedInUser, login, logout, orders }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

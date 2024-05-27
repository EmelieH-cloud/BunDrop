import React from 'react'
import {useParams} from "react-router-dom"; 
import {UserContext } from '../Context/UserContext';
import {useState, useContext, useEffect} from "react"; 


function UserProfile() 
{
     const [user, setUser] = useState({}); 
     const [orders, setOrders] = useState([]); 
    const {id} = useParams();
    /* Skicka in UserContext som kontext-objekt. */
   const { users, loading, error } = useContext(UserContext); 

    useEffect(() => 
    {
    // kod som ska köras direkt när komponenten laddas
     if (loading)
     {
      console.log('Loading user data, please wait...');
      return;
    }
    if (error) 
    {
     console.log('An error occurred while fetching users from the database. Please try again later.');
      return;
    }
    // om det gick att hämta users, leta efter usern med detta id 
       const potentialUser = users.find(user => user.id === id);
        
    if (potentialUser)  
    {
        // usern hittades, uppdatera state-variablen. 
       setUser(potentialUser);

       // kolla om usern har några ordrar 
       const userOrders = potentialUser.orders;

       if (userOrders!=null)
       {
            setOrders(userOrders); // Sätt userns ordrar
       }
     
    } 
    else 
    {
      setUser(null); // Ingen user hittades, sätt user till null
    }

  }, []); // tom array som argument för att säkerställa att koden körs en enda gång (i samband med att komponenten monteras.)

 return (
  <> 
    {loading ? (<h1>Loading...</h1>) 
    : user === null ? ( <h1>No user found</h1>) 
    : (
      <div>
        <h1>Welcome, {user.username}</h1>
        {orders.length > 0 && (
          <>
            <h2>Order History:</h2>
            <ul>
              {orders.map(order => (
                <li key={order.orderid}>
                  Order ID: {order.orderid}, Burger ID: {order.burgerId}, Quantity: {order.quantity}, Status: {order.status}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    )}
  </>
)};


export default UserProfile;
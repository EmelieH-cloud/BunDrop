import React from 'react'
import {UserContext } from '../Context/UserContext';
import {useState, useContext, useEffect} from "react"; 


function UserProfile() 
{
     const [orders, setOrders] = useState([]); 
    const { loggedInUser, loading, error } = useContext(UserContext); 
    const { data: ordersData, loading: ordersLoading, error: ordersError } = useFetch('http://localhost:3000/orders');

    useEffect(() =>  {
     if (!ordersLoading && !ordersError && loggedInUser) 
     {
    const userOrders = ordersData?.filter(order => order.userId === loggedInUser.id);
    setOrders(userOrders);
  }
}, [ordersLoading, ordersError, ordersData, loggedInUser]);

if (loading || ordersLoading) {
    return <h1>Loading...</h1>;
  }

  if (error || ordersError) {
    return <h1>An error occurred: {error || ordersError}</h1>;
  }

  if (!loggedInUser) {
    return <h1>No user found</h1>;
  }

 return (
   <div>
      <h1>Welcome, {loggedInUser.username}</h1>
      {orders.length > 0 ? (
        <>
          <h2>Order History:</h2>
          <ul>
            {orders.map(order => (
              <li key={order.id}>
                Order ID: {order.id}, Burger IDs: {order.burgerIds.join(', ')}, Date: {new Date(order.orderDate).toLocaleString()}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>You have no orders yet.</p>
      )}
    </div>
  );
}



export default UserProfile;
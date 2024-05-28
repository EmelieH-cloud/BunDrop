import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import Accordion from 'react-bootstrap/Accordion';


function UserOrders() 
{
  const { orders, loggedInUser } = useContext(UserContext);

  if (!loggedInUser) 
  {
    return <p>Please log in to see your orders.</p>;
  }

  return (
    <>
    <div className='mt-4'>
        <h2>Order History</h2>
      {orders.length > 0 ? (
        <Accordion defaultActiveKey="0" >
          {orders.map((order, index) => (
            <Accordion.Item eventKey={index.toString()} key={order.id}>
              <Accordion.Header>Order ID: {order.id} </Accordion.Header>
              <Accordion.Body>
                <p>Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
                <p>Burgers: {order.burgerIds.join(', ')}</p>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      ) : (
        <p>You have no orders.</p>
      )}
</div>
    </>
  );
}

export default UserOrders;

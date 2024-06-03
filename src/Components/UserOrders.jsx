import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import Accordion from 'react-bootstrap/Accordion';

function UserOrders() {
  const { orders, loggedInUser } = useContext(UserContext);

  if (!loggedInUser) {
    return <p>Please log in to see your orders.</p>;
  }

  const userOrders = orders.filter(order => order.userId === loggedInUser.id);

  return (
    <div className='mt-4'>
      <h2>Order History</h2>
      {userOrders.length > 0 ? (
        <Accordion defaultActiveKey="0">
          {userOrders.map((order, index) => (
            <Accordion.Item eventKey={index.toString()} key={order.id}>
              <Accordion.Header>
                <h4>Order ID: {order.id}</h4>
              </Accordion.Header>
              <Accordion.Body>
                <p>Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
                <p>Delivery Date: {new Date(order.deliveryDate).toLocaleDateString()}</p>
                <h5>Items in this order:</h5>
                <ul>
                  {order.items.map(item => (
                    <li key={item.id}>
                      {item.name} - ${item.price.toFixed(2)}
                    </li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      ) : (
        <p>You have no orders.</p>
      )}
    </div>
  );
}

export default UserOrders;

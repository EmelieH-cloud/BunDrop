import React from 'react'

function Receipt({order}) 
{

    function renderTableRows(items) 
    {
    return order.items.map((item, index) => (
        <li className='fs-4' key={`${item.id}-${index}`}>{item.name}, {item.price} $</li>
    ));
  }

    return ( <>

  <div className='reciept-container'>
  <h2 className='text-center m-4'>Order #{order.id} processed successfully!</h2>
    <div className='d-flex flex-column justify-content-center align-items-center'>
    <h4>In your order:</h4>
     <ul> {renderTableRows(order.items)} </ul>
     <p className='text-center fs-4'> Order date: {order.orderDate}, {order.orderTime}</p>
     <p className='text-center fs-4'> Delivery date: {order.deliveryDate}, {order.deliveryTime}</p>
     </div>
</div>
    </> );
}

export default Receipt;
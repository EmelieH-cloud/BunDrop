function Receipt({ order }) {
  function calculateTotalPrice(items) {
    return items.reduce((total, item) => total + item.price, 0).toFixed(2);
  }

  function renderTableRows(items) {
    return items.map((item, index) => (
      <li className='fs-4' key={`${item.id}-${index}`}>{item.name}, {item.price} $</li>
    ));
  }

  return (
    <>
      <div className='receipt-container'>
        <h2 className='text-center m-4'>Order #{order.id} processed successfully!</h2>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h4>In your order:</h4>
          <ul>{renderTableRows(order.items)}</ul>
          <p className='text-center fs-4'>Total: {calculateTotalPrice(order.items)} $</p>
          <p className='text-center fs-4'>Order date: {order.orderDate}, {order.orderTime}</p>
          <p className='text-center fs-4'>Delivery date: {order.deliveryDate}, {order.deliveryTime}</p>
        </div>
      </div>
    </>
  );
}

export default Receipt;

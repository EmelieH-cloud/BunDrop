
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function CartContent() 
{
    const navigate = useNavigate(); 

    // State-variabel för cartItems i localstorage 
     const [cartItems, setCartItems] = useState(() => 
  {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
   
   // Hämta cartItems så fort någon ändring sker 
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

   // Ta bort allt i localstorage 
 const clearCart = () => 
  {
    setCartItems([]);
     window.location.reload();
  };

  function GoToCheckout()
  {
     navigate('/payment');
  }

    return ( <>
    {cartItems.length > 0 && (
        <div className='d-flex flex-column'>
          {cartItems.map((cartItem, index) => (
            <h5 key={`${cartItem.id}-${index}`}>{cartItem.name}</h5>
          ))}
          <div>
              <button onClick={clearCart}>Clear cart</button>
              <button onClick={GoToCheckout}>Checkout</button>
              </div>
        </div>
    
      )}
    </> );
}

export default CartContent;